/*
  JS Alapok - Modulzáró - 2024.06.22.

  Ez a fájl tartalmazza a modulzáró gyakorlati részének feladatait. A megoldásaidat kérlek ebben a fájlban helyezd el, de dolgozni dolgozhatsz külön fájlokban is.

  Néhány jótanács:
  - mindenképpen olvasd el figyelmesen a feladatokat, különösképpen a példában megadott teszteseteket!
  - a példákban a -> jelölés után vagy a függvény visszatérési értéke, vagy a függvény által kiírandó dolog szerepel
  - ha valamivel nagyon elakadtál, inkább menj tovább és térj vissza később
  - mielőtt feltöltenéd a megoldásaidat nézd át őket
  - győződj meg róla, hogy minden kód, amit le akartál írni le van írva, és amit nem akartál leírni az nincs :)
  - a megoldásokat alapvetően a kijelölt helyekre várjuk, de segédfüggvényeket és függvényen kívüli változókat bármikor létrehozhatsz
*/

// 1. Feladat - faktoriális

// Írj egy függvényt, ami visszaadja egy beadott, nemnegatív szám faktoriálisát!
// Faktoriális: egy szám faktoriálisa az összes olyan pozitív egész szám szorzatát jelenti, ami a számnál kisebb vagy azzal egyenlő
// Jelölése a matematikában: !
// pl.: 5 faktoriálisa: 5! = 1 * 2 * 3 * 4 * 5 = 120
// megegyezés alapján a 0! = 1
// pl.: factorial(5) -> 120
// pl.: factorial(0) -> 1
// pl.: factorial(3) -> 6
// pl.: factorial(-2) -> undefined

function factorial(num) {
    if(num<0) return;
    let answer=1;
    while(num>1) {
        answer*=num;
        num--;
    }
    return answer;
}
console.log(factorial(5));
console.log(factorial(0));
console.log(factorial(3));
console.log(factorial(-2));

// 2. Feladat - FizzBuzz

// Írj egy függvényt, ami a kövektezőképpen működik:
// 1. A konzolra írja egy-től a paraméterként beadott pozitív egész számig a számokat egyesével
// 2. Ha a soron következő szám 3-mal osztható a szám helyett azt írja ki, hogy fizz
// 3. Ha a soron következő szám 5-tel osztható a szám helyett azt írja ki, hogy buzz
// 4. Ha a soron következő szám 3-mal és 5-tel is osztható a szám helyett azt írja ki, hogy fizzbuzz
// pl.: fizzbuzz(20) -> 1, 2, fizz, 4, buzz, fizz, 7, 8, fizz, buzz, 11, fizz, 13, 14, fizzbuzz, 16, 17, fizz, 19, buzz

function fizzbuzz(n) {
    // Ide jöhet a megoldás
    if(n<1) return;
    let text="";
    for(let i=1;i<=n;i++)
    {
        if (i%3==0) { text+="fizz";}
        if (i%5==0) { text+="buzz";}
        if(i%3!=0 && i%5!=0) {text+=i;}
        text+=", ";
    }
    console.log(text);
}
fizzbuzz(20);

// 3. Feladat - Unicum, csak pozitívan!

// Írj egy függvényt, ami egy egész számokat tartalmazó tömbből visszadja egy tömb formájában azokat a számokat, amelyek pozitívak!
// pl.: getPositives([1, 10, -3, 4, -156, 0, 3, 4]) -> [1, 10, 4, 3, 4]
// pl.: getPositives([-1, -2, -3]) -> []
// pl.: getPositives([3, 20, 54]) -> [3, 20, 54]

function getPositives(arr) {
    // Ide jöhet a megoldás
   if(!Array.isArray(arr)) return;
    const result=[];
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]>0) {
            result.push(arr[i]);
        }
    }
    return result;
}
console.log(getPositives([1, 10, -3, 4, -156, 0, 3, 4]));
console.log(getPositives([-1, -2, -3]));
console.log(getPositives([3, 20, 54]));

// 4. Feladat - Perdülj, fordulj!

// Írj egy függvényt, ami a paraméterként megadott tömbjét valemlyik irányba "elforgatja"!
// Balra forgatás azt jelenti, hogy a tömb első eleme a tömb utolsó helyére kerül,
// jobbra forgatás esetén a tömb utolsó eleme kerül a tömb első helyére.
// A függvény a művelet végrehajtása után adja vissza a megváltoztatott tömböt, hibás irány esetén pedig az eredetit!
// pl.: rotate("left", [1, 2, 3]) -> [2, 3, 1]
// pl.: rotate("right", [1, 2, 3]) -> [3, 1, 2]
// pl.: rotate("hibás érték", [1, 2, 3]) -> [1, 2, 3]

function rotate(direction, arr) {
    if(!Array.isArray(arr)) return;
    if (direction=="left")
     {
        let item=arr.shift();
        arr.push(item);
     }
     else if(direction=="right")
     {
        let item=arr.pop();
        arr.unshift(item);
     }
     return arr;
}
console.log(rotate("left", [1, 2, 3]));
console.log(rotate("right", [1, 2, 3]));
console.log(rotate("hibás érték", [1, 2, 3]));

// 5. Feladat - Nagy (Betűs) Szavak

// Írj egy függvényt, ami a paraméterként megadott mondatot olyan formában adja vissza, hogy annak minden szava nagybetűvel kezdődjön!
// pl.: capitalizeWords("Ha a győzelem gátja a gát, akkor fel kell robbantani.") -> "Ha A Győzelem Gátja A Gát, Akkor Fel Kell Robbantani."
// A feladathoz felhasználhatod a segítségként megadott isSeparator függvényt.

