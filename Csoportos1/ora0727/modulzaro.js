/*
    JS Haladó modulzáró - gyakorlat

    Ebben a dolgozatban egy webshopféleséget kell építened, először lokális, majd szerverről érkező adatokat felhasználva. Kövesd a feladatokban található utasításokat!

    Kérlek minden feladatot figyelmesen olvass el, és a feladat szövegében megadott feladatot oldd meg!

    A feladatokat alapvetően bárhogyan megoldhatod, de a teljesértékű megoldásokhoz a legtöbb esetben szükséges használni azokat a metódusokat, amelyeket ebben a modulban tanultunk.

    A feladatoknál látod, hogy melyik hány pontot ér, de ez nem egyenesen arányos azzal, hogy mennyi kódot kell írni!
*/

// A feladat megoldásához a következő adatstruktúrát kell használnod:

const shopData = [
    {
        id: 1,
        title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        price: 109.95,
        description:
            "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        category: "men's clothing",
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        rating: { rate: 3.9, count: 120 },
    },
    {
        id: 2,
        title: "Mens Casual Premium Slim Fit T-Shirts ",
        price: 22.3,
        description:
            "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
        category: "men's clothing",
        image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        rating: { rate: 4.1, count: 259 },
    },
    {
        id: 3,
        title: "Mens Cotton Jacket",
        price: 55.99,
        description:
            "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
        category: "men's clothing",
        image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
        rating: { rate: 4.7, count: 500 },
    },
    {
        id: 4,
        title: "Mens Casual Slim Fit",
        price: 15.99,
        description:
            "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
        category: "men's clothing",
        image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
        rating: { rate: 2.1, count: 430 },
    },
    {
        id: 5,
        title: "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
        price: 695,
        description:
            "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
        category: "jewelery",
        image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
        rating: { rate: 4.6, count: 400 },
    },
    {
        id: 6,
        title: "Solid Gold Petite Micropave ",
        price: 168,
        description:
            "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
        category: "jewelery",
        image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
        rating: { rate: 3.9, count: 70 },
    },
    {
        id: 7,
        title: "White Gold Plated Princess",
        price: 9.99,
        description:
            "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
        category: "jewelery",
        image: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
        rating: { rate: 3, count: 400 },
    },
    {
        id: 8,
        title: "Pierced Owl Rose Gold Plated Stainless Steel Double",
        price: 10.99,
        description:
            "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
        category: "jewelery",
        image: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
        rating: { rate: 1.9, count: 100 },
    },
    {
        id: 9,
        title: "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
        price: 64,
        description:
            "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
        category: "electronics",
        image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
        rating: { rate: 3.3, count: 203 },
    },
    {
        id: 10,
        title: "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
        price: 109,
        description:
            "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
        category: "electronics",
        image: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
        rating: { rate: 2.9, count: 470 },
    },
    {
        id: 11,
        title: "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
        price: 109,
        description:
            "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",
        category: "electronics",
        image: "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
        rating: { rate: 4.8, count: 319 },
    },
    {
        id: 12,
        title: "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
        price: 114,
        description:
            "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
        category: "electronics",
        image: "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
        rating: { rate: 4.8, count: 400 },
    },
    {
        id: 13,
        title: "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
        price: 599,
        description:
            "21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz",
        category: "electronics",
        image: "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
        rating: { rate: 2.9, count: 250 },
    },
    {
        id: 14,
        title: "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ",
        price: 999.99,
        description:
            "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag",
        category: "electronics",
        image: "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
        rating: { rate: 2.2, count: 140 },
    },
    {
        id: 15,
        title: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
        price: 56.99,
        description:
            "Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates",
        category: "women's clothing",
        image: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
        rating: { rate: 2.6, count: 235 },
    },
    {
        id: 16,
        title: "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
        price: 29.95,
        description:
            "100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON",
        category: "women's clothing",
        image: "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
        rating: { rate: 2.9, count: 340 },
    },
    {
        id: 17,
        title: "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
        price: 39.99,
        description:
            "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
        category: "women's clothing",
        image: "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
        rating: { rate: 3.8, count: 679 },
    },
    {
        id: 18,
        title: "MBJ Women's Solid Short Sleeve Boat Neck V ",
        price: 9.85,
        description:
            "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
        category: "women's clothing",
        image: "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
        rating: { rate: 4.7, count: 130 },
    },
    {
        id: 19,
        title: "Opna Women's Short Sleeve Moisture",
        price: 7.95,
        description:
            "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort",
        category: "women's clothing",
        image: "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
        rating: { rate: 4.5, count: 146 },
    },
    {
        id: 20,
        title: "DANVOUY Womens T Shirt Casual Cotton Short",
        price: 12.99,
        description:
            "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
        category: "women's clothing",
        image: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
        rating: { rate: 3.6, count: 145 },
    },
];

