let arr=[10,20,30,40,50];
let str="JavaScript"
//for-of loop
//Integer
for(let val of arr){
    console.log(val);
}

//String
for(let ch of str){
    console.log(ch);
}
console.log("-------------------------------------");

//for-in loop
//Integer
for(let ind in arr){
    console.log(ind);
}

//String
for(let ind in str){
    console.log(ind);
}

//forEach loop
arr.forEach((val,ind,a)=>{
    console.log(val,"->",ind,"->",a);
})
console.log("===============Map Function========================")
let prices=[500,300,340,32353,12343,76543,98623];
console.log(prices);

let discount=prices.map((x)=>{
    return x-x/10;
})

console.log(discount);

let updatedAmount=prices.map((z)=>{
    return z+250;
})
console.log(updatedAmount);
console.log("=============Filter==================");
let filterDiscount=discount.filter((x)=>{
        return x>=1 && x<=5000;
})
console.log(filterDiscount)

console.log("=========Reduce funtion============");
let totalPrice=filterDiscount.reduce((acl,val)=>{
    return acl+val;
})
console.log(totalPrice)