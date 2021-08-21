import Banner from '../../components/UI/Banner'
import Layout from '../Layout'
import ImageDisplay from '../../components/UI/ImageDisplay'
import ProductImage from '../../components/UI/ProductImage'
import ProductTitle from '../../components/UI/ProductTitle'
import Specification from '../../components/UI/Specification'
import Feature from '../../components/UI/Feature'
import Product from '../../components/UI/Product'
import Li from '../../components/UI/Li'

import Fan1 from '../../assets/wall-fan/fan1.png'
import Fan2 from '../../assets/wall-fan/fan2.png'
import Fan3 from '../../assets/wall-fan/fan3.png'
import Fan4 from '../../assets/wall-fan/fan4.png'
import Fan5 from '../../assets/wall-fan/fan5.png'
import Fan6 from '../../assets/wall-fan/fan6.png'
import Fan7 from '../../assets/wall-fan/fan7.png'
import Fan8 from '../../assets/wall-fan/fan8.png'
import Fan9 from '../../assets/wall-fan/fan9.png'
import Fan10 from '../../assets/wall-fan/fan10.png'
import Fan11 from '../../assets/wall-fan/fan11.png'
import Fan12 from '../../assets/wall-fan/fan12.png'
import Fan13 from '../../assets/wall-fan/fan13.png'
import Fan14 from '../../assets/wall-fan/fan14.png'
import Fan15 from '../../assets/wall-fan/fan15.png'
import Fan16 from '../../assets/wall-fan/fan16.png'
import Fan17 from '../../assets/wall-fan/fan17.png'

