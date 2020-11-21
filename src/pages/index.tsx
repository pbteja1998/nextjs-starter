import { signIn, signOut, useSession } from 'next-auth/client'
import Image from 'next/image'

export default function Home() {
  const [session, loading] = useSession()

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div className="divide-y divide-gray-100">
      <nav className="p-4">
        <ul className="flex flex-row space-x-2">
          <li className="ml-auto">
            <a
              className="flex items-center px-4 py-2 space-x-2 rounded-md hover:bg-violet-100"
              href="https://github.com/pbteja1998/nextjs-starter"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                className="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              <span className="font-semibold ">GitHub</span>
            </a>
          </li>
          <li>
            {session ? (
              <div className="flex items-center space-x-10">
                <div>
                  <p>
                    {' '}
                    Hello, <b>{session.user.email ?? session.user.name}</b>
                  </p>
                </div>
                <button
                  onClick={() => signOut()}
                  className="block px-4 py-2 text-white rounded-md bg-violet-500"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <>
                <button
                  onClick={() => signIn()}
                  className="block px-4 py-2 text-white rounded-md bg-violet-500"
                >
                  Sign In
                </button>
              </>
            )}
          </li>
        </ul>
      </nav>
      <main>
        <div className="grid grid-cols-1 sm:grid-cols-2 sm:px-8 sm:py-12 sm:gap-x-8 md:py-16">
          <div className="relative z-10 col-start-1 row-start-1 px-4 pt-40 pb-3 bg-gradient-to-t from-black sm:bg-none">
            <p className="text-sm font-medium text-white sm:mb-1 sm:text-gray-500">
              Entire house
            </p>
            <h2 className="text-xl font-semibold text-white sm:text-2xl sm:leading-7 sm:text-black md:text-3xl">
              Beach House in Collingwood
            </h2>
          </div>
          <div className="col-start-1 row-start-2 px-4 sm:pb-16">
            <div className="flex items-center my-5 text-sm font-medium sm:mt-2 sm:mb-4">
              <svg
                width="20"
                height="20"
                fill="currentColor"
                className="text-violet-600"
              >
                <path d="M9.05 3.691c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.372 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.539 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118l-2.8-2.034c-.784-.57-.381-1.81.587-1.81H7.03a1 1 0 00.95-.69L9.05 3.69z" />
              </svg>
              <div className="ml-1">
                <span className="text-black">4.94</span>
                <span className="sm:hidden md:inline">(128)</span>
              </div>
              <div className="mx-2 text-base font-normal">·</div>
              <div>Collingwood, Ontario</div>
            </div>
            <hr className="hidden w-16 border-gray-300 sm:block" />
          </div>
          <div className="col-start-1 row-start-3 px-4 space-y-3">
            <div className="flex items-center text-sm font-medium text-black">
              <Image
                width={24}
                height={24}
                src="https://tailwindcss.com/_next/static/media/kevin-francis.95a74da39516100146502062fa60d296.jpg"
                alt=""
                className="rounded-full"
              />
              <p className="ml-2">Hosted by Kevin Francis</p>
            </div>
            <button
              type="button"
              className="px-6 py-2 text-base font-semibold rounded-lg text-violet-700 bg-violet-100"
            >
              Check availability
            </button>
          </div>
          <div className="flex col-start-1 row-start-1 sm:col-start-2 sm:row-span-3">
            <div className="grid w-full grid-cols-3 grid-rows-2 gap-2">
              <div className="relative col-span-3 row-span-2 md:col-span-2">
                <Image
                  src="https://tailwindcss.com/_next/static/media/beach-house.dc0f86781422bcb8f89e64d49cd7adf6.jpg"
                  layout="fill"
                  alt=""
                  className="absolute inset-0 object-cover bg-gray-100 sm:rounded-lg"
                />
              </div>
              <div className="relative hidden md:block">
                <Image
                  src="https://tailwindcss.com/_next/static/media/beach-house-interior.13945f821153afd28151b5dac3e5d713.jpg"
                  alt=""
                  layout="fill"
                  className="absolute inset-0 object-cover bg-gray-100 rounded-lg"
                />
              </div>
              <div className="relative hidden md:block">
                <Image
                  src="https://tailwindcss.com/_next/static/media/beach-house-view.bf6f10434bf4589aebba4d3c33834cc2.jpg"
                  alt=""
                  layout="fill"
                  className="absolute inset-0 object-cover bg-gray-100 rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
