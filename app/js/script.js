$( document ).ready(function() {
    if ($(".services-odd").hasClass('flex-row-reverse') == false) {
    	$(".services-odd").addClass("flex-row-reverse");
    }

    $(window).resize(function () {
	    var viewportWidth = $(window).width();
	    if (viewportWidth <= 767) {
	        $(".services-odd").removeClass("flex-row-reverse");
	    }
	    if (viewportWidth > 767) {
	    	$(".services-odd").addClass("flex-row-reverse");
	    }
	});

	$('body').scrollspy({target: "#navbar", offset: 1});
	// Add smooth scrolling on all links inside the navbar
	$("#navbar a").on('click', function(event) {
	  // Make sure this.hash has a value before overriding default behavior
	  if (this.hash !== "") {
	    // Prevent default anchor click behavior
	    event.preventDefault();
	    // Store hash
	    var hash = this.hash;
	    // Using jQuery's animate() method to add smooth page scroll
	    // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
	    $('html, body').animate({
	      scrollTop: $(hash).offset().top
	    }, 600, function(){
	    // Add hash (#) to URL when done scrolling (default click behavior)
	      window.location.hash = hash;
	    });
	  } // End if
	});

	$('.navbar-brand').on("click",function() {
	    $('html, body').animate({ scrollTop: 0 }, '600', function () {
	    });
	});
});

