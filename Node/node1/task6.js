
const arg=process.argv[2];
let num=0;
if (!arg || isNaN(arg)) {num=10;}
else num=Number(arg);
for (let i=1; i<=10;i++)
{
    console.log(num+" * "+i+" = "+num*i);
}

