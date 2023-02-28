import Link from 'next/link'
import Image from 'next/image'

function Header() {
  return (
    <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
      <div>
        <Link href="/">
          <Image
            src="https://www.hbku.edu.qa/sites/default/files/media/images/hbku_2021.svg"
            width={135*2}
            height={69*2}
            alt="Logo"
          />
        </Link>
        <h1>Smart TVs and IoT Labs</h1>
      </div>
      <div>
        <Link href="/"
          className="px-5 py-3 text-sm md:text-base bg-gray-900 text-[#F7AB0A] flex items-center rounded-full"
        >
          Sign up for the University of Code
        </Link>
      </div>
    </header>
  )
}

export default Header