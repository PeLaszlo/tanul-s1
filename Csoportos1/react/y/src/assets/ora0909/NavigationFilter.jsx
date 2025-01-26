import { useState } from "react";
import {useSearchParams} from "react-router-dom"

export default function NavigationFilter()
{
    const [filter,setfilter]=useSearchParams();
    const param=filter.get("category");
    const [category,setCategory]= useState(param);
    const clickHandler=(event)=>{
        if(event.target.value=="book") {filter.set("category","book"); setCategory("book");}
        else if(event.target.value=="movie") {filter.set("category","movie");setCategory("movie");}
        else if(event.target.value=="music") {filter.set("category","music");setCategory("music");}
        setfilter(filter);
    }
    return <div className="container">
        <button type="buton" onClick={clickHandler} value="book">Book</button>
        <button type="buton" onClick={clickHandler} value="movie">Movies</button>
        <button type="buton" onClick={clickHandler} value="music">Music</button>
        <p>Választott Ketegoria: {category}</p>
    </div>
}