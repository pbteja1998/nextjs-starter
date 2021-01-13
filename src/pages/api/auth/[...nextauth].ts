import NextAuth, { InitOptions } from 'next-auth'
import Providers from 'next-auth/providers'
import { NextApiHandler } from 'next'
import faunadb from 'faunadb'
import Fauna from '@/adapters'

const faunaClient = new faunadb.Client({
  secret: process.env.FAUNADB_SECRET,
})

const authHandler: NextApiHandler = (req, res) => NextAuth(req, res, options)
export default authHandler

const options: InitOptions = {
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
      scope: 'user:email',
    }),
    Providers.Email({
      server: {
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT),
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASSWORD,
        },
      },
      from: process.env.SMTP_FROM,
    }),
  ],
  adapter: Fauna.Adapter({ faunaClient }),

  secret: process.env.SECRET,
}
