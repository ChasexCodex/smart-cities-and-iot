import Image from 'next/image'

function Logo(props: any) {
  const {renderDefault, title} = props

  return (
    <div className="flex items-center space-x-2">
      <Image
        className="object-cover"
        height={135}
        width={69}
        src="https://www.hbku.edu.qa/sites/default/files/media/images/hbku_2021.svg"
        alt="Logo"
      />
      {renderDefault(props)}
    </div>

  )
}

export default Logo