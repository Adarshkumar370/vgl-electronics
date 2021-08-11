import Layout from "../Layout";
import Banner1 from "../../assets/ceiling-fan/banner2.png";
import MobileBanner from "../../assets/ceiling-fan/mobile-banner.png";
import Fan1 from "../../assets/ceiling-fan/fan1.png";
import Fan2 from "../../assets/ceiling-fan/fan2.png";
import Fan3 from "../../assets/ceiling-fan/fan3.png";
import Fan4 from "../../assets/ceiling-fan/fan4.png";

import ImageDisplay from "../../components/UI/ImageDisplay";
import ProductImage from "../../components/UI/ProductImage";
import ProductTitle from "../../components/UI/ProductTitle";
import Specification from "../../components/UI/Specification";
import Feature from "../../components/UI/Feature";
import Product from "../../components/UI/Product";
import Banner from "../../components/UI/Banner";
const CeilingFan = () => {
  return (
    <Layout>
      <Banner
      banner={Banner1}
      mobileBanner={MobileBanner}
      title='Ceiling Fan'
      />
      <Product>
        <ProductTitle title="lumina dj" subtitle="premium smart led fan" />

        <ProductImage>
          <ImageDisplay
            title="Antique Copper"
            img={Fan1}
            className="border-gray-400"
          />
          <ImageDisplay
            title="Chrome Black"
            img={Fan2}
            className="border-gray-400"
          />
        </ProductImage>
        <Specification
          sweep="1200mm"
          voltage="230V"
          power="75W"
          air="230m3/min"
          speed="340RPM"
        />
        <Feature>
          <li className="pt-3">
            <span className="font-bold">iMode</span>- A technological innovation
            that adjusts speed based on ambient temperature
          </li>
          <li>
            Control the Lumina DJ with just a touch, using the IOS/Android App
            on your phone
          </li>
          <li>
            Lumina DJ the seashore in your living room with the breeze mode.
          </li>
          <li>
            Enjoy millions of LED Colors, all of them to suit any mood you're in
          </li>
          <li>
            You'll never have to step out for party. Have one at your home with
            the Lumina DJ's Rythm-Flash-Fade Feature
          </li>
          <li>
            Forget the regulator. Fast or slow, make your choice on your phone
            with the different spped setting.{" "}
          </li>
          <li>
            Don't concern yourself with switching the Lumina DJ, it'll turn
            itself off thanks to the timer
          </li>
          <li>Remote control operation </li>
        </Feature>
      </Product>

      <Product>
        <ProductTitle title="Cuatro Aire" new='hidden' subtitle="4 leaf premium decorative fan" />

        <ProductImage>
          <ImageDisplay
            title="Grasberg Gold"
            img={Fan3}
            className="border-gray-400"
          />
          <ImageDisplay
            title="Perl White Black"
            img={Fan4}
            className="border-gray-400"
          />
        </ProductImage>
        <Specification
          sweep="1200mm"
          voltage="230V"
          power="75W"
          air="230m3/min"
          speed="340RPM"
        />
        <Feature>
         <li>Tangentially aligned 4 blades gives superior air delivery</li>
         <li>Powerful motor gives unmatched performance even at low voltage</li>
         <li>Smooth and Silent Operation</li>
         <li>Attractive new color combinations</li>
         <li>Available in 1200mm sweep size</li>
        </Feature>
      </Product>
    

    </Layout>
  );
};

export default CeilingFan;
