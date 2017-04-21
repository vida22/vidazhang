$(document).ready(function() {

//Tooltip
    $('[data-toggle="tooltip"]').tooltip(); 
    
    
//Progress Bar    
  var winHeight = $(window).height(), 
      docHeight = $(document).height(),
      progressBar = $('progress'),
      max, value;

  /* Set the max scrollable area */
  max = docHeight - winHeight;
  progressBar.attr('max', max);
    

  $(document).on('scroll', function(){
     value = $(window).scrollTop();
     progressBar.attr('value', value);
  });
  
//offset anchor
  window.addEventListener("hashchange", function () {
    window.scrollTo(window.scrollX, window.scrollY - 110);
});

//find the number of anchors
var numAnc = $('.anchor').length;

//change tag when pass anchor point 
  var anchor_offset = 0;

$(window).on('scroll', function() {
  for (i=1; i <= numAnc; i++) {
    anchor_offset = $('#s'+i).offset().top-300;
//    console.log(anchor_offset);
    
    if ( $(window).scrollTop() > anchor_offset ) {
//         $('#test').show();
//      console.log("something fireddd");
      $('.active').removeClass('active');
      $('#a'+i).addClass('active');
    }
}});

  
  
//Hide and show nav when scroll
    var didScroll;
    var lastScrollTop = 0;
    var delta = 5;
    var navbarHeight = $('nav').outerHeight();

    $(window).scroll(function(event){
        didScroll = true;
    });

    setInterval(function() {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 250);

    function hasScrolled() {
        var st = $(this).scrollTop();

        // Make sure they scroll more than delta
        if(Math.abs(lastScrollTop - st) <= delta)
            return;

        // If they scrolled down and are past the navbar, add class .nav-up.
        // This is necessary so you never see what is "behind" the navbar.
        if (st > lastScrollTop && st > navbarHeight){
            // Scroll Down
            $('nav').removeClass('nav-down').addClass('nav-up border');
//            $('.project-sum').addClass('hidden');
        } else {
            // Scroll Up
            if(st + $(window).height() < $(document).height()) {
                $('nav').removeClass('nav-up').addClass('nav-down');
//                $('.project-sum').removeClass('hidden');
            }
        }

        //remove nav border when at the top of the page 
        if (st < 60){
            $('nav').removeClass('border');
        }
        
        //show nav if at page bottom
        if (st > max-200){
            $('nav').removeClass('nav-up').addClass('border');
        }
      
        //show sidebar only after scrolling x
        if (st > 300) {
          $('.project-sum').removeClass('hidden');
          $('.project-sum').addClass('shown');
        } else {
          $('.project-sum').addClass('hidden');
          $('.project-sum').removeClass('shown');
        }
        
        //back-home link
//        if (st > max*.70){
//            $('#back-home').removeClass('hidden');
//        } else {
//            $('#back-home').addClass('hidden')
//        }

        lastScrollTop = st;
    }

    
});