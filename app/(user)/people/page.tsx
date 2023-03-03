import Image from 'next/image'

function Person() {
  return (
    <div className="flex flex-col px-4 bg-gray-200 drop-shadow py-2">
      <div className="relative w-full aspect-square">
        <Image
          className="object-contain object-center rounded-full"
          src="https://picsum.photos/400/400" // TODO
          alt="Alt" // TODO
          fill
        />
      </div>
      <div className="mt-2">
        <p className="text-xl font-semibold">Prof. Franklin Douglas</p>
        <p>Assistant Professor</p>
      </div>
      <div className="flex flex-row justify-between w-full">
        <p>A</p>{/*TODO*/}
        <p>B</p>{/*TODO*/}
        <p>C</p>{/*TODO*/}
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