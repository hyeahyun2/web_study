// 외부파일은 head나 body 둘 다 가능합니다.
// 문제 1. 웹문서 로딩시 1초뒤에 로고가 3초에 걸쳐서 서서히 나타나도록
const mainHeader = document.getElementById("mainHeader");
const logo = mainHeader.querySelector("h1");
window.addEventListener("load",()=>{
  setTimeout(function(){
    logo.style.transition = "3s";
    logo.style.opacity = "1";
  },1000)
})
// 문제 2. 네비게이션이 숨겨져 있도록 설정
$(".navWrap").slideUp();
// 문제 3. #navigation h2 버튼 클릭시 메뉴 펼침, 숨김 구현
$("#navigation h2").on("click",function(){
  $(".navWrap:not(:animated)").slideToggle();
})
// 문제 4. #navigation li 클릭시 해당 섹션으로 슬라이딩되도록
let state = 1;
$(".navWrap ul li").on("click",function(){
  if(state == 1){
    state = 0;
    let idName = $(this).children("a").attr("href");
    let pagePos = $(idName).offset().top;
    $("html, body").animate({scrollTop: pagePos}, 500, function(){
      state = 1;
    });
  }
})
$(".navWrap ul li a").on("click", function(e){
  e.preventDefault();
})
// 문제 5. .btnList span 클릭시 슬라이더 애니메이션 구현
let num = 0;
let slideState = 1;
let sLength = $("#sliderWrap .sliderList li").length; //3
$(".btnList span").on("click", function(){
  clearInterval(timer); // 버튼클릭시 자동슬라이딩 중지
  num = $(this).index();
  $("#sliderWrap .sliderList").animate({marginLeft:`-${100*num}%`});
  $(".btnList span").removeClass("on");
  $(this).addClass("on");
  timer = setInterval(nextMove, 4000); // 자동슬라이딩 재호출
})
// 추가. 슬라이드 드래그시 방향에 맞게 이전/다음 슬라이드로
// 다음/이전 슬라이드 함수 정의
let prevMove = ()=>{
  slideState = 0;
  num--;
  $(".btnList span").removeClass("on");
  $(".btnList span").eq(num).addClass("on");
  if(num == -1){
    num=2;
    $("#sliderWrap .sliderList")
      .prepend($(".slider3"))
      .css({marginLeft: `-100%`})
      .animate({marginLeft: 0},500,function(){
        for(let i=(sLength-1); i>0; i--){
          $(this).prepend($(".slider"+i));
        }
        $(this).css({marginLeft: `-200%`});
        slideState = 1;
      })
  }
  else {
    $("#sliderWrap .sliderList").animate({marginLeft:`-${100*num}%`}, 500, function(){
      slideState = 1;
    });
  }
}
let nextMove = ()=>{
  slideState = 0;
  num++;
  if(num == 3){
    num=0;
    $("#sliderWrap .sliderList")
      .append($(".slider1"))
      .css({marginLeft: `-100%`})
      .animate({marginLeft: `-200%`},500,function(){
        for(let i=1; i<sLength; i++){
          $(this).append($(".slider"+(i+1)));
        }
        $(this).css({marginLeft: 0});
        slideState = 1;
      })
  }
  else {
    $("#sliderWrap .sliderList").animate({marginLeft:`-${100*num}%`}, 500, function(){
      slideState = 1;
    });
  }
  $(".btnList span").removeClass("on");
  $(".btnList span").eq(num).addClass("on");
}
// 드래그시 함수 호출
let mouseDown = 0;
let mouseUp = 0;
let mouseDrage = false;
$("#sliderWrap .sliderList").on("mousedown", function(e){
  mouseDrage = true;
  mouseDown = e.pageX;
  clearInterval(timer); // 드래그중엔 자동슬라이딩 중지
})
$("#sliderWrap .sliderList").on("mouseup", function(e){
  mouseUp = e.pageX;
  // console.log("mouseUp", e.pageX);
  if(slideState == 1 ){
    if(mouseUp > mouseDown+50){ // 왼쪽으로 드래그
      prevMove();
    }
    else if(mouseUp < mouseDown-50){ // 오른쪽으로 드래그
      nextMove();
    }
  }
  mouseDrage = false;
  timer = setInterval(nextMove, 4000);// 자동슬라이딩 재호출
})
$("#sliderWrap .sliderList").on("mousemove", function(e){
  if(mouseDrage == true){ // 드래그 하는 중에
    let drageGap = mouseDown - e.pageX;
    let drageGapPer = 100*(drageGap/$(this).children().innerWidth());
    console.log($(this).children().innerWidth())
    $(this).css({marginLeft: `-${(100*num)+drageGapPer}%`})
  }
})
// 추가2. 3초마다 자동 슬라이딩
let timer = setInterval(nextMove, 4000);

// 문제 6. 코딩교육프로그램 섹션의 span 태그를 이용해서 아코디언 효과 적용
$("#contentWrap2 .program").css({transition: "0.5s"});
$("#contentWrap2 .program span").on("click", function(){
  if($(this).parent().hasClass("pro")===false){
    $("#contentWrap2 .program").removeClass("pro");
    $(this).parent().addClass("pro");
  }
  else {
    $("#contentWrap2 .program").removeClass("pro");
  }
})
// 문제 7. .contentWrap1에 도달시 컨텐츠가 나타나기
//초기화
$("#content1").children(".contentWrap1").css({opacity: 0})
$(window).on("scroll", function(){
  let pos = $("#content1").offset().top;
  let on = pos-($(this).innerHeight())/2;
  if($(window).scrollTop() >= on){
    $("#content1").children(".contentWrap1").css({opacity: 1, transition: "1s"})
  }
  else{
    $("#content1").children(".contentWrap1").css({opacity: 0})
  }
})