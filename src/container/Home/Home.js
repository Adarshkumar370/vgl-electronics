import React from "react";
import Header from "../../component/Header/Header";
import { Carousel, Container, Row, Col } from "react-bootstrap";
// import Banner1 from "../../assets/mainBanner_1.png";
// import Banner2 from "../../assets/mainBanner_2.png";
// import Banner3 from "../../assets/mainBanner_3.png";
import DisplayProduct from "../../component/UI/Cards/DisplayProduct";
import Footer from "../../component/Footer/Footer";
import CeilingFan from "../../assets/ceiling_fan.png";
import TableFan from "../../assets/table_fan.png";
import PedestalFan from '../../assets/pedestal_fan.png';
import WallFan from '../../assets/wall_fan.png';
import CeilingMountingFan from '../../assets/ceiling_mounting_fan.png';
import PersonalFan from '../../assets/personal_fan.png';
import ExhaustFan from '../../assets/exhaust_fan.jpg';
import VentilationFan from '../../assets/ventilation_fan.jpg';
import Banner1 from '../../assets/banner_1.png';
import Banner2 from '../../assets/banner_2.png';
import Banner3 from '../../assets/banner_3.jpg';
const Home = () => {
  return (
    <>
      <Header />
      <Carousel fade>
        {/* <Carousel.Item>
          <img className="d-block w-100" src={Banner1} alt="First slide" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Banner2} alt="Second slide" />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item> */}
        <Carousel.Item>
          <img className="d-block w-100" src={Banner3} alt="Third slide" />

          {/* <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption> */}
        </Carousel.Item>
      </Carousel>
      <Container className="mx-auto">
        <Row>
          <h2>Fans</h2>
          <p>
            A producer of numerous types of fans including exquisite, antique
            finishes to fans specially designed for kids to dual color fans and
            High Speed Fans, Havells entered the fan business in mid-2003 and
            since then, has never looked back. With innovative designs and
            excellent finishes being the key elements, Havells has successfully
            been able to capture the essence of the customers' needs. An
            important appliance for every household, it is important that a fan
            functions properly giving sufficient air flow. Be it a wall fan,
            ceiling fan, table fan, an exhaust or a personal fan, the entire
            range from Havells is built with the best materials to give optimum
            results and last long. Apart from the Havells guarantee, there are
            multiple other benefits that you can avail. The biggest advantage is
            that you can get fans online and not worry about going to different
            stores and spending time. Check out the latest fan range online and
            select what suits you the best. We bring forward a collection of
            classic, stylish and efficient fans that you can install in your
            homes to make them beautiful. Match the fans with your furniture,
            walls, curtains etc. and find relevant options for your living room,
            bedroom, dining, balconies, offices, shops and more.
          </p>
        </Row>

        <Row className="m-2 mt-3  ">
          <Col >
            <DisplayProduct
              imgSrc={CeilingFan}
              title="Ceiling Fan"
              description=" Ceiling fans are the most hassle free and efficient home appliance one could ask for. A part of every home, they add to the ease and simple joys of life. "
              buttonText="Explore"
              link="/ceiling-fan"
            />
          </Col>
          <Col>
            <DisplayProduct
              imgSrc={TableFan}
              title="Table Fan"
              description=" A gust of cool breeze to your face irrespective of where you are. A simple yet exciting innovation that lets you bid goodbye to heat and uneasiness. "
              buttonText="Explore"
            />
          </Col>
          <Col>
            <DisplayProduct
              imgSrc={PedestalFan}
              title="Pedestal Fan"
              description=" Mobility in air circulation, sturdy base mounts, adjustable height and powerful air flow, All this with the Havells pedestal fan range!"
              buttonText="Explore"
            />
          </Col>
          <Col>
            <DisplayProduct
              imgSrc={WallFan}
              title="Wall Fan"
              description=" The wall mounted fans provides you air circulation in..."
              buttonText="Explore"
            />
          </Col>
          <Col>
            <DisplayProduct
              imgSrc={CeilingMountingFan}
              title="Cabin Fan"
              description=" Compact and small footprint with aerodynamically designed ABS blades combined with high durability and flexibility."
              buttonText="Explore"
            />
          </Col>
          <Col>
            <DisplayProduct
              imgSrc={ExhaustFan}
              title="Exhaust Fan"
              description=" A great cooling solution for small environments, the Havells range of personal fans is portable and come with a built in handle."
              buttonText="Explore"
            />
          </Col>
          <Col>
            <DisplayProduct
              imgSrc={VentilationFan}
              title="Ventilating Fan"
              description=" A great cooling solution for small environments, the Havells range of personal fans is portable and come with a built in handle."
              buttonText="Explore"
            />
          </Col>
          <Col>
            <DisplayProduct
              imgSrc={PersonalFan}
              title="Personal Fan"
              description=" A great cooling solution for small environments, the Havells range of personal fans is portable and come with a built in handle."
              buttonText="Explore"
            />
          </Col>
        </Row>
      </Container>
      <br />
      <br />
      <br />
      <hr />
      <Footer />
    </>
  );
};

export default Home;
