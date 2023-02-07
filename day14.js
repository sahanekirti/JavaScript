
// For loop---used for repitative task.or specific no of time. 
// while ---used until a certain condition is satisfied.

//syntax of for loop-----

// for(intialization ; conditionCheck;increment/decrement)
//{
//      statements
// }

console.log('********My first for loop program************')

for(let i=1;i<=3;i++)
{
    console.log(i)
}
 //---------------------------------
 for(let i=3;i>0;i--)
 {
     console.log(i)
 }

 //--------------------------------------------
 console.log('**********print 2 table***************')
 for(let i=2;i<=10;i=i+2)
 {
     console.log(i)
 }

 //----------------------------------------
 console.log('*********Even Odd NO*****************')
 for(let i=0;i<=20;i++){
     if(i%2==0){
         console.log('the no is even no',i)
     }
     else{
         console.log('the no is odd',i)
     }
 }



 // While Loop
 
 console.log('******While loop first program*****')

 let a=1
 while(a<=3){
     console.log(a)
     a++
 }

 //--------------------------
 console.log('*******reverse while loop*********')
 let b=3
 while(b>0){
     console.log(b)
     b--
 }

 //--------------------------------------
 console.log('*********print 2 table using while loop************')
 let c=2
 while(c<=20){
     console.log(c)
     c=c+2
 }

 //-------------------------------------------------------
 console.log('***********Even Odd no**********')
 let d=1
 while(d<=20){
     if(d%2==0){
         console.log('the no is even',d)
     }
     else{
         console.log('the no is odd',d)
     }
      d++
 }

 //---------------------------------------------------
 console.log('*********Continue in for loop************')
 for(let i=0;i<=10;i++)
    {
        if(i==3){
            continue
        }
        console.log(i)
    }

//---------------------------------------------------
console.log('*******Break in for loop*************')
for(let i=0;i<=10;i++){
    if(i==5){
        break
    }
    console.log(i)
}
//-------------------------------------------------
console.log('*************break in while loop********')
let a1=0
while(a1<10){
    if(a1==3){
        break
    }
    console.log(a1)
    a1++
}
//------------------------------------------------
console.log('*************continue in while loop********')
let aa=1
while(aa<=10){
    if(aa==3){
        aa++
        continue
    }
    console.log(aa)
    aa++
    
}
//---------------------------------------------------
console.log('******another example***********')
let i=0
while(i<5){
    i++
    if(i==3){
        continue
    }
    console.log(i) 
}
//------------------------------------------------------
console.log(Boolean(aa1=5))
if(aa==5){
    console.log('hello')
}
else{
    console.log('bye')
}

//----------------------------------------------
console.log('*******problem statement*********************')
let bb1=10
while(bb1<=50){
    console.log(bb1)
    bb1=bb1+5
}
