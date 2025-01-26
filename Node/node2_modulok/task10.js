const readlinesinc=require("readline-sync");
const text=readlinesinc.question("kerem a szoveet: ");
if(text.length<25) {console.log(" rövidebb mint 25.");}
if(text.length>20) {console.log(text.substring(0,20)+"...")}