import React, { useContext, useEffect, useState } from 'react';
import shopdown from '../assets/shopdown.png'
import signout from '../assets/logout-8-16.png'
import cart from '../assets/cart.png'
import like from '../assets/like.png'
import profile from '../assets/profilelogin.png'
import walet from '../assets/icons8-wallet-100.png'
import { Navbar, Nav, NavDropdown, Dropdown } from 'react-bootstrap';
import { CounterContext } from '../contextAPI/CreateContextAPI';
import axios from 'axios';



const SecondaryTopNavbar = () => {

  const data = localStorage.getItem("userId");

  const { likeCount, cartCount, handleLogout, newUser} = useContext(CounterContext);
//   const [newUser, setNewUser] = useState({
//     name : '',
//     email : '',
//     password : '',
//     userId : '',
//     wallet : ''  
// })

  // useEffect(()=>{
  //   getUserDetails()
  // })

  // const getUserDetails= async() =>{
  //   try{
  //   var url = 'http://localhost:5000/user/'+data
  //   const response = await axios.get(url);
  //   console.log("get user data",response.data)
  //   setNewUser(response.data)
  //   } catch(error){
  //     console.error('Error fetching data:', error);
  //   }
  //  }

  // console.log("getData",newUser)

  return (
    <>
      <Navbar style={{ background: '#F0F0F0' }} expand="lg">
        <Navbar.Brand className='mr-auto' href="/" style={{ paddingLeft: '20px', fontWeight: 'bold' , paddingRight : '40px' }}>Brand Factory</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto" style={{paddingRight : '250px'}}>
            <NavDropdown title='shop' >
              <NavDropdown.Item href="#action/3.1"></NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="about">About</Nav.Link>
            <Nav.Link href="Blog">Blog</Nav.Link>
            <Nav.Link href="Contact">Contact</Nav.Link>
          </Nav>
          <Nav className="ml-auto"  style={{paddingRight: '50px'}}>
            <Nav.Link href={(newUser.name !== '') ? "Profile": "LoginOrRegister"} style={{ color: '#23A6F0' }}><img src={profile} style={{ paddingBottom: '3px', paddingRight: "5px" }} />
            {newUser.userId !==''? newUser.name : "Login / Register" }</Nav.Link>
            <Nav.Link href="cart"><img src={cart} style={{ paddingBottom: '3px', paddingRight: "5px" }} />{cartCount}</Nav.Link>
            <Nav.Link href="like"><img src={like} style={{ paddingBottom: '3px', paddingRight: "5px" }} />{likeCount}</Nav.Link>
            {/* {newUser.userId !== '' ?<Nav.Link href="/wallet"><img src={walet} style={{ paddingBottom: '3px', paddingRight: "5px", width : '27px', height: '27px'}} onClick={handleLogout} />$ 2356</Nav.Link>:""} */}
            {newUser.name !== '' ?<Nav.Link href="/wallet"><img src={walet} style={{ paddingBottom: '3px', paddingRight: "5px", width : '27px', height: '27px'}}/>{newUser.wallet}</Nav.Link>:""}
            {newUser.name !== '' ?<Nav.Link href="/"><img src={signout} style={{ paddingBottom: '3px', paddingRight: "5px",}} onClick={handleLogout} /></Nav.Link>:""}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}


export default SecondaryTopNavbar;