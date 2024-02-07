import axios from "axios";
import { useContext, useEffect, useState } from "react";
import DisplayItemListCarOrLike from "./DisplayItemListCarOrLike";
import { CounterContext } from "../contextAPI/CreateContextAPI";

export default function Like (){

    const [listOfLike, setListOfLike] = useState([])
    
    const fetchData = async () => {
        try {
          const response = await axios.get('http://localhost:5000/like/');
          setListOfLike(response.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
    useEffect(() => {
        fetchData();
    },[])

    

    const deleteItem = (item) => {                                                                                      
      const updatedList = listOfLike.filter((existingItem) => existingItem !== item);
      setListOfLike(updatedList);
    };



    return (
        <div>
            {listOfLike.map((item, index) => (
                <DisplayItemListCarOrLike key={index} item={item} text={'Add to cart'} onDelete={deleteItem}/>
            ))}
        </div>
    )
 }