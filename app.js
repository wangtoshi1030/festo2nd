console.log(12);

$(function(){
    $(".slick").slick({
        dots: true,
        infinite: true,
        speed: 250,
        fade: true,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        cssEase: 'linear'
    })
    $(".login").on("click",function(){
        console.log("slsk");
        $(this).siblings(".menu").slideToggle();
        // $(this).toggleClass("active");
    })

    // hamberger-menu
    let flg = false;
    $(".hambarger").on("click",function(){
        console.log("click");
        $(".menu__line").toggleClass("active");
        $(".gnav").fadeToggle();
        if(!flg){
            $(".gnav__menu__item").each(function(i){
                $(this).delay(i*300).animate({
                    'opacity':1,
                    'margin-left':0,
                },500);
                flg = true;
            })
        }else{
            $('.gnav__menu__item').css({
                'margin-left' : 100,
                'opacity' : 0,
            });
            navFlg = false;
        }
    })

    // クリックしたら上へ戻る
    $(".fa-arrow-circle-up").on("click",function(){
        // console.log("arrow");
        $("body,html").animate({scrollTop:0},300,"linear");
    })

    // hoverしたらメニュー表示
    $(".logBox").on("mousemove",function(){
        $(this).children('ul').show();
        console.log("hover");
    })
    $(".logBox").on("mouseleave",function(){
        $(this).children('ul').hide();
    })

    // ハンバーガーメニュー
    $(".nav-toggle").on("click",function(){
        $(".nav-toggle, .nav").toggleClass('show');
        console.log("クリックだよー");
    })
})