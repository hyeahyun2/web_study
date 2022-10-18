const list = document.querySelectorAll(".reservatList");
let deg = 0;
window.addEventListener("wheel", (e) => {
  if (e.wheelDelta < 0) {
    console.log(list[0]);
    deg += 30;
  }
  else deg -= 30;
  list[0].style.transform = `rotate(${deg}deg)`;
  list[0].children[0].style.transform = `rotate(${-deg}deg)`;
})