const url="https://openlibrary.org/search/authors.json?q=";

async function findauthor()
{
    const autUrl=url+document.getElementById("authorInput").value;
    const resume= await fetch(autUrl);
    const authors=await resume.json();
    const autorContainer=document.getElementById("authorList-container");
    autorContainer.innerHTML="";
    console.log(authors);
    authors.docs.forEach((author) =>
        autorContainer.append(createAuthorCard(author))
    );
}

function createAuthorCard(author)
{
    const authorCard=document.createElement("div");
    const authorimage=document.createElement("img");
    authorimage.src=`https://covers.openlibrary.org/a/olid/${author.key}-M.jpg`
    authorimage.alt="image:"+author.name;
    const authorname=document.createElement("h4");
    authorname.innerText=author.name;
    const authorbirth=document.createElement("p");
    if(author.birth_date) {
        authorbirth.innerText="születési év: "+author.birth_date;
    }
    const authordeth=document.createElement("p");
    if(author.death_date) {
        authordeth.innerText="elhunyt: "+author.death_date;
    }
    authorCard.append(authorimage,authorname,authorbirth,authordeth);
    return authorCard;
}

