function bookList({books})
{
    
    return(<div >
        {books.map((bookitem)=><div key={bookitem.id} > <book book={bookitem}></book></div>)}
    </div>)
}

export default bookList