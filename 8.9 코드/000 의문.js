const arr = [1,2,3]
console.log(arr.length)

// arr[0] -> "배열" 접근이 쉽고, 빠르다 , 삽입, 삭제

const obj = {
  name : "heo", //프로퍼티
  //메서드 객체에서, 프로퍼티의 값(벨류) :함수
  test : function(){
    console.log("hi")
  }
}
obj.name

// 유사배열객체

const obj1 = {
  0 : 1,
  1 : 2,
  2 : 3,
  length : 3
}

// 자바스크립트 배열이 -> 객체
// 배열로 db를 구현 또는 읽어와도 괜찮은 것 아닌가?