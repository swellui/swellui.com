import Image from 'next/image'
import { Inter } from '@next/font/google'
import Link from 'next/link'
import { StarIcon } from '@heroicons/react/24/solid'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <h1 className="text-2xl text-black">Docs</h1>
    </div>
  )
}
