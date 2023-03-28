const arr = ["피카츄", "라이츄", "파이리", "꼬부기", "피카츄", "파이리"]

// const obj = {피카츄:2 라이츄:1}
// obj.피카츄

//양식
// arr.reduce((acc,cur,index,array) => {
//   return acc
// },"초기값")

const result = arr.reduce((acc,cur) => {

  // {피카츄:1,라이츄:1,파이리:1,꼬부기:1}.피카츄 :
  // {피카츄:2,라이츄:1,파이리:1,꼬부기:1}.피카츄 :


  if(acc[cur]){
    // {}[cur]
    // {}.cur
    // {}.피카츄
    acc[cur] = acc[cur] + 1;
  } else {
    acc[cur] = 1;
    // {}.피카츄 = 1
  }

  // {피카츄:1}

  return acc
},{})

console.log(result)