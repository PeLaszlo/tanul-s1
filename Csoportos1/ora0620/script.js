// 1 feladat
const orders=
[
    {
        name: "Joe Doe",
        adress: "nyúl utca 2.",
        products: ["óra","laptop","egér"],
        status: "open",
        changed: 0,
    },
    {
        name: "Joe Bow",
        adress: "Fül utca 2.",
        products: ["karperec","nodebook","billentyűzet"],
        status: "closed",
        changed: 1,
    },
];
function addOrder(name,adress,products)
{
    if(!products.length) return null;
    const order={
        name,
        adress,
        products,
        status:"open",
        xhanged:0,
    };
    orders.push(order);
}
function printorders()
{
    for(let i=0;i<orders.length;i++)
      {
        console.log(i+1,". rendelés. ",orders[i]);
      }
}
function updateOrder(name, newstatus)
{
    if(newstatus!="open" && newstatus!="closed") return;
  const index=findOrder(name);
  if (index!=-1) {
    orders[index].status=newstatus;
    orders[index].changed++;
}
console.log("nincs ilyen megrendelés");
}

function findOrder(name)
{
    let index=-1;
    for(i=0;i<orders.length;i++)
      {
        if (orders[i].name==name) {index=i;}
      }
      return index;

}
addOrder("dr. Bubo","tölgyfa odú",["tetoszkóp","fecskendő"]);
printorders();
updateOrder("dr. Bubo","closed");
printorders();
function findcustomer(product)
{
    const customers=[];
    for(let i=0;i<orders.length;i++)
        {
            for(let j=0;j<orders[i].products.length;j++)
                {
                    if(orders[i].products[j]==product) customers.push(orders[i].name);
                }
        }
        return customers;
}
console.log(findcustomer("óra"));

// 2. feladat

function notdubleChar(text)
{
    for(let i=0;i<text.length;i++){
        if(text.indexOf(text[i],i+1)==-1 && text.substring(0,i).indexOf(text[i])==-1) {
            return text[i];
        }
    }
    return "";
}
console.log(notdubleChar("ez egy teszt szöveg"));
console.log(notdubleChar("ababab"));