import faunadb from 'faunadb'

import { env } from '@/constants/env'

export function getFaunaClient(): faunadb.Client {
  const useFaunaDocker = env.USE_FAUNA_DOCKER === 'true'
  return new faunadb.Client({
    secret: useFaunaDocker ? 'secret' : env.FAUNADB_SECRET,
    scheme: useFaunaDocker ? 'http' : 'https',
    domain: useFaunaDocker ? 'localhost' : 'db.fauna.com',
    ...(useFaunaDocker ? { port: 8443 } : {}),
  })
}
