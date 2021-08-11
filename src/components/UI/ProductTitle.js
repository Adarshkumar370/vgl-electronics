import New from "../../assets/new.png";
const ProductTitle = (props) => {
    return (
        <div className="flex flex-row">
          <div className="flex flex-col">
            <h2 className=" m-2 p-2 text-center uppercase border-b-2 font-bold border-gray-500 leading-7 text-red-600 text-2xl">
              {props.title}
            </h2>
            <h3 className="mx-2 px-2 uppercase  text-xl">
              {props.subtitle}
            </h3>
          </div>
          <div>
          <img src={New} alt="New" className={`h-10 ${props.new} `}/>
          </div>
        </div>
    )
}

export default ProductTitle
