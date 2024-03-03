import Button from "../props/Button";

import heart from '../assets/Heart.png'
import Likedheart from '../assets/red-heart-icon.png'
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { CounterContext } from "../contextAPI/CreateContextAPI";

export default function ItemDisplay({item}) {


    const { incrementLike, incrementCart, newUser, listOffLike} = useContext(CounterContext);


    let liked = item.isLiked
    console.log(newUser.userId +"data" + item.isLiked)


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

    const [UpdateLike, setUpdateLike] = useState({
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
          userId : ''
        // price :'',

    })
    

    const [isLike, setIsLiked] = useState(false);
    let url ="http://localhost:5000/cart";
    useEffect(() => {
                if(isLike){
            url = 'http://localhost:5000/like'
             postDataLikeOrCart(url, UpdateLike)
        } else{
 url = 'http://localhost:5000/cart'
 postDataLikeOrCart(url, UpdateLike)
        }
      }, [isLike, UpdateLike]);

      useEffect(() =>{
        updateProducts()
      },[updateProduct, isLike])

      useEffect(() =>{
        listOffLike.map((item) =>{
          // console.log("list item",item.userId)
          // console.log("list item2",localStorage.getItem('userId'))
      if(item.userId === localStorage.getItem("userId")){
      
        liked = item.userId === localStorage.getItem("userId")
        // console.log("list item3",localStorage.getItem("userId"))
      }
      })
      },[isLike,UpdateLike])

      const handleClickBuyNow = () => {
       postDetails();
  };


  const handleClickLike = () => {
    setIsLiked(true)
    incrementLike(true)
    handleData()
};

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
        isLiked : true,
    })
}

const updateProducts = async () =>{

    try{
        const urls = 'http://localhost:5000/products/'+item._id
      const response = await axios.patch(urls, updateProduct)
      setUpdateLike({
        title: response.data.title,
        price: response.data.price,
        description: response.data.description,
        category: response.data.category,
        image: response.data.image,
        rating: {
            rate: response.data.rating.rate,
            count: response.data.rating.count,
        },
        isLiked : true,
        userId : newUser.userId
      })
      console.log("product change like",response.data)
    }catch (error) {
        console.error('Error fetching data:', error);
      }
      
    }
    // console.log('data like', UpdateLike)

const postDetails = async () => {
    try {
        const urls = 'http://localhost:5000/products/'+item._id
      const response = await axios.get(urls)
      setUpdateLike({
        title: response.data.title,
        price: response.data.price,
        description: response.data.description,
        category: response.data.category,
        image: response.data.image,
        rating: {
          rate: response.data.rating.rate,
          count: response.data.rating.count,
        },
        isLiked : response.data.isLiked,
        userId : newUser.userId
      })
      incrementCart(true)
      // postDataLikeOrCart(url,response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
    
  };
  
  const postDataLikeOrCart = async(url,getResponse) => {
    try{
        console.log("url try",url)
        const response = await axios.post(url, getResponse)
        console.log("like data",response.data)
        } catch (error) {
            console.error('Error fetching data:', error);
          } 
  }

//   listOffLike.map((item) =>{
//     console.log("list item",item.userId)
//     console.log("list item2",localStorage.getItem('userId'))
// if(item.userId === localStorage.getItem("userId")){

//   liked = item.userId === localStorage.getItem("userId")
//   console.log("list item3",localStorage.getItem("userId"))
// }
// })

if(newUser.userId == localStorage.getItem('userId')){
console.log("console log",newUser.userId)
}
// console.log("check for like",localStorage.getItem("userId") === listOffLike.userId)
// // if(localStorage.getItem("userId") === listOffLike.userId){
// // }
// console.log("check",listOffLike.userId)
// console.log(item.userId)

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
