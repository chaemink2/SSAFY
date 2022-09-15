function hello(value){
  console.log(value)
}

const hello2 = value => console.log(value)

// [3,5,4,2].array.forEach(element => {
  
// });

const arr = [3,5,4,2]

// console.log([3,5,4,2].forEach(hello))
// console.log([3,5,4,2].forEach(hello2))
console.log(arr.forEach(hello2))
console.log(arr.forEach(hello2))
// 3
// 5
// 4
// 2

// 총 3개까지 받을 수 있어요
arr.forEach((element, index, array) => {
  console.log(element, index, array);
})


// const a = () => { console.log("a")}

// addEventListener('click', a)

