//Map--in map we can work with every datatype
//Property of Map

let mapA=new Map()
console.log(mapA)

//1.size--return size of map
console.log(mapA.size)


//method of map()
//1.set()--always come's in key value pair..in set the key's are comes in differnet datatype.
mapA.set('question','answer')
console.log(mapA)

//boolean as key
mapA.set(true,'ismarreid')
console.log(mapA)

//number as key
mapA.set(23,'age')
console.log(mapA)

//array as key
let a1=['python','javascript']

mapA.set(a1,'skills')
console.log(mapA)

//object as key
let obj1={'father':"sahane",'mother':'sahane1'}
mapA.set(obj1,'family')
console.log(mapA)


//2-get()==if we pass key then get() gives their respective value.if key is not found then set value as undefined
console.log(mapA.get(obj1))
console.log(mapA.get(a1))
console.log(mapA.get(true))
console.log(mapA.get(23))
console.log(mapA.get(11))


//3.clear()==clear map() key's and value..
//console.log(mapA)
// mapA.clear()
// console.log(mapA)

//4.has()==give boolean value.it return true if found the map() propety or variable
let b1=mapA.has(obj1)
console.log(b1)

//5.key()==give all keys of map()
let b2=mapA.keys()
console.log(b2)

//6.value()==give all value of map() [map iterator]
let b3=mapA.values()
console.log(b3)

//7.entries()==give multidimentional array of given key value pair of map()
let b4=mapA.entries()
console.log(b4)

//delete()==use for delete a key..return true
console.log(mapA.delete(a1))
console.log(mapA)

//----------------------------------
console.log("****examples of map******")
let mapB=new Map()
mapB.set('Fullname','kirti')
console.log(mapB)


//Set()==set store's the unique value..remove duplicate value
//---------------------------------------------------------
console.log("*****set method and peropery****")
let arr1=[11,22,33,22,44,11]
console.log(arr1)
 
let set1=new Set(arr1)
console.log(set1)
console.log(Array.from(set1))

//1.add()==add value in set
let s1=set1.add(45)
console.log(s1)


//2.clear()==clear the set..{}
// console.log(set1.clear())
// console.log(set1)

//3.has()==return boolean value--
let s2=set1.has(123)
console.log(s2)

s2=set1.has(11)
console.log(s2)

//4.size==give element size of an set
console.log(set1.size)

//5.delete()==delete set element
set1.delete(45)
console.log(set1)

//6.key()==get all keys of set ..[Set Iterator]
console.log(set1.keys())

//7.entries()==key value pair
for(let [a,b] of set1.entries()){
    console.log(a,b)
}
//-----------------------------------------
console.log("*****set examples****")
let set2=new Set([['MH','MUMBAI'],['Up','lucknow'],['RAJASTHAN','JAIPUR']])
for(let [a,b] of set2.entries()){
    console.log(a[0],b[1])
}

//------------------------------------------
console.log("***another example****")
let set3=new Set([['fullname',"kirti"],['sirname','sahane'],['age',23]])
for(let [a,b] of set3.entries()){
    console.log(a[0],b[1])
}

