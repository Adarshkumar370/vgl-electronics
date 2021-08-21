import Banner from '../../components/UI/Banner'
import Layout from '../Layout'
import ImageDisplay from '../../components/UI/ImageDisplay'
import ProductImage from '../../components/UI/ProductImage'
import ProductTitle from '../../components/UI/ProductTitle'
import Specification from '../../components/UI/Specification'
import Feature from '../../components/UI/Feature'
import Product from '../../components/UI/Product'
import Li from '../../components/UI/Li'

import Banner2 from '../../assets/table-fan/banner2.png'
import MobileBanner from '../../assets/table-fan/mobile-banner.png'
import Fan1 from '../../assets/table-fan/fan1.png'
import Fan2 from '../../assets/table-fan/fan2.png'
import Fan3 from '../../assets/table-fan/fan3.png'
import Fan4 from '../../assets/table-fan/fan4.png'
import Fan5 from '../../assets/table-fan/fan5.png'
import Fan6 from '../../assets/table-fan/fan6.png'
import Fan7 from '../../assets/table-fan/fan7.png'
import Fan8 from '../../assets/table-fan/fan8.png'
import Fan9 from '../../assets/table-fan/fan9.png'
import Fan10 from '../../assets/table-fan/fan10.png'
const TableFan = () => {
  return (
    <Layout>
      <Banner banner={Banner2} mobileBanner={MobileBanner} title="Table Fan" />

      <Product>
        <ProductTitle title="desire tf" subtitle="table fan" new="hidden" />

        <ProductImage>
          <ImageDisplay
            title="Red White"
            img={Fan1}
            className="border-gray-400"
          />
          <ImageDisplay
            title="Blue-White"
            img={Fan2}
            className="border-gray-400"
          />
          <ImageDisplay title="White" img={Fan3} className="border-gray-400" />
        </ProductImage>
        <Specification
          sweep="400 mm"
          voltage="230 V"
          power="55 W"
          air="65 m3/min"
          speed="1350 RPM"
        />
        <Feature>
          <Li>Powerful and energy efficient motor.</Li>
          <Li>In-built overheat/ overload protection.</Li>
          <Li>Jerk free oscillation.</Li>
          <Li>Compact and elegant design.</Li>
          <Li>Aerodynamically designed blades.</Li>
          <Li>Corrosion resistance powder coated metal guard.</Li>
          <Li>3 speed selector.</Li>
        </Feature>
      </Product>

      <Product>
        <ProductTitle title="flora tf" subtitle="table fan" />

        <ProductImage>
          <ImageDisplay
            title="White Black"
            img={Fan4}
            className="border-gray-400"
          />
        </ProductImage>
        <Specification
          sweep="400 mm"
          voltage="230 V"
          power="55 W"
          air="65 m3/min"
          speed="1300 RPM"
        />
        <Feature>
          <Li>Powerful and energy efficient motor.</Li>
          <Li>In-built overheat/ overload protection.</Li>
          <Li>Jerk free oscillation.</Li>
          <Li>Compact and elegant design.</Li>
          <Li>Aerodynamically designed blades.</Li>
          <Li>Corrosion resistance powder coated metal guard.</Li>
          <Li>3 speed selector.</Li>
        </Feature>
      </Product>

      <Product>
        <ProductTitle title="hola tf" new="hidden" subtitle="table fan" />

        <ProductImage>
          <ImageDisplay
            title="Blue-White"
            img={Fan5}
            className="border-gray-400"
          />
        </ProductImage>
        <Specification
          sweep="400 mm"
          voltage="230 V"
          power="55 W"
          air="65 m3/min"
          speed="1350 RPM"
        />
        <Feature>
          <Li>Rectangular base for better stability</Li>
          <Li>3 speed selector.</Li>
          <Li>Corrosion resistance powder coated metal guard.</Li>
          <Li>Jerk free oscillation.</Li>
        </Feature>
      </Product>

      <Product>
        <ProductTitle title="magic tf" subtitle="table fan" />

        <ProductImage>
          <ImageDisplay title="White" img={Fan6} className="border-gray-400" />
          <ImageDisplay
            title="Pink-White"
            img={Fan7}
            className="border-gray-400"
          />
          <ImageDisplay
            title="Blue-White"
            img={Fan8}
            className="border-gray-400"
          />
        </ProductImage>
        <Specification
          sweep="400 mm"
          voltage="230 V"
          power="55 W"
          air="65 m3/min"
          speed="1350 RPM"
        />
        <Feature>
          <Li>New compact and elegant design.</Li>
          <Li>Aerodynamically designed blades.</Li>
          <Li>Corrosion resistance powder coated metal guard.</Li>
          <Li>3 speed selector.</Li>
          <Li>Jerk free oscillation.</Li>
        </Feature>
      </Product>

      <Product>
        <ProductTitle
          title="super air flow hst"
          subtitle="table fan"
          new="hidden"
        />

        <ProductImage>
          <ImageDisplay
            title="Blue-White"
            img={Fan9}
            className="border-gray-400"
          />
        </ProductImage>
        <Specification
          sweep="400 mm"
          voltage="230 V"
          power="120 W"
          air="90 m3/min"
          speed="2100 RPM"
        />
        <Feature>
          <Li>Compact and elegant design.</Li>
          <Li>Jerk free oscillation.</Li>
          <Li>Aerodynamically designed blades.</Li>
          <Li>High speed performance.</Li>
          <Li>3 speed selector.</Li>
          <Li>Corrosion resistance powder coated metal guard.</Li>
          <Li>Triangular base for better stability.</Li>
          <Li>In-built overheat/ overload protection .</Li>
        </Feature>
      </Product>

      <Product>
        <ProductTitle
          title="hola hst"
          subtitle="high speed table fan"
          new="hidden"
        />

        <ProductImage>
          <ImageDisplay
            title="Royal blue"
            img={Fan10}
            className="border-gray-400"
          />
        </ProductImage>
        <Specification
          sweep="400 mm"
          voltage="230 V"
          power="120 W"
          air="90 m3/min"
          speed="2000 RPM"
        />
        <Feature>
          <Li>High speed performance.</Li>
          <Li>Rectangular base for better stability</Li>
          <Li>3 speed selector.</Li>
          <Li>In-built overheat/ overload protection.</Li>
          <Li>Corrosion resistance powder coated metal guard.</Li>
          <Li>Jerk free oscillation.</Li>
        </Feature>
      </Product>
    </Layout>
  )
}

export default TableFan
