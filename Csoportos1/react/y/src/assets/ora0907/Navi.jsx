import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"

export default function Navi({api})
{

    return<main>
    <h1 className="text-center m-2 bg-primary">Blog bejegyzések</h1>
    <ul>
        {api.map((item)=><li key={item.id}>
            <Link to={`/post/${item.id}`}>
              {item.title}
              </Link>
            </li>)}
    </ul>
</main>
}
