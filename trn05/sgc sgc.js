
$(function () {
    var TXT = ['HOME', '01', '02', '03', '04', 'Jun,s portfolio', 'copyright']
    //fullpage 
    $('.main').fullpage({
        anchors: ['page01', 'page02', 'page03', 'page04', 'page05', 'footer'],
        //navigation: true,
        css3: false,
        afterLoad: function (page, num) {
            setTimeout(function () {
                $('.section').eq(num - 1).addClass('on').siblings().removeClass('on');
            });
            $('.navBar li').eq(num - 1).addClass('on').siblings().removeClass('on');
            $('.this_page').text(TXT[num - 1]);

            if(num !== 1) {
                $('.Header').addClass('on')
            }else {
                $('.Header').removeClass('on')
            }
            // 연산자 num !== 1 ? $('.Header').addClass('on') : $('.Header').removeClass('on')
        },
    });

   $('.basicSlider').slick({
    arrows:false,
    autoPlay:true,
    pauseOnHover: true,
    asNavFor:'.basicSlider',

});

$('.basicSlider').on('afterChange', function(e, s, c){
   $('.productSlider .slide_menu li').eq(c).addClass('on').siblings().removeClass('on')
});
$('.productSlider .slide_menu li').on('click' , function(){
    var idx = $(this).index();
    $('.basicSlider').slick('slickGoTo', idx)
});

$('.allOpen').on('click', function(){
    $(this).toggleClass('on');
    $('.cover').slideToggle();
})



})