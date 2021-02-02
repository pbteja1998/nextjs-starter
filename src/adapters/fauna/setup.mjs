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
  await client.query(
    q.Do(
      q.CreateCollection({ name: 'accounts' }),
      q.CreateCollection({ name: 'sessions' }),
      q.CreateCollection({ name: 'users' }),
      q.CreateCollection({ name: 'verification_requests' }),
      q.CreateIndex({
        name: 'account_by_provider_account_id',
        source: q.Collection('accounts'),
        unique: true,
        terms: [
          { field: ['data', 'providerId'] },
          { field: ['data', 'providerAccountId'] },
        ],
      }),
      q.CreateIndex({
        name: 'session_by_token',
        source: q.Collection('sessions'),
        unique: true,
        terms: [{ field: ['data', 'sessionToken'] }],
      }),
      q.CreateIndex({
        name: 'user_by_email',
        source: q.Collection('users'),
        unique: true,
        terms: [{ field: ['data', 'email'] }],
      }),
      q.CreateIndex({
        name: 'verification_request_by_token',
        source: q.Collection('verification_requests'),
        unique: true,
        terms: [{ field: ['data', 'token'] }],
      })
    )
  )
}

main()
