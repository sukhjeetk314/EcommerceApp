
/**document will ready to implement this function */
$(document).ready(function(){

    /**this function will implement only when we resize the window
     * as it will change navigation menu bar on resizing 
     */
    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });


    /*it will load scroll prperty of js that will help to check 
    pixels of content*/
  /**on scrolling, nav-toggle menu bar will be removed */
    $(window).on('scroll load',function(){

        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');


        //if scrolltop content's pixel is greater than 68, navbar will be actived
        //otherwise it will be removed
        if($(window).scrollTop() > 68){
            $('header .header-2').addClass('header-active');
        }else{
            $('header .header-2').removeClass('header-active');
        }

        /**it will set height for elements of section tag in website */
        $('section').each(function(){

            let height = $(this).height();
            let offset = $(this).offset().top - 200;
            let top = $(window).scrollTop();
            let id = $(this).attr('id');

            if(top >= offset && top < offset + height){
                $('.navbar ul li a').removeClass('active');
                $('.navbar').find(`[href="#${id}"]`).addClass('active');
            }

        });

    });

    /**it will apply jquery code on home page's main slider images  */
    $('.home-slider').owlCarousel({
        items:1,
        nav:true,
        dots:false,
        autoplay:true,
        autoplayTimeout:8000,
        loop:true
    });

    /**it will apply jquery code on small images of details page */
    $('.small-image img').click(function(){

        $(this).addClass('image-active').siblings().removeClass('image-active');
        let image = $(this).attr('src');
        $('.big-image img').attr('src', image);

    });


    /**it will apply jquery code on product's gallery images */
    $('.gallery .btn').click(function(){

        let filter = $(this).attr('data-filter');
        if(filter == 'all'){
            $('.gallery .box').show(400);
        }else{
            $('.gallery .box').not('.'+filter).hide(200); //will hide if that filter is not selected with given speed
            $('.gallery .box').filter('.'+filter).show(400); //will show if that filter is selected with given speed
        }

        $(this).addClass('button-active').siblings().removeClass('button-active');

    });

});