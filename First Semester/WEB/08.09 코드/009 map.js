const arr = [1,2,3,4,5] //*2 새배열을 만들어라
// const newArr = []
// 배열 고차함수의 기본형태
// arr.배열고차함수명((element,index,array) => {
//   return ~~~
// })
// const a = arr.forEach(element => console.log(element))
// const b = arr.map(element => console.log(element))
// console.log(a)
// console.log(b)

// forEach는 항상반환값이 "undefined"
// map은 반환값이 있음

// arr.forEach(element => newArr.push(element*2))
// console.log(newArr)
const newArr = arr.map(element => element*2)
console.log(newArr)