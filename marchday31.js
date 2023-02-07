// object literal

let person={
    fullname:"rutuja ",
    age:23,
    lastname:"sahane"

}
console.log(person)

//function constructor

let Myperson=function(first_name,last_name,age){
    this.first_name=first_name
    this.last_name=last_name
    this.age=age

}
let rutuja=new Myperson('savi','medage',5)
console.log(rutuja)

//rutu__proto__ is equal to the Myperson.prototype
console.log(rutuja instanceof Myperson)
console.log(rutuja._proto_ === Myperson.prototype)

//vehicle function constructor

let Vehicle=function(type,regno){
    this.type=type
    this.regno=regno
    this.display=function(){
        console.log(this.type)
    }
}
let BMW=new Vehicle('Automatic',125)
console.log(BMW)

let Hexa=new Vehicle('Manuual',68)
console.log(Hexa)

//disadvantage is that,the display() call in both object Hexa and BMW
//to avoid this scenario,add display() in vehicle prototype
Vehicle.prototype.display=function(){
    console.log(this.type)
} 
BMW.display()
Hexa.display()

//-----------------------------------
console.log('***for student class constructor********')
let Student=function(fname,lname){
    this.fname=fname
    this.lname=lname
}
let rutu=new Student("rutuja",'sahane')
Student.prototype.display=function(){
    console.log("hello")
}
console.log(rutu)
Student.prototype.language="marathi"
console.log(rutu)
rutu.display()
console.log(rutu.language)
console.log(rutu.hasOwnProperty('fname'))
console.log(rutu.hasOwnProperty('lname'))
console.log(rutu._proto_=Student.prototype)

//----------------------------------------------------------------
console.log('***another example****')
let name1=['rutuja','savi','sarika','rutuja']
console.log(name1)
console.log(name1 instanceof Array)
console.log(name1._proto_===Array.prototype)
console.log(name1._proto_ === Array.prototype)
name1.push()
console.log(name1)
Array.prototype.duplicate=function(arr){
    name1=Array.from(new Set(arr))
    return Array.from(new Set(arr))
}
console.log(name1.duplicate(name1))
console.log(name1)

//-------------------------------------
console.log('***anothor example***')
let city=['hii','hello','me']
let a=city.sort()
console.log(a)
console.log(city)


//method-2==ES6 class
let Bank=class {
       constructor(accno,bal,name){
           this.ano=accno
           this.bal=bal
           this.name=name

       }
       showBalance(){
           console.log(this.bal)
        }
        set showdeposite(msg){
            this.msg=msg

        }
}
Bank.prototype.greet=function(){
    console.log('hello')
}

let Myaccount=new Bank(3131,450000,'saru')
let Myaccount2=new Bank(99,500000,'sachu')
console.log(Myaccount)
console.log(Myaccount2)
Myaccount.showBalance()
Myaccount.showdeposite="deposit"
console.log(Myaccount)

class Bank2 {
    constructor(name,address){
        this.name = name ,
        this.address = address 
    }

    greet(){
        console.log('hello')
    }

    static  qwerty(){
        console.log('I am static method')
    }

}



let me = new Bank2("sai",1223)
console.log(me)
me.greet()