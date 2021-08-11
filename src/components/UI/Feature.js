const Feature = (props) => {
    return (
        <div className="py-3">
          <h2 className="m-2 p-2 text-2xl text-red-700">
            <span className="border-b border-red-600 font-semibold pb-1 pr-2">
              Features:
            </span>{" "}
            <ul className="text-justify mx-3 text-black text-xl p-2 list-disc flex flex-col gap-4">
              {props.children}
            </ul>
          </h2>
        </div>
    )
}

export default Feature
