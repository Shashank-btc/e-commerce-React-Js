import React from "react";
import { useDispatch } from "react-redux";
import { authActions } from "../learn-redux/Example-2/StoardData";
import Button from "../props/Button";
// import '../Styles/profile.css'

export default function Profile(){

    const dispactch = useDispatch()

    function loginoutState(event){
        event.preventDefault();
        dispactch(authActions.logout())
    }
    return(
        <div>
         <Button onClick={loginoutState} > signout </Button>
        </div>
    )
}