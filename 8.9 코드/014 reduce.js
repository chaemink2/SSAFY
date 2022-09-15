const arr = [1,2,3,4,5]

arr.reduce((acc,cur,index,array) => {
  return acc + cur
},0)

const result = arr.reduce((acc,cur) => {
  return acc + cur
},0)
console.log(result)

// const map = arr.map(e => e * e)

const map = arr.reduce((acc,cur,index,arr) => {
  const data = cur * cur
  acc.push(data)
  //[1,2]
  return acc;
},[])

console.log(map)