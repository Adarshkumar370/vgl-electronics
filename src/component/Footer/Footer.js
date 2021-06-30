import React from 'react'
import {Row,Col,Container} from 'react-bootstrap'
const Footer = () => {
    return (
        <Container fluid>
            <Row>
          <Col>
            <h2 className="fs-1">© Copyright 2021 VGL Electrical Ltd. All rights reserved.</h2>
            <p className='fs-6'>All trademarks used herein are property of their respective owners.
Any use of third party trademarks is for identification purposes only and does not imply endorsement.</p>

          </Col>
          <Col>

Manufacturer / Importer 

Havells India Ltd.
Registered Office:
904, Surya Kiran Building, K.G. Marg, New Delhi – 110001. (India)
Corporate Office:
QRG Towers, 2D, Sec- 126, Expressway Noida - 201304 U.P. (India) </Col>
        </Row>
        </Container>
    )
}

export default Footer
