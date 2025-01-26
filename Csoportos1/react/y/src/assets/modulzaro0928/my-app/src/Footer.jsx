import { QuestionContext } from "./questionContext";
import { useContext, useState } from "react";

export default function Footer()
{
    const {questionNumber,setQuestionNumber,questions,answered,setAnswered,setOver}=useContext(QuestionContext);
    const [end,setEnd]=useState(false);
    
    const nextHandle=()=>{
        if (answered)
        {
            if (questionNumber<questions.length )
            {
                let number=questionNumber+1;
                setQuestionNumber(number);
                setAnswered(false);
            }
            else setEnd(true);
        }
        else alert("Kérem előbb válsszon opciót!");
    }

    const showResult=()=>{
            setOver(false);
    }

    const newbtn=()=>{alert ("Ez a funció nincs kész.")}
    return (<div className="footerbox">
        {end? <button className="green footerbtn" onClick={showResult}>Show result </button> :
        <button onClick={nextHandle} className="blue footerbtn">Next Question</button>}
        <button onClick={newbtn} className="green footerbtn">Add New Question</button>
    </div>)
}