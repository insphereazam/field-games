/* Main Javascript */

jQuery( document ).ready(function( $ ) {
        $(function() {
                "use strict";
                // Default
                var Switchery = require('switchery');

                // if-else statement used only for fixing <IE9 issues
                if (Array.prototype.forEach) {
                        var elems = Array.prototype.slice.call(document.querySelectorAll('.js-switch'));

                        elems.forEach(function(html) {
                                var switchery = new Switchery(html);
                        });
                } else {
                        var elems = document.querySelectorAll('.js-switch');

                        for (var i = 0; i < elems.length; i++) {
                                var switchery = new Switchery(elems[i]);
                        }
                }
        });

        //lazy loading
        $(function() {
            $(".lazyload").lazyload({
                threshold : 200
            });
        });

        $(function() {
            $("#mp-menu img.lazyload").lazyload({
                event : 'sporty'
            });
        });

        $(window).bind("load", function() {
                    "use strict";
                    var timeout = setTimeout(function() {
                            $("#mp-menu img.lazyload").trigger("sporty")
                    }, 3000);
        });

    $(document).ready(function() {

    	// Check if tablet or mobile

    	var sw = document.body.clientWidth, breakpoint = 768, tablet = true;
    	var swPhone = document.body.clientWidth, breakpointPhone = 640, mobile = true;
    	var checkMobile = function() {
    		tablet = (sw > breakpoint) ? false : true;
    		mobile = (swPhone > breakpointPhone) ? false : true;
    	};

    	checkMobile();

       // Tablet & Mobile Navigation
		$("#MobileNav").click(function(e) {
			e.preventDefault();
			$(this).toggleClass("active");
			$('nav').toggleClass("active");
			$('.mobile-push').toggleClass("active");
			$('.sub-menu').removeClass('active');
			$('.mobile-overlay').toggleClass('active');
		});
		
		// Clicking a menu item that contains a submenu
		
		$('a.parent-menu').click(function(e) {
			e.preventDefault();
		
			var activeSubmenu = $(this).attr('data-id');
			$('#' + activeSubmenu).addClass("active");
		});
		
		// Clicking the "back" button in a submenu
		
		$('.sub-menu a.backward').click(function(event) {
			event.preventDefault();
			$(this).parent().parent().removeClass('active');
		});
		
		// Clicking the black overlay on the screen exits the mobile navigation
		$('.mobile-overlay').click(function() {
			$("#MobileNav").trigger('click');
		});

    });
	
	
	//Custom Select
	$(".custom-select").selectbox();
	$(".w195 .sbHolder").on("click", function(e) {
		"use strict";
		$(".w195 .sbHolder").toggleClass("current");
	});
	$(document).on("click", function(e) {
		"use strict";
		if ($(e.target).is(".w195 .sbHolder") === false) {
			$(".w195 .sbHolder").removeClass("selected");
		}
	});
	$(".w305 .sbHolder").on("click", function(e) {
		"use strict";
		$(".w305 .sbHolder").toggleClass("current");
	});
	$(document).on("click", function(e) {
		"use strict";
		if ($(e.target).is(".w305 .sbHolder") === false) {
			$(".w305 .sbHolder").removeClass("selected");
		}
	});
});



/*==========  Welcome Slider  ==========*/
//$(window).load(function() {
//	"use strict";
//	$('.welcome').flexslider({
//		selector			: '.slides > .slide',
//		animation			: "slide",
//		smoothHeight		: true,
//		controlNav			: false,
//		slideshow			: false,
//		directionNav		: true,
//		pausePlay			: false,
//		pauseText			: 'Pause',
//		playText			: 'Play',
//		initDelay			: 100,
//		pauseOnHover		: false,
//		pauseOnAction		: false,
//		touch				: true,
//		animationLoop		: true,
//	});
//});


//$(window).load(function() {
//	// The slider being synced must be initialized first
//	$('#carousel').flexslider({
//		animation			: "slide",
//		controlNav			: false,
//		animationLoop		: false,
//		slideshow			: true,
//		itemWidth			: 170,
//		itemMargin			: 5,
//		directionNav		: false,
//		asNavFor			: '#slider'
//	});
//	
//	$('#slider').flexslider({
//		animation			: "slide",
//		controlNav			: false,
//		animationLoop		: false,
//		slideshow			: false,
//		animationLoop		: true,
//		sync				: "#carousel",
//	});
//});


