const numbers =[1, 2, 3, 4, 5, 6, 7, 8, 9];;
const even=[];
const odd=[];
for(let i=1; i<numbers.length;i++)
{
    if(numbers[i]%2==0) {even.push(numbers[i]);}
    else {odd.push(numbers[i]);}
}

console.log("páros");
arrayprint(even);
console.log("páratlan");
arrayprint(odd);

function arrayprint(arr1)
{
    for(let i=0;i<arr1.length;i++)
    {
        console.log(arr1[i]);
    }
}