
let nextSlider1 = ()=>{
    $('.contentImg')
        .animate({marginLeft:-80+"%"}, 1000, function(){
            $(this).append($('.contentImg img:first')).css({marginLeft:0});
    })
}
let prevSlider1 = ()=>{
    $('.contentImg')
        .prepend($('.contentImg img:last'))
        .css({marginLeft:-80+"%"})
        .animate({marginLeft:0},  1000);
}
$('.btnWrap2 .next').click(nextSlider1)
$('.btnWrap2 .prev').click(prevSlider1)
let nextSlider2 = ()=>{
    $('.programs_Content > li:first').animate({opacity:0}) 
    $('.programs_Content > li:eq(1)').animate({opacity:1}, 1000,
        function(){
        $('.programs_Content').append($('.programs_Content > li:first'))
    })
}
let prevSlider2 = ()=>{
    $('.programs_Content > li:first').animate({opacity:0}) 
    $('.programs_Content > li:last').animate({opacity:1}, 1000,
        function(){
        $('.programs_Content').prepend($('.programs_Content > li:last'))
    })
}
$('.btnWrap2 .next').click(nextSlider2);
$('.btnWrap2 .prev').click(prevSlider2);

$(window).on('scroll', function(){
        let pos = $('#schedule').offset().top;
        if(window.scrollY>=pos-650){
            $('#schedule div').css({opacity:1})
        }
        else {
            $('#schedule div').not('.wave2').css({opacity:0})
        }
    
})
$(window).on('scroll', function(){
    let pos = $('#programs').offset().top;
    if(window.scrollY>=pos-650){
        $('.programs_Content,.programs_title,#contentImgWrap').css({transition:1+'s',opacity:1})
    }
    else {
        $('.programs_Content,.programs_title,#contentImgWrap').css({opacity:0})
    }

})