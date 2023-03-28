const promiseObj = new Promise(resolve => {
  resolve("첫번째 일 성공")
})
const promiseObj2 = new Promise(null,reject => {
  reject("실패")
})

promiseObj.then((result) => {
  console.log(result)
})

// promiseObj2.then(null,error => {
//   console.log(error)
// })
// 12~14번 라인과 동일하게 동작
promiseObj2.catch(error => {
  console.log(error)
})


promiseObj.finally(() => {
  console.log("작업이 끝났어요")
})