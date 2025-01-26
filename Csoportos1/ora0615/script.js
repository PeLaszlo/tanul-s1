// 1 feladat 
const houses =[
{
    adress:"Bp. nyír utcsa 2",
    owner: 
    {
        lastname:"Kovács",
        firstname:"Imre",
        money: 20000000
    },
    oldowners:[
        {
            lastname:"Fagy",
            firstname:"Gyula",
            money: 20000000
        },
        {
            lastname:"Kiss",
            firstname:"Gyula",
            money: 20000000
        },
    ], 
    price: 12000000,
    sellingFor:false,  
},
{
    adress:"Bp. nyír utcsa 4",
    owner: 
    {
        lastname:"szabó",
        firstname:"Imre",
        money: 30000000
    },
    oldowners:[
        
        {
            lastname:"Nagyokos",
            firstname:"Gyula",
            money: 20000000,
        },
        
        {
            lastname:"Kisokos",
            firstname:"Gyula",
            money: 20000000,
        },

    ],
    price: 15000000,
    sellingFor:true,  
},
{
    adress:"Bp. nyír utca 6",
    owner: 
    {
        lastname:"Nagy",
        firstname:"katalin",
        money: 15000000
    },
    oldowners:[
        
        {
            lastname:"Fehér",
            firstname:"Edina",
            money: 20000000,
        }, 
        {
            lastname:"Fekete",
            firstname:"Ilona",
            money: 20000000,
        },

    ],
    price: 11000000,
    sellingFor:true,  
},

];
console.log(houses);
// 2 feladat 
function getOwnerName(neiberhood,adress)
{   let owner=null;
   for(i=0;i<neiberhood.length;i++) 
    {
        if (neiberhood[i].adress==adress) {
            owner=neiberhood[i].owner;
            break;
        }
    }
    return owner;
}
console.log("--------- 2 feladat eredményei -------------");
console.log(getOwnerName(houses,"Bp. nyír utca 6"));
console.log(getOwnerName(houses,"bp. Nincs utca 34"));
// 3. feladat -------------------------
function changeOwner(neiberhood,adress,owner)
{
    let index=-1;
    for(i=0;i<neiberhood.length;i++) 
        {
            if (neiberhood[i].adress==adress) {
                index=i;
                break;
            }
        }
        if (index==-1) return;
        const oldOwner=neiberhood[index].owner;
        neiberhood[index].oldowners.push(oldOwner);
        neiberhood[index].owner=owner

}
console.log("--------- 3 feladat eredményei -------------");
let newOwner={lastname:"Újember",firstname:"Zsolt", money:1000};
changeOwner(houses,"Bp. nyír utcsa 4",newOwner);
console.log(houses);
// 4. feladat

function buying (neiberhood,adress,newOwner)
{
    let index=-1;
    for(i=0;i<neiberhood.length;i++) 
        {
            if (neiberhood[i].adress==adress) {
                index=i;
                break;
            }
        }
        if (index==-1) return;
        if(neiberhood[index].sellingFor)
            {
                if (neiberhood[index].price<=newOwner.money) {
                    neiberhood[index].owner.money+=neiberhood[index].price;
                    changeOwner(neiberhood,adress,newOwner);
                    neiberhood[index].owner.money-=neiberhood[index].price;
                }
                else {
                    console.log("A vevőnek nincs elég pénze.");
                    return;
                }
            }
            else 
            {
                console.log("A ház nem eladó!");
                return;
            }
}
console.log("--------- 3 feladat eredményei -------------");
buying(houses,"Bp. nyír utcsa 4",newOwner);
newOwner={lastname:"Második",firstname:"Géza", money:100000000};
buying(houses,"Bp. nyír utcsa 2",newOwner);
buying(houses,"Bp. nyír utcsa 4",newOwner);

console.log(houses);
// 2.2 feladatsor
function summa (a)
{
    let temp=a.toString();
    let sum=0;
    for(i=0;i<temp.length;i++)
        {
            sum+=Number(temp[i]);
        }
    return sum;
}
console.log(summa(123));


// 2.3 feladat

