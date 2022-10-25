// slider에 각각 다른 이미지 삽입
// .each : 자바스크립트에서 forEach
// 해당 요소의 각각에 적용한다
$("#sliderList li").each(function(){
  let n = $(this).index() + 1;
  $(this).css({backgroundImage: `url(./images/img${n}.jpg)`})
})

// 슬라이더 구현을 위한 초기값 설정
let sLength = $("#sliderList li").length;
let num; // 슬라이드 번호가 될 변수 선언
let classNum = 0; // 번호버튼의 인덱스 번호
// 움직임 제어(애니메이션 도중 클릭 금지) 변수 설정
let state = 1;

// Slider 함수(좌우)
let nextSlider = ()=>{
  state = 0;
  classNum ++;
  if(classNum == sLength) classNum = 0; // 0 <= classNum <= sLength-1
  $("#btnNum a").removeClass("on");
  $("#btnNum a").eq(classNum).addClass("on");

  $("#sliderList li").eq(1)
    .addClass("active")
    .css({opacity: 0})
    .animate({opacity: 1}, 600, function(){
      $("#sliderList").append($("#sliderList li:eq(0)"));
      $("#sliderList li:last").removeClass("active");
      state = 1;
    })
}
let prevSlider = ()=>{
  state = 0;
  classNum --;
  if(classNum == -1) classNum = sLength-1; // 0 <= classNum <= sLength-1
  $("#btnNum a").removeClass("on");
  $("#btnNum a").eq(classNum).addClass("on");

  $("#sliderList li:last")
    .addClass("active")
    .css({opacity: 0})
    .animate({opacity: 1}, 600, function(){
      $("#sliderList").prepend($(this));
      $("#sliderList li").eq(1).removeClass("active");
      state = 1;
    })
}

// 슬라이드번호버튼
$("#btnNum a").on("click",function(){
  if(state == 1){
    state = 0;
    $("#btnNum a").removeClass("on");
    $(this).addClass("on");
    classNum = $(this).index(); // 클릭시 인덱스번호 저장
    num = $(this).index() + 1; // 클릭한 번호의 인덱스번호 + 1
    if($(".slider"+num).hasClass("active")) { // 같은 번호를 연속으로 누르면
      state = 1;
      return; // 함수 빠져나오게
    }
    $(".slider"+num)
      .addClass("active")
      .css({opacity: 0})
      .animate({opacity: 1}, 600, function(){
        $("#sliderList li").not($(this)).removeClass("active");
        for(let i=1; i<sLength; i++){
          if(num == sLength) num = 0; // 번호 4일때 -> 0 -> 번호로테이션
          num++; // 현재 선택된 슬라이드의 다음번호부터 ~
          $("#sliderList").append($(".slider"+num));
        }
        state = 1;
      })
  }
})

let timer = setInterval(nextSlider, 3000);

// 좌우버튼
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
