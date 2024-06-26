/*  objects store information in pair of keys and values
    keys must be unique
    values may be duplicate
    mutable data type
*/

//! object literal 
var emp = {
    id: 1001,
    name: "Nitin Chauhan",
    dsg: "Trainer",
    salary: 135000,
    city: "Faridabad",
    state: "Haryana"
}
console.log(emp)

//! Empty object literal
var emp = {}
emp.id = 1001
emp['name'] = "Nitin Chauhan"
emp["dsg"] = "Trainer"
emp[`salary`] = 135000
emp.city = "Noida"
emp.state = "UP"
console.log(emp)


//! new Object()
var emp = Object()
emp.id = 1001
emp['name'] = "Nitin Chauhan"
emp["dsg"] = "Trainer"
emp[`salary`] = 135000
emp.city = "Noida"
emp.state = "UP"
console.log(emp)

//! Accessing Object Values with help of keys
console.log(emp.id)
console.log(emp['name'])
console.log(emp["dsg"])
console.log(emp[`salary`])


//! Accessing Object values through Loop
for(let key in emp){
    console.log(`${key} = ${emp[key]}`)
}

//! adding an item to existing object
emp.email = "vishankchauhan@gmail.com"
emp['phone'] = "9873848046"
console.log(emp)


//! deleting object item
delete emp.id
delete emp['name']
console.log(emp)


//! Nesting of Objects
var emp = {
     id:1001,
     name:"Nitin Chauhan",
     dsg:"Trainer",
     salary:135000,
     subject:["Mern Stack","Mean Stack","Python Full Stack","Php Full Stack"],
     address:{
         house:"82k",
         street:"5A",
         nearby:"Temple",
         pin:121002,
         city:"Faridabad",
         state:"Haryana"
     }
 }
 console.log(emp)
 console.log(emp.subject)
 console.log(emp.subject[2])
 console.log(emp.address)
 console.log(emp.address.city)

//! function in Objects
//Regular/Normal functions in object
var obj = {
    show(){
        console.log("In show() of Object")
    },
    display(){
        console.log("In display() of Object")
    }
}
obj.show()
obj.display()

//Anonymous functions in object
var obj = {
    show:function(){
        console.log("In show() of Object")
    },
    display:function(){
        console.log("In display() of Object")
    }
}
obj.show()
obj.display()

// Fat Arrow functions in object
var obj = {
    show: () => console.log("In show() of Object"),
    display: () => {
        console.log("In display() of Object")
    }
}
obj.show()
obj.display()


// Usecase of function in obj
var emp = {
    id: 1001,
    name: "Nitin Chauhan",
    dsg: "Trainer",
    basic: 98500,
    calculate() {
        this.ta = this.basic * 5 / 100
        this.da = this.basic * 10 / 100
        this.hra = this.basic * 12 / 100
        this.ma = this.basic * 15 / 100
        this.gross = this.basic + this.ta + this.da + this.hra + this.ma
        if (this.gross < 60000)
            this.itax = 0
        else
            this.itax = this.gross * 12 / 100

        this.net = this.gross-this.itax
    },
    display(){
        console.log(`
            Employee Id         :   ${this.id}
            Name                :   ${this.name}
            Designation         :   ${this.dsg}
            Basic Salary        :   ${this.basic}
            Ta                  :   ${this.ta}
            Da                  :   ${this.da}
            Hra                 :   ${this.hra}
            Ma                  :   ${this.ma}
            Gross Salary        :   ${this.gross}
            Income Tax          :   ${this.itax}
            Net Salary          :   ${this.net}
        `)        
    }
}
emp.calculate()
emp.display()

// using fat arrow function
var emp = {
    id: 1001,
    name: "Deepak Singh",
    dsg: "Trainer",
    setSalary: (num) => {
        emp.salary = num
    },
    display: () => {
        console.log(`
            Employee Id :   ${emp.id}
            Name        :   ${emp.name}
            Designation :   ${emp.dsg}
            Salary      :   ${emp.salary}
        `)
    }
}
emp.setSalary(98500)
emp.display()

//Note : if we use fat arrow function, then this keyword represent globalthis so instead of this use object name in fat arrow function, and in case of regular function we can use this


 //! getter and setter
 var emp = {
    id:1001,
    name:"Deepak Singh",
    dsg:"Trainer",
    set setSalary(num){                 // Setter
        this.salary = num
    },
    get display(){                      // getter
        console.log(`
            Employee Id :   ${this.id}
            Name        :   ${this.name}
            Designation :   ${this.dsg}
            Salary      :   ${this.salary}
        `)
    }
}
emp.setSalary  =98500
emp.display
 
//! object destructuring
 var emp = {
    id:1001,
    name:"Nitin Chauhan",
    dsg:"Trainer",
    salary:135000,
    city:"Noida",
    state:"UP"
}
var {name,id,state,city,dsg,salary} = emp   // destructure
console.log(`
    Id          :   ${id}
    Name        :   ${name}
    Designation :   ${dsg}
    Salary      :   ${salary}
    City        :   ${city}
    State       :   ${state}
`)


//! object constructor / object prototype 
 // making class before 2015 ecma (using this)
 
 var Employee = function (id, name, dsg, salary, city, state) {
    this.id = id
    this.name = name
    this.dsg = dsg
    this.salary = salary
    this.city = city
    this.state = state
}


var emp1 = new Employee(1001,"Nitin Chauhan","Trainer",163500,"Noida","UP")
var emp2 = new Employee(1002,"Deepak Singh Gusain","Trainer",263500,"Ghaziabad","UP")
var emp3 = new Employee(1003,"Mamta Jain","Trainer",363500,"South Delhi","Delhi")

console.log(emp1)
console.log(emp2)
console.log(emp3)
