const Banner = (props) => {
    return (
        <>
        <div className="my-1 hidden md:block">
        <img src={props.banner} alt="Banner" className="w-full" />
        <h1 className="text-3xl pt-6 m-3 font-semibold  ">
          <span className="border-b-2 pb-2 pr-2 border-gray-700">
            {props.title}
          </span>
        </h1>
      </div>
      <div className="md:hidden">
        <img src={props.mobileBanner} alt="Banner" />
      </div>
        </>
    )
}

export default Banner
