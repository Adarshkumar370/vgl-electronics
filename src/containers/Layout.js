import Footer from "../components/Footer"
import Header from "../components/Header"

const Layout = (props) => {
    return (
        <div className='w-full bg-gray-100  '>
            <div className='container mx-auto shadow-xl  '>
        <Header/>
        {props.children}
        <Footer/>
        </div>
        </div>
    )
}

export default Layout
