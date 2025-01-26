const arg1=process.argv[2];
const arg2=process.argv[3];
let num1;
let num2;
console.log(arg1);
if (!arg1 || isNaN(arg1)) {num1=1;}
else num1=Number(arg1);
if (!arg2 || isNaN(arg2)) {num2=3;}
else num2=Number(arg2);
if(num1>num2) {
    let temp=num1;
    num1=num2;
    num2=temp;
}
let summa=0;
for(let i=num1;i<=num2;i++)
{
    summa+=i;
}
console.log("A "+num1+" és "+num2+" számintervalum összege: ",summa);