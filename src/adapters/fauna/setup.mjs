import faunadb from 'faunadb'
const q = faunadb.query
const useFaunaDocker = process.env.USE_FAUNA_DOCKER === 'true'
const client = new faunadb.Client({
  secret: process.env.FAUNADB_SECRET ?? 'secret',
  scheme: useFaunaDocker ? 'http' : 'https',
  domain: useFaunaDocker ? 'localhost' : 'db.fauna.com',
  ...(useFaunaDocker ? { port: 8443 } : {}),
})

async function main() {
  await client.query(q.CreateCollection({ name: 'accounts' }))
  await client.query(q.CreateCollection({ name: 'sessions' }))
  await client.query(q.CreateCollection({ name: 'users' }))
  await client.query(q.CreateCollection({ name: 'verification_requests' }))

  await client.query(
    q.CreateIndex({
      name: 'account_by_provider_account_id',
      source: q.Collection('accounts'),
      unique: true,
      terms: [
        { field: ['data', 'providerId'] },
        { field: ['data', 'providerAccountId'] },
      ],
    })
  )

  await client.query(
    q.CreateIndex({
      name: 'session_by_token',
      source: q.Collection('sessions'),
      unique: true,
      terms: [{ field: ['data', 'sessionToken'] }],
    })
  )

  await client.query(
    q.CreateIndex({
      name: 'user_by_email',
      source: q.Collection('users'),
      unique: true,
      terms: [{ field: ['data', 'email'] }],
    })
  )

  await client.query(
    q.CreateIndex({
      name: 'verification_request_by_token',
      source: q.Collection('verification_requests'),
      unique: true,
      terms: [{ field: ['data', 'token'] }],
    })
  )

  await client.query(
    q.CreateIndex({
      name: 'user_by_username',
      source: q.Collection('users'),
      unique: true,
      terms: [{ field: ['data', 'username'] }],
    })
  )
}

main().catch((error) => console.log(error))
