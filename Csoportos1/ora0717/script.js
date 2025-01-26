/*const warehouse = [
    [
        { category: "table", name: "Asztallap", amount: 10 },
        { category: "cabinet", name: "Szekrényajtó", amount: 2 },
        { category: "flower", name: "Virágföld", amount: 7 },
    ],
    [
        { category: "flower", name: "Virág", amount: 2 },
        { category: "table", name: "Asztalláb", amount: 11 },
        { category: "cabinet", name: "Szekrényfogantyú", amount: 11 },
        { category: "table", name: "Asztalfiók", amount: 4 },
    ],
    [
        { category: "flower", name: "Virágcserép", amount: 11 },
        { category: "cabinet", name: "Szekrénypolc", amount: 2 },
    ],
]; */

let warehouse=[];
loadJson();


function load()
{
const container=document.getElementById("pieces");
container.innerHTML="";
warehouse.forEach((arrlist,i)=>{
    const blockcont=document.createElement("div");
    blockcont.classList.add("blocklist");
    arrlist.forEach((block,j)=>{
       const box=createBlock(block,i,j);
       blockcont.append(box);
})
    container.append(blockcont);
});
btns=document.createElement("div");
createbtn("Asztal vásárlás","table",btns);
createbtn("Szekrény vásárlás","cabinet",btns);
createbtn("Virág vásárlás","flower",btns);
btns.classList.add("button");
container.append(btns);
}

function createBlock(block,i,j)
{
    const blk=document.createElement("div");
    const heading=document.createElement("h4");
    heading.innerText=block.name;
    const amuntobj=document.createElement("p");
    amuntobj.innerText=block.amount;
    blk.append(heading,amuntobj);
    blk.classList.add("block");
    if(block.amount<3) blk.classList.add("redblock");
    else blk.classList.add("greenblock");
    const incrementBtn=document.createElement("button");
    incrementBtn.innerText="készlet növelése";
    incrementBtn.setAttribute("onClick",`incrementAmount(${i},${j})`);
    blk.append(incrementBtn);
    return blk;
}

function createbtn(text,id,btns)
{
    const btn=document.createElement("button");
    btn.innerText=text;
    btn.setAttribute("id",id);
    btn.setAttribute("onClick",`buying("${id}")`);
    btn.setAttribute("button","button");
    btns.append(btn);
}

function buying(product)
{
 for(let i=0;i<warehouse.length;i++)
 {
    for(let j=0; j<warehouse[i].length;j++)
    {
        if (warehouse[i][j].amount<=0) 
        {
            alert("Nincs elég alkatrész!");
            return;
        }
    }
 }
warehouse.forEach((lists)=>lists.forEach((item)=>{
    if(item.category==product) {
            item.amount--;
    }
}));

saveChanging()
}

async function loadJson()
{
    const url="http://localhost:3000/warehouse";
    const resume=await fetch(url);
    const warehouses=await resume.json();
    warehouse=warehouses[0].shelves;
    load();
}

async function saveChanging()
{
    const url="http://localhost:3000/warehouse/1";
    const warehouses={id:1, shelves:warehouse};
    const bodytext=JSON.stringify(warehouses);
    const resome= await fetch(url,
        {method:"PUT",headers:{"Content-Type":"application/json"},
             body:bodytext
        }
    )
    load();
}

function setNewPiece()
{   
    const addCategory= document.getElementById("category").value;
    const addName= document.getElementById("newItem").value;
    const addAmount= document.getElementById("amount").value;
    const addself =document.getElementById("self").value;
    const item={
        category: addCategory, name: addName, amount: addAmount,
    };
   warehouse[addself].push(item);
   saveChanging()
}
function incrementAmount(selfIndex,itemIndex)
{
    warehouse[selfIndex][itemIndex].amount++;
    saveChanging();
}
