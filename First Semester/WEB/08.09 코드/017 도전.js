const arr = [1,2,3,4,5,6,7,8,9,10]

const result = arr.filter(e => e % 2 === 0).map(e => e*10)
console.log(result)



const result1 = arr.reduce((acc,cur) => {
  if(cur % 2 ===0){
    acc.push(cur*10)
  }
  return acc;
},[])
console.log(result1)