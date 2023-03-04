import '../../styles/globals.css'
import Header from '../../components/Header'
import Banner from '../../components/Banner'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import {PropsWithChildren} from 'react'

export const metadata = {
  title: {
    default: 'SCI Lab',
    template: '%s | SCI Lab',
  },
}

export default function RootLayout({children}: PropsWithChildren) {
  return (
    <html>
    <body className="bg-slate-100">
    <div className="max-w-4xl mx-auto">
      <Header/>
      <Banner/>
      <Navbar/>
      {children}
    </div>
    <div className="bg-zinc-900 text-white mt-10">
      <Footer/>
    </div>
    </body>
    </html>
  )
}
