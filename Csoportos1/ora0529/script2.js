let num1=Number(prompt("kérem az első számot"));
let action=prompt("Kérem az elvégzendő műveletet");
let num2=Number(prompt("kérem a második számot"));
let result=0;
let good=true;
if(isNaN(num1) || isNaN(num2)) {
    alert("legalább az egyik szám nem szám!"); good=false;
}
if (action=="+") {result=num1+num2;}
else if(action=="-") {result=num1-num2;}
else if(action=="*") {result=num1*num2;}
else if(action=="/") {result=num1/num2;}
else {
    alert("nem műveleti jelet adtál meg!");
    good=false;
}
if(good) {alert("eredmény: "+num1+action+num2+"="+result);}