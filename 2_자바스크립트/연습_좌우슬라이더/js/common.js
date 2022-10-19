const sWrap = document.getElementById("sliderWrap");
const sList = document.getElementById("sliderList");
const list = sList.querySelectorAll("li");
const btn = document.querySelectorAll("#btnList button");
// console.log(sWrap, sList, list, btn);
const listCopy1 = list[0].cloneNode(true);
const listCopy2 = list[list.length-1].cloneNode(true);
sList.prepend(listCopy2);
sList.append(listCopy1);
// let pos = sList.clientWidth; // sList의 너비
let listNum = list.length + 2;
// console.log(pos);
sList.style.width = `${listNum*100}%`;
sList.style.transform = `translateX(-20%)`;

let n = 20;
let state = 1;

let Slider = (i)=>{
  if (i == 1) n += 20;
  else n -= 20;

  sList.style.transition = "1s";
  sList.style.transform = `translateX(-${n}%)`;
  console.log(n);
  setTimeout(() => {
    state = 1;
    if (n >= 80) {
      sList.style.transition = "0s";
      n = 20;
      sList.style.transform = `translateX(-${n}%)`;
    }
    else if (n <= 0) {
      sList.style.transition = "0s";
      n = 60
      sList.style.transform = `translateX(-${n}%)`;
    }
  }, 1000)
}

// let timer = setInterval(Slider, 3000); // 3초간격으로 슬라이드 넘어가게
// clearInterval(timer)

btn.forEach((element, i) => {
  element.addEventListener("click",()=>{
    if(state == 1){
      state = 0;
      Slider(i);
    }
  })
});