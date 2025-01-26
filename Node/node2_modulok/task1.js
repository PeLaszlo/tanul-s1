const ask1=require("readline-sync");
const answer= ask1.question("Mi a neve: ");
console.log("Szia", answer,"!");


const answer2=ask1.keyInYN("Szereted a pizzat? ");

 console.log(answer2 ? "Én is szeretem!": "Sajnálom, hogy nem.");

process.stdout.pause();
const answer3=ask1.question("Kérem a jelszót: ",{ hideEchoBack: true});
console.log("jelszó:", answer3);