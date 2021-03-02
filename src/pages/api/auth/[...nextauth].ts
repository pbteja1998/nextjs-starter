import NextAuth, { InitOptions } from 'next-auth'
import Providers from 'next-auth/providers'
import { NextApiHandler } from 'next'
import Fauna from '@/adapters'

import faunadb from 'faunadb'
import slugify from 'slugify'
const useFaunaDocker = process.env.USE_FAUNA_DOCKER === 'true'
const faunaClient = new faunadb.Client({
  secret: process.env.FAUNADB_SECRET ?? 'secret',
  scheme: useFaunaDocker ? 'http' : 'https',
  domain: useFaunaDocker ? 'localhost' : 'db.fauna.com',
  ...(useFaunaDocker ? { port: 8443 } : {}),
})

const authHandler: NextApiHandler = (req, res) => NextAuth(req, res, options)
export default authHandler

type User = Partial<{
  id: string
  username: string
  name: string
  email: string
  image: string
}>

const options: InitOptions = {
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
      scope: 'user:email',
      // @ts-ignore
      profile: (profileData) => {
        return {
          id: profileData.id,
          name: profileData.name || profileData.login,
          email: profileData.email,
          image: profileData.avatar_url,
          username: profileData.login,
        }
      },
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
    Providers.LinkedIn({
      clientId: process.env.LINKEDIN_ID,
      clientSecret: process.env.LINKEDIN_SECRET,
      scope: 'r_liteprofile',
      // @ts-ignore
      profileUrl:
        'https://api.linkedin.com/v2/me?projection=(id,localizedFirstName,localizedLastName,profilePicture(displayImage~digitalmediaAsset:playableStreams))',
      // @ts-ignore
      profile: (profileData) => {
        const profileImage =
          profileData?.profilePicture?.['displayImage~']?.elements?.[3]
            ?.identifiers?.[0]?.identifier ??
          profileData?.profilePicture?.['displayImage~']?.elements?.[2]
            ?.identifiers?.[0]?.identifier ??
          profileData?.profilePicture?.['displayImage~']?.elements?.[1]
            ?.identifiers?.[0]?.identifier ??
          profileData?.profilePicture?.['displayImage~']?.elements?.[0]
            ?.identifiers?.[0]?.identifier ??
          ''
        const name =
          profileData.localizedFirstName + ' ' + profileData.localizedLastName
        const username = slugify(name + ' ' + profileData.id, { lower: true })
        return {
          id: profileData.id,
          name,
          email: null,
          image: profileImage,
          username,
        }
      },
    }),
  ],
  adapter: Fauna.Adapter({ faunaClient }),

  secret: process.env.SECRET,
  callbacks: {
    session: async (session, user: User) => {
      return Promise.resolve({
        ...session,
        user,
      })
    },
  },
}
