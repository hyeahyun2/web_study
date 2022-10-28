let sec1 = ()=>{
    $('#back1').css({top:300,opacity:1}).animate({top:-100},500)
}
let sec2 = ()=>{
    $('#back2').css({top:300,opacity:1}).animate({top:-100},500)
}
let sec3 = ()=>{
    $('#back3').css({top:300,opacity:1}).animate({top:-100},500)
}
let textbox = ()=>{
    $('#textbox').css({top:500}).animate({top:-100,opacity:1},500)
}
let firework1 = ()=>{
    $('#fw1').css({opacity:0}).animate({opacity:1});
}
let firework2 = ()=>{
    $('#fw2').css({opacity:0}).animate({opacity:1})
}
let firework3 = ()=>{
    $('#fw3').css({opacity:0}).animate({opacity:1});
}
let firework4 = ()=>{
    $('#fw4').css({opacity:0}).animate({opacity:1});
}
setTimeout(firework4,4500)
setTimeout(firework3,4000)
setTimeout(firework2,3500)
setTimeout(firework1,3000)
setTimeout(textbox,2500)
setTimeout(sec1,2000)
setTimeout(sec2,1500)
setTimeout(sec3,1000)

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