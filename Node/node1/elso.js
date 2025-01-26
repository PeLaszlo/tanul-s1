const arr1=[1, 2, 3, 10, 3, 5];
let maxnumber=arr1[0];
for (let i=1; i<arr1.length; i++) 
{
    if( maxnumber<arr1[i]) {maxnumber=arr1[i]}
}
console.log(maxnumber);

