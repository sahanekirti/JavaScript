//revision of string ,array,object

let name1="rutuja"
console.log(typeof(name1))
console.log(name1)

//------------------------------------
console.log('****print element in string*******')
let newstr1="pune"
console.log(newstr1)
//console.log(newstr1[0])

///loop in string
for(let i=0;i<newstr1.length;i++){
    //console.log(i)
    console.log(newstr1[i])
}

console.log("*********reversed string******")
for(let i=newstr1.length-1;i>=0;i--){
    console.log(newstr1[i])
}

//string revision
console.log('*******count of vowels using switch******')
let mystrr="i am new to javascript"
let count=0
for(let i=0;i<=mystrr.length;i++)
{
  switch(mystrr[i]){
      case "a":
      case "A":
      case 'e':
      case "E":
      case "i":
      case 'I':
      case "o":
      case "O":
      case 'u':
      case "U":
          count=count+1
          break
  }
}
console.log(count)
//-----------------------------------------------
console.log("****count of each vowel of string in key value pair*********")
let obj1={}
let mystrr2="rutujaoiseii"
for(let i=0;i<=mystrr2.length;i++){
    if(mystrr2[i]=="a" || mystrr2[i]=="e" || mystrr2[i]=="i"  || mystrr2[i]=="o"|| mystrr2[i]=="u"){
        if(obj1[mystrr2[i]]){
            obj1[mystrr2[i]]=Number(obj1[mystrr2[i]]+1)
        }
        else{
            obj1[mystrr2[i]]=1
        }
    }
}
console.log(obj1)

//--------------------------------------
console.log('*****count of vowel using join***')
let a1="ameeiout"
mystr={}
let mynewstring=a1.split('').filter((el)=>{
    return el=="a" || el=="o" || el=="i" ||el=="e" ||el=="u"

})
console.log(mynewstring)

//------------------------------------------
//string--slice()==give substring
//return ==string
//synatx--string.slice(start parameter,end parameter---it always exclude)
let my2="rutuja"
console.log(my2.slice(1,4))
console.log(my2.slice(1))
console.log(my2.slice(-2))
console.log(my2.slice(2,-2))
console.log(my2.slice(-1,-4)) //start parameter is always before end parametr

//--------------------------------------------------------
console.log("*******output in form of aaaabbbccd input is 4a3b2c1d *****")
let aa="4a3b2c1d"
let rev=" "
for(let i=0;i<=aa.length;i++){
    if(Number(aa[i])){
        for(let j=0;j<Number(aa[i]);j++){
            rev=rev+aa[i+1]
        }
    }

}
console.log(rev)

//------------------------------
console.log("****using repeat method*******")
let result=" "
for(let i=0;i<=aa.length;i++){
    if(Number(aa[i])){
        result=result+aa[i+1].repeat(Number(aa[i]))

    }
}
console.log(result)

///----------------------
console.log('***object revision***')
let person={
    fullname:"rutuja",
    age:23,
    rollno:24
}

if(person['aaa']){
    console.log('i am true ')
}
else{
    console.log('i am false')
}