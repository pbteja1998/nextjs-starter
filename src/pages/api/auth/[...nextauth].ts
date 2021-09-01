import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'
import slugify from 'slugify'

import Fauna from '@/adapters'
import { env } from '@/constants/env'
import { getFaunaClient } from '@/utils'

type GitHubEmailResponse = {
  email: string
  primary: boolean
  verified: true
  visibility: string | null
}

export default NextAuth({
  providers: [
    Providers.Email({
      server: env.EMAIL_SERVER,
      from: env.EMAIL_FROM,
    }),
    Providers.GitHub({
      clientId: env.GITHUB_ID,
      clientSecret: env.GITHUB_SECRET,
      scope: 'user:email',
      profile: async (profileData, tokens) => {
        const name = (profileData.name ?? profileData.login) as string
        const { accessToken } = tokens
        const emails: GitHubEmailResponse[] = await fetch(
          'https://api.github.com/user/emails',
          {
            headers: {
              Authorization: `token ${accessToken}`,
            },
          }
        ).then((res) => res.json())
        const primaryEmail = (emails.find((e: GitHubEmailResponse) => e.primary)
          ?.email ?? profileData.email) as string
        return {
          id: profileData.id as string,
          name,
          email: primaryEmail,
          image: profileData.avatar_url as string,
          username: profileData.login as string,
        }
      },
    }),
    Providers.LinkedIn({
      clientId: env.LINKEDIN_ID,
      clientSecret: env.LINKEDIN_SECRET,
      scope: 'r_liteprofile r_emailaddress',
      profileUrl:
        'https://api.linkedin.com/v2/me?projection=(id,localizedFirstName,localizedLastName,profilePicture(displayImage~digitalmediaAsset:playableStreams))',
      profile: async (profileData, tokens) => {
        const DISPLAY_IMAGE = 'displayImage~'
        const profileImage =
          // @ts-expect-error Object is of type 'unknown'.ts(2571)
          profileData?.profilePicture?.[DISPLAY_IMAGE]?.elements?.[3]
            ?.identifiers?.[0]?.identifier ??
          // @ts-expect-error Object is of type 'unknown'.ts(2571)
          profileData?.profilePicture?.[DISPLAY_IMAGE]?.elements?.[2]
            ?.identifiers?.[0]?.identifier ??
          // @ts-expect-error Object is of type 'unknown'.ts(2571)
          profileData?.profilePicture?.[DISPLAY_IMAGE]?.elements?.[1]
            ?.identifiers?.[0]?.identifier ??
          // @ts-expect-error Object is of type 'unknown'.ts(2571)
          profileData?.profilePicture?.[DISPLAY_IMAGE]?.elements?.[0]
            ?.identifiers?.[0]?.identifier ??
          ''
        const { id, localizedFirstName, localizedLastName } = profileData
        const name =
          (localizedFirstName as string) + (localizedLastName as string)
        const username = slugify(`${name} ${id as string}`, { lower: true })
        const { accessToken } = tokens
        const emailResponse = await fetch(
          'https://api.linkedin.com/v2/emailAddress?q=members&projection=(elements*(handle~))',
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        ).then((res) => res.json())
        return {
          id: id as string,
          name,
          email:
            emailResponse?.elements?.[0]?.['handle~']?.emailAddress ?? null,
          image: profileImage,
          username,
        }
      },
    }),
  ],
  secret: env.SECRET,
  adapter: Fauna.Adapter({ faunaClient: getFaunaClient() }),
  callbacks: {
    session: async (session, user) => {
      return Promise.resolve({
        ...session,
        user: {
          ...user,
        },
      })
    },
  },
})
