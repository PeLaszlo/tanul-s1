function ItemListWithMassege({items}) {
    let text;
    if(Array.isArray(items) && items.length>0)
    {
        return(
            <ul>
                {items.map((item)=><li key={item.id}>{item.item}</li>)}
            </ul>
         )
    }
    else return "No items available."
    
}
export default ItemListWithMassege