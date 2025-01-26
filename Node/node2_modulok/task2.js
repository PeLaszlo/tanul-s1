import { createInterface } from "readline";

const r2=createInterface({input:process.stdin,output:process.stdout});
let go= true;
r2.question("Mi a jelszó: ",((password)=>{
    console.log("A jelszó: ",password);
    go=false;
    r2.close(); 
}));


