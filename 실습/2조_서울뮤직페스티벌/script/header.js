const headerWrap = document.getElementById("headerWrap");
const header = document.getElementById("header");
// const scrollHeader = document.queryCommandIndeterm(".scrollClass");
window.addEventListener("scroll",()=>{
  if(window.scrollY != 0){
    headerWrap.classList.add("scrollActive");
  }
  else {
    headerWrap.classList.remove("scrollActive");
  }
})