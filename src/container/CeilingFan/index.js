import React from "react";
import Header from "../../component/Header/Header";
import Footer from "../../component/Footer/Footer";
import { Container, Row,Col } from "react-bootstrap";
import DisplayProduct from "../../component/UI/Cards/DisplayProduct";
import PremiumFan from '../../assets/premium_ceiling_fan.png'
const index = () => {
  return (
    <>
      <Header />
      <Container className="min-vh-100">
        <Row>
          <h2>CEILING FAN</h2>
          <p>
            Add a dash of elegance amalgamated with power, performance, comfort,
            safety and durability. The Havells ceiling fans are an imperative
            part of every home and are built to be energy efficient. Add a sense
            of style and exuberance to your rooms and offices with our
            innovative and trendy designs. With easy installation, our range of
            ceiling fans is a fit and forget proposition. Ceiling fans are an
            imperative part of any household. What you select for your house
            depicts your style and when people walk in through that door,
            Havells ceiling fans help you make an impression. Available for the
            best price online, the latest fans for your roof come in different
            varieties. Embrace your choices with options like premium underlight
            fans, energy saving fans, decorative fans, metallic fans, high speed
            fans, regular fans etc. It is only with these appliances, that a
            house feels like home and we understand this. The biggest benefit
            with Havells fans is that there is no compromise on the performance
            and the energy usage is always minimum. It is time you upgrade your
            homes with the most trendy and unique designer fans. Explore the
            range of fans online relaxing on the couch and make a statement.
          </p>
        </Row>
        <Row>
            <Col>
            <DisplayProduct
              imgSrc={PremiumFan}
              title="Premium UnderLight"
              description=" Get a multi-purpose fan that amalgamates elegance and functionality with Havells Premium Underlight fans."
              buttonText="Explore"
            />
            </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default index;
