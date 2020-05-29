$(document).ready(function(){

    $nav=$('.classn');
    $togglecollapse=$('.toggle-collapse');


    $togglecollapse.click(function(){
        $nav.toggleClass('collapse');

    })
    $('.owl-carousel').owlCarousel({
        loop:true,
        autoplay:true,
        autoplayTimeout:3000,
        

    });

    $('.move span').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    })
});



