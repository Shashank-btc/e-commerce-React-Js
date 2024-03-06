import React from 'react'
import Inputfield from '../components/Inputfiled'
import Button from '../props/Button'
import { useDispatch, useSelector } from 'react-redux'
import { authActions } from './Example-2/StoardData'

function AuthSignUp() {

  const stateValue = useSelector(state => state.auth.isLogin)


    const dispactch = useDispatch()

    function loginState(event){
        event.preventDefault();
        dispactch(authActions.login())
    }

    // function loginoutState(event){
    //     event.preventDefault();
    //     dispactch(authActions.logout())
    // }
  return (
    <div>
       { !stateValue && <> 
    <form>
                    <label for='name'>Name</label>
                    <Inputfield ></Inputfield>
                    <label for='name' >Password</label>
                    <Inputfield ></Inputfield>
                    <Button onClick={loginState} > sign in </Button>
                    {/* <Button onClick={loginoutState} > signout </Button> */}
                    {/* <Button onClick={()=>{}} > Back to Sign In </Button> */}
                </form>
                </>}
    </div>
  )
}

export default AuthSignUp