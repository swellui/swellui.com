import '@/styles/globals.css'
import Link from 'next/link'


const navigation = [
  { name: 'Home', href: '/'},
  { name: 'Getting Started', href: '/docs/getting-started', children: [
    { name: 'Installation', href: '/docs/getting-started/installation' },
  ]},
  { name: 'Docs', href: '/docs'},
  { name: 'Components', href: '/docs/components', children: [
    { name: 'Button', href: '/docs/components/button' },
    { name: 'Options', href: '/docs/components/options' },
    { name: 'Checkbox', href: '/docs/components/checkbox' },
    { name: 'Dropdown', href: '/docs/components/dropdown' },
    { name: 'Input', href: '/docs/components/input' },
  ]}

]

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <head />
     
      <div>
        <div className="grid grid-cols-12">
          <div className="col-span-2 h-screen overflow-y bg-[#12011F] px-5 md:px-10 py-10 border-r border-gray-300">
            <div className="flex flex-col items-center justify-center">
            </div>
            <nav className="flex flex-col space-y-2">
              {navigation.map((item,i) => (
                <div key={i}>
                  <Link href={item.href} className="text-gray-50 text-md font-medium">{item.name}</Link>
                  {item.children && (
                    <div className="flex flex-col ">
                      {item.children.map((component, i) => (
                        <Link key={i} href={component.href} className="pt-1 border-l text-gray-50 hover:border-lime-200 text-[#212121] text-sm pl-5 font-medium">{component.name}</Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>
          <div className="col-span-10 bg-[#12011F] min-h-screen h-full py-10 md:py-10">
            <div className="max-w-7xl w-full mx-auto px-3 md:px-5 lg:px-10">
              {children}
            </div>
          </div>
        </div>
      </div>
   
    </>
     
  )
}
