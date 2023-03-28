const arr = [-5,3,4,2,-7,-2,7];

const plusArray = [];
const minusArray = new Array();

arr.forEach(element => {
  if(element > 0) plusArray.push(element)
  else minusArray.push(element)
})


console.log(plusArray)
console.log(minusArray)

// 배열 고차함수중에 "첫번쨰" -> 나중가면 안써요