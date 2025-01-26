import { useSearchParams } from "react-router-dom"

export default function SearchFilters()
{
    const [searcParam,setSearchParam]=useSearchParams()
    let price=searcParam.get("price") || "50000";
    const priceHandler=(event)=>{
        searcParam.set("price",event.target.value);
        setSearchParam(searcParam);
    }
    const categoryHandler=(event)=>{
        searcParam.set("category",event.target.value)
        setSearchParam(searcParam);
    }

    return (<form>
        <label htmlFor="categories">Kategória válastás: </label>      
        <select name="categories" id="categories" value={searcParam.get("category")|| "movie"} onChange={categoryHandler}>
            <option value="movie">Movie</option>
            <option value="music">Music</option>
            <option value="book">Book</option>
        </select> <br />
        <label htmlFor="price">Maximális ár: </label>
        <input type="range" id="price" min="10000" max="100000" value={price} onChange={priceHandler} step="10"/>
        <span>{price}</span>
        <button>Applay filter</button>

    </form>)
}