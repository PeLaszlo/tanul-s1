const getparam=process.argv[2];
if(!getparam) {
    console.log("Hiba: nincs paraméter megadva");
    process.exit(1);
}
const filename="db.json";
const fs= require("fs");
const data=fs.readFileSync(filename,"utf-8");
const phones=JSON.parse(data).contacts
switch(getparam)
{
    case "list" : {toList();break;}
    case "add" : {addphone();break;}
    case "remove" : {deletePhone();break;}
    case "toggle" : {favoritetoggle(); break;}
    case "favorite" :{listFavorite();break;}
    default: {console.log("ismeretlen paraméter: ",getparam);}
}

function toList()
{
    phones.forEach(element => {
      console.log("név: ",element.name,"telefon: ", element.number,"kedvenc:",element.isFavorite ? "igen":"nem");
    });
}

function addphone()
{
    const name =process.argv[3];
    const phonenumber=process.argv[4];
    if((!name) || (!phonenumber)) {console.log(" Hibás paraméter formátum a felvitelnél!");process.exit(1);}
    phones.push({name:name,number:phonenumber,isFavorite:false});
    save(phones);
}

function save(arr)
{
    const newData=JSON.stringify({contacts:arr});
    try{
        fs.writeFileSync(filename,newData);
        console.log("A módosítás sikeres");
    }
    catch(err)
    {
        console.error("a file felülírása sikertelen:" ,err)
    }
}

function deletePhone()
{
    
    const index =Number(process.argv[3]);
    if( isNaN(index) || index<0 || index> phones.length) 
    {
        console.log("hibás index megadás");
        process.exit(1);
    }
    console.log("törölt telefonszám: ",phones.splice(index-1,1));
    save(phones);
}

function favoritetoggle()
{
    const index =Number(process.argv[3]);
    if( isNaN(index) || index<0 || index> phones.length) 
    {
        console.log("hibás index megadás");
        process.exit(1);
    }
    phones[index-1].isFavorite=!phones[index-1].isFavorite;
    save(phones);
}

function listFavorite()
{
    phones.filter((item)=>item.isFavorite).forEach(element => {
        console.log("név: ",element.name,"telefon: ", element.number,"kedvenc:",element.isFavorite ? "igen":"nem");
      });
}