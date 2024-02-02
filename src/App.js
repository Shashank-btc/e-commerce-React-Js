import React, { useState, useEffect } from 'react';
import Navbar from './components/TopNavBar';
import SecondaryTopNavbar from './components/SecondaryTopbar';
import Routing from './routing/Routing';

const App = () => {  
  return (
    <div style={{backgroundColor : '#CCE6E6'}}>
    <Navbar/>
    <SecondaryTopNavbar/>
    <Routing/>
    </div>
    )
  };
  
  export default App;
  