const products=[
    {
        name:"alma",
        quantity:100,
        price: 120,
        id: 1,
    },
    {
        name:"körte",
        quantity:10,
        price: 150,
        id: 2,
    },
    {
        name:"szőlő",
        quantity:210,
        price: 145,
        id: 3,
    },
    {
        name:"szilva",
        quantity:2,
        price: 10,
        id: 4,
    },
];
function lack (prod,piece)
{
    if(!prod.length) return;
    answer=[];
    for(i=0;i<prod.length;i++)
        {
            if (prod[i].quantity<piece) {
                answer.push(prod[i]);
            }
        }
    return answer;
}
console.log("------------------- 2.3 feladat megoldásai .......");
console.log(lack(products,5));
function findproduct(id)
{
    for(i=0;i<products.length;i++)
        {
            if (products[i].id==id) 
             {
                return i;
             }
        }
        return -1;
}
function fillproduct (id,quantity)
{
    const index=findproduct(id);
    if(index>-1)products[index].quantity+=quantity;
    else console.log("Nincs ilyen termék");
}
function setprice(id,price)
{
    const index=findproduct(id);
    if(index>-1) products[index].price=price;
}
fillproduct(2,10);
setprice(3,1000);
console.log(products);
function action(id,discont)
{
    const index=findproduct(id);
    if(index>-1) products[index].price*=(1-discont/100);
}
action(1,20);
console.log(products);
// 4. feladat ----------------
const cases=[];
function addcase(name,text)
{
    const task={name:name,
        discribe:text,
        status:"open",};
    cases.push(task);
}
function printcases()
{
    for(i=0;i<cases.length;i++)
        {
            console.log(cases[i]);
        }
}
function update(name,status)
{
    const statuses=["opem","fixed","pending","closed"];
    if(!statuses.mathes(status)) {console.log("érvénytelen státusz");return;}
    for(i=0;i<cases.length;i++)
        {
            if(cases[i].name==name) {
                cases[i].status=status;
                 return;
                }
        }
}
addcase("zoltán","hibás telefonkészülék");
addcase("imre"," nem tud tárcsázni");
printcases();
update("zoltán","fixed");
printcases();

// homework -------------------
const bankaccounts=[];

function checkaccountnumber(accNum)
{
        if (accNum.length==17 || accNum.length==26)
        {
            const segment1=Number(accNum.substring(0,8));
            const segment2=Number(accNum.substring(9,17));
            if (isNaN(segment1) || isNaN(segment2) || accNum[8]!="-") 
                {
                    console.log("Hibás a számlaszám!");
                    return false;
                }
                if (accNum.length>17) {
                    const segment3=Number(accNum.substring(18,26));
                    if(isNaN(segment3) || accNum[17]!="-") {
                        console.log("Hibás a számlaszám !");
                        return false
                    }
                }
                return true;
        }
      else 
        {
            console.log("Hibás a számlaszám !");
            return false;
        }
}

function newAccount(name,accountNum,balance=0)
{
   if(checkaccountnumber(accountNum))
    {
        const account={name:name,
            accontNumber:accountNum,
            balance: balance
        };
        bankaccounts.push(account);
    }
}
newAccount("Józsi","12345678-12345678-12345678",2000);
newAccount("hiba1","12345678-123456780-12345678",2000);
newAccount("hiba2","12345678-12345678123456789",2000);
newAccount("Hiba3","a2345678-12345678-12345678",2000);
console.log(bankaccounts);
function findAccount(name)
{
    let index=-1;
    for(let i=0;i<bankaccounts.length;i++)
        {
            if (bankaccounts[i].name==name) {
                index=i;
                break;
            }
        }
        return index;
}
function setBalance(name,balance)
{
    const index=findAccount(name);
    if (index==-1) {
        console.log("nincs ilyen bankszámla.");
        return;
    }
    bankaccounts[index].balance=balance;
}
function printAllClientaccount()
{
    for(i=0;i<bankaccounts.length;i++)
        {
            console.log(i,". ügyfél neve ",bankaccounts[i].name);
            console.log("-- számlaszáma ",bankaccounts[i].accontNumber );
            console.log("-- egyenlege ",bankaccounts[i].balance,);
        }
}
newAccount("Imre","12345678-12345678-12345679",5000);
newAccount("Kata","12345679-12345678-12345678",2000);
newAccount("Pista","12345670-12345678",2000);

printAllClientaccount();


function transaction(name1,account1,name2, account2,amung)
{
    if (isNaN(Number(amung))) {console.log("hibás adat"); return false;}
    const clientindex1=findAccount(name1);
    const clientindex2=findAccount(name2);
    if (clientindex1==-1 || clientindex2==-1) 
        {
            console.log("Az egyik ügyfél nem azonosítható");
            return false;
        }
    const client1=bankaccounts[clientindex1];
    const client2=bankaccounts[clientindex2];
    if (client1.accontNumber==account1 && 
        client2.accontNumber==account2)
        {
            if (client1.balance>=amung)
                {
                    bankaccounts[clientindex1].balance-=amung;
                    bankaccounts[clientindex2].balance+=amung;
                    return true;
                }
            else {
                console.log("Nincs elég fedezett az utaláshoz.");
                return false;
            }
        }
        else 
        {
            console.log("Az adatellenőrzés sikretelen.");
            return false;
        }

}
let good=transaction("Imre","12345678-12345678-12345679","Pista","12345670-12345678",100);
if(good) {console.log("sikeres utalás");}
else {console.log("Sikertelen utalás");}
printAllClientaccount();
