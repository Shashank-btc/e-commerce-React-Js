import axios from 'axios';
import Button from '../props/Button'
import { useContext, useEffect, useState } from 'react';
import { CounterContext } from '../contextAPI/CreateContextAPI';

export default function DisplayItemListCarOrLike({item, text, onDelete}){

    const { incrementLike, incrementCart , listOffProducts} = useContext(CounterContext);

    

    const [updateLike, setUpdateLike] = useState({
        _id: '',
        title: '',
        price :'',
        description :'',
        category :'',
        image :'',
        rating: {
            rate: '',
            count: ''
          },
          isLiked : false,
        // price :'',
    
    })

    useEffect(() =>{
        updateProducts()
      },[updateLike])
    

    
    function updateTheData(item) { 
        setUpdateLike({
          _id: item._id,
          title: item.title,
          price: item.price,
          description: item.description,
          category: item.category,
          image: item.image,
          rating: {
              rate: item.rating.rate,
              count: item.rating.count,
          },
          isLiked : false
      })
      }
  
      const updateProducts = async () =>{
        try{
            const urls = 'http://localhost:5000/products/'+updateLike._id
          const response = await axios.patch(urls, updateLike)
          console.log(response)
          removeData()
        }catch (error) {
            console.error('Error fetching data:', error);
          }
    }


    function handleClick(){
        if(text === 'Add to cart'){
            
        } else{
            alert('Proceed to checkout')
        }
    }
     const handleDelete = () => {
        listOffProducts.map((details) =>(
            (item.title === details.title) ? updateTheData(details) : console.log('not this wont work')  
        ))
      };

    function removeData(){
        let url ='';
        onDelete(item);

        if(text === 'Add to cart') {
            url = 'http://localhost:5000/like/'+item._id
        } else{
            url ='http://localhost:5000/cart/'+item._id
        }

        updateData(url)
    }

    const updateData = async(url) =>{
        try{
            const response = await axios.delete(url);
            console.log(response.data.message);
            if(url.includes('/like')){
                incrementLike(false)
            } else{
                incrementCart(false)
            }
            // handleDelete()
        } catch (error) {
            console.error('Error deleting example:', error);
          }
    }



    return(
        <div style={{padding : '25px', display : 'flex', marginLeft : '50px'}}> 

            <img src={item.image} alt='img' style={{width : '200px', height : '200px', mixBlendMode: 'multiply'}} />
            <div style={{ padding : '20px', margin : '10px'}}>
            <h5>{item.title}</h5>
            <h6>{item.price}</h6>
            <h6>{item.rating.rate}/{item.rating.count}</h6>
            <h6>{item.description}</h6>
            <Button onClick={handleClick}>{text}</Button>
            <Button onClick={handleDelete}>Remove</Button>
            </div>
        </div>
    )
}