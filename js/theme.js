;(function($){
    "use strict"
	
	
	var nav_offset_top = $('header').height() + 50; 
    /*-------------------------------------------------------------------------------
	  Navbar 
	-------------------------------------------------------------------------------*/

	//* Navbar Fixed  
    function navbarFixed(){
        if ( $('.header_area').length ){ 
            $(window).scroll(function() {
                var scroll = $(window).scrollTop();   
                if (scroll >= nav_offset_top ) {
                    $(".header_area").addClass("navbar_fixed");
                } else {
                    $(".header_area").removeClass("navbar_fixed");
                }
            });
        };
    };
    navbarFixed();
	

	
	
	

	/*----------------------------------------------------*/
    /*  Google map js
    /*----------------------------------------------------*/
     
    $(document).ready(function(){       
        var scroll_pos = 0;
        $(document).scroll(function() { 
            scroll_pos = $(this).scrollTop();
            if(scroll_pos > 210) {
                $('.nav-link').css('color', '#000');
            } else {
                $('.nav-link').css('color', '#fff');
            }
        });
    });
	

})(jQuery)