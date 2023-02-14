
import { Inter } from '@next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
    <div className="bg-lime-300 text-white p-4 mb-5 rounded-md">
      <p className="text-xl text-black">We are currently in beta. You can ask questions or contribute on <a href="https://discord.gg/8qZ3Y4Z" className="underline">Github</a>.</p>
    </div>
    <h1 className="text-4xl text-gray-50 font-bold">Components</h1>
    <p className="text-xl text-gray-50">Quick guide on how to get setup using the Swell UI components and the new swell-sdk.</p>



  </div>
  )
}
