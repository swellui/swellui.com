import '@/styles/globals.css'
import Header from './navigation/header'
import Footer from './navigation/footer'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
     
      <body>
        <div>
          <Header />
          {children}
          <Footer />
        </div>
      </body>
     
    </html>
  )
}
