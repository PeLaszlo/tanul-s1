function ListItem({items})
{
    return(
        <ul>
            {items.map((item)=><li key={item.id}>{item.item}</li>)}
        </ul>
    )
}
export default ListItem