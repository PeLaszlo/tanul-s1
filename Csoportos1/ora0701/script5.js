const targ=document.getElementById("target");
const text="<p> Ez az új bekezdés </p>";
targ.insertAdjacentHTML("beforebegin",text);
targ.insertAdjacentHTML("afterend",text);