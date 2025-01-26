const animalList = ["dog", "cat", "giraffe", "elephant"];
// 1 feladat.
const firstul=document.getElementById("animal1");
const firstlis=animalList.map((animal)=>`<li>${animal}</li>`).join("");
firstul.innerHTML=firstlis;

const animalList2 =animalList.map((animal)=>({animal,age:10,numberOfLegs:4}));


const firstul2=document.getElementById("animal2");
const firstlist2=animalList2.map((animal)=>`<li> állat neve:${animal.animal}</li> <ul> <li> kora: ${animal.age}</li><li>lábainak száma:${animal.numberOfLegs}</li></ul> `).join("");
firstul2.innerHTML=firstlist2;

// 2 feladat
firstul.insertAdjacentHTML("beforebegin",`<img src="allatkert-fobejarat-50-eve.jpg">`);

// 3. feladat

const task3Obj=document.getElementById("task3");
const childrenObj= task3Obj.children
for (const ulitem of childrenObj) {
    ulitem.firstElementChild.innerHTML="első";
    ulitem.lastElementChild.innerText= "Utolsó";
}

// 4. feladad
 const task4Obj=document.getElementById("task4");
 const task4Children=task4Obj.children;
 for (const liitem of task4Children) {
    liitem.addEventListener("click",(event)=>event.target.innerText=prompt("Kérem adja meg a kívánt szöveget"));
 }

 function additem()
 {
    const task4Obj=document.getElementById("task4");
    const newitem=document.createElement("li");
    newitem.innerHTML=document.getElementById("newitem").value;
    newitem.addEventListener("click",(event)=>event.target.innerText=prompt("Kérem adja meg a kívánt szöveget"));
    task4Obj.append(newitem);
 }

 // 5. feladat

  async function timer()
  {
    const clock=document.getElementById("clockdisplay")
    const start=document.getElementById("task5input").value;
    let time = {min:start, sec:0};
    clock.innerHTML=`A hátralévő idő: <span id="minute"> ${time.min}</span> : <span id="secundum">${time.sec}</span>`;
    timerObj=setInterval(()=>{   
       let time={};
       const clock=document.getElementById("clockdisplay");
       time.min=document.getElementById("minute").textContent;
       time.sec=document.getElementById("secundum").textContent;
       time.sec--;
       if(time.sec<0) {
            time.sec=59;
            time.min--;
       }
       clock.innerHTML=`A hátralévő idő: <span id="minute"> ${time.min}</span> : <span id="secundum">${time.sec}</span>`;
       if(time.min==0 && time.sec==0) clearInterval(timerObj);
    },1000);
  }


    
