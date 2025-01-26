import { Link } from "react-router-dom"
export default function Menu()
{
    return (<ul>
        <li><Link to="search?test=nodata" >SearchParamsDisplay </Link></li>
        <li> <Link to="input" >SearchQueryInput</Link></li>
        <li><Link to="navigation" >NavigationFilter</Link></li>
        <li><Link to="syncron">SynchronizedInputs</Link></li>
        <li><Link to="pagination">PaginationComponent</Link></li>
        <li><Link to="SearchFilters">SearchFilters</Link></li>
    </ul>)
}