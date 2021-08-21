import Banner from "../../components/UI/Banner"
import Layout from "../Layout"
import Banner2 from '../../assets/ventilating-fan/banner2.png'
import MobileBanner from '../../assets/ventilating-fan/mobile-banner.png'
const VentilatingFan = () => {
    return (
        <Layout>
           <Banner
           banner={Banner2}
           mobileBanner={MobileBanner}
           title="Ventilating Fan"
           />
        </Layout>
    )
}

export default VentilatingFan
