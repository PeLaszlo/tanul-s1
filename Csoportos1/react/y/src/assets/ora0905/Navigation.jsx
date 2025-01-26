import {  Link,Outlet } from 'react-router-dom'
export default function Navigation()
{
    return( <ul> 
    <li> <Link to="home"> Home </Link></li>
    <li><Link to="todo"> Todos</Link></li>
    <li> <Link to="about"> About</Link></li>
    </ul>)
}