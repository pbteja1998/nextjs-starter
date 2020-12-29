import Head from 'next/head'

export default function Description({ children }: { children: string }) {
  const description = children
  return (
    <Head>
      <meta
        key="twitter:description"
        name="twitter:description"
        content={description}
      />
      <meta
        key="og:description"
        property="og:description"
        content={description}
      />
      <meta key="description" name="description" content={description} />
    </Head>
  )
}
