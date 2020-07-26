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

var name = 'Mushfiqur Niloy';
function callMe(name, callBack) {
	console.log('My name is ' + name);
	console.log('Length ' + name.length);
	callBack(name);

	console.log('djkfnksjdbfdksb');
}

callMe(name, function (name) {
	var newName = name.split('');
	console.log(newName);
	console.log(name.split('').join('-'));
});
callMe(name, function (name) {
	console.log(name.toUpperCase());
});
callMe(name, function (name) {
	console.log(name.toLowerCase());
});
callMe(name, function (name) {
	console.log(name.split('').join('*'));
});

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
