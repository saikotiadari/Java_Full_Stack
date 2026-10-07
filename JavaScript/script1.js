/*var a=20;
var a=30
console.log(a);*/


/*let b=30
b=25
console.log(b);*/

/*const c=25;
console.log(c);*/

//check whether to check the 3 sides of a triangle
/*let a=3;
let b=4;
let c=5;
if(((a+b)>c)&&(b+c)>a&&(a+c)>b){
    console.log("ok,valid triangle");
}
else{
    console.log("no,invalid triangle");
}*/

//check whether the number is fizbuzz or not
/*let num=15;
if(num%3==0 && num%5==0){
    console.log("fizzbuzz");}
    else{
        console.log("not a fizzbuzz");}*/


//check whtether the given year is leap year or not
/*let year=2023;
if(year%4==0 && year%100!=0 || year%400==0){
    console.log("leap year");}
    else{
    console.log("not a leap year");
    }*/

//check whether the given number is prime or not
/*let num=77;
let isPrime=true;
if(num<=1) return false;
for(let i=2;i<num;i++){
    if(num%i==0){
        isPrime=false;
        break;
    }
}
console.log(isPrime?"prime":"not prime");*/

//write a program to reverse a number using while loop
let num = 12345; 
let x = 0; // Initialize x to 0

while (num > 0) { 
    let temp = num % 10; 
    x = (x * 10) + temp; // Correct precedence and logic
    num = Math.floor(num / 10); 
} 

console.log(x); // Outputs: 54321

