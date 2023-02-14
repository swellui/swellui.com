import Image from 'next/image'
import { Inter } from '@next/font/google'
import Link from 'next/link'
import { StarIcon } from '@heroicons/react/24/solid'
import Header from './navigation/header'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
     <div className="relative py-10 md:py-20 bg-[#12011F] h-full">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5 items-center">
            <div className="relative col-span-1 md:col-span-2 px-5 md:px-0">
              <h1 className="text-3xl md:text-5xl font-bold uppercase text-black dark:text-gray-100">
                Build Better E-Commerce Websites, Faster.
              </h1>
              <p className="mt-5 md:mt-10 text-base md:text-xl font-light text-gray-200 w-full max-w-2xl">Swell UI is a set of components made using Tailwind CSS specifically for e-commerce websites. Copy and paste our components directly into your website.</p>

              <div className="mt-10 flex flex-col md:flex-row items-center md:space-x-3">
                <a href="https://github.com/swellstores/swell-sdk" className="bg-[#D6FB6F] font-bold rounded-md px-5 py-3 text-[#57349B] w-full md:w-[200px] text-center" rel="noreferrer">
                  Install @swell-sdk
                </a>
                <Link href="/docs/components" className="px-5 py-3 text-gray-100 w-full md:w-auto text-center">
                  See Components
                </Link>
              </div>
            </div>
            <div className="relative col-span-1 px-5 md:px-0">
              <div className="relative border border-white border-opacity-30 bg-[#12011F] rounded-md shadow-lg flex flex-col z-10">
                <div className="h-[275px] md:h-[350px] w-full relative overflow-hidden rounded-tl-md rounded-tr-md">
                  <Image src="/sike-dunk.png" alt="sike dunk shoes" fill className="object-cover object-center"/>
                </div>
                <div className="p-5">
                  <span className="rounded-full px-3 py-0.5 border border-[#D6FB6F] text-[#D6FB6F] opacity-50 font-bolder uppercase text-[10px]">Trending</span>
                  <div className="mt-2 flex items-center justify-between">
                    <h2 className="text-xl font-bold text-white">Sike Air Jumper</h2>
                    <p className="text-xl font-light text-white opacity-50">$120</p>
                  </div>
                  <p className="text-gray-50 opacity-50 font-light">Men&apos;s Shoe</p>
                  <div className="mt-5 flex items-center space-x-3">
                    <div className="cursor-pointer rounded-full border-2 border-white w-10 h-10 flex items-center justify-center">
                      <div className="rounded-full bg-[#57349B] w-8 h-8" />
                    </div>
                    <div className="cursor-pointer rounded-full bg-[#D6FB6F] w-10 h-10 flex items-center justify-center">
                    </div>
                    <div className="cursor-pointer rounded-full bg-[#DD9763] w-10 h-10 flex items-center justify-center">
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-end">
                <span className="mt-2 text-[10px] font-bolder text-white opacity-50 uppercase">Product Preview</span>
              </div>
              <div className="blur-2xl bg-[#57349b] opacity-50 absolute md:-inset-x-10 -inset-y-0 rounded-lg shadow-lg p-20" />
            </div>
          </div>
          {/* <div className="blur-2xl bg-[#57349b] opacity-30 absolute inset-x-0 -top-14 rounded-lg shadow-lg p-10" /> */}
          <div className="blur-2xl bg-[#57349b] opacity-30 absolute inset-x-0 -bottom-20 rounded-lg shadow-lg p-8" />
        </div>
        <div className="relative py-10 md:py-20 bg-[#0A0011]">
          <div className="max-w-7xl mx-auto px-5 md:px-0">
            <div className="flex items-center justify-between">
              <h2 className="uppercase text-3xl text-white font-bold">Components</h2>
              <Link href="/components" className="text-[#D6FB6F] font-semibold text-sm uppercase">See All</Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">
              <div className="relative col-span-1 md:col-span-2">
                <div className="flex justify-end md:justify-start">
                  <span className="text-[10px] font-bolder text-white opacity-50 uppercase">Product Images</span>
                </div>
                <div className="relative mt-2 z-10 h-[300px] md:h-[500px] rounded-md overflow-hidden shadow-lg">
                  <Image src="/sike-dunk-green.png" alt="sike dunk shoes" fill className="object-cover object-center"/>
                </div>
                <div className="grid grid-cols-3 md:grid-cols-6 gap-5 mt-5">
                  <div className="relative border-2 border-[#D6FB6F] col-span-1 h-24 md:h-28 rounded-md overflow-hidden shadow-lg">
                    <Image src="/sike-dunk-green.png" alt="sike dunk shoes" fill className="object-cover object-center"/>
                  </div>
                  <div className="relative col-span-1 h-24 md:h-28 rounded-md overflow-hidden shadow-lg">
                    <Image src="/sike-dunk.png" alt="sike dunk shoes" fill className="object-cover object-center"/>
                  </div>
                  <div className="relative col-span-1 h-24 md:h-28 rounded-md overflow-hidden shadow-lg">
                    <Image src="/sike-dunk-blur.png" alt="sike dunk shoes" fill className="object-cover object-center"/>
                  </div>
                  <div className="relative hidden md:block col-span-1 h-24 md:h-28 rounded-md overflow-hidden shadow-lg">
                    <Image src="/sike-dunk-green.png" alt="sike dunk shoes" fill className="object-cover object-center"/>
                  </div>
                  <div className="relative hidden md:block col-span-1 h-24 md:h-28 rounded-md overflow-hidden shadow-lg">
                    <Image src="/sike-dunk-green.png" alt="sike dunk shoes" fill className="object-cover object-center"/>
                  </div>
                  <div className="relative hidden md:block col-span-1 h-24 md:h-28 rounded-md overflow-hidden shadow-lg">
                    <Image src="/sike-dunk-green.png" alt="sike dunk shoes" fill className="object-cover object-center"/>
                  </div>
                </div>
              </div>
              <div className="relative col-span-1">
                <div>
                  <div className="relative">
                    <div className="blur-2xl bg-[#57349b] opacity-50 absolute md:inset-x-16 -bottom-4 rounded-lg shadow-lg py-2" />
                    <div className="flex justify-end">
                      <span className="text-[10px] font-bolder text-white opacity-50 uppercase">Reviews</span>
                    </div>
                    <div className="mt-1 relative bg-black z-10 h-full rounded-md overflow-hidden shadow-lg p-5">
                      <div className="flex items-center space-x-1">
                        <StarIcon className="h-5 w-5 text-[#D6FB6F]" />
                        <StarIcon className="h-5 w-5 text-[#D6FB6F]" />
                        <StarIcon className="h-5 w-5 text-[#D6FB6F]" />
                        <StarIcon className="h-5 w-5 text-[#D6FB6F]" />
                        <StarIcon className="h-5 w-5 text-[#D6FB6F]" />
                        <span className="text-[#D6FB6F] font-light underline">78 Reviews</span>
                      </div>
                    </div>
            
                  </div>
                  <div className="relative">
                    <div className="flex justify-end">
                      <span className="mt-5 text-[10px] font-bolder text-white opacity-50 uppercase">Product Details</span>
                    </div>
                    <div className="mt-2 relative bg-black z-10 h-full rounded-md overflow-hidden shadow-lg p-5">
                      <h3 className="text-3xl font-bold text-white opacity-90">Sike Air Jumper</h3>
                      <span className="text-gray-50 opacity-50 font-light">Men&apos;s Shoe</span>
                      <p className="text-gray-50 opacity-90 font-light mt-5 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel tincidunt luctus, nunc nisl aliquam nisl, vitae aliquam nisl nunc vel lorem. Sed euismod, nisl vel tincidunt luctus, nunc nisl aliquam nisl, vitae aliquam nisl nunc vel lorem.</p>
                    </div>
                    <div className="blur-2xl bg-[#57349b] opacity-50 absolute md:inset-x-16 -bottom-4 rounded-lg shadow-lg py-2" />
            
                  </div>
                  <div className="relative">
                    <div className="flex justify-end">
                      <Link href="/components/products/options" className="cursor-pointer hover:text-[#D6FB6F] mt-5 text-[10px] font-bolder text-white opacity-50 uppercase">Product Options</Link>
                    </div>
                    <div className="mt-2 relative bg-black z-10 h-full rounded-md shadow-lg p-5 mt-5">
                      <p className="text-white opacity-90 font-bold uppercase">Color</p>
                      <div className="mt-2 flex items-center space-x-3">
                        <div className="cursor-pointer rounded-full bg-[#57349B] w-10 h-10 flex items-center justify-center">
                        </div>
                        <div className="cursor-pointer rounded-full border border-white bg-[#57349B] w-10 h-10 flex items-center justify-center">
                          <div className="rounded-full bg-[#D6FB6F] w-8 h-8" />
                        </div>
                        <div className="cursor-pointer rounded-full bg-[#DD9763] w-10 h-10 flex items-center justify-center">
                        </div>
                      </div>

                      <p className="mt-8 text-white opacity-90 font-bold uppercase">Size</p>
                      <div className="mt-2 grid grid-cols-3 gap-2">
                        <div className="cursor-pointer rounded-md border border-[#57349B] w-full h-auto p-2 text-[#57349B] flex items-center justify-center">
                          M 7 / W 8.5
                        </div>
                        <div className="cursor-pointer rounded-md border border-[#57349B] w-full h-auto p-2 text-[#57349B] flex items-center justify-center">
                          M 7.5 / W 9
                        </div>
                        <div className="cursor-pointer rounded-md border border-[#57349B] w-full h-auto p-2 text-[#57349B] flex items-center justify-center">
                          M 8 / W 9.5
                        </div>
                        <div className="cursor-pointer rounded-md border border-[#57349B] w-full h-auto p-2 text-[#57349B] flex items-center justify-center">
                          M 8.5 / W 10
                        </div>
                        <div className="cursor-pointer rounded-md border border-[#57349B] w-full h-auto p-2 text-[#57349B] flex items-center justify-center">
                          M 9 / W 10.5
                        </div>
                        <div className="cursor-pointer rounded-md border border-[#57349B] w-full h-auto p-2 text-[#57349B] flex items-center justify-center">
                          M 9.5 / W 11
                        </div>
                        <div className="cursor-pointer rounded-md border border-[#57349B] w-full h-auto p-2 text-[#57349B] flex items-center justify-center">
                          M 10 / W 11.5
                        </div>
                        <div className="cursor-pointer rounded-md text-white bg-[#57349B] w-full h-auto p-2 flex items-center justify-center">
                          M 10.5 / W 12
                        </div>
                        <div className="cursor-pointer rounded-md border border-[#57349B] w-full h-auto p-2 text-[#57349B] flex items-center justify-center">
                          M 11 / W 12.5
                        </div>

                      </div>
                    </div>
                  </div>

                  <div className="relative">
                    <div className="flex justify-end">
                      <span className="mt-5 text-[10px] font-bolder text-white opacity-50 uppercase">Call To Action</span>
                    </div>
                    <div className="mt-2 relative bg-black z-10 h-full rounded-md shadow-lg p-5 mt-5">
                      <button type="button" className="bg-[#57349B] w-full h-12 rounded-md text-white font-bold uppercase">Add to Cart</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
                  

          </div>
        </div>
    </main>
  )
}
