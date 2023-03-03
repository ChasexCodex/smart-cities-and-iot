import Link from 'next/link'
import Image from 'next/image'

function Header() {
  return (
    <header className="flex flex-col items-center justify-center font-bold px-2 lg:px-10 py-5">
      <div className="relative w-full h-60 px-4">
        <Link href="/">
          <Image
            src="https://www.hbku.edu.qa/sites/default/files/media/images/hbku_2021.svg"
            alt="Logo"
            fill
          />
        </Link>
      </div>
      <h1 className="lg:mt-10 text-5xl text-center font-extrabold">Smart Cities & IoT Lab</h1>
    </header>
  )
}

export default Header