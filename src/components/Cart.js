
import { useContext, useEffect, useState } from "react"
import DisplayItemListCarOrLike from "./DisplayItemListCarOrLike"
import axios from "axios";

export default function Cart() {


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
      // Create a new array excluding the item at the specified index
      const updatedList = listOfCart.filter((existingItem) => existingItem !== item);
      setListOfCart(updatedList);
    };


    return (
        <div>
            {listOfCart.map((item, index) => (
                <DisplayItemListCarOrLike key={index} item={item} text={'Proceed to checkout'} onDelete={deleteItem} />
            ))}
        </div>
    )
}