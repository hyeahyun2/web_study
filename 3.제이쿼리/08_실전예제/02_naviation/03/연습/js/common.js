// .each : 자바스크립트에서 forEach
// 해당 요소의 각각에 적용한다
$("#sliderList li").each(function(){
  // console.log($(this).attr("class"));
  let n = $(this).index() + 1;
  $(this).css({backgroundImage: `url(./images/img${n}.jpg)`})
})