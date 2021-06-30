import React from "react";
import Header from "../../component/Header/Header";
import { Carousel, Container, Row, Col, Card, Button } from "react-bootstrap";
import Banner1 from "../../assets/mainBanner_1.png";
import Banner2 from "../../assets/mainBanner_2.png";
import Banner3 from "../../assets/mainBanner_3.png";
import DisplayProduct from "../../component/UI/Cards/DisplayProduct";
import Card_1 from "../../assets/card_1.jpg";
import Footer from "../../component/Footer/Footer";
const Home = () => {
  return (
    <>
      <Header />
      <Carousel fade>
        <Carousel.Item>
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
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Banner3} alt="Third slide" />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Container fluid>
        <Row>
          <h1 className="display-6">New Arrivals</h1>
        </Row>
        <Row>
          <Col  className="p-2">
            <DisplayProduct
              imgSrc={Card_1}
              title="Ceiling Fan"
              description=" Lorem Ipsum "
              buttonText="More Details"
            />
          </Col>
          <Col  className="p-2">
            <DisplayProduct
              imgSrc={Card_1}
              title="Ceiling Fan"
              description=" Lorem Ipsum "
              buttonText="More Details"
            />
          </Col>
          <Col  className="p-2">
            <DisplayProduct
              imgSrc={Card_1}
              title="Ceiling Fan"
              description=" Lorem Ipsum "
              buttonText="More Details"
            />
          </Col>
          <Col  className="p-2">
            <DisplayProduct
              imgSrc={Card_1}
              title="Ceiling Fan"
              description=" Lorem Ipsum "
              buttonText="More Details"
            />
          </Col>
        </Row>
        <hr/>
        <Row>
          <h1 className="display-6 ">Best Seller</h1>
        </Row>
        <Row className='mt-4 gv-2'>
          <Col  className="p-2">
            <DisplayProduct
              imgSrc={Card_1}
              title="Ceiling Fan"
              description=" Lorem Ipsum "
              buttonText="More Details"
            />
          </Col>
          <Col  className="p-2">
            <DisplayProduct
              imgSrc={Card_1}
              title="Ceiling Fan"
              description=" Lorem Ipsum "
              buttonText="More Details"
            />
          </Col>
          <Col  className="p-2">
            <DisplayProduct
              imgSrc={Card_1}
              title="Ceiling Fan"
              description=" Lorem Ipsum "
              buttonText="More Details"
            />
          </Col>
          <Col  className="p-2">
            <DisplayProduct
              imgSrc={Card_1}
              title="Ceiling Fan"
              description=" Lorem Ipsum "
              buttonText="More Details"
            />
          </Col>
        </Row>
        
      </Container><br/><br/><br/><hr/>
      <Footer/>
    </>
  );
};

export default Home;
