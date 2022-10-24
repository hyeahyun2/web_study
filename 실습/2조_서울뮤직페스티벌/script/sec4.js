const sect4 = window.document.getElementById('programLink');
const wrap = sect4.querySelector('.wrap');
const wrapInner = wrap.querySelector('.wrapInner');
const anchor = wrapInner.querySelectorAll('a');

// wrapInner.prepend(anchor[anchor.length-1])
const anClone1 = anchor[0].cloneNode(true);
const anClone2 = anchor[2].cloneNode(true);
// console.log(anClone1);
wrapInner.append(anClone1);
wrapInner.prepend(anClone2);

// 변수 선언
const Newanchor = wrapInner.querySelectorAll('a');
let transX = 0; // translateX
let NewA_index = 1; // anchor index number
// 로딩 직후 값(초기화)
wrapInner.style.transform = `translateX(${transX}vw)`;
Newanchor[NewA_index].classList.add("mainSlide");

// 슬라이드 로테이션? 스크립트
let next = ()=>{
  transX += 20;
  Newanchor[NewA_index].classList.remove("mainSlide");
  if(NewA_index >= 3) NewA_index = 0;
  NewA_index++;
  console.log(transX);
  wrapInner.style.transform = `translateX(-${transX}vw)`;
  Newanchor[NewA_index].classList.add("mainSlide");
  if(transX >= 40) transX = -20;
}
setInterval(next, 2000);
