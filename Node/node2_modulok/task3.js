const rl=require("readline-sync");
const familyname=rl.question("kerlek add meg a vezetekneved ");
const firstname=rl.question("kerlek add meg a kersztneved ");
const city=rl.question("Kerem a várost: ");

console.log("Nev:",familyname,firstname);
console.log("varos: ",city);
let num="q";
while(isNaN(num))
{
    num=rl.question("Kerem a szamot: ");
    num=Number(num);
}
console.log("megadott szam:", num);

const color=["piros","sárga","kék","zöld","barna"];
const index=rl.keyInSelect(color,"kerem valasszon szint");
if(index==-1) Console.log("nem valastott szint");
else console.log("választott szín. ",color[index]);
 