function isSeparator(c) {
    let separators = [" ", "\t", "\n", "\r", ",", ";", ".", "!", "?"];
    return separators.includes(c);
}

function capitalizeWords(text) {
    // Ide jöhet a megoldás
    let answer="";
    let newword=true;
    for(let i=0;i<text.length;i++)
    {
        let ch=text[i];
        if(newword && !isSeparator(ch)) {
            newword=false;
            ch=ch.toUpperCase();
        }
        if (isSeparator(ch)) {
            newword=true;
        }
        answer+=ch;
    }
    return answer;
}
console.log(capitalizeWords("Ha a győzelem gátja a gát, akkor fel kell robbantani."));

// 6. Feladat - Felhasználók

// 1. Készíts egy felhasználókat tartalmazó adatbázist!
// 2. Minden felhasználónak van e-mail címe, jelszava, vezeték és keresztneve
// 3. A felhasználókat helyezd el egy tömbben!
// 4. Készíts egy bejelentkezés kezelésére szolgáló függvényt, ami a következőképpen működik
//    - Ha meghívjuk a függvényt, akkor a program a felhasználótól bekér egy e-mail címet
//    - Ha a felhasználó megadott egy e-mail címet, akkor egy másik ablakban bekér egy jelszót
//    - Ha a felhasználó helyes e-mail - jelszó kombinációt adott meg, egy ablakban írja ki a program, hogy sikeres a bejelentkezés
//    - Amennyiben valamelyik megadott adat nem stimmel írja ki, hogy a bejelentkezés sikertelen
// 5. Készíts egy felhasználó e-mail címét megváltoztatni képes függvényt!
//    - A függvénynek két paramétere legyen: a régi és az új e-mail cím
//    - Amennyiben létezik az adatbázisban a megadott e-mail címmel felhasználó változtassa meg az e-mail címét az újra
//    - Ha nincs ilyen e-mail című felhasználó írjon ki egy üzenetet erről
// 6. Készíts egy függvényt, ami létre tud hozni egy új felhasználót az adatbázisban!
//    - Paraméterek: e-mail cím, jelszó, jelszó megerősítése, vezeték és keresztnév
//    - Ha a jelszó és a jelszó megerősítése nem egyeznek meg írjon ki hibaüzenetet!
//    - Ha a megadott e-mail címmel már szerepel felhasználó az adatbázisban írjon ki hibaüzenetet!
//    - Egyébként készítsen el egy új felhasználót és helyezze el a felhasználókat tartalmazó tömbben!

// 1, 2, és 3-as feladat megoldása jöhetnek a komment alá

const databases=[
    {
        lastname:"Doe",
        firstname:"Jhon",
        email:"jhon.doe@gmail.com",
        password:"123456",
    },
    {
        lastname:"Swith",
        firstname:"Jhon",
        email:"smithi@gmail.com",
        password:"qwerty",
    },
    {
        lastname:"Tapp",
        firstname:"Amanda",
        email:"stargate12@gmail.com",
        password:"qw23Uisrtz@ui",
    },
];

function logIn() {
    // 4-es részfeladat megoldása
    let email

    do {
        email=prompt("Kérem adja meg az e-mail címét");
        if (!checkEmail(email))  alert("Hibás formátumú e-mail cím!");
    } while(!checkEmail(email));
    let password=prompt("Kérem adja meg a jelszavát");
    if(!password) return;
    let index=getUser(email);
    if (index!=-1 && databases[index].password==password)
    {
        alert("Sikeres a bejelentkezés.");
    }
    else 
    {
        alert("a bejelentkezés sikertelen");
    }
    }

function getUser(email)
{
    let index=-1;
    for(let i=0;i<databases.length;i++)
    {
        if(databases[i].email==email) {
            index=i;
            break;
        }
    }
    return index;
}
function checkEmail(email)
{
    if(!email) {return false;}
    let result=true;
    let index1= email.indexOf("@");
    let index2=email.lastIndexOf(".");
    if(index1==-1 || index2==-1 || index2<index1) 
    {
        result=false;
    }
    return result;
}
//logIn();

function changeEmail(currentEmail, newEmail) {
    // 5-ös részfeladat megoldása
    if (!checkEmail(newEmail)) {
        alert("hibás az új e-mail cím");
        return;
    }
    let index=getUser(currentEmail);
    if (index!=-1)
        {
            databases[index].email=newEmail;
        }
        else 
        {
            alert ("A felhasználó nem azonosítható!");
        }
}
//changeEmail("stargate12@gmail.com","stargate2@freemail.hu");
//console.log(databases);
//changeEmail("stargate12@gmail.com","rossz@email.org");

function register(email, password, passwordConfirmation, firstName, lastName) {
    // 6-os részfeladat megoldása
    if(!checkEmail(email)) { 
        console.log("hibás e-mail cím!");
        return;
    }
    if(!firstName || !lastName) {
        console.log("Hibás név megadás");
        return;
    }
    if(password==passwordConfirmation && getUser(email)==-1)
    {
        const user={
            firstname: firstName,
            lastname: lastName,
            password,
            email,
        };
        databases.push(user);
    }
    else if(getUser(email)!=-1) 
    {
         console.log("A felhasználó már létezik!");
    }
    else {console.log("A jelszó és a jelszó megerősítés különbözik!" );}
}
//register("new@hotmail.com","jelszo","jelszo","Eva","Newman");
//register("test2@hotmail.com","rossz1","rossz2","Peter","Badman");
//register("new@hotmail.com","jelszo","jelszo","Eva","Newman");
/*
  Mindenre válaszoltál? Átnézted? Patent?
*/
