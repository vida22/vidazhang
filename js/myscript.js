//$(document).ready(function() {
//      //add todo
//      $("#add-button").click(addTodo);  
//      //delete todo
//      $(document).on("click",'.material-icons.delete-button', deleteTodo);
//      //show and hide placeholder text for cards
//      checkTodos();
//      $(document).on("click",'#delete-todo-button', checkTodos)
//      //complete todo
//      $(document).on("click",'.checkbox', completeTodo);
//      //reset modal
//      $('.modal').on('hidden.bs.modal', resetModal);
//      //auto focus
//      $('#addTodoModal').on('shown.bs.modal',function(){
//          $('#todo-title').focus();
//      })
//      //validate form
//      $("#addTodoModal").click(validateForm);
//    });
//
//
//
//
////Show and hide placeholder text for cards
//function checkTodos(){}


$(document).ready(function() {

    var FIREFOX = /Firefox/i.test(navigator.userAgent);

    if (FIREFOX) {
        document.getElementById("hide-non-chrome").style.display="none";
    }    

//Typed
    $(function(){
        $(".sentence1").typed({
            strings: ["^3000making things.^400","solving problems.^400","transforming complex information into simple design."],
            typeSpeed: 1, // typing speed
            backDelay: 750, // pause before backspacing
            loop: false, // loop on or off (true or false)
            loopCount: false, // number of loops, false = infinite
            showCursor: true,
            callback: function(){ } // call function after typing is done
        });
    });
    
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
            $('.project-sum').addClass('hidden');
        } else {
            // Scroll Up
            if(st + $(window).height() < $(document).height()) {
                $('nav').removeClass('nav-up').addClass('nav-down');
                $('.project-sum').removeClass('hidden');
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
        
        if (st > max*.70){
            $('.back-home').removeClass('hidden');
        } else {
            $('.back-home').addClass('hidden')
        }

        lastScrollTop = st;
    }

    
});