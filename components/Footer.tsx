import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="flex flex-row justify-between max-w-4xl mx-auto px-2 lg:px-10">
      <p className="p-2 flex-1">Hamad Bin Khalifa University 2023 ©</p>
      <div className="relative w-36 rounded shadow-white drop-shadow my-2 mx-1 h-20 bg-white">
        <Link href="/">
          <Image
            src="https://www.hbku.edu.qa/sites/default/files/media/images/hbku_2021.svg"
            alt="Logo"
            fill
          />
        </Link>
      </div>
    </footer>
  )
}