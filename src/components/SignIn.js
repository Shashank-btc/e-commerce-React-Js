
import React, { useContext, useState } from 'react';
import Inputfield from './Inputfiled';
import Paragraph from './Paragraph';
import Button from '../props/Button';
import SignUp from './SingnUP';
// import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { CounterContext } from '../contextAPI/CreateContextAPI';


export default function SignIn({onClick}) {
  

      const { newUser, setNewUser } = useContext(CounterContext);

  const[showSignUp,setSetShowSignUp]=useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate ();
  
  function displaySignUp(){
    setSetShowSignUp(true)
  }
  
  function backtoSignUp(){
    setSetShowSignUp(false)
  }

  
  function forEmail(event){
    setEmail(event.target.value)
}
function forPassword(event){
    setPassword(event.target.value)
}
  
  // function handleLogin(){
  //     const auth = getAuth();
  //     signInWithEmailAndPassword(auth, email, password)
  //     .then((userCredential) => {
  //       // Signed in successfully
  //       const user = userCredential.user;
  //       console.log('User signed in successfully:', user);
  //       navigate('/ListOdData');
  //       // You can perform additional actions here, such as redirecting to another page
  //     })
  //     .catch((error) => {
  //       // Error signing in
  //       const errorCode = error.code;
  //       const errorMessage = error.message;
  //       console.error('Error signing in:', errorMessage);
  //       setError(errorMessage);
  //     });
      
  //   }

  function handleLogin(){
    setNewUser({
      email :email,
      password : password,
    })
  }


  return (
<>
      { showSignUp ? <SignUp onClick={backtoSignUp}/> :
    <div style={{alignContent : 'center', justifyContent : 'center', padding : '10px'}} >

      <div style={{ alignItems : 'center', justifyItems : 'center', alignSelf : 'center'}}> 
      <h2 className='headerSignIn'>Sign In</h2>
      <Inputfield placeholder='Email' type ='text' value={email} onChange={forEmail}/>
      <br/>
       <Inputfield placeholder='Password' type ='password' value={password} onChange={forPassword}/>
       <br/>
       <div style={{alignItems : 'center', display : 'flex', justifyContent : 'center'}}>
       <Button className='button' onClick={handleLogin}>SIGN IN</Button>
       <Button onClick={onClick} className='forgotPwd' > Forgot Password? </Button>
       </div>
       <Paragraph text="If you don't have an account?" onClick={displaySignUp}/>
       </div>

    </div>
}
</>
    
  );
}

