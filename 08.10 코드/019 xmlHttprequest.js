
function getData(){
  const httprequest = new XMLHttpRequest()
// 생성

// 서버와 통신하기 위한 과정
// 1 생성
// 2 열기
// 3 보내기


// 열기(매개변수 HTTP METHOD, URL)

httprequest.onreadystatechange = function(){
  console.log(httprequest)
  console.log(httprequest.readyState)
  if(httprequest.readyState === httprequest.DONE){
    console.log(httprequest.response)
  } else {
    console.log(httprequest.responseText)
  }
}

httprequest.open("GET", "https://jsonplaceholder.typicode.com/todos/1")
// httprequest.send()



// readyState 단계
// 0 request가 초기화되지 않은 단계
// 1 서버와 연결이 성사된 loading 단계
// 2 서버가 request를 받은, loaded 단계
// 3 reqeust를 처리하는 중인 interactive 단계
// 4 완료 단계(reqeust에 대한 요청이 끝났고, 응답을 준비한다)
}

const data = getData()