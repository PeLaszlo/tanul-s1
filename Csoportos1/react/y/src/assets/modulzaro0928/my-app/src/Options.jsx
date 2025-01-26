import { QuestionContext } from "./questionContext";
import { useContext, useEffect, useState } from "react";
export default function Options()
{
    const {questions,questionNumber,answered,setAnswered,result,setResult}=useContext(QuestionContext);
    const question=questions[questionNumber-1];
    const clickHandler=(Jindex,opjAnswer)=>{
        setAnswered(true);
        setAnswerIndex(Jindex);
        if (opjAnswer==question.correctAnswer)
        {
            setResult(result+1);
            setNewcolor("green");
        }
        else setNewcolor("red");

    };
    const [orderedOption,setOrderedOption]=useState([]);
    const [answerIndex,setAnswerIndex]=useState(-1);
    const [newcolor,setNewcolor]=useState("white");
    useEffect(()=>{
    const preOption=question.options;
    const actOption=[];
    const tempIndex=[];
    
    for(let i=0;i<question.options.length;i++)
    {
       let index;
        do{
            index=Math.floor(Math.random()*preOption.length);

        } while(tempIndex.includes(index));
        actOption.push(preOption[index]);
        tempIndex.push(index);
    }
    setOrderedOption(actOption);
    },[questionNumber]);

return( <div className="optionclass">
    {orderedOption.map((opt,j) => <button key={j} onClick={()=>clickHandler(j,opt)} name={opt} disabled={answered} 
     className={answered ? (answerIndex==j ? newcolor:""): "optionbtn" }>{opt}</button>)}
    </div>)
}