//literal way

let empDetails={
    name:"sai kumar",
    role:"developer",
    salary:2500000,
    skills:["System design","micro services","Monolithic architecture","even driven","database design"],
    address:{
        city:'guntur',
        zipcode:345698
    }
}

empDetails.email="ravi@gmail.com"
empDetails.phone=3456789098
console.log(empDetails);


//using new keyword
let emp2=new Object({
   name:"ravi chandra",role:"test engineer"
})
console.log(emp2);
//CRUD operation
console.log("=============CRUD operations==============");
console.log(empDetails.name);
console.log(empDetails.skills[1]);
empDetails.skills.map((x)=>{
    console.log(x);
})


console.log(empDetails.address)

//object inbuilt function
//onsole.log("================Object inbuilt function=========");
//console.log(Object.keys(empDetails))
//console.log(Object.values(empDetails))
//console.log(Object.entries(empDetails))

delete empDetails.email
console.log(empDetails)
Object.seal(empDetails)

empDetails.email='sai@gmail.com'
empDetails.salary=12300000000
console.log(empDetails)
