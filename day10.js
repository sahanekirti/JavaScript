//program to find count of 99
 let add = [11,22,99,44,55,55,66,77,88,99,99,12,33,11]
 let count = 0 
for(let i = 0 ; i < add.length;i++){
    if(add[i] === 99){
        count = count + 1
    }

}
console.log(count)


//  program 2...to give count of character in object
let string  = ['k','i','r','t','i','a']
let newresult = {}
console.log(newresult)

for(let i = 0 ; i < string.length ;i++){

  if(newresult[string[i]]){ 
        newresult[string[i]] = newresult[string[i]] + 1
  }
  else {
    newresult[string[i]] = 1
  }

}
console.log(newresult)


//program 4..sqaure of no in object

let num2 = {

    a:1,
    b:2,
    c:3,
    a:4
}
console.log(num2)
 for(let key in num2){
    num2['a'] = num2[key] *num2[key]
}
console.log(num2)



// // program 3

// let a = [22,33,44,11,22,17,88,99,11]
// let eventCount  = 0 
// let oddCount = 0


// // for(let i = 0 ; i < a.length ; i++){
// //         if(a[i] % 2 == 0){
// //             eventCount ++
// //         }
// //         else {
// //             oddCount ++
// //         }
// // }

// // console.log(eventCount)
// // console.log(oddCount)


// // for(let i = 0 ; i < a.length ; i++){   
// //     a[i] % 2 == 0 ? eventCount++:oddCount ++
// // }

// // console.log(eventCount)
// // console.log(oddCount)


// a = [22,33,44,11,22,17,88,99,11]

// let evenCount = a.reduce(function(acc,el){
//     let a = el % 2 === 0?1:0
//     //console.log(a)
//     return acc + a
// },0)
// console.log(evenCount)

// let oddCount2 = a.reduce(function(acc,el){
//     let a = el % 2 !== 0?1:0
//     //console.log(a)
//     return acc + a
// },0)
// console.log(oddCount2)

// // program3
// let r = ['red','red','green','red','blue','blue','red','red']
// let result2 = {}

// for(let i = 0 ; i < r.length ;i++){

//   if(result2[r[i]]){ 
//         result2[r[i]] = result2[r[i]] + 1
//   }
//   else {
//     result2[r[i]] = 1
//   }
// }
// console.log(result2)

// for(let key in result2){

//     result2[key] = Math.floor(result2[key] /2)

// }

// console.log(result2)




// let word = ['b', 'o', 'o', 'k']
// let result = {}
// let countOfb = 0
// let countOfo = 0
// let countOfk = 0

// for (let i = 0; i <= word.length; i++) {
//     let XX = 'b'
//     switch (XX) {
//         case 'b':
//             countOfb++;
//             break;

//         case 'o':
//             countOfo++;
//             break;

//         case 'k':
//             countOfk++;
//             break;
//     }
// }

// result[word[0]] = countOfb
// result[word[1]] = countOfo
// result[word[3]] = countOfk
// console.log(result)


// result = {}

// {
//     b:1

// // }
// word = ['b', 'o', 'o', 'k']
// for (let i = 0; i < word.length; i++) {
//     if (result[word[i]]) {
//         result[word[i]] = result[word[i]] + 1
//     }
//     else {
//         result[word[i]] = 1
//     }
// }
// console.log(result)

// let city = "Pune"
// 0  1 2  3
// p  u n  e

// count = 0
// for(let i = 0 ; i < city.length ; i++){
//     city[i].toLowerCase() // 'P'--- 'p'
//     if(city[i] == 'a' || city[i] == 'e' || city[i] == 'i' ||  city[i] == 'o' || city[i] == 'u'){
//         count = count + 1
//     }
// }

// console.log(count)

// city = "Pune"
// let count2 = 0
// for (let i = 0; i < city.length; i++) {
//     switch (city[i]) {
//         case 'a':
//             count2 += 1
//             break
//         case 'e':
//             count2 += 1
//             break
//         case 'i':
//             count2 += 1
//             break

//         case 'o':
//             count2 += 1
//             break

//         case 'u':
//             count2 += 1
//             break
//     }

// }

// console.log(count2)



// reverse string 


let firstName = "sahane"
let rev = ""

//   0   1  2   3   4   5    6
//   s   a  h   a   n    e

//yamnihc

for(let i = 0 ; i < firstName.length ;i++){
    //console.log(i)
    //console.log(firstName[i])
    rev =  firstName[i] + rev

    //         c   + ""   ====> c
    //         h  + c     =====> hc
    //         i + hc    ======>  ihc
    //         n + ihc   ========>  nihc
    //         m  +  nihc ========>  mnihc
    //         a   + mnihc ========> amnihc
    //         y  + amnihc  =========>   yamnihc 
}
console.log(rev)

rev2 = ""

for(let i = firstName.length-1 ; i>=0 ; i--){
    //console.log(firstName[i])
    rev2 =   rev2 + firstName[i]
}

console.log(rev2)


//         0         1       2      3        4        5     6

let l = ["sahane","amol","poorva","mayuri","amol","poorva","amol"]
for(let i = 0 ; i < l.length ; i++){
    if(l[i] === "amol"){
        console.log(i)
    }
}

// let rrr = l.map(function(el,index){
//     if(el === "amol"){
//         return index
//     }
// })
// console.log(rrr)


//  l.forEach(function(el,index){
//     if(el === "amol"){
//        console.log(index)
//     }
// })


 //             0        1       2        3
// let cities = ["pune","nagpur","delhi","jaipur"]
// for(let i = 0 ; i < cities.length ; i++){
//     if(cities[i].length == 6){
//         console.log(cities[i])
//     }
// }
// let ee = 
// cities.filter(function(el){
//     return el.length == 6
// })
// console.log(ee)

// let j = ["amol","pune","ra"]





// result = {}
// console.log(result['b'])

// if(undefined){
//     console.log('hello')
// }
// else {
//     console.log('bye')
// }


