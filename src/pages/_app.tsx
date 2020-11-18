import 'tailwindcss/tailwind.css'
import '../styles/globals.css'
import { ReactQueryDevtools } from 'react-query-devtools'

import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <ReactQueryDevtools initialIsOpen={false} />
    </>
  )
}

export default MyApp
