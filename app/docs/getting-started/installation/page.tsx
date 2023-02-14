
import { Inter } from '@next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
    <div className="bg-lime-300 p-4 mb-5 rounded-md">
      <p className="text-xl text-black">We are currently in beta. You can ask questions or contribute on <a href="https://discord.gg/8qZ3Y4Z" className="underline">Github</a>.</p>
    </div>
    <h1 className="text-4xl font-bold text-gray-50">Installation</h1>
    <p className="text-xl text-gray-50">Quick guide on how to get setup using the Swell UI components and the new swell-sdk.</p>

    <h2 className="text-2xl font-bold mt-8 text-gray-50">Install the Swell SDK</h2>
    <p className="text-xl mt-3 text-gray-50">Install the Swell SDK using npm or yarn.</p>
    <pre className="mt-2 bg-gray-800 p-4 rounded-md text-white">
      <code>
        npm install @swellstores/swell-sdk
      </code>
    </pre>

    <h2 className="text-2xl font-bold mt-8 text-gray-50">Get the UI components</h2>
    <p className="text-xl mt-3 text-gray-50">All of the UI components get their data from the @swellstores/swell-sdk</p>
    <p className="text-xl mt-3 text-gray-50">You can access the components by cloning the repo or simply copying and pasting them into your project.</p>
    <p className="text-xl font-bold mt-3">Starting with a new project</p>
    <pre className="mt-2 bg-gray-800 p-4 rounded-md text-white">
      <code>
        git clone https://github.com/swellui/swell-ui.git
      </code>
    </pre>

    <p className="text-xl font-bold mt-3 text-gray-50">Adding to an existing one</p>
    <p className="text-xl my-3 text-gray-50">Copy and paste the components you need into your project.</p>
    <Link href="/docs/components" className="text-xl mt-3 underline text-gray-50">See the components</Link>



  </div>
  )
}
