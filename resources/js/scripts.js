$(document).ready(function(){

	//STICKY NAVIGATION

	$('.js-sectionFeatures').waypoint(function(direction){
		if(direction == "down"){
			$('nav').addClass('sticky');
		} else{
			$('nav').removeClass('sticky');
		}
	}, {
		offset: '85px'
	});

	//SCROLL ON BUTTONS

	$('.js-scrollToPlans').click(function(){
		$('html, body').animate({scrollTop: $('.js-sectionPlans').offset().top}, 1000);
	});

	$('.js-scrollToStart').click(function(){
		$('html, body').animate({scrollTop: $('.js-sectionFeatures').offset().top}, 1000);
	});

	//NAVIGATION SMOOTH SCROLL

	// Select all links with hashes
	$('a[href*="#"]')
	  // Remove links that don't actually link to anything
	  .not('[href="#"]')
	  .not('[href="#0"]')
	  .click(function(event) {
	    // On-page links
	    if (
	      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
	      && 
	      location.hostname == this.hostname
	    ) {
	      // Figure out element to scroll to
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
	      // Does a scroll target exist?
	      if (target.length) {
	        // Only prevent default if animation is actually gonna happen
	        event.preventDefault();
	        $('html, body').animate({
	          scrollTop: target.offset().top
	        }, 1000, function() {
	          // Callback after animation
	          // Must change focus!
	          var $target = $(target);
	          $target.focus();
	          if ($target.is(":focus")) { // Checking if the target was focused
	            return false;
	          } else {
	            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
	            $target.focus(); // Set focus again
	          };
	        });
	      }
	    }
	  });

	  //ANIMATION ON SCROLL

	  $('.js-wp1').waypoint(function(direction){
	  	$('.js-wp1').addClass('animated fadeIn');
	  }, {
	  	offset: '50%'
	  })

	  $('.js-wp2').waypoint(function(direction){
	 	$('.js-wp2').addClass('animated fadeInUp');
	 }, {
	 	offset: '50%'
	 })

	  $('.js-wp3').waypoint(function(direction){
	 	$('.js-wp3').addClass('animated fadeIn');
	 }, {
	 	offset: '50%'
	 })

	  $('.js-wp4').waypoint(function(direction){
	 	$('.js-wp4').addClass('animated pulse');
	 }, {
	 	offset: '50%'
	 })

	 //MOBILE NAV

	 $('.js-navIcon').click(function(){
	 	var nav = $('.js-mainNav');
	 	var icon = $('.js-navIcon ion-icon');

	 	nav.slideToggle(200);

	 	if(icon.attr('name') == 'menu'){
	 		icon.attr('name', 'close');
	 	} else{
	 		icon.attr('name', 'menu');
	 	}
	 });

});