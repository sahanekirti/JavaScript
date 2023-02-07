//Object Oriented Concepts

//we can define object using various method
//method 1--
 //method 1=object literal or using class
    let person = {

        fullName:"rutuja sahane",
        age:23,
        adharNumber:123,
        display:function(){
            console.log(this.fullName)
        }

    }
    person.display()

//method 2==using constructor or setting the value using constructor
    class Person2{
        constructor(fullname,age,adhNo){
            this.fullName = fullname
            this.age = age
            this.adharNumber = adhNo
        
        }
        display(){
            console.log(this.fullName)
        }

    }

    let rutuja2 = new Person2("rutuja s",23,123)
    rutuja2.display()
    console.log(rutuja2)


 // objects==there are 4 ways to create object

//method 1==function constructor()

    let Person3 = function(fullname,age,adhNo){
        this.fullname = fullname
        this.ag = age
        this.adhNo = adhNo
        this.display = function(){
            console.log(this.fullname)
        }

    }

    let rutu = new Person3("rutu",22,12)
    let rutu1 = new Person3("saru",12,11)
    console.log(rutu)
    console.log(rutu1)

    // // Prototype

    // // Every object in javascript has _proto_

    // console.log(rutu._proto_ === Person2.prototype)