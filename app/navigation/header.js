/* This example requires Tailwind CSS v2.0+ */

import Link from 'next/link'
const pages =[
  {name: 'Components', href: '/docs/components'},
  {name: 'Docs', href: '/docs'},
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Header() {
  return (
      <div className="sticky top-0 z-20 w-full bg-[#12011F] backdrop-blur-xl border-b border-gray-900 shadow-lg">
        <div className="px-3 md:px-6 lg:px-10">
          <div className="relative flex items-center justify-between h-16">
            <div className="flex items-center px-2 lg:px-0">
              <div className="flex-shrink-0">
                <Link href="/" className="text-gray-50 font-bold">
                  SwellUI
                </Link>
              </div>
            </div>
            <div className="hidden md:flex items-center justify-start space-x-2 md:space-x-5">
              {pages.map((page, i) => (
                <Link key={i} href={page.href} className="text-gray-50">{page.name}</Link>
              ))}
            </div>
            <div>
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <a href="https://github.com/swellstores/swell-sdk" className="border border-gray-50 text-gray-50 px-1 md:px-3 py-2 rounded-md text-xs md:text-md">Github</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
