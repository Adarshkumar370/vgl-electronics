import Banner from "../../components/UI/Banner"
import Layout from "../Layout"
import Banner2 from '../../assets/table-fan/banner2.png'
import MobileBanner from '../../assets/table-fan/mobile-banner.png'
const TableFan = () => {
    return (
        <Layout>
           <Banner
           banner={Banner2}
           mobileBanner={MobileBanner}
           title="Table Fan"
           />
        </Layout>
    )
}

export default TableFan
