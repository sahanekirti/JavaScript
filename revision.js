let array=[22,33,44]

function printarray(arr,fn){
    let newarray=[]
    for(let i=0;i<arr.length;i++)
    {
     let newelement=fn(arr[i])
     newarray.push(newelement)
    }
    return newarray
}


let add=function(el){
    return el*2
}

let print1=printarray(array,add)
console.log(print1)