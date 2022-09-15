const arr = [1,2,3,4,5];
// const newArr = [];
// 3보다 큰애들만 다른 배열에 할당
// arr.forEach(e => newArr.push(e > 3))

// arr.filter((element,index,array) => {
  // return 어떤 작업
// })

arr.filter(e => e > 3)
arr.filter(e => e % 2 === 1)
