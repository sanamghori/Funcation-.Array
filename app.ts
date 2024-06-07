const mycar={
    brand :"toyota",
    model :2024,
    variant:"3000cc",
    start:()=>{
        return "starting"
    }

}
console.log(mycar.start())

console.log(mycar)
console.log(mycar.model)

mycar.brand="honda"
console.log(mycar.brand)

const student ={
    ID:"sana22",
    email:"sana-ghori2001@gmail.com",
    number:3456,

}
type maincourse=string[]
let maincourse:maincourse=["biryani","halwapori"]
console.log(maincourse)

type chattarpattar=string[]
let chattarpattar:chattarpattar=["chipis","juice"]
console.log(chattarpattar)


type booleanarray=boolean[]
let isperesent:booleanarray=[true,false,]
console.log(isperesent)

let inperesent:string|boolean
inperesent="present"
console.log(inperesent)
inperesent=true
console.log(inperesent)

let size:"small"|"medium"|"large"
size="small"
size="medium"
size="large"
console.log(size)

let light:"read"|"green"|"yellow"
light="read"
light="green"
light="yellow"
console.log(light)