//object--object literal
let myobj={
    fullname:"kirti",
    age:23,
    rollno:45,
    skills:['javascipt','python']
}

//---------------------------------------
console.log('***operation on object***')

//retrive using dot and bracket notation
console.log(myobj['fullname'])
console.log(myobj.fullname)

//upadate
let updateobj=myobj.fullname="kirti sahane"
console.log(updateobj)
console.log(myobj)

updateobj=myobj['fullname']='kirti sahane'
console.log(updateobj)
console.log(myobj)

//add new property
updateobj=myobj.city="pune"
console.log(updateobj)
console.log(myobj)
myobj.state="mumbai"
console.log(myobj)

//delete
delete myobj.state
console.log(myobj)

//method 1------setting the properties outside the class
class MyClass{
    name=undefined
    age=undefined
    rollno=undefined
}
let rutuja=new MyClass()
console.log(kirti)
kirti.name="kirti sahane"
kirti.age=23
kirti.rollno=90
kirti.city="pune"
console.log(kirti)

//method 2--setting the values using constructor
class MyClass2{
    constructor(fn,age,rno,skill){
        this.fullname=fn
        this.age=age
        this.rollno=rno
        this.skill=skill
    }
}

let kirti=new MyClass2('rvsahane',23,56,['php','marathi'])
console.log(kirti)

let students=[
        new MyClass2('sauu',4,10,['js','sql']),
        new MyClass2('sudhir',15,56,['marathi','hindi']),
        new MyClass2('bhaiya',22,90,['science','history'])
         ]
console.log(students)

//---------------------------------
console.log("*******print key value ****")
students.forEach((el)=>{
    for(let key in el){
        console.log(key,el[key])
    }
})
//-----------------------------------------
console.log('*****add lang in students object****')
let lang=['mar','hin','eng']
students.forEach((el,index)=>{
    //el.lang=lang['index']
    console.log(el)
    el['lang']=lang[index]

})
console.log(students)

//method 3- setting the properties using set()---
class MyClass3{
    setAge(age){
        this.age=age
    }
    setName(name){
        this.name=name
    }
    setSkills(skills){
        this.skill=skills
    }
}
let kirti3=new MyClass3()
kirti3.setAge(23)
console.log(kirt3)

kirti3.setName('kirti Sahane')
console.log(kirti3)

kirti3.setSkills(['python','js','cypress'])
console.log(kirti3)
