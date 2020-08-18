// // // == --> !=
// // //===
// // //!=
// // //!==
// // console.log(typeof a)
// // console.log(typeof b)
// // console.log(a == b)

// //+=  a = a + b
// // %

// //
// // var result=  a === 5 ? 'YEs': 'No'
// // result
// // if(a % 2 === 0){
// //     console.log(a)
// // }else{
// //     console.log('hellop')
// // }
// // console.log()
// // console.log(a)

// var a = 9;
// var b = 3;
// // console.log(a !== b)
// // var isCurrent = false
// // if(isCurrent){
// //     console.log('Ha ami class korbo')
// // }else{
// //     console.log('na ami class korbo na ')
// //

// // if(476574564756){
// //     console.log('Truthy Value')
// // }else{
// //     console.log('Falsy Value')
// // }

// // for(var i = 0; i < 5; i++){
// //     console.log(i)
// // }
// // var i = 15;

// // switch (i) {
// // 	case 10:
// // 		console.log('10');
// // 		break;
// // 	case 20:
// // 		console.log('20');
// // 	default:
// // 		console.log('Default');
// // }

// // var name = 'Tuni';

// // if(name === 'Niloy'){
// //     console.log('Name: ' + name)
// // }else if(name === 'Tuni'){
// //     console.log('Tuni' + name)
// // }else{
// //     console.log('slfndsjgsdjg')
// // }

// // switch(name){
// //     case 'Niloy':
// //         console.log('Niloy')
// //         break;
// //     case 'Tuni':
// //         console.log('Tuni')
// //         break;
// //     default:
// //         console.log('Default')
// // }

// var arr = ['String', 12, undefined, null, { name: 'Niloy' }];
// // arr.push('Orange');
// // console.log(arr)
// // arr.pop()
// // console.log(arr)
// // arr.shift()
// // console.log(arr)
// // arr.unshift('Primeasia')
// // console.log(arr)

// for (var i = 0; i < arr.length; i++) {
// 	console.log('Index: ' + i + ' Value ' + arr[i]);
// }
// var newArr = [];
// arr.forEach(function (item, index) {
// 	newArr.push(item);
// });
// console.log(newArr);

//Function Name --> must
//Input --> optional
//Body --> Must
//Return --> optional undefiend

//FistClass Function
//Pure Function

//Function Expression

// var functionName = function (str) {
// 	var some = str.split('');
// 	return some;
// };

// //Function Declartion
// function hello() {
// 	console.log('heelo');
// }
// hello();

// var result = functionName;
// console.log(result('Niloy'));

//stored in variable -- true
//stored in object -- true
//stored in array

//passesd as an argument to a function

// var fun = function (num) {
// 	console.log(num);
// };
// var obj = {
// 	anotherSum: function(){
// 		console.log('Helloo function from object')
// 	}
// }
// console.log(obj.anotherSum())
// function arrFun(callback) {
// 	console.log(callback('24'));
// }
// arrFun(fun)
// var arr = [2, 'Hello', undefined, arrFun];
// console.log(arr[3]());

//returned from a function
// (function func() {
//  	function some(){
// 		console.log('Inner')
// 		function inner(){
// 			console.log('inner Inner')
// 		}
// 		inner()

// 	}
// 	some()

// })()

//Give the same input, will always return the same output
//No side Effect
//No share State

// var obj = {
// 	num: 100,
// };
// var a = 10;
// function output(value) {
// 	var newValue = Object.assign({},value);
// 	console.log(newValue.num = 200);
// }
// a;
// output(obj);
// console.log(obj.num);

//fog gof

// var name = 'Mushfiqur Niloy';
// function callMe(name, callBack) {
// 	console.log('My name is ' + name);
// 	console.log('Length ' + name.length);
// 	callBack(name);

// 	console.log('djkfnksjdbfdksb');
// }

// callMe(name, function (name) {
// 	var newName = name.split('');
// 	console.log(newName);
// 	console.log(name.split('').join('-'));
// });
// callMe(name, function (name) {
// 	console.log(name.toUpperCase());
// });
// callMe(name, function (name) {
// 	console.log(name.toLowerCase());
// });
// callMe(name, function (name) {
// 	console.log(name.split('').join('*'));
// });

//NILOY
// niloy
// n*i*l*y

// function outer(){
// 	function inner(){
// 		console.log('Inner')
// 	}

// 	inner()
// }

// outer()

// var arr = [23, 45, 12, 56];

// arr.forEach(function (data) {
// 	console.log(data - 2);
// });
// function myForeach(arr, callBack) {
// 	for (var i = 0; i < arr.length; i++) {
// 		callBack(arr[i], arr, i);
// 	}
// }

// myForeach(arr, function (data, fullArr, index) {
// 	console.log(index);
// });

// myForeach(arr, function (data) {
// 	console.log(data - 2);
// });
// arr.map(function (data) {
// 	console.log(data + 2);
// });

