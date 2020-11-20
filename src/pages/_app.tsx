import 'tailwindcss/tailwind.css'
import '../styles/globals.css'
import Head from 'next/head'
import { ReactQueryDevtools } from 'react-query-devtools'
import type { AppProps } from 'next/app'
import { Provider } from 'next-auth/client'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider session={pageProps.session}>
      <Head>
        <title>Next Starter</title>
        <meta property="og:title" content="Next Starter" key="title" />
        <meta
          property="og:description"
          content="Next Starter Template with Next.js 10 + React 17 + Typescript + ESLint + Prettier + Husky + Tailwind CSS 2.0 + React Query + Tabler Icons + Phosphor Icons"
          key="description"
        />
        <meta
          name="description"
          property="og:description"
          content="Next Starter Template with Next.js 10 + React 17 + Typescript + ESLint + Prettier + Husky + Tailwind CSS 2.0 + React Query + Tabler Icons + Phosphor Icons"
        />
        <meta charSet="utf-8" key="charSet" />
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
          key="viewport"
        />
      </Head>
      <Component {...pageProps} />
      <ReactQueryDevtools initialIsOpen={false} />
    </Provider>
  )
}

export default MyApp
