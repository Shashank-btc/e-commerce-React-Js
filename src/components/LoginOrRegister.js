import { useState } from "react";
import ForgotPassword from "./ForgotPassword";
import Loginimage from "./Loginimage";
import SignIn from "./SignIn";

export default function LoginOrRegister (){

    const [value, setValue] = useState(false);

    function changeValue(){
        setValue(true)
    }
    
    function valuePass(){
        setValue(false)
    }

    return(
        <div style={{display : 'flex', justifyContent : 'space-evenly'}}>
      
      <Loginimage/>
      {value ? <ForgotPassword onClick={valuePass}/>:<SignIn onClick={changeValue}/>}
  
    </div>
    )
 }