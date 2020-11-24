import { useSession } from 'next-auth/client'
import Image from 'next/image'

export default function Home() {
  const [session] = useSession()
  return (
    <div className="divide-y divide-gray-100">
      <main>
        <div className="p-10">
          {session && (
            <p>
              Hello, <b>{session.user.email ?? session.user.name}</b>
            </p>
          )}
        </div>

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
                src="/kevin-francis.jpg"
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
                  src="/beach-house-1.jpg"
                  layout="fill"
                  alt=""
                  className="absolute inset-0 object-cover bg-gray-100 sm:rounded-lg"
                />
              </div>
              <div className="relative hidden md:block">
                <Image
                  src="/beach-house-2.jpg"
                  alt=""
                  layout="fill"
                  className="absolute inset-0 object-cover bg-gray-100 rounded-lg"
                />
              </div>
              <div className="relative hidden md:block">
                <Image
                  src="/beach-house-3.jpg"
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
