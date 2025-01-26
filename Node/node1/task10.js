const arg=process.argv[2];

if (!arg) {console.log("nics szó megadva"); process.exit(1);}
let palindrom=true;
for( let i=0;i<arg.length;i++)
{
    if(arg[i]!=arg[arg.length-1-i]) palindrom=false;
}
if(palindrom) console.log("A megadott szó palindróma");
else console.log("A megadott szó nem palindróma");