export default function Card({town})
{
    return (<div className="card" >
         <h3>{town.location.name}</h3>
         <img src={town.current.condition.icon} alt="contitonIcon" />
         <p>hőmérséklet: {town.current.temp_c} C°</p>
         <p>égbolt: {town.current.condition.text}</p>
    </div>)
}