import { QuestionContext } from "./questionContext";
import { useContext, useState } from "react";
export default function Header()
{
    const {questionNumber,questions,result}=useContext(QuestionContext); 
    let  category= questions.length>0 ? questions[questionNumber-1].category :"";
    return (<header className="header">
        <h1 style={{textAlign:"center"}}>My Quiz App</h1>
        <div>
        <h2>Question Category: {category}</h2>
        <progress value={questionNumber} max={questions.length} className="progress">{result}/{questions.length}</progress>
        </div>
    </header>)
}