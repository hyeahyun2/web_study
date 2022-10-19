const photo = document.getElementById("photo");
const ul = document.querySelector("#photoList > ul");
const list = ul.querySelectorAll("li");
const btn = document.querySelectorAll("#btnWrap > a");
let listLenth = list.length-2; // 좌우클릭에 사용
let liWidth = list[0].clientWidth; // list의 너비값(=120px) 저장
// console.log(listLenth, liWidth);
// 각 리스트의 썸네일을 클릭시 큰 이미지가 바뀌도록
let changeImg = (n)=>{
  let link = n.currentTarget.getAttribute("href");
  // console.log(link);
  photo.setAttribute("src",link);
}
list.forEach( Element => {
  Element.children[0].addEventListener("click",(n)=>{
    n.preventDefault();
    changeImg(n);
  })
});

// 좌우버튼을 누를 경우 썸네일리스트가 한칸씩 움직이도록
let margin = 0;
let n = 1; // 클릭 횟수 (방법2)
let move = (i)=>{
  if(i==0) {
    if(n <= 1) return; // (방법2)
    n--; // (방법2)
    // if(margin <= 0) return; // (방법1)
    margin -= liWidth;
  }
  else {
    if(n >= listLenth) return; // (방법2)
    n++; // (방법2)
    // if(margin >= 600) return; // (방법1)
    margin += liWidth;
  }
  ul.style.marginLeft = `${-margin}px`;
  console.log(n);
}
btn.forEach((Element,i) => { 
  Element.addEventListener("click",(e)=>{
    e.preventDefault();
    move(i);
  })
});
