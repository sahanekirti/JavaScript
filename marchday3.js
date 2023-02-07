//in primitive datatype variable allocate a separate memory
//in secondary datatype like array,object variable point to the same memory ,but create separate referance

let a=[11,22,33,44]
let b=a
console.log(b)
console.log(a)

b[0]="rutuja"
console.log(b)
console.log(a)

console.log("*******array as argument to function ************")
let numbers=[11,22,33]
function add(arr){
    arr[2]="rutuja"
    console.log(arr)
}
 console.log(numbers)
 add(numbers)
console.log(numbers)

//---------------------------------------------------------
console.log("********object is argument tofunction **************")

let person={
    fullname:"saru",
    lastname:"sahane"
}



function ChangeName(obj){
    console.log(obj)
    obj['fullname']="rutuja"
    return obj
    console.log(obj)
}
console.log(person)
ChangeName(person)
console.log(person)

//--------------------------------------------
let aa=[22,33,24]
let num=[1,2,3,4,5,6,7,8,9,10]
function Printarray(array1,fun){
      
     let newarray=[]
     for(let i=0;i<array1.length;i++){
     let newelement=fun(array1[i])
     newarray.push(newelement)
     }

      return newarray
}

let addme=function(el){
    return el+2
}
let birthyear=function(el){
    return 2022-el
}

let calculateper=function(el){
    return el*.10
}
 
let fivetble=function(el){
    return el*2
}

let printnum=Printarray(aa,addme)
console.log(printnum)


let printbirthyear=Printarray(aa,birthyear)
console.log(printbirthyear)

let cal10=Printarray(aa,calculateper)
console.log(cal10)

let fivetable=Printarray(num,fivetble)
console.log(fivetable)


//--------------------------------------
console.log("******write biggest word in string************")
let str="hello i am rutuja new in javascript"
let newstr=str.split(" ")
console.log(newstr)

let biggestword=newstr.reduce((acc,el)=>{
    if(el.length>acc.length){
        return el
    }
    else{
        return acc
    }

},"")
console.log(biggestword) 
