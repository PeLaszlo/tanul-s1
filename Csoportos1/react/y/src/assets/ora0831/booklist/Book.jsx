import { useContext } from "react";
import CurencyContex from "./CurencyContex.jsx"


function Book({ title, price,read,readbtn }) {
    const {curancy} = useContext(CurencyContex);
    price=(price*curancy.conversionRate).toFixed(2);
    
    return (
        <div style={{ border: "1px solid black", borderRadius:"10px", margin:"15px", textAlign:"center" }}>
            <h3>{title}</h3>
            <h4> {curancy.symbol=="Ft" ? `${price} ${curancy.symbol}` :`${curancy.symbol} ${price}` }</h4>
            <button onClick={readbtn}>{read ? "read": "unread"}</button>
        </div>
    );
}

export default Book;