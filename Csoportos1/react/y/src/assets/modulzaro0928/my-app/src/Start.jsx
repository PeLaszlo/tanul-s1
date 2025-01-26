import { useEffect } from "react";
import { QuestionContext } from "./questionContext";
import { useContext } from "react";

export default function Start()
{
    const {setQuestions}=useContext(QuestionContext);
    async function readjson()
    {
        try {
            const response =await fetch("http://localhost:3000/questions");
            const datas=await response.json();
            if (!response.ok) throw new Error("Szerver hiba történt.");
            const temp=[];
            for(let i=0;datas.length;i++)
            {
                const index=Math.floor(Math.random()*datas.length);
                temp.push(datas[index]);
                datas.splice(index,1);
            }
            setQuestions(temp);
        }
        catch(Error) {console.log(Error.message);}
    }
    useEffect((()=>readjson),[]);
   

return <></>
}