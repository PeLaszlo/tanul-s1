const rl=require("readline-sync");

const number=Math.round(Math.random()*100);
let tip=-1;
while(tip!=number)
{
    const answer=rl.question("kerem a tippelt szamot:");
    tip=Number(answer);
    if(isNaN(tip)) {console.log("ez nem szám!");}
    else if(tip<number) console.log("A szám nagyobb");
    else if(tip>number) console.log("a szám kisebb");
    else console.log("eltaláltad");
}