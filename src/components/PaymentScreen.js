import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import DisplayItemListCarOrLike from "./DisplayItemListCarOrLike";
import Inputfield from "./Inputfiled";
import Button from "../props/Button";
import { CounterContext } from "../contextAPI/CreateContextAPI";
import ExpandedInputField from "./ExpandedInputField";
import RadioButton from "./RadioButton";
import phonepay from '../assets/phonepe-logo-icon.webp'
import gpay from '../assets/google-pay-icon.webp'
import paytm from '../assets/paytm-icon (1).webp'
import card from '../assets/debit-card-icon.webp'
import CustomAlart from "./CustomAlart";
import DottedLine from "../props/DottedLine";
import axios from "axios";
// import phonepay from '../assets/phonepe-logo-icon.webp'


export default function PaymentScreen() {

    const navigation = useNavigate();

    const { state } = useLocation();
    const { newUser } = useContext(CounterContext)

    const [payemt, setPayment] = useState(false)

    const [selectedOption, setSelectedOption] = useState(null);
    const [upiValue, setUpiValue] = useState(null);
    const [adrress, setAdrress] = useState(null);
    const [phoneNo, setPhoneNo] = useState('')
    const [isChekBox, setIsCheckBox] = useState(false)
    const [isWalletGrater, setIsWalletGrater] = useState(true)
    const [balance, setBalance] = useState(0)
    const [updateUser, setUpdateUser] = useState({
        name : newUser.name,
        email : newUser.email,
        password : newUser.password,
        userId : newUser.userId,
        wallet : newUser.wallet
    })

    const handleOptionChange = (value) => {
        if (selectedOption === value) {
            // If the same option is clicked again, unselect it
            setSelectedOption(null);
        } else {
            setSelectedOption(value);
        }
        console.log("value", value)
    //     if(!isChekBox){
    //     if(value === 'cod'){
    //         setBalance(parseFloat(state.item.price) + 1)
    //     } else{
    //         setBalance(state.item.price)
    //     }
    // } else{
    //     // if(value === 'cod'){
    //     //     setBalance(balance+1)
    //     // } else{
    //     //     setBalance(balance-1)

    //     // }

    // }
    };
    useEffect(() =>{
        if(selectedOption !==null || upiValue !== null || !isWalletGrater)
        addAmountToAPI()
    },[updateUser])

    useEffect(() => {
        checkWalletBalance()
    }, [isChekBox])

    function handelPayment() {
        setPayment(true)
    }

    function valueChangeUpi(event) {
        setUpiValue(event.target.value)
    }

    function payment() {
        let wallet = (!isWalletGrater ? balance : 0 )
        if (upiValue !== null || selectedOption === 'cod' || !isWalletGrater) {
            alert('order has placed sucessfully')
            setUpdateUser({
                name : newUser.name,
                email : newUser.email,
                password : newUser.password,
                userId : newUser.userId,
                wallet : wallet
            })
            setUpiValue(null)
        } else {
            alert('please enter UPI ID')
        }
    }
    // console.log('upiId2', upiValue)

    function handleAdress(event) {
        setAdrress(event.target.value)
    }

    function handlePhoneNo(event) {
        setPhoneNo(event.target.value)
    }

    function handleWallet() {
        setIsCheckBox(!isChekBox)
    }

    function checkWalletBalance() {
        if (isChekBox) {
            let itemPrice = parseFloat(state.item.price)
            let walletPrice = parseFloat(newUser.wallet)
            var walletBalance;
            if (walletPrice > itemPrice) {
                walletBalance = walletPrice - itemPrice
                setIsWalletGrater(false)
                setSelectedOption(null)
                setBalance(walletBalance.toFixed(2))
            } else {
                walletBalance = itemPrice - walletPrice
                setBalance(walletBalance.toFixed(2))
            }
            // let walletBalance = parseInt(state.item.price) - parseInt(newUser.wallet) 
            // console.log(walletBalance)
        } else {
            setIsWalletGrater(true)
            setBalance(state.item.price)
            console.log('null')
        }
    }

    const addAmountToAPI = async() => {
        console.log("check", state.item._id)
        try{
            const data = localStorage.getItem("userId");
            var url = 'http://localhost:5000/user/'+data
            const response = await axios.patch(url, updateUser);
            // console.log("response.data is",response.data)
            console.log("response is ",response)
            // updateData()
            updateData()
            } catch(error){
              console.error('Error fetching data:', error);
            }
    }

    
    const updateData = async() =>{
        let url = 'http://localhost:5000/cart/'+state.item._id
        try{
            const response = await axios.delete(url);
            console.log(response.data.message);
            // handleDelete()
            navigation('/ListOdData')
        } catch (error) {
            console.error('Error deleting example:', error);
          }
    }


    return (

        <div style={{ margin: '40px' }}>
            <h2>Payment</h2>
            <DisplayItemListCarOrLike item={state.item} text={''} onDelete={''}></DisplayItemListCarOrLike>
            {payemt ? (
                <>
                    <div style={{ marginLeft: '60px', width: '600px' }}>
                        <input type="checkbox" value="wallet" style={{ width: '35px' }} onChange={handleWallet} checked={isChekBox} />
                        <label style={{ margin: '3px', marginBottom: '5px' }}>wallet
                        {isChekBox ? (
                            <>
                                {!isWalletGrater ? (
                                    ` your's balance is  $ ${balance}`
                                ) : (
                                    ` your's balance is not sufficient please select other payment to pay $ ${balance}`
                                )}
                            </>
                        ) : (
                            <></>
                        )}</label>

                        {isWalletGrater ? <><RadioButton text='Phone Pay' img={phonepay} selected={selectedOption === 'phonepay'} onChange={() => handleOptionChange('phonepay')} value='phonepay'></RadioButton>
                            {selectedOption === 'phonepay' ? <Inputfield placeholder='Enter UPI ID' onChange={valueChangeUpi} value={upiValue} /> : null}
                            <RadioButton text='G pay' img={gpay} selected={selectedOption === 'gpay'} onChange={() => handleOptionChange('gpay')} value='gpay'></RadioButton>
                            {selectedOption === 'gpay' ? <Inputfield placeholder='Enter UPI ID' onChange={valueChangeUpi} value={upiValue} /> : null}
                            <RadioButton text='Paytm' img={paytm} selected={selectedOption === 'paytm'} onChange={() => handleOptionChange('paytm')} value='paytm'></RadioButton>
                            {selectedOption === 'paytm' ? <Inputfield placeholder='Enter UPI ID' onChange={valueChangeUpi} value={upiValue} /> : null}
                            <RadioButton text='Card' img={card} selected={selectedOption === 'card'} onChange={() => handleOptionChange('card')} value='card'></RadioButton>
                            {selectedOption === 'card' ? (<><Inputfield placeholder='Enter Card No' onChange={valueChangeUpi} value={upiValue} /> <br />
                                <div style={{ display: 'flex' }}>
                                    <Inputfield placeholder='MM/YY' /> <Inputfield placeholder='CVV' />
                                </div>
                            </>) : null}
                            <RadioButton text='Cash on dalivery(cod)' img={""} selected={selectedOption === 'cod'} onChange={() => handleOptionChange('cod')} value='cod'></RadioButton>
                            {selectedOption === 'cod' ? <p style={{ marginLeft: '30px' }}>cod will add extra charges of $ 1</p> : null}
                        </> : <></>}
                    </div>
                    <DottedLine />
                    <div style={{ display: 'flex', justifyContent: 'space-between', paddingLeft : '50px'}}>
                    <h4>Shipping address</h4>
                        <div>
                            <h5>{newUser.name}</h5>
                            <h6>{newUser.email}</h6>
                            <h6>{adrress}</h6>
                            <h6>{phoneNo}</h6>
                            <div>
                                {isChekBox && !isWalletGrater ? <><h6 style={{ alignSelf: 'flex-end' }}>balance</h6></> : <></>}
                               <h6 style={{ alignSelf: 'flex-end' }}>{selectedOption}</h6>
                            </div>
                        </div>
                        <div style={{ display: 'flex', flexDirection: "column", justifyContent: 'flex-end' }}>
                            {!isWalletGrater ? (
                                <>
                                   {isChekBox ? <h6 style={{ alignSelf: 'flex-end' }}>  $ {newUser.wallet}</h6> : <></>}
                                   <h6 style={{ alignSelf: 'flex-end' }}>- $ {state.item.price}</h6>
                                   </>
                            ) : (<>
                                   <h6 style={{ alignSelf: 'flex-end' }}> $ {state.item.price}</h6>
                             {isChekBox ? <h6 style={{ alignSelf: 'flex-end' }}>-  $ {newUser.wallet}</h6> : <></>}
                            </>)}
                            {selectedOption === 'cod' ? <h6 style={{ alignSelf: 'flex-end' }}> + $ 1</h6>: <></>}
                            <DottedLine/>
                            <h6 style={{ alignSelf: 'flex-end' }}>${selectedOption ==='cod' ? balance + 1 : (!isWalletGrater ? 0 : balance)}</h6>                            
                        </div>
                    </div>
                    <Button onClick={() => { setPayment(!payemt) }}>Edit address</Button>
                    <Button onClick={payment}>Place Order</Button>

                </>

            ) : <>
                <form style={{ margin: '50px', width: '35%' }}>
                    <label for='name' style={{ marginLeft: '10px' }}>Name</label>
                    <Inputfield type='text' onChange={() => { }} value={newUser.name}></Inputfield>
                    <br />
                    <label for='name' style={{ marginLeft: '10px' }}>Email</label>
                    <Inputfield type='text' onChange={() => { }} value={newUser.email}></Inputfield>
                    <br />
                    <label for='name' style={{ marginLeft: '10px' }}>Shipping Address</label>
                    <ExpandedInputField onChange={handleAdress} value={adrress} />
                    <label for='name' style={{ marginLeft: '10px' }}>phone Number</label>
                    <Inputfield type='number' onChange={handlePhoneNo} value={phoneNo}></Inputfield>
                </form><Button onClick={handelPayment}>Make Payment</Button></>}
        </div>
    )
}
