//string
//string also store value by index

let name="kirti"
console.log(name)
console.log(typeof name)
console.log(name[5])

console.log("**********loop in string**********")
for(let i=0;i<name.length;i++){
    console.log(name[i])
}

console.log("**********reversed loop in array********")
for(let i=name.length-1;i>=0;i--){
    console.log(name[i])
}

console.log("******methods and properties of string*********")
//property 1---length()---- action::return length of string
//                       return type:number

let myfruit="mango"
let callen=myfruit.length
console.log(callen)

//method 1--toLowerCase()---action::return string in lowercase
//                       return type: string
let mycity="Pune"

let a=mycity.toLocaleLowerCase()
console.log(a)

//method 2--toUpperCase()---action::return string in uppercase
//                       return type: string

let b=mycity.toUpperCase()
console.log(b)

//Method chaining
let c=mycity.toLowerCase().toUpperCase().length
console.log(c)

//method 3--includes()---action::return occurance of string or substring in.
//                       return type: Boolean ,if not found match return false
let d=mycity.includes('u')
console.log(d)

//method 4--indexOf---action::check the index of element
//                       return type:number or return index of element ,if element not found return -1

let e=mycity.indexOf('p')
console.log(e)

e=mycity.indexOf('P')
console.log(e)


console.log("*******String Method Program*************")
let fruits="apple banana chiku papaya grapes"
let userinput="banana"

///using includes--
if(fruits.includes(userinput)){
    console.log('fruit is available')
}
else{
    console.log('fruit is not available')
}


//using indexof
if(fruits.indexOf(userinput)>=0){
    console.log('banana is available')
}
else{
    console.log('fruits is not available')
}

//Method 5--trim()--remove space from starting and ending of the string

let mycitys=" sangamner "
console.log(mycitys.length)
console.log(mycitys)

let newstring=mycitys.trim()
console.log(newstring.length)
console.log(newstring)

//method 6-trimStart()--remove space from beginning of string

let newstr=mycitys.trimStart()
console.log(newstr.length)
console.log(newstr)

//method 7--trimEnd()--remove space from ending of string

let newstrr=mycitys.trimEnd()
console.log(newstrr.length)
console.log(newstrr)


//-------------------------------
console.log("*************Logical program*************")

//input ="pu ne"
//output="pune"

let str="pu ne"
let rev=""

for(let i=0;i<str.length;i++){
    console.log(str[i])
    if(str[i]!==" "){
        rev=rev+str[i]

    }
}
console.log(rev)

//------------------------------------------------
//input--find biggest word in string
let mystr="i am learning javascript"
let newarray=mystr.split(' ')
console.log(newarray)
console.log(newarray.join(' '))


//-----------------------------------------------------------
console.log('****count of vowels in whole string*******')

let newmystr='i am new to javascript'
let count=0

for(let i=0;i<=newmystr.length;i++){
    if(newmystr[i]=="a" || newmystr[i]=="e" || newmystr[i]=="i" || newmystr[i]=="o" || newmystr[i]=="u")
    {
        count=count+1
    }
}
console.log(count)

//------------------------------------------------------------
console.log('****using switch case**********')
count=0
for(let i=0;i<newmystr.length;i++){
    switch(newmystr[i]){
        case "a" ||"A":
            count=count+1
            break
        
        case "e" ||"E":
            count=count+1
            break
        
        case "i"||"I":
            count=count+1
            break

        case "o"||"O":
            count=count+1
            break

        case "u"||"U":
            count=count+1
            break
}
}
console.log(count)











