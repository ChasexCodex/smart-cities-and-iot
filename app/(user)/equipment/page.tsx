import Image from 'next/image'

type Props = {
  title: string
  description: string
}

function Equipment({title, description}: Props) {
  return (
    <div className="pt-8">
      <div className="relative h-60 aspect-square aspect-square drop-shadow rounded overflow-hidden">
        <Image
          className="object-contain object-center"
          src="/equipment.png"
          alt="Alt"
          fill
        />
      </div>
      <div className="mt-2">
        <h2 className="text-3xl font-medium ">{title}</h2>
        <p className="mt-2">{description}</p>
      </div>
    </div>
  )
}

function Page() {
  return (
    <div className="px-2 lg:px-10 py-4 grid grid-cols-1 gap-y-8 divide-y-4">
      <Equipment
        title="High-performance Computing Cluster"
        description="A Dell EMC PowerEdge C6420 server cluster, featuring 128 CPU cores, 1.5 TB of RAM, and 28 NVIDIA Tesla V100 GPUs, allowing us to run complex simulations and experiments quickly and efficiently."
      />
      <Equipment
        title="3D Printer"
        description="A Stratasys F370 3D printer, which can print objects up to 14 x 10 x 14 inches in size with high precision and accuracy."
      />
      <Equipment
        title="Electron Microscope"
        description="A Thermo Fisher Scientific Talos F200X transmission electron microscope, which can magnify materials up to 200,000 times and is capable of high-resolution imaging and analysis."
      />
      <Equipment
        title="Laser Cutter"
        description="An Epilog Fusion M2 40 laser cutter, which can cut and engrave a variety of materials with precision and speed."
      />
      <Equipment
        title="Robotics Equipment"
        description="A range of robotics equipment, including a KUKA KR 60 HA robotic arm, a Robotiq 3-Finger Adaptive Robot Gripper, and a National Instruments CompactRIO controller, enabling us to build and test advanced robotic systems."
      />
      <Equipment
        title="High-speed Cameras"
        description="Phantom VEO 710 high-speed camera, which can capture up to 7,400 frames per second at 1280 x 800 resolution, allowing us to study fast-moving phenomena in detail."
      />
      <Equipment
        title="X-ray Diffractometer"
        description="A Rigaku SmartLab X-ray diffractometer, which can analyze the structure and composition of materials in solid-state with high precision and accuracy."
      />
      <Equipment
        title="Augmented Reality Headset"
        description="A Microsoft HoloLens 2 augmented reality headset, which allows us to visualize and interact with digital models and simulations in real-time, making it a valuable tool for design and prototyping."
      />
      <Equipment
        title="Spectrophotometer"
        description="A Shimadzu UV-3600 UV-VIS-NIR spectrophotometer, which can measure the absorption and transmission of light by materials with high accuracy and reproducibility."
      />
      <Equipment
        title="Virtual Reality System"
        description="An Oculus Rift S virtual reality system, which provides a high-quality immersive experience for research and education, enabling us to simulate complex scenarios and study human behavior and cognition in a controlled environment."
      />
    </div>
  )
}

export default Page