function Banner() {
  return (
    <div className="flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold px2 lg:px-10 mb-10">
      <div className="">
        <h2 className="mt-5 md:mt-0 text-center">
          Welcome to{" "}
          <span className="underline decoration-4 decoration-brand underline-offset-4">
            Every Developers
          </span>{" "}
          favourite blog in the Devosphere
        </h2>
      </div>

      <div className="mt-5 md:mt-0 text-gray-400 text-center">
        <p>New product features</p>
        <p>The latest in technology</p>
        <p>The weekly debugging nightmares & More!</p>
      </div>
    </div>
  )
}

export default Banner