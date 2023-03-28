const chicken = {
  type: "양념",
  drumsticks : 2,
  wing:2,
}

// const type = chicken.type
const { type, ...another} = chicken
console.log(type)
// type을 제외한 새로운 객체가 생긴다
console.log(another)


const arr = [0,1,2,3,4,5]

// const zero = arr[0]
const [zero,one, ...another1 ] = arr

console.log(zero)
console.log(one)
console.log(another1)