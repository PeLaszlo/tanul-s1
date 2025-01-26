import { useState } from "react"
import { QuestionContext } from "./questionContext.jsx"
export default function QuestionProvider({children})
{
    const[questions,setQuestions]=useState({});
    const[questionNumber,setQuestionNumber]=useState(1);
    const[answered,setAnswered]=useState(false);
    const[result,setResult]=useState(0);
    const[over, setOver]=useState(true);

    return (<QuestionContext.Provider value={{questions,setQuestions,questionNumber,setQuestionNumber,answered,setAnswered,result,setResult,over, setOver}}>
    {children}
    </QuestionContext.Provider>)
}