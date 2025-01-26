const arg=process.argv[2];
let num;
if (!arg || isNaN(arg)) {num=10;}
else num=Math.abs(Number(arg));
let index=1;
while(index*index<=num)
{
    console.log(index+" nyégyzete: ",index*index);
    index++;
}

