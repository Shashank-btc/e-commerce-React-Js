
import { useEffect, useState } from "react"
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

    return (
        <div>
            {listOfCart.map((item, index) => (
                <DisplayItemListCarOrLike key={index} item={item} text={'Proceed to checkout'}/>
            ))}
        </div>
    )
}