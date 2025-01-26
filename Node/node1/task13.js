const arg=process.argv[2];
let num;
if (!arg || isNaN(arg)) {num=5;}
else num=Math.abs(Number(arg));
num=Math.round(num);

for(let i=0; i<num;i++)
{
    let stars="*".padStart(num-i," ");
    stars=stars.padEnd(num+i,"*");
    console.log(stars);
}