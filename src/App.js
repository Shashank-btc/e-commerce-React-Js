import React, { useState, useEffect } from 'react';
import Navbar from './components/TopNavBar';
import SecondaryTopNavbar from './components/SecondaryTopbar';
import Routing from './routing/Routing';
import { CounterProvider } from './contextAPI/CreateContextAPI';
import UseReducers from './Reducer/UseReducers';
import SingnUpReducer from './components/SingnUpReducer';
import { Provider, useSelector } from 'react-redux';
import store from './learn-redux/Example-2/StoardData';
import BookContainer from './learn-redux/BookContainer';
import Counter from './learn-redux/Example-2/Counter';
import SignIn from './components/SignIn';
import SignUp from './components/SingnUP';
import AuthSignUp from './learn-redux/AuthSignUp';
import Profile from './components/Profile';

const App = () => {  
    const stateValue = useSelector(state => state.auth.isLogin)
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
      <div style={{backgroundColor : 'blueviolet'}}>
      <Navbar/>
      <AuthSignUp/>
      {stateValue && <><Profile/><Counter></Counter></> }
      </div>
    
  )
  };
  
  export default App;
  