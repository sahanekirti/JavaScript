//Method 3==Object.create()

let myobj = {

    display:function(){
        console.log('hiiiiii')
    }
}


let newone = Object.create(myobj)
console.log(newone)

//o/p==is empty ..to add properties in object that we have created
newone.firstname="sachu",
newone.lastname="gle",
newone.age=25
console.log(newone)
newone.display()

//method 4===inheritance

class Student{
    fname='kirti'
    age=23
    adharno=25
}
class Teacher extends Student{
    sal=100000
}
class Professor extends Teacher{
    specialization='mech'
}

let bb=new Professor()
console.log(bb)

//using constructor

class Student2{
    constructor(fname,age,ano){
        this.fname=fname
        this.age=age
        this.ano=ano

    }
}
class Teacher2 extends Student2{
    constructor(fname,age,ano,sal){
        super(fname,age,ano)
        this.sal=sal

    }
}
class Professor2 extends Teacher2{
    constructor(fname,age,ano,sal,specialization){
        super(fname,age,ano,sal)
        this.specialization=specialization
    }

}
let prof=new Professor2('sachu',25,143,500000,'mech')
console.log(prof)
console.log(prof.fname)

console.log("****program ************")
class Grandfather{
    constructor(fname,lname){
        this.fname=fname
        this.lname=lname

    }
    display(){
        console.log(this.fname,this.lname)
    }
}
class Father extends Grandfather{
    constructor(fname,lname,ffname){
        super(fname,lname)
        this.ffname=ffname
    }
    display(){
        console.log(this.ffname,this.lname)
        super.display()
    }
}
class Son extends Father{
    constructor(fname,lname,ffname,ssname){
        super(fname,lname,ffname)
        this.ssname=ssname

    }
    display(){
        console.log(this.ssname,this.lname)
        super.display()
    }
}

let rutu=new Son('datatray','sahane','lahanu','kirti')
kirti.display()

