
import { useContext, useEffect, useState } from 'react'
import mainImage from '../assets/mainpageimage.png'
import Button from '../props/Button'

import { useNavigate  } from 'react-router-dom';
import { CounterContext } from '../contextAPI/CreateContextAPI';
import axios from 'axios';
export default function Home() {
    const history = useNavigate ();

    
    function onClickShopNow(){
        history('/ListOdData');
    }
    return (
        <div style={{ display: 'flex',backgroundColor: '#96E9FB', marginLeft: '30px', marginRight: '100px' , borderRadius : '15px'}}>
                <div style={{alignSelf : 'center' , paddingLeft : '200px',  marginRight : '100px', alignContent : 'center'}}>
                    <h5 style={{color : '#2A7CC7', }}>SUMMER 2020</h5>
                    <h1>NEW COLLECTION</h1>
                    <h>We know how large objects will act, but things on a small scale.</h>
                    <div style={{paddingTop : '20px'}}>
                    <Button onClick={onClickShopNow} >SHOP NOW</Button>
                    </div>
                </div>
                <div style={{ marginLeft : '250px', overflow: 'visible',}}>
                    <img src={mainImage} alt='main iamge'  />
            </div>
        </div>
    )
}

