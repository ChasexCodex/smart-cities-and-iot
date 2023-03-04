import Image from 'next/image'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faLinkedin} from '@fortawesome/free-brands-svg-icons'
import {faEnvelope, faPhone} from '@fortawesome/free-solid-svg-icons'

function Person() {
  return (
    <div className="flex flex-col px-4 bg-gray-200 drop-shadow py-2">
      <div className="relative w-full aspect-square">
        <Image
          className="object-contain object-center rounded-full"
          src="/placeholder-man.jpg" // TODO
          alt="Alt" // TODO
          fill
        />
      </div>
      <div className="mt-2">
        <p className="text-xl font-semibold">Prof. lorem ipsum</p>
        <p>Assistant Professor</p>
      </div>
      <div className="flex flex-row justify-between w-full h-6 mt-2">
        <FontAwesomeIcon icon={faLinkedin}/>
        <FontAwesomeIcon icon={faEnvelope}/>
        <FontAwesomeIcon icon={faPhone}/>
      </div>
    </div>
  )
}

function Page() {
  return (
    <div className="px-2 lg:px-10 py-4 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {Array.from({length: 10}).map(k => (<Person key={k as number}/>))
      }
    </div>
  )
}

export default Page