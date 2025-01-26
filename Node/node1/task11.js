const arg=process.argv[2];
let num;
if (!arg || isNaN(arg)) {num=1;}
else num=Math.abs(Number(arg));
if(num==0) {console.log("nincs 0 elemű sorozat"); process.exit(0);}
let fibonacci=[0];
if (num>1) fibonacci.push(1);
if (num>2)
    for(let i=2; i<num; i++)
    {
        fibonacci.push(fibonacci[i-2]+fibonacci[i-1]);
    }
    fibonacci.forEach((fibi,index)=>console.log((index+1)+". elem. ",fibi));




