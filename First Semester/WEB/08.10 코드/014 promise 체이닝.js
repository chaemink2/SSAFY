// 저희한테 0이라는 숫자를 초기값으로 가지고 있어요.
// 1회차때는 + 1
// 2회차때는 * 2
// 3회차때는 + 1
// 4회차때는 * 2

// 프로미스 생성자 함수의 기본형태
const promise = new Promise((resolve,reject) => {
  resolve(0)
})

promise.then(data => {return data + 1})
.then(data => data * 2)
.then(data => data + 1)
.then(data => data * 2)
.then(data => console.log(data))