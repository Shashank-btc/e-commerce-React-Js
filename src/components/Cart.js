
import { useContext, useEffect, useState } from "react"
import DisplayItemListCarOrLike from "./DisplayItemListCarOrLike"
import axios from "axios";
import { CounterContext } from "../contextAPI/CreateContextAPI";

export default function Cart() {

  const { newUser } = useContext(CounterContext);


    const [listOfCart, setListOfCart] = useState([])
    
    const fetchData = async () => {
        try {
          const response = await axios.get('http://localhost:5000/cart/');
          setListOfCart(response.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
    useEffect(() => {
        fetchData();
    },[])

    const deleteItem = (item) => {
      const updatedList = listOfCart.filter((existingItem) => existingItem !== item);
      setListOfCart(updatedList);
    };
  
  return (
    <div>
        {listOfCart.map((item, index) => (
          item.userId !== null && item.userId === newUser.userId ?(
            <DisplayItemListCarOrLike key={index} item={item} text={'Proceed to checkout'} onDelete={deleteItem}/> ) :
            // 
            ( item.userId === undefined && localStorage.getItem('userId') === null? (<DisplayItemListCarOrLike key={index} item={item} text={'Proceed to checkout'} onDelete={deleteItem}/>) : null )
        ))}
    </div>
)
}
