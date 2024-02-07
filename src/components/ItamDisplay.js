import Button from "../props/Button";

import heart from '../assets/Heart.png'
import Likedheart from '../assets/red-heart-icon.png'
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { CounterContext } from "../contextAPI/CreateContextAPI";

export default function ItemDisplay({item}) {


    const { incrementLike, incrementCart } = useContext(CounterContext);

    let liked = item.isLiked

    const [updateProduct, setUpdateProduct] = useState({
        title: '',
        price :'',
        description :'',
        category :'',
        image :'',
        rating: {
            rate: '',
            count: ''
          },
          isLiked :'',
        // price :'',

    })
    

    const [isLike, setIsLiked] = useState(false);
    let url ="http://localhost:5000/cart";
    useEffect(() => {
                if(isLike){
            url = 'http://localhost:5000/like'
             postDataLikeOrCart(url,item)
        } else{
 url = 'http://localhost:5000/cart'

        }
      }, [isLike]);

      useEffect(() =>{
        updateProducts()
      },[updateProduct])

      const handleClickBuyNow = () => {
       postDetails();
  };


  const handleClickLike = () => {
    setIsLiked(true)
    incrementLike(true)
    handleData()
};

// console.log('item data1 ',item)
function handleData(){
    setUpdateProduct({
        title: item.title,
        price: item.price,
        description: item.description,
        category: item.category,
        image: item.image,
        rating: {
            rate: item.rating.rate,
            count: item.rating.count,
        },
        isLiked : true
    })
}

const updateProducts = async () =>{

    try{

        console.log('data ', updateProduct)
        const urls = 'http://localhost:5000/products/'+item._id
      const response = await axios.patch(urls, updateProduct)
      console.log(response.data)
    }catch (error) {
        console.error('Error fetching data:', error);
      }
}

const postDetails = async () => {
    try {
        const urls = 'http://localhost:5000/products/'+item._id
      const response = await axios.get(urls)
      incrementCart(true)
      postDataLikeOrCart(url,response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
    
  };
  
  const postDataLikeOrCart = async(url,getResponse) => {
    try{
        console.log("url try",url)
        const response = await axios.post(url, getResponse)
        console.log(response.data)
        } catch (error) {
            console.error('Error fetching data:', error);
          } 
  }


    return (
        <div style={{ width : '60%', height : '60%', margin: '25px',}}>

            <div style={{  justifyContent: 'end', display: "flex",}}>
                <img src={(isLike || item.isLiked) ? Likedheart : heart} style={{ width : '20%', height: '20%',  justifyContent: 'end', justifyContent: 'end', cursor: 'pointer',mixBlendMode: 'multiply',}} onClick={handleClickLike} />
            </div>
            <div style={{justifyContent : ""}}>
                <img src={item.image} alt="display" style={{ width: '100%', height: '100%', mixBlendMode: 'multiply',}} />
            </div>

            <div style={{ paddingLeft: '20px' }}>
                <div style={{ marginTop: '25px' }}>
                    <h5 style={{ maxLines: '' }}> {item.title}</h5>
                </div>
                <div style={{ marginTop: '25px', color: '' }}>
                    <h6>$ {item.price}</h6>
                </div>
                <div style={{ marginTop: '15px' }}>
                    <h>{item.rating.rate}/{item.rating.count}</h>
                </div>
                <div>
                    <Button onClick={handleClickBuyNow}>Add to Cart</Button>
                </div>
            </div>

        </div>
    )
}
