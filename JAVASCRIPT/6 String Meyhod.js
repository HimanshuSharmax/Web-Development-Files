/*
    String: collection of Characters or Sequence of Characters or
            array of Characters
            eg. name,email,password etc

            string is a immutable data type
            index start with 0
 */

//String Constant
var a = 'Ducat Education Noida'
var b = "Ducat Education Noida"
var c = `
            Ducat
            Education
            Noida
        `
console.log(a,typeof(a))
console.log(b,typeof(b))
console.log(c,typeof(c))


//String using for Loops
for (let i = 0; i < a.length; i++) {
    console.log(a[i])
}

//string using while loop
let i = 0
while (i < a.length) {
    console.log(a[i])
    i++
}

//string using do while loop
let j = 0
do{
    console.log(a[j])
    j++
}while (j < a.length) 

//for in loop  : index
for(const i in a){
    console.log(a[i])
}

//for of loop : value
for(const i of a){
    console.log(i)
}

//!string methods ->
1 // charAt() return character at any specific index
console.log(a[0],a.charAt(0))
console.log(a[1],a.charAt(1))
console.log(a[2],a.charAt(2))
console.log(a[3],a.charAt(3))
console.log(a[4],a.charAt(4))


2 // charCodeAt(): return Unicode of first character of String if no argument is provided,
  //    and if argument is provided, then it return Unicode of that particular character

// console.log(a.charCodeAt())
for(let i in a){
    console.log(`${a[i]} = ${a.charCodeAt(i)}`)
}

/*
A=65    a=97    0=48
B=66    b=98    1=49
-
Z=90    z=122   9=57
*/
