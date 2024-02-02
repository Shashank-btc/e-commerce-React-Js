import axios from "axios";
import ItemDisplay from "./ItamDisplay"
import { useEffect, useState } from "react";

export default function ListOfItems(){

    const [examples, setExamples] = useState([]);

    const fetchData = async () => {
        try {
          const response = await axios.get('http://localhost:5000/products/');
          setExamples(response.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
    useEffect(() => {
        fetchData();
      }, []);
    return(
        <div style={{ display: 'grid',  gridTemplateColumns: 'repeat(3, minmax(10rem, 1fr))',  gap: '16px',backgroundColor : ""}}>
            {examples.map((item, index) => (
          <ItemDisplay key={index} item ={item}/>
        ))}
        </div>
    )
}