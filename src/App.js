import React, { useState, useEffect } from 'react';
import Navbar from './components/TopNavBar';
import SecondaryTopNavbar from './components/SecondaryTopbar';
import Routing from './routing/Routing';
import { CounterProvider } from './contextAPI/CreateContextAPI';
import UseReducers from './Reducer/UseReducers';
import SingnUpReducer from './components/SingnUpReducer';

const App = () => {  
  return (
    <CounterProvider>
    <div style={{backgroundColor : '#CCE6E6',minHeight: '100vh'}}>
    {/* <div> */}
    <Navbar/>
    <SecondaryTopNavbar/>
    <Routing/>
    </div>
    </CounterProvider>
    )
  // return(
  //   // <UseReducers></UseReducers>
  //   // <SingnUpReducer></SingnUpReducer>
  // )
  };
  
  export default App;
  