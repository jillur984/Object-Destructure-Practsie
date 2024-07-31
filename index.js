// array destrucre nested object
// const employee = {
//   Company: {
//     name: "GeeksforGeeks",
//     location: "Noida",
//     Domains: { Courses: "JS", Articles: "TypeScript" },
//   },
// };

// const{Company :{name}}=employee;
// console.log(name)
// const{Company:{Domains:{Courses,Articles}}}=employee
// console.log(Courses)

// ** here i declare value manually from other destruture value
// const jillur={
//     id:202120086,
//     address:"Mymensingh",
//     dept:"CSE",
// }

// const{id,address,dept,info=` from ${address} `}=jillur
// console.log(id,info)

// very very important object destructure for React,vue 

const employee={
    id:10,
    name:"James",
    dept:"Spy"
}

function logEmployee({name,dept}){
    console.log(`${name} is ${dept}`)
}
logEmployee(employee)


// Object Destructure Along with Function Also

function getUser(){
    return{
        name:"Jillur Rahman",
        Address:"Mymensingh,Bangladesh"
    }
}

const{name,Address}=getUser()

console.log(name,Address)


// can implemet loop by Object destructer

const users=[
    {
        'name':"Jillur",
        "Address":"Mymensingh",
        'age':27
    },
    {
        'name':"Muktadir",
        "Address":"Phulpur",
        'age':27
    },
    {
        'name':"Abu Hanif",
        "Address":"Rangpur",
        'age':29
    }
]

for(let {name,Address,age} of users){
    console.log(`${name} address is ${Address} and Age is ${age}`)
}