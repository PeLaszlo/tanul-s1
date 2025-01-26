function Greating({isMorning})
{
    console.log(isMorning);
    let text="Good " ;
   if(isMorning) {text+="Morning";}
   else {text+="Evening"}
    return(<h2>{text}</h2>)
}
export default Greating