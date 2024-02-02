import { Route, Routes, defer } from "react-router-dom";
import Home from "../components/Home";
import About from "../components/About";
import Blog from "../components/Blog";
import Content from "../components/Content";
import Cart from "../components/Cart";
import Like from "../components/Likes";
import LoginOrRegister from "../components/LoginOrRegister";
import ListOfItems from "../components/ListOfItems";
export default function Routing() {
return(
<Routes>
<Route path='/Home' element={<Home></Home>}/>
<Route path='/About' element={<About></About>}/>
<Route path='/Blog' element={<Blog></Blog>}/>
<Route path='/Contact' element={<Content></Content>}/>
<Route path='/Cart' element={<Cart></Cart>}/>
<Route path='/Like' element={<Like></Like>}/>
<Route path='/ListOdData' element={<ListOfItems></ListOfItems>}/>
<Route path='/LoginOrRegister' element={<LoginOrRegister></LoginOrRegister>}/>
</Routes>
);
}