const product1 = { name: "Kenyér", quantity: 10, price: 500, id: "kgsjdhgsdf" };
const product2 = {
  name: "Kifli",
  quantity: 3,
  price: 100,
  id: "kgsjdhgdgdfgf",
};
const product3 = { name: "Tej", quantity: 20, price: 600, id: "kgsjdhgsd20f" };

const products=[product1,product2,product3];
for (let i=0; i<3;i++)
{
    console.log(products[i]);
}

let minproduct=products[0];
let minprice=products[0].price;

for (let i=1 ;i<products.length;i++)
{
    if(minprice>products[i].price) 
    {
        minprice=products[i].price;
        minproduct=products[i];
    }
}
console.log("legolcsóbb termék:"+minproduct.name+" ára. "+minproduct.price);

function increasePrice(id,price)
{
    let j=-1;
    do {
        j++;
    } while(products[j].id!=id && j<products.length)
    if (products[j].id==id) products[j].price=price;
}

increasePrice("kgsjdhgsd20f",610);
for (let i=0; i<3;i++)
    {
        console.log(products[i]);
    }
    