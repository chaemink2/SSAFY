// 함수를 두개 만들어라. 함수명은 a 다른 함수명은 b
// console.log("hello wolrd")


// 1번 방법
function a(str){
  return str
}

a("abc")

// 2번 방법

const b = function (str){ //익명함수 annoymous
  return str
}

b("abc")

// 함수를 만드는 3번째 방법 화살표 함수 function -> =>
// 화살표함수에서만 매개변수가 1개이면, () 삭제 가능

const c = str => {
  // 함수몸체 안에 표현식이 1개 밖에 없으면 return을 생략할 수 있다
  console.log(str)
}

const d = str => str 
