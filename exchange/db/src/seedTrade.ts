import { Client } from 'pg'

const client = new Client({
  user: 'your_user',
  host: 'localhost',
  database: 'my_database',
  password: 'your_password',
  port: 5433,
})

async function seed() {
  await client.connect()

  const baseTime = Date.now()
  let price = 100

  for (let i = 0; i < 120; i++) {
    // random walk
    price += (Math.random() - 0.5) * 2

    await client.query(
      `INSERT INTO tata_prices (time, price, volume, currency_code)
       VALUES ($1, $2, $3, $4)`,
      [
        new Date(baseTime + i * 5000), // every 5 sec
        Number(price.toFixed(2)),
        Math.random() * 10 + 1,
        'TATA'
      ]
    )
  }

  await client.end()
  console.log('Sample trade data inserted')
}

seed().catch(console.error)
