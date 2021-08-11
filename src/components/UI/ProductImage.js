const ProductImage = (props) => {
    return (
        <div className='py-3'>
        <h2 className='m-2 p-2 text-2xl text-red-700'><span className='border-b border-red-600 font-semibold pb-1 pr-2'>Product Image:</span> </h2>
        <div className='flex flex-col md:flex-row gap-12 items-center justify-center'>
          {props.children}
          
        </div>
        </div>
    )
}

export default ProductImage
