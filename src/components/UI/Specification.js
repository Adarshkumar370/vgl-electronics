const Specification = (props) => {
    return (
        <div className="py-3 mx-3">
          <h2 className="m-2 p-2 text-2xl text-red-700">
            <span className="border-b border-red-600 font-semibold pb-1 pr-2">
              Specification:
            </span>{" "}
          </h2>
          <div className="flex flex-col md:flex-row justify-between border border-black text-center ">
            <div className="flex flex-row md:flex-col flex-1  justify-center">
              <h3 className="p-3 bg-red-600 text-xl flex-1 font-semibold border-b md:border-b-0 md:border-r  border-white text-white">
                Sweep
              </h3>
              <p className="p-3 text-lg font-semibold border-b md:border-b-0 md:border-r flex-1 border-black">{props.sweep}</p>
            </div>
            
            <div className="flex flex-row md:flex-col flex-1  justify-center">
              <h3 className="p-3 bg-red-600 text-xl flex-1 border-b md:border-b-0 font-semibold md:border-r border-white text-white">
                Voltage
              </h3>
              <p className="p-3 text-lg font-semibold  border-b md:border-b-0 flex-1 md:border-r border-black">{props.voltage}</p>
            </div>

            <div className="flex flex-row md:flex-col flex-1  justify-center">
              <h3 className="p-3 bg-red-600 text-xl flex-1 border-b md:border-b-0 font-semibold border-r border-white text-white">
                Rated Power
              </h3>
              <p className="p-3 text-lg font-semibold border-b md:border-b-0 flex-1 md:border-r border-black">{props.power}</p>
            </div>

            <div className="flex flex-row md:flex-col  flex-1  justify-center">
              <h3 className="p-3 bg-red-600 text-xl flex-1 border-b md:border-b-0 font-semibold md:border-r border-white text-white">
                Rated Air Delivery
              </h3>
              <p className="p-3 text-lg font-semibold flex-1 border-b md:border-b-0 md:border-r border-black">{props.air}</p>
            </div>

            <div className="flex flex-row md:flex-col flex-1  justify-center">
              <h3 className="p-3 bg-red-600 text-xl flex-1 border-b md:border-b-0 font-semibold  border-white text-white">
                Rated Speed
              </h3>
              <p className="p-3 text-lg font-semibold flex-1   border-black">{props.speed}</p>
            </div>

            

          </div>
        </div>
    )
}

export default Specification
