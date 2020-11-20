import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next'
import { getSession } from 'next-auth/client'

const secretHandler: NextApiHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const session = await getSession({ req })
  if (session) {
    res.end(
      `Welcome to the mega secret VIP club, ${
        session.user.email ?? session.user.name
      }`
    )
  } else {
    res.statusCode = 403
    res.end(`Hold on, you are not allowed in here!`)
  }
}

export default secretHandler
