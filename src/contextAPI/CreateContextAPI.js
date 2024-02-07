// CounterContext.js
import axios from 'axios';
import { createContext, useContext, useEffect, useState } from 'react';

const CounterContext = createContext();

const CounterProvider = ({ children }) => {
  const [ likeCount, setLikeCount] = useState(0);
  const [cartCount, setCartCount] = useState(0);
  const [listOffProducts, setListOfProducts] = useState();
  
  
    useEffect(() => {
        fetchDataCart()
        fetchDataLike()
        fetchData()
    },[])


    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/products/');
        setListOfProducts(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

  const incrementLike = (value) => {
    // console.log('like method',count)
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
    try {
      const response = await axios.get('http://localhost:5000/cart/');
      setCartCount(response.data.length)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const fetchDataLike = async () => {
    try {
      const response = await axios.get('http://localhost:5000/like/');
      setLikeCount(response.data.length);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <CounterContext.Provider value={{likeCount, incrementLike , incrementCart, cartCount, listOffProducts}}>
      {children}
    </CounterContext.Provider>
  );
};

export { CounterContext, CounterProvider };
