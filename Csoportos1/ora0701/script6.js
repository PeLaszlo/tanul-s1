const targ=document.getElementById("target");
const div1=document.createElement("div");
div1.textContent="felső div";
const div2=document.createElement("div");
div2.textContent="alsó div";
targ.insertAdjacentElement("beforebegin",div1);
targ.insertAdjacentElement("afterend",div2);