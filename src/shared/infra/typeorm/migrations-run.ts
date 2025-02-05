import { createConnection } from 'typeorm'

async function runMigrations() {
  const connection = await createConnection()
  await connection.runMigrations()
  console.log('Migrations executed successfully!')
  await connection.close()
}

runMigrations().catch(error => {
  console.error('Error running migrations:', error)
  process.exit(1)
})
