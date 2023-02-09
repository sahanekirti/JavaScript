let students=[{
    fullname:'kirti sahane',
    age:23,
    skills:['python','java','javascript']

},{


    fullname:'sarika pansare',
    age:23,
    skills:['python','sql','javascript']
}]

students.forEach(function(el){
   return el.city="pune"
})
console.log(students)


// students.forEach(function(el){
//     if(el.fullname="rutuja"){
//         el.city='sangamaner'
//     }
//     else{
//         el.city="nashik"
//     }

    
// })
// console.log(students)


let city=['sangamner','nashik']
students.forEach(function(el,index){
    el.city=city[index]

})
console.log(students)
console.log('*************************')
let a1=students.filter(function(el){
    return el.fullname=='rutuja'&& el.skills.includes('python')

})
console.log(a1)

console.log('***************************************')
students.forEach(function(el){                
   let bb= el.fullname.split(" ").reduce(function(acc,el){   // //['rutuja','sahane']
        return el[0]+acc   

    }," ")    
    
    el['username']=bb
   
})
console.log(students)

console.log('*******************************************')
