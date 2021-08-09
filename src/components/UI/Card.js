import { Link } from "react-router-dom"
const Card = (props) => {
    return (
        <div className='flex flex-col max-w-sm mx-auto hover:bg-red-700 hover:text-white border-red-100 border-2 shadow-lg rounded-lg'>
          <img src={props.img} alt={props.alt} className="h-64 rounded-sm"/>
          <h2 className='m-3 text-3xl font-semibold '>{props.title}</h2>
          <p className='px-4 my-2 text-lg h-36'>{props.description}</p>
          <Link to={props.link} className='text-center my-8'><span className="p-3  border-2 border-red-300 hover:bg-white hover:text-black ">View All Products</span></Link>
        </div>
    )
}

export default Card
