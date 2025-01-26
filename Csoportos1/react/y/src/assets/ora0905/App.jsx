import { Outlet } from 'react-router-dom';
import Navigation from "./Navigation.jsx"
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Home from"./home.jsx"
import About from"./about.jsx"
import Todos from "./Todo.jsx"
export default function App()
{
    return(<>
    <BrowserRouter>
    <Navigation/>
    <Routes>
        <Route path='/' element={""} />
        <Route path="Home" element={<Home />}/>
        <Route path="about" element={<About />}/>
        <Route path="todo" element={<Todos />}/>
    </Routes>
    <main>
        <Outlet />
    </main>
    </BrowserRouter>
    
    </>) 
}