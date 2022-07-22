// 토글버튼 클릭시에
// 이벤트 발생

const toggleButton = document.querySelector(".toggle-button")
const body = document.querySelector("body")
const headerNav = document.querySelector(".header-nav")
const bookmarkWrapper = document.querySelector("bookmark-wrapper")
const texts = document.querySelectorAll(".text");

toggleButton.addEventListener('click', function(){
  toggleButton.textContent = "다크모드"

  toggleButton.classList.toggle("toggle-button-darkmode")
  body.classList.toggle("body-background-darkmode")

  headerNav.classList.toggle("text-darkmode")
  // classList의 contains

  // bookmarkWrapper.classList.toggle("text-darkmode");
  for(let i =0; i < texts.length; i++){
    texts[i].classList.toggle('text-darkmode')
  }

  if(toggleButton.classList.contains("toggle-button-darkmode")){
    toggleButton.textContent = "일반 모드"
  }
})

// 구글 이동

const searchInput = document.querySelector(".search-input")

searchInput.addEventListener('keyup', function(e){
  // console.log(e);
  if(e.code === "Enter"){
    console.log("가즈아")

    // 유효성 검사
    // 빈값인 경우 검색어를 입력하지 않았다고 경고
    // if(e.target.value === ""){

    // }
    // 부정의미
    if(!e.target.value){
      alert("검색어를 입력하지 않았습니다.")
      return;
    }

    // https://www.google.co.kr/search?q=내용
    const target = "https://www.google.co.kr/search?q="
    
    // 이동하는 두가지 방법
    
    // 1.이동
    // location.href
    // location.href = "https://www.google.co.kr/search?q=" + e.target.value

    // 2.새탭 이동
    // window.open
    window.open(target + e.target.value)
  }
})