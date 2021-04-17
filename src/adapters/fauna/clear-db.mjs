import faunadb from 'faunadb'

const q = faunadb.query
const useFaunaDocker = process.env.USE_FAUNA_DOCKER === 'true'
const client = new faunadb.Client({
  secret: useFaunaDocker ? 'secret' : process.env.FAUNADB_SECRET,
  scheme: useFaunaDocker ? 'http' : 'https',
  domain: useFaunaDocker ? 'localhost' : 'db.fauna.com',
  ...(useFaunaDocker ? { port: 8443 } : {}),
})

async function main() {
  await client.query(
    q.Do(
      q.Map(q.Paginate(q.Documents(q.Collection('users'))), (userRef) =>
        q.Delete(userRef)
      ),
      q.Map(q.Paginate(q.Documents(q.Collection('sessions'))), (sessionRef) =>
        q.Delete(sessionRef)
      ),
      q.Map(q.Paginate(q.Documents(q.Collection('accounts'))), (accountRef) =>
        q.Delete(accountRef)
      ),
      q.Map(
        q.Paginate(q.Documents(q.Collection('verification_requests'))),
        (verificationRequestRef) => q.Delete(verificationRequestRef)
      )
    )
  )
  console.log('DONE')
}

main().catch((error) => console.log(error))
