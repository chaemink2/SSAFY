const togglebutton = document.querySelector(".toggle-button");
const body = document.querySelector("body");
const headernav = document.querySelector(".header-nav");
const bookmarkwrapper = document.querySelector(".bookmark-wrapper");
const texts = document.querySelectorAll(".text");

togglebutton.addEventListener("click", function(){
    // console.log("다크모드 버튼이 눌렸어요")
    togglebutton.textContent = "다크모드"
    togglebutton.classList.toggle("toggle-button-darkmode")
    body.classList.toggle("body-background-darkmode")
    headernav.classList.toggle("text-darkmode")
    bookmarkwrapper.classList.toggle("text-darkmode")
    // classlist의 contains 활용
for (let i = 0; i < texts.length; i++){
    texts[i].classList.toggle("text-darkmode");
}

    if(togglebutton.classList.contains("toggle-button-darkmode")){
        togglebutton.textContent = "일반모드"
    }
})


const searchinput = document.querySelector(".search-input")

searchinput.addEventListener("keyup", function(e){
    // console.log(e)
    if(e.code === "Enter"){
        // console.log("가자")


        // 빈값일때 검색어 입력하지 않았다고 얘기하기 : 유효성 검사
        if (!e.target.value){
            alert("검색어를 입력하지 않았습니다!")
            return;
        }

        // https://www.google.com/search?q=내용
        const target = "https://www.google.com/search?q="
        // 이동하는 2가ㅣ 방법
        // 그냥 이동
        // location.href = "https://www.google.com/search?q=" + e.target.value
        // 새탭 이동
        window.open(target + e.target.value)
    }
})