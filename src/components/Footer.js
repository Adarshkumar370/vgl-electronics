import Logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
const Footer = () => {
    return (
        <div className='mt-12 border-t-2 border-gray-300 flex flex-col md:flex-row justify-between '>
           <div className="w-96"><img src={Logo} alt="Logo "/></div>
           <div className='w-96 py-6'>
               <h1 className='text-xl font-semibold border-b-2 p-1'>Quick Links</h1>
               <ul className='p-3 '>
                   <li className='py-1'><Link to='/ceiling-fan'>Ceiling Fan</Link></li>
                   <li className='py-1'><Link to='table-fan'>Table Fan</Link></li>
                   <li className='py-1'><Link to='pedestal-fan'>Pedestal Fan</Link></li>
                   <li className='py-1'><Link to='wall-fan'>Wall Fan</Link></li>
                   <li className='py-1'><Link to='ventilating-fan'>Ventilating Fan</Link></li>
               </ul>
           </div >
<div className='w-96 p-3 pt-6 '>
<span><b className='text-lg'>Contact Us:</b> <i>shaiwal.sahil@vglelectricals.com</i><br/><br/>
    <b>Address:</b> H/O B-118 GALI NO-7 RAHUL VIHAR VIJAI NAGAR GHAZIABAD
              Ghaziabad UP 201009 INDIA</span>
</div>
           </div>
        
    )
}

export default Footer
