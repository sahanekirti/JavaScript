// let str='encyclopedia'
// count=0
// for(let i=0;i<str.length;i++){
//     if(str[i]=='a' || str[i]=='e' || str[i]=='i' || str[i]=='o' || str[i]=='u'){
//         count=count+1

//     }
// }
// console.log(count)

let str='encyclopedia'
let obj={}
for(let i=0;i<=str.length;i++){
    if(str[i]=='a' || str[i]=='e'|| str[i]=='i'|| str[i]=='o'|| str[i]=='u' ){
        if(obj[str[i]]){
            obj[str[i]]=Number(obj[str[i]]+1)
        }
        else{
            obj[str[i]]=1
        }
    }
}
console.log(obj)



