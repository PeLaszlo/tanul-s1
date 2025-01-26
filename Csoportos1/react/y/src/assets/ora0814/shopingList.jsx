function ShopingList ({list})
{
    if(Array.isArray(list)&& list.length>0)
    {
        return( <ul>
            {list.map((item,index)=><li key={index} style={ item.bought ? {color:"darkgreen"} : {color:"red"} } > {item.name}</li> )}
        </ul>)
    }
    return <p>Lista üres</p>
}
export default ShopingList