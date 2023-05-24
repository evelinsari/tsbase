let x: number = 5
let y: number = 6
let result: number = x + y
console.log(result)

function sleepIn(weekday:boolean, vacation:boolean){
    if (!weekday || vacation) {
        return true;
    } else {
        return false;
    }
}
console.log("--------- SLEEPIN----------")
console.log(sleepIn(true, true));  // true
console.log(sleepIn(false,true));// true
console.log(sleepIn(true,false)); // false
console.log(sleepIn(false,false)); // true

function monkeyTrouble(aSmile:boolean, bSmile:boolean){
    if (aSmile === bSmile) {
        return true;
    } else {
        return false;
    }
}
console.log("--------- SUMDOUBLE----------")
console.log(monkeyTrouble(true,true)); true
console.log(monkeyTrouble(false,false)); true
console.log(monkeyTrouble(true,false)); false

 function sumDouble(a:number, b:number){
    if (a !== b) {
        return a+b;
    } else {
        return (a+b)*2;
    }
 }
 
 console.log("--------- SUMDOUBLE----------")
 console.log(sumDouble(1,2)); //3
 console.log(sumDouble(3,2)); // 5
 console.log(sumDouble(2,2)); //8

 function diff21(n:number){
    if (n < 21) {
        return 21-n;
    } else {
        return (n-21)*2;
}
}

console.log("--------- DIFF21----------")
console.log(diff21(19)); //2
console.log(diff21(10)); //11
console.log(diff21(21)); //0

function parrotTrouble(talking:boolean, hour:number){
    if (talking  && (hour < 7 || hour > 20)) {
        return true;
    } else {
    return false;
    }
}

console.log(parrotTrouble(true,6)) //true
console.log(parrotTrouble(true,7)) // false
console.log(parrotTrouble(false,6)) // false

function makes10(a:number, b:number) {
    if (a === 10 || b === 10 || (a + b) === 10) {
        return true;
    } else {
        return false;
    }
}

console.log("--------- MAKES10----------")
console.log(makes10(9,10)) //true
console.log(makes10(9,9)) // false
console.log(makes10(1,9)) // true
