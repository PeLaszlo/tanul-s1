
const intrust=require("./calculator2.js");
const operation = process.argv[2];
const num1=Number(process.argv[3]); 
const num2=Number(process.argv[4]);
if((!operation) || isNaN(num1) || isNaN(num2))
{
    console.log("Hibás paraméter!");
    process.exit(1);
}
let result=0;
if (operation=="+") result=intrust.add (num1,num2);
else if (operation=="-") result=intrust.subcribtion(num1,num2);
else if (operation=="*") result=intrust.multiply(num1,num2);
else if (operation=="/") result=intrust.divide(num1,num2);
else result="A művelet nem értelmezhető!";
console.log("Az eredmény:",result);