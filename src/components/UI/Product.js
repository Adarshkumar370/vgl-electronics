
const Product = (props) => {
    return (
        <div className="mt-12">
        {props.children}
        <hr className='border-red-700'/>
      </div>
    )
}

export default Product
