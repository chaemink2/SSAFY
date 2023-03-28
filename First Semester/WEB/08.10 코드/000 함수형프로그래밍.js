// 매개변수로 숫자하나(input)을 받아서, 받은 input에 +1을 하여 리턴하는
// 함수를 만들어보시오 (화살표 함수로)

const increment = input => input + 1
const decrement = input => input - 1
const squared = input => input * input
const half = input => input/2

const arr = [increment,decrement,increment,increment,decrement,squared,squared,half,increment]
arr.reduce((acc,cur) => {
  cur(acc)
  return acc;
},1)