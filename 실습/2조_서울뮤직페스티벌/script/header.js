const headerWrap = document.getElementById("headerWrap");
const header = document.getElementById("header");

const gnbList = document.getElementById("gnbList");
const list = gnbList.querySelectorAll("li");

const LangSelect = document.getElementById("LangSelect");
const LangPTag = LangSelect.querySelector("p");
const LangList = LangSelect.querySelector("ul");
const LangItem = LangList.querySelectorAll("li");


// 네비에 마우스오버시 서브네비
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