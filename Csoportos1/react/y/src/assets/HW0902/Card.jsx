export default function Card({data})
{
    return (<>
        <header>Styling</header>
        <img src={data.imageUrl} alt="picture" />
        <h3>{data.title}</h3>
        <p>{data.text}</p>
        <button type="button" className="btn-primary"> Primary Action</button>
        <button type="button" className="btn-secondary"> Secondary Action</button> <br />
        <select name="cardList" id="cardList">
            {data.listItems.map((item,index)=><option key={index}>{item}</option>)}
        </select>
    </>)
}