// array metods
const fruits =["apple","banana","cherry"];
fruits.splice(1,1,"pear","orange"); // első szám hová szúr be, második annyit töröl.
let fr1=fruits.slice(1,3); // kimásolja a tömb 1-3 közötti értéket, de felső határ nics benne, de az első igen.
fruits.slice(2) // végéig másolja
fruits.indexOf("cherry") //az adott elem index adja vissza első találatig.
fruits.indexOf("cherry",3) // 3 indextól kezdve ha nem talál akkor = -1 add vissza.
fruits.lastIndexOf() // hátuljáról indul else.
let vegis=["carrot","broccoli"];
fruits.concat(vegis); // összefűzi a tömbőket egy új tömbe.
fruits.reverse() // az eredeti tömböt fordítja meg.
fruits.at(2) // adott indexű elem fruits.at(-1) az utolsó elemet adja vissza
let mat=[
    [1,3,4],
    [5,8,9]
]