import React, { useContext, useEffect, useState } from "react";
import Inputfield from "./Inputfiled";
import add from '../assets/pngtree-add-vector-icon-png-image_470700.jpg'
import sub from '../assets/subtract-alt.svg'
import Button from "../props/Button";
import { CounterContext } from "../contextAPI/CreateContextAPI";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export default function Wallet(){

    const { newUser } = useContext(CounterContext);

    const navigation = useNavigate();


    const [walletAmount, setWalletAmount] = useState(0)
    const [updateUser, setUpdateUser] = useState({
        name : newUser.name,
        email : newUser.email,
        password : newUser.password,
        userId : newUser.userId,
        wallet : newUser.wallet
    })

    useEffect(() =>{
        if(walletAmount !== 0)
        addAmountToAPI()
    },[updateUser])

    function handleAdd(){
        setWalletAmount(walletAmount+100)
    }

    function handleSub(){
        setWalletAmount(walletAmount-50)
    }

    function walletOnChange(event){
        // if(event.target.value > 0)
        setWalletAmount(event.target.value)
    // else alert("please enter more than '0'")
    }
    
    function updateUserWallet(){
        let currentWallet = 0;
        if(newUser.wallet !== null){
            let adeedAmount = parseFloat(newUser.wallet)
            currentWallet = adeedAmount + parseFloat(walletAmount)
            // console.log("check1 ",typeof adeedAmount)
        } else{
            currentWallet = walletAmount
        }
        console.log("check ",currentWallet)
        setUpdateUser({
            name : newUser.name,
            email : newUser.email,
            password : newUser.password,
            userId : newUser.userId,
            wallet : currentWallet
        })
        // addAmountToAPI()
    }
    
    const addAmountToAPI = async() => {
        try{
            console.log('addd')
            const data = localStorage.getItem("userId");
            var url = 'http://localhost:5000/user/'+data
            const response = await axios.patch(url, updateUser);
            // console.log("response.data is",response.data)
            console.log(response)
            navigation('/ListOdData')
            } catch(error){
              console.error('Error fetching data:', error);
            }
    }


    return(<>
            <h2 style={{margin : '5px'}}>ADD Money to wallet</h2>
        <div style={{alignContent : 'center', justifyContent : 'center', display : 'flex', }}>
            <div style={{alignSelf : 'center', width  :'30%', marginTop : '50px', display : 'flex', justifyContent : 'center'}}>
                <img src={add} style={{height : '25px', marginTop :'13px', mixBlendMode: 'multiply'}} onClick={handleAdd}/>  
            <Inputfield value={walletAmount} onChange={walletOnChange} placeholder='please some amount in numbers' type='number'/>
            <img src={sub} style={{height : '20px', marginTop :'15px', mixBlendMode: 'multiply'}} onClick={handleSub}/>
        </div>
        </div>
        <div style={{ display : 'flex', justifyContent : 'center'}}>
            <Button onClick={updateUserWallet}>Add to wallet</Button>
            </div>
        </>
    )
}