//Regular Expression---it is pattern of character

let sentence="hi i am rutujAand i am new to javascript my fullname is rutuja sahane"
let regexp=/rutuja/gi

let a=regexp.exec(sentence)
console.log(a)

let b=regexp.exec(sentence)
console.log(b)
let c=regexp.exec(sentence)
console.log(c)
let d=regexp.exec(sentence)
console.log(d)

//1.exec()==  if pattern match is found give output else return null ----------------------------------------------------------------
let result=regexp.exec(sentence)
while(result){
    console.log(result)
    result=regexp.exec(sentence)
}

//2.test()==-return boolean-------------------------------
let me=regexp.test(sentence)
console.log(me)

//regular expression method
//1-search()--return index of  given pattern

let subject="Marathi Hindi English English english  ENGLISH English"
let regexp2=/English/gi

let search1=subject.search(regexp2)
console.log(search1)

//2-match()--return all the matches of pattern in  string
let match1=subject.match(regexp2)
console.log(match1)

//3.replace()-replace the pattern with given replace string
let replace1=subject.replace(regexp2,'rutuja')
console.log(replace1)


//------------------------------------------------------
console.log('*****other example****')
let newstr="I am learning javascript , i like JAVASCRIPT"
let regexp3=/javascript/gi


let aa=regexp3.exec(newstr)
console.log(aa)

let a1=regexp3.exec(newstr)
console.log(a1)
//-------------------------------------------------
let t1=regexp3.test(newstr)
console.log(t1)

//--------------------------------------------------
let s1=newstr.search(regexp3)
console.log(s1)

//-------------------------------
let s2=newstr.match(regexp3)
console.log(s2)

//-------------------------------------
let s3=newstr.replace(regexp3,'rutuja')
console.log(s3)
//----------------------------------------

console.log('****example****')
let num='0123456789'
let pattern=""
for(let i=0;i<num.length;i++){
    if(num[i] !=5 && num[i] !=0){
        pattern=pattern+String(10-Number(num[i]))
        console.log(pattern)}
        else{
            val=Number(num[i])===0?5:0
            pattern=pattern+val
            
        }
    }
    console.log(pattern)





