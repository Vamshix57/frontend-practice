//Exponentiation operator
//Sol 1:
// console.log(3**3);

//Sol 2:
// console.log(5 + "vamshi");

//Sol 3:
// var a = 5;
// var b = 10;
//Output should be a=10 , b=5

// var c = b; //now c=10
// var b = a; //now b=5
// var a = c;

// console.log("The value of a is " + a);
// console.log("The value of b is " + b);

//Sol 4:

// var a = 5;
// var b = 10;

//Out put should be b=5; a=10

// a = a + b; //now a=15
// b = a - b; //now b=5
// a = a - b; //now a=10

// console.log("The value of a is " + a);
// console.log("The value of b is " + b);

//Sol
// var num1 = 1;
// var num2 = "1"

// console.log(typeof(num1));
// console.log(typeof(num2));

// console.log(num1 == num2);

// var num1 = 1;
// var num2 = "1"

// console.log(typeof(num1));
// console.log(typeof(num2));
// console.log(num2);

// console.log(num1 === num2);

//Control statements & Loops:
//If Else:

// var tomr = 'rain';

// if (tomr == 'rain') {
//     console.log('Take a raincoat');
// } else {
//     console.log('No need to take a raincoat');  
// }

// var tomr = 'sunny';

// if (tomr == 'rain') {
//     console.log('Take a raincoat');
// } else {
//     console.log('No need to take a raincoat');  
// }

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





































































































