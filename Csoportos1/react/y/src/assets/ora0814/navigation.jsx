function Navigation({role})
{
    let nav=[];
    switch(role)
    {
        case "admin": {nav=["Dashboard", "Users","Settings"]; break;}
        case "user" : { nav=["Home", "Profile","Settings"];break;}
        default: {nav=["Home","Login"];}
    }
    return (
        <ul>
            {nav.map((item,index)=><li key={index}>{item}</li>)}
        </ul>
    )
}
export default Navigation