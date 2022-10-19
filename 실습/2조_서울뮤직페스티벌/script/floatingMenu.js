const floatingList = document.querySelectorAll(".reservatList");
const reservation = document.getElementById("reservation");
const floatingATag = reservation.querySelectorAll("a");
let deg = 0;
window.addEventListener("wheel", (e) => {
  if (e.wheelDelta < 0) {
    // console.log(list[0]);
    deg += 10;
  }
  else deg -= 10;
  floatingATag.forEach(element => {
    element.style.transform = `rotate(${deg}deg)`;
    element.children[0].style.transform = `rotate(${-deg}deg)`;
  });
})