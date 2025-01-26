import {Route,BrowserRouter} from "react-router-dom"
import { Routes } from "react-router-dom";
import TownBrowser from "./TownBrowser";
import Search from "./Search";


import Header from "./Header"
import "./style.css";
import Home from "./Home";
import About from "./About";
function App()
{
    return( 
    <BrowserRouter>
    <TownBrowser>
    <Header/>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/search" element={<Search/>}/>
    </Routes>
    </TownBrowser>
    </BrowserRouter>)
}

export default App