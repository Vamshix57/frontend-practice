//Values and variables

var myName = 'Vamshi'
var myAge = 17
var _myAge = 17
console.log(_myAge);

var _myAge = 17
var _my__name = 'vamshi'
var 1myName = 'vamshi'
var $myname = 'rrrrr'
console.log($myname);

var myName = 17
console.log(typeof(myName));

var code = true;
console.log(code);
console.log(typeof(myName));

console.log( 10 + '10');
console.log( 5 - '7'); //bug
console.log( 'Java ' + 'Script');
console.log( '' + '');
console.log( 0 + '');
console.log( 'vamshi' - 'krishna'); //Is NaN
console.log( false + false);
console.log( true + true);
console.log( true + false);
console.log( false + true);

var rent = null;
console.log(rent);

var notDec;
console.log(notDec);

var number = 9990009292;
var name = 'vamshi'

console.log(isNaN(number));
console.log(isNaN(name));

if (isNaN(name)){
    console.log('Please enter a valid number');
}

NaN === NaN;
Number.NaN === NaN;
isNaN(NaN);
isNaN(Number.NaN);
console.log(isNaN(Number.NaN));

console.log(3+3);
console.log(5-7);
console.log(10/2);
console.log(9*9);

//Increament operators

->postfixOperator
var num = 15;
var newNum = num++;
console.log(num);
console.log(newNum);

->prefixOperator
var num = 15;
var newNum = ++num;
console.log(num);
console.log(newNum);

//Decreament operators

->postfixOperator
var num = 15;
var newNum = num--;
console.log(num);
console.log(newNum);

->prefixOperator
var num = 15;
var newNum = --num;
console.log(num);
console.log(newNum);

var num = 15;
var newNum = num++ + 5;
console.log(num);
console.log(newNum);

//Comparison operators

var a = 30;
var b = 10;

Equal (==)
console.log(a == b);

Not equal ( == )
console.log(a != b);

Greater than (>)
console.log(a>b);

Greater than or equal to (>=)
console.log(a >= b);

Less than (<)
console.log(a < b);

Less than or equal to (<=)
console.log(a <= b);

Logical operators

var a = 30;
var b = 20;

Logical AND (&&)

console.log(a>b && b>0);
console.log(a>b && b>-50 && b<0);

Logical OR (||)

console.log((a>b) || (b>0) || (b<0));

Logical Not(!)

console.log(!((a>0) || (b<0)));
console.log(!false);

//String concatenation operator

console.log("Hello world");

console.log("Hello " + "world");

var name = "vamshi"

console.log(name + " krishna");

Exponentiation operator

Sol 1:
console.log(3**3);

//Sol 2:
console.log(5 + "vamshi");

//Sol 3:
var a = 5;
var b = 10;
//Output should be a=10 , b=5

var c = b; //now c=10
var b = a; //now b=5
var a = c;

console.log("The value of a is " + a);
console.log("The value of b is " + b);

//Sol 4:

var a = 5;
var b = 10;

//Output should be b=5; a=10

a = a + b; //now a=15
b = a - b; //now b=5
a = a - b; //now a=10

console.log("The value of a is " + a);
console.log("The value of b is " + b);

//Sol
var num1 = 1;
var num2 = "1"

console.log(typeof(num1));
console.log(typeof(num2));

console.log(num1 == num2);

var num1 = 1;
var num2 = "1"

console.log(typeof(num1));
console.log(typeof(num2));
console.log(num2);

console.log(num1 === num2);










































//Control statements & Loops:

If Else:

var tomr = 'rain';

if (tomr == 'rain') {
    console.log('Take a raincoat');
} else {
    console.log('No need to take a raincoat');  
}

var tomr = 'sunny';

if (tomr == 'rain') {
    console.log('Take a raincoat');
} else {
    console.log('No need to take a raincoat');  
}

//Program to check whether it is a leap year or not

var year = 2022;

if (year % 4 == 0) {
    if (year % 100 == 0) {
        if (year % 400 == 0) {
            console.log('This year '+ year +' is a leap year');
        } else {
            console.log('This year '+ year +' is not a leap year');
        }
    }else {console.log('This year ' + year + ' is a leap year') 
    }
} else {
    console.log('This year ' + year + ' is not a leap year');
}


// Truthy and falsy valuse in JS

// if(true){
//     console.log("OMG, we lost the game 😭");
    
// }else{
//     console.log("yay, we won the game 😀");
// }

// Conditional (ternary) operator
// var age = 17;
// if(age>=18){
//     console.log("You are eligible to vote");
// }else{
//     console.log("You are not eligible to vote");
// }

// var age = 18;
// console.log((age >= 18) ? "You can vote" : "You can't vote");

// var area = "rectangle";
// var PI = 3.142, l=5, b=4, r=3;

// if(area == "circle"){
//     console.log("The area of the circle is : " + PI*r**2);
// }else if(area == "triangle"){
//     console.log("The area of the triangle is : " + (l*b)/2);
// }else if(area == "rectangle"){  
//     console.log("The area of the rectangle is : " + (l*b));
// }else{
//     console.log("Please enter valid data");
// }

// var area = "triangle";
// var PI = 3.142, l=5, b=4, r=3;

// switch(area){
//     case "circle":
//         console.log("The area of the circle is : " + PI*r**2);   
//         break;

//     case "rectangle":
//         console.log("The area of the rectangle is : " + (l*b));
//         break;

//     case "triangle":
//         console.log("The area of the triangle is : " + (l*b)/2);
//         break;

//     default:
//         console.log("Please enter valid data");
// }

// While Loops:

// var num = 40;
// // bLock scope
// while(num <= 10){
//     console.log(num); //Infinite loop
//     num++;
// }

// Do while loop statement

// var num = 0;
// do{
//     debugger
//     console.log(num); //Infinite loop
//     num++;
// }while(num <= 10)

// For loop

// for(var num = 0; num <= 10; num++) {
//     debugger
//     console.log(num);
// }

// Problem 6:

// for(var num = 1; num <= 10; num++) {
//     var tableof = 8;
//     console.log(tableof + " * " + num + " = " + tableof * num);
// }

var a = 1;
var b = 2;
var sum = a+b;
console.log(sum);

function sum (a,b){
    var total = a+b;
    console.log(total);
}

sum();
sum(10,20);
sum(30,30);

function sum(a,b){
    var total =  a+b;
    console.log(total);
}

var funExp = sum(12,23);