// Destructuring (구조분해할당)

const obj = {
  name : "허범성",
  job : "강사",
  belong :"싸피"
}

const test = {
  name : "신효재",
  job : "수강생",
  belong :"싸피"
}

console.log(obj.name)
console.log(obj['name'])


// const name = obj.name
// 위와 아래 코드는 같음
const {name} = obj

const job = obj.job
const belong = obj.belong

