import { signIn, signOut, useSession } from 'next-auth/client'
import { NextSeo } from 'next-seo'

import { A } from '@/components'

export default function Home(): JSX.Element {
  const [session, loading] = useSession()
  const transition = 'color 0.15s ease, border-color 0.15s ease'
  return (
    <>
      <NextSeo title="Home" />
      <div className="flex flex-col items-center justify-center min-h-screen px-2 py-0">
        <main className="flex flex-col items-center justify-center flex-1 px-20 py-0">
          <h1 className="m-0 text-center leading-[4.6rem] text-[4rem]">
            Welcome to{' '}
            <A
              className="hover:underline focus:underline active:underline text-[#0070f3]"
              href="https://github.com/pbteja1998/nextjs-starter"
            >
              Next.js Starter!
            </A>
          </h1>

          <p className="mt-4 text-2xl text-center">
            {session ? (
              <>
                Signed in as{' '}
                <code
                  className="bg-[#fafafa] rounded-[5px] p-3 text-[1.1rem]"
                  style={{
                    fontFamily:
                      'Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono,Bitstream Vera Sans Mono, Courier New, monospace',
                  }}
                >
                  {session.user && (session.user.email as string)}
                </code>
              </>
            ) : (
              'Not Signed in!'
            )}
            {session ? (
              <button
                type="button"
                onClick={() => signOut()}
                className="inline-flex items-center justify-center px-4 py-2 ml-8 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm cursor-pointer whitespace-nowrap hover:bg-indigo-700"
              >
                Sign Out
              </button>
            ) : (
              <button
                type="button"
                onClick={() => signIn()}
                className="inline-flex items-center justify-center px-4 py-2 ml-8 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm cursor-pointer whitespace-nowrap hover:bg-indigo-700"
              >
                Sign In
              </button>
            )}
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center max-w-[800px] mt-12">
            <A
              href="https://github.com/pbteja1998/nextjs-starter/blob/master/README.md"
              className="m-4 p-6 text-left border border-[#eaeaea] rounded-[10px] hover:text-[#0070f3] hover:border-[#0070f3] focus:text-[#0070f3] focus:border-[#0070f3] active:text-[#0070f3] active:border-[#0070f3]"
              style={{
                transition,
                flexBasis: '45%',
              }}
            >
              <h3 className="mb-4 text-2xl">Documentation &rarr;</h3>
              <p className="text-xl leading-[1.875rem]">
                Find info about nextjs-starter template features.
              </p>
            </A>

            <A
              href="https://github.com/pbteja1998/nextjs-starter/issues/new"
              className="m-4 p-6 text-left border border-[#eaeaea] rounded-[10px] hover:text-[#0070f3] hover:border-[#0070f3] focus:text-[#0070f3] focus:border-[#0070f3] active:text-[#0070f3] active:border-[#0070f3]"
              style={{
                transition,
                flexBasis: '45%',
              }}
            >
              <h3 className="mb-4 text-2xl">Issue &rarr;</h3>
              <p className="text-xl leading-[1.875rem]">
                Open an issue on GitHub if you face any problems.
              </p>
            </A>

            <A
              href="https://github.com/pbteja1998/nextjs-starter/blob/master/README.md#faq"
              className="m-4 p-6 text-left border border-[#eaeaea] rounded-[10px] hover:text-[#0070f3] hover:border-[#0070f3] focus:text-[#0070f3] focus:border-[#0070f3] active:text-[#0070f3] active:border-[#0070f3]"
              style={{
                transition,
                flexBasis: '45%',
              }}
            >
              <h3 className="mb-4 text-2xl">FAQs &rarr;</h3>
              <p className="text-xl leading-[1.875rem]">
                Go through the frequently asked questions for your questions.
              </p>
            </A>

            <A
              href="https://github.com/pbteja1998/nextjs-starter/blob/master/README.md#deploying"
              className="m-4 p-6 text-left border border-[#eaeaea] rounded-[10px] hover:text-[#0070f3] hover:border-[#0070f3] focus:text-[#0070f3] focus:border-[#0070f3] active:text-[#0070f3] active:border-[#0070f3]"
              style={{
                transition,
                flexBasis: '45%',
              }}
            >
              <h3 className="mb-4 text-2xl">Deploy &rarr;</h3>
              <p className="text-xl leading-[1.875rem]">
                Instantly deploy a next-starter site to a public URL with
                Vercel.
              </p>
            </A>
          </div>
        </main>

        <footer className="w-full h-[100px] border border-[#eaeaea] flex justify-center items-center">
          <a
            href="https://vercel.com/new?utm_source=pbteja1998-nextjs-starter&utm_medium=default-template&utm_campaign=pbteja1998-nextjs-starter"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center"
          >
            Powered by{' '}
            <img src="/vercel.svg" alt="Vercel Logo" className="ml-2 h-[1em]" />
          </a>
        </footer>
      </div>
    </>
  )
}

Home.layoutProps = {
  Layout: (props: unknown) => (
    <div className="border-l-8 border-blue-700" {...props} />
  ),
}
