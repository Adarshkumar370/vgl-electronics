import React from 'react'
import Logo from '../../assets/banner_transparent.png'
import{Navbar,Nav, NavDropdown} from 'react-bootstrap';
import './style.css';
const Header = (props) => {
    return (
        <Navbar bg="light" expand="lg" className="fs-1">
  <Navbar.Brand href="#home" className="d-flex align-items-center p-1"> <img
        alt="VGL Electronics"
        src={Logo}
        width="252"
        height="100"
        className="d-inline-block "
      />{' '}
      </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav ">
    <Nav className="mr-auto  ">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">About Us</Nav.Link>
      <NavDropdown title="Categories" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Ceiling Fans</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Pedestal Fans</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Ventilating Fans</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.4">Wall Fans</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.5">Exhaust Fans</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    )
}

export default Header
