const box=document.getElementById("colorBox");
box.addEventListener("mouseenter",function(event){
box.style.backgroundColor="black";
});
box.addEventListener("mouseout",()=>document.getElementById("colorBox").style.backgroundColor="lightgray");