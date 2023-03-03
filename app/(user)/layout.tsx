import '../../styles/globals.css'
import Header from '../../components/Header'
import Banner from '../../components/Banner'

export const metadata = {
  title: {
    default: 'SCI Lab',
    template: '%s | SCI Lab',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body className="max-w-4xl mx-auto">
        <Header/>
        <Banner/>
        {children}
      </body>
    </html>
  )
}
