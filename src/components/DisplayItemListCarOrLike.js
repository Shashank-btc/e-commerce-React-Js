import image from '../assets/mainpageimage.png'
import Button from '../props/Button'

export default function DisplayItemListCarOrLike({item, text}){
    return(
        <div style={{padding : '25px', display : 'flex', marginLeft : '50px'}}> 

            <img src={item.image} alt='img' style={{width : '200px', height : '200px', mixBlendMode: 'multiply'}} />
            <div style={{ padding : '20px', margin : '10px'}}>
            <h5>{item.title}</h5>
            <h6>{item.price}</h6>
            <h6>{item.rating.rate}/{item.rating.count}</h6>
            <h6>{item.description}</h6>
            <Button>{text}</Button>
            <Button>Remove</Button>
            </div>
        </div>
    )
}