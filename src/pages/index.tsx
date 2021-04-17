import { NextSeo } from 'next-seo'

export default function Home(): JSX.Element {
  const transition = 'color 0.15s ease, border-color 0.15s ease'
  return (
    <>
      <NextSeo title="Home" />
      <div className="flex flex-col items-center justify-center min-h-screen px-2 py-0">
        <main className="flex flex-col items-center justify-center flex-1 px-20 py-0">
          <h1 className="m-0 text-center leading-[4.6rem] text-[4rem]">
            Welcome to{' '}
            <a
              className="hover:underline focus:underline active:underline text-[#0070f3]"
              href="https://nextjs.org"
            >
              Next.js!
            </a>
          </h1>

          <p className="text-2xl text-center">
            Get started by editing{' '}
            <code
              className="bg-[#fafafa] rounded-[5px] p-3 text-[1.1rem]"
              style={{
                fontFamily:
                  'Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono,Bitstream Vera Sans Mono, Courier New, monospace',
              }}
            >
              pages/index.js
            </code>
          </p>

          <div className="flex flex-wrap items-center justify-center max-w-[800px] mt-12">
            <a
              href="https://nextjs.org/docs"
              className="m-4 p-6 text-left border border-[#eaeaea] rounded-[10px] hover:text-[#0070f3] hover:border-[#0070f3] focus:text-[#0070f3] focus:border-[#0070f3] active:text-[#0070f3] active:border-[#0070f3]"
              style={{
                transition,
                flexBasis: '45%',
              }}
            >
              <h3 className="mb-4 text-2xl">Documentation &rarr;</h3>
              <p className="text-xl leading-[1.875rem]">
                Find in-depth information about Next.js features and API.
              </p>
            </a>

            <a
              href="https://nextjs.org/learn"
              className="m-4 p-6 text-left border border-[#eaeaea] rounded-[10px] hover:text-[#0070f3] hover:border-[#0070f3] focus:text-[#0070f3] focus:border-[#0070f3] active:text-[#0070f3] active:border-[#0070f3]"
              style={{
                transition,
                flexBasis: '45%',
              }}
            >
              <h3 className="mb-4 text-2xl">Learn &rarr;</h3>
              <p className="text-xl leading-[1.875rem]">
                Learn about Next.js in an interactive course with quizzes!
              </p>
            </a>

            <a
              href="https://github.com/vercel/next.js/tree/master/examples"
              className="m-4 p-6 text-left border border-[#eaeaea] rounded-[10px] hover:text-[#0070f3] hover:border-[#0070f3] focus:text-[#0070f3] focus:border-[#0070f3] active:text-[#0070f3] active:border-[#0070f3]"
              style={{
                transition,
                flexBasis: '45%',
              }}
            >
              <h3 className="mb-4 text-2xl">Examples &rarr;</h3>
              <p className="text-xl leading-[1.875rem]">
                Discover and deploy boilerplate example Next.js projects.
              </p>
            </a>

            <a
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              className="m-4 p-6 text-left border border-[#eaeaea] rounded-[10px] hover:text-[#0070f3] hover:border-[#0070f3] focus:text-[#0070f3] focus:border-[#0070f3] active:text-[#0070f3] active:border-[#0070f3]"
              style={{
                transition,
                flexBasis: '45%',
              }}
            >
              <h3 className="mb-4 text-2xl">Deploy &rarr;</h3>
              <p className="text-xl leading-[1.875rem]">
                Instantly deploy your Next.js site to a public URL with Vercel.
              </p>
            </a>
          </div>
        </main>

        <footer className="w-full h-[100px] border border-[#eaeaea] flex justify-center items-center">
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
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
