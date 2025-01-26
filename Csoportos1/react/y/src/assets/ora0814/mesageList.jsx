function MessageList({messages})
{
    
    return(           
        <ul>
            {messages.map((message,index)=>{
                let style;
                if(message.type=="error") style={color:'red'}
                else if(message.type=="warming") style={color:'yellow'}
                else style={color:'blue'}
                return <li key={index} style={style}>{message.text}</li>})}
        </ul>     
    )
}

export default MessageList