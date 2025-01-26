import { QuestionContext } from "./questionContext";
import { useContext, useState } from "react";
import Options from "./Options.jsx";

export default function QuestionBlock()
{
   
  
    const {questions,questionNumber}=useContext(QuestionContext);
    //console.log(questionNumber);
   
    const question=questions[questionNumber-1];
   
    return (<div className="qustionblock">
        <h3>Qustion: {questionNumber}</h3>
        {questions.length>0 ? <p>{question. question}</p> :null}
        {questions.length>0 ? <Options/>:null}

    </div>) 
}