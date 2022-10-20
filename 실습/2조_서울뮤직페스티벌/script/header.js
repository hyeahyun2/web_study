const headerWrap = document.getElementById("headerWrap");
const header = document.getElementById("header");
const gnbView = header.querySelector(".gnbView");
const gnb = document.getElementById("gnb");

const gnbList = document.getElementById("gnbList");
const list = gnbList.querySelectorAll("li");

const LangSelect = document.getElementById("LangSelect");
const LangPTag = LangSelect.querySelector("p");
const LangList = LangSelect.querySelector("ul");
const LangItem = LangList.querySelectorAll("li");


// 네비에 마우스오버시 서브네비(1280px 이상)
if(window.innerWidth >=1280){
list.forEach(element => {
  element.addEventListener("mouseenter",()=>{
    // console.log("test");
    headerWrap.style.height = `400px`;
    headerWrap.classList.add("moustHover");
  })
  headerWrap.addEventListener("mouseleave",()=>{
    headerWrap.style.height = `120px`;
    headerWrap.classList.remove("moustHover");
  })  
});
}
// gnbView 클릭시 네비 보이게 (1280px 미만)
gnbView.addEventListener("click",(e)=>{
  e.preventDefault();
  if(parseInt(gnb.style.right)<0){
    gnb.style.right = 0;
    e.currentTarget.style.borderColor = "#000";
    LangList.style.color = "#fff";
    LangList.style.background = "#000";
    document.documentElement.style.setProperty("--gnbView-backColor", "#000");
    LangPTag.style.color = "#000";
    LangPTag.style.filter = "brightness(0)";

  }
  else {
    gnb.style.right = "-350px";
    e.currentTarget.style.borderColor = "#fff";
    LangList.style.color = "#000";
    LangList.style.background = "#fff";
    document.documentElement.style.setProperty("--gnbView-backColor", "#fff");
    LangPTag.style.color = "#fff";
    LangPTag.style.filter = "brightness(1)";
  }
})
// 메인메뉴의 + 클릭시 서브메뉴 보이게



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