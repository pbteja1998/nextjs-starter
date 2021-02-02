import faunadb from 'faunadb'
const q = faunadb.query
const isProduction = process.env.NODE_ENV === 'production'
const client = new faunadb.Client({
  secret: process.env.FAUNADB_SECRET ?? 'secret',
  scheme: isProduction ? 'https' : 'http',
  domain: isProduction ? 'db.fauna.com' : 'localhost',
  ...(isProduction ? {} : { port: 8443 }),
})

async function main() {
  client.query(
    q.Do(
      q.Map(q.Paginate(q.Documents(q.Collection('users'))), (userRef) =>
        q.Delete(userRef)
      ),
      q.Map(q.Paginate(q.Documents(q.Collection('sessions'))), (sessionRef) =>
        q.Delete(sessionRef)
      ),
      q.Map(q.Paginate(q.Documents(q.Collection('accounts'))), (accountRef) =>
        q.Delete(accountRef)
      )
    )
  )
}

main().catch((error) => console.log(error))
