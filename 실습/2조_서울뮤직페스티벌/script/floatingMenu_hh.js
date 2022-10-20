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
console.log(Y);
window.addEventListener("wheel", (e) => {
  if(window.scrollY!=Y){
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