// function myMap(arr, callBack) {
// 	for (var i = 0; i < arr.length; i++) {
// 		callBack(arr[i], );
// 	}
// }
// myMap(arr, function (data) {
// 	console.log(data + 2);
// });

// var result = arr.map(function (data) {
// 	return data * 2;
// });
// console.log(result);

// var result = arr.filter(function (data) {
// 	if (data > 50) {
// 		return data;
// 	}
// });

// console.log(result);

// function myFilter(arr, callBack) {
// 	var newArr = [];
// 	for (var i = 0; i < arr.length; i++) {
// 		if (callBack(arr[i])) {
// 			newArr.push(arr[i]);
// 		}
// 	}
// 	return newArr;
// }

// var result = myFilter(arr, function (data) {
// 	return data > 40;
// });
// console.log(result);

// var arr = [1, 2, 3, 4, 5, 6];

// var result = arr.reduce(function (prevValue, nextValue) {
// 	return prevValue + nextValue;
// });
// console.log(result);

// function myReduce(arr, callBack) {
// 	var result = undefined;

// 	for (var i = 0; i < arr.length; i++) {
// 		if (result == undefined) {
// 			result = arr[i];
// 		} else {
// 			result = callBack(result, arr[i]);
// 		}
// 	}
// 	return result;
// }

// var anotherResult = myReduce(arr, function (prevValue, currentValue) {
// 	return prevValue + currentValue;
// });

// console.log(anotherResult);

// var arr = [1, 2, 3];

// for (var i = 0; i < arr.length; i++) {
// 	console.log(i);
// }

// var obj = {
//   name: "Niloy",
//   phone: "01788689889",
//   city: ["Dhaka", "Chittagong", "Comilla", "Chandpur"],
//   anotherObj: {
//     className: "Javascript",
//     classDate: "Today",
//     classTopic: "Object & OOP",
//     name: "Mushfiqur",

//     anotherObj2: {},
//     country: ["Bangladesh", "Finland", "India"],
//     getInfo: function () {
//       console.log(obj.anotherObj.name);
//     },
//   },

//   getName: function () {
//     console.log(obj.phone);
//   },
// };
// console.log(obj.anotherObj.getInfo());
// console.log(obj.anotherObj.country[0]);
// obj.getName();

// console.log(obj.city[3]);
// for (item in obj) {
//   console.log(item);
// }

// var obj1 = new Object();
// console.log(typeof obj1);

// console.log(obj.name);
// console.log(obj["name"]);

// function obj2(name, phone, age) {
//   var newObj = {};
//   newObj.name = name;
//   newObj.phone = phone;
//   newObj.age = age;

//   return newObj;
// }

// var result = obj2("Niloy", "017886898889", 25);
// console.log(result.age);

//Valid
//Card ID
//Name
//Card Type
//Bank Name

// var card = {
//   valid: "12-20-2020 -- 12-20-2021",
//   cardID: "3856784568765",
//   name: "Customer Name",
//   cardType: "Debit Card",
//   bankName: "Brack Bank",
// };

// var card2 = {
//   valid: "12-20-2020 -- 12-20-2021",
//   cardID: "3856784568765",
//   name: "Customer Name",
//   cardType: "Credit Card",
//   bankName: "Brack Bank",
// };
// var card3 = {
//   valid: "12-20-2020 -- 12-20-2021",
//   cardID: "3856784568765",
//   name: "Customer Name",
//   cardType: "Master Card",
//   bankName: "Brack Bank",
// };

function Card(name, bankName, cardID, valid, cardType) {
  this.name = name;
  this.bankName = bankName;
  this.cardID = cardID;
  this.valid = valid;
  this.cardType = cardType;
}
Card.prototype.getInfo = function () {
  console.log(this.name);
  console.log(this.bankName);
  console.log(this.cardType);
};
console.log(typeof Card);

const debitCard = new Card(
  "Customer Name",
  "Brack Bank",
  "3765456454",
  "12-12-2020",
  "Debit Card"
);
console.log(debitCard.cardType);
const creditCard = new Card(
  "Customer Name",
  "Brack Bank",
  "3765456454",
  "12-12-2020",
  "Credit Card"
);
console.log(creditCard.cardType);
console.log(debitCard.getInfo());
console.log(creditCard.getInfo());

class Person {
  constructor(name, email, phone, address, age, professonal) {
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.address = address;
    this.age = age;
    this.professonal = professonal;
  }
}

const person = new Person(
  "Niloy",
  "mushfiqur06@gmail.com",
  "01788689889",
  "Dhaka",
  24,
  "student"
);
console.log(person.professonal);

class Teacher extends Person {
  constructor(name, email, job) {
    super(name, email);
    this.job = job;
  }
}
const teacher = new Teacher(
  "Mushfiqur Niloy",
  "mushfiqur06@gmail.com",
  "Software Engineer"
);
console.log(teacher.job);
