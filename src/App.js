import React, { useState, useEffect } from 'react';
import Navbar from './components/TopNavBar';
import SecondaryTopNavbar from './components/SecondaryTopbar';
import Routing from './routing/Routing';
import { CounterProvider } from './contextAPI/CreateContextAPI';
import UseReducers from './Reducer/UseReducers';
import SingnUpReducer from './components/SingnUpReducer';
import { Provider } from 'react-redux';
import store from './learn-redux/Example-2/StoardData';
import BookContainer from './learn-redux/BookContainer';
import Counter from './learn-redux/Example-2/Counter';

const App = () => {  
  return (
    // <CounterProvider>
    // <div style={{backgroundColor : '#CCE6E6',minHeight: '100vh'}}>
    // {/* <div> */}
    // <Navbar/>
    // <SecondaryTopNavbar/>
    // <Routing/>
    // </div>
    // </CounterProvider>
    // )
  // return(
  //   // <UseReducers></UseReducers>
  //   // <SingnUpReducer></SingnUpReducer>
  // )
  // return(
    // <Provider store={store}>
    //   <BookContainer></BookContainer>
    // </Provider>
    <Provider store={store}>
      <Counter></Counter>
    </Provider>
  )
  };
  
  export default App;
  