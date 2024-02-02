import React from 'react';
import phone from '../assets/phone.png'
import email from '../assets/email.png'
import facebook from '../assets/facebook.png'
import youtube from '../assets/youtube.png'
import insta from '../assets/instagram.png'
import twitter from '../assets/twitter.png'
import { Nav, NavLink, Navbar } from 'react-bootstrap';
import '../App.css'

const TopNavBar = () => {

  return (
    <>
    <Navbar bg="dark" expand="lg">
      <Navbar.Toggle  aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" style={{color : 'white', alignItems: 'center'}}>
        <Nav className= "mr-auto">
          <Nav.Link style={{color : 'white'}}><img src={phone} alt='error' style={{ marginTop: '5px', paddingLeft: '5px', paddingRight: '5px' }} />+91 9490531480</Nav.Link>
          <Nav.Link style={{color : 'white'}}><img src={email} alt='error' style={{ marginTop: '5px', paddingLeft: '5px', paddingRight: '5px' }} />shashanksai664@gmail.com</Nav.Link>
        </Nav>
        <Nav className= "mx-auto" >
          <NavLink style={{color : 'white'}}>Follow Us  and get a chance to win 80% off</NavLink>
        </Nav>
        <Nav className='ml-auto'>
        <Nav.Link><img src={twitter} alt='error' style={{ marginTop: '5px', paddingLeft: '5px', paddingRight: '5px' }} /></Nav.Link>
        <Nav.Link><img src={insta} alt='error' style={{ marginTop: '5px', paddingLeft: '5px', paddingRight: '5px' }} /></Nav.Link>
        <Nav.Link><img src={facebook} alt='error' style={{ marginTop: '5px', paddingLeft: '5px', paddingRight: '5px' }} /></Nav.Link>
         <Nav.Link><img src={youtube} alt='error' style={{ marginTop: '5px', paddingLeft: '5px', paddingRight: '5px' }} /></Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    </>
  );
};

export default TopNavBar;