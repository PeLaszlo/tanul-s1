const arg=process.argv[2];
let num=2;
if (!arg || isNaN(arg)) {num=2;}
else num=Number(arg);
console.log("A szám fakoriálisa: ",factor(num));
 function factor(fact)
 {
    if (fact<=1) return 1;
    else return fact*factor(fact-1);
 }

