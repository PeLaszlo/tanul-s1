//1. feladat
let urlbasic="https://api.dictionaryapi.dev/api/v2/entries/en/";
async function loadWord()
{
    const wordObj=document.getElementById("word");
    url=urlbasic+wordObj.value;
    const resume =await fetch(url);
    const answer =await resume.json(resume);
    console.log(answer);
    const textObj=document.createElement("p");
    const divObj=document.getElementById("wordmean");
    divObj.innerHTML="";
    answer.forEach((word) => {
        textObj.innerText="szó: "+word.word;
        textObj.innerHTML+="<br>";
        word.meanings.forEach((mean) => {
            mean.definitions.forEach((definition) =>
                textObj.innerHTML+=`definició: ${definition.definition} <br>`)
        });
    });
    divObj.append(textObj);
}