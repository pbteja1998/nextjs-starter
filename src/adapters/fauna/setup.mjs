import faunadb from 'faunadb'
const q = faunadb.query
const client = new faunadb.Client({
  secret: process.env.FAUNA_SECRET,
})

async function main() {
  await client.query(q.CreateCollection({ name: 'account' }))
  await client.query(q.CreateCollection({ name: 'session' }))
  await client.query(q.CreateCollection({ name: 'user' }))
  await client.query(q.CreateCollection({ name: 'verification_request' }))

  await client.query(
    q.CreateIndex({
      name: 'account_by_provider_account_id',
      source: q.Collection('account'),
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
      source: q.Collection('session'),
      unique: true,
      terms: [{ field: ['data', 'sessionToken'] }],
    })
  )

  await client.query(
    q.CreateIndex({
      name: 'user_by_email',
      source: q.Collection('user'),
      unique: true,
      terms: [{ field: ['data', 'email'] }],
    })
  )

  await client.query(
    q.CreateIndex({
      name: 'vertification_request_by_token',
      source: q.Collection('verification_request'),
      unique: true,
      terms: [{ field: ['data', 'token'] }],
    })
  )
}

main()
