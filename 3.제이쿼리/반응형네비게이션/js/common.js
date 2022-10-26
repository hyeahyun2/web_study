////////// pc menu ////////////
$(".item").on("mouseenter", function(){
  // $("#gnbList").stop().animate({height: 200});
  $("#gnbList").addClass("on");
})
$("#gnbList").on("mouseleave", function(){
  // $(this).stop().animate({height: 40});
  $("#gnbList").removeClass("on");
})
// console.log($("#gnb").css("right"));
// let resizing = ()=>{
//   if($(window).innerWidth()>=1000){
//     $(".snb").css({display: "block"});
//     $("#gnb").css({right: -200});
//     $(".menuView").hide();
//   }
//   else {
//     if(parseInt($("#gnb").css("right"))<0){
//       $(".menuView").show();
//     }
//   }
// }
let resizing = ()=>{
  if($(window).innerWidth()>=1000){
    $(".snb").css({display: "block"});
    $("#gnb").removeClass("on");
    $(".menuView").hide();
    $(".item").removeClass("mobile");
  }
  else {
    $(".menuView").show();
    if($("#gnb").hasClass("on")){
      $(".menuView").hide();
    }
  }
}

$(window).on("resize", function(){
  resizing();
})

////////// mobile menu ////////////
$(".menuView").on("click", function(){
  $("#gnb").addClass("on");
  $(".item").addClass("mobile");
  $(".snb").hide();
  $(this).hide();
})

$(".menuClose").on("click",function(){
  $("#gnb").removeClass("on");
  $(".item").removeClass("mobile");
  $(".menuView").show();
})
$(document).on('click', '.mobile', function() {
  $(".snb").not($(this).children(".snb")).slideUp();
  $(this).children('.snb').slideToggle();
})

// 베너(aside) 스크롤따라 이동 (애니메이션 있게!)
$(window).on("scroll", function(){
  // 브라우저창의 scroll 위치
  // scrollTop / scrollLeft 두가지 있음
  let winPos = $(window).scrollTop();
  $("#banner").stop().animate({top: winPos+200 });
  // stop() : 이벤트가 연속으로 이뤄질 때 가장 마지막 값의 이벤트만 적용
  $("#gnb").css({position: "fixed"});
  $("#header").css({position: "fixed"});
})

// gnb 주메뉴 클릭시 해당섹션으로 슬라이딩
$(".item > a").on("click", function(e){
  e.preventDefault();
  let idName = $(this).attr("href");
  console.log(idName);
  // 해당태그의 top 포지션(위치) 변수에 저장
  // 브라우저에서의 위치!!
  // .position() : 해당태그의 padding + margin 포함
  // let secPos = $("#content1").position().top;
  // .offset() : 그냥 쌩 태그의 위치!! (활용도 높음!)
  let secPos = $(idName).offset().top;
  console.log(secPos);
  // scrollTop : jQuery의 명령어?들을 animate의 속성으로 활용 가능
  $("html, body").animate({scrollTop: secPos-70});
})