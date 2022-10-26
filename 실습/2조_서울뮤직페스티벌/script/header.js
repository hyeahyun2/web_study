const headerWrap = document.getElementById("headerWrap");
const header = document.getElementById("header");
const gnbView = header.querySelector(".gnbView");
const gnb = document.getElementById("gnb");

const gnbList = document.getElementById("gnbList");
const list = gnbList.querySelectorAll("li");
const snb = gnbList.querySelectorAll(".snb");

const LangSelect = document.getElementById("LangSelect");
const LangPTag = LangSelect.querySelector("p");
const LangList = LangSelect.querySelector("ul");
const LangItem = LangList.querySelectorAll("li");

// 1280px이상에서 이하로 resize됐을 때 서브메뉴 초기값 = hide 설정을 위한 변수
let state = 1; 
///// 네비에 마우스오버시 서브네비(1280px 이상) ///////////
let navHover = ()=>{
  if(window.innerWidth >=1280){
    state = 0;
    $(".snb").show();
    list.forEach(element => {
      element.addEventListener("mouseenter",()=>{
        headerWrap.classList.add("on")
      })
      headerWrap.addEventListener("mouseleave",()=>{
        headerWrap.classList.remove("on")
      })
    });
  }
  else {
    if(state == 0){
      $(".snb").hide();
      state =1;
    }
  }
}
navHover();
window.addEventListener("resize",()=>{
  // console.log(window.innerWidth);
  navHover();
})
///////////////////////////////////////////////////////////////

// gnbView 클릭시 네비 보이게 (1280px 미만)
let navClick = ()=>{
  if(parseInt(gnb.style.right)<0){
    gnb.style.right = 0;
    gnbView.style.borderColor  = "#000";
    LangList.style.color = "#fff";
    LangList.style.background = "#000";
    document.documentElement.style.setProperty("--gnbView-backColor", "#000");
    LangPTag.style.color = "#000";
    LangPTag.style.filter = "brightness(0)";
  }
  else {
    gnb.style.right = "-350px";
    gnbView.style.borderColor = "#fff";
    LangList.style.color = "#000";
    LangList.style.background = "#fff";
    document.documentElement.style.setProperty("--gnbView-backColor", "#fff");
    LangPTag.style.color = "#fff";
    LangPTag.style.filter = "brightness(1)";
  }
}
gnbView.addEventListener("click",(e)=>{
  e.preventDefault();
  navClick();
})
window.addEventListener("resize", ()=>{
  if(window.innerWidth >=1280){
    gnb.style.right = "-350px";
    gnbView.style.borderColor = "#fff";
    LangList.style.color = "#000";
    LangList.style.background = "#fff";
    document.documentElement.style.setProperty("--gnbView-backColor", "#fff");
    LangPTag.style.color = "#fff";
    LangPTag.style.filter = "brightness(1)";
  }
})
// 메인메뉴의 + 클릭시 서브메뉴 보이게
// jQuery 이용
// jQuery -> No.6 folder -> No.7 file 참조
$(document).on("click", "#gnbList li span", function(){
  $("#gnbList li span").not($(this)).next().slideUp();
  $(this).next().slideToggle();
})


// 스크롤시 네비 고정 밑 색 변화
// const scrollHeader = document.queryCommandIndeterm(".scrollClass");
window.addEventListener("scroll",()=>{
  if(window.scrollY != 0){
    headerWrap.classList.add("scrollActive");
  }
  else {
    headerWrap.classList.remove("scrollActive");
  }
})
// 언어선택에 마우스오버시 선택창
LangPTag.addEventListener("mouseenter",()=>{
  LangList.style.opacity = 1;
  LangList.style.height = `60%`;
})
LangSelect.addEventListener("mouseleave",()=>{
  LangList.style.opacity = 0;
  LangList.style.height = 0;
})