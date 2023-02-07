//Object And Problems on it
 let students=[
     {
     fullname:'rutuja',
     lastaname:'sahane',
     age:23,
     skills:['python','javascript','sql'],
     marks:[89,70,90,91,99],
     city:'sangamner',
     isAdult:true,
     birthyear:1998  
 },
 {
    fullname:'sauuu',
    lastaname:'medage',
    age:23,
    skills:['python','javascript','sql','java'],
    marks:[89,75,90,80,99],
    city:'pune',
    isAdult:true,
    birthyear:2018 
}, 
{
    fullname:'sarika',
    lastaname:'pansare',
    age:23,
    skills:['python','javascript'],
    marks:[80,67,90,61,99],
    city:'nagpur',
    isAdult:true,
    birthyear:1999  
}, {
    fullname:'kirti',
    lastaname:'sahane',
    age:23,
    skills:['python','javascript','sql'],
    marks:[89,79,90,56,78],
    city:'pune',
    isAdult:true,
    birthyear:1993  
}]

console.log('********People who belong to pune city*********')

//---------------------------------------
students.filter(function(el){
        return el.city == "pune"
    }).forEach(function(el){
        console.log(el.fullname)
    })





