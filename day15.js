//for loop revision

for(let i=0;i<=10;i++)
{
    if(i==5){
        continue
    }
    if(i==8){
        break
    }
    console.log(i)
}

//--------------------------------------
console.log('*******find maximum no***********')
let a=100
let b=120
let c=80

if(a>b){
    if(a>c){
        console.log('a is greater')
    }
   
}
else if(b>c){
    console.log('b is greater')
}
else{
    console.log('c is greater')
}

//------------------------------------------
if(a>b && a>c){
    console.log('a is greater')
}
else if(b>c){
    console.log('b is greater')
}
else{
    console.log('c is greater')
}

//------------------------------------------
// console.log('*********using propmt check your mark is a maximum or not*******')
// let mark=prompt('enter your marks')
// mark=Number(mark)
// if(mark>60){
//     console.log('you are pass!!!!!!')
// }
// else{
//     console.log('you are fail!!')
// }

// //--------------------------------------------------
// console.log('*******same problem using turnary******')
// let result=mark>60 && mark<100 ? 'you are pass':'you are fail'
// console.log(result)

// //--------------------------------------------------
// console.log('*****another way*********')
// mark > 60 && mark < 100 ? console.log('you are pass !'):console.log('you are fail !')

//------------------------------------------------------------
console.log('****switch case*********')

let city='pune'
switch(city){
    case 'sangamner':
        console.log('you are in ahmednagar')
    case 'pune':
        console.log('you are in pune')
    case 'mumbai':
        console.log('you are in mumbai')
    default:
        console.log('your city','your state')
}
//--------------------------------------------------
console.log('*********using break ***********')
switch(city){
    case 'sangamner':
        console.log('you are in ahmednagar')
        break
    case 'pune':
        console.log('you are in pune')
        break
    case 'mumbai':
        console.log('you are in mumbai')
        break
    default:
        console.log('your city','your state')
}

//------------------------------------------
console.log('*********multiple city in same case************')
switch(city){
    case "mumbai":
    case "pune":
           console.log('you are in maharashtra')
           break

    case 'jaipur':
            console.log('Rajasthan')
            break
        
     case 'bhopal':
             console.log('Madhya Pradesh')
             break
            
     default:
            console.log('Your city , your state ')
}