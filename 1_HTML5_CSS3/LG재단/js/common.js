const headerWrap = document.getElementById("headerWrap");
const gnbList = document.getElementById("gnbList");
const li = gnbList.querySelectorAll("li");
li.forEach(element => {
  element.addEventListener("mouseenter",()=>{
    // console.log("test");
    headerWrap.style.height = `390px`;
  })
  element.addEventListener("mouseleave",()=>{
    headerWrap.style.height = `92px`;
  })  
});

