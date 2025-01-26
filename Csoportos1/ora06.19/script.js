// 1 feladat.
function makeString (array)
{
    let txt="";
    for(i=0;i<array.length;i++)
        {
            txt+=array[i];
        }
        return txt;
}
function wawe(text)
{
    const wawes=[];
    for(let i=0;i<text.length;i++) 
    {
        const chars=text.split(""); 
        chars[i]=chars[i].toUpperCase();
        wawes.push(makeString(chars));
    }
    return wawes;
}
console.log(wawe("virág"));

// 2 feladat
function putZeroBack(array)
{
    if (typeof(array)!="object") return;
    array.push("*");
    let i=0;
    while (array[i]!="*") {
        if (array[i]==0) {
            array.splice(i,1);
            array.push(0);  
        }
        i++;
    }
    array.splice(array.indexOf("*"),1);
 return array;
}
console.log(putZeroBack([2,0,4,5,0,1,7,9]));
// 3 feladat.

function toRomanMumber(number)
{
    number=Number(number);
    if (isNaN(number)) return "ez nem szám!"
    if (number<1 || number>=4000) return "értékhatáron túli szám.";
    let answer="";
    number=Math.round(number);
    let i=0;
    while(number/10>=0.1)
    {
        let item=number % 10;
        answer=getRomanNum(item,i)+answer;
        number=Math.floor(number/10);
        i++;
    }
    return answer;
}
function getRomanNum( num,i)
{
    const romans=["I","V","X","L","C","D","M"];
    let answer="";
    i=i*2;
    if (num>=5 && num<9) {
        answer=romans[i+1];
        num-=5;
    }
    switch (num) {
        case 3: answer+=romans[i];
        case 2: answer+=romans[i];
        case 1: {
            answer+=romans[i]; break;
        }
        case 4: {
            answer+=romans[i]+romans[i+1];
            break;
        }
        case 9:answer+=romans[i]+romans[i+2];
    }
    return answer;
}
console.log(toRomanMumber(2345));
console.log(234);
console.log(toRomanMumber(234));
console.log(479);
console.log(toRomanMumber(479));

