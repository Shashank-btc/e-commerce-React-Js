import React, { useState, useEffect } from 'react';
import Navbar from './components/TopNavBar';
import SecondaryTopNavbar from './components/SecondaryTopbar';
import Routing from './routing/Routing';
import { CounterProvider } from './contextAPI/CreateContextAPI';

const App = () => {  
  return (
    <CounterProvider>
    <div style={{backgroundColor : '#CCE6E6'}}>
    <Navbar/>
    <SecondaryTopNavbar/>
    <Routing/>
    </div>
    </CounterProvider>
    )
  };
  
  export default App;
  