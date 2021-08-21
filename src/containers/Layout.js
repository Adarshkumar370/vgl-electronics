import Footer from "../components/Footer"
import Header from "../components/Header"
import { useEffect } from "react";
const Layout = (props) => {
    useEffect(() => {
        window.scrollTo(0,0);
         });
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
