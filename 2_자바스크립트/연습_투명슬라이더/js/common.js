const sWrap = document.getElementById("sliderWrap");
const sList = document.getElementById("sliderList");
const list = sList.querySelectorAll("li");
const btn = document.querySelectorAll("#btnList button");
console.log(sWrap, sList, list, btn);

// 나머지 요소들 안보이게0
list[1].style.opacity = 0;
list[2].style.opacity = 0;
sList.append(list[0]); // list[0]를 제일 위로

// 클릭시 이전/다음 슬라이드로 페이드 인아웃
let moveNext = ()=>{
  const list = sList.querySelectorAll("li");
  sList.append(list[0]);
  setTimeout(()=>{
    list[0].style.opacity = 1;
    list[list.length-1].style.opacity = 0;
  },1) // 시간은 양수가 드가면 뭐든 ㅇㅋ
  // 페이드인아웃 중일 때 중복사용 안되도록
  setTimeout(()=>{state=1},1000);
}
let movePrev = ()=>{
  const list = sList.querySelectorAll("li");
  sList.prepend(list[list.length-1]);
  setTimeout(()=>{
    list[1].style.opacity = 1;
    list[list.length-1].style.opacity = 0;
  },1);
  setTimeout(()=>{state=1},1000);
}

// 3초단위로 자동으로 페이드인아웃
// 지정시간은 transition시간보다 길어야됨
// (애니메이션 시간도 포함이기 때문에!)
let timer = setInterval(moveNext,3000);

// 중복 페이드인아웃을 막기 위한 변수 추가
let state = 1;
btn[1].addEventListener("click",()=>{
  if(state == 1){
    clearInterval(timer);
    state = 0
    moveNext();
    timer = setInterval(moveNext,3000);
  }
})
btn[0].addEventListener("click",()=>{
  if(state==1){
    clearInterval(timer);
    state = 0;
    movePrev();
    timer = setInterval(moveNext,3000);
  }
})