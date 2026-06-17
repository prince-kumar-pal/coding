
// for(let i=10; i>=1; i-=1) {
//     console.log('prince', i);
// }

// for(let i=0 ; i<=20 ; i+=2) {
//     console.log("even number" , i);
// }

// for(let i=1 ; i<=20 ; i+=2) {
//     console.log("odd number" , i);
// }


// for(let i=11 ; i<=20 ; i+=1) {
//     console.log("i" , i);
// }
// let n=25;
// for(let i=1; i<=10; i++){
//     console.log(n,"*", i, "=", i*n);
//     // console.log(`${n} *${i}=${n*i}`)

// } 
// for(let i = 20 ; i >=11 ; i-=1) {
//     console.log("i" , i);
// }


// for (let i =1 ; i <=200 ; i++) {
//     if(i%2==0) {
//         console.log(i);
//     }



// let n = 20 ;
// let sum = 0 ;
// for(let i=1 ; i<=n ; i+=1) {
//     sum = sum+i;
// }
//  console.log(sum);





// let n = 5;
// while(n<=10){
    // console.log(n);
    // n++;
// }


// for(let i=1 ; i<=20 ; i+=2) {
//     console.log("odd number" , i);
// }


// do{
//     console.log("n" , 5);
//     n++;
// }while(n<=10);    


let n = 123;
let sum = 0 ;
for (let i=1 ; n>0 ; i++) {
    n = Math.floor(n/10);
    sum = sum + n%10;
}
console.log(sum);

//sum of digits of a number
let num = 12345;
let sum1 = 0;
while(num>0) {
    sum1 = sum1 + num%10;
    num = Math.floor(num/10);
}   
cons