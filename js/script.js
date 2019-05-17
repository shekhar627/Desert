$(document).ready(function(){
    
    // bootstrap carousel.......
    $('.carousel').carousel();
    
    
    //owl carousel................
        $(".owl-carousel").owlCarousel({
        margin: 10,
        //loop: true,
        responsiveClass:true,
        autoplay:true,
        autoplayTimeout:3000,
        loop:true,
        responsive:{
            0:{
                items:1,
                
            },
            600:{
                items:2,
                
            },
            1000:{
                items:3,
                
            }
        },
    });
    
    // back to top...................
    var windowH = $(window).height()/2;

    $(window).on('scroll',function(){
        if ($(this).scrollTop() > windowH) {
            $("#myBtn").css('display','flex');
        } else {
            $("#myBtn").css('display','none');
        }
    });

    $('#myBtn').on("click", function(){
        $('html, body').animate({scrollTop: 0}, 300);
    });
    
    
    // others........

    $smallImage1 = $('.small-image-1 img').attr('src');
    $smallImage2 = $('.small-image-2 img').attr('src');
    $smallImage3 = $('.small-image-3 img').attr('src');
    $imagePath=$('#popup-link').attr('href');
        // magnific popupjs....................
    $('#popup-link').magnificPopup({
        
          items: [{
            src: $imagePath
          }],
          type: 'image',
      // other options
    });
    
    $('.small-image-1').click(function(){
        $('#popup-link').attr('href',$smallImage1);
        $('#popup-link img').attr('src',$smallImage1);
        
        $('#popup-link1').attr('href',$smallImage1);
        $('#popup-link1 img').attr('src',$smallImage1);
        
        $imagePath=$('#popup-link').attr('href');
            // magnific popupjs....................
        $('#popup-link').magnificPopup({

              items: [{
                src: $imagePath
              }],
              type: 'image',
          // other options
        });
    });
    
   $('.small-image-2').click(function(){
        $('#popup-link').attr('href',$smallImage2);
        $('#popup-link img').attr('src',$smallImage2);
       
        $('#popup-link1').attr('href',$smallImage2);
        $('#popup-link1 img').attr('src',$smallImage2);
       
        $imagePath=$('#popup-link').attr('href');
           // magnific popupjs....................
        $('#popup-link').magnificPopup({

              items: [{
                src: $imagePath
              }],
              type: 'image',
          // other options
        });
    });
   $('.small-image-3').click(function(){
        $('#popup-link').attr('href',$smallImage3);
        $('#popup-link img').attr('src',$smallImage3);
       
        $('#popup-link1').attr('href',$smallImage3);
        $('#popup-link1 img').attr('src',$smallImage3);
       
        $imagePath=$('#popup-link').attr('href');
           // magnific popupjs....................
        $('#popup-link').magnificPopup({

              items: [{
                src: $imagePath
              }],
              type: 'image',
          // other options
        });
    });
    
    
    $("#bar_chat_display_id").click(function(){
        $(".live_chat").fadeIn(500,function(){
            $(this).css('display','block');
            $("#bar_chat_display_id").fadeOut(500);
        })  
    });
    $("#chat_id").click(function(){
        $(".live_chat").fadeOut(500,function(){
            $(this).css('display','none');
            $("#bar_chat_display_id").fadeIn(500);
        })  
    });
    
    
    
    
    
    
    //Quantity counter.........................
    var quantitiy=0;
   $('.quantity-right-plus').click(function(e){
        
        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        var quantity = parseInt($('#quantity').val());
        
        // If is not undefined
            
            $('#quantity').val(quantity + 1);

          
            // Increment
        
    });

     $('.quantity-left-minus').click(function(e){
        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        var quantity = parseInt($('#quantity').val());
        
        // If is not undefined
      
            // Increment
            if(quantity>0){
            $('#quantity').val(quantity - 1);
            }
    });
    
    
    // bootstrap sub menu...................
      $('.dropdown-submenu a.test').on("click", function(e){
        $(this).next('ul').toggle();
        e.stopPropagation();
        e.preventDefault();
      });


});