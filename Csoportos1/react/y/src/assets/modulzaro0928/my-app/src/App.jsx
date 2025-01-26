

import {BrowserRouter} from "react-router-dom";
import QuestionProvider from "./QuestinProvider.jsx";
import {Route,Routes,Outlet} from "react-router-dom";
import Result from "./Result.jsx";

import Quiz from "./Quiz.jsx";

import "./Style.css";


export default function App()
{
return (
<BrowserRouter>


<QuestionProvider>
  <Quiz></Quiz>
</QuestionProvider>
</BrowserRouter>
)
}