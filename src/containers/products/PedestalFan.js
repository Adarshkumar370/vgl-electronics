import Layout from "../Layout"
import Banner from '../../components/UI/Banner';
import Banner2 from '../../assets/pedestal-fan/banner2.png'
import MobileBanner from '../../assets/pedestal-fan/mobile-banner.png'
const PedestalFan = () => {
    return (
        <Layout>
           <Banner
           banner={Banner2}
           mobileBanner={MobileBanner}
           title="Pedestal Fan"
           />
        </Layout>
    )
}

export default PedestalFan
