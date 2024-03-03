// CounterContext.js
import axios from 'axios';
import { createContext, useContext, useEffect, useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';



const CounterContext = createContext();

const CounterProvider = ({ children }) => {
  const [ likeCount, setLikeCount] = useState(0);
  const [cartCount, setCartCount] = useState(0);
  const [listOffProducts, setListOfProducts] = useState([]);
  const [listOffLike, setListOfLike] = useState([]);
  const [error, setError] = useState('');

  const [newUser, setNewUser] = useState({
    name : '',
    email : '',
    password : '',
    userId : '',
    wallet : ''  
})

const auth = getAuth();

const navigate = useNavigate ();


// console.log('get user local storgae ',localStorage.getItem("userId"))
// console.log('get userID', newUser.wallet)
const data = localStorage.getItem("userId");
  
    useEffect(() => {
      fetchDataCart()
      fetchDataLike()
      fetchData()
        getUserDetails()
      },[])

    useEffect(() =>{
      // if(newUser.userId ==='')
      // const data = localStorage.getItem("userId");
      // console.log("userId",data)
      if(data === null){
      handleLogin()
      }
    },[newUser])

   const getUserDetails= async() =>{
    try{
    var url = 'http://localhost:5000/user/'+data
    const response = await axios.get(url);
    console.log("get user data",newUser.name)
    // if(newUser.name === undefined)
    setNewUser(response.data)
    } catch(error){
      console.error('Error fetching data:', error);
    }
   }

  


    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/products/');
        setListOfProducts(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

  const incrementLike = (value) => {
    if(value)
    setLikeCount(likeCount +1);
   else
   setLikeCount(likeCount -1);
  };

  const incrementCart = (value) => {
    if(value)
    setCartCount(cartCount +1) 
  else
  setCartCount(cartCount -1)
  };

  const fetchDataCart = async () => {
    let countSign = 0;
    let count = 0;
    try {
      const response = await axios.get('http://localhost:5000/cart/');
      setCartCount(response.data.length)
      response.data.map((tem) =>{
        if(tem.userId !== "" && tem.userId === localStorage.getItem("userId")) {
          // console.log('add if',)
          // setLikeCount(likeCount+1)
          countSign++
        } else if(tem.userId === "" || tem.userId === undefined) {
          // console.log('add else',)
          // setLikeCount(likeCount+1)
          count++
        }
        
    })
    if(localStorage.getItem("userId")){
      setCartCount(countSign)
    }else{
    setCartCount(count);
    }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const fetchDataLike = async () => {
    let countSign = 0;
    let count = 0;
    try {
      const response = await axios.get('http://localhost:5000/like/');
      setListOfLike(response.data)
      response.data.map((tem) =>{
        if(tem.userId !== "" && tem.userId === localStorage.getItem("userId")) {
          // console.log('add if',)
          // setLikeCount(likeCount+1)
          countSign++
        } else if(tem.userId === "" || tem.userId === undefined) {
          // console.log('add else',)
          // setLikeCount(likeCount+1)
          count++
        }
        
    })
    // console.log('likcount',likeCount)
      // setLikeCount(response.data.length)
      if(localStorage.getItem("userId")){
        setLikeCount(countSign)
      }else{
      setLikeCount(count);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  function handleLogin() {
    signInWithEmailAndPassword(auth, newUser.email, newUser.password)
    .then((userCredential) => {
      // Signed in successfully
      const user = userCredential.user;
      // getUserDetails()
      // setNewUser({
      //           userId : user.uid,
      //           email : user.email,
      // });
      localStorage.setItem("userId", user.uid);
      // console.log('User signed in successfully:', user.uid);
      // getUserDetails()
      navigate('/ListOdData');
      // You can perform additional actions here, such as redirecting to another page
    })
    .catch((error) => {
      // Error signing in
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error('Error signing in:', errorMessage);
      setError(errorMessage);
    });
    // console.log('User signed in successfully:', newUser);
  }

    const handleLogout = async () => {
      try {
        await auth.signOut();
        localStorage.removeItem("userId");
        localStorage.clear();
        // console.log('User logged out successfully');
        // Additional logout logic (e.g., redirect to login page)
      } catch (error) {
        console.error('Error logging out:', error.message);
      }
    };


  return (
    <CounterContext.Provider value={{likeCount, incrementLike , incrementCart, cartCount, listOffProducts, newUser, setNewUser, handleLogout,listOffLike}}>
      {children}
    </CounterContext.Provider>
  );
};

export { CounterContext, CounterProvider };
