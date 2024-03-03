import React, { useState } from 'react'
export default function Inputfield( { type, placeholder, onChange, value}){
   
    const[inputNumber,setInputNumber]=useState();

    function fieldNumber(event){
        setInputNumber(event.target.value);
    }
    return(
        <input style={{margin : '5px', borderRadius : '5px', width : '100%', border : 'none', outline :'none', height : '40px'}}
          placeholder={placeholder} value={value}  onChange={onChange} type={type} />
    );
}
