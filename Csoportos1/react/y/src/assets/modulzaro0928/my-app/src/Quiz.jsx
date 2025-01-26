import Header from "./Header.jsx"
import Start from "./Start.jsx"
import QuestionBlock from "./QuestionBlock.jsx";
import Footer from "./Footer.jsx";
import { useContext } from "react";
import { QuestionContext } from "./questionContext.jsx";
import Result from "./Result.jsx";

export default function Quiz()
{
    const {questions,over}=useContext(QuestionContext);
    return (<>
  {over ?
  <>
<Start/>
{ questions &&  <>
<Header/>
<QuestionBlock/>
<Footer/></>}
    </>: <Result/>}
    </>)
}

