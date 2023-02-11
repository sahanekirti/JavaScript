//1.callback()--addition and multiplication
// function add(n1,n2,fun){
//     console.log (n1+n2)
//     fun()
// }
// function mult(n1,n2){
//     console.log(n1*n2)
    
// }
// add(10,10,mult)

// //2.prime no---------------------------------------------------------------------------
// let userNo = prompt('enter the number')
// let number = true

// for (let i = 2; i < userNo; i++) {
//     if (userNo % i == 0) {
//         number = false;
//         console.log(`${userNo} is  not prime number`)
//         break;
//     }

//     if (number) {
//         console.log(`${userNo} is a prime number`);
//     }
//     // else {
//     //     console.log(`${userNo} is a not prime number`);
//     // }
// }

//3.----find out even odd no in given array
let num=[10,34,57,78,23,33,45,55]
let even=[]
let odd=[]


for(let i=0;i<num.length;i++){
    if(num[i]%2==0){
        even.push(num[i])
        console.log(num[i]+' no is even')
    }
    else{
        odd.push(num[i])
        console.log(num[i]+' no is odd')
    }
}
console.log(even)
console.log(odd)

//4.....using filter---------------------------------------------------
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
let even1=[]
let odd1=[]
let newarr=arr.filter((el)=>{
    if(el % 2 ==0){
        even1.push(el)
        console.log(el + ' the no is even num')
    }
    else{
        odd1.push(el)
        console.log(el +'  the no is odd')
    }
})
console.log(even1)
console.log(odd1)


//5.star pattern ------------------------------------
console.log("**********star pattern********")
for(let i=1;i<=5;i++){
    console.log('*****')
}
//---------------------------------------------------------
//6.star pattern
console.log("**********star pattern********")
for (let i = 5; i >= 1; i--) {
         console.log('* '.repeat(i))
     }
 //------------------------------------------------------------------ 
 //7.star pattern
 console.log("**********star pattern********")
 for(let i=1;i<=5;i++){
     console.log('* '.repeat(i))
 }  
 
 //---------------------------------------------------------------
 console.log("**********reverse string********")
let str='kirti'
function reverse(){
    let my=str.toString().split("").reverse().join("")
    console.log(my)
}
reverse()

//--------------------------------------------------
console.log("*******program***********")
let str1='java'
let newone=str1.split("").reverse().join("")
console.log(newone)
