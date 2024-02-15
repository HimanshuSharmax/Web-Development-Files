/*
Flow Control Statements or Decision Making Statements
1. Conditional Statements or Selection Statements:
    1. if Statement
    2. if else Statement
    3. Netsed if else Statement
    4. if else if ladder Statement
    5. switch case Statement
2. Iteration Statements or Loops:
    1. for Loop
    2. for in Loop
    3. for Of Loop
    4. while Loop
    5. do while Loop
    6. Nested Loops
3. Jump Statements:
    1. break Statement
    2. Continue Statement

if Statement: used when execution of a Statement Block depend
              on a condition
syntax:
if(condition){
    -----
    number of Statements
    -----
}
Note: {} are optional if we have only one statement in statement
      block
 */
if(true){
    console.log("Hello World1")
    console.log("Hello World2")
    console.log("Hello World3")
}
console.log("Hello World4")
console.log("Hello World5")
console.log("Hello World6")

if(false){
    console.log("Hello World1")
    console.log("Hello World2")
    console.log("Hello World3")
}
console.log("Hello World4")
console.log("Hello World5")
console.log("Hello World6")

if (!true)
console.log("Hello World1")
console.log("Hello World2")
console.log("Hello World3")
console.log("Hello World4")
console.log("Hello World5")
console.log("Hello World6")


1.  //!  if else Statement
/* used when execution of one Statement Block
                   out of two block depends on a condition
syntax:
if(condition){
    -----
    number of Statements block1
    -----
}
else{
    -----
    number of Statements block2
    -----
}
 */

var num = Number(prompt("Enter the Number :  "))
if(num%2==0)
document.write(`${num} is Even`)
else
document.write(`${num} is Odd`)


/*
WAP to Check whether a person can vote or not
WAP to check whether two numbers are equal or not
*/


// WAP to check whether a number is perfect square number or not
var num = Number(prompt("Enter the Number : "))
var n = parseInt(num**0.5)
if(n*n==num)
document.write(`${num} is Perfect Square Number`)
else
document.write(`${num} is not a Perfect Square Number`)

2. //! Nested if Else
/* if else within if else Statement
syntax:
    if(condition1){
        ------
        if(condition2){
            -----
            -----
        }
        else{
            ----
            ----
        }
        ------
    }
    else
    {
        ------
        if(condition3){
            -----
            -----
        }
        else{
            ----
            ----
        }
        ------
    }
 */


var a = Number(prompt("Enter the First Number : "))
var b = Number(prompt("Enter the Second Number : "))
var c = Number(prompt("Enter the Third Number : "))
if(a<b){
    if(a<c)
    document.write(`${a} is Smallest`)
    else
    document.write(`${c} is Smallest`)
}
else{
    if(b<c)
    document.write(`${b} is Smallest`)
    else
    document.write(`${c} is Smallest`)
}



// WAP to check whether a Year is Leap Year or Not
var year = Number(prompt("Enter the Year Number : "))
if(year%100==0){
    if(year%400==0)
    document.write(`${year} is a Leap Year`)
    else
    document.write(`${year} is not a Leap Year`)
}
else{
    if(year%4==0)
    document.write(`${year} is a Leap Year`)
    else
    document.write(`${year} is not a Leap Year`)
}


var year = Number(prompt("Enter the Year Number : "))
if (year % 400 == 0)
    document.write(`${year} is a Leap Year`)
else if (year % 4 == 0 && year%100!=0)
    document.write(`${year} is a Leap Year`)
else
    document.write(`${year} is not a Leap Year`)

var year = Number(prompt("Enter the Year Number : "))
if (year % 400 == 0 || year % 4 == 0 && year%100!=0)
    document.write(`${year} is a Leap Year`)
else
    document.write(`${year} is not a Leap Year`)


/*
 if else if ladder : when we have n number of conditions
 syntax:
    if(condition1){
        -----
        -----
    }
    else if(condition2){
        -----
        -----
    }
    else if(condition3){
        -----
        -----
    }
    else if(condition4){
        ------
        ------
    }
    --
    --
    --
    else if(conditionN){
        ------
        ------
    }
    else{
        ------
        ------
    }
 */

var a = Number(prompt("Enter the First Number : "))
var b = Number(prompt("Enter the Second Number : "))
var c = Number(prompt("Enter the Third Number : "))
var d = Number(prompt("Enter the Fourth Number : "))
var e = Number(prompt("Enter the Fifth Number : "))
if(a>=b && a>=c && a>=d && a>=e)
document.write(`${a} is Greatest`)
else if(b>=c && b>=d && b>=e)
document.write(`${b} is Greatest`)
else if(c>=d && c>=e)
document.write(`${c} is Greatest`)
else if(d>=e)
document.write(`${d} is Greatest`)
else
document.write(`${e} is Greatest`)
