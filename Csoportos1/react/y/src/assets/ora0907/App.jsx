import {useState,useEffect} from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import "./poststyle.css"
import { BrowserRouter,Routes,Route, Outlet} from "react-router-dom";
import PostDetail from "./PostDetail.jsx"
import Navi from "./Navi.jsx"
import Menu from "./Menu.jsx";
import About from "./About.jsx";


export default function App()
{
    const [apiList,setApiList]=useState([]);
    useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/posts").then((response)=>response.json())
    .then((apis)=>setApiList(apis));},[])
   
    return (<>
       <BrowserRouter>
        <Menu/>
    <Routes>
        <Route path='/' element={<Navi api={apiList}/>} />
        <Route path={"post/*"} element={<PostDetail/>}></Route>
        <Route path="about" element={<About/>}/>
    </Routes>
    
    <Outlet/>
    </BrowserRouter>
</>
    
    )
}