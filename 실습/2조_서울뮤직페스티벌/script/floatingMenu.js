const floatingList = document.querySelectorAll(".reservatList");
const reservation = document.getElementById("reservation");
const floatingATag = reservation.querySelectorAll("a");

const topBtn = document.querySelector(".topMove > a");
console.log(topBtn);
topBtn.addEventListener("click",(e)=>{
  e.preventDefault();
  // 스크롤 스무스하게 올라가게
  window.scrollTo({top: 0, behavior: 'smooth'});
})

let deg = 0;
let Y = window.scrollY;
window.addEventListener("wheel", (e) => {
  // 현재 문서의 총 길이
  let lastY = document.body.scrollHeight - window.innerHeight;
  console.log(Y);
  console.log(lastY);
  console.log(window.scrollY);
  if(window.scrollY != 0 && window.scrollY < lastY){
    if (e.wheelDelta < 0) {
      // console.log(list[0]);
      deg += 10;
    }
    else deg -= 10;
    floatingATag.forEach(element => {
      element.style.transform = `rotate(${deg}deg)`;
      element.style.transition = "0.2s";
      element.children[0].style.transform = `rotate(${-deg}deg)`;
      element.children[0].style.transition = "0.2s";
    });
    Y = window.scrollY;
  }
})