// 1. Feladat (5)

// Készíts egy printAllProducts nevű függvényt, ami egy tömböt fogad el paraméterként és
// egyesével kiírja az összes elemét a konzolra!
// Hívd meg ezt a függvényt a shopData tömbbel paraméterként!

/*
    MEGOLDÁS HELYE
*/
console.log("1. feladat megoldása. -----------------------");
function printAllProducts(products)
{
    if(Array.isArray(products))
    {
        products.forEach((product)=>
            console.log(product))
    }
}

printAllProducts(shopData);

// 2. Feladat (5)

// Készíts egy printCheaperThan nevű függvényt, ami egy számot és egy termékeket tartalmazó
// tömböt kaphat meg paraméterként!
// A függvény írjon ki a konzolra egy olyan tömböt, amely csak azokat a termékeket
// tartalmazza, amelyeknek az ára kevesebb, mint a paraméterben megadott szám!

/*
    MEGOLDÁS HELYE
*/
console.log("2. feladat megoldása. -----------------------");
function printCheaperThan(number,products)
{
    if(Array.isArray(products)) {
        const cheaperProducts=products.filter((product)=> product.price<number);
        console.log(cheaperProducts);
        console.log("A tömb elemei elemenként");
        cheaperProducts.forEach((product)=>console.log(product));
    }
}

printCheaperThan(10,shopData);

// 3. Feladat (10)

// Készíts egy getCheapestProduct nevű függvényt, ami a termékeket tartalmazó tömböt kapja
// meg paraméterként, majd visszaadja a legolcsóbb termék árát!
// A teljesértékű megoldáshoz használd a reduce metódust!

/*
    MEGOLDÁS HELYE
*/
console.log("3. feladat megoldása. -----------------------");
function getCheapestProduct(products)
{
    let cheapestPrice;
    if(Array.isArray(products)) {
        cheapestPrice = products.reduce((acc,product)=>product.price<acc ? product.price: acc, products[0].price );
    }
    return cheapestPrice;
}

console.log("Legolcsóbb ár: ",getCheapestProduct(shopData));

// 4. Feladat (15)

// Készíts egy render nevű függvényt, ami egy termékeket tartalmazó tömböt fogad el paraméterként és ha meghívjuk kirajzolja az összes terméket egy HTML fájlba!
// Minden terméknél legyen megjelenítve a név, a kategória, az ár, a leírás és a kép!
// A HTML-hez használd a modulzáróhoz mellékelt index.html fájlt!
// A termékeket a products azonosítójú div-be helyezd el a következő HTML-t használva:

/*
    <div class="product-card">
        <img class="product-img">
        <div class="product-details">
            <h4 class="product-name">Termék neve</h4>
            <ul>
                <li>category: kategória</li>
                <li>price: sokcsilliárdezer dollár</li>
                <li>description: nagyon jó termék vedd meg</li>
            </ul>
        </div>
    </div>
*/

/*
    MEGOLDÁS HELYE
*/
function render(products)
{
    if(Array.isArray(products)) {
        const productsObj=document.getElementById("products");
        productsObj.innerHTML="";
        products.forEach((product)=> {
            const contend=`
            <img class="product-img" src="${product.image}">
             <div class="product-details">
                 <h4 class="product-name">${product.title}</h4>
            <ul>
                <li>category: ${product.category}</li>
                <li>price: ${product.price}</li>
                <li>description: ${product.description}</li>
            </ul>
         </div>`;
            const productobj=document.createElement("div")
            productobj.classList.add("product-card");
            productobj.innerHTML=contend;
            productsObj.append(productobj);
        });
    }
}
render(shopData);

// 5. Feladat (15)

// Készíts egy getUniqueCategories nevű függvényt, aminek ha beadunk egy az összes terméket tartalmazó tömböt,
// akkor egy olyan tömböt ad vissza, amiben csak a termékek kategóriái találhatók!
// Minden kategória csak egyszer szerepeljen a tömbben!

/*
    MEGOLDÁS HELYE
*/
console.log("5. feladat megoldása. ---(categória lista) --------------------");
function getUniqueCategories(products)
{
    const prodcategories=[];
    if(Array.isArray(products)) {
        products.forEach((product)=>{
            const category=product.category;
            if(!prodcategories.some((item)=>item==category)) {
                prodcategories.push(category);
            }
        });

    }
    return prodcategories;
}
console.log(getUniqueCategories(shopData));

// 6. Feladat (20)

// Készíts egy drawCategories függvényt, aminek egy termékkategóriák neveit tartalmazó tömböt tudunk paraméterként megadni!
// Ha meghívjuk a függvényt az kirajzol egy gombot minden egyes kategóriának, ami a paraméterként megadott tömbben található.
// A gombokon lévő szöveg a kategóriák neve legyen!
// Amelyik gombra utoljára rákattintunk, annak a háttérszíne változzon meg pirosra!
// Egyszerre csak egy gomb háttere legyen piros!
// Ha piros hátterű gombra kattintunk tűnjön el a piros háttér!
// A megoldáshoz az index.html-be, a products azonosítójú div fölé kell rajzolnod
// a gombokat a kövektező példa HTML alapján:

