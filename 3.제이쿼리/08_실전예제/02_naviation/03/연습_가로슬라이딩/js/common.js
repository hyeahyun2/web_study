// slider에 각각 다른 이미지 삽입
// .each : 자바스크립트에서 forEach
// 해당 요소의 각각에 적용한다
$("#sliderList li").each(function(){
  let n = $(this).index() + 1;
  $(this).css({backgroundImage: `url(./images/img${n}.jpg)`})
})

// 슬라이더 구현을 위한 초기값 설정
let num = 0;
let pos;
let sLength = $("#sliderList li").length; // 4
let pos1 = -(sLength-1)*100; // -300%
let pos2 = -(sLength-2)*100; // -200%
// 움직임 제어(애니메이션 도중 클릭 금지) 변수 설정
let state = 1;

// Slider 함수
let nextSlider = ()=>{
  state = 0; // 버튼 클릭 금지
  num ++;
  // console.log(num);
  if(num == sLength){
    num = 0;
    $("#sliderList")
      .append($(".slider1"))
      .css({marginLeft: pos2+"%"})
      .animate({marginLeft: pos1+"%"}, 500, function(){
        for(let i=1; i<sLength; i++){
          $(this).append($(`.slider${i+1}`));
        }
        $(this).css({marginLeft: 0});
        state = 1; // 애니메이션 끝 난 후 버튼 클릭 가능
      })
  }
  else {
    $("#sliderList").animate({marginLeft : `-=100%`},500, function(){
      state = 1; // 애니메이션 끝 난 후 버튼 클릭 가능
    });
  }
  $("#btnNum a").removeClass("on");
  $("#btnNum a").eq(num).addClass("on");
}
let prevSlider = ()=>{
  state = 0;
  num --;
  $("#btnNum a").removeClass("on");
  $("#btnNum a").eq(num).addClass("on");
  if(num == -1){
    num = sLength-1;
    $("#sliderList")
      .prepend($(".slider"+sLength))
      .css({marginLeft: "-100%"})
      .animate({marginLeft: 0}, 500, function(){
        for(let i=(sLength-1); i>0; i--){
          $(this).prepend($('.slider'+i));
        }
        $(this).css({marginLeft: pos1+"%"});
        state = 1;
      })
  }
  else{
    $("#sliderList").animate({marginLeft : `+=100%`}, 500, function(){
      state = 1;
    });
  }
  $("#btnNum a").removeClass("on");
  $("#btnNum a").eq(num).addClass("on");
}

$("#btnNum a").on("click",function(){
  num = $(this).index();
  pos = num * (-100)
  $("#sliderList").animate({marginLeft : `${pos}%` });
  $("#btnNum a").removeClass("on");
  $(this).addClass("on");
})

let timer = setInterval(nextSlider, 3000);

$(".nextBtn").on("click", function(){
  if(state == 1) nextSlider();
})
$(".prevBtn").on("click", function(){
  if(state == 1) prevSlider();
})

// 버튼 공통 클릭시 -> 기본기능 없애기 / timer함수 끝내기
$("#btnPos a, #btnNum a").on("click", function(e){
  e.preventDefault();
  clearInterval(timer);
  timer = setInterval(nextSlider, 3000);
})



//////////////////////////////////////////////////////////////
// // 기본 변수 선언 및 초기값
// let X = 0;
// let n = 0;

// // 슬라이드 좌우버튼
// $(".prevBtn").on("click", function(e){
//   e.preventDefault();
//   if(X < 0) {
//     X += 100 ;
//     n --;
//     $("#sliderList").animate({marginLeft: `${X}%`});
//     console.log(X);
//     $("#btnNum a").removeClass("on");
//     $("#btnNum a").eq(n).addClass("on");
//   }
// })
// $(".nextBtn").on("click", function(e){
//   e.preventDefault();
//   if(X > -(100*3)) {
//     X -= 100;
//     n ++;
//     $("#sliderList").animate({marginLeft: `${X}%`});
//     console.log(X);
//     $("#btnNum a").removeClass("on");
//     $("#btnNum a").eq(n).addClass("on");
//   }
// })

// // 슬라이드 번호 버튼
// $("#btnNum a").on("click", function(e){
//   e.preventDefault();
//   let indexNum = $(this).index();
//   X = -(100*indexNum);
//   n = -indexNum;
//   console.log(X);
//   $("#sliderList").animate({marginLeft: `${X}%`});
//   $("#btnNum a").removeClass("on");
//   $("#btnNum a").eq(indexNum).addClass("on");
// })