var header =$ (".nav_area");
$(window).on('scroll',function(){
if ($(window).scrollTop()>200){
    $('.nav_area').addClass('sticky'); 
}
else{
    header.removeClass('sticky');
}
});

$('.count').counterUp({
    delay: 10,
    time: 4000
});

$('.autoplay').slick({
    Arrows:true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    dots: true
  });