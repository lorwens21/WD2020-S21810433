// Array

// let names = ["John", "Mark", "Jane"];
// let years = new Array(1990, 1991, 1992, 1987, 1994);

// console.log(names);
// console.log(names.length);
// console.log(years);

// console.log(names[1]);
// console.log(years[years.length - 1]);

// names[1] = "Bob";
// console.log(names);

// let john = ["John", "Smith", 32, true];
// console.log(john.toString());
// console.log(john.join(" "));

// john.pop();
// john.shift();
// console.log(john);

// john.push(true);
// john.push("Blue");
// console.log(john);

// john.unshift("John");
// console.log(john);

// Object

// let john=
// {
//     firstName : "John",
//     lastName : "Smith",
//     birthYear : 1990,
//     isMarried : true,
//     family : ["Jane", "Mark", "Bob"],
//     calcAge : function ()
//     {
//         this.age = 2020 - this.birthYear;
//     }
// };

// console.log(john);
// console.log(john.birthYear);
// console.log(john["lastName"]);

// john.job = "driver";
// console.log(john);

// delete john.job;
// console.log(john);

// john.calcAge();
// console.log(john);

// Document Object Models (DOM)

let title = document.getElementsByTagName('h1')[0].innerHTML;
console.log(title);

let username = document.getElementById('username').value;
console.log(username);

let username2 = document.getElementsByClassName('input-user')[0].value;
console.log(username2);

function helloWorld()
{
    alert("hello world");
}

function getUserName()
{
    let username = document.getElementById('username').value;
    console.log(username);
}



