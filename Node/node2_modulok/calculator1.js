const intrustion=process.argv[2];
const num1=Number(process.argv[3]);
const num2=Number(process.argv[4]);
if( (!intrustion) || isNaN(num1) || isNaN(num2))
{
    console.log(" Hibás parémter megadás. \n Helyesen: intrustion number number");
}
else
{
    let result=0;
    if (intrustion=="add") result=num1+num2;
    else if(intrustion=="subtract") result=num1-num2;
    else if(intrustion=="multiply") result=num1*num2;
    else if(intrustion=="divide") result=num1/num2;
    else result="ismeretlen müvelet";

    console.log("Az eredmény: ",result);
}
