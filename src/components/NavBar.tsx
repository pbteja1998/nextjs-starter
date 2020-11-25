import classNames from 'classnames'
import { useState } from 'react'
import Link from 'next/link'
import { signIn, signOut, useSession } from 'next-auth/client'

export default function NavBar() {
  const [isNavBarOpen, setIsNavBarOpen] = useState(false)
  const [session, loading] = useSession()
  return (
    <>
      <nav className="bg-gray-800">
        <div className="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* <!-- Mobile menu button--> */}
              <button
                onClick={() => setIsNavBarOpen(!isNavBarOpen)}
                className="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-expanded={isNavBarOpen}
              >
                <span className="sr-only">Open main menu</span>
                {/* Icon when menu is closed. */}
                <svg
                  className={classNames(
                    'w-6 h-6',
                    isNavBarOpen ? 'hidden' : 'block'
                  )}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                {/* Icon when menu is open. */}
                <svg
                  className={classNames(
                    'w-6 h-6',
                    isNavBarOpen ? 'block' : 'hidden'
                  )}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex items-center justify-start flex-1 ml-12 sm:items-stretch">
              <div className="flex items-center flex-shrink-0">
                <Link href="/" passHref={true}>
                  <a>
                    <img
                      className="block w-auto h-8 lg:hidden"
                      src="/logo-small.svg"
                      alt="Workflow"
                    />
                    <span className="sr-only">Logo</span>
                  </a>
                </Link>
                <Link href="/" passHref={true}>
                  <a>
                    <img
                      className="hidden w-auto h-8 lg:block"
                      src="/logo-large.svg"
                      alt="Workflow"
                    />
                    <span className="sr-only">Logo</span>
                  </a>
                </Link>
              </div>
              <div className="hidden sm:block sm:ml-6">
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-md"
                  >
                    Dashboard
                  </a>
                  <a
                    href="#"
                    className="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:text-white hover:bg-gray-700"
                  >
                    Team
                  </a>
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <a
                className="flex items-center px-4 py-2 space-x-2 rounded-md hover:bg-violet-100 group"
                href="https://github.com/pbteja1998/nextjs-starter"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  className="w-5 h-5 text-white fill-current group-hover:text-black"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                <span className="font-semibold text-white group-hover:text-black">
                  GitHub
                </span>
              </a>
              {loading ? (
                <p className="text-white">loading....</p>
              ) : session ? (
                <a
                  onClick={() => signOut()}
                  className="inline-flex items-center justify-center px-4 py-2 ml-8 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm cursor-pointer whitespace-nowrap hover:bg-indigo-700"
                >
                  Sign Out
                </a>
              ) : (
                <a
                  onClick={() => signIn()}
                  className="inline-flex items-center justify-center px-4 py-2 ml-8 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm cursor-pointer whitespace-nowrap hover:bg-indigo-700"
                >
                  Sign In
                </a>
              )}
            </div>
          </div>
        </div>

        <div
          className={classNames('sm:hidden', isNavBarOpen ? 'block' : 'hidden')}
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a
              href="#"
              className="block px-3 py-2 text-base font-medium text-white bg-gray-900 rounded-md"
            >
              Dashboard
            </a>
            <a
              href="#"
              className="block px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:text-white hover:bg-gray-700"
            >
              Team
            </a>
          </div>
        </div>
      </nav>
    </>
  )
}
