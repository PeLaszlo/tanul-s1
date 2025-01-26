import { Routes,Route,BrowserRouter,Outlet } from "react-router-dom"
import SearchParamsDisplay from "./SearchParamsDisplay.jsx"
import SearchQueryInput from "./SearchQueryInput.jsx"
import Menu from "./Menu.jsx"
import NavigationFilter from "./NavigationFilter.jsx"
import SynchronizedInputs from "./SynchronizedInputs.jsx"
import PaginationComponent from "./PagComonent.jsx"
import SearchFilters from "./SearchFilters.jsx"

function App()
{
    return (<>
  <BrowserRouter>
  <h1>Paraméterek</h1>
    <Menu/>
    <Routes>
        <Route path ="/" element =""/>
        <Route path={"search"} element={<SearchParamsDisplay/>}></Route>
        <Route path={"input"} element={<SearchQueryInput/>}></Route>
        <Route path={"navigation"} element={<NavigationFilter/>}></Route>
        <Route path={"syncron"} element={<SynchronizedInputs/>}></Route>
        <Route path={"pagination"} element={<PaginationComponent/>}></Route>
        <Route path={"SearchFilters"} element={<SearchFilters/>}></Route>

    </Routes>
    
    <Outlet/>
    </BrowserRouter>
    </>)
}

export default App