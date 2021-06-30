import React from 'react'
import {Card,Button} from 'react-bootstrap';
const DisplayProduct = (props) => {
    return (
        <div>
          <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={props.imgSrc} />
  <Card.Body>
    <Card.Title>{props.title}</Card.Title>
    <Card.Text>
      {props.description}
    </Card.Text>
    <Button variant="primary">{props.buttonText}</Button>
  </Card.Body>
</Card> 
        </div>
    )
}

export default DisplayProduct
