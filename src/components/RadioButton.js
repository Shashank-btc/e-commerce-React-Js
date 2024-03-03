import React from "react";
import phonepay from '../assets/phonepe-logo-icon.webp'
import Inputfield from "./Inputfiled";

export default function RadioButton({text, img, selected, onChange , value}){


    return(
        <div style={{width :'35%'}}>
                <input type="radio" style={{width: '30px', paddingBottom : '3px'}} checked={selected} onChange={onChange} value={value}/>
                { img !=='' ?<img src={img}  style={{width : '20px', height: '20px', paddingBottom : '3px'}}/> : <></>}
            <label style={{margin: '3px', marginBottom : '5px'}}>{text}</label>
        </div>
    )
}