import "./card.css"
function Card({card})
{
    return(
        <div className="card" >
            <img  src={card.imageUrl}  alt="nincs megadva" />
            <h2> {card.name}</h2>
            <h3>kor: {card.age}</h3>
            <p> <b>hivatás:</b> {card.profession}</p>
            <p><b>leírás:</b> {card.description}</p>
        </div>
    )
}
export default Card