/*
    <div class="categories-container">
        <button class="category-btn">Első kategória neve</button>
        <button class="category-btn">Második kategória neve</button>
        <!-- stb. -->
    </div>
*/

/*
    MEGOLDÁS HELYE
*/
function drawCategories(catarray)
{
    if(Array.isArray(catarray)) {
        categoryContainerObj=document.createElement("div");
        categoryContainerObj.setAttribute("id","btn-container");
        categoryContainerObj.classList.add("categories-container");
        const contant=catarray.map((category)=>`<button class="category-btn">${category}</button> `).join(" ");
        categoryContainerObj.innerHTML=contant;
        const productsObj=document.getElementById("products");
        productsObj.insertAdjacentHTML("beforebegin",categoryContainerObj.outerHTML);
        const buttons=document.querySelectorAll(".category-btn");
        buttons.forEach((button)=>
            button.addEventListener("click",(event)=>{
                if(event.target.classList.contains("active"))
                {
                    event.target.classList.remove("active");
                }
                else {
                    deleteRedFromAllButton(buttons);
                    event.target.classList.add("active");
                }
            })
        );
        
    }
}

function deleteRedFromAllButton(buttons)
{
    buttons.forEach((button)=>button.classList.remove("active"));
}
//drawCategories(getUniqueCategories(shopData));

// 7. Feladat (20)

// Másold át ide a 6. feladatban található gombra kattintás logikáját és változtasd meg úgy, hogy ha van piros hátterű gomb,
// akkor csak azok a termékek látszódjanak, amelyeknek a kategóriája megegyezik a piros hátterű gombon szereplő kategóriával!
// A termékek kirajzolásához használd a 4. feladatban létrehozott render metódust!

// Ne töröld ki a 6. feladatban található megoldásodat, helyette írj itt egy új függvényt, amivel helyettesíteni tudjuk
// az előző feladatban használt logikát!

// (Ha nem sikerült a rendert megcsinálnod, akkor írd ki a konzolra, hogy mely termékeket kellene kirajzolnia a programnak)

/*
    MEGOLDÁS HELYE
*/
function drawCategories2(catarray)
{
    if(Array.isArray(catarray)) {
        categoryContainerObj=document.createElement("div");
        categoryContainerObj.setAttribute("id","btn-container");
        categoryContainerObj.classList.add("categories-container");
        const contant=catarray.map((category)=>`<button class="category-btn">${category}</button> `).join(" ");
        categoryContainerObj.innerHTML=contant;
        const productsObj=document.getElementById("products");
        productsObj.insertAdjacentHTML("beforebegin",categoryContainerObj.outerHTML);
        const buttons=document.querySelectorAll(".category-btn");
        buttons.forEach((button)=>
            button.addEventListener("click",(event)=>{
                if(event.target.classList.contains("active"))
                {
                    event.target.classList.remove("active");
                    render(shopData);
                }
                else {
                    deleteRedFromAllButton(buttons);
                    event.target.classList.add("active");
                    const filterShopData=shopData.filter((product)=>product.category==event.target.innerText);

                    render(filterShopData);
                }
            })
        );
        
    }
}

drawCategories2(getUniqueCategories(shopData));

// 8. Feladat (10)

// Készíts egy renderFromAPI nevű függvényt, ami a shopData tömb helyett a következő API-ról tölti le a termékek adatait: https://fakestoreapi.com/products
// Miután megvannak a termékek adatai, hívd meg az előzőekben elkészített render, getUniqueCategories és drawCategories metódusokat a letöltött termékekkel!
// (Ha nem tudtad megcsinálni ezeket a függvényeket, akkor írd ki a konzolra a függvények nevét ott, ahol meghívnád őket!)
// Ha az API vagy az adatok kezelése hibát eredményez írd ki a konzolra, hogy "Hopp, hopp!" és írd ki az elkapott hibát is!

/*
    MEGOLDÁS HELYE

*/

console.log("8. feladat megoldása. ---------------------");

async function renderFromAPI()
{
    const apiUrl="https://fakestoreapi.com/products";
    try{
        const resume=await fetch(apiUrl);
        if(!resume.ok) throw "hibás API cím";
        const apiShop=await resume.json();
        render(apiShop);
        console.log("Api kategóriák listája: ",getUniqueCategories(apiShop));
        document.getElementById("btn-container").remove();
        drawCategories2(getUniqueCategories(apiShop));
    }
    catch(error) {
        console.log("Hopp hopp!");
        console.log(error);
    }

}

renderFromAPI();
