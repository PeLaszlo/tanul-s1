import { QuestionContext } from "./questionContext";
import { useContext } from "react";
export default function Result()
{

    const {questions,result}=useContext(QuestionContext);
    let resultRate=0;
   
    if (questions && questions.length>0 ) resultRate=Math.round(Number(result)/questions.length*100);
   
    let resultText="";
    let resultColor="white"
    if (resultRate<40) {resultText="You can do better"; resultColor="red";}
    else if (resultRate<70) {resultText="Not bad";resultColor="yellow";}
    else {resultText="Congaturation";resultColor="green";}
    return (<div className="result">
        <div style={{background:"lightgray"}}>
            <h2>Quiz Completed</h2>
            </div>
            <div >
            <div className={resultColor} style={{width:"25%", margin:"auto", textAlign:"center", borderRadius:"10px", padding:"5px"} }>
            <p>{resultText}</p>
            </div>
            <h1 style={{textAlign:"center"}}>
                {resultRate} %
                </h1>
            </div>
    </div>)
}