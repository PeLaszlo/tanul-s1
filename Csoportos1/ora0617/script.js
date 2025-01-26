// 1. feladat
function samePart (text1,text2)
{
    let text3="";
    for(let i=0;i<text1.length;i++)
    {
        if(text3.indexOf(text1[i])==-1) {
          if (text2.indexOf(text1[i])!=-1)  
            {
                text3+=text1[i];
            }
        }       
    }
    return text3;
}
console.log(samePart("török", "görög"));
// 2. feladat
function findPairs(array,number)
{
    const results=[[]];
    for(let i=0;i<array.length-1;i++)
        {
            for(let j=i+1;j<array.length;j++)
                {
                    if(array[i]+array[j]==number) {
                        let temp=[array[i],array[j]];
                        results.push(temp);
                    }
                }
        }
        results.splice(0,1);
        return results;
}
console.log(findPairs([1,2,3,4,5,7,8],7));
// 3. feladat
const teams=[
    {teamname:"Fradi",
        points:0,
        goalRate:0,
    },
    {teamname:"Dózsa",
        points:0,
        goalRate:0,
    },
    {teamname:"MTK",
        points:0,
        goalRate:0,
    },
    {teamname:"Győr",
        points:0,
        goalRate:0,
    },
    {teamname:"Debrecen",
        points:0,
        goalRate:0,
    },
    {teamname:"Stadler",
        points:0,
        goalRate:0,
    },
];
function setGame(teamName1,goal1,teamName2,goal2)
{
    let isteam1=false;
    let isteam2=false;
    let index1=0;
    let index2=0;
    for(i=0;i<teams.length;i++)
        {
            if(teams[i].teamname==teamName1) {isteam1=true; index1=i;}
            if(teams[i].teamname==teamName2) {isteam2=true; index2=i;}
            if(isteam1 && isteam2) {break;}
        }
        if(goal1>=0 && goal2>=0 && isteam1 && isteam2) 
            {
                teams[index1].goalRate+=goal1-goal2;
                teams[index2].goalRate+=goal2-goal1;
                if (goal1>goal2) {teams[index1].points+=3;}
                else if (goal2>goal1) {teams[index2].points+=3;}
                else {
                    teams[index1].points++;
                    teams[index2].points++;
                }
            }
            else console.log("Hibás adatokat kaptam!");
}
setGame("Fradi",2,"Győr",4);
setGame("Győr",3,"MTK",1);
setGame("kapu",3,"Győr",0);
console.log(teams);
// 4. feladat.
const movies=[
    {
        title:"Ez a film címe",
        actors:[
            {fistname:"Jhon",
                lastname:"doe"
            },
            {fistname:"pista",
                lastname:"Kiss"
            },
            {fistname:"Join",
                lastname:"lenon"
            },
        ],
        year:2001,
        grade: [6,2],
    },
    {
        title:" Végtelen története",
        actors:[
            {fistname:"Jonny",
                lastname:"Müller"
            },
            {fistname:"Pista",
                lastname:"Statiszta"
            },
            {fistname:"Join",
                lastname:"Lenon"
            },
        ],
        year:2021,
        grade: [6,6,7],
    },
];
function addNewMovie(title,actors,year,grade)
{
    const movie={
        title,
        actors,
        year,
        grade:[grade],
    }
    movies.push(movie);
}
const actors=[{fistname:"Eva",lastname:"Peron"},{fistname:"Susson",lastname:"Newman"}];
addNewMovie("Lost",actors,2002,3);
console.log(movies);

function addGrade(title,grade)
{
    if(grade<0 || grade>10) 
        {
            console.log("hibás értékelést kaptam!");
            return;
        }
    for(let i=0;i<movies.length;i++)
        {
            if (movies[i].title==title)
                {
                    movies[i].grade.push(grade);
                    break;
                }
        }
}
function avgGrades()
{   
    for(let i=0;i<movies.length;i++)
    {
        let averge=0;
        for(j=0;j<movies[i].grade.length;j++)
            {
                averge+=movies[i].grade[j];
            }
            averge=averge/movies[i].grade.length;
            console.log("Filn címe: ",movies[i].title," értékelése :",averge);
    }
}
addGrade("Lost",5);
avgGrades();
