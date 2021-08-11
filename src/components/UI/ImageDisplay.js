
const ImageDisplay = (props) => {
    return (
        <div className={`flex flex-col text-center  ${props.className} border shadow-md rounded-md`}>
          <img src={props.img} alt={props.title} className='w-96 h-72  rounded-md' />
          <span className="text-lg font-semibold p-2 bg-gray-300">{props.title}</span>
          </div>
    )
}

export default ImageDisplay
