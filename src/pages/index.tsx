import Vercel from '../assets/vercel.svg'
import { Example } from '../components'

export default function Home() {
  return (
    <>
      <Vercel className="h-4" />
      <Example />
      <h1 className="text-2xl bg-green-100">Hello World</h1>
      <p className="text-accent-1 ml-2.5">Accent Color Text</p>
    </>
  )
}
