import React from 'react'
import {Link} from 'react-router-dom';
import {Card,Button} from 'react-bootstrap';
const DisplayProduct = (props) => {
    return (
        
          <Card style={{ width: '18rem',height:'35rem',border:'none' }}>
  <Card.Img variant="top" src={props.imgSrc} style={{height:"18rem"}} />
  <Card.Title className="text-center mt-3">{props.title}</Card.Title>
  <Card.Body className="d-flex flex-column">
    
    <Card.Text className="text-break text-wrap" >
      {props.description}
    </Card.Text>
    
  </Card.Body>
  <Link to={props.link} className="mx-auto"><Button variant="danger" className="m-1 mx-auto">{props.buttonText}</Button></Link>
</Card> 
        
    )
}

export default DisplayProduct
