export default function Commend({data})
{
    return (<div style={{border:"1px solid black", margin:"10px", paddingLeft:"15px"}}>
        <strong>Név:</strong> {data.name} <br />
        <strong>E-mail:</strong> {data.email} <br />
        <strong>Komment:</strong>
        <p>{data.body}</p>
    </div>)
}