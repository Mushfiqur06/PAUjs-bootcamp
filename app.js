// // == --> !=
// //===
// //!=
// //!==
// console.log(typeof a)
// console.log(typeof b)
// console.log(a == b)

//+=  a = a + b
// %

//
// var result=  a === 5 ? 'YEs': 'No'
// result
// if(a % 2 === 0){
//     console.log(a)
// }else{
//     console.log('hellop')
// }
// console.log()
// console.log(a)

var a = 9;
var b = 3;
// console.log(a !== b)
// var isCurrent = false
// if(isCurrent){
//     console.log('Ha ami class korbo')
// }else{
//     console.log('na ami class korbo na ')
//

// if(476574564756){
//     console.log('Truthy Value')
// }else{
//     console.log('Falsy Value')
// }

// for(var i = 0; i < 5; i++){
//     console.log(i)
// }
// var i = 15;

// switch (i) {
// 	case 10:
// 		console.log('10');
// 		break;
// 	case 20:
// 		console.log('20');
// 	default:
// 		console.log('Default');
// }

// var name = 'Tuni';

// if(name === 'Niloy'){
//     console.log('Name: ' + name)
// }else if(name === 'Tuni'){
//     console.log('Tuni' + name)
// }else{
//     console.log('slfndsjgsdjg')
// }

// switch(name){
//     case 'Niloy':
//         console.log('Niloy')
//         break;
//     case 'Tuni':
//         console.log('Tuni')
//         break;
//     default:
//         console.log('Default')
// }

var arr = ['String', 12, undefined, null, { name: 'Niloy' }];
// arr.push('Orange');
// console.log(arr)
// arr.pop()
// console.log(arr)
// arr.shift()
// console.log(arr)
// arr.unshift('Primeasia')
// console.log(arr)

for (var i = 0; i < arr.length; i++) {
	console.log('Index: ' + i + ' Value ' + arr[i]);
}
var newArr = [];
arr.forEach(function (item, index) {
	newArr.push(item);
});
console.log(newArr);
