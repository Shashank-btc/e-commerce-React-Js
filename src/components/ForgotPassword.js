import React, { useState } from 'react'
import Inputfield from './Inputfiled';
import Submitbtn from './SubmitBtn';
import Button from '../props/Button';

export default function ForgotPassword({placeholder,type, onClick}){

    const[inputValue,setInputValue]=useState();

    function fieldValue(event){
        setInputValue(event.target.value);

    }


    return(
        <div style={{ alignItems : 'center', justifyItems : 'center', alignSelf : 'center'}}>

            <h2 >Forgot password</h2>

            <p> Enter your email address associated with your account </p>
        
        <Inputfield  placeholder={placeholder} value={inputValue}  onChange={fieldValue} type={type}> </Inputfield>
        <br/>
        <Button onClick={onClick}> Back to Sign In </Button>
        
        </div>

    );

}