/*** Owl Carousel
----------------------------------------------------------------------------- ****/
jQuery(document).ready(function() {
	"use strict";
	
	jQuery("#featured-blogs-slider").owlCarousel({
        navigation			: true,
        slideSpeed			: 300,
        pagination			: true,
        singleItem			: false,
		items 					: 1,
		itemsCustom 			: false,
		itemsDesktop 			: [1199,1],
		itemsDesktopSmall 		: [980,1],
		itemsTablet			: [768,1],
		itemsTabletSmall		: false,
		itemsMobile 			: [479,1]
    });
	
	jQuery("#recent-articles-slider").owlCarousel({
        navigation			: true,
        slideSpeed			: 300,
        pagination			: true,
        singleItem			: false,
		items 					: 2,
		itemsCustom 			: false,
		itemsDesktop 			: [1199,1],
		itemsDesktopSmall 		: [980,1],
		itemsTablet			: [768,1],
		itemsTabletSmall		: false,
		itemsMobile 			: [479,1]
    });
	
	jQuery("#insight-follower-slider").owlCarousel({
                        navigation			: true,
                        slideSpeed			: 300,
                        pagination			: true,
                        singleItem			: false,
                        items 				: 1,
                        itemsCustom 			: false,
                        itemsDesktop 			: [1199,1],
                        itemsDesktopSmall 		: [980,1],
                        itemsTablet			: [768,1],
                        itemsTabletSmall                                        : false,
                        itemsMobile 			: [479,1]
    });
	
	/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
	/* owl-carousels */
	/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
	jQuery("#owl-thumbnails").owlCarousel({
		items					:4,
		itemsDesktop 			: [1199,4],
		itemsDesktopSmall 		: [980,2],
		itemsTablet			: [768,2],
		itemsMobile 			: [479,1],
		pagination				: false,
		navigation				: true,
		loop					:true,
		autoplay				:true,
		autoplayTimeout		:1000,
		navigationText			: [
			"<i class='fa fa-angle-left fa-2x'></i>",
			"<i class='fa fa-angle-right fa-2x'></i>"
		]
	});
});


