class dog
{
    name
    age
    color
    constructor(name,color)
    {
        this.name=name;
        this.age=0;
        this.color=color;
    }
    bark() {
        console.log("Vau Vau")
    }
    chassCats(name)
    {
        console.log("run");
    }
}

let frakk= new dog("Frakk","gray");
frakk.bark();

class building {
    builddate
    constructor(builddate)
    {
        this.builddate=builddate
    }
}

class house extends building
{
    type 
    constructor(builddate)
    {
        super(builddate);
    }
}
 class flat extends house
 {
    roomNumber
    constructor(builddate,roomNumber)
    {
        super(builddate);
        this.roomNumber=roomNumber;
    }
 }
 class officehouse extends building
 {
    letfee;
    large;
    constructor(builddate)
    {
        super(builddate);
    }
 }
 class suppermarket extends building
 {
    numberOfShops
    constructor(builddate)
    {
        super(builddate,number);
        this.numberOfShops=number;
    }

 }

 class Person {
    name;
    static personCounter=0;
    static names=[];

    constructor(name)
    {
        this.name=name;
        Person.names.push(name);
        personCounter++;

    }
    rename(newname)
    {
        Person.names.splice(Person.name.indexOf(this.name),1,newname);
        this.name=newname;
    }
die()
{
    Person.names.splice(Person.name.indexOf(this.name),1); 
    personCounter--;
}


 }