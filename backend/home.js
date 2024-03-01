// var a = 'something'
// var b = 'nothing'

// var c;
// console.log(a, b);
// c = a;
// a = b;
// b = c;
// console.log(a, b);
// console.log(`Real value is  a,b ${a}- Result is a,b`);

// var str = "I have to go to the NewYork.";
// console.log(str.indexOf("to")); //7
// console.log(str.lastIndexOf("to")); //13
// console.log(str.indexOf("e", 4));  //5
//    //4 is the starting index of the search ie the index after which the searching starts.
// console.log(str.indexOf("Mumbai")); //-1




// var star = '';
// for (var j = 0; j < 5; j++)
//     console.log(star += "*");

// var str = "I have to   go to NewYork";
// console.log(str.slice(7, 12));
// console.log(str.slice(10));

// console.log(str.substring(7, 12)); //same as slice but  does not work with negative values of index

// console.log(str.split("   ")); // bhaiya dekho space uske hisab se split krdega ye budbak

// var str = "Hello World";
// var str1 = "Bye Bye world"
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(str.concat(str1));
// console.log(str.charAt(2));

// Number()
// parseInt("10.33")
// parseInt("10 years")

// parseFloat("10.33")



// var str3 = "";

// for (let i = str2.length; i > 0; i--) {
//     str3 += str2.charAt(i);
// }
// console.log(str3);



// const cars = ["JeepCumpus", "LandRover", "BMW", "Jaguar", "Ferrari"];
// var k = cars.length - 1;
// console.log(cars);
// for (let i = k; i > 2; i--) {
//     cars[i + 1] = cars[i];
// }
// cars[3] = "Lamborgini";
// console.log(cars);


// const str = 'AAABBBCCCDDA';
// // ASSINGMENT
// // output Required: ABCDF
// // output required: ABCDADF
// let result = "";
// for (let i = 0; i <= str.length; i++) {
//     if (result.indexOf(str[i] === -1)) {
//         result += str[i];
//     }
// }
// console.log(result);


// var a = 0;
// var b = 1;
// var c;
// var n = 10;
// console.log(a);
// console.log(b);
// for (let i = 2; i < n; i++) {
//     c = a + b;
//     a = b;
//     b = c;
//     console.log(c);
// }

// console.log("Hello");
// setTimeout(world, 5000);
// function world() {
//     for (let i = 0; i < 10; i++)
//         console.log("World");
// }
// console.log("Good morning");

// const Student = [{ Name: "Aniket", Age: 22, Department: "IT", Rollno: 21 },
//     { Name: "Akshat", Age: 21, Department: "IT", Rollno: 22 },
//     { Name: "Ayush", Age: 21, Department: "IT", Rollno: 23 },
//     { Name: "Anshika", Age: 20, Department: "IT", Rollno: 24 },
//     { Name: "Shiwani", Age: 22, Department: "IT", Rollno: 25 }
// ];
// for (let i in Student) {
//     console.log(Student[i]);
// }
// const Info = document.getElementById(Student).innerHTMLl

// const numbers = [10, 5, 20, 15, 30];
// const greaterThanFifteen = numbers.filter(num => num > 15);
// console.log(greaterThanFifteen); //Output=[20,30]


// const data = [
//     { name: 'Jhon', age: 25 },
//     { name: 'shawn', age: 30 },
//     { name: 'don', age: 15 },
// ]

// const greaterThan20 = data.filter(person => person.age > 20);
// console.log(greaterThan20);

// const add = (function() {
//     let counter = 0;
//     return function() { counter += 1; return counter }
// })();

// console.log(add());
// console.log(add());
// console.log(add());