$(document).ready(function() {	
	"use strict";
	/*** Retina Image for Logo
	----------------------------------------- ****/
	$('img[data-retina]').retina({checkIfImageExists: true});
	
	
	
	// Filter Dropdown Hover Effect
    $('.dropdown-state').hover(function() {
        $(this).addClass('open');
    }, function() {
        $(this).removeClass('open');
    });
	
	jQuery(".weather-dropdown").hide();
	jQuery(".dropdown-weather").on('click', 'a', function(){
		$(".weather-dropdown").animate({
			"opacity": "toggle"
		}, {
			duration: 500
		}, function(){
			$(".weather-dropdown").fadeIn();
		})
		jQuery(".dropdown-weather").toggleClass('selected');
	});
	
	jQuery(".users-dropdown").hide();
	jQuery(".dropdown-users a").click(function(){
		$(".users-dropdown").animate({
			"opacity": "toggle"
		}, {
			duration: 500
		}, function(){
			$(".users-dropdown").fadeIn();
		})
		jQuery(".dropdown-users").toggleClass('selected');
	});
	
	jQuery(".userProfileDropdown").hide();
	jQuery(".userProfileHolder .drop").click(function(){
		$(".userProfileDropdown").animate({
			"opacity": "toggle"
		}, {
			duration: 500
		}, function(){
			$(".userProfileDropdown").fadeIn();
		})
		jQuery(".userProfileHolder").toggleClass('selected');
	});
	
	
	jQuery("#changeLocation").hide();
	jQuery(".weather-widget").on('click', ' a.choose',function(){
//		$("#changeLocation").animate({
//			"opacity": "toggle"
//		}, {
//			duration: 500
//		}, function(){
			$("#changeLocation").fadeIn();
//		})
		jQuery(".weather-widget").toggleClass('selected');
	});
	
	
	
	/* Share Tooltips */
	jQuery(".shareTooltips").hide();
	//ajaxly loaded content was giving problem with original code
                  $('body').on('click', '.btnShare', function(){
            
		$(this).next(".shareTooltips").animate({
			"opacity": "toggle"
		}, {
			duration: 500
		}, function(){
			$(this).next(".shareTooltips").fadeIn();
		})
		jQuery(this).toggleClass('selected');
	});
	
	
	/* Mega Menu */
	jQuery(".megaDropdownLabel").click(function(){
		jQuery(".megaDropdown").slideToggle({
			"opacity": "toggle"
		}, {
			duration: 500
		})
		jQuery(".arrowLabel").toggleClass('selected');
	});
	jQuery('.megaMenu ul li a').click(function() {
		"use strict";
		jQuery('.megaMenu ul li a').removeClass('selected'); // Just remove class from all folder
		jQuery(this).addClass('selected'); // add onto current
	});
	
	
	// Handles scrollable contents using jQuery SlimScroll plugin.
	$('.scroller-blogs').slimScroll({
		size: 				'7px',
		color: 				'#b4b4b4',
		opacity: 			1,
		height: 			'auto',
		distance: 			'0px',
		disableFadeOut: 	true,
		railVisible: 		true,
		alwaysVisible: 	true
	});
	
	
	/* Tooltip */
//	$('[data-toggle="tooltip"]').tooltip()
	
	//Selected
	$(function(){
		"use strict";
		$('.polpular-writers ul').on('click', 'li', function(e){
            $('.polpular-writers ul li').removeClass('selected');
			$(this).addClass('selected');
		})
		
		$('.daily-ten ul').on('click', 'li', function(){
			$('.daily-ten ul li').removeClass('selected');
			$(this).addClass('selected')
		})
		
		$('.trending ul').on('click', 'li', function(){
			$('.trending ul li').removeClass('selected');
			$(this).addClass('selected')
		})
		
		$('#side-feature ul').on('click', 'li', function(){
			$('#side-feature ul li').removeClass('selected');
			$(this).addClass('selected')
		})
		
		$(".hdr-sharing #social-sharing").on("click", function(e) {
			"use strict";
			$(".hdr-sharing").toggleClass("selected");
		})
		
		$('.hdr-controls li a').click(function() {
			"use strict";
			$('.hdr-controls li a').removeClass('active'); // Just remove class from all folder
			$(this).addClass('active'); // add onto current
		})
		
		$('.edit-post-control-block li a').click(function() {
			"use strict";
			$('.edit-post-control-block li a').removeClass('active'); // Just remove class from all folder
			$(this).addClass('active'); // add onto current
		})
		
		$('.pallete a').click(function(){
			$('.pallete a').removeClass("active");
			$(this).addClass("active");
		})
		
		$('#filter a').click(function(){
			$('#filter a').removeClass("selected");
			$(this).addClass("selected");
		})
		
		$('.blog-control-btn li a').click(function() {
			"use strict";
			$('.blog-control-btn li a').removeClass('selected'); // Just remove class from all folder
			$(this).addClass('selected'); // add onto current
		});
		/*
		$('.button-dismissPromo').click(function() {
			"use strict";
			$('body').removeClass('activePromo'); // Just remove class from all folder
		});
		*/
	})
	
	
	//Search Toggle
	$(document).ready(function() {
		"use strict";
		$(".hdr-search a").click(function() {
			$(".search-block").slideToggle("slow");
		});
	});
	
	/*==========  Responsive Profile  ==========*/
	$('#profile-section').children().clone().appendTo('.responsive-profile-section');
//	$('.mobile-profile a').on('click', function(event) {
//		event.preventDefault();
//		$('body').addClass('no-scroll');
//		$('.responsive-profile-section').addClass('open');
//		return false;
//	});
	$('.responsive-profile-close').on('click', function(event) {
		event.preventDefault();
		$('body').removeClass('no-scroll');
		$('.responsive-profile-section').removeClass('open');
		return false;
	});
	
	
	
	//Tags
	function onAddTag(tag) {
		alert("Added a tag: " + tag);
	}
	
	function onRemoveTag(tag) {
		alert("Removed a tag: " + tag);
	}
	
	function onChangeTag(input, tag) {
		alert("Changed a tag: " + tag);
	}
	$(function() {
		"use strict";
//		$('#tags_2').tagsInput({
//			width: 'auto',
//			onChange: function(elem, elem_tags) {
//				var languages = ['php', 'ruby', 'javascript'];
//				$('.tag', elem_tags).each(function() {
//					if ($(this).text().search(new RegExp('\\b(' + languages.join('|') + ')\\b')) >= 0)
//						$(this).css('background-color', 'yellow');
//				});
//			}
//		});
	});
	
})



$('.modal').on('shown.bs.modal', function(event) {
	"use strict";
	
	//$(".modal-dialog").animate({"width":"63%"},600,'linear');
    $('.modal-backdrop').not('.fv-modal-stack')
    .css('z-index', 1039 + (10 * $('body').data('fv_open_modals')));

    $('.modal-backdrop').not('fv-modal-stack')
    .addClass('fv-modal-stack');
});

$('.panel-heading a').click(function() {
	"use strict";
	
    $('.panel-heading').removeClass('active');
    $(this).parents('.panel-heading').addClass('active');
    
    $('.panel-title').removeClass('active'); //just to make a visual sense
    $(this).parent().addClass('active'); //just to make a visual sense
 });


$(document).ready(function() {
	"use strict";
	
	var $modal = $('#ajax-modal');
	$('.ajax .login-signup').on('click', function() {
		// create the backdrop and wait for next modal to be triggered
		$('body').modalmanager('loading');
	
		setTimeout(function() {
			$modal.load('login-signup.php', '', function() {
				$modal.modal();
			});
		}, 1000);
	});
	
	$('.ajax .upload-profile').on('click', function() {
		// create the backdrop and wait for next modal to be triggered
		$('body').modalmanager('loading');
	
		setTimeout(function() {
			$modal.load('profile-pic-upload.php', '', function() {
				$modal.modal();
			});
		}, 1000);
	});
});