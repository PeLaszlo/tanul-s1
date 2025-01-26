function  CategorizedList ({categories})
{
    const catList= Object.keys(categories).map((category,index1)=>(<div key={index1}><h2>{category}</h2>
        {categories[category].length>0 ?
        <ul>
        {categories[category].map((item,index2)=><li key={index2}>{item}</li>)}
        </ul> : <p>No items in this category</p>}
    </div>))
    return(<div>
        {catList}
    </div>)
}

export default CategorizedList