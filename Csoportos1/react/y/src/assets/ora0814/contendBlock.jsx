function ContentBlock({type,contend})
{
    if(type=="text") {
        return (
            <p>{contend}</p>
        )
    }
    else if(type=="image"){
        return (
            <img src={contend} alt="a kép" width="100px" hiegth="100px" />
        )
    }
    else if(type=="link"){
        return (<p><a href={contend.url}>{contend.name}</a></p>)
    }
}

export default ContentBlock