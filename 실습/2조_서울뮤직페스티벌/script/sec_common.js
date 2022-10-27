$(window).on("scroll", function () {
  $("main section").each(function () {
    let pos = $(this).offset().top;
    let on = pos - ($(this).innerHeight())/1.5;
    if ($(window).scrollTop() >= on) {
      $(this).children().css({ transform: `translate(50%, 50%)`, opacity: 1 })
    }
    else {
      $(this).children().css({ transform: `translate(50%, 150%)`, opacity: 0})
    }
  })
})