import axios from "axios";
import { useEffect, useState } from "react";
import DisplayItemListCarOrLike from "./DisplayItemListCarOrLike";

export default function Like (){
    const [listOfCart, setListOfCart] = useState([])
    
    const fetchData = async () => {
        try {
          const response = await axios.get('http://localhost:5000/like/');
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
                <DisplayItemListCarOrLike key={index} item={item} text={'Add to cart'}/>
            ))}
        </div>
    )
 }