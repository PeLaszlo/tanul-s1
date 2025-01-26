import "bootstrap/dist/css/bootstrap.min.css"
import { Link } from "react-router-dom";

export default function Menu()
{
    return (<nav className="nav nav-pills container" style={{display:"flex",gap:"10px"}}>
        <ul >
            <li> <Link to="/">főoldal (Blog bejegyzések)</Link></li>
            <li> <Link to="about">Névjegy</Link></li>
        </ul>
    </nav>)
}