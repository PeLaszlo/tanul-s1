import {createRoutesFromChildren, useSearchParams } from"react-router-dom"
import { useState } from "react";
export default function  PaginationComponent ()
{
    const [pages,setPages]=useSearchParams();
    const[actpage,setActPage] = useState(pages.get("page")||1);
    const countDown=()=>{
        let page=Number(actpage);
        page--;
        setActPage(page);
        pages.set("page",page);
        setPages(pages);
    }
    const countUp=()=>{
        let page=Number(actpage);
        page++;
        setActPage(page);
        pages.set("page",page);
        setPages(pages);
    }
    return (<div>
        <button onClick={countDown} disabled={actpage=='1'}>&lt;</button>
        <span style={{padding:"10px 15px 10px 15px", border:"1px solid black",backgroundColor:"blue",color:"white"}}>
            {actpage}</span>
        <button onClick={countUp}>&gt;</button>
    </div>)
}