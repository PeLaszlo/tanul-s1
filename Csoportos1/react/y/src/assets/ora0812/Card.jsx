function Card({title,discription})
{
    return(
        <div className="card" style={{border: "1px solid black", margin:"10px"  }}>
            <h2>{title}</h2>
            <p>{discription}</p>
        </div>
    )
}
export default Card