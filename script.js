/* Task - 1  */

//let age = prompt("Please enter your age:"); 

//const checkAge = (age > 18) ? true : confirm('Родители разрешили?)');
//console.log(checkAge)

/* Task -2  */

const powFunction = (a,b) =>{
    return Math.pow(a,b)
}

console.log(powFunction(3,3))

/* Task - 3 */ 

const ask = (question, yes,no) =>{
    if (confirm(question)) yes()
    else no();
}

/* ask(
    "Вы согласны?",
    function() { alert("Вы согласились."); },
    function() { alert("Вы отменили выполнение."); }
); */

/* Task - 4 */

/* let arr = [5, 2, 1, -10, 8];

arr.sort( (a,b) => (b - a))

alert( arr ); // 8, 5, 2, 1, -10 */

/* Task - 5 */
/* 
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [vasya, petya, masha];

let names = users.map(user => user.name);

console.log(names); // Вася, Петя, Маша */

/* Task - 6 */

/* let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };

let users = [ vasya, petya, masha ];

let usersMapped = users.map(user => ({
  fullName: `${user.name} ${user.surname}`,
  id: user.id
}));
 */
/*
usersMapped = [
  { fullName: "Вася Пупкин", id: 1 },
  { fullName: "Петя Иванов", id: 2 },
  { fullName: "Маша Петрова", id: 3 }
]
*/

/* alert( usersMapped[0].id ); // 1
alert( usersMapped[0].fullName ); */ // Вася Пупкин


/* TASK-7 */

function getAverageAge(users) {
    return users.reduce((prev, user) => prev + user.age, 0) / users.length;
  }
  
  let vasya = { name: "Вася", age: 25 };
  let petya = { name: "Петя", age: 30 };
  let masha = { name: "Маша", age: 29 };
  
  let arr = [ vasya, petya, masha ];
  
  alert( getAverageAge(arr) ); // 28



