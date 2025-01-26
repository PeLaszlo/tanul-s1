import {useEffect, useState} from "react"
import Book from "./Book.jsx"
import {useContext } from "react";
import currancycontex from "./CurencyContex.jsx"

function BookList() {
    const [books, setBooks]=useState([
        {
            id: 1,
            title: "The Road to React",
            price: 19.99,
            read: false,
        },
        {
            id: 2,
            title: "The Road to GraphQL",
            price: 29.99,
            read: false,
        },
        {
            id: 3,
            title: "The Road to React 2",
            price: 19.99,
            read: true,
        },
        {
            id: 4,
            title: "The Road to GraphQL 2",
            price: 29.99,
            read: false,
        },
    ]);
    useEffect(()=>{
    fetch("http://localhost:3000/books").then((response)=>response.json()).then((bookdata)=>setBooks(bookdata))
    },[])
    const changeRead=(id)=>{const newbooks=books.map((bookitem)=>bookitem.id==id ? { ... bookitem,read :!bookitem.read} :bookitem )
         setBooks(newbooks);
    }
    const {filterValue} = useContext(currancycontex);
    
    const [showReadOnly,setShowReadOnly]=useState(false);
    const onShowReadOnlyChange=()=>{setShowReadOnly(!showReadOnly)}
    return (
        <div>
            <h2>All books</h2>
            <input type="checkbox" checked={showReadOnly} onChange={onShowReadOnlyChange} />read?
            {books.filter((bookitem)=> bookitem.title.toLowerCase().includes(filterValue.toLowerCase())). 
            filter((bookitem2)=>showReadOnly ? bookitem2.read: true).
            map((book) => (
                <Book key={book.id} title={book.title} price={book.price} read={book.read} readbtn={()=>changeRead(book.id)}/>
            ))}
        </div>
    );
}

export default BookList;