import React, { useContext, useState } from 'react'
import Inputfield from './Inputfiled';
import Button from '../props/Button';
import axios from 'axios';
import { CounterContext } from '../contextAPI/CreateContextAPI';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default function SignUp({ type, onClick }) {

    // const { newUser, setNewUser } = useContext(CounterContext);


    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const auth = getAuth();


    const handleSignUp = async (event) => {
         event.preventDefault(); // Prevent default form submission behavior

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
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
                console.log("hello", name, email, password, id)
                // console.log("url try",url)
                var url = 'http://localhost:5000/user'
                const response = await axios.post(url, {
                    name: name,
                    email: email,
                    password: password,
                    userId: id
                })
                console.log(response.data)
                onClick()

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        function forEmail(event) {
            setEmail(event.target.value)
        }
        function forPassword(event) {
            setPassword(event.target.value)
        }
        function forName(event) {
            setName(event.target.value)
        }

        return (
            <div>
                <h2>
                    Sign Up
                </h2>
                <form>
                    <label for='name' >Name</label>
                    <Inputfield type={type} onChange={forName} value={name}></Inputfield>
                    <br />
                    <label for='name' >Email</label>
                    <Inputfield type={type} onChange={forEmail} value={email}></Inputfield>
                    <br />
                    <label for='name' >Password</label>
                    <Inputfield type='password' onChange={forPassword} value={password}></Inputfield>
                    <br />
                    <label for='name' >Confirm Password</label>
                    <Inputfield type='password'></Inputfield>
                    <br />
                    <Button onClick={handleSignUp} > Submit </Button>
                    <Button onClick={onClick} > Back to Sign In </Button>
                </form>
            </div>
        );
}