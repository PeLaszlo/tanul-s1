const arg=process.argv[2];
let num;
if (!arg || isNaN(arg)) {num=0;}
else num=Math.abs(Number(arg));
num=Math.floor(num);
if(num>999) {console.log("túl nagy szám"); process.exit(0);}

let text="";
if (num==0) {text="nulla";}
let index=1;
while(num>=1)
{
    if (index==2) {
        if (text.length==0 && num%10==1 ){ text="tíz";}
        else if (text.length==0 && num%10==2 ){ text="husz";}
        else text=convert(num,2)+text;
    }
    else {
        text=convert(num)+(index==3 ? "száz":"")+text;
    }
    index++;
    num=Math.floor(num/10);
}
console.log("A szám:",text);

function convert(number,i=0)
{
    const digit=number%10;
    let digits;
    if (i==2) {digits=["","tizen","huszon","harminc","negyven","ötven","hatvan","hetven","nyolcvan","kilencven"];}
    else { digits=["","egy","kettő","három","négy","öt","hat","hét","nyolc","kilenc"];}
    return digits[digit];
}