import Banner2 from '../../assets/wall-fan/banner2.png'
import MobileBanner from '../../assets/wall-fan/mobile-banner.png'
const WallFan = () => {
  return (
    <Layout>
      <Banner banner={Banner2} mobileBanner={MobileBanner} title="Wall Fan" />

      <Product>
        <ProductTitle title="coolwiz" new="hidden" subtitle="wall fan" />

        <ProductImage>
          <ImageDisplay
            title="Blue-White"
            img={Fan1}
            className="border-gray-400"
          />
          <ImageDisplay
            title="Pink-White"
            img={Fan2}
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
          <li>Elegant design</li>
          <li>
            Aerodynamically balanced blades made of superior grade engineered polymer
          </li>
          <li>Pull cord for speed regulation and oscillation</li>
          <li>In-built overload protector</li>
          <li>3 Speed choices</li>
        </Feature>
      </Product>

      <Product>
        <ProductTitle title="wilma std" new="hidden" subtitle="wall fan" />

        <ProductImage>
          <ImageDisplay
            title="Yellow-Black"
            img={Fan3}
            className="border-gray-400"
          />
          <ImageDisplay
            title="White-Black"
            img={Fan4}
            className="border-gray-400"
          />
          <ImageDisplay
            title="White"
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
          <Li>Compact and elegant design.</Li>
          <Li>Corrosion resistant powder coated metal guard.</Li>
          <Li>Synchronous Motor driven jerk free smooth oscillation.</Li>
          <Li>Pull cord for speed oscillation.</Li>
        </Feature>
      </Product>

      <Product>
        <ProductTitle title="flora"  subtitle="wall fan" />

        <ProductImage>
          <ImageDisplay
            title="Beige Black"
            img={Fan6}
            className="border-gray-400"
          />
          <ImageDisplay
            title="Purple White"
            img={Fan7}
            className="border-gray-400"
          />
          <ImageDisplay
            title="Black"
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
          <Li>Elegant Design</Li>
          <Li>Aerodynamically balanced blades made of superior grade engineered polymer</Li>
          <Li>Pull cord for speed regulation and oscillation</Li>
          <Li>In-built overload protector</Li>
          <Li>3 Speed choices</Li>

        </Feature>
      </Product>


      <Product>
        <ProductTitle title="hola wf" new="hidden"  subtitle="wall fan" />

        <ProductImage>
          <ImageDisplay
            title="White"
            img={Fan9}
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
          <Li>Compact and elegant design.</Li>
          <Li>Corrosion resistant powder coated metal guard.</Li>
          <Li>Synchronous Motor driven jerk free smooth oscillation.</Li>
          <Li>Pull cord for speed and oscillation.</Li>
        </Feature>
      </Product>
      
      <Product>
        <ProductTitle title="desire wf" new="hidden"  subtitle="wall fan" />

        <ProductImage>
          <ImageDisplay
            title="Green-White"
            img={Fan10}
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
          <Li>Powerful and energy efficient motor.</Li>
          <Li>In-built overheat/ overload protection.</Li>
          <Li>Synchronous Motor driven jerk free smooth oscillation</Li>
          <Li>Pull cord for Speed &Oscillation</Li>
          <Li>Elegant Design</Li>
          <Li>Aerodynamically designed blades</Li>
        </Feature>
      </Product>


      <Product>
        <ProductTitle title="desire wf" new="hidden"   subtitle="remote wall fan" />

        <ProductImage>
          <ImageDisplay
            title="Yellow Black"
            img={Fan11}
            className="border-gray-400"
          />
          <ImageDisplay
            title="Blue-White"
            img={Fan12}
            className="border-gray-400"
          />
       
        </ProductImage>

        <Specification
          sweep="450 mm"
          voltage="230 V"
          power="55 W"
          air="65 m3/min"
          speed="1350 RPM"
        />
        <Feature>
          <Li>Compact and Elegant design.</Li>
          <Li>Powerful and energy efficient motor with Remote controller.</Li>
          <Li>4 Hour timer for wall fan.</Li>
          <Li> In-built overheat/ overload protection.</Li>
          <Li>3 Mode wind selection- Natural,Sleep and Normal.</Li>
          <Li>Aerodynamically designed blades.</Li>
          <Li>Synchronous Motor driven jerk free smooth oscillation.</Li>
        </Feature>
      </Product>

      <Product>
        <ProductTitle title="cool hsw" new='hidden'  subtitle="high speed wall fan" />

        <ProductImage>
          <ImageDisplay
            title="White"
            img={Fan13}
            className="border-gray-400"
          />
          <ImageDisplay
            title="Yellow-Black"
            img={Fan14}
            className="border-gray-400"
          />
       
        </ProductImage>

        <Specification
          sweep="450 mm"
          voltage="230 V"
          power="120 W"
          air="95 m3/min"
          speed="2200 RPM"
        />
        <Feature>
          <Li>Superior quality ABS blades for better performance</Li>
          <Li>Elegant design with 120 spokes grill guard</Li>
          <Li>Pull cord for special regulation and oscillation</Li>
          <Li>In-built thermal overload protector</Li>
          <Li>3 speed choices</Li>
          <Li>High speed performance</Li>
        </Feature>
      </Product>


      <Product>
        <ProductTitle title="Superairflow hsw" new='hidden'  subtitle="high speed wall fan" />

        <ProductImage>
          <ImageDisplay
            title="White-Blue"
            img={Fan15}
            className="border-gray-400"
          />
          <ImageDisplay
            title="White"
            img={Fan16}
            className="border-gray-400"
          />
       
        </ProductImage>

        <Specification
          sweep="300 mm"
          voltage="230 V"
          power="100 W"
          air="65 m3/min"
          speed="2100 RPM"
        />
        <Feature>
          <Li>Superior quality ABS blades for better performance</Li>
          <Li>Elegant design </Li>
          <Li>Synchronous Motor driven jerk free smooth oscillation</Li>
          <Li>Pull cord for speed regulation and oscillation</Li>
          <Li>In-built thermal overload protector</Li>
          <Li>3 speed choices</Li>
          <Li>High speed performance</Li>
          <Li>Available in 300 & 400 mm sweep size</Li>
        </Feature>
      </Product>


      <Product>
        <ProductTitle title="selfee" new='hidden' subtitle="multi purpose fan" />

        <ProductImage>
          <ImageDisplay
            title="Yellow Black"
            img={Fan17}
            className="border-gray-400"
          />
          
       
        </ProductImage>

        <Specification
          sweep="225 mm"
          voltage="230 V"
          power="45 W"
          air="38 m3/min"
          speed="2600 RPM"
        />
        <Feature>
          <Li>Multi utility fan which can be mounted on table & wall</Li>
          <Li>360° rotation enabled  </Li>
          <Li>High speed performance</Li>
          <Li>Compact & elegant design</Li>
          <Li>Super enameled high purity copper used in the motor winding </Li>
          <Li>Powerful & efficient motor</Li>
        </Feature>
      </Product>

    </Layout>

    
  )
}

export default WallFan
