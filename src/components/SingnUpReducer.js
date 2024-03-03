import React, { useReducer } from 'react'
import Inputfield from './Inputfiled'
import Button from '../props/Button'
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'
import axios from 'axios'

function SingnUpReducer({type, onClick}) {

   const intialState = {
    name :"",
    email: "",
    password : "",
    userId : "",

   }


    function reducer(state,action){
        switch(action.type){
            case "newUser":
                return {
                    ...state,
                    [action.field] : action.value,
                }
                // case "newEmail":
                //     return {
                //         ...state,
                //         [action.field] : action.value
                //     }
                //     case "newPassword":
                //         return {
                //             ...state,
                //             [action.field] : action.value,
                //         }
                        default : return state

        }
    }

    const[User,dispatch] =useReducer(reducer,intialState)

   function onValueChage(e,field) {
    dispatch({
        type : "newUser",
        field : field,
         value : e.target.value
    })
    // if(field === 'name') {
    //     dispatch({
    //         type : "newName",
    //         field : field,
    //          value : e.target.value
    //     })
    // }  else if(field === "email") {
    //     dispatch({
    //         type : "newEmail",
    //         field : field,
    //          value : e.target.value
    //     })
    //  }
    //     else if(field === "password") {
    //         dispatch({
    //             type : "newPassword",
    //             field : field,
    //              value : e.target.value
    //         })
    //     }
    }

    const auth = getAuth();


    const handleSignUp = async (event) => {
         event.preventDefault(); // Prevent default form submission behavior

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, User.email, User.password);
            const user = userCredential.user;
            console.log('User registered:', user);
            if (user.uid !== null) {
                callCreateUser(user.uid);
            }
            // Additional logic after user registration
        } catch (error) {
            console.error('Error registering user:', error.message);
        }
    }

    const callCreateUser = async (id) => {
      try {
          // console.log("hello", name, email, password, id)
          // console.log("url try",url)
          var url = 'http://localhost:5000/user'
          const response = await axios.post(url, {
              name: User.name,
              email: User.email,
              password: User.password,
              userId: id
          })
          console.log(response.data)
          onClick()

      } catch (error) {
          console.error('Error fetching data:', error);
      }
  }



  return (
    <div>
    <h2>
        Sign Up
    </h2>
    <form>
        <label for='name' >Name</label>
        <Inputfield type={type} value={User.name} onChange={(e)=>{onValueChage(e,'name')}}></Inputfield>
        <br />
        <label for='name' >Email</label>
        <Inputfield type={type} onChange={(e)=>{onValueChage(e,'email')}} value={User.email}></Inputfield>
        <br />
        <label for='name' >Password</label>
        <Inputfield type={type} onChange={(e)=>{onValueChage(e,'password')}} value={User.password}></Inputfield>
        <br />
        <label for='name' >Confirm Password</label>
        <Inputfield type='password'></Inputfield>
        <br />
        <Button onClick={handleSignUp} > Submit </Button>
        <Button onClick={onClick} > Back to Sign In </Button>


      <li>Email: {User.email} </li>
      <li>Name: {User.name}</li>
      <li>Password: {User.password}</li>
 
    </form>
</div>
  )
}

export default SingnUpReducer