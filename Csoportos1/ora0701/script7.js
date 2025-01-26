const list=document.getElementById("myList");

for(i=0;i<13;i++)
 {
    const elem=document.createElement("li");
    elem.textContent="Elem "+(i+3);
    list.appendChild(elem);
}
const list2=document.getElementsByTagName("li");
for (const item of list2) {
    item.textContent="Frissített elem.";
}
