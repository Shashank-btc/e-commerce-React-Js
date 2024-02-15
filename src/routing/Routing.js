import { Route, Routes, defer } from "react-router-dom";
import Home from "../components/Home";
import About from "../components/About";
import Blog from "../components/Blog";
import Content from "../components/Content";
import Cart from "../components/Cart";
import Like from "../components/Likes";
import LoginOrRegister from "../components/LoginOrRegister";
import ListOfItems from "../components/ListOfItems";
import SignIn from "../components/SignIn";
import SignUp from "../components/SingnUP";
import Profile from "../components/Profile";
import PaymentScreen from "../components/PaymentScreen";
export default function Routing() {
return(
<Routes>
<Route path='/' element={<Home></Home>}/>
<Route path='/About' element={<About></About>}/>
<Route path='/Blog' element={<Blog></Blog>}/>
<Route path='/Contact' element={<Content></Content>}/>
<Route path='/Cart' element={<Cart></Cart>}/>
<Route path='/Like' element={<Like></Like>}/>
<Route path='/ListOdData' element={<ListOfItems></ListOfItems>}/>
<Route path='/LoginOrRegister' element={<LoginOrRegister></LoginOrRegister>}/>
<Route path="/SignUP" element={<SignUp></SignUp>}/>
<Route path="/Profile" element={<Profile></Profile>}/>
<Route path="/Payment" element={<PaymentScreen></PaymentScreen>}/>
</Routes>
);
}