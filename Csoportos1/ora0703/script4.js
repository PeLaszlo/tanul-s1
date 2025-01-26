const box=document.getElementById("myBox");
box.addEventListener("mousemove",function(event){
 let x=event.x;
 let y=event.y;
 document.getElementById("coords").innerText="x= "+x+" y= "+y;
});
box.addEventListener("mouseout",()=>document.getElementById("coords").textContent="");