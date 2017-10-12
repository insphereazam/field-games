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
var ApplicationController = (function($) {
    
    var jsUTF8Decode = function(str_data){

        //http://phpjs.org/functions/utf8_decode/        
        var tmp_arr = [],
           i = 0,
           c1 = 0,
           seqlen = 0;

         str_data += '';

         while (i < str_data.length) {
           c1 = str_data.charCodeAt(i) & 0xFF;
           seqlen = 0;

           // http://en.wikipedia.org/wiki/UTF-8#Codepage_layout
           if (c1 <= 0xBF) {
             c1 = (c1 & 0x7F);
             seqlen = 1;
           } else if (c1 <= 0xDF) {
             c1 = (c1 & 0x1F);
             seqlen = 2;
           } else if (c1 <= 0xEF) {
             c1 = (c1 & 0x0F);
             seqlen = 3;
           } else {
             c1 = (c1 & 0x07);
             seqlen = 4;
           }

           for (var ai = 1; ai < seqlen; ++ai) {
             c1 = ((c1 << 0x06) | (str_data.charCodeAt(ai + i) & 0x3F));
           }

           if (seqlen == 4) {
             c1 -= 0x10000;
             tmp_arr.push(String.fromCharCode(0xD800 | ((c1 >> 10) & 0x3FF)), String.fromCharCode(0xDC00 | (c1 & 0x3FF)));
           } else {
             tmp_arr.push(String.fromCharCode(c1));
           }

           i += seqlen;
         }

         return tmp_arr.join("");
    };
    
    var adjustFooterPosition = function(){
        if ($('.content-page').hasClass('no-height-check')) {
            return;
        }
        var winHeight = $(window).height();
        var footerHeight = $('#footer-wrap').height();
        var contentsHeight = $('.content-page').height();   
        var navAreaHeight = $('.navigational-area').height();   
        var headerHeight = $('.header').height(); 
        var footerPaddingMargin = 40 + 50 + 50; //margin-top+padding-top+padding-bottom (no margin at bottom)
        var fullPageHeight = headerHeight + navAreaHeight + contentsHeight + footerHeight + footerPaddingMargin;
        if(winHeight > fullPageHeight) {
            var diff = winHeight - fullPageHeight;
            var newContentsHeight = contentsHeight + diff;
            $('.content-page').css('min-height', newContentsHeight + 'px');
        }
    };
    
    var adjustArticlePageContents = function(){
        var postExcerptHeight = $('.news__article').height();
        var sidebarHeight = $('.news__sidebar').height();
        var excerptPadding = 60 + 60; //bottom-padding + top-padding
        var fullExcerptHeight = postExcerptHeight + excerptPadding;
        console.log(fullExcerptHeight + ',' + sidebarHeight);
        //if(fullExcerptHeight < sidebarHeight) {
            if(fullExcerptHeight <= 600) {
                //$('.ArticlePageSidebarItem2').addClass('hide');
                $('.ArticlePageSidebarItem3').addClass('hide');
                $('.ArticlePageSidebarItem4').addClass('hide');
                $('.ArticlePageSidebarItem5').addClass('hide');
            }
            else if(fullExcerptHeight <= 800) {
                //$('.ArticlePageSidebarItem3').addClass('hide');
                $('.ArticlePageSidebarItem4').addClass('hide');
                $('.ArticlePageSidebarItem5').addClass('hide');
            }
            else if(fullExcerptHeight <= 1200) {
                //$('.ArticlePageSidebarItem4').addClass('hide');
                $('.ArticlePageSidebarItem5').addClass('hide');
            }
            /*else if(fullExcerptHeight <= 2150) {
                $('.ArticlePageSidebarItem5').addClass('hide');
            }*/
        //}
    };
	
    var loginModal = function(options) {
        
        var defaults = {
            ref: window.location.href
        };
        
        var opts = $.extend( {}, defaults, options );
        
        var $modal = $('#ajax-modal');
        
        // create the backdrop and wait for next modal to be triggered
        $('body').modalmanager('loading');
        
        setTimeout(function() {
            $modal.load(baseHttpPath + '/auth/modal-login-signup?ref=' + escape(opts.ref), '', function() {
                $modal.modal();
            });
        }, 500);
    };
    
    var registerLoginModal = function() {
        $('a.forceLogin, button.forceLogin').click(function(e){
            if (!isUserLoggedIn) {
                e.preventDefault();
                var refUrl = $(this).attr('href');
                
                //isLoginPopupEnabled - defined globally in _javascripits.php
                if(isLoginPopupEnabled !== undefined && isLoginPopupEnabled !== 1 && strLoginUrl !== undefined && strLoginUrl !== "") {
                    var ref = (refUrl === undefined || refUrl === '#' || refUrl.indexOf('javascript:') != -1) ? window.location.href : refUrl;
                    window.location = strLoginUrl + '?ref=' + escape(ref);
                }
                else {
                    if(refUrl === undefined || refUrl === '#'){
                        loginModal();
                    }
                    else {
                        loginModal({
                            ref: refUrl
                        });
                    }
                }
            }
            else {
                return true;
            }            
        });
    };
    
    var registerGlobalEvents = function() {
        
        $('body').on('click', 'div.mobileShareBtn', function(e){
            e.preventDefault();
            //  e.stopPropagation();
        });
        
        //play youtube video
        $('body').on('click', '.btnPlay', function(e){
            e.preventDefault();
            var video = $(this).data('videoid');
            var title = $(this).data('title');
            if(video !== undefined && video !== "") {
                $.fancybox.open([
                {
                    href : 'http://www.youtube.com/embed/'+video+'?autoplay=1',
                    title : title,
                    type: 'iframe'
                }   
            ]);
            }
        });
        
        //open read link
        $('body').on('click', '.btnRead', function(e){
            var postUrl = $(this).data('posturl');
            if(postUrl !== undefined && postUrl !== "") {
                window.location = postUrl;
            }
        });
        
        $('a.no-link').click(function(e) {
           e.preventDefault(); 
        });
    };
    
    //For date ve
        var DateFormat =  function (format,timestamp) {
            
            if(timestamp != null) {
                 var today = new Date(timestamp);
            }else {
                var today = new Date(); 
            }

            var dd = today.getDate();
            var mm = today.getMonth() + 1; //January is 0!
            var yyyy = today.getFullYear();

            if (dd < 10) {
                dd = '0' + dd
            }

            if (mm < 10) {
                mm = '0' + mm
            }

            return yyyy + format + mm + format + dd;
        }
    
    return {
            adjustArticlePageContents: function(){
                adjustArticlePageContents();
            },
            adjustFooterPosition: function(){
                adjustFooterPosition();
            },
            jsUTF8Decode: function(data){
                return jsUTF8Decode(data);
            },
            loginModal: function() {
                loginModal();
            },
            dateFormat: function(format,timestamp) {
                return DateFormat(format,timestamp);
            },
            init: function() {
                registerLoginModal();
                registerGlobalEvents();
            }
    };
	
}(jQuery));

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

(function ($) {
    $.fn.youtubePlay = function (options) {
        var defaults = {
            selector: 'a.youtube-link',
            showSelector: 'div.lt-stacked-img',
            containerClass: 'image-cover thumb302',
            iframeClass: 'thumb302',
            ajaxFindClass: '',
            ajaxShowSelector : '',
            ajaxContainerClass:'',
            ajaxIframeClass: ''
        };

        var opts = $.extend({}, defaults, options);

        return this.on('click', opts.selector, function (e) {
            e.preventDefault();
            e.stopPropagation();
            
            var link = $(this).attr('href');
            if(link === undefined) {
                if($(this).hasClass('video-overlay')) {
                    link = $(this).data('link');
                }
                else {
                    link = $(this).closest('video-overlay').data('link');
                }
            }
            
            var elem = '';
            var findSelector = opts.showSelector;
            if($(this).hasClass(opts.ajaxFindClass)) {
                    findSelector = opts.ajaxShowSelector;
            }
            if ($(this).find(findSelector).presence()) {
                elem = $(this).find(findSelector);
            }
            else if ($(this).parent(findSelector).presence()) {
                elem = $(this).parent(findSelector);
            }
            else {
                elem = $(this).closest(findSelector);
            }

            if($(this).hasClass(opts.ajaxFindClass)) {
                $(elem).html("<div class='" + opts.ajaxContainerClass + "'><iframe class='" + opts.ajaxIframeClass + "' src='" + link + "' frameborder='0' height='100%' width='100%' allowfullscreen='true'></iframe></div>");
            } else {
                $(elem).html("<div class='" + opts.containerClass + "'><iframe class='" + opts.iframeClass + "' src='" + link + "' frameborder='0' height='100%' width='100%' allowfullscreen='true'></iframe></div>");
            }
        });
    };

    $.fn.vimeoPlay = function (options) {
        var defaults = {
            selector: 'a.vimeo-link',
            showSelector: 'div.lt-stacked-img',
            containerClass: 'image-cover thumb302',
            iframeClass: 'thumb302',
            ajaxFindClass: '',
            ajaxShowSelector : '',
            ajaxContainerClass:'',
            ajaxIframeClass: ''
        };

        var opts = $.extend({}, defaults, options);

        return this.on('click', opts.selector, function (e) {
            e.preventDefault();
            e.stopPropagation();
            
            var link = $(this).attr('href');
            if(link === undefined) {
                if($(this).hasClass('vimeo-video-overlay')) {
                    link = $(this).data('link');
                }
                else {
                    link = $(this).closest('vimeo-video-overlay').data('link');
                }
            }
            
            //alert(link);return;
            var linkArr = link.split('/');
            var videoId = linkArr[parseInt(linkArr.length) - 1 ];
            var elem = '';
            var findSelector = opts.showSelector;
            if($(this).hasClass(opts.ajaxFindClass)) {
                    findSelector = opts.ajaxShowSelector;
            }
            if ($(this).find(findSelector).presence()) {
                elem = $(this).find(findSelector);
            }
            else if ($(this).parent(findSelector).presence()) {
                elem = $(this).parent(findSelector);
            }
            else {
                elem = $(this).closest(findSelector);
            }
			
            if($(this).hasClass(opts.ajaxFindClass)) {
                    $(elem).html("<div class='" + opts.ajaxContainerClass + "'><iframe class='" + opts.ajaxIframeClass + "' src='//player.vimeo.com/video/" + videoId + "?autoplay=1' frameborder='0' height='100%' width='100%' webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></div>");
            } else {
                    $(elem).html("<div class='" + opts.containerClass + "'><iframe class='" + opts.iframeClass + "' src='//player.vimeo.com/video/" + videoId + "?autoplay=1' frameborder='0' height='100%' width='100%' webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></div>");
            }
        });
    };
    
    $.fn.presence = function () {
        return this.length !== 0 && this;
    };
    
}(jQuery));
var clubs_index_club = '{{#each this}}' +
                            '<li><a href="http://{{url_prefix}}.' + blogsHostURL + '" style="background:none repeat scroll 0 0 {{hex_color}};" target="_blank">' +
                                '<div class="img-thumbnail"><img src="{{logoImageURL}}" alt="{{title}}" class="img-responsive"></div>' +
                                '<div class="description">' +
                                    '<div class="fullwidth">' +
                                        '<h4>{{title}}</h4>' +
                                        '<p>{{club_name}}</p>'+
                                        '<button type="button" class="{{#loggedUser this.status}} {{else}} forceLogin {{/loggedUser}} follow {{#if following}}selected{{/if}}" aria-label="Like" data-id="{{id}}" data-status="{{#if following}}unfollow{{else}}follow{{/if}}">'+
                                           '<i class="fa fa-star"></i>{{#if following}}Following{{else}}Follow{{/if}}'+
                                        '</button>'+
                                    '</div>' +
                               '</div>' +
                            '</a></li>' +
                        '{{/each}}';
                    
var popular_blogs_popular = '{{#each this}}' +
                            '<li><a href="http://{{url_prefix}}.' + blogsHostURL + '" target="_blank">'+
                            '<button type="button" class="like {{#loggedUser this.status}} FollowBlog {{else}} forceLogin {{/loggedUser}} {{#if following}}selected{{/if}}" aria-label="Like" data-id="{{id}}" data-status="{{#if following}}unfollow{{else}}follow{{/if}}"><span aria-hidden="true"><i class="fa fa-star"></i></span></button>' +
                                '<span class="post-count">{{cnt}} {{popularBy filter}}</span>' +
                                '<div class="img-thumbnail"><img src="{{logoImageURL}}" alt="{{title}}" class="img-responsive"></div>'+
                                '<div class="description">' +
                                    '<h4 class="title-ellipsis">{{title}}</h4>' +
                                    '<p>by {{{display_name}}}</p>' +
                               '</div>' +
                            '</a></li>' +
                        '{{/each}}';
                    
var popular_writers_popular = '{{#each this}}' +
                            '<li><a href="'+ baseHttpPath +'/profile/{{username}}"><button data-id="{{id}}" data-status="{{#if following}}unfollow{{else}}follow{{/if}}" type="button" class="like {{#loggedUser this.status}} FollowUnfollowUser {{else}} forceLogin {{/loggedUser}} {{#if following}}selected{{/if}}" aria-label="Like"><span aria-hidden="true"><i class="fa fa-star"></i></span></button>' +
                                '<span class="post-count">{{cnt}} {{writerBy filterType}}</span>' +
                                '<div class="img-thumbnail"><img src="{{profileImageURL}}" alt="{{username}}" class="img-responsive"></div>'+
                                '<div class="description">' +
                                    '<h4>#{{position}} &nbsp; {{firstname}} {{lastname}}</h4>' +
                                    '<p>View Profile</p>' +
                               '</div>' +
                            '</a></li>' +
                        '{{/each}}';
                    
var search_fanssearch_search = '{{#each this}}' +
                                    '<div class="posts-grid" data-id="{{id}}"><a href="{{postUrl}}">'+
                                        '<div class="placeholder">'+
                                            '<div class="img-thumbnail"><img src="{{postImageURL}}" alt="{{title}}" class="img-responsive"></div>'+
                                            '<div class="posts-excerpt">'+
                                                '<h5 class="game-code upper {{sportClass}}">{{sportTitle}} <span class="time text-right">{{timeElapsed}}</span></h5>'+
                                                '<h4 class="game-title">{{title}}</h4>'+
                                                '<p>{{excerpt}}</p>'+
                                                '<div class="caption">'+
                                                    '<div class="admin-circle"><img alt="Avatar" src="{{userProfileThumb}}" class="img-responsive"></div>'+
                                                    '<div><p>by <span class="green">{{display_name}}</span></p></div>'+
                                                    '<div class="share-post"><span class="hidden-xs hidden-sm"> {{total_shares}} shares</span> <span class="share"><i class="fa fa-share"></i></span></div>'+
                                                '</div>'+
                                            '</div>'+
                                    '</div>'+
                               '{{/each}}';
                           
var userblogs_connect_hashtags = '{{#each this}}' +
                                    '<li><div class="row">'+
                                        '<div class="col-md-12 col-sm-12 col-xs-13">'+
                                            '<div class="social-caption">{{hashTag}} {{moderationStatus}}</div>'+
                                            
                                        '</div>'+
                                        '<div class="col-md-4 col-sm-4 col-xs-3" style="margin-top:-5px;">'+
                                            '<a data-blogid="{{blogId}}" data-id="{{tagId}}" href="#" class="button trans button-remove hash-tag-remove" data-type="{{type}}">'+
                                                '<i class="fa fa-remove"></i>'+
                                            '</a>'+
                                        '</div>'+
                                    '</div></li>'+
                                '{{/each}}';
                            
var userblogs_createeditblog_tags = '{{#each this}}' +
                                        '<a title="{{inputValue}}" id="" class="tag"><span>{{inputValue}}</span><b title="Remove tag">x</b></a>'+
                                    '{{/each}}';

var userblogs_permissions_blog = '{{#each this}}' +
                                    '<li><a class="add-author" href="#"  data-id="{{id}}" data-blogid="{{thisBlogId blog}}" data-referer="modal-box">'+
                                        '<button class="close" aria-label="Close" type="button" data-id="{{id}}" data-blogid="{{thisBlogId blog}}"  data-referer="modal-box"><span aria-hidden="true"><i class="fa fa-plus"></i></span></button>'+
                                        '<div class="img-thumbnail"><img src="{{profileImageURL}}" alt="{{username}}" class="img-responsive"></div>'+
                                        '<div class="description">'+
                                            '<h4>{{firstname}} {{lastname}}</h4>'+
                                            '<p>{{username}}</p>'+
                                        '</div>'+
                                        '</a></li>'+
                                '{{/each}}';

var userblogs_permissions_writers = '<li class="writer-{{id}}"><a href="'+ baseHttpPath +'/profile/{{username}}">'+
                                        '<button type="button" class="close remove-author" aria-label="Close" onclick="return false;" data-id="{{id}}" data-blogid="{{thisBlog id}}">'+
                                            '<span aria-hidden="true"><i class="fa fa-close"></i></span>'+
                                        '</button>'+
                                        '<div class="img-thumbnail"><img src="{{profileImageURL}}" alt="{{username}}" width="88"></div>'+
                                        '<div class="description">'+
                                            '<h4>{{firstname}} {{lastname}}</h4>'+
                                            '<p>View Profile</p>'+
                                        '</div>'+
                                    '</a></li>';
                                
var userblogs_blog_loadposts = '{{#each this}}'+
                                '<li id="postId_{{id}}" class="{{published_status}}"><div class="articles">'+
                                    '<div class="img-thumbnail"><img src="{{postThumbImage}}" alt="" class="img-responsive"></div>'+
                                    '<div class="description no">'+
                                        '<div class="row">'+
                                            '<div class="col-md-10 col-sm-10 col-xs-16">'+
                                                '<h4>{{title}}</h4>'+
                                                '<p class="post-status">{{#unless isPost}}<span>{{source}}</span> {{/unless}}<span>{{published_status}}</span> <span>{{created_at_date}}</span></p>'+
                                            '</div>'+
                                            '<div class="col-md-6 col-sm-6 col-xs-16">'+
                                                '<ul class="descr-button">'+
                                                    '{{#if showDeleteBtn}}'+
                                                    '<li><button type="button" data-id="{{id}}" class="deletePost" data-type="{{postType}}" data-hasworkflowaccess="{{hasWorkflowAccess}}" {{#unless isPost}}data-post="social"{{/unless}}><i class="fa fa-trash"></i><br>Delete</button></li>'+
                                                    '{{/if}}'+
                                                    '{{#if isPost}}'+
                                                    '<li class="selected"><a target="_blank" class="text-center" href="'+ baseHttpPath +'/post/edit/{{id}}"><i class="fa fa-cog"></i><br>Edit</a></li>'+
                                                    '{{/if}}'+
                                                    '<li><a href="{{post_url}}" target="_blank" class="text-center" ><i class="fa fa-arrow-circle-right"></i><br>View</a></li>'+
                                                '</ul>'+
                                            '</div>'+
                                        '</div>'+
                                    '</div>'+
                                '</div></li>'+
                                '{{/each}}';
                                                 
var home_blog_posts = '{{#each this}}'+
                            '{{#ifIsEmpty source}}'+
                            '<div class="posts-grid"><a href="/article/index/{{post_id}}/{{slug}}">'+
                                '<div class="placeholder">'+
                                    '<div class="img-thumbnail"><img src="{{postImage}}" alt="{{title}}" class="oy lazyload img-responsive">'+
                                        '<div class="overlay">'+
                                            '<button type="button" class="btnmove"><i class="fa fa-arrows"></i></button>'+
                                            '<button type="button" class="btnhide"><i class="fa fa-eye-slash"></i>Hide</button>'+
                                            '<button type="button" class="btnhide"><i class="fa fa-heart-o"></i>Feature</button>'+
                                            '<button type="button" class="btnhide"><i class="fa fa-edit"></i>Edit</button>'+
                                        '</div>'+
                                    '</div>'+
                                    '<div class="posts-excerpt">'+
                                        '<h5 class="game-code upper {{sport_nick}}">{{sport_nick}} <span class="time text-right">{{created_at}}</span></h5>'+
                                        '<h4 class="game-title">{{title}}</h4>'+
                                        '<p>{{excerpt}}</p>'+
                                        '<div class="caption">'+
                                            '<div class="admin-circle"><img alt="Avatar" src="{{userThumb}}" class="img-responsive"></div>'+
                                            '<div><p>by <span class="green">{{display_name}}</span></p></div>'+
                                            '<div class="share-post"><span class="hidden-xs hidden-sm">{{shares}} shares</span> <span class="share"><i class="fa fa-share"></i></span></div>'+
                                        '</div>'+
                                    '</div>'+
                                '</div>'+
                            '</a></div>'+
                            '{{else}}'+
                            '<div class="posts-grid social"><a href="#">'+
                                    '<div class="placeholder">'+
                                        '<div class="social-caption">'+
                                            '<div class="admin-circle"><img alt="{{firstname}}" src="{{userThumb}}" class="img-responsive"></div>'+
                                            '<div class="username">{{firstname}}</div>'+
                                            '<div class="author">@{{toLowerCase firstname}}</div>'+
                                            '<span class="time text-right">{{created_at}}</span>'+
                                            '<div class="social-icon-display"><i class="fa fa-{{source}}"></i></div>'+
                                        '</div>'+
                                        '<div class="img-thumbnail"><img src="{{postImage}}" alt="" class="oy lazyload img-responsive"></div>'+
                                        '<div class="posts-excerpt">'+
                                            '<p>{{excerpt}}</p>'+
                                        '</div>'+
                                    '</div>'+
                                '</a></div>'+
                            '{{/ifIsEmpty}}'+
                                '{{/each}}';
                            
var userblogs_connect_sources = '{{#each this}}' +
                                    '<li><a class="add-source" data-id="{{thisBlog blogId}}" data-ref="{{id}}" href="#">' +
                                        '<button class="close" aria-label="Close" type="button" data-id="{{thisBlog blogId}}" data-ref="{{id}}" data-referer="modal-box"><span aria-hidden="true"><i class="fa fa-plus"></i></span></button>'+
                                        '<div class="img-thumbnail"><img src="{{logoImageURL}}" alt="" class="img-responsive"></div>'+
                                        '<div class="description">' +
                                            '<h4>{{title}}</h4>' +
                                            '<p>by {{displayName}}</p>' +
                                       '</div>' +
                                    '</a></li>' +
                                '{{/each}}';
                            
var userblogs_connect_addedSources = '<li><a data-id="{{thisBlog blogId}}" data-ref="{{id}}" href="http://{{url_prefix}}.'+ blogsHostURL  +'">' +
                                        '<button class="close remove-source" aria-label="Close" type="button"  data-id="{{thisBlog blogId}}" data-ref="{{id}}"><span aria-hidden="true"><i class="fa fa-close"></i></span></button>'+
                                        '<div class="img-thumbnail"><img src="{{logoImageURL}}" alt="" class="img-responsive"></div>'+
                                        '<div class="description">' +
                                            '<h4>{{title}}</h4>' +
                                            '<p>by {{display_name}}</p>' +
                                       '</div>' +
                                    '</a></li>';

var home_scores_fetchScores = '{{#each this}} <div class="owl-item" style="width: 300px;">'+
                                    '<div class="item">'+
                                        '<div class="col-md-16 scores-item">'+
                                            '<div class="scores-block-element">'+
                                                '<table class="table">'+
                                                    '<thead>'+
                                                        '<tr class="{{classNick}}">'+
                                                            '<th colspan="3" style="padding-left:0px;padding-right:0px;">'+
                                                            '<table width="100%" cellpadding="0" cellspacing="0">'+
                                                            '<tr><th width="33%">{{sportTitle}} </th>'+
                                                            '<th style="text-align:center;">{{startDate}}</span></th>'+
                                                            '<th width="33%">{{matchStatus}}</th></tr></table></th>'+
                                                        '</tr>'+
                                                    '</thead>'+
                                                    '<tbody>'+
                                                        '<tr>'+
                                                            '<td width="8%"><span class="flag"><img class="lazyload"  src="{{team1Logo}}" width="19"></span></td>'+
                                                            '<td>{{homeSquadName}}</td>'+
                                                            '<td>{{homeSquadScore}}</td>'+
                                                        '</tr>'+
                                                        '<tr>'+
                                                            '<td width="8%"><span class="flag"><img class="lazyload"  src="{{team2Logo}}" width="19"></span></td>'+
                                                            '<td>{{awaySquadName}}</td>'+
                                                            '<td>{{awaySquadScore}}</td>'+
                                                        '</tr>'+
                                                    '</tbody>'+
                                                '</table>'+
                                            '</div>'+
                                        '</div>'+
                                    '</div></div>'+
                                    '{{/each}}';
                                
var home_widget_fixtures = '{{#each this}}'+
                                '<li>'+
                                    '<div class="row">'+
                                        '<div class="col-lt">'+
                                            '<span class="flag"><img src="{{team1FlagImage}}" alt="" class="img-responsive"></span>'+
                                            '<span class="title">{{team1Name}}</span>'+
                                        '</div>'+
                                        '<div class="col-rt">{{dateStr}}</div>'+
                                    '</div>'+
                                    '<div class="row">'+
                                        '<div class="col-lt">'+
                                            '<span class="flag"><img src="{{team2FlagImage}}" alt="" class="img-responsive"></span>'+
                                            '<span class="title">{{team2Name}}</span>'+
                                        '</div>'+
                                        '<div class="col-rt">{{timeStr}}</div>'+
                                    '</div>'+
                                '</li>'+                            
                           '{{/each}}';


var workflow_container = '{{#each this }} ' +
                            '<div class="workflow-container" id="block-grid-{{id}}" data-position="{{level}}" data-workflow="{{workflow_id}}">'+
                                '<div class="workflow-header" data-id="{{id}}" data-blogid="{{blog_id}}">'+
                                    '<div class="holder"><h2>{{title}}</h2>'+
                                        '<span class="workflow-controls">'+
                                            '<a class="link-effect edit-title" href="javascript:;" data-mode="edit" >Edit</a>'+
                                            '{{#if allowDelete}}'+
                                                '<a class="link-effect delete-group" href="javascript:;">Delete</a>'+
                                            '{{/if}}'+
                                         '</span>'+
                                    '</div>'+
                                    '<div class="infotips" data-tooltip="{{title}} Group add or remove members to assign privileges"><span class="fa fa-info-circle"></span></div>'+
                                '</div>'+
                                '<div class="workflow-container-block" id="block-{{id}}" data-id="{{id}}" data-blogid="{{blog_id}}">'+
                                    '{{#each authors}}'+
                                        '<div class="profile-holder" data-id="{{id}}" data-workgroupuserid="{{workflow_group_user_id}}">'+
                                            '<ul>'+
                                                '<li class="profile-holder-lt">'+
                                                    '<span class="thumb-65x65"><img class="img-responsive" alt="{{username}}" src="{{profileImageURL}}"></span>'+
                                                    '<span class="name">{{firstname}} {{lastname}}</span>'+
                                                '</li>'+
                                                '<li class="profile-holder-rt"><a href="javascript:;" class="remove-author"><i class="fa fa-close"></i></a></li>'+
                                            '</ul>'+
                                        '</div>'+
                                    '{{/each}}'+
                                    '<a href="#" class="button block btn-dashed large add-workflow-user" data-modal="#addWorkflowUserModal" data-id="{{id}}">Add Members <i class="fa fa-plus"></i></a>'+
                                '</div>'+
                            '</div>'+
                            '{{#unless @last}}'+
                                '<div class="add-group-block">'+
                                    '<a href="javascript:;" class="button btn-dashed small groupModal" data-position="{{level}}" data-modal="#addWorkflowGroup">Add Group <i class="fa fa-plus"></i></a>'+
                                '</div>'+
                            '{{/unless}}'+
                            '{{/each}}';

                
var workflow_selectbox = '<select id="selectWorkflow" name="SelectWorkflow" class="custom-select" data-blogid="{{thisBlog id}}">' +
                            '<option value="">Select Workflow</option>' +
                            '{{#each this}}' +
                                '<option value="{{id}}">{{title}}</option>' +
                            '{{/each}}' +
                        '</select>';

var user_permissions_workflow = '{{#each this}}' +
                                    '<li><a class="add-author" href="#"  data-workflowid="{{workflow workflow}}" data-id="{{id}}" data-blogid="{{thisBlogId blog}}" data-referer="modal-box">' +
                                        '<button class="close" aria-label="Close" type="button" data-id="{{id}}" data-blogid="{{thisBlogId blog}}"  data-workflowid="{{workflow workflow}}"  data-referer="modal-box"><span aria-hidden="true"><i class="fa fa-plus"></i></span></button>' +
                                        '<div class="img-thumbnail"><img src="{{profileImageURL}}" alt="{{username}}" class="img-responsive"></div>' +
                                        '<div class="description">' +
                                            '<h4>{{firstname}} {{lastname}}</h4>' +
                                            '<p>{{username}}</p>' +
                                        '</div>' +
                                    '</a></li>' +
                                '{{/each}}';

var users_workflow = '<div class="profile-holder" data-id="{{id}}" data-workgroupuserid="{{workflow_group_user_id}}">' +
                        '<ul>' +
                            '<li class="profile-holder-lt">' +
                                '<span class="thumb-65x65"><img class="img-responsive" alt="{{username}}" src="{{profileImageURL}}"></span>' +
                                '<span class="name">{{firstname}} {{lastname}}</span>' +
                            '</li>' +
                            '<li class="profile-holder-rt"><a href="javascript:;" class="remove-author"><i class="fa fa-close"></i></a></li>' +
                        '</ul>' +
                    '</div>';                      
(function($) {
   
    $.fn.GettyImages = function(options){

        var defaults = {
            pageSize: 32,
            currentPage: 1,
            itemRowCount: 4,
            inputObj : $('<input/>'),
            thumbsOuterContainer: $('<div/>'),
            thumbsDisplayContainer: $('<div/>'),
            loadMoreButton: $('<button/>'),
            displayPageNumbersElement: $('<span/>'),
            onSuccess : false,
            onError : false,
            onImageSelect: false
        };
        
        var opts = $.extend( {}, defaults, options );

        return this.each (function(){
            var elem  = $(this);
            var origSearchTerm = '';
            var isLoadMoreImages = false; // check event trigger load more button or not
            
            $(opts.loadMoreButton).click(function(e){
               e.preventDefault();
               
               isLoadMoreImages = true;
               opts.currentPage = opts.currentPage + 1;
               
               $(elem).trigger('submit');
            });
            
            $(elem).submit(function(e){
                e.preventDefault();
                
                var searchPhrase = $(opts.inputObj).val();
                
                if (searchPhrase === '') {
                    $().General_ShowNotification({message: "Please enter the search phrase", type:'error'});
                    return false;
                }
                
                if (origSearchTerm !== searchPhrase) {
                    origSearchTerm = searchPhrase;
                    opts.currentPage = 1;
                    $(opts.thumbsDisplayContainer).empty();
                    $(opts.thumbsOuterContainer).addClass('hide');
                }
                else if(!isLoadMoreImages) {
                    // if event is not load more images and search terms are same so retrun blank;
                    return;
                }
                
                $.ajax({
                    type: 'get',
                    url: baseHttpPath + '/general/search-getty-images',
                    dataType: 'json',
                    data: {s: searchPhrase, limit: opts.pageSize, page: opts.currentPage},
                    success: function(data, textStatus, jqXHR) {
                        
                        if (data.totalImages == 0) {
                            $(opts.thumbsOuterContainer).addClass('hide');
                        }
                        else {
                            
                            $(opts.thumbsOuterContainer).removeClass('hide');
                        
                            $(opts.displayPageNumbersElement).html('Page: ' + data.currentPage + '/' + data.totalPages);

                            var cloneRowObj;
                            var divRowObj = $('<div/>', {
                                'class': 'row has-margin-bottom-20'
                            });

                            var itemCount = 0;

                            for (var imageId in data.images) {

                                if (itemCount == 0) {
                                    cloneRowObj = $(divRowObj).clone();
                                }
                                
                                var imageProperties = data.images[imageId];
                                
                                itemCount++;
                                
                                $('<img/>', {
                                    src: imageProperties.display_sizes['thumb'],
                                    'class': 'img-responsive',
                                    'data-id': imageId,
                                    title: imageProperties.caption,
                                    'data-artist': imageProperties.artist
                                })
                                .appendTo(
                                    $('<a/>', {
                                        href: '#'
                                    })
                                    .appendTo(
                                        $('<div/>', {
                                            'class': 'col-md-4 col-sm-4 col-xs-8'
                                        })
                                        .appendTo(cloneRowObj)
                                    )
                                    .click(function(e){
                                       e.preventDefault();
                                       $(this).addClass('selected');
                                       if (opts.onImageSelect && typeof opts.onImageSelect === 'function') {
                                           var imgObj = $(this).find('img');
                                           var imageProperties = data.images[imgObj.data('id')];
                                           opts.onImageSelect({
                                               'imageId': imgObj.data('id'), 
                                               'imageSrc': imageProperties.display_sizes['thumb'], 
                                               'previewImageSrc': imageProperties.display_sizes['preview'], 
                                               'keywords': imageProperties.keywords, 
                                               'caption': imgObj.attr('title'),
                                               'artist': imgObj.data('artist')
                                           });
                                       }
                                    })
                                );

                                if (itemCount == opts.itemRowCount) {
                                    itemCount = 0;
                                    $(cloneRowObj).appendTo(opts.thumbsDisplayContainer);
                                }
                            }

                            if (itemCount > 0) {
                                itemCount = 0;
                                $(cloneRowObj).appendTo(opts.thumbsDisplayContainer);
                            }
                        }
                        
                        if (opts.onSuccess && typeof opts.onSuccess === 'function') {
                            opts.onSuccess(data, obj);
                        }
                    },
                    error: function(jqXHR, textStatus, errorThrown){
                        if (opts.onError && typeof opts.onError === 'function') {
                            opts.onError(obj, jqXHR.responseText);
                        }
                        else {
                            $().General_ShowErrorMessage({message: jqXHR.responseText});
                        }
                    },
                    beforeSend: function(jqXHR, settings) {
                        $('.loader').removeClass('hide');
                    },
                    complete: function(jqXHR, textStatus) {
                        $('.loader').addClass('hide');
                        isLoadMoreImages = false; // set load more images variables
                    }
                });
                
                return false;
            });
        });
    };    
}(jQuery));
(function($) {
   
    //Hide Show Spinner Icon
    $.fn.General_AddRemoveSpinnerIcon = function(options){
        var defaults = {
        };
        
        var opts = $.extend( {}, defaults, options );
        
        return this.each (function(){
            var elem  = $(this);
            var currentCss = $(this).attr('class');
            if ($(this).hasClass('fa-spinner')) {
                $(this).attr('class', $(this).data('origcss'));
            }
            else { 
                $(this).data('origcss', currentCss);
                $(this).attr('class', 'fa fa-spinner fa-spin');
            }
        });
    };
    
    $.fn.General_AddRemoveAjaxLoader = function (options) {
        // Becomes this.options
        var defaults = {
            bgColor 		: '#dcdcdc',
            duration		: 800,
            opacity			: 0.7,
            classOveride 	: false
        };
        
        this.options 	= $.extend(defaults, options);
        this.container 	= $(this);

        this.init = function() {
            var container = this.container;
            // Delete any other loaders
            this.remove(); 
            // Create the overlay 
            var overlay = $('<div></div>').css({
                    'background-color': this.options.bgColor,
                    'opacity':this.options.opacity,
                    'width':container.width(),
                    'height':container.height(),
                    'position':'absolute',
                    'top':'0px',
                    'left':'0px',
                    'z-index':99999
            }).addClass('ajax_overlay');
            // add an overiding class name to set new loader style 
            if (this.options.classOveride) {
                overlay.addClass(this.options.classOveride);
            }
            // insert overlay and loader into DOM 
            container.append(
                overlay.append(
                    $('<div></div>').addClass('ajax_loader')
                ).fadeIn(this.options.duration)
            );
        };

        this.remove = function(){
            var overlay = this.container.children(".ajax_overlay");
            if (overlay.length) {
                overlay.fadeOut(this.options.classOveride, function() {
                    overlay.remove();
                });
            }	
        };
        
        var overlay = this.container.children(".ajax_overlay");
        if (overlay.length) {
            this.remove();
        }
        else {
            this.init();
        }
    };
    
    //Show Error Message
    $.fn.General_ShowErrorMessage = function (options) {
        var defaults = {
            message: '',
            type: 'error',
            timeout: 2000,
            title: 'Error'
        };
        
        var opts = $.extend( {}, defaults, options );
        
        if (opts.message  == '') {
            return;
        }
        
        bootbox.alert({
            title: opts.title,
            message: opts.message
        });
    };
    
    //Noty Message
    $.fn.General_ShowNotification = function (options) {
        var defaults = {
            message: '',
            type: 'success',
            timeout: 2000
        };
        
        var opts = $.extend( {}, defaults, options );
        
        $.noty.closeAll();  //close all before displaying
        
        if($('#noty_topRight_layout_container').length > 0) {
            $('#noty_topRight_layout_container').remove();
        }
        
        var n = noty({
            type: opts.type,
            text: opts.message,
            layout: 'topRight',
            timeout: opts.timeout,
            animation: {
                open: 'animated bounceInRight', // jQuery animate function property object
                close: 'animated bounceOutRight', // jQuery animate function property object
                easing: 'swing', // easing
                speed: 500 // opening & closing animation speed
            }
        });
    };
    
    $.fn.deleteBlog = function(options){

        var defaults = {
            'onSuccess' : function(){},
            'onError' : function(){},
            'beforeSend' : function(){},
            'onComplete' : function(){}
        };
        var opts = $.extend( {}, defaults, options );

        return this.each (function(){
            var elem  = $(this);
            $(elem).click(function(e){
                e.preventDefault();

                var blogId = parseInt($(this).data('id'));
                var obj = $(this);

                bootbox.confirm({
                    title: "Confirm",
                    message: "Do You really want to delete this blog?",
                    callback: function(result) {
                        if (result === true) {
                            $.ajax({
                                type: 'POST',
                                url: baseHttpPath + '/user/delete-blog',
                                dataType: 'json',
                                data: {id: blogId, _csrf: $('meta[name="csrf-token"]').attr("content")},
                                success: function(data, textStatus, jqXHR) {
                                    if (opts.onSuccess && typeof opts.onSuccess === 'function') {
                                        opts.onSuccess(data, obj);
                                    }
                                },
                                error: function(jqXHR, textStatus, errorThrown){
                                    if (opts.onError && typeof opts.onError === 'function') {
                                        opts.onError(obj, jqXHR.responseText);
                                    }
                                },
                                beforeSend: function(jqXHR, settings) { 
                                    if (opts.beforeSend && typeof opts.beforeSend === 'function') {
                                        opts.beforeSend(obj);
                                    }
                                },
                                complete: function(jqXHR, textStatus) {
                                    if (opts.onComplete && typeof opts.onComplete === 'function') {
                                        opts.onComplete(obj);
                                    }
                                }
                            }); //end ajax
                        }
                    }   //end callback
                });
                
            });
        });
    };
}(jQuery));
(function($) {
   
    $.fn.followCode = function(options){

        var defaults = {
            'onSuccess' : function(){},
            'onError' : function(){},
            'beforeSend' : function(){},
            'onComplete' : function(){}
        };
        var opts = $.extend( {}, defaults, options );

        return this.each (function(){
            var elem  = $(this);
            $(elem).click(function(e){
                e.preventDefault();

                var sportId = parseInt($(this).data('id'));
                var status = $(this).data('status');
                var obj = $(this);

                if (status === 'unfollow') {
//                    bootbox.confirm({
//                        title: "Confirm",
//                        message: "Do you really want to unfollow this code?",
//                        callback: function(result) {
//                            if (result) {
                                $.ajax({
                                    type: 'POST',
                                    url: baseHttpPath + '/user/follow-code',
                                    dataType: 'json',
                                    data: {id: sportId, status: 'unfollow', _csrf: yii.getCsrfToken()},
                                    success: function(data, textStatus, jqXHR) {
                                        $(obj).data('status', 'follow');
                                        if (opts.onSuccess && typeof opts.onSuccess === 'function') {
                                            opts.onSuccess(data, obj);
                                        }
                                    },
                                    error: function(jqXHR, textStatus, errorThrown){
                                        if (opts.onError && typeof opts.onError === 'function') {
                                            opts.onError(obj, jqXHR.responseText);
                                        }
                                    },
                                    beforeSend: function(jqXHR, settings) { 
                                        if (opts.beforeSend && typeof opts.beforeSend === 'function') {
                                            opts.beforeSend(obj);
                                        }
                                    },
                                    complete: function(jqXHR, textStatus) {
                                        if (opts.onComplete && typeof opts.onComplete === 'function') {
                                            opts.onComplete(obj);
                                        }
                                    }
                                });
//                            }
//                        }
//                    });
                }
                else if (status === 'follow') {
                    $.ajax({
                        type: 'POST',
                        url: baseHttpPath + '/user/follow-code',
                        dataType: 'json',
                        data: {id: sportId, status: 'follow', _csrf: yii.getCsrfToken()},
                        success: function(data, textStatus, jqXHR) {
                            $(obj).data('status', 'unfollow');
                            if (opts.onSuccess && typeof opts.onSuccess === 'function') {
                                opts.onSuccess(data, obj);
                            }
                        },
                        error: function(jqXHR, textStatus, errorThrown){
                            if (opts.onError && typeof opts.onError === 'function') {
                                opts.onError(obj, jqXHR.responseText);
                            }
                        },
                        beforeSend: function(jqXHR, settings) { 
                            if (opts.beforeSend && typeof opts.beforeSend === 'function') {
                                opts.beforeSend(obj);
                            }
                        },
                        complete: function(jqXHR, textStatus) {
                            if (opts.onComplete && typeof opts.onComplete === 'function') {
                                opts.onComplete(obj);
                            }
                        }
                    });
                }
            });
        });
    };

    //Follow/Unfollow a club or Blog
    $.fn.followBlog = function(options){

        var defaults = {
            'onSuccess' : function(){},
            'onError' : function(){},
            'beforeSend' : function(){},
            'onComplete' : function(){}
        };
        var opts = $.extend( {}, defaults, options );

        return this.each (function(){
            var elem  = $(this);
            $(elem).click(function(e){
                e.preventDefault();

                var blogId = parseInt($(this).data('id'));
                var status = $(this).data('status');
                var obj = $(this);

                if (status === 'unfollow') {
//                    bootbox.confirm({
//                        title: "Confirm",
//                        message: "Do you really want to unfollow this blog?",
//                        callback: function(result) {
//                            if (result) {
                                $.ajax({
                                    type: 'POST',
                                    url: baseHttpPath + '/user/follow-blog',
                                    dataType: 'json',
                                    data: {id: blogId, status: 'unfollow', _csrf: yii.getCsrfToken()},
                                    success: function(data, textStatus, jqXHR) {
                                        $(obj).data('status', 'follow');
                                        if (opts.onSuccess && typeof opts.onSuccess === 'function') {
                                            opts.onSuccess(data, obj);
                                        }
                                    },
                                    error: function(jqXHR, textStatus, errorThrown){
                                        if (opts.onError && typeof opts.onError === 'function') {
                                            opts.onError(obj, jqXHR.responseText);
                                        }
                                    },
                                    beforeSend: function(jqXHR, settings) { 
                                        if (opts.beforeSend && typeof opts.beforeSend === 'function') {
                                            opts.beforeSend(obj);
                                        }
                                    },
                                    complete: function(jqXHR, textStatus) {
                                        if (opts.onComplete && typeof opts.onComplete === 'function') {
                                            opts.onComplete(obj);
                                        }
                                    }
                                });
//                            }
//                        }
//                    });
                }
                else if (status === 'follow') {
                    $.ajax({
                        type: 'POST',
                        url: baseHttpPath + '/user/follow-blog',
                        dataType: 'json',
                        data: {id: blogId, status: 'follow', _csrf: yii.getCsrfToken()},
                        success: function(data, textStatus, jqXHR) {
                            $(obj).data('status', 'unfollow');
                            if (opts.onSuccess && typeof opts.onSuccess === 'function') {
                                opts.onSuccess(data, obj);
                            }
                        },
                        error: function(jqXHR, textStatus, errorThrown){
                            if (opts.onError && typeof opts.onError === 'function') {
                                opts.onError(obj, jqXHR.responseText);
                            }
                        },
                        beforeSend: function(jqXHR, settings) { 
                            if (opts.beforeSend && typeof opts.beforeSend === 'function') {
                                opts.beforeSend(obj);
                            }
                        },
                        complete: function(jqXHR, textStatus) {
                            if (opts.onComplete && typeof opts.onComplete === 'function') {
                                opts.onComplete(obj);
                            }
                        }
                    });
                }
            });
        });

    };

    //Follow/Unfollow a writer
    $.fn.followWriter = function(options){

        var defaults = {
            'onSuccess' : function(){},
            'onError' : function(){},
            'beforeSend' : function(){},
            'onComplete' : function(){}
        };
        var opts = $.extend( {}, defaults, options );

        return this.each (function(){
            var elem  = $(this);
            $(elem).click(function(e){
                e.preventDefault();

                var writerId = parseInt($(this).data('id'));
                var status = $(this).data('status');
                var obj = $(this);

                if (status === 'unfollow') {
//                    bootbox.confirm({
//                        title: "Confirm",
//                        message: "Do you really want to unfollow this writer?",
//                        callback: function(result) {
//                            if (result) {
                                $.ajax({
                                    type: 'POST',
                                    url: baseHttpPath + '/user/follow-writer',
                                    dataType: 'json',
                                    data: {id: writerId, status: 'unfollow', _csrf: yii.getCsrfToken()},
                                    success: function(data, textStatus, jqXHR) {
                                        $(obj).data('status', 'follow');
                                        if (opts.onSuccess && typeof opts.onSuccess === 'function') {
                                            opts.onSuccess(data, obj);
                                        }
                                    },
                                    error: function(jqXHR, textStatus, errorThrown){
                                        if (opts.onError && typeof opts.onError === 'function') {
                                            opts.onError(obj, jqXHR.responseText);
                                        }
                                    },
                                    beforeSend: function(jqXHR, settings) { 
                                        if (opts.beforeSend && typeof opts.beforeSend === 'function') {
                                            opts.beforeSend(obj);
                                        }
                                    },
                                    complete: function(jqXHR, textStatus) {
                                        if (opts.onComplete && typeof opts.onComplete === 'function') {
                                            opts.onComplete(obj);
                                        }
                                    }
                                });
//                            }
//                        }
//                    });
                }
                else if (status === 'follow') {
                    $.ajax({
                        type: 'POST',
                        url: baseHttpPath + '/user/follow-writer',
                        dataType: 'json',
                        data: {id: writerId, status: 'follow', _csrf: yii.getCsrfToken()},
                        success: function(data, textStatus, jqXHR) {
                            $(obj).data('status', 'unfollow');
                            if (opts.onSuccess && typeof opts.onSuccess === 'function') {
                                opts.onSuccess(data, obj);
                            }
                        },
                        error: function(jqXHR, textStatus, errorThrown){
                            if (opts.onError && typeof opts.onError === 'function') {
                                opts.onError(obj, jqXHR.responseText);
                            }
                        },
                        beforeSend: function(jqXHR, settings) { 
                            if (opts.beforeSend && typeof opts.beforeSend === 'function') {
                                opts.beforeSend(obj);
                            }
                        },
                        complete: function(jqXHR, textStatus) {
                            if (opts.onComplete && typeof opts.onComplete === 'function') {
                                opts.onComplete(obj);
                            }
                        }
                    });
                }
            });
        });
    };
    
    
    //Follow/Unfollow a Post
    $.fn.followPost = function(options){

        var defaults = {
            'onSuccess' : function(){},
            'onError' : function(){},
            'beforeSend' : function(){},
            'onComplete' : function(){}
        };
        var opts = $.extend( {}, defaults, options );

        return this.each (function(){
            var elem  = $(this);
            $(elem).click(function(e){
                e.preventDefault();

                var blogId = parseInt($(this).data('id'));
                var status = $(this).data('status');
                var obj = $(this);

                if (status === 'unfollow') {
//                    bootbox.confirm({
//                        title: "Confirm",
//                        message: "Do you really want to unfollow this blog?",
//                        callback: function(result) {
//                            if (result) {
                                $.ajax({
                                    type: 'POST',
                                    url: baseHttpPath + '/user/follow-post',
                                    dataType: 'json',
                                    data: {id: blogId, status: 'unfollow', _csrf: yii.getCsrfToken()},
                                    success: function(data, textStatus, jqXHR) {
                                        $(obj).data('status', 'follow');
                                        if (opts.onSuccess && typeof opts.onSuccess === 'function') {
                                            opts.onSuccess(data, obj);
                                        }
                                    },
                                    error: function(jqXHR, textStatus, errorThrown){
                                        if (opts.onError && typeof opts.onError === 'function') {
                                            opts.onError(obj, jqXHR.responseText);
                                        }
                                    },
                                    beforeSend: function(jqXHR, settings) { 
                                        if (opts.beforeSend && typeof opts.beforeSend === 'function') {
                                            opts.beforeSend(obj);
                                        }
                                    },
                                    complete: function(jqXHR, textStatus) {
                                        if (opts.onComplete && typeof opts.onComplete === 'function') {
                                            opts.onComplete(obj);
                                        }
                                    }
                                });
//                            }
//                        }
//                    });
                }
                else if (status === 'follow') {
                    $.ajax({
                        type: 'POST',
                        url: baseHttpPath + '/user/follow-post',
                        dataType: 'json',
                        data: {id: blogId, status: 'follow', _csrf: yii.getCsrfToken()},
                        success: function(data, textStatus, jqXHR) {
                            $(obj).data('status', 'unfollow');
                            if (opts.onSuccess && typeof opts.onSuccess === 'function') {
                                opts.onSuccess(data, obj);
                            }
                        },
                        error: function(jqXHR, textStatus, errorThrown){
                            if (opts.onError && typeof opts.onError === 'function') {
                                opts.onError(obj, jqXHR.responseText);
                            }
                        },
                        beforeSend: function(jqXHR, settings) { 
                            if (opts.beforeSend && typeof opts.beforeSend === 'function') {
                                opts.beforeSend(obj);
                            }
                        },
                        complete: function(jqXHR, textStatus) {
                            if (opts.onComplete && typeof opts.onComplete === 'function') {
                                opts.onComplete(obj);
                            }
                        }
                    });
                }
            });
        });

    };

}(jQuery));
(function($) {
   
    $.fn.SearchBlogs = function(options){

        var defaults = {
            isClub : false,
            currentPage: 1,
            followButton: '</button>',
            inputObj : $('<input/>'),
            searchItemsOuterContainer: $('<div/>'),
            searchItemsContainer: $('<div/>'),
            loadMoreButton: $('<button/>'),
            displayPageNumbersElement: $('<span/>'),
            searchButton: $('<button/>'),
            onSuccess : false,
            onError : false
        };
        
        var opts = $.extend( {}, defaults, options );

        return this.each (function(){
            var elem  = $(this);
            var origSearchTerm = '';
            
            $(opts.loadMoreButton).click(function(e){
               e.preventDefault();
               opts.currentPage = opts.currentPage + 1;
               
               $(elem).trigger('submit');
            });
            
            $(opts.searchButton).click(function(e){
               e.preventDefault();
               opts.currentPage = 1;
               
               $(elem).trigger('submit');
            });
            
            $(elem).submit(function(e){
                e.preventDefault();
                
                var searchPhrase = $(opts.inputObj).val();
                
                if (searchPhrase === '') {
                    $().General_ShowNotification({'message': 'Please enter the search term'});
                    return false;
                }
                
                if (origSearchTerm !== searchPhrase) {
                    origSearchTerm = searchPhrase;
                    opts.currentPage = 1;
                }
                
                var searchUrl = baseHttpPath + '/search/blogs';
                if(opts.isClub){
                    searchUrl = baseHttpPath + '/search/clubs';
                }
                
                $.ajax({
                    type: 'post',
                    url: searchUrl,
                    dataType: 'json',
                    data: {search: searchPhrase, page: opts.currentPage,  _csrf : yii.getCsrfToken()},
                    success: function(data, textStatus, jqXHR) {
                        
                        $(opts.searchItemsOuterContainer).removeClass('hide');
                        
                        if (data.totalRecords == 0) {
                            $(opts.searchItemsContainer).html('<p class="no-data">No blogs found for '+searchPhrase+'.</p>');
                            $(opts.loadMoreButton).addClass('hide');
                            $(opts.displayPageNumbersElement).addClass('hide');
                        }
                        else {
                            var prevRecords = $(opts.searchItemsContainer).find(opts.followButton).length;
                            
                            $(opts.displayPageNumbersElement).removeClass('hide');
                            $(opts.displayPageNumbersElement).html('Page: ' + data.currentPage + '/' + data.totalPages);

                            if(prevRecords <= 0 || opts.currentPage <= 1){
                                $(opts.searchItemsContainer).html(data.html);
                            }
                            else{
                                $(data.html).appendTo(opts.searchItemsContainer);
                            }
                            
                            $(opts.loadMoreButton).removeClass('hide');
                            
                            if(data.currentPage >= data.totalPages){
                                $(opts.loadMoreButton).addClass('hide');
                            }
                            
                        }
                                                
                        if (opts.onSuccess && typeof opts.onSuccess === 'function') {
                            opts.onSuccess(data);
                        }
                    },
                    error: function(jqXHR, textStatus, errorThrown){
                        if (opts.onError && typeof opts.onError === 'function') {
                            opts.onError(jqXHR.responseText);
                        }
                        else {
                            $().General_ShowErrorMessage({message: jqXHR.responseText});
                        }
                    },
                    beforeSend: function(jqXHR, settings) {
                        $('.loader').removeClass('hide');
                    },
                    complete: function(jqXHR, textStatus) {
                        $('.loader').addClass('hide');
                    }
                });
                
                return false;
            });
        });
    }; 
    
    $.fn.SearchUsers = function(options){

        var defaults = {
            currentPage: 1,
            followButton: '</button>',
            inputObj : $('<input/>'),
            searchItemsOuterContainer: $('<div/>'),
            searchItemsContainer: $('<div/>'),
            loadMoreButton: $('<button/>'),
            displayPageNumbersElement: $('<span/>'),
            searchButton: $('<button/>'),
            onSuccess : false,
            onError : false
        };
        
        var opts = $.extend( {}, defaults, options );

        return this.each (function(){
            var elem  = $(this);
            var origSearchTerm = '';
            
            $(opts.loadMoreButton).click(function(e){
               e.preventDefault();
               opts.currentPage = opts.currentPage + 1;
               
               $(elem).trigger('submit');
            });
            
            $(opts.searchButton).click(function(e){
               e.preventDefault();
               opts.currentPage = 1;
               
               $(elem).trigger('submit');
            });
            
            $(elem).submit(function(e){
                e.preventDefault();
                
                var searchPhrase = $(opts.inputObj).val();
                
                if (searchPhrase === '') {
                    $().General_ShowNotification({'message': 'Please enter the search term'});
                    return false;
                }
                
                if (origSearchTerm !== searchPhrase) {
                    origSearchTerm = searchPhrase;
                    opts.currentPage = 1;
                }
                
                $.ajax({
                    type: 'post',
                    url: baseHttpPath + '/search/users',
                    dataType: 'json',
                    data: {search: searchPhrase, page: opts.currentPage,  _csrf : yii.getCsrfToken()},
                    success: function(data, textStatus, jqXHR) {
                        
                        $(opts.searchItemsOuterContainer).removeClass('hide');
                        
                        if (data.totalRecords == 0) {
                            $(opts.searchItemsContainer).html('<p class="no-data">No users found for '+searchPhrase+'.</p>');
                            $(opts.loadMoreButton).addClass('hide');
                            $(opts.displayPageNumbersElement).addClass('hide');
                        }
                        else {
                            var prevRecords = $(opts.searchItemsContainer).find(opts.followButton).length;
                            
                            $(opts.displayPageNumbersElement).removeClass('hide');
                            $(opts.displayPageNumbersElement).html('Page: ' + data.currentPage + '/' + data.totalPages);

                            if(prevRecords <= 0 || opts.currentPage <= 1){
                                $(opts.searchItemsContainer).html(data.html);
                            }
                            else{
                                $(data.html).appendTo(opts.searchItemsContainer);
                            }
                            
                            $(opts.loadMoreButton).removeClass('hide');
                            
                            if(data.currentPage >= data.totalPages){
                                $(opts.loadMoreButton).addClass('hide');
                            }
                            
                        }
                                                
                        if (opts.onSuccess && typeof opts.onSuccess === 'function') {
                            opts.onSuccess(data);
                        }
                    },
                    error: function(jqXHR, textStatus, errorThrown){
                        if (opts.onError && typeof opts.onError === 'function') {
                            opts.onError(jqXHR.responseText);
                        }
                        else {
                            $().General_ShowErrorMessage({message: jqXHR.responseText});
                        }
                    },
                    beforeSend: function(jqXHR, settings) {
                        $('.loader').removeClass('hide');
                    },
                    complete: function(jqXHR, textStatus) {
                        $('.loader').addClass('hide');
                    }
                });
                
                return false;
            });
        });
    };    
    
    $.fn.SearchYoutube = function(options){

        var defaults = {
            nextPageToken: '',
            modalContainer: $('#ModalYoutube'),
            inputObj : $('#SearchYoutubeVideos input.SearchYoutubeInput'),
            searchItemsOuterContainer: $('div.YoutubeVideosOuterContainer'),
            searchItemsContainer: $('ul.YoutubeVideosListContainer'),
            loadMoreButton: $('button.YoutubeLoadMore'),
            searchButton: $('#SearchYoutubeVideos button.SearchYoutubeBtn'),
            onSuccess : false,
            onError : false
        };
        
        var opts = $.extend( {}, defaults, options );

        return this.each (function(){
            var elem  = $(this);
            var origSearchTerm = '';
            
            $(opts.loadMoreButton).click(function(e){
               e.preventDefault();
               if($(this).data('next-page-token')){
                    opts.nextPageToken = $(this).data('next-page-token');
               }
               $(elem).trigger('submit');
            });
            
            $(opts.searchButton).click(function(e){
               e.preventDefault();
               opts.nextPageToken = '';
               
               $(elem).trigger('submit');
            });
            
            $(elem).submit(function(e){
                e.preventDefault();
                
                var searchPhrase = $(opts.inputObj).val();
                
                if (searchPhrase === '') {
                    $().General_ShowNotification({'message': 'Please enter the search term', type: 'error'});
                    return false;
                }
                
                if (origSearchTerm !== searchPhrase) {
                    origSearchTerm = searchPhrase;
                    opts.nextPageToken = '';
                    $(opts.searchItemsContainer).html('');
                    $(opts.loadMoreButton).addClass('hide');
                }
                
                var source   = $("#youtube-search-item-template").html();
                var template = Handlebars.compile(source);
                
                $.ajax({
                    type: 'post',
                    url: baseHttpPath + '/search/youtube',
                    dataType: 'json',
                    data: {search: searchPhrase, nextPageToken: opts.nextPageToken,  _csrf : yii.getCsrfToken()},
                    success: function(data, textStatus, jqXHR) {
                        $(opts.searchItemsOuterContainer).removeClass('hide');
                        
                        if(data.videos.length > 0){
                            var prevRecords = $(opts.searchItemsContainer).find('li').length;
                            if(prevRecords <= 0 || opts.nextPageToken === ''){
                                $(opts.searchItemsContainer).html('');
                            }
                            for(var indx in data.videos){
                                var item = {
                                    videoId: data.videos[indx].id,
                                    imgSrc: data.videos[indx].thumbnail,
                                    title: data.videos[indx].title,
                                    description: data.videos[indx].description,
                                    largeImage: data.videos[indx].image
                                };
                                
                                var itemHtml = template(item);
                                $(itemHtml).appendTo(opts.searchItemsContainer);
                            }
                            
                            if(data.nextPageToken === ''){
                                $(opts.loadMoreButton).addClass('hide');
                                $(opts.loadMoreButton).data('next-page-token', '');
                            }
                            else{
                                $(opts.loadMoreButton).removeClass('hide');
                                $(opts.loadMoreButton).data('next-page-token', data.nextPageToken);
                            }
                        }
                        else{
                            $(opts.searchItemsContainer).html('<p class="no-data">No videos found.</p>');
                            $(opts.loadMoreButton).addClass('hide');
                        }
                        
                        if (opts.onSuccess && typeof opts.onSuccess === 'function') {
                            opts.onSuccess(data);
                        }
                    },
                    error: function(jqXHR, textStatus, errorThrown){
                        if (opts.onError && typeof opts.onError === 'function') {
                            opts.onError(jqXHR.responseText);
                        }
                        else {
                            $().General_ShowErrorMessage({message: jqXHR.responseText, type: 'error'});
                        }
                    },
                    beforeSend: function(jqXHR, settings) {
                        $('.loader', opts.modalContainer).removeClass('hide');
                    },
                    complete: function(jqXHR, textStatus) {
                        $('.loader', opts.modalContainer).addClass('hide');
                    }
                });
                
                return false;
            });
        });
    };    
    
    $.fn.SearchInstagram = function(options){

        var defaults = {
            minId: '',
            modalContainer: $('#ModalInstagram'),
            inputObj : $('#SearchInstagramForm input.SearchInstagramInput'),
            searchItemsOuterContainer: $('div.InstagramOuterContainer'),
            searchItemsContainer: $('ul.InstagramListContainer'),
            loadMoreButton: $('button.InstagramLoadMore'),
            searchButton: $('#SearchInstagramForm button.SearchInstagramBtn'),
            onSuccess : false,
            onError : false
        };
        
        var opts = $.extend( {}, defaults, options );

        return this.each (function(){
            var elem  = $(this);
            var origSearchTerm = '';
            
            $(opts.loadMoreButton).click(function(e){
               e.preventDefault();
               if($(this).data('min-id')){
                    opts.minId = $(this).data('min-id');
               }
               $(elem).trigger('submit');
            });
            
            $(opts.searchButton).click(function(e){
               e.preventDefault();
               opts.maxId = '';
               
               $(elem).trigger('submit');
            });
            
            $(elem).submit(function(e){
                e.preventDefault();
                
                var searchPhrase = $(opts.inputObj).val();
                
                if (searchPhrase === '') {
                    $().General_ShowNotification({'message': 'Please enter the search term', type: 'error'});
                    return false;
                }
                
                if (origSearchTerm !== searchPhrase) {
                    origSearchTerm = searchPhrase;
                    opts.maxId = '';
                    $(opts.searchItemsContainer).html('');
                    $(opts.loadMoreButton).addClass('hide');
                }
                
                var templateSource   = $("#instagram-search-item-template").html();
                var template = Handlebars.compile(templateSource);
                
                $.ajax({
                    type: 'post',
                    url: baseHttpPath + '/search/instagram',
                    dataType: 'json',
                    data: {search: searchPhrase, minId: opts.minId, _csrf: yii.getCsrfToken()},
                    success: function(data, textStatus, jqXHR) {
                        
                        $(opts.searchItemsOuterContainer).removeClass('hide');
                        var prevRecords = $(opts.searchItemsContainer).find('li').length;
                        
                        if(data.media.length > 0){
                            
                            if(prevRecords <= 0 && opts.minId === ''){
                                $(opts.searchItemsContainer).html('');
                            }
                            for(var indx in data.media){
                                var item = {
                                    thumbnail: data.media[indx].userImage,
                                    postedTime: data.media[indx].createdAt,
                                    userName: data.media[indx].userName,
                                    screenName: data.media[indx].userScreenName,
                                    description: data.media[indx].text,
                                    id: data.media[indx].id,
                                    link: data.media[indx].link
                                };
                                
                                var itemHtml = template(item);
                                $(itemHtml).appendTo(opts.searchItemsContainer);
                            }
                            
                            if(data.min_tag_id === ''){
                                $(opts.loadMoreButton).addClass('hide').data('min-id', '');
                            }
                            else{
                                $(opts.loadMoreButton).removeClass('hide').data('min-id', data.min_tag_id);
                            }
                        }
                        else{
                            if (prevRecords <= 0) {
                                $(opts.searchItemsContainer).html('<p class="no-data">No records found.</p>');
                            }
                            $(opts.loadMoreButton).addClass('hide');
                        }
                        
                        if (opts.onSuccess && typeof opts.onSuccess === 'function') {
                            opts.onSuccess(data);
                        }
                    },
                    error: function(jqXHR, textStatus, errorThrown){
                        if (opts.onError && typeof opts.onError === 'function') {
                            opts.onError(jqXHR.responseText);
                        }
                        else {
                            $().General_ShowErrorMessage({message: jqXHR.responseText, 'type': 'error'});
                        }
                    },
                    beforeSend: function(jqXHR, settings) {
                        $('.loader', opts.modalContainer).removeClass('hide');
                    },
                    complete: function(jqXHR, textStatus) {
                        $('.loader', opts.modalContainer).addClass('hide');
                    }
                });
                
                return false;
            });
        });
    };
    
    $.fn.SearchTwitter = function(options){

        var defaults = {
            maxId: '',
            modalContainer: $('#ModalTwitterInternal'),
            inputObj : $('#SearchTwitterForm input.SearchTwitterInput'),
            searchItemsOuterContainer: $('div.TwitterOuterContainer'),
            searchItemsContainer: $('ul.TwitterListContainer'),
            loadMoreButton: $('button.TwitterLoadMore'),
            searchButton: $('#SearchTwitterForm button.SearchTwitterBtn'),
            onSuccess : false,
            onError : false
        };
        
        var opts = $.extend( {}, defaults, options );

        return this.each (function(){
            var elem  = $(this);
            var origSearchTerm = '';
            
            $(opts.loadMoreButton).click(function(e){
               e.preventDefault();
               if($(this).data('max-id')){
                    opts.maxId = $(this).data('max-id');
               }
               $(elem).trigger('submit');
            });
            
            $(opts.searchButton).click(function(e){
               e.preventDefault();
               opts.maxId = '';
               
               $(elem).trigger('submit');
            });
            
            $(elem).submit(function(e){
                e.preventDefault();
                
                var searchPhrase = $(opts.inputObj).val();
                
                if (searchPhrase === '') {
                    $().General_ShowNotification({'message': 'Please enter the search term', type: 'error'});
                    return false;
                }
                
                if (origSearchTerm !== searchPhrase) {
                    origSearchTerm = searchPhrase;
                    opts.maxId = '';
                    $(opts.searchItemsContainer).html('');
                    $(opts.loadMoreButton).addClass('hide');
                }
                
                var templateSource   = $("#search-tweet-item-template").html();
                var template = Handlebars.compile(templateSource);
                
                $.ajax({
                    type: 'post',
                    url: baseHttpPath + '/search/twitter',
                    dataType: 'json',
                    data: {search: searchPhrase, maxId: opts.maxId, _csrf: yii.getCsrfToken()},
                    success: function(data, textStatus, jqXHR) {
                        $(opts.searchItemsOuterContainer).removeClass('hide');
                        
                        if(data.tweets.length > 0){
                            var prevRecords = $(opts.searchItemsContainer).find('li').length;
                            if(prevRecords <= 0 || opts.maxId === ''){
                                $(opts.searchItemsContainer).html('');
                            }
                            for(var indx in data.tweets){
                                var item = {
                                    thumbnail: data.tweets[indx].userImage,
                                    postedTime: data.tweets[indx].createdAt,
                                    userName: data.tweets[indx].userName,
                                    screenName: data.tweets[indx].userScreenName,
                                    description: data.tweets[indx].text,
                                    id: data.tweets[indx].id
                                };
                                
                                var itemHtml = template(item);
                                $(itemHtml).appendTo(opts.searchItemsContainer);
                            }
                            
                            if(data.maxId === ''){
                                $(opts.loadMoreButton).addClass('hide').data('max-id', '');
                            }
                            else{
                                $(opts.loadMoreButton).removeClass('hide').data('max-id', data.maxId);
                            }
                        }
                        else{
                            $(opts.searchItemsContainer).html('<p class="no-data">No tweets found.</p>');
                            $(opts.loadMoreButton).addClass('hide');
                        }
                        
                        if (opts.onSuccess && typeof opts.onSuccess === 'function') {
                            opts.onSuccess(data);
                        }
                    },
                    error: function(jqXHR, textStatus, errorThrown){
                        if (opts.onError && typeof opts.onError === 'function') {
                            opts.onError(jqXHR.responseText);
                        }
                        else {
                            $().General_ShowErrorMessage({message: jqXHR.responseText, 'type': 'error'});
                        }
                    },
                    beforeSend: function(jqXHR, settings) {
                        $('.loader', opts.modalContainer).removeClass('hide');
                    },
                    complete: function(jqXHR, textStatus) {
                        $('.loader', opts.modalContainer).addClass('hide');
                    }
                });
                
                return false;
            });
        });
    };
    
    // Search Vimeo Videos
    $.fn.SearchVimeo = function(options){

        var defaults = {
            nextPageToken: '',
            modalContainer: $('#ModalVimeo'),
            inputObj : $('#SearchVimeoVideos input.SearchVimeoInput'),
            searchItemsOuterContainer: $('div.VimeoVideosOuterContainer'),
            searchItemsContainer: $('ul.VimeoVideosListContainer'),
            loadMoreButton: $('button.VimeoLoadMore'),
            searchButton: $('#SearchVimeoVideos button.SearchVimeoBtn'),
            onSuccess : false,
            onError : false
        };
        
        var opts = $.extend( {}, defaults, options );

        return this.each (function(){
            var elem  = $(this);
            var origSearchTerm = '';
            
            $(opts.loadMoreButton).click(function(e){
               e.preventDefault();
               if($(this).data('next-page-token')){
                    opts.nextPageToken = $(this).data('next-page-token');
               }
               $(elem).trigger('submit');
            });
            
            $(opts.searchButton).click(function(e){
               e.preventDefault();
               opts.nextPageToken = '';
               
               $(elem).trigger('submit');
            });
            
            $(elem).submit(function(e){
                e.preventDefault();
                
                var searchPhrase = $(opts.inputObj).val();
                
                if (searchPhrase === '') {
                    $().General_ShowNotification({'message': 'Please enter the search term', type: 'error'});
                    return false;
                }
                
                if (origSearchTerm !== searchPhrase) {
                    origSearchTerm = searchPhrase;
                    opts.nextPageToken = '';
                    $(opts.searchItemsContainer).html('');
                    $(opts.loadMoreButton).addClass('hide');
                    $(opts.searchItemsOuterContainer).addClass('hide');
                }
                
                var source   = $("#vimeo-search-item-template").html();
                var template = Handlebars.compile(source);
                
                $.ajax({
                    type: 'post',
                    url: baseHttpPath + '/search/vimeo',
                    dataType: 'json',
                    data: {search: searchPhrase, nextPageToken: opts.nextPageToken,  _csrf : yii.getCsrfToken()},
                    success: function(data, textStatus, jqXHR) {
                        $(opts.searchItemsOuterContainer).removeClass('hide');
                        
                        if(data.videos.length > 0){
                            var prevRecords = $(opts.searchItemsContainer).find('li').length;
                            if(prevRecords <= 0 || opts.nextPageToken === ''){
                                $(opts.searchItemsContainer).html('');
                            }
                            for(var indx in data.videos){
                                var item = {
                                    videoId: data.videos[indx].id,
                                    imgSrc: data.videos[indx].thumbnail,
                                    title: data.videos[indx].title,
                                    description: data.videos[indx].description,
                                    largeImage: data.videos[indx].image
                                };
                                
                                var itemHtml = template(item);
                                $(itemHtml).appendTo(opts.searchItemsContainer);
                            }
                            
                            if(data.nextPageToken === ''){
                                $(opts.loadMoreButton).addClass('hide');
                                $(opts.loadMoreButton).data('next-page-token', '');
                            }
                            else{
                                $(opts.loadMoreButton).removeClass('hide');
                                $(opts.loadMoreButton).data('next-page-token', data.nextPageToken);
                            }
                        }
                        else{
                            $(opts.searchItemsContainer).html('<p class="no-data">No videos found.</p>');
                            $(opts.loadMoreButton).addClass('hide');
                        }
                        
                        if (opts.onSuccess && typeof opts.onSuccess === 'function') {
                            opts.onSuccess(data);
                        }
                    },
                    error: function(jqXHR, textStatus, errorThrown){
                        if (opts.onError && typeof opts.onError === 'function') {
                            opts.onError(jqXHR.responseText);
                        }
                        else {
                            $().General_ShowErrorMessage({message: jqXHR.responseText, type: 'error'});
                        }
                    },
                    beforeSend: function(jqXHR, settings) {
                        $('.loader', opts.modalContainer).removeClass('hide');
                    },
                    complete: function(jqXHR, textStatus) {
                        $('.loader', opts.modalContainer).addClass('hide');
                    }
                });
                
                return false;
            });
        });
    };    
    
    
    
}(jQuery));
(function($) {
   
    $.fn.FansuniteImages = function(options){

        var defaults = {
            pageSize: 20,
            currentPage: 1,
            itemRowCount: 4,
            inputObj : $('<input/>'),
            thumbsOuterContainer: $('<div/>'),
            thumbsDisplayContainer: $('<div/>'),
            loadMoreButton: $('<button/>'),
            displayPageNumbersElement: $('<span/>'),
            onSuccess : false,
            onError : false,
            onImageSelect: false
        };
        
        var opts = $.extend( {}, defaults, options );

        return this.each (function(){
            var elem  = $(this);
            var origSearchTerm = '';
            var isLoadMoreImages = false; // check event trigger load more button or not
            
            $(opts.loadMoreButton).click(function(e){
               e.preventDefault();
               
               isLoadMoreImages = true;
               opts.currentPage = opts.currentPage + 1;
               
               $(elem).trigger('submit');
            });
            
            $(elem).submit(function(e){
                e.preventDefault();
                
                var searchPhrase = $(opts.inputObj).val();
                
                if (searchPhrase === '') {
                    $().General_ShowNotification({message: "Please enter the search phrase", type:'error'});
                    return false;
                }
                
                if (origSearchTerm !== searchPhrase) {
                    origSearchTerm = searchPhrase;
                    opts.currentPage = 1;
                    $(opts.thumbsDisplayContainer).empty();
                    $(opts.thumbsOuterContainer).addClass('hide');
                }
                else if(!isLoadMoreImages) {
                    // if event is not load more images and search terms are same so retrun blank;
                    return;
                }
                
                $.ajax({
                    type: 'get',
                    url: baseHttpPath + '/general/search-images',
                    dataType: 'json',
                    data: {s: searchPhrase, limit: opts.pageSize, page: opts.currentPage},
                    success: function(data, textStatus, jqXHR) {
                        
                        if (data.totalFoundImages == 0) {
                            $(opts.thumbsOuterContainer).removeClass('hide');
                            $(opts.loadMoreButton).addClass('hide');
                            $(opts.displayPageNumbersElement).addClass('hide');
                            $(opts.thumbsOuterContainer).children('.scroller-clubs').html('<p class="no-data">No data found.</p>');
                        }
                        else {
                            
                            $(opts.loadMoreButton).removeClass('hide');
                            $(opts.displayPageNumbersElement).removeClass('hide');
                            $(opts.thumbsOuterContainer).removeClass('hide');
                            
                            // Images get Zro and current page and total pages is zero
                            if(data.totalImages == 0 || data.currentPage == data.totalPages) {
                                $(opts.loadMoreButton).addClass('hide');
                            }
                        
                            $(opts.displayPageNumbersElement).html('Page: ' + data.currentPage + '/' + data.totalPages);

                            var cloneRowObj;
                            var divRowObj = $('<div/>', {
                                'class': 'row has-margin-bottom-20'
                            });

                            var itemCount = 0;

                            for (var imageId in data.images) {

                                if (itemCount == 0) {
                                    cloneRowObj = $(divRowObj).clone();
                                }
                                
                                var imageProperties = data.images[imageId];
                                
                                itemCount++;
                                
                                $('<img/>', {
                                    src: imageProperties.thumb,
                                    'class': 'img-responsive',
                                    'data-id': imageId,
                                    title: imageProperties.caption
                                })
                                .appendTo(
                                    $('<a/>', {
                                        href: '#'
                                    })
                                    .appendTo(
                                        $('<div/>', {
                                            'class': 'col-md-4 col-sm-4 col-xs-8'
                                        })
                                        .appendTo(cloneRowObj)
                                    )
                                    .click(function(e){
                                       e.preventDefault();
                                       $(this).addClass('selected');
                                       if (opts.onImageSelect && typeof opts.onImageSelect === 'function') {
                                           var imgObj = $(this).find('img');
                                           var imageProperties = data.images[imgObj.data('id')];
                                           opts.onImageSelect({
                                               'imageId': imgObj.data('id'), 
                                               'imageSrc': imageProperties.thumb, 
                                               'caption': imgObj.attr('title')
                                               
                                           });
                                       }
                                    })
                                );

                                if (itemCount == opts.itemRowCount) {
                                    itemCount = 0;
                                    $(cloneRowObj).appendTo(opts.thumbsDisplayContainer);
                                }
                            }

                            if (itemCount > 0) {
                                itemCount = 0;
                                $(cloneRowObj).appendTo(opts.thumbsDisplayContainer);
                            }
                        }
                        
                        if (opts.onSuccess && typeof opts.onSuccess === 'function') {
                            opts.onSuccess(data, obj);
                        }
                    },
                    error: function(jqXHR, textStatus, errorThrown){
                        if (opts.onError && typeof opts.onError === 'function') {
                            opts.onError(obj, jqXHR.responseText);
                        }
                        else {
                            $().General_ShowErrorMessage({message: jqXHR.responseText});
                        }
                    },
                    beforeSend: function(jqXHR, settings) {
                        $('.loader').removeClass('hide');
                    },
                    complete: function(jqXHR, textStatus) {
                        $('.loader').addClass('hide');
                        isLoadMoreImages = false;
                    }
                });
                
                return false;
            });
        });
    };    
}(jQuery));
var AuthController = (function($) {
	
    var thankyou = function() {
        $('.counter').timer({
            duration: '1s',
            callback: function() {
                var secs = parseInt($('.timer').text());
                $('.timer').text(secs - 1);
                if (secs == 1) {
                    $('.counter').timer('remove');
                    window.location.href = $('.timer').data('ref');
                }
            },
            repeat: true
        });
    };
    
    var trackSocialLoginAndSignup = function(){
        $('a.SocialSignupLoginBtn').on('click', function(e){
            var socialType = $(this).data('type');
            var socialAction = $(this).data('action');
            var gaCategory = "Social " + socialAction;
            var gaAction = socialAction + " with " + socialType;
            var gaLabel = gaAction + " clicked";
            
            //Send event for GA
            ga('send', 'event', gaCategory, gaAction, gaLabel);
        });
    };
    
    var signin =function(){
        $('#signin-form').live('submit', function(){
            var signinData = $(this).serialize();
            $.ajax({
                type: 'POST',
                url: baseHttpPath + '/auth/sign-in',
                dataType: 'json',
                data: signinData,
                success: function(data) {
                    if(data.success) {
                       window.close();
                    }
                },
                error: function(jqXHR){
                    $().General_ShowErrorMessage({message: "Invalid Login Credentials"});
                }
            });
            return false;
        });
    };
    
    return {
		thankyou: function() {
            thankyou();
        },
        trackSocialLoginSignup: function(){
           trackSocialLoginAndSignup();
        },
        signin: function(){
            signin();
        }
	};
	
}(jQuery));
var PageController = function ($) {
    
    var handleContact = function() {
		$('form#contactForm').on('beforeSubmit', function(event, jqXHR, settings) {
			
			event.preventDefault();
			
			var form = $(this);
			
			if(form.find('.has-error').length) {
				return false;
			}
			
			$.ajax({
				url: baseHttpPath + '/page/sendcontactusmail',
				type: 'post',
				data: form.serialize(),
				dataType: 'json',
				success: function(data) {
					if (data.success) {
						$('#contactMessage').removeClass('hide');
						form.slideUp();
					}
					else {
						$('#contactErrorContainerContent').html(data.error);
						$('#contactErrorContainer').removeClass('hide');
					}
				},
				error: function(data) {
					$('#contactErrorContainerContent').html(data.responseText);
					$('#contactErrorContainer').removeClass('hide').show();
				}
			});
			
			return false;

		});
    };
    
    return {
		//main function to initiate the module
        init: function() {
            
        },
        contact: handleContact
    };

} (jQuery);
var ProfileController = (function($) {
	
	return {
		init: function() {
			ProfileController.ProfileTab.init();
			ProfileController.ProfileSettingsTab.init();
			ProfileController.CustomiseTab.init();
		}
	};
	
}(jQuery));

/*Profile Tab*/
ProfileController.ProfileTab = (function($) {
	
	var attachEvents = function() {
		
		Dropzone.autoDiscover = false;
		
		var myDropzone = new Dropzone("#dropzone", {
			paramName: "profile_large_media_file",
			maxFiles: 1,
			init: function(){
                this.on("success", function(file, response) {
                    // event when file is successfully uploaded
					$('div.user-pic span').html("<img src='"+response+"' class='img-circle img-responsive' />"); 
                    $('#dropzoneTimer').timer({
                        duration: '2s',
                        callback: function() {
                            myDropzone.removeFile(file);
                            $('#dropzoneTimer').timer('remove');
                            $('#profile-pic-upload-modal').modal('hide');
                        },
                        repeat: false
                    });
				});
			}
		});
		
		$('button.disconnect').click(function(e){
			e.preventDefault();
			e.stopPropagation();
            var socialClient = $(this).data('social');
            var btnObj = $(this);
			bootbox.confirm({
				title: "Confirm",
				message: "Do you really want to disconnect this social account?",
				callback: function(result) {
                    if (result) {
                        $.ajax({
                            type: 'POST',
                            url: baseHttpPath + '/user/disconnect-social',
                            dataType: 'json',
                            data: {social : socialClient, _csrf : yii.getCsrfToken()},
                            success: function(data, textStatus, jqXHR) {
                                $(btnObj).parent('a').removeClass('connected').addClass('not-connected');
                                $(btnObj).remove();
                            },
                            error: function(jqXHR, textStatus, errorThrown){
                                $().General_ShowErrorMessage({message: jqXHR.responseText});
                            }
                        });
                    }
				}
			});
		});
	};
	
	return {
		init: function() {
			attachEvents();
		}
	};
	
}(jQuery));

/*Settings Tab*/
ProfileController.ProfileSettingsTab = (function ($) {

    var attachEvents = function() {
        $('.AddMoreWebsiteUrl').on('click',function(e){
            e.preventDefault();
            var num = $(this).attr('shownext');
            $(".field-usersetting-website_url"+num).slideDown('slow');
            $(this).hide();
        });
        
        $('.RemoveWebsiteUrl').on('click', function(e){
            e.preventDefault();
            var num = $(this).attr('removenum');
            $('#usersetting-website_url'+num).val('');
            var parentDiv = $(this).parent('div');
            var numPrev = num-1;
            var sib = parentDiv.siblings('.field-usersetting-website_url'+numPrev);
            sib.children('.AddMoreWebsiteUrl').show();
            $(".field-usersetting-website_url"+num).slideUp('slow');
            
        });
    };
    
    return {
		//main function to initiate the module
        init: function() {
            attachEvents();
        }
    };

} (jQuery));

/*Customize Tab*/
ProfileController.CustomiseTab = (function ($) {
    //bind follow code in Codes section in Customise tab
    var bindFollowCode = function(){
        $('.UnfollowCode').followCode({
           'onSuccess': function(data, obj){
                $('#codes li.Code' + $(obj).data('id')).remove();
                if($('#codes ul.tabular-data-list li').length == 0){
                    $('#codes ul.tabular-data-list').addClass('hide');
                    $('#codes p.no-data').removeClass('hide');
                }
                $().General_ShowNotification({message: 'Successfully unfollowed' });
           },
           'onError': function(obj, errorMessage) {
                $().General_ShowErrorMessage({message: errorMessage});
           },
           'beforeSend': function(obj) {
               $('i', obj).General_AddRemoveSpinnerIcon();
           },
           'onComplete': function(obj){
                $('i', obj).General_AddRemoveSpinnerIcon();
           }
        });
    };
    
    //bind follow club in Clubs section in Customise tab
    var bindFollowClub = function(){
        $('.UnfollowClub').followBlog({
            'onSuccess': function(data, obj){
                $().General_ShowNotification({message: 'Successfully unfollowed' });
                $('#clubs li.Club' + $(obj).data('id')).remove();
                if($('#clubs ul.tabular-data-list li').length === 0){
                    $('#clubs ul.tabular-data-list').addClass('hide');
                    $('#clubs p.no-data').removeClass('hide');
                }
            },
           'onError': function(obj, errorMessage) {
                $().General_ShowErrorMessage({message: errorMessage});
            },
           'beforeSend': function(obj) {
               $('i', obj).General_AddRemoveSpinnerIcon();
           },
           'onComplete': function(obj){
                $('i', obj).General_AddRemoveSpinnerIcon();
           }
        });        
    };
    
    //bind follow blog in Blogs section in Customise tab
    var bindFollowBlog = function(){
        $('.UnfollowBlog').followBlog({
            'onSuccess': function(data, obj){
                $().General_ShowNotification({message: 'Successfully unfollowed' });
                $('#blogs li.Blog' + $(obj).data('id')).remove();
                if($('#blogs ul.blog-level-lists li').length === 0){
                    $('#blogs ul.blog-level-lists').addClass('hide');
                    $('#blogs p.no-data').removeClass('hide');
                }
            },
           'onError': function(obj, errorMessage) {
                $().General_ShowErrorMessage({message: errorMessage});
            },
           'beforeSend': function(obj) {
               $('i', obj).General_AddRemoveSpinnerIcon();
           },
           'onComplete': function(obj){
                $('i', obj).General_AddRemoveSpinnerIcon();
           }
        });
    };
    
    var bindFollowWriter = function(){
        $('.UnfollowWriter').followWriter({
            'onSuccess': function(data, obj){
                $().General_ShowNotification({message: 'Successfully unfollowed' });
                $('#writers li.Writer' + $(obj).data('id')).remove();
                if($('#writers ul.blog-level-lists li').length === 0){
                    $('#writers ul.blog-level-lists').addClass('hide');
                    $('#writers p.no-data').removeClass('hide');
                }
            },
            'onError': function(obj, errorMessage) {
                $().General_ShowErrorMessage({message: errorMessage});
            },
           'beforeSend': function(obj) {
               $('i', obj).General_AddRemoveSpinnerIcon();
           },
           'onComplete': function(obj){
                $('i', obj).General_AddRemoveSpinnerIcon();
           }
        });
    };
    
    //bind follow club in add new club widget
    var bindWidgetFollowClub = function(){
        $('.WidgetAddClub').followBlog({
            'onError': function(obj, errorMessage) {
                 $().General_ShowErrorMessage({message: errorMessage});
             },
             'beforeSend': function(obj) {
                $('i', obj).General_AddRemoveSpinnerIcon();
             },
             'onComplete': function(obj){
                 $('i', obj).General_AddRemoveSpinnerIcon();
                 if($(obj).data('status') === 'follow'){
                    $().General_ShowNotification({message: 'Successfully unfollowed' });
                    $(obj).children('span:eq(1)').children('button').html('<span><i class="fa fa-plus"></i></span>');
                     //remove from parent page
                    $('#clubs li.Club' + $(obj).data('id')).remove();
                    if($('#clubs ul.tabular-data-list li').length === 0){
                        $('#clubs ul.tabular-data-list').addClass('hide');
                        $('#clubs p.no-data').removeClass('hide');
                    }
                 }
                 else{
                     $().General_ShowNotification({message: 'Successfully followed' });
                     $(obj).children('span:eq(1)').children('button').html('<span><i class="fa fa-close"></i></span>');
                     //add to parent page
                     var liObj = $(obj).parent('li.Club' + $(obj).data('id')).clone();
                     $(liObj).find('a.WidgetAddClub')
                             .removeClass('WidgetAddClub')
                             .addClass('UnfollowClub')
                             .data('status', 'unfollow');
                     $('#clubs ul.tabular-data-list').append(liObj);
                     //Re-attach follow
                     $('.UnfollowClub').unbind('click');
                     bindFollowClub();
                     
                    $('#clubs ul.tabular-data-list').removeClass('hide');
                    $('#clubs p.no-data').addClass('hide');
                }
             }
         });
    };
    
    //bind follow blog in add new blog widget
    var bindWidgetFollowBlog = function(){
        $('.WidgetAddBlog').followBlog({
           'onError': function(obj, errorMessage) {
                $().General_ShowErrorMessage({message: errorMessage});
            },
            'beforeSend': function(obj) {
               $('i', obj).General_AddRemoveSpinnerIcon();
            },
            'onComplete': function(obj){
                $('i', obj).General_AddRemoveSpinnerIcon();
                if($(obj).data('status') === 'follow'){
                    $().General_ShowNotification({message: 'Successfully unfollowed' });
                    $(obj).children('button').html('<span><i class="fa fa-plus"></i></span>');
                    //remove from parent page
                    $('#blogs li.Blog' + $(obj).data('id')).remove();
                    if($('#blogs ul.blog-level-lists li').length === 0){
                        $('#blogs ul.blog-level-lists').addClass('hide');
                        $('#blogs p.no-data').removeClass('hide');
                    }
                }
                else{
                    $().General_ShowNotification({message: 'Successfully followed' });
                    $(obj).children('button').html('<span><i class="fa fa-close"></i></span>');
                    //add to parent page
                     var liObj = $(obj).parent('li.Blog' + $(obj).data('id')).clone();
                     $(liObj).find('a.WidgetAddBlog')
                             .removeClass('WidgetAddBlog')
                             .addClass('UnfollowBlog')
                             .data('status', 'unfollow');
                     $('#blogs ul.blog-level-lists').append(liObj);
                     //Re-attach follow
                     $('.UnfollowBlog').unbind('click');
                     bindFollowBlog();
                    
                    $('#blogs ul.blog-level-lists').removeClass('hide');
                    $('#blogs p.no-data').addClass('hide');
                }
            }
        });
    };
    
    var bindWidgetFollowWriter = function(){
        $('.WidgetAddWriter').followWriter({
           'onError': function(obj, errorMessage) {
                $().General_ShowErrorMessage({message: errorMessage});
            },
            'beforeSend': function(obj) {
               $('i', obj).General_AddRemoveSpinnerIcon();
            },
            'onComplete': function(obj){
                $('i', obj).General_AddRemoveSpinnerIcon();
                if($(obj).data('status') === 'follow'){
                    $().General_ShowNotification({message: 'Successfully unfollowed' });
                    $(obj).children('button').html('<span><i class="fa fa-plus"></i></span>');
                    //remove from parent page
                    $('#writers li.Writer' + $(obj).data('id')).remove();
                    if($('#writers ul.blog-level-lists li').length === 0){
                        $('#writers ul.blog-level-lists').addClass('hide');
                        $('#writers p.no-data').removeClass('hide');
                    }
                }
                else{
                    $().General_ShowNotification({message: 'Successfully followed' });
                    $(obj).children('button').html('<span><i class="fa fa-close"></i></span>');
                    //add to parent page
                    var liObj = $(obj).parent('li.Writer' + $(obj).data('id')).clone();
                    $(liObj).find('a.WidgetAddWriter')
                            .removeClass('WidgetAddWriter')
                            .addClass('UnfollowWriter')
                            .data('status', 'unfollow');
                    $('#writers ul.blog-level-lists').append(liObj);
                    //Re-attach follow
                    $('.UnfollowWriter').unbind('click');
                    bindFollowWriter();
                     
                    $('#writers ul.blog-level-lists').removeClass('hide');
                    $('#writers p.no-data').addClass('hide');
                }
            }
        });
    };
    
    var loadPopularBlogs = function() {
        $.ajax({
            type: 'POST',
            url: baseHttpPath + '/search/popular-blogs',
            dataType: 'json',
            data: {blogs: 1},
            success: function(data, textStatus, jqXHR) {
                if(data.blogs.length > 0){
                    var source   = $("#addblogwidget-item-template").html();
                    var template = Handlebars.compile(source);

                    for(var ind in data.blogs){
                        var blogItem = template(data.blogs[ind]);
                        $('ul.BlogsListContainer').append(blogItem);
                    }
                    $('ul.BlogsListContainer').parent('div.portlet-body').parent('div.elem-block').parent('div.blog-level').removeClass('hide');

                    //Change already added blogs - customise screen
                    $('#Customise').find('a.UnfollowBlog').each(function(){
                        var dataId = $(this).data('id');
                        var btnObj = $('#ModalNewBlog').find('a.WidgetAddBlog[data-id='+dataId+']');
                        $(btnObj).data('status','unfollow');
                        $(btnObj).children('button').html('<span><i class="fa fa-close"></i></span>');
                    });
                    //my fansunite widget
                    $('#MyFansUnite').find('button.UnfollowBlog').each(function(){
                        var dataId = $(this).data('id');
                        var btnObj = $('#ModalNewBlog').find('a.WidgetAddBlog[data-id='+dataId+']');
                        $(btnObj).data('status','unfollow');
                        $(btnObj).children('button').html('<span><i class="fa fa-close"></i></span>');
                    });

                    $('a.WidgetAddBlog').unbind('click');
                    bindWidgetFollowBlog();
                }
            },
            error: function(jqXHR, textStatus, errorThrown){
                $().General_ShowErrorMessage({message: jqXHR.responseText});
            },
            beforeSend: function(jqXHR, settings) { 
            },
            complete: function(jqXHR, textStatus) {
            }
        });
    };
    
    var loadPopularWriters = function() {
        $.ajax({
            type: 'POST',
            url: baseHttpPath + '/search/popular-writers',
            dataType: 'json',
            data: {writers: 1},
            success: function(data, textStatus, jqXHR) {

                if(data.writers.length > 0){
                    var source   = $("#addwriterwidget-item-template").html();
                    var template = Handlebars.compile(source);

                    for(var ind in data.writers){
                        var item = template(data.writers[ind]);
                        $('ul.WritersListContainer').append(item);
                    }
                    $('ul.WritersListContainer').parent('div.portlet-body').parent('div.elem-block').parent('div.blog-level').removeClass('hide');

                    $('#Customise').find('a.UnfollowWriter').each(function(){
                        var dataId = $(this).data('id');
                        var btnObj = $('#ModalNewWriter').find('a.WidgetAddWriter[data-id='+dataId+']');
                        $(btnObj).data('status','unfollow');
                        $(btnObj).children('button').html('<span><i class="fa fa-close"></i></span>');
                    });

                    $('a.WidgetAddWriter').unbind('click');
                    bindWidgetFollowWriter();
                }
            },
            error: function(jqXHR, textStatus, errorThrown){
                $().General_ShowErrorMessage({message: jqXHR.responseText});
            },
            beforeSend: function(jqXHR, settings) { 
            },
            complete: function(jqXHR, textStatus) {
            }
        });
    };

    var attachEvents = function() {
        //remove code from Code section in Customise tab of edit profile page
        bindFollowCode();
                
        //remove club from Clubs section in Customise tab of edit profile page
        bindFollowClub();
        
        //remove blog from Blogs section in Customise tab of edit profile page
        bindFollowBlog();
        
        //remove writer from Writers section in Customise tab of edit profile page
        bindFollowWriter();
        
        //follow / unfollow user from Followed By section in Customise tab of edit profile page
        $('.FollowUnfollowUser').followWriter({
           'onError': function(obj, errorMessage) {
                $().General_ShowErrorMessage({message: errorMessage});
            },
            'beforeSend': function(obj) {
               $('i', obj).General_AddRemoveSpinnerIcon();
            },
            'onComplete': function(obj){
                 $('i', obj).General_AddRemoveSpinnerIcon();
                 var status = $(obj).data('status');
                 (status === 'follow')? $(obj).removeClass('selected') : $(obj).addClass('selected');
            }
        });
        
        //***********Add code widget javascript starts
        $('.WidgetAddCode').followCode({
           'onError': function(obj, errorMessage) {
                $().General_ShowErrorMessage({message: errorMessage});
            },
            'beforeSend': function(obj) {
               $('i', obj).General_AddRemoveSpinnerIcon();
            },
            'onComplete': function(obj){
                $('i', obj).General_AddRemoveSpinnerIcon();
                if($(obj).data('status') === 'follow'){
                    $().General_ShowNotification({message: 'Successfully unfollowed' });
                    $(obj).children('span:eq(1)').children('button').html('<span><i class="fa fa-plus"></i></span>');
                    //remove from parent page
                    $('#codes li.Code' + $(obj).data('id')).remove();
                    if($('#codes ul.tabular-data-list li').length == 0) {
                        $('#codes ul.tabular-data-list').addClass('hide');
                        $('#codes p.no-data').removeClass('hide');
                    }
                }
                else{
                    $().General_ShowNotification({message: 'Successfully followed' });
                    $(obj).children('span:eq(1)').children('button').html('<span><i class="fa fa-close"></i></span>');
                    //add to parent page
                    var liObj = $(obj).parent('li.Code' + $(obj).data('id')).clone();
                    $(liObj).find('a.WidgetAddCode')
                            .removeClass('WidgetAddCode')
                            .addClass('UnfollowCode')
                            .data('status', 'unfollow');
                    $('#codes ul.tabular-data-list').removeClass('hide').append(liObj);
                    //Re-attach follow
                    $('.UnfollowCode').unbind('click');
                    bindFollowCode();
                    
                    $('#codes p.no-data').addClass('hide');
                }
            }
        });
        
        $("#ModalNewCode").on('shown', function () {
            //Restore all to original state
            $('#ModalNewCode').find('a.WidgetAddCode').each(function(){
                $(this).data('status','follow');
                $(this).children('span:eq(1)').children('button').html('<span><i class="fa fa-plus"></i></span>');
            });
//            //Change already added codes
            $('#Customise').find('a.UnfollowCode').each(function(){
                var dataId = $(this).data('id');
                var btnObj = $('#ModalNewCode').find('a.WidgetAddCode[data-id='+dataId+']');
                $(btnObj).data('status','unfollow');
                $(btnObj).children('span:eq(1)').children('button').html('<span><i class="fa fa-close"></i></span>');
            });
        });
        //*********Add code widget javascript ends
        
        //*********** ADD CLUB WIDGET JS start *************//
        bindWidgetFollowClub();
        
        $('#SearchClubsForm').SearchBlogs({
            isClub: true,
            followButton: 'a.WidgetAddClub',
            inputObj: $('#SearchClubsForm input.SearchClubsInput'),
            searchItemsOuterContainer: $('#ModalNewClub div.blog-level'),
            searchItemsContainer: $('ul.ClubsListContainer'),
            displayPageNumbersElement: $('span.AddClubPages'),
            loadMoreButton: $('button.AddClubLoadMore'),
            searchButton: $('#SearchClubsBtn'),
            onSuccess: function(data){
                $('.WidgetAddClub').unbind('click');
                bindWidgetFollowClub();
            }
        });
        
        $("#ModalNewClub").on('shown', function () {
            //Restore all to original state
            $('#ModalNewClub').find('a.WidgetAddClub').each(function(){
                $(this).data('status','follow');
                $(this).children('span:eq(1)').children('button').html('<span><i class="fa fa-plus"></i></span>');
            });
            //Change already added clubs
            $('#Customise').find('a.UnfollowClub').each(function(){
                var dataId = $(this).data('id');
                var btnObj = $('#ModalNewClub').find('a.WidgetAddClub[data-id='+dataId+']');
                $(btnObj).data('status','unfollow');
                $(btnObj).children('span:eq(1)').children('button').html('<span><i class="fa fa-close"></i></span>');
            });
        });
        //*********** ADD CLUB WIDGET JS ends *************//
        
        //*********** ADD BLOG WIDGET JS start *************//
        bindWidgetFollowBlog();
        
        $('#SearchBlogsForm').SearchBlogs({
            isClub: false,
            followButton: 'a.WidgetAddBlog',
            inputObj: $('#SearchBlogsForm input.SearchBlogsInput'),
            searchItemsOuterContainer: $('#ModalNewBlog div.blog-level'),
            searchItemsContainer: $('ul.BlogsListContainer'),
            displayPageNumbersElement: $('span.AddBlogPages'),
            loadMoreButton: $('button.AddBlogLoadMore'),
            searchButton: $('#SearchBlogsBtn'),
            onSuccess: function(data){
                $('.WidgetAddBlog').unbind('click');
                bindWidgetFollowBlog();
            }
        });
               
        $("#ModalNewBlog").on('shown', function () {
            if($('#ModalNewBlog').find('a.WidgetAddBlog').length == 0) { //modal loading first time
                loadPopularBlogs();
            }
            //Restore all to original state
            $('#ModalNewBlog').find('a.WidgetAddBlog').each(function(){
                $(this).data('status','follow');
                $(this).children('button').html('<span><i class="fa fa-plus"></i></span>');
            });
            //Change already added blogs
            $('#Customise').find('a.UnfollowBlog').each(function(){
                var dataId = $(this).data('id');
                var btnObj = $('#ModalNewBlog').find('a.WidgetAddBlog[data-id='+dataId+']');
                $(btnObj).data('status','unfollow');
                $(btnObj).children('button').html('<span><i class="fa fa-close"></i></span>');
            });
        });
        //*********** ADD BLOG WIDGET JS end *************//
        
        //*********** ADD WRITER WIDGET JS start *************//
        bindWidgetFollowWriter();
        
        $('#SearchWritersForm').SearchUsers({
            followButton: 'a.WidgetAddWriter',
            inputObj: $('#SearchWritersForm input.SearchWritersInput'),
            searchItemsOuterContainer: $('#ModalNewWriter div.blog-level'),
            searchItemsContainer: $('ul.WritersListContainer'),
            displayPageNumbersElement: $('span.AddWriterPages'),
            loadMoreButton: $('button.AddWriterLoadMore'),
            searchButton: $('#SearchWritersBtn'),
            onSuccess: function(data){
                $('.WidgetAddWriter').unbind('click');
                bindWidgetFollowWriter();
            }
        });
        
        $("#ModalNewWriter").on('shown', function () {
            if($('#ModalNewWriter').find('a.WidgetAddWriter').length == 0) { //modal loading first time
                loadPopularWriters();
            }
            $('#ModalNewWriter').find('a.WidgetAddWriter').each(function(){
                $(this).data('status','follow');
                $(this).children('button').html('<span><i class="fa fa-plus"></i></span>');
            });
            $('#Customise').find('a.UnfollowWriter').each(function(){
                var dataId = $(this).data('id');
                var btnObj = $('#ModalNewWriter').find('a.WidgetAddWriter[data-id='+dataId+']');
                $(btnObj).data('status','unfollow');
                $(btnObj).children('button').html('<span><i class="fa fa-close"></i></span>');
            });
        });
        //*********** ADD WRITER WIDGET JS end *************//        
    };
    
    return {
		//main function to initiate the module
        init: function() {
            attachEvents();
        }
    };

}(jQuery));

/* My Fansunite Page */
ProfileController.MyFansunite = (function ($) {

    var attachEvents = function() {

        //Auto Ellipsis
        $(".posts-excerpt .game-title").autoEllipsisText();
        $(".blurb").autoEllipsisText({multiline:true, accuracyStep:1});

        var loadMoreUserPosts = function(options){

                var defaults = {
                    loader: $('div.loader'),
                    container: $('div.posts'),
                    onSuccess: false,
                    onError: false,
                    beforeSend: false,
                    onComplete: false
                };
                var opts = $.extend( {}, defaults, options );

                var offset = parseInt($(opts.container).data('offset'));

                if(isNaN(offset)){
                    return;
                }

                offset = offset + postsOffset; //Declared in _javascripts.php

                $(opts.container).data('offset', offset);

                $.ajax({
                    type: 'POST',
                    url: baseHttpPath + '/user/more-posts',
                    dataType: 'json',
                    data: {offset: offset},
                    success: function(data, textStatus, jqXHR) {

                        if(data.articles.length > 0){
                            var source   = $("#user-post-template").html();
                            var template = Handlebars.compile(source);
                                    
                            var socialSource = $("#user-social-post-template").html();
                            var socialTemplate = Handlebars.compile(socialSource);
                        
                            for(var ind in data.articles){
                                var postItem;
                                if(data.articles[ind].postId > 0){
                                    postItem = template(data.articles[ind]);
                                }
                                else {
                                    postItem = socialTemplate(data.articles[ind]);
                                }
                                $(opts.container).append(postItem);
                            }
                            
                            if (data.articles.length < postsOffset) {
                                waypoint.destroy();
                            }
                            else {
                                Waypoint.refreshAll();
                            }

                        }

                        if (opts.onSuccess && typeof opts.onSuccess === 'function') {
                            opts.onSuccess(data);
                        }
                    },
                    error: function(jqXHR, textStatus, errorThrown){
                        if (opts.onError && typeof opts.onError === 'function') {
                            opts.onError(jqXHR.responseText);
                        }
                    },
                    beforeSend: function(jqXHR, settings) { 
                        $(opts.loader).removeClass('hide');
                        if (opts.beforeSend && typeof opts.beforeSend === 'function') {
                            opts.beforeSend();
                        }
                    },
                    complete: function(jqXHR, textStatus) {
                        $(opts.loader).addClass('hide');
                        if (opts.onComplete && typeof opts.onComplete === 'function') {
                            opts.onComplete();
                        }
                    }
                });
            }

             var waypoint = new Waypoint({
                element: $('#LoadMoreArticles'),
                offset: '80%',
                handler: function(direction){
                        if(direction == 'down'){
                           loadMoreUserPosts({});
                        }
                    }
                }); 
    };
    
    return {
		//main function to initiate the module
        init: function() {
            attachEvents();
        }
    };

} (jQuery));
var MyBlogController = (function($) {
	
    var attachEvents = function() {
        
        $('.custom-blog-select').change(function(){

            var current_tab = $(this).closest('div.tab-pane').attr('id').toLowerCase();
            var value = $(this).val();
            if(value != '') {
                if(current_tab === 'workflow') {
                    window.location.href = baseHttpPath + '/workflow/index?blogId='+value;
                }
                else {
                    window.location.href = baseHttpPath + '/user-blogs/'+current_tab+'?blogId='+value;
                }
            }
        });
    };
    
    return {
        init: function() {
            attachEvents();
            MyBlogController.BlogsTab.init();
        },
        create: function () {
            attachEvents();
            MyBlogController.CreateEditBlog.init();
        },
        permission: function () {
            attachEvents();
            MyBlogController.PermissionsTab.init();
        },
        connect: function () {
            attachEvents();
            MyBlogController.ConnectTab.init();
        },
        insights: function () {
            attachEvents();
            MyBlogController.InsightsTab.init();
        },
        facebookPageScroll: function () {
            MyBlogController.ConnectTab.facebookPageScroll();
        },
        newsletter: function () {
            MyBlogController.Newsletter.init();
        },
        workFlow: function () {
            attachEvents();
            MyBlogController.WorkFlowTab.init();
        },
        gallery: function() {
            attachEvents();
            MyBlogController.Gallery.init();
        }
    };
	
}(jQuery));

/*Create Screen and Setting Tab*/
MyBlogController.CreateEditBlog = (function($) {

    var attachEvents = function() {
		
        Dropzone.autoDiscover = false;
		
            var myDropzone = new Dropzone("#dropzone", {
                paramName: "cover_media_file",
                addRemoveLinks: false,
                maxFiles: 1,
                init: function(){
                this.on("success", function(file, response) {
                    // event when file is successfully uploaded
                    $('#blog-cover-image').attr('src', response);

                    //assign the image id to hidden var
                    $('#createeditblogform-cover_image_getty').val('');
                    $('#createeditblogform-cover_image_upload').val(response);

                    $().General_ShowNotification({message: 'Image added successfully' });
                    
                    $('#dropzoneTimer').timer({
                        duration: '2s',
                        callback: function() {
                            myDropzone.removeFile(file);
                            $('#dropzoneTimer').timer('remove');
                            $('#ModalCoverImage').modal('hide');
                        },
                        repeat: false
                    });
                        });
                }
        });
        
        var loadingGettyImage = false;
        //getty images
        $('#GettyImages form').GettyImages({
            inputObj: $('#GettyImages form input.GettyImagesInput'),
            thumbsOuterContainer: $('#GettyImages div.blog-level'),
            thumbsDisplayContainer: $('#GettyImages div.scroller-clubs'),
            displayPageNumbersElement: $('#GettyImages span.GettyImagesPages'),
            loadMoreButton: $('#GettyImages button.GettyImagesLoadMore'),
            onImageSelect: function(imageObj) {
                if (loadingGettyImage) {
                    $().General_ShowNotification({message: 'Image download already in progress', type: 'error' });
                    return;
                }
                
                var gettyImgId = imageObj.imageId;
                
                $.ajax({
                    type: 'post',
                    url: baseHttpPath + '/user-blogs/upload-getty-image',
                    dataType: 'json',
                    data: {id: gettyImgId, _csrf: yii.getCsrfToken()},
                    success: function(data, textStatus, jqXHR) {
                        
                        var tmpImage = data.imageSrc;
                        $('#blog-cover-image').attr('src', tmpImage);

                        //assign the image id to hidden var
                        $('#createeditblogform-cover_image_getty').val('');//not required now
                        $('#createeditblogform-cover_image_upload').val(tmpImage);
                        
                        $('#ModalCoverImage').modal('hide');
                        
                        $().General_ShowNotification({message: 'Image added successfully' });
                    },
                    error: function(jqXHR, textStatus, errorThrown){
                        $().General_ShowErrorMessage({message: jqXHR.responseText, type: 'error'});
                        return false;
                    },
                    beforeSend: function(jqXHR, settings) {
                        loadingGettyImage = true;
                        $('#ModalCoverImage .modal-content').General_AddRemoveAjaxLoader();
                        //$('#GettyImages .loader' ).removeClass('hide');
                    },
                    complete: function(jqXHR, textStatus) {
                        loadingGettyImage = false;
                        $('#ModalCoverImage .modal-content').General_AddRemoveAjaxLoader();
                        //$('#GettyImages .loader').addClass('hide');
                    }
                });
                
            }
        });
        
        // Thumbnail Functionality Implementation 26 feb 2016
        var thumbDropzone = new Dropzone("#thumbnailDropzone", {
                paramName: "blog_media_file",
                addRemoveLinks: false,
                maxFiles: 1,
                init: function(){
                this.on("success", function(file, response) {
                    // event when file is successfully uploaded
                    var picHtml = "<img src='"+response+"' class='img-circle' width='100' height='100' />";
                    $('.profile-upload .user-pic span').html(picHtml);

                    //assign the image id to hidden var
                    $('#createeditblogform-blog_thumbnail_image_getty').val('');
                    $('#createeditblogform-blog_thumbnail_image_upload').val(response);

                    $().General_ShowNotification({message: 'Image added successfully' });
                    
                    $('#dropzoneThumbnailTimer').timer({
                        duration: '2s',
                        callback: function() {
                            thumbDropzone.removeFile(file);
                            $('#dropzoneThumbnailTimer').timer('remove');
                            $('#ModalThumbnailImage').modal('hide');
                        },
                        repeat: false
                    });
                        });
                }
        });
        
        
        //Getty images Thumbnail
        $('#GettyThumbnailImages form').GettyImages({
            inputObj: $('#GettyThumbnailImages form input.GettyImagesInput'),
            thumbsOuterContainer: $('#GettyThumbnailImages div.blog-level'),
            thumbsDisplayContainer: $('#GettyThumbnailImages div.scroller-clubs'),
            displayPageNumbersElement: $('#GettyThumbnailImages span.GettyImagesPages'),
            loadMoreButton: $('#GettyThumbnailImages button.GettyImagesLoadMore'),
            onImageSelect: function(imageObj) {
                if (loadingGettyImage) {
                    $().General_ShowNotification({message: 'Image download already in progress', type: 'error' });
                    return;
                }
                
                var gettyImgId = imageObj.imageId;
                
                $.ajax({
                    type: 'post',
                    url: baseHttpPath + '/user-blogs/upload-getty-image',
                    dataType: 'json',
                    data: {id: gettyImgId, _csrf: yii.getCsrfToken()},
                    success: function(data, textStatus, jqXHR) {
                        
                        var tmpImage = data.imageSrc;
                        var picHtml = "<img src='"+tmpImage+"' class='img-circle' width='100' height='100' />";
                        $('.profile-upload .user-pic span').html(picHtml);

                        //assign the image id to hidden var
                        $('#createeditblogform-thumbnail_image_getty').val('');//not required now
                        $('#createeditblogform-thumbnail_image_upload').val(tmpImage);
                        
                        $('#ModalThumbnailImage').modal('hide');
                        
                        $().General_ShowNotification({message: 'Image added successfully' });
                    },
                    error: function(jqXHR, textStatus, errorThrown){
                        $().General_ShowErrorMessage({message: jqXHR.responseText, type: 'error'});
                        return false;
                    },
                    beforeSend: function(jqXHR, settings) {
                        loadingGettyImage = true;
                        $('#ModalThumbnailImage .modal-content').General_AddRemoveAjaxLoader();
                    },
                    complete: function(jqXHR, textStatus) {
                        loadingGettyImage = false;
                        $('#ModalThumbnailImage .modal-content').General_AddRemoveAjaxLoader();
                    }
                });
                
            }
        });
        
        //Tags auto completer
        $('#BlogArticleTags').autocompleter({
            // marker for autocomplete matches
            highlightMatches: true,
            // object to local or url to remote search
            source: baseHttpPath + '/general/tags',
            // show hint
            hint: true,
            // abort source if empty field
            empty: false,
            // max results
            limit: 10,
            // Minimum words
            minLength: 3
        });
        
        //Tag Addition
        $('.sr-plus').click(function (e){

            e.preventDefault();

            var oldVal = $('#blogTags').val();
            var input_value = $('#BlogArticleTags').val();
            if (input_value === '') {
                return;
            }
            
            var template = Handlebars.compile(userblogs_createeditblog_tags);
            var result = [{"inputValue": input_value}];
            
            $('#blogTags').val(oldVal + input_value + ',');
            $('.autocomplete-selected-item-lists')
                .removeClass('hide')
                .append(template(result));        
            $('#BlogArticleTags').val('');

        });
        
        //Tag remove
        $('.autocomplete-selected-item-lists').on("click", '.tag', function(e){
            
            e.preventDefault();
            var elem = $(this);
            var title = elem.attr('title');
            var tagElem = $('#blogTags');
            var tags_list = tagElem.val();
            
            tagElem.val(tags_list.replace(title + ',', ''));
            elem.remove();
            
            if (tagElem.val() == '') {
                $('.autocomplete-selected-item-lists').addClass('hide');
            }
        });
        
        //Hex Colour Selector
        $('span.pallete a').click(function (e){ 
            e.preventDefault();
            $('#createeditblogform-hex_color').val($(this).attr('title'));  
            $('.color-pallete a').removeClass('selected');
            $(this).addClass('selected');
        });
        
        $('.AddMoreWebsiteUrl').on('click',function(e){
            e.preventDefault();
            var num = $(this).attr('shownext');
            $(".field-createeditblogform-website_url"+num).slideDown('slow');
            $(this).hide();
        });
        
        $('.RemoveWebsiteUrl').on('click', function(e){
            e.preventDefault();
            var num = $(this).attr('removenum');
            $('#createeditblogform-website_url'+num).val('');
            var parentDiv = $(this).parent('div');
            var numPrev = num-1;
            var sib = parentDiv.siblings('.field-createeditblogform-website_url'+numPrev);
            sib.children('.AddMoreWebsiteUrl').show();
            $(".field-createeditblogform-website_url"+num).slideUp('slow');
        });
        
        //disconnect social account (Settings)
        $('button.disconnect').click(function(e){
            e.preventDefault();
            e.stopPropagation();
            var socialClient = $(this).data('social');
            var btnObj = $(this);
                bootbox.confirm({
                        title: "Confirm",
                        message: "Do you really want to disconnect this social account?",
                        callback: function(result) {
                    if (result) {
                        $.ajax({
                            type: 'POST',
                            url: baseHttpPath + '/user-blogs/disconnect-social',
                            dataType: 'json',
                            data: {social : socialClient, blogId: $(btnObj).data('blogid'), _csrf : yii.getCsrfToken()},
                            success: function(data, textStatus, jqXHR) {
                                $(btnObj).parent('a').removeClass('connected').addClass('not-connected');
                                $(btnObj).remove();
                            },
                            error: function(jqXHR, textStatus, errorThrown){
                                $().General_ShowErrorMessage({message: jqXHR.responseText});
                            }
                        });
                    }
				}
			});
		});
    };
        
    return {
		init: function() {
			attachEvents();
        }
	};
	
}(jQuery));

/*Index Tab*/
MyBlogController.BlogsTab = (function($) {
    
    var attachEvents = function() {
        
         var toggleBlogPosts = function(options){
            var defaults = {
                container: '',
                blogId: 0,
                slideToggle: true
            };
            var opts = $.extend( {}, defaults, options );
         
            if(isNaN(opts.blogId) || opts.blogId <= 0){
                return;
            }
            if(opts.slideToggle == false) {
                opts.container.show();
                $(opts.elem).children('i').removeClass('fa-angle-down').addClass('fa-angle-up');
                $(opts.elem).attr('title', 'Hide post listing');
                return;
            }
            opts.container.slideToggle();
            
            if($(opts.elem).children('i').hasClass('fa-angle-down')) {
                $(opts.elem).children('i').removeClass('fa-angle-down').addClass('fa-angle-up');
                $(opts.elem).attr('title', 'Hide post listing');
            }
            else {
                $(opts.elem).children('i').removeClass('fa-angle-up').addClass('fa-angle-down');
                $(opts.elem).attr('title', 'Display post listing');  
            } 
         };
         
        $('.ToggleBlogPosts').on('click', function(e){
            e.preventDefault();
            var blogId = $(this).data('blogid');
            var container = $('div.BlogPostsContainer'+blogId);
            toggleBlogPosts({container: container, blogId: blogId,elem: $(this)});
        });
              
        //get blog posts by type::published|drafts
        $('.blog-posts-list').click( function(e){
            e.preventDefault();
            var post_type = $(this).data('type');
            var blogId = $(this).data('id');
            var publishedListContainer = $('#published-list_container_' + blogId);
            var draftListContainer = $('#draft-list_container_' + blogId);
            var reviewListContainer = $('#review-list_container_' + blogId);
            var reviewedPublishedListContainer = $('#reviewed-published-list_container_' + blogId);
            
            $('.sortData-'+blogId).removeClass('selected');//no-link
            $('.sortPostData'+blogId).removeClass('selected');//no-link
            $(this).addClass('selected');            
            
            if(post_type == 'published') {
                $('.draft-element', draftListContainer).addClass('hide');
                $('.review-element', reviewListContainer).addClass('hide');
                $('.reviewed-published-element', reviewedPublishedListContainer).addClass('hide');
                $('.publish-element', publishedListContainer).removeClass('hide');
                $('.sortBlogs-'+blogId).show();
            }
            else if(post_type == 'draft') {
                $('.draft-element', draftListContainer).removeClass('hide');
                $('.publish-element', publishedListContainer).addClass('hide');
                $('.reviewed-published-element', reviewedPublishedListContainer).addClass('hide');
                $('.review-element', reviewListContainer).addClass('hide');
                $('.sortBlogs-'+blogId).hide();
            }
            else if(post_type == 'review') {
                $('.review-element', reviewListContainer).removeClass('hide');
                $('.publish-element', publishedListContainer).addClass('hide');
                $('.reviewed-published-element', reviewedPublishedListContainer).addClass('hide');
                $('.draft-element', draftListContainer).addClass('hide');
                $('.sortBlogs-'+blogId).hide();
            }
            else if(post_type == 'reviewed-published') {
                $('.review-element', reviewListContainer).addClass('hide');
                $('.publish-element', publishedListContainer).addClass('hide');
                $('.reviewed-published-element', reviewedPublishedListContainer).removeClass('hide');
                $('.draft-element', draftListContainer).addClass('hide');
                $('.sortBlogs-'+blogId).hide();
            }
            
            //Attach listener
            var container = $('div.BlogPostsContainer'+blogId);
            toggleBlogPosts({container:container, slideToggle:false, blogId:blogId,elem: $('.togglePost-'+blogId)});
            
            
        });
        
        //triggers on deleting a post from the blog.
        $('.tab-content-inner').on('click', '.deletePost', function(e) {
            e.preventDefault();
            var elem = $(this);
            var hasworkflowaccess = parseInt($(this).data('hasworkflowaccess'));
            if( !isNaN(hasworkflowaccess) && hasworkflowaccess !== 1) {
                $().General_ShowErrorMessage({message: "This article is locked and is under review."});
                return false;
            }
            
            bootbox.confirm({
                title: "Confirm",
                message: "are you sure you want to delete this post?",
                callback: function(result) {
                    if (result == true) {
                        var post_id = $(elem).data('id');
                        var postType = $(elem).data('type');
                        var blog_id = $(elem).closest('.polpular-writers').data('blogid');
                        var csrfToken = $('meta[name="csrf-token"]').attr("content");
                        var socialType = $(elem).data('post');
                        var isSocialPost = null;
                        
                        if(socialType == 'social') {
                            isSocialPost = 1;
                        }

                        $.ajax({
                            url: baseHttpPath + '/user/delete-post',
                            type: 'post',
                            data: {postId : post_id, blogId : blog_id, _csrf : csrfToken,isSocialPost : isSocialPost},
                            success: function(data) {
                                if(postType === 'draft') {
                                    $('#draft-list_container_' + blog_id).find('#postId_' + post_id).slideUp();                          
                                    $('#draft-list_container_' + blog_id).find('#postId_' + post_id).remove();  
                                    var existingCount = parseInt($('span.DraftsCount'+blog_id).html());
                                    if(!isNaN(existingCount) && existingCount > 0) {
                                        var newCount = existingCount - 1;
                                        if(newCount > 0) {
                                            $('span.DraftsCount' + blog_id).html(newCount);
                                        }
                                        else {
                                            $('span.DraftsCountContainer' + blog_id).remove();
                                            $('#draft-list_container_' + blog_id + ' ul.draft-list').append("<p class=\"no-data\">No draft articles found</p>");
                                        }
                                    }
                                }
                                else if (postType === 'review') {
                                    $('#review-list_container_' + blog_id).find('#postId_' + post_id).slideUp();                          
                                    $('#review-list_container_' + blog_id).find('#postId_' + post_id).remove();                                     
                                    var existingCount = parseInt($('span.ReviewCount'+blog_id).html());
                                    if(!isNaN(existingCount) && existingCount > 0) {
                                        var newCount = existingCount - 1;
                                        if(newCount > 0) {
                                            $('span.ReviewCount' + blog_id).html(newCount);
                                    	}                         
                                        else {
                                            $('span.ReviewCountContainer' + blog_id).remove();
                                            $('#review-list_container_' + blog_id + ' ul.review-list').append("<p class=\"no-data\">No review articles found</p>");
                                        }
                                    }

                                }
                                else if (postType === 'published') {
                                    $('#published-list_container_' + blog_id).find('#postId_' + post_id).slideUp();                          
                                    $('#published-list_container_' + blog_id).find('#postId_' + post_id).remove();  
                                    if($('#published-list_container_' + blog_id + ' ul.publish-element').children('li').length<= 0) {
                                        $('#published-list_container_' + blog_id + ' ul.publish-element').append("<p class=\"no-data\">No published articles found</p>");
                                    } 
                                }
                                
                            },
                            error: function(jqXHR, textStatus, errorThrown){
                                $().General_ShowErrorMessage({message: jqXHR.responseText});
                            }
                        });
                    }
                }
            });
        });
        
        //triggers when blog owner wants to delete a blog
        $('.deleteBlog').deleteBlog({
           'onSuccess': function(data, obj){
                $().General_ShowNotification({message: 'Successfully deleted' });
                $('div.blogId_' + $(obj).data('id') + '_row').slideUp().remove();
                var currentCount = parseInt($('.totalActiveBlogs').data('count'));
                currentCount = currentCount - 1;
                $('.totalActiveBlogs').data('count', currentCount).html(currentCount);
           },
           'onError': function(obj, errorMessage) {
                $().General_ShowErrorMessage({message: errorMessage});
           },
           'beforeSend': function(obj) {
               $('i', obj).General_AddRemoveSpinnerIcon();
           },
           'onComplete': function(obj){
                $('i', obj).General_AddRemoveSpinnerIcon();
           }
        });
                
        //triggers if user wants to make any blog default.
        $('.check-default').click(function() {

            var blog_id = $(this).attr('id');

            if ($(this).filter(':checked').length > 0) {
                var checkboxObj = $(this);
                var csrfToken = $('meta[name="csrf-token"]').attr("content");
                $.ajax({
                    url: baseHttpPath + '/user-blogs/make-blog-default',
                    type: 'post',
                    data: {blogId : blog_id, _csrf : csrfToken},
                    dataType: 'json',
                    success: function() {
                        $('.check-default').not(checkboxObj).prop('checked', false);
                        $().General_ShowNotification({message: "Default blog updated successfully."});
                    },
                    error: function(jqXHR, textStatus, errorThrown){
                        $().General_ShowErrorMessage({message: jqXHR.responseText});
                    }
                });
            } 
            else {
                bootbox.alert({
                    title: "Alert!",
                    message: "You must have one default blog.",
                    callback: function() { 
                         $('.check-default#'+blog_id).attr('checked', 'checked');
                    }
                });
            }
        });
        
        var loadMorePosts = function(options){
            var defaults = {
                listClass: null,
                listContainer: null,
                loader:null,
                onSuccess: false,
                onError: false,
                beforeSend: false,
                onComplete: false,
                page: 0,
                blogId: 0,
                postType: 'published',
                limit : 10,
                sort: '',
                replaceExisting: false,
                
            };
            var opts = $.extend( {}, defaults, options );
         
            if(isNaN(opts.blogId) || opts.blogId <= 0){
                return;
            }
            if(isNaN(opts.page)){
                return;
            }
            
            var csrfToken = $('meta[name="csrf-token"]').attr("content");
            $.ajax({
                url: baseHttpPath + '/user-blogs/load-more-posts',
                type: 'post',
                dataType: 'json',
                data: {blog_id: opts.blogId, offset: opts.offset, post_type: opts.postType, limit: opts.limit, sort:opts.sort, _csrf : csrfToken },
                success: function(data){
                    if(data.success == 1) {
                        if(data.posts.length > 0){
                            if(opts.replaceExisting) {
                                var results = data.posts;                            
                                var template = Handlebars.compile(userblogs_blog_loadposts);
                                $(opts.listClass, opts.listContainer).html(template(results));
                            }
                            else {
                                var results = data.posts;                            
                                var template = Handlebars.compile(userblogs_blog_loadposts);
                                $(opts.listClass, opts.listContainer).append(template(results));
                            }
                        }
                        else if(opts.loader !=null) {
                            $(opts.loader).addClass('hide');
                            $(opts.loader).parent().addClass('hide');
                        }
                    }
                },
                error: function(jqXHR, textStatus, errorThrown){
                    $().General_ShowErrorMessage({message: jqXHR.responseText});
                },
                beforeSend: function() { 
                    if(opts.loader != null) {
                        $('i', opts.loader).General_AddRemoveSpinnerIcon();
                    }
                },
                complete: function() {
                    if(opts.loader != null) {
                        $('i', opts.loader).General_AddRemoveSpinnerIcon();
                    }
                }
            });
            
        };   
        
        $('.loadPosts').click(function(e){
            e.preventDefault();
            var btnObj = $(this);
            var blogId = $(this).data('blog');
            var postType = $(this).data('type');
            var limit = $(this).data('loadcount');  
            var offset = $(this).parent().parent().children('ul').children('li').length;
            var sortColumn = $(".sortData-"+blogId+".selected").data('sort');
            var listContainer = $('#published-list_container_' + blogId);
            var listClass = ".published-list";
            
            if(postType == 'draft') {
                 listContainer = $('#draft-list_container_' + blogId);
                 listClass = ".draft-list";
            }else if(postType == 'review') {
                 listContainer = $('#review-list_container_' + blogId);
                 listClass = ".review-list";
            }else if(postType == 'reviewed-published') {
                 listContainer = $('#reviewed-published-list_container_' + blogId);
                 listClass = ".reviewed-published-list";
            }
              
            loadMorePosts({listContainer:listContainer,listClass:listClass,loader:btnObj,sort:sortColumn, blogId:blogId,postType:postType,limit:limit,offset:offset}); 
        });
        
        $('.sortByDate').on('click', function (e) {
            e.preventDefault();
            var elem = $(this);
            var blogId = elem.data('id');
            var sortColumns = elem.data('sort');
            var postType = $('.blog-posts-list.selected').data('type');
            
            var listContainer = $('#published-list_container_' + blogId);
            var listClass = ".published-list";
            if(postType == 'draft') {
                 listContainer = $('#draft-list_container_' + blogId);
                 listClass = ".draft-list";
            }else if(postType == 'review') {
                 listContainer = $('#review-list_container_' + blogId);
                 listClass = ".review-list";
            }else if(postType == 'reviewed-published') {
                 listContainer = $('#reviewed-published-list_container_' + blogId);
                 listClass = ".reviewed-published-list";
            }
            
            if(!elem.hasClass('selected')) {
                loadMorePosts({listContainer: listContainer,listClass: listClass,postType: postType, blogId: blogId, sort: sortColumns,  replaceExisting: true}); 
                $('.sortData-'+blogId).removeClass('selected');
                elem.addClass('selected');
            }
            /**
            var sort = (elem.data('sort') == 'published_at') ? 'published' : 'created';
            var sortType = elem.data('sort-type');
            var setType = (sortType == 'ASC') ? 'DESC' : 'ASC';
             
            $('.sort-' + id).sort(function (a, b) {
                    if(sortType == 'ASC') {
                       return ($(a).data(sort) > $(b).data(sort)) ? 1 : 0; 
                    }
                    else {
                        return ($(a).data(sort) < $(b).data(sort)) ? 1 : 0; 
                    }
                }).each(function (_, container) {
                    $(container).parent().append(container);
                });
                $('.sortByDate').removeClass('selected');
                
                elem.data('sort-type',setType);
                **/
        });
        
        
    };        

    return {
        init: function() {
            attachEvents();
        }
    };

}(jQuery));

/*Permissions Tab:: Get List of Writers*/
MyBlogController.PermissionsTab = (function() {
        
    var attachEvents = function (){
        
        //triggers on closing a modal window in Permissions tab.
//        $('.close-authors-modal').click( function (){
//            var blog_id = $(this).data('id');
//            location.href = baseHttpPath + '/user-blogs/permissions?blogId='+ blog_id;
//        });        
        
        function _searchWriters() {
            var modal = $('.permissionAddWriter');
            var elem = $('.get-writers-btn');
            var search_query = $('.search-query').val();
            var blog_id = elem.data('id');
            var csrfToken = $('meta[name="csrf-token"]').attr("content");
            if (search_query == '') {
                $().General_ShowNotification({
                    'type': 'error',
                    'message': 'Please enter the search term'
                });
                return;
            }
            
            $.ajax({
                url: baseHttpPath + '/user-blogs/search-writers',
                type: 'post',
                data: {blogId : blog_id, query : search_query, _csrf : csrfToken},
                dataType: 'json',
                success:  function (data){
                    if(data.success == 1) {
                        $('.row-result', modal).show();
                        if( data.writers.length > 0 ) { 
                            $("#blogWritersList").html('');
                            var results = data.writers;                            
                            var template = Handlebars.compile(userblogs_permissions_blog);
                            
                            Handlebars.registerHelper('thisBlogId', function(blog) {
                                return blog = blog_id;
                            });
                            
                            $('.scroller-codes', modal).removeClass('hide');
                            $('.no-data', modal).addClass('hide');
                            $("#blogWritersList").append(template(results));
   
                        }
                        else {
                            $('.scroller-codes', modal).addClass('hide');
                            $('.no-data', modal).removeClass('hide');
                        }
                    }
                    else {
                        $().General_ShowErrorMessage({message: data.error});
                    }
                },
                error: function(jqXHR, textStatus, errorThrown){
                    $().General_ShowErrorMessage({message: jqXHR.responseText});
                },
                beforeSend: function() { 
                    $('.loader', modal).removeClass('hide');
                },
                complete: function() {
                    $('.loader', modal).addClass('hide');
                }
            });
        }
        
        //this function triggers when a blog owner search writers to add in a blog
        $('.get-writers-form').submit(function (e){ 
            e.preventDefault();
            _searchWriters();
        });
        
        //this function triggers when user want to add any writer froma  searched list
        $('.add-author').live("click", function (){ 

            var elem = $(this);
            //var ids = elem.attr('id').split('_');
            var author_id = elem.data('id');
            var blog_id = elem.data('blogid');
            var csrfToken = $('meta[name="csrf-token"]').attr("content");

            $.ajax({
                url: baseHttpPath + '/user-blogs/add-writers',
                type: 'post',
                data: {authorId : author_id, blogId : blog_id, _csrf : csrfToken},
                dataType: 'json',
                success:  function (data){ 

                    if ( data.success == 1 ) {
                        var template = Handlebars.compile(userblogs_permissions_writers);
                        elem.find('i').removeClass('fa-plus').addClass('fa-close');                            
                        elem.removeClass('add-author').addClass('remove-author');

                        //Handlebars helper function to get the blog id in the writer markup template.
                        Handlebars.registerHelper('thisBlog', function(id) {
                            return id = blog_id;
                        });

                        $("#blogAuthors").removeClass('hide').prepend(template(data.writer));
                        $('#Permissions p.no-data').addClass('hide');
                        $().General_ShowNotification({'message': 'Successfully added'});
                    }
                    else {
                        $().General_ShowErrorMessage({title: 'Alert!', message: 'Writer already added! Add other writers'});
                    }
                },
                error: function(jqXHR, textStatus, errorThrown){
                    $().General_ShowErrorMessage({message: jqXHR.responseText});
                },
                beforeSend: function() {
                    $('.loader').removeClass('hide');
                },
                complete: function() {
                    $('.loader').addClass('hide');
                }
            });
        });
        
        //function triggers if blog owner delete any added writer from the blog
        $('.remove-author').live('click', function (){ 
            var elem = $(this);

            bootbox.confirm({
                title: "Confirm",
                message: "Do you really want to remove this writer?",
                callback: function(result) {

                    if(result == true) {

                        var author_id = elem.data('id');
                        var blog_id = elem.data('blogid');
                        var referer = elem.data('referer') ? elem.data('referer') : '';
                        var csrfToken = $('meta[name="csrf-token"]').attr("content");

                        $.ajax({
                            url: baseHttpPath + '/user-blogs/remove-author',
                            type: 'post',
                            data: {blogId : blog_id, authorId : author_id, _csrf : csrfToken},
                            dataType: 'json',
                            success:  function (data){
                                if (data.success == 1) {
                                    if(referer == 'modal-box') {
                                        elem.find('i').removeClass('fa-close').addClass('fa-plus');                            
                                        elem.removeClass('remove-author').addClass('add-author');
                                        //lets remove it from parent window
                                        $('#blogAuthors li.writer-' + author_id).slideUp('normal', function(){
                                            $(this).closest('li').remove();
                                            if ($('#Permissions #blogAuthors li').length <= 1) {
                                                $("#blogAuthors").addClass('hide');
                                                $('#Permissions p.no-data').removeClass('hide');
                                            }
                                        });
                                        $().General_ShowNotification({'message': 'Successfully removed'});
                                    }
                                    else {
                                        elem.closest('li').slideUp('normal', function(){
                                            $(this).closest('li').remove();
                                            if ($('#Permissions #blogAuthors li').length <= 1) {
                                                $("#blogAuthors").addClass('hide');
                                                $('#Permissions p.no-data').removeClass('hide');
                                            }
                                        });
                                    }
                                } 
                                else {
                                    $().General_ShowErrorMessage({message: data.error});
                                }
                            },
                            error: function(jqXHR, textStatus, errorThrown){
                                $().General_ShowErrorMessage({message: jqXHR.responseText});
                            },
                            beforeSend: function() {
                                $('.loader').removeClass('hide');
                            },
                            complete: function() {
                                $('.loader').addClass('hide');
                            }
                        });
                    }
                }
            }); 
        });
    };
	
	return {
		init: function() {
			attachEvents();
		}
	};
	
}(jQuery));

/*Connect Tab*/
MyBlogController.ConnectTab = (function() {
        
    var attachEvents = function (){
        
                //disconnect social account (Settings)
                $('button.disconnect').click(function(e){
                    e.preventDefault();
                    e.stopPropagation();
                    var socialClient = $(this).data('social');
                    bootbox.confirm({
                        title: "Confirm",
                        message: "Do you really want to disconnect this social account?",
                        callback: function(result) {
                            if (result) {
                                var csrfToken = $('meta[name="csrf-token"]').attr("content");
                                $.ajax({
                                    type: 'POST',
                                    url: baseHttpPath + '/user/disconnect-social',
                                    dataType: 'json',
                                    data: {social : socialClient, _csrf : csrfToken},
                                    success: function(data, textStatus, jqXHR) {
                                        $().General_ShowNotification({'message': 'Social account disconnected successfully'});
                                        setTimeout(function(){
                                            location.reload();
                                        }, 1000);
                                    },
                                    error: function(jqXHR, textStatus, errorThrown){
                                        $().General_ShowErrorMessage({message: jqXHR.responseText});
                                    }
                                });
                            }
                        }
                    });
                });
        
        $('div.elem-block').on('click', '.IncludeRetweets', function(e){
            var value = ($(this).is(':checked')) ? 1 : 0;
            var keywordId = $(this).data('id');
            var csrfToken = $('meta[name="csrf-token"]').attr("content");

            $.ajax({
                url: baseHttpPath + '/user-blogs/update-twitter-keyword',
                type: 'post',
                data: {value: value, keywordid: keywordId, action: 'include-retweets', _csrf: csrfToken},
                dataType: 'json',
                success:  function (data){ 
                        if(data.success == 1) {
                            $().General_ShowNotification({'message': 'Settings updated successfully'});
                        }
                        else {
                            $().General_ShowErrorMessage({message: "Error- Please try again later."});
                        }
                },
                error: function(jqXHR, textStatus, errorThrown){
                    $().General_ShowErrorMessage({message: jqXHR.responseText});
                },
                beforeSend: function() { 
                },
                complete: function() {
                }

            });
        });
        
        $('div.elem-block').on('change', '.TweetsType', function(e){
            var type = $(this).val();
            var keywordId = $(this).data('id');
            var csrfToken = $('meta[name="csrf-token"]').attr("content");

            $.ajax({
                url: baseHttpPath + '/user-blogs/update-twitter-keyword',
                type: 'post',
                data: {type: type, keywordid: keywordId, action: 'tweets-type', _csrf: csrfToken},
                dataType: 'json',
                success:  function (data){ 
                        if(data.success == 1) {
                            $().General_ShowNotification({'message': 'Settings updated successfully'});
                        }
                        else {
                            $().General_ShowErrorMessage({message: "Error- Please try again later."});
                        }
                },
                error: function(jqXHR, textStatus, errorThrown){
                    $().General_ShowErrorMessage({message: jqXHR.responseText});
                },
                beforeSend: function() { 
                },
                complete: function() {
                }

            });
        });
       
        $('div.portlet-body').on('click', 'span[name=include_trusted_source_social_content_blogfeed]', function(){
            var state = ($('.IncludeTrustedSocialContentBlogfeed').is(' :checked')) ? 1 : 0;
            var blogId = $('.IncludeTrustedSocialContentBlogfeed').data('blogid');
            var csrfToken = $('meta[name="csrf-token"]').attr("content");
            
                $.ajax({
                    url: baseHttpPath + '/user-blogs/trusted-source-settings',
                    type: 'post',
                    data: {blogId: blogId, state: state, _csrf: csrfToken},
                    dataType: 'json',
                    success:  function (data){ 
                            if(data.success == 1) {
                                $().General_ShowNotification({'message': 'Settings changed successfully'});
                            }
                            else {
                                $().General_ShowErrorMessage({message: "Error- Please try again later."});
                            }
                    },
                    error: function(jqXHR, textStatus, errorThrown){
                        $().General_ShowErrorMessage({message: jqXHR.responseText});
                    },
                    beforeSend: function() { 
                    },
                    complete: function() {
                    }

                });
        });
        
        // bad keywords filter
        $('div.portlet-body').on('click', 'span[name=bad_words_standard_filter]', function(){
            var state = ($('.badWordStdFilter').is(':checked')) ? 1 : 0;
            var blogId = $('.badWordStdFilter').data('blogid');
            var csrfToken = $('meta[name="csrf-token"]').attr("content");
            
            $.ajax({
                url: baseHttpPath + '/user-blogs/bad-keyword-settings',
                type: 'post',
                data: {blogId: blogId, state: state, _csrf: csrfToken},
                dataType: 'json',
                success:  function (data){ 
                    if(data.success == 1) {
                        $().General_ShowNotification({'message': 'Settings changed successfully'});
                    }
                    else {
                        $().General_ShowErrorMessage({message: "Error updating - Please try again."});
                    }
                },
                error: function(jqXHR, textStatus, errorThrown){
                    $().General_ShowErrorMessage({message: jqXHR.responseText});
                },
                beforeSend: function() { 
                },
                complete: function() {
                }
            });
        });  
        
                //Add Twitter and InstaGram HashTags
        $('.add-vimeo-channel-group-users').click(function (e){
            
            e.preventDefault();

            var elem = $(this);
            var blog_id = elem.data('id'); 
            var moderationStatus = 0;
            
            var keyword = $('#vimeo-hash-tags').val();
            moderationStatus = $('#vimeo-moderation-status').val();
            var errMsg = 'Please enter a keyword.';
                
            //var hashTag = type == 'instagram' ? $('#instagram-hash-tags').val() : $('#twitter-hash-tags').val();
            var csrfToken = $('meta[name="csrf-token"]').attr("content");
            
            if(keyword != '') {
                $.ajax({
                    url: baseHttpPath + '/user-blogs/add-vimeo-channels',
                    type: 'post',
                    data: {blogId: blog_id, keyword: keyword, moderationStatus: moderationStatus, _csrf: csrfToken},
                    dataType: 'json',
                    success:  function (data){ 
                        $('#vimeoSearchData').html(data.channels);
                        $('.publish-scrollbar').slimScroll({});
                        $('#vimeoSearchData').modal('show');
                    },
                    error: function(jqXHR, textStatus, errorThrown){
                        $().General_ShowErrorMessage({message: jqXHR.responseText});
                    },
                    beforeSend: function() { 
                        $('i', elem).General_AddRemoveSpinnerIcon();
                    },
                    complete: function() {
                        $('i', elem).General_AddRemoveSpinnerIcon();
                    }

                });
            }
            else {
                $().General_ShowNotification({'message': errMsg, 'type': 'error'});
            }
        });
        
        $('#vimeoSearchData').on('click', '.channelListCheckbox', function() {
            $('.channelListCheckbox:checked').not(this).removeAttr('checked');
        });
        
        $('#vimeoSearchData').on('click','.vimeoChannelAddBtn', function() {
            
            var elem = $(this);
            var blogId = elem.data('blogid');
            var moderationStatus = elem.data('moderation');
            var errMsg = "Please enter a Vimeo channel or user keyword.";
            
            var typeName = $(".channelListCheckbox:checked").data('name');
            var typeId = $(".channelListCheckbox:checked").val();
            var typePic = $(".channelListCheckbox:checked").data('pic');
            var vimeoType = $(".channelListCheckbox:checked").data('type');
            
            var csrfToken = $('meta[name="csrf-token"]').attr("content");
            
            if(typeId != '') {
                $.ajax({
                    url: baseHttpPath + '/user-blogs/add-hash-tags',
                    type: 'post',
                    data: {blogId: blogId, type: 'vimeo', vimeoType : vimeoType,  hashTag: typeName, typeId : typeId, typePic : typePic  , moderationStatus: moderationStatus, _csrf: csrfToken},
                    dataType: 'json',
                    success:  function (data){ 
                        
                        if(data.limitExceeded == 1) {
                            
                            bootbox.alert({
                                title: "Alert!",
                                message: "You cannot add more than "+data.tagLimit+" "+data.type+" tags or handles ",
                            });
                            return; 
                        }
                        else {
                        
                            if(data.success == 1) {
                                var moderationStatusStr = (moderationStatus == 1) ? ' ('+vimeoType+') (Publish)' : ' ('+vimeoType+') (Moderate)';
                                var tags = [
                                        {"hashTag":typeName, "blogId":blogId, "type":'vimeo', "tagId":data.tagId, "moderationStatus": moderationStatusStr}
                                    ];

                                    var template = Handlebars.compile(userblogs_connect_hashtags);
                                $('#vimeo-tags-list').append(template(tags));
                                $('#vimeo-hash-tags').val('');
                                $().General_ShowNotification({'message': 'Successfully added'});
                                $('#vimeoSearchData').modal('hide');
                            }
                            else {
                                $().General_ShowErrorMessage({message: data.error});
                            }
                        }
                    },
                    error: function(jqXHR, textStatus, errorThrown){
                        $().General_ShowErrorMessage({message: jqXHR.responseText});
                    },
                    beforeSend: function() { 
                        $('i', elem).General_AddRemoveSpinnerIcon();
                        elem.html('Please Wait...');
                        elem.prop('disabled', true);
                    },
                    complete: function() {
                        $('i', elem).General_AddRemoveSpinnerIcon();
                        elem.prop('disabled', false);
                        elem.html('Add');
                    }

                });
            }
            else {
                $().General_ShowNotification({'message': errMsg, 'type': 'error'});
            }
        })
        
       
        //Add Twitter and InstaGram HashTags
        $('.add-hash-tags').click(function (e){
            
            e.preventDefault();

            var elem = $(this);
            var type = elem.data('type');
            var blog_id = elem.data('id'); 
            var hashTag = "";
            var moderationStatus = 0;
            var errMsg = 'Please enter a keyword.';
            
            if(type == 'instagram') {
                hashTag =$('#instagram-hash-tags').val();
                moderationStatus = $('#instagram-moderation-status').val();
                errMsg = "Please enter an instagram handle or hashtag.";
            }
            else if(type == 'youtube') {
                hashTag =$('#youtube-hash-tags').val();
                moderationStatus = $('#youtube-moderation-status').val();
                errMsg = "Please enter a Youtube channel name.";
            }
            else if(type == 'vimeo') {
                hashTag =$('#vimeo-hash-tags').val();
                moderationStatus = $('#vimeo-moderation-status').val();
                errMsg = "Please enter a Vimeo channel name.";
            }
            else if(type == 'twitter') {
               hashTag = $('#twitter-hash-tags').val();
               moderationStatus = $('#twitter-moderation-status').val();
               errMsg = "Please enter a twitter handle or hashtag.";
            }
            else if(type == 'rss') {
               hashTag = $('#rss-hash-tags').val();  
               errMsg = "Please enter a valid RSS feed url.";
            }
            else if(type == 'facebookPage') {
                  hashTag =$('#facebook-hash-tags').val();
                  moderationStatus = $('#facebook-moderation-status').val();
                  errMsg = "Please select a Facebook page to add.";
             }
              else if(type == 'badWords') {
                  hashTag =$('#bad-words-tags').val();
                  errMsg = "Please enter a bad keyword.";
             }
                
            //var hashTag = type == 'instagram' ? $('#instagram-hash-tags').val() : $('#twitter-hash-tags').val();
            var csrfToken = $('meta[name="csrf-token"]').attr("content");
            
            if(hashTag != '') {
                $.ajax({
                    url: baseHttpPath + '/user-blogs/add-hash-tags',
                    type: 'post',
                    data: {blogId: blog_id, type: type, hashTag: hashTag, moderationStatus: moderationStatus, _csrf: csrfToken},
                    dataType: 'json',
                    success:  function (data){ 
                        
                        if(data.limitExceeded == 1) {
                            
                            bootbox.alert({
                                title: "Alert!",
                                message: "You cannot add more than "+data.tagLimit+" "+data.type+" tags or handles ",
                            });
                            return; 
                        }
                        else {
                        
                            if(data.success == 1) {
                                if(type == 'twitter') {
                                    $('#twitter-tags-list').append(data.html);
                                    $('#twitter-hash-tags').val('');
                                    $(".custom-select").selectbox();
                                }
                                else if(type == 'instagram') {
                                    $('#instagram-tags-list').append(data.html);
                                    $('#instagram-hash-tags').val('');
                                }
                                else {
                                    if(type == 'facebookPage') {
                                      hashTag = $('#facebook-hash-tags option:selected').text();  
                                    }
                                    var moderationStatusStr = (moderationStatus == 1) ? '(Publish)' : '(Moderate)';
                                    if(type == 'rss' || type == 'badWords') {
                                        moderationStatusStr = "";
                                    }
                                    var tags = [
                                        {"hashTag":hashTag, "blogId":blog_id, "type":type, "tagId":data.tagId, "moderationStatus": moderationStatusStr}
                                    ];

                                    var template = Handlebars.compile(userblogs_connect_hashtags);
                                
                                    if(type == 'youtube') {
                                        $('#youtube-tags-list').append(template(tags));
                                        $('#youtube-hash-tags').val('');
                                    }
                                    if(type == 'vimeo') {
                                        $('#vimeo-tags-list').append(template(tags));
                                        $('#vimeo-hash-tags').val('');
                                    }
                                    else if(type == 'rss') {
                                        $('#rss-tags-list').append(template(tags));
                                        $('#rss-hash-tags').val('');
                                    }
                                    else if(type == 'facebookPage') {
                                        $('#facebook-tags-list').append(template(tags));
                                        $('#facebook-hash-tags').val('');
                                    }
                                    else if(type == 'badWords') {
                                        $('#badwords-tags-list').append(template(tags));
                                        $('#bad-words-tags').val('');
                                    }
                                }
                                $().General_ShowNotification({'message': 'Successfully added'});
                            }
                            else {
                                $().General_ShowErrorMessage({message: data.error});
                            }
                        }
                    },
                    error: function(jqXHR, textStatus, errorThrown){
                        $().General_ShowErrorMessage({message: jqXHR.responseText});
                    },
                    beforeSend: function() { 
                        $('i', elem).General_AddRemoveSpinnerIcon();
                    },
                    complete: function() {
                        $('i', elem).General_AddRemoveSpinnerIcon();
                    }

                });
            }
            else {
                $().General_ShowNotification({'message': errMsg, 'type': 'error'});
            }
        });
        
        //Remove Twitter and InstaGram HashTags
        $('.hash-tag-remove').live("click", function (e){
            
            e.preventDefault();

            var elem = $(this);
            var type = elem.data('type');
            var tagId = elem.data('id');
            var blog_id = elem.data('blogid');
            var csrfToken = $('meta[name="csrf-token"]').attr("content");

            $.ajax({
                url: baseHttpPath + '/user-blogs/remove-hash-tag',
                type: 'post',
                data: {blogId: blog_id, type: type, tagId: tagId, _csrf: csrfToken},
                dataType: 'json',
                success:  function (data){
                    
                    if(data.success == 1) {
                        $(elem).closest('li').slideUp();
                    }
                    else {
                        $().General_ShowErrorMessage({message: data.error});
                    }
                },
                error: function(jqXHR, textStatus, errorThrown){
                    $().General_ShowErrorMessage({message: jqXHR.responseText});
                },
                beforeSend: function() { 
                    $('i', elem).General_AddRemoveSpinnerIcon();
                },
                complete: function() {
                    $('i', elem).General_AddRemoveSpinnerIcon();
                }
                
            });
        });
        
        function _searchBlogs() {
            var modal = $('.connectAddSources');
            var elem = $('.get-sources-btn');
            var search_query = $('.search-query').val();
            var blog_id = elem.data('id');
            var csrfToken = $('meta[name="csrf-token"]').attr("content");
            if (search_query == '') {
                $().General_ShowNotification({
                    'type': 'error',
                    'message': 'Please enter the search term'
                });
                return;
            }
            
            $.ajax({
                url: baseHttpPath + '/user-blogs/search-trusted-sources',
                type: 'post',
                data: {blogId : blog_id, query : search_query, _csrf : csrfToken},
                dataType: 'json',
                success:  function (data){
                    if(data.success == 1) {
                        $('.row-result', modal).show();
                        if( data.blogs.length > 0 ) { 
                            $("#blogWritersList").html('');
                            var results = data.blogs;                            
                            var template = Handlebars.compile(userblogs_connect_sources);
                            
                            Handlebars.registerHelper('loggedUser', function(status, options) {
                                var fnTrue=options.fn, fnFalse=options.inverse;
                                return status = data.loggedUser == true ? fnTrue() : fnFalse();
                            }); 
                            
                            Handlebars.registerHelper('thisBlog', function(blogId) {
                                return blogId = blog_id;
                            });

                            $('.scroller-codes', modal).removeClass('hide');
                            $('.no-data', modal).addClass('hide');
                            $("#blogWritersList").append(template(results));
   
                        }
                        else {
                            $('.scroller-codes', modal).addClass('hide');
                            $('.no-data', modal).removeClass('hide');
                        }
                    }
                    else {
                        $().General_ShowErrorMessage({message: data.error});
                    }
                },
                error: function(jqXHR, textStatus, errorThrown){
                    $().General_ShowErrorMessage({message: jqXHR.responseText});
                },
                beforeSend: function() { 
                    $('.loader', modal).removeClass('hide');
                },
                complete: function() {
                    $('.loader', modal).addClass('hide');
                }
            });
        }
        
        //this function triggers when a blog owner search writers to add in a blog
        $('.get-sources-form').submit(function (e){ 
            e.preventDefault();
            _searchBlogs();
        });
        
        //this function triggers when user want to add any writer froma  searched list
        $('.add-source').live("click", function (e){ 
            e.preventDefault();
            var elem = $(this);
            //var ids = elem.attr('id').split('_');
            var ref_blog_id = elem.data('ref');
            var blog_id = elem.data('id');
            var csrfToken = $('meta[name="csrf-token"]').attr("content");

            $.ajax({
                url: baseHttpPath + '/user-blogs/add-trusted-sources',
                type: 'post',
                data: {refBlogId : ref_blog_id, blogId : blog_id, _csrf : csrfToken},
                dataType: 'json',
                success:  function (data){ 

                    if ( data.success == 1 ) {
                        var template = Handlebars.compile(userblogs_connect_addedSources);
                        elem.find('i').removeClass('fa-plus').addClass('fa-close');                            
                        elem.removeClass('add-source').addClass('remove-source');

                        //Handlebars helper function to get the blog id in the writer markup template.
                        Handlebars.registerHelper('thisBlog', function(blogId) {
                            return blogId = blog_id;
                        });

                        $("#blogAuthors").removeClass('hide').prepend(template(data.blog));
                        $('#Connect p.no-data').addClass('hide');
                        $().General_ShowNotification({'message': 'Successfully added'});
                    }
                    else {
                        $().General_ShowErrorMessage({title: 'Alert!', message: 'Source already added! Add other source.'});
                    }
                },
                error: function(jqXHR, textStatus, errorThrown){
                    $().General_ShowErrorMessage({message: jqXHR.responseText});
                },
                beforeSend: function() {
                    $('.loader').removeClass('hide');
                },
                complete: function() {
                    $('.loader').addClass('hide');
                }
            });
        });
        
        //function triggers if blog owner delete any added writer from the blog
        $('.remove-source').live('click', function (e){ 
            e.preventDefault();
            var elem = $(this);

            bootbox.confirm({
                title: "Confirm",
                message: "Do you really want to remove this source from the blog?",
                callback: function(result) {

                    if(result == true) {

                        var blog_id = $(elem).data('id');
                        var ref_blog_id = $(elem).data('ref');
                        var referer = $(elem).data('referer') ? $(elem).data('referer') : '';
                        var csrfToken = $('meta[name="csrf-token"]').attr("content");

                        $.ajax({
                            url: baseHttpPath + '/user-blogs/remove-trusted-sources',
                            type: 'post',
                            data: {blogId : blog_id, refBlogId : ref_blog_id, _csrf : csrfToken},
                            dataType: 'json',
                            success:  function (data){
                                if (data.success == 1) {
                                    if(referer == 'modal-box') {
                                        $(elem).find('i').removeClass('fa-close').addClass('fa-plus');                            
                                        $(elem).removeClass('remove-source').addClass('add-source');
                                        //lets remove it from parent window
                                        $('#blogAuthors li.source-' + id).slideUp('normal', function(){
                                            $(this).closest('li').remove();
                                            if ($('#Connect #blogAuthors li').length <= 1) {
                                                $("#blogAuthors").addClass('hide');
                                                $('#Connect p.no-data').removeClass('hide');
                                            }
                                        });
                                        $().General_ShowNotification({'message': 'Successfully removed'});
                                    }
                                    else {
                                        $(elem).closest('li').slideUp('normal', function(){
                                            $(this).closest('li').remove();
                                            if ($('#Connect #blogAuthors li').length <= 1) {
                                                $("#blogAuthors").addClass('hide');
                                                $('#Connect p.no-data').removeClass('hide');
                                            }
                                        });
                                    }
                                } 
                                else {
                                    $().General_ShowErrorMessage({message: data.error});
                                }
                            },
                            error: function(jqXHR, textStatus, errorThrown){
                                $().General_ShowErrorMessage({message: jqXHR.responseText});
                            },
                            beforeSend: function() {
                                $('.loader').removeClass('hide');
                            },
                            complete: function() {
                                $('.loader').addClass('hide');
                            }
                        });
                    }
                }
            }); 
        });
        
    };
	
	return {
		init: function() {
			attachEvents();
		},
        facebookPageScroll: function() {
            $('html,body').animate({
                scrollTop: $('#facebookPages').offset().top - 20
            },2000);
        }
	};
    
}(jQuery));

/*Insights Tab*/
MyBlogController.InsightsTab = (function() {
        var bindFollowUnfollowWriter = function(){
            $('.FollowUnfollowWriter').followWriter({
               'onError': function(obj, errorMessage) {
                    $().General_ShowErrorMessage({message: errorMessage});
                },
                'beforeSend': function(obj) {
                   $('i', obj).General_AddRemoveSpinnerIcon();
                },
                'onComplete': function(obj){
                     $('i', obj).General_AddRemoveSpinnerIcon();
                     var status = $(obj).data('status');
                     (status === 'follow')? $(obj).removeClass('selected') : $(obj).addClass('selected');
                     (status === 'follow')? $().General_ShowNotification({message: 'Successfully unfollowed' }) : $().General_ShowNotification({message: 'Successfully followed' });
                }
            });
    };
    
    var attachEvents = function (){
        bindFollowUnfollowWriter();
        
        $('button.ArticlePerformanceLoadMore').on('click', function(e){
            var blogId = parseInt($(this).data('blogid'));
            var offset = parseInt($(this).data('offset'));
            
            if(isNaN(blogId) || blogId <= 0 || isNaN(offset)) {
                $(this).addClass('hide');
                return;
            }
            var btnObj = $(this);
            $.ajax({
                type: 'POST',
                url: baseHttpPath + '/user-blogs/more-recent-posts',
                dataType: 'json',
                data: {blogId : blogId, offset: offset, _csrf : yii.getCsrfToken()},
                success: function(data, textStatus, jqXHR) {
                    
                    if(data.success === 1) {
                        $('div.RecentArticlesContainer').append(data.html);
                        $(btnObj).data('offset', (offset + 10));
                    }
                    
                    if(data.totalCount < 10) {
                        $(btnObj).remove();
                    }
                },
                error: function(jqXHR, textStatus, errorThrown){
                    $().General_ShowErrorMessage({message: jqXHR.responseText});
                }
            });
        });
        
        $('div.InsightsContainer').on('click', 'a.ArticlePerformance', function(e){
            var postId = $(this).data('postid');
            var loaded = $(this).data('loaded');
            if(loaded == 1) {
                return;
            }
            var csrfToken = $('meta[name="csrf-token"]').attr("content");
            var href = $(this).attr('href');
            var elem = $(this);
            $.ajax({
                url: baseHttpPath + '/user-blogs/article-performance',
                type: 'post',
                data: {postId : postId, _csrf : csrfToken},
                dataType: 'json',
                success:  function (data){
                    $(href).html(data.html);
                    $(elem).data('loaded', 1);
                    
                    //Knob for referrals
                    var $knob = $('div.postKnobWrapper' + postId).find(".fu_knob");
                    var $number_sign = $('div.postKnobWrapper' + postId).find(".fu_knob_number_sign");
                    var $number = $('div.postKnobWrapper' + postId).find(".fu_knob_number");
                    $knob.knob({
                        'displayInput' : false
                    });
                    $number_sign.css({
                        'visibility' : 'visible',
                        'lineHeight' : '210px' //canvas_width+'px'
                    });

                    if(!jQuery.browser.mobile){
                        $knob.val(0).trigger('change');
                        $('div.postKnobWrapper' + postId).one('inview', function(event, isInView) {
                            if (isInView) {
                                $({value: 0}).animate({value: $knob.data("number")}, {
                                    duration: 1000,
                                    easing:'swing',
                                    step: function() 
                                    {
                                        var current = Math.ceil(this.value);
                                        $knob.val(current).trigger('change');
                                        $number.html(current);
                                    }
                                })
                            }
                        });
                    }
                    else{
                        $number.html($knob.data("number"));
                    }
                    
                    $('.PostYearChart' + postId).addClass('hide');
                },
                error: function(jqXHR, textStatus, errorThrown){
                    $().General_ShowErrorMessage({message: jqXHR.responseText});
                },
                beforeSend: function() {
                },
                complete: function() {
                }
            });            
        });

        $('ul.blogdata-viewcounts li').on('click', function(e){
            e.preventDefault();
            var duration = $(this).data('duration');
            var type=$(this).data('type');
            if(duration === undefined || type === undefined) {
                return;
            }
            $(this).siblings('li').removeClass('selected');
            $(this).addClass('selected');
            if(duration === 'month') {
                $('#blogChartMonthViews').addClass('hide');
                $('#blogChartMonthPosts').addClass('hide');
                switch(type) {
                    case 'views':
                        $('#blogChartMonthViews').removeClass('hide');
                        break;
                  case 'posts':
                        $('#blogChartMonthPosts').removeClass('hide');
                        break;
                }
            }
            else {
                $('#blogChartYearViews').addClass('hide');
                $('#blogChartYearPosts').addClass('hide');
                switch(type) {
                    case 'views':
                        $('#blogChartYearViews').removeClass('hide');
                        break;
                  case 'posts':
                        $('#blogChartYearPosts').removeClass('hide');
                        break;
                }
            }
        });
        
        //blog chart duration click handler
        $('.blogdata-details .wemoyr a').on('click', function(e){
            e.preventDefault();
            var duration = $(this).data('duration');
            $('.blogdata-details .wemoyr').find('a').removeClass('selected');
            $(this).addClass('selected');
            if(duration === 'month') {
                $('.BlogChartMonth').removeClass('hide');
                $('.BlogChartYear').addClass('hide');
            }
            else {
                $('.BlogChartMonth').addClass('hide');
                $('.BlogChartYear').removeClass('hide');
            }
        });
        
        $('div.RecentArticlesContainer').on('click', 'div.postdata-details span.wemoyr a', function(e){
            e.preventDefault();
            var duration = $(this).data('duration');
            var postid = $(this).data('postid');
            $('.post-chart-' + postid + ' .wemoyr').find('a').removeClass('selected');
            $(this).addClass('selected');
            if(duration === 'month') {
                $('.PostMonthChart' + postid).removeClass('hide');
                $('.PostYearChart' + postid).addClass('hide');
            }
            else {
                $('.PostMonthChart' + postid).addClass('hide');
                $('.PostYearChart' + postid).removeClass('hide');
            }
        });
        
        //hide blog charts after loading
        $('#blogChartYearPosts').addClass('hide');
        $('#blogChartMonthPosts').addClass('hide');
        $('.BlogChartYear').addClass('hide');
        
        /*********** Knob ************************************************************/
        $(".fu_knob_wrapper").each(function(){
            var $knob = $(this).find(".fu_knob");
            var $number_sign = $(this).find(".fu_knob_number_sign");
            var $number = $(this).find(".fu_knob_number");
            $knob.knob({
                'displayInput' : false
            });
            
            $number_sign.css({
                'visibility' : 'visible',
                'lineHeight' : '210px' //canvas_width+'px'
            });

            if(!jQuery.browser.mobile){
                $knob.val(0).trigger('change');
                $(this).one('inview', function(event, isInView) {
                    if (isInView) {
                        $({value: 0}).animate({value: $knob.data("number")}, {
                            duration: 1000,
                            easing:'swing',
                            step: function() 
                            {
                                var current = Math.ceil(this.value);
                                $knob.val(current).trigger('change');
                                $number.html(current);
                            }
                        })
                    }
                });
            }
            else{
                $number.html($knob.data("number"));
            }
        });
    };
	
	return {
		init: function() {
			attachEvents();
		}
	};
	
}(jQuery));


/*workflow Tab*/
MyBlogController.WorkFlowTab = (function () {

    var attachEvents = function () {

        // add new work flow
        $('#worflowForm').submit(function (e) {
            e.preventDefault();
            var elem = $(this);
            var title = $('#workflow-title', elem).val();
            var blogId = $(this).data('id');
            var csrfToken = $('meta[name="csrf-token"]').attr("content");

            if (title == '') {
                $().General_ShowNotification({
                    'type': 'error',
                    'message': 'Please enter workflow title'
                });
                return;
            }

            $.ajax({
                url: baseHttpPath + '/workflow/update-workflow',
                type: 'post',
                data: {blogId: blogId, title: title, action: 'addWorkflow', _csrf: csrfToken},
                dataType: 'json',
                success: function (data) {
                    if (data.success == 1) {
                        var template = Handlebars.compile(workflow_selectbox);

                        Handlebars.registerHelper({
                            thisBlog: function (id) {
                                return  id = blogId;
                            }
                        });

                        $('.select-workflow-box').html(template(data.listWorkflow));
                        $('#selectWorkflow').val(data.selectedWorkflowId).trigger('change');
                        $('#selectWorkflow').selectbox();
                        $().General_ShowNotification({message: 'Workflow added Successfully.'});
                    }
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    $().General_ShowErrorMessage({message: jqXHR.responseText});
                },
                beforeSend: function () {
                },
                complete: function () {
                    $('#workFlowModel').modal('hide');
                }
            });
        });

        // Change Workflow Select box
        $('.select-workflow-box').on('change', '#selectWorkflow', function (e) {

            e.preventDefault();
            var obj = $('.main-workflow-container');
            var loader = $('.loader');
            var workflowId = $(this).val();
            var blogId = $(this).data('blogid');
            var csrfToken = $('meta[name="csrf-token"]').attr("content");
            if(isNaN(workflowId) || workflowId <= 0 ) {
                return;
            }

            $.ajax({
                url: baseHttpPath + '/workflow/index',
                type: 'post',
                data: {id: workflowId, blogId: blogId, _csrf: csrfToken},
                dataType: 'json',
                success: function (data) {
                    if (data.success == 1) {
                        var template = Handlebars.compile(workflow_container);
                        obj.html(template(data.workflowGroup));
                        
                        if (!data.isDeleteWorkflow) {
                            $('.delete-workflow').removeClass('hide');
                        }
                    }
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    $().General_ShowErrorMessage({message: jqXHR.responseText});
                },
                beforeSend: function () {
                    loader.removeClass('hide');
                },
                complete: function () {
                    loader.addClass('hide');
                    $('.delete-workflow').data('id', workflowId).removeClass('hide');
                }
            });
        });
        
        // Delete Complete workflow 
        $('.delete-workflow').click(function (e) {

            e.preventDefault();
            var elem = $(this);
            bootbox.confirm({
                title: "Confirm",
                message: "Do you really want to remove this workflow?",
                callback: function (result) {

                    if (result) {
                        var id = elem.data('id');
                        var blogId = elem.data('blogid');
                        var csrfToken = $('meta[name="csrf-token"]').attr("content");

                        $.ajax({
                            url: baseHttpPath + '/workflow/update-workflow',
                            type: 'post',
                            data: {workflowId: id, blogId: blogId, action: 'deleteWorkflow', _csrf: csrfToken},
                            dataType: 'json',
                            success: function (data) {
                                if (data.success == 1) {
                                    $().General_ShowNotification({message: 'Workflow deleted successfully.'});
                                }
                            },
                            error: function (jqXHR, textStatus, errorThrown) {
                                $().General_ShowErrorMessage({message: jqXHR.responseText});
                            },
                            beforeSend: function () {
                            },
                            complete: function () {
                                window.location = baseHttpPath + '/workflow/index?blogId=' + blogId;
                            }
                        });
                    }
                }
            });
        });

        //update title of Group
        $('.main-workflow-container').on('click', '.edit-title', function (e) {

            e.preventDefault();
            var elem = $(this);
            var mode = elem.data('mode');

            if (mode == 'edit') {
                var title = elem.closest('.holder').children('h2').text();
                elem.closest('.workflow-header').children('.infotips').addClass('infotips-resize');
                elem.closest('.holder').children('h2').text('').append($('<input  />', {'value': title, 'class': 'c9n-ippt group-title'}));
                $('.group-title').focus();
                elem.data('mode', 'update');
                elem.text('Save');
                return;
            }

            var blogId = elem.closest('.workflow-header').data('blogid');
            var id = elem.closest('.workflow-header').data('id');
            var newTitle = elem.closest('.holder').find('input').val();
            var csrfToken = $('meta[name="csrf-token"]').attr("content");

            if (newTitle == '') {
                $().General_ShowNotification({
                    'type': 'error',
                    'message': 'Please enter group title'
                });
                return;
            }
            
            $.ajax({
                url: baseHttpPath + '/workflow/update-workflow',
                type: 'post',
                data: {id: id, blogId: blogId, workflowId: $('#selectWorkflow').val(), title: newTitle, action: 'updateGroup', _csrf: csrfToken},
                dataType: 'json',
                success: function (data) {
                    if (data.success == 1) {
                        $().General_ShowNotification({message: 'Group title updated successfully'});
                    }
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    $().General_ShowErrorMessage({message: jqXHR.responseText});
                },
                beforeSend: function () {
                },
                complete: function () {
                    elem.closest('.workflow-header').children('.infotips').removeClass('infotips-resize');
                    elem.closest('.holder').children('h2').text('').append(newTitle);
                    elem.data('mode', 'edit');
                    elem.text('Edit');
                }
            });
        });


        // Delete Single Group
        $('.main-workflow-container').on('click', '.delete-group', function (e) {

            e.preventDefault();
            var elem = $(this);
            var obj = $('.main-workflow-container');

            bootbox.confirm({
                title: "Confirm",
                message: "Do you really want to remove this group?",
                callback: function (result) {

                    if (result) {

                        var id = elem.closest('.workflow-header').data('id');
                        var blogId = elem.closest('.workflow-header').data('blogid');
                        var workflowId = elem.closest('.workflow-container').data('workflow');
                        var position = elem.closest('.workflow-container').data('position');
                        var csrfToken = $('meta[name="csrf-token"]').attr("content");

                        $.ajax({
                            url: baseHttpPath + '/workflow/update-workflow',
                            type: 'post',
                            data: {id: id, blogId: blogId, workflowId: workflowId, position: position, action: 'deleteGroup', _csrf: csrfToken},
                            dataType: 'json',
                            success: function (data) {
                                if (data.success == 1) {
                                    var template = Handlebars.compile(workflow_container);
                                    obj.html(template(data.listWorkflow));
                                    $().General_ShowNotification({message: 'Group deleted successfully.'});
                                }
                            },
                            error: function (jqXHR, textStatus, errorThrown) {
                                $().General_ShowErrorMessage({message: jqXHR.responseText});
                            },
                            beforeSend: function () {
                            },
                            complete: function () {
                            }
                        });
                    }
                }
            });
        });

        //Show Add Group Modal 
        $('.main-workflow-container').on('click', '.groupModal', function (e) {

            e.preventDefault();
            var modal = $(this).data('modal');
            var position = $(this).data('position');
            var workflowId = $('#selectWorkflow option:selected').val();

            $('#workflow-group-form').data('id', workflowId);
            $('#workflow-group-form').data('position', position);
            $(modal).modal('show');
        });


        // Add workflow group
        $('#workflow-group-form').submit(function (e) {

            e.preventDefault();
            var elem = $(this);
            var modal = $('#addWorkflowGroup');
            var obj = $('.main-workflow-container');
            var title = elem.find('#group-title').val();
            var workflowId = elem.data('id');
            var pos = elem.data('position');
            var blogId = elem.data('blogid');

            var position = (pos > 0) ? parseInt(pos) + 1 : 1;
            var csrfToken = $('meta[name="csrf-token"]').attr("content");

            if (title == '') {
                $().General_ShowNotification({
                    'type': 'error',
                    'message': 'Please enter group title'
                });
                return;
            }

            $.ajax({
                url: baseHttpPath + '/workflow/update-workflow',
                type: 'post',
                data: {workflowId: workflowId, blogId: blogId, title: title, position: position, action: 'addGroup', _csrf: csrfToken},
                dataType: 'json',
                success: function (data) {
                    if (data.success == 1) {
                        var template = Handlebars.compile(workflow_container);
                        obj.html(template(data.workflowGroup));
                        $().General_ShowNotification({message: 'Successfully saved'});
                    }
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    $().General_ShowErrorMessage({message: jqXHR.responseText});
                },
                beforeSend: function () {

                },
                complete: function () {
                    $('#group-title').val('');
                    $(modal).modal('hide');
                }
            });
        });


        $('.main-workflow-container').on('click', '.add-workflow-user', function (e) {

            e.preventDefault();
            var workflowGroupId = $(this).data('id');
            var modal = $(this).data('modal');
            var blogId = $(modal).data('blogid');
            var csrfToken = $('meta[name="csrf-token"]').attr("content");
            var workflowId = $('#selectWorkflow option:selected').val();

            $.ajax({
                url: baseHttpPath + '/workflow/workflow-users',
                type: 'post',
                data: {blogId: blogId, workflowGroupId: workflowGroupId, workflowId: workflowId, _csrf: csrfToken},
                dataType: 'json',
                success: function (data) {
                    if (data.success == 1) {
                        $('.row-result', modal).show();
                        if (data.authors.length > 0) {

                            $("#blogAuthorsList").html('');
                            var results = data.authors;
                            var template = Handlebars.compile(user_permissions_workflow);
                            Handlebars.registerHelper({
                                thisBlogId: function (blog) {
                                    return  blog = blogId;
                                },
                                workflow: function (workflow) {
                                    return workflow = workflowGroupId;
                                }
                            });
                            $('.scroller-codes', modal).removeClass('hide');
                            $('.no-data', modal).addClass('hide');
                            $("#blogAuthorsList").append(template(results));

                        }
                        else {
                            $('.scroller-codes', modal).addClass('hide');
                            $('.no-data', modal).removeClass('hide');
                        }
                    }
                    else {
                        $().General_ShowErrorMessage({message: data.error});
                    }
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    $().General_ShowErrorMessage({message: jqXHR.responseText});
                },
                beforeSend: function () {
                    $('.loader', modal).removeClass('hide');
                },
                complete: function () {
                    $('.loader', modal).addClass('hide');
                    $(modal).modal('show');
                }
            });

        });

        //this function triggers when user want to add any authors 
        $('#addWorkflowUserModal').on('click', '.add-author', function (e) {
            
            e.preventDefault();
            var elem = $(this);
            var author_id = elem.data('id');
            var blogId = elem.data('blogid');
            var id = elem.data('workflowid');
            var csrfToken = $('meta[name="csrf-token"]').attr("content");

            $.ajax({
                url: baseHttpPath + '/workflow/add-workflow-user',
                type: 'post',
                data: {authorId: author_id, blogId: blogId, workflowId: id, _csrf: csrfToken},
                dataType: 'json',
                success: function (data) {

                    if (data.success == 1) {
                        //add user to workgroup users list
                        var template = Handlebars.compile(users_workflow);
                        $("#block-" + id).prepend(template(data.author));
                        
                        elem.parent('li').slideUp('normal', function () {
                            elem.parent('li').remove();
                        });

                        var len = elem.closest('ul.blog-level-lists').find('li').length;
                        if (len <= 1) {
                            $('.scroller-codes', $('#addWorkflowUserModal')).addClass('hide');
                            $('.no-data', $('#addWorkflowUserModal')).removeClass('hide');
                        }

                        $().General_ShowNotification({'message': 'Successfully added'});
                    }
                    else {
                        $().General_ShowErrorMessage({title: 'Alert!', message: 'Authors already added in this group'});
                    }
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    $().General_ShowErrorMessage({message: jqXHR.responseText});
                },
                beforeSend: function () {
                    $('.loader').removeClass('hide');
                },
                complete: function () {
                    $('.loader').addClass('hide');
                }
            });
        });


        //function triggers if blog owner delete any added writer from the blog
        $('.main-workflow-container').on('click', '.remove-author', function (e) {
            
            e.preventDefault();
            var elem = $(this);
            bootbox.confirm({
                title: "Confirm",
                message: "Do you really want to remove this author?",
                callback: function (result) {

                    if (result) {

                        var id = elem.closest('.workflow-container-block').data('id');
                        var workflowId = elem.closest('.workflow-container').data('workflow');
                        var blog_id = elem.closest('.workflow-container-block').data('blogid');
                        var author_id = elem.closest('.profile-holder').data('id');
                        var workflowGroupAuthorId = elem.closest('.profile-holder').data('workgroupuserid');
                        var csrfToken = $('meta[name="csrf-token"]').attr("content");


                        $.ajax({
                            url: baseHttpPath + '/workflow/remove-workflow-user',
                            type: 'post',
                            data: {workflowGroupAuthorId: workflowGroupAuthorId, workflowId: workflowId, workflowGroupId: id, blogId: blog_id, authorId: author_id, _csrf: csrfToken},
                            dataType: 'json',
                            success: function (data) {
                                if (data.success == 1) {

                                    elem.closest('.profile-holder').slideUp('normal', function () {
                                        elem.closest('.profile-holder').remove();
                                    });
                                    $().General_ShowNotification({'message': 'Author successfully removed'});
                                }
                                else {
                                    $().General_ShowErrorMessage({message: data.error});
                                }
                            },
                            error: function (jqXHR, textStatus, errorThrown) {
                                $().General_ShowErrorMessage({message: jqXHR.responseText});
                            },
                            beforeSend: function () {
                                $('i', elem).General_AddRemoveSpinnerIcon();
                            },
                            complete: function () {
                                $('i', elem).General_AddRemoveSpinnerIcon();
                            }
                        });
                    }
                }
            });
        });

    };

    return {
        init: function () {
            attachEvents();
        }
    };

}(jQuery));

/** Newsletter  script **/
MyBlogController.Newsletter = (function($) {
    
    var attachEvents = function () {
        
       $('.custom-blog-select').change(function(){
            var value = $(this).val();
            if(value != '') {
                window.location.href = baseHttpPath + '/user-blogs/newsletter?blogId='+value;
            }
        }); 
        
        //select all / unselect all codes
        $('button.SelectAllUserList').on('click', function(e){
            e.preventDefault();
            $('#UserListPanel input[type=checkbox]').attr('checked', true);
        });

        $('button.UnSelectUserList').on('click', function(e){
            e.preventDefault();
            $('#UserListPanel input[type=checkbox]').attr('checked', false);
        });
        
        $('#content-editor').freshereditor({
            toolbar_selector: "#toolbar",
            excludes: 	['removeFormat', 'insertheading4']
        });
        
        $("#content-editor").freshereditor("edit", true);
            
    };
    return {
        init: function() {
            attachEvents();
        }
    };
}(jQuery));

MyBlogController.AdsManager = (function ($) {

    var attachEvents = function () { 
        
        attachDropzoneEvent({selector: "#adsDropzone"});
        
        // save ads 
        $('#adsManagerModal').on('click', '.adsManagerSaveBtn', function (e) {
            e.preventDefault();
            var elem = $(this);

            var id = $('#ads-id').val();
            var blogId = elem.data('blogid');
            var title = $('#ads-title').val();
            var url = $('#ads-url').val();
            var type = $('#ads-block-type').val();
            var status = $('#ads-status option:selected').val();

            // get images
            var images = [];
            $('.ads-images').each(function () {
                images.push($(this).val());
            });

            var csrfToken = $('meta[name="csrf-token"]').attr("content");

            if (title === '') {
                $().General_ShowNotification({type: 'error', message: 'Title must not be blank'});
                return;
            }
            /*if (url === '') {
                $().General_ShowNotification({type: 'error', message: 'Url must not be blank'});
                return;
            }*/
            if(images.length <= 0) {
                if(typeof id === 'undefined' || id <= 0) {
                    $().General_ShowNotification({type: 'error', message: 'Please select an image'});
                    return;
                } 
            }

            $.ajax({
                url: baseHttpPath + '/user-blogs/ads-manager',
                type: 'post',
                data: {id: id, blogId: blogId, title: title, status: status, url: url, type: type, images: images, _csrf: csrfToken},
                dataType: 'json',
                success: function (data) {
                    if (data.success == 1) {
                        var message = (id > 0) ? 'updated' : 'created';
                        $().General_ShowNotification({'message': 'Ad ' + message + ' successfully'});
                        $('#adsManagerModal').modal('hide');
                        window.location.reload();
                    }
                    else {
                        $().General_ShowErrorMessage({message: data.error});
                    }
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    $().General_ShowErrorMessage({message: jqXHR.responseText});
                },
                beforeSend: function () {
                    $('i', elem).General_AddRemoveSpinnerIcon();
                },
                complete: function () {
                    $('i', elem).General_AddRemoveSpinnerIcon();
                }
            });
        });
        
        // Remove Ads
        $('.removeAds').on('click', function (e) {
            e.stopPropagation();
            e.preventDefault();
            var elem = $(this);
            var id = elem.data('id');
            var blogId = elem.data('blogid');
            var csrfToken = $('meta[name="csrf-token"]').attr("content");
            
            bootbox.confirm("Do you want to remove this ad?", function (result) {

                if (result) {
                    $.ajax({
                        url: baseHttpPath + '/user-blogs/remove-ads-manager',
                        type: 'post',
                        data: {blogId: blogId, id: id, _csrf: csrfToken},
                        dataType: 'json',
                        success: function (data) {
                            if (data.success == 1) {
                                $().General_ShowNotification({'message': 'Ad removed successfully'});
                                 window.location.reload();
                            }
                            else {
                                $().General_ShowErrorMessage({message: data.error});
                            }
                        },
                        error: function (jqXHR, textStatus, errorThrown) {
                            $().General_ShowErrorMessage({message: jqXHR.responseText});
                        },
                        beforeSend: function () {
                            $('i', elem).General_AddRemoveSpinnerIcon();
                        },
                        complete: function () {
                            $('i', elem).General_AddRemoveSpinnerIcon();
                        }
                    });
                }
            });
        });
        
        $('body').on('hidden.bs.modal', '.modal', function () {
            $(this).removeData('bs.modal');
            location.reload(); 
        });
        
        $('.updateAds').on('click', function (e) {
            e.stopPropagation();
            e.preventDefault();
            var elem = $(this);
            var id = elem.data('id');
            var blogId = elem.data('blogid');
            var csrfToken = $('meta[name="csrf-token"]').attr("content");

            $.ajax({
                url: baseHttpPath + '/user-blogs/load-ads-manager',
                type: 'post',
                data: {blogId: blogId, id: id, _csrf: csrfToken},
                dataType: 'json',
                success: function (data) {
                    if (data.success == 1) {
                        $('#adsManagerModal').html(data.modelHtml);
                        $(".custom-select").selectbox();
                        attachDropzoneEvent({selector: "#updateAdsDropzone", media: data.media});
                    } else {
                        $().General_ShowErrorMessage({message: data.error});
                    }
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    $().General_ShowErrorMessage({message: jqXHR.responseText});
                },
                beforeSend: function () {
                    $('i', elem).General_AddRemoveSpinnerIcon();
                },
                complete: function () {
                    $('i', elem).General_AddRemoveSpinnerIcon();
                    $('#adsManagerModal').modal('show');
                }
            });
        });
    };
    var attachDropzoneEvent = function (elem) {
            
            Dropzone.autoDiscover = false;
            
            var myDropzone = new Dropzone(elem.selector, {
                paramName: "ads_media_files",
                addRemoveLinks: true,
                maxFiles: 1,
                init: function () {
                    
                    if(typeof elem.media !== 'undefined' && elem.media !== '') {
                        myDropzone = this;
                        var mockFile = { name: elem.media.filename, size: elem.media.filesize, status: Dropzone.ADDED, accepted: true};;
                        myDropzone.emit("addedfile", mockFile);
                        myDropzone.emit("thumbnail", mockFile, elem.media.cdn_path);
                        myDropzone.files.push(mockFile);
                    }
                    
                    this.on("success", function (file, response) {
                        // event when file is successfully uploaded
                        var input = '<input type="hidden" class="ads-images" name="images[]" value="' + response + '">';

                        $('.ads-images', $('#upload-ads-images')).remove();
                        $('#upload-ads-images').append(input);

                        $().General_ShowNotification({message: 'Image added successfully'});

                    });
                }
            });
        };
    return {
        init: function () {
            attachEvents();
        }
    };
}(jQuery));

//Gallery Manager
MyBlogController.Gallery = (function ($) {

    var attachEvents = function () {
        
        $('.fancybox').fancybox();
        
        Dropzone.autoDiscover = false;

        var myDropzone = new Dropzone("#galleryDropzone", {
            paramName: "gallery_media_files",
            addRemoveLinks: true,
            maxFiles: 1,
            init: function () {
                this.on("success", function (file, response) {
                    // event when file is successfully uploaded
                    $('.no-images').addClass('hide');
                    
                    var input = '<input type="hidden" class="gallery-images" name="CreateEditBlogForm[galleryImages][]" value="'+response+'">';
                    $('.featuredGallery').append(input);
                    
                    var source   = $("#gallery-template").html();
                    var template = Handlebars.compile(source);
                    var galleryTemplate = template({'image': baseHttpPath+response});
                    $('#gallery-section').append(galleryTemplate);
                    
                    $().General_ShowNotification({message: 'Image added successfully'});
                    $('#ModalGallery').modal('hide');
                    this.removeAllFiles();

                });
            }
        });

        // Remove images
        $('#gallery-section').on('click', '.RemoveImage', function (e) {
            e.stopPropagation();
            e.preventDefault();
            var elem = $(this);
            var vsrc = $(this).parents('.thumbnail').children('img.galleryThumb').attr('src');
            bootbox.confirm({title: "Confirm", message: "Do you want to remove this Image?", callback: function (result) {

                    if (result) {
                        $.each($('.gallery-images'), function (index, obj) {
                            var path = baseHttpPath + $(obj).val()
                            if (vsrc == path) {
                                $(obj).remove();
                            }
                        });
                        $(elem).closest('div.galleryBlock').hide('slow', function () {
                            $(elem).closest('div.galleryBlock').remove();
                            
                            if($('#gallery-section .galleryBlock').length <= 0) {
                                $('.no-images').removeClass('hide');
                            }
                            else {
                                $('.no-images').addClass('hide');
                            }                                     
                        });

                        $().General_ShowNotification({'message': 'Image removed successfully'});
                    }
                        
           
                }
            });
        });
        
        // Remove Media Images
        $('#gallery-section').on('click', '.RemoveMedia', function (e) {
            e.stopPropagation();
            e.preventDefault();
            var elem = $(this);
            var key = elem.closest('.galleryBlock').data('key');
            var blogId = elem.closest('.galleryBlock').data('blogid');
            var csrfToken = $('meta[name="csrf-token"]').attr("content");

            bootbox.confirm({title: "Confirm", message: "Do you want to remove this Image?", callback: function (result) {

                    if (result) {
                        $.ajax({
                            url: baseHttpPath + '/user-blogs/remove-gallery-images',
                            type: 'post',
                            data: {blogId: blogId, key: key, _csrf: csrfToken},
                            dataType: 'json',
                            success: function (data) {
                                if (data.success == 1) {
                                    $(elem).closest('div.galleryBlock').hide('slow', function () {
                                        $(elem).closest('div.galleryBlock').remove();
                                        
                                       if($('#gallery-section .galleryBlock').length <= 0) {
                                           $('.no-images').removeClass('hide');
                                       }
                                       else {
                                           $('.no-images').addClass('hide');
                                       }                                        
                                    });
                                   
                                    $().General_ShowNotification({'message': 'Image removed successfully'});
                                }
                            },
                            error: function (jqXHR, textStatus, errorThrown) {
                                $().General_ShowErrorMessage({message: jqXHR.responseText});
                            },
                            beforeSend: function () {
                                $('i', elem).General_AddRemoveSpinnerIcon();
                            },
                            complete: function () {
                                $('i', elem).General_AddRemoveSpinnerIcon();
                            }
                        });
                    }
                }
            });
        });
    
    };
    return {
        init: function () {
            attachEvents();
        }
    };
}(jQuery));
var PopularController = (function($) {
	
	return {
		writer: function() {
            PopularController.PopularWriters.init();
        },
        blog: function() {
            PopularController.PopularBlogs.init();
        },
		club: function() {       
            PopularController.ClubBlogs.init();
        }
    };
	
}(jQuery));

/*ClubBlogs*/
PopularController.ClubBlogs = (function($) {

    var bindFollowClub = function(){
        $('button.follow').followBlog({
            'onSuccess': function(data, obj){
            },
           'onError': function(obj, errorMessage) {
                $().General_ShowErrorMessage({message: errorMessage});
            },
            'beforeSend': function(obj) {
               $('i', obj).General_AddRemoveSpinnerIcon();
            },
            'onComplete': function(obj){
                $('i', obj).General_AddRemoveSpinnerIcon();
                ($(obj).data('status') === 'follow') ? $(obj).html("<i class='fa fa-star'></i> Follow") : $(obj).html("<i class='fa fa-star'></i> Following");
            }
        });
    };
    
    var attachEvents = function() {
        
        bindFollowClub();
        
        //var status = "follow";
        var template = Handlebars.compile(clubs_index_club);
        $('.blog-post-search form').submit(function(e){
           e.preventDefault();
           searchClubs();
        });
        
        $('#filter a').click(function(e) {
           e.preventDefault();
           if ($(this).hasClass('selected')) {
               return;
           }
           
           $('#filter a').removeClass('selected');
           $(this).addClass('selected');
           $('.blog-post-search form input.c9n-ippt').val('');
           searchClubs();
        });
        
        function searchClubs() {
            
            var code = $('#filter a.selected').data('code');
            var search = $('.blog-post-search input.c9n-ippt').val();
            
            $.ajax({
                url: baseHttpPath + '/clubs/' + code,
                type: 'get',
                data: {s: search, _csrf : $('meta[name="csrf-token"]').attr("content") },
                dataType: 'json',
                success: function(obj){
                    $('#clubBlogs').empty();
                    
                    Handlebars.registerHelper('loggedUser', function(status, options) {
                        var fnTrue=options.fn, fnFalse=options.inverse;
                        return status = obj.loggedUser == true ? fnTrue() : fnFalse();
                    });                    
                   
                    var results = obj.clubs;
                    if (results.length <= 0) {
                        $('.polpular-writers').addClass('hide');
                        $('.no-data').removeClass('hide');
                    }
                    else {
                        $('.polpular-writers').removeClass('hide');
                        $('.no-data').addClass('hide');
                        $("#clubBlogs").append(template(results));
                        
                        $('.forceLogin').unbind('click');
                        ApplicationController.init();
                        
                        bindFollowClub();
                    }
                },
                error: function(jqXHR, textStatus, errorThrown){
                    $().General_ShowErrorMessage({message: jqXHR.responseText});
                },
                beforeSend: function() { 
                    $('i', $('.blog-post-search form button')).General_AddRemoveSpinnerIcon();
                },
                complete: function() {
                    $('i', $('.blog-post-search form button')).General_AddRemoveSpinnerIcon();
                }
            });
        }
    };
        
    return {
		init: function() {
			attachEvents();
        }
	};
	
}(jQuery));

/*Popular Blogs*/
PopularController.PopularBlogs = (function($) {

	var attachEvents = function() {
        
        //Auto Ellipsis
    	$(".title-ellipsis").autoEllipsisText({multiline:true, accuracyStep:1});
        
        var template = Handlebars.compile(popular_blogs_popular);
        
        $('.blog-post-search form').submit(function(e){ 
            e.preventDefault();
            if ($('.blog-post-search form input.c9n-ippt').val() == '') {
                $().General_ShowNotification({message: "Please enter the search term"});
                return;
            }
            $('#filter a').removeClass('selected');
            searchClubs();
        });
        
        $('#filter a').click(function(e) {
           e.preventDefault();
           if ($(this).hasClass('selected')) {
               return;
           }
           $('#filter a').removeClass('selected');
           $(this).addClass('selected');
           $('.blog-post-search form input.c9n-ippt').val('');
           searchClubs();
        });
        
        function searchClubs() {
            
            var filter = $('#filter a.selected').data('code');
            var search = $('.blog-post-search input.c9n-ippt').val();
            
            $.ajax({
                url: baseHttpPath + '/popular/blogs/' + filter,
                type: 'get',
                data: {s: search, _csrf : $('meta[name="csrf-token"]').attr("content") },
                dataType: 'json',
                success: function(obj){
                    $('#popularBlogs').empty();
                    
                    Handlebars.registerHelper('loggedUser', function(status, options) {
                        var fnTrue=options.fn, fnFalse=options.inverse;
                        return status = obj.loggedUser == true ? fnTrue() : fnFalse();
                    });
                    
                    Handlebars.registerHelper( "popularBy", function ( filter ){
                        return filter = obj.code;
                    });
                    
                    var results = obj.clubs;
                    if (results.length <= 0) {
                        $('.polpular-writers').addClass('hide');
                        $('.no-data').removeClass('hide');
                    }
                    else {
                        $('.polpular-writers').removeClass('hide');
                        $('.no-data').addClass('hide');
                        $("#popularBlogs").append(template(results));
                        if (search != '') {
                           $('.post-count').hide(); 
                        }
                        
                        $('.forceLogin').unbind('click');
                        
                        ApplicationController.init();
                        Profile.init();
                        
                        $("#popularBlogs .title-ellipsis").autoEllipsisText({multiline:true, accuracyStep:1});
                    }
                },
                error: function(jqXHR, textStatus, errorThrown){
                    $().General_ShowErrorMessage({message: jqXHR.responseText});
                },
                beforeSend: function() { 
                    $('i', $('.blog-post-search form button')).General_AddRemoveSpinnerIcon();
                },
                complete: function() {
                    $('i', $('.blog-post-search form button')).General_AddRemoveSpinnerIcon();
                }
            });
        }
    };
        
    return {
		init: function() {
			attachEvents();
        }
	};
	
}(jQuery));

/*Popular Writers*/
PopularController.PopularWriters = (function($) {
    
    var bindFollowUnfollowUser = function(){
        $('.FollowUnfollowUser').followWriter({
            'onSuccess': function(data, obj){
            },
           'onError': function(obj, errorMessage) {
                $().General_ShowErrorMessage({message: errorMessage});
            },
            'beforeSend': function(obj) {
               $('i', obj).General_AddRemoveSpinnerIcon();
            },
            'onComplete': function(obj){
                $('i', obj).General_AddRemoveSpinnerIcon();
                ($(obj).data('status') === 'follow') ? $(obj).removeClass('selected') : $(obj).addClass('selected');
            }
        });
    };
    
    var attachEvents = function() {
        
        bindFollowUnfollowUser();
        
        var template = Handlebars.compile(popular_writers_popular);
        
        $('.blog-post-search form').submit(function(e){ 
           e.preventDefault();
            if ($('.blog-post-search input.c9n-ippt').val() == '') {
                $().General_ShowNotification({message: "Please enter the search term"});
                return;
            }
            $('#filter a').removeClass('selected');
            searchWriters();
        });
        
        $('#filter a').click(function(e) {
           e.preventDefault();
           if ($(this).hasClass('selected')) {
               return;
           }
           $('#filter a').removeClass('selected');
           $(this).addClass('selected');
           $('.blog-post-search form input.c9n-ippt').val('');
           searchWriters();
        });
        
        function searchWriters() {
            
            var filter = $('#filter a.selected').data('code');
            var search = $('.blog-post-search input.c9n-ippt').val();
            if (search !== '') {
                filter = 'posts';
            }
            
            $.ajax({
                url: baseHttpPath + '/popular/writers/' + filter,
                type: 'get',
                data: {s: search, _csrf : $('meta[name="csrf-token"]').attr("content") },
                dataType: 'json',
                success: function(obj){
                    $('#popularWriters').empty();
                    
                    Handlebars.registerHelper('loggedUser', function(status, options) {
                        var fnTrue=options.fn, fnFalse=options.inverse;
                        return status = obj.loggedUser == true ? fnTrue() : fnFalse();
                    });

                    Handlebars.registerHelper( "writerBy", function ( filterType ){
                        return filterType = obj.code;
                    });
                    
                    var results = obj.writers;
                    if (results.length <= 0) {
                        $('.polpular-writers').addClass('hide');
                        $('.no-data').removeClass('hide');
                    }
                    else {
                        $('.polpular-writers').removeClass('hide');
                        $('.no-data').addClass('hide');
                        $("#popularWriters").append(template(results));
                        
                        $('.forceLogin').unbind('click');
                        ApplicationController.init();
                        
                        bindFollowUnfollowUser();
                    }
                },
                error: function(jqXHR, textStatus, errorThrown){
                    $().General_ShowErrorMessage({message: jqXHR.responseText});
                },
                beforeSend: function() { 
                    $('i', $('.blog-post-search form button')).General_AddRemoveSpinnerIcon();
                },
                complete: function() {
                    $('i', $('.blog-post-search form button')).General_AddRemoveSpinnerIcon();
                }
            });
        }
    };
        
    return {
		init: function() {
			attachEvents();
        }
	};
	
}(jQuery));
var PostController = (function($) {
	
	return {
		init: function() {
            PostController.CreateEditStartup.init();
            PostController.CreateEditPost.init();
            PostController.ImageCaption.init();
		},
        article: function(){
            PostController.Article.init();
        },
        eventPost: function(){
            PostController.EventPost.init();
        },
               
        //add nofollow to external links
        addNoFollowToExternalLinks: function(){
            
            $("#content-editor").find("a:not([href*='fansunite.com.au'],[href^='#'],[href^='javascript:;'])").each(function(){
                if($(this).attr('href') !== undefined) {    //javascript link returned as undefined
                    $(this).attr('rel', 'nofollow');
                }
            });
            
        },
                
        // removes MS Office generated guff
        clearMSFormatting : function(input) {
          // 1. remove line breaks / Mso classes
          var stringStripper = /(\n|\r| class=(")?Mso[a-zA-Z]+(")?)/g; 
          var output = input.replace(stringStripper, ' ');
          // 2. strip Word generated HTML comments
          //var commentSripper = new RegExp('<!--(.*?)-->','g');
          //var output = output.replace(commentSripper, '');
          var tagStripper = new RegExp('<(/)*(meta|link|span|\\?xml:|st1:|o:|font)(.*?)>','gi');
          // 3. remove tags leave content if any
          output = output.replace(tagStripper, '');
          // 4. Remove everything in between and including tags '<style(.)style(.)>'
          /*var badTags = ['style', 'script','applet','embed','noframes','noscript'];

          for (var i=0; i< badTags.length; i++) {
            tagStripper = new RegExp('<'+badTags[i]+'.*?'+badTags[i]+'(.*?)>', 'gi');
            output = output.replace(tagStripper, '');
          }*/
            
          // 5. remove attributes ' style="..."'
          var badAttributes = ['start']; //['style', 'start'];
          for (var i=0; i< badAttributes.length; i++) {
            var attributeStripper = new RegExp(' ' + badAttributes[i] + '="(.*?)"','gi');
            output = output.replace(attributeStripper, '');
          }
          return output;
        },
                
        savePost: function(options){

            var defaults = {
                'formData' : {},
                'onSuccess' : function(){},
                'onError' : function(){},
                'beforeSend' : function(){},
                'onComplete' : function(){}
            };
            var opts = $.extend( {}, defaults, options );
            $.ajax({
                type: 'POST',
                url: baseHttpPath + '/post/save-post',
                dataType: 'json',
                data: opts.formData,
                success: function(data, textStatus, jqXHR) {
                    var postId = data.postId;
                    var images = data.images;
                    var thumbImage = data.postThumb;
                    var postThumbMediaId = data.postThumbMediaId;
                    if(data.postPreviewUrl !== ""){
                        $('li.PostPreviewLink').find('a').attr('href', data.postPreviewUrl);
                        $('li.PostPreviewLink').removeClass('hide');
                    }
                    if(thumbImage !== ''){
                        $('.PostThumbImage').attr('src', thumbImage);
                    }
                    if(images.length > 0){
                        //Remove existing thumbnails
                        $("div.PostImageOwlThumbnails").find('div.owl-item').each(function(){
                            $("#owl-thumbnails").data('owlCarousel').removeItem();
                        });
                        //Add thumbnails
                        for(var ind in images){
                            if (images.hasOwnProperty(ind)){
                                var mediaId = images[ind].media_id;
                                var imgSrc =  images[ind].postImageSrc;
                                var origImgPath = images[ind].origImgPath;
                                var origMediaId = images[ind].orig_media_id;
                                var hasOrig = images[ind].hasOrig;
                                var source   = $("#post-image-owl-thumbnail-template").html();
                                var template = Handlebars.compile(source);
                                var selected = 0;
                                if(images[ind].thumb_media_id == postThumbMediaId){
                                    selected = 1;
                                }
                                var commaSeparatedIds = mediaId + ',' + images[ind].thumb_media_id + ',' + images[ind].listing_media_id;
                                var thumbnail = template({
                                    'imgSrc': imgSrc, 'postId': postId, 'mediaId': mediaId, 'selected': selected, 'mediaCaption': images[ind].caption, 
                                    'origImgPath': origImgPath,'hasOrig': hasOrig, 'origMediaId': origMediaId, 'commaSepAssetIds': commaSeparatedIds
                                });
                                var owl = $('#owl-thumbnails');
                                owl.data('owlCarousel').addItem(thumbnail);
                            }
                        }
                    }
                    //show republish btn
                    var numBlogs = parseInt($('.RepublishBtn').data('blogs-count'));
                    var isAdmin = parseInt($('.RepublishBtn').data('isadmin'));
                    if(!isNaN(numBlogs) && numBlogs > 1 && isAdmin == 0) {
                        $('.RepublishBtn').data('id', postId);
                        $('.RepublishBtn').removeClass('hide');
                    }
                    if (opts.onSuccess && typeof opts.onSuccess === 'function') {
                        opts.onSuccess(data);
                    }
                },
                error: function(jqXHR, textStatus, errorThrown){
                    if (opts.onError && typeof opts.onError === 'function') {
                        opts.onError(jqXHR.responseText);
                    }
                },
                beforeSend: function(jqXHR, settings) { 
                    if (opts.beforeSend && typeof opts.beforeSend === 'function') {
                        opts.beforeSend();
                    }
                },
                complete: function(jqXHR, textStatus) {
                    if (opts.onComplete && typeof opts.onComplete === 'function') {
                        opts.onComplete();
                    }
                }
            });
        },
        
        setPostLargeImage: function(options){

            var defaults = {
                'mediaId' : 0,
                'postId': 0,
                'onSuccess' : function(){},
                'onError' : function(){},
                'beforeSend' : function(){},
                'onComplete' : function(){}
            };
            var opts = $.extend( {}, defaults, options );
            
            if(options.mediaId === 0) {
                return;
            }
            
            $.ajax({
                type: 'POST',
                url: baseHttpPath + '/post/get-post-image',
                dataType: 'json',
                data: {mediaid: options.mediaId, postid: options.postId, _csrf: yii.getCsrfToken()},
                success: function(data, textStatus, jqXHR) {
                    if(data.success == 1) {
                        var largeImageSrc = data.largeImageSrc;
                        if(largeImageSrc !== ''){
                            $('.PostThumbImage').attr('src', largeImageSrc);
                            var caption = $("#PostImageThumbnail-"+options.mediaId).data('caption');
                            if(caption === "") {
                                $('.article-image-caption').addClass('hide');
                            }
                        }
                        else {
                            var defaultImg = $('.PostThumbImage').data('defaultimage');
                            $('.PostThumbImage').attr('src', defaultImg);
                            $('.article-image-caption').addClass('hide');
                        }

                        if (opts.onSuccess && typeof opts.onSuccess === 'function') {
                            opts.onSuccess(data);
                        }
                    }
                },
                error: function(jqXHR, textStatus, errorThrown){
                    if (opts.onError && typeof opts.onError === 'function') {
                        opts.onError(jqXHR.responseText);
                    }
                },
                beforeSend: function(jqXHR, settings) { 
                    if (opts.beforeSend && typeof opts.beforeSend === 'function') {
                        opts.beforeSend();
                    }
                },
                complete: function(jqXHR, textStatus) {
                    if (opts.onComplete && typeof opts.onComplete === 'function') {
                        opts.onComplete();
                    }
                }
            });
        },
        
        bindDeletePostImage: function(){
            $('#owl-thumbnails').on('click', '.DeletePostThumbnail', function(e){
                e.preventDefault();
                var postId = parseInt($(this).data('postid'));
                var mediaId = parseInt($(this).data('mediaid'));
                var gettyImgId = $(this).data('getty-imageid');
                var btnObj = $(this);
                var imgSrc = $(btnObj).parent('span.btn-absolute').parent('a').children('img').attr('src');
                bootbox.confirm({
                     title: "Confirm",
                    message: "Do you really want to remove this image?",
                    callback: function(result) {
                        if (result) {
                            $.ajax({
                                type: 'POST',
                                url: baseHttpPath + '/post/delete-image',
                                dataType: 'json',
                                data: {id: postId, mediaid: mediaId, imgsrc: imgSrc, _csrf: yii.getCsrfToken()},
                                success: function(data, textStatus, jqXHR) {
                                    //Remove getty image tag - START
                                    if(gettyImgId !== "" && gettyImgId !== undefined) {
                                        $('div.autocomplete-tags-scroller').find('a.tag').each(function(){
                                            var gettyImgTagCls = 'PostTag' + gettyImgId;
                                            if($(this).hasClass(gettyImgTagCls)) {
                                                var title = $(this).attr('title');
                                                var existingTags = $('#ExistingPostTags').val();
                                                //remove from hidden input
                                                $('#ExistingPostTags').val(existingTags.replace(title + ',', ''));
                                                //remove from added tags
                                                $(this).remove();
                                                //if added tags list is empty then hide it
                                                if ($('#ExistingPostTags').val() === '') {
                                                    $('.autocomplete-selected-item-lists').addClass('hide');
                                                }                                            
                                            }
                                        });
                                    }
                                    //Remove getty image tag - ends
                                    
                                    $(btnObj).parent('span.btn-absolute').parent('a').parent('div.thumbnail-elements-logo').parent('div.owl-item').remove();
                                    $("#owl-thumbnails").data('owlCarousel').reinit();

                                    //if selected image found in thumbnails then set it as post image
                                    var postImageSet = false;
                                    $('.PostImageOwlThumbnails').find('img').each(function(){
                                        if($(this).data('selected') === 1){
                                            postImageSet = true;
// 24-03-2016 - Aman: i think following is not required, because non-selected image was removed. so no need to set post large image again
//                                            var selectedImgSrc = $(this).attr('src');
//                                            if(selectedImgSrc){
//                                                if(selectedImgSrc.indexOf('thumb') > -1){
//                                                    var selectedImgSrc = selectedImgSrc.replace('thumb', 'listing');
//                                                }
//                                                $('.PostThumbImage').attr('src', selectedImgSrc);
//                                            }
                                        }
                                    });
                                    //Set first image as post thumb because selected image was removed
                                    if(!postImageSet){
                                        var firstImgObj = $('.PostImageOwlThumbnails').find('img').first();
                                        if(firstImgObj.length > 0){
                                            var mediaId = $(firstImgObj).data('mediaid');
                                            var postId = $(firstImgObj).data('postid');                                            
                                            PostController.setPostLargeImage({'mediaId': mediaId, 'postId': postId});
                                            $('.PostImageOwlThumbnails').find('img').first().data('selected', 1);
                                            $('.PostImageOwlThumbnails').find('img').first().closest('div.thumbnail-elements-logo ').addClass('selected');
                                        }
                                        else{
                                            $('.PostThumbImage').attr('src', $('.PostThumbImage').data('defaultimage'));
                                            $('.article-image-caption').addClass('hide');
                                        }
                                    }
                                    $().General_ShowNotification({message: 'Successfully deleted' });
                                },
                                error: function(jqXHR, textStatus, errorThrown){
                                    $().General_ShowErrorMessage({message: jqXHR.responseText});
                                },
                                beforeSend: function(jqXHR, settings) { 
                                    $('i', btnObj).General_AddRemoveSpinnerIcon();
                                },
                                complete: function(jqXHR, textStatus) {
                                    $('i', btnObj).General_AddRemoveSpinnerIcon();
                                }
                            });
                        }
                    }
                });
            });
        },
        
        bindSavePost: function(){
            $('.SavePostBtn, .SavePostDraft, .SavePostPublish, .UpdatePostBtn, .SavePostSubmit').on('click', function(e){
                e.preventDefault();
                var btnObj = $(this);
                var postSubmitted = 0;
                
                /**  for post type event **/
                var type = $(btnObj).data('post-type');
                var postValidation = (type== 'event') ? false : true;
                var message = (type== 'event') ? 'event' : 'post';
                
                //User clicked on submit button, TODO: change confirm dialog to bootbox confirm dialog
                if($(btnObj).hasClass('SavePostSubmit')) {
                    if( !confirm('Are you sure you want to submit '+ message +' for further review?') ) {
                        return;
                    }
                    postSubmitted = 1;
                }
                
                var title = $.trim($('.PostTitleTextarea').val());
                if(title === ''){
                    $().General_ShowErrorMessage({message: "Please at least give "+ message +" a title."});
                    return;
                }
                var blogId = parseInt($('.PostBlogID').val());
                if(isNaN(blogId) || blogId <= 0){
                    $().General_ShowErrorMessage({message: "Please select a blog."});
                    return;
                }
                
                //add nofollow to external links
                PostController.addNoFollowToExternalLinks();
                
                var postContent;
                $("#content-editor").freshereditor("save", function(id, contents){
                    postContent = contents;
               
                    postContent = PostController.clearMSFormatting(postContent);
                    
                    // For Post Type Events
                    if($(btnObj).data('status') === 'published' && !postValidation) {
                       
                        var error = [];
                        if($.trim($('#createpost-suburb').val())== '') {
                            error.push('Suburb can not empty');
                        }
                        if($.trim($('#createpost-contact_name').val()) == '') {
                             error.push('Contact Name can not empty');
                        }
                        if($.trim($('#createpost-contact_email').val()) == '') {
                            error.push('Contact Email can not empty');
                        }
                        if($.trim($('#createpost-contact_number').val()) == '') {
                            error.push('Contact Number can not empty');
                        }
                        if($.trim($('#createpost-address').val()) == '') {
                            error.push('Address can not empty');
                        }
                            
                        if(error.length > 0){
                            var message = error.join("</br>");
                            $().General_ShowErrorMessage({message: message});
                            return;
                        }
                        //For feature image
                        if($.inArray("image", articleRequiredAttribs) >= 0) { //if absent returns -1
                            var totalImages = $('div.PostImageOwlThumbnails').find('img').length;
                            if(totalImages <= 0){
                                $().General_ShowErrorMessage({message: "Please select a featured image."});
                                return;
                            }
                        }
                           
                    }
                    
                    // For post type Article
                    if($(btnObj).data('status') === 'published' && postValidation){
                        //articleRequiredAttribs is global array declared in javscripts.php
                        if($.inArray("image", articleRequiredAttribs) >= 0) { //if absent returns -1
                            var totalImages = $('div.PostImageOwlThumbnails').find('img').length;
                            if(totalImages <= 0){
                                $().General_ShowErrorMessage({message: "Please select a featured image."});
                                return;
                            }
                        }
                        
                        if($.inArray("sport", articleRequiredAttribs) >= 0) {
                            var sportId = parseInt($('#createpost-sport_id').val());
                            if(isNaN(sportId) || sportId <= 0){
                                $().General_ShowErrorMessage({message: "Please select a " + sportLabel});
                                return;
                            }
                        }
                        
                        if($.inArray("tags", articleRequiredAttribs) >= 0) {
                            if($.trim($('#ExistingPostTags').val()) === ''){
                                $().General_ShowErrorMessage({message: "Please add an article tag."});
                                return;
                            }
                        }
                        
                        if($.inArray("contents", articleRequiredAttribs) >= 0) {
                            if($.trim(postContent) === ''){
                                $().General_ShowErrorMessage({message: "Please add something to article contents."});
                                return;
                            }
                        }
                    }

                    var formData = $('#create-post-form').serializeArray();
                    formData.push({name: "CreatePost[post_content]", value: postContent});
                    formData.push({name: "CreatePost[published_status]", value: $(btnObj).data('status')});
                    formData.push({name: "CreatePost[postSubmitted]", value: postSubmitted});

                    var socialPostTo = '';
                    $('.socialPostTo').not('.not-connected').each(function(idx){
                        if ($(this).hasClass('active')) {
                            socialPostTo = socialPostTo + $(this).data('value') + ',';
                        }
                    });

                    formData.push({name: "CreatePost[social_post_to]", value: socialPostTo});
                    //add selected image
                    $('.PostImageOwlThumbnails').find('img').each(function(){
                        if($(this).data('selected') === 1){
                            var selectedMediaId = $(this).data('mediaid');
                            formData.push({name: "CreatePost[selected_image]", value: selectedMediaId});
                        }
                    });

                    PostController.savePost({
                        formData: $.param(formData),
                        onError: function(error){
                            $().General_ShowErrorMessage({message: error});
                        },
                        onSuccess: function(data){
                            $('#createpost-post_id').val(data.postId);
                            $('.DeletePostBtn').removeClass('hide').data('postid', data.postId);

                            $('.SavePostBtn').data('status', data.publishedStatus);

                            if (data.publishedStatus === 'published') {
                                $('.SavePostPublish').addClass('hide');
                                $('#sidebar .SavePostDraft').removeClass('hide');
                                $('.UpdatePostBtn').removeClass('hide');
                                $('#resend-post-btn').data('status', 'published');

                            }
                            else {
                                $('#sidebar .SavePostDraft').addClass('hide');
                                $('.UpdatePostBtn').addClass('hide');
                                
                                $('#resend-post-btn').data('status', 'draft');
                                if(data.postHasWorkflow === 1 && data.workflowGroupType != 'publisher') {
                                    $('.SavePostPublish').addClass('hide');
                                    $('.SavePostSubmit').removeClass('hide');                                    
                                }
                                else {
                                    $('.SavePostPublish').removeClass('hide');
                                    $('.SavePostSubmit').addClass('hide');
                                }
                            }
                            //Also Published post in multiple blog
                            if ($('.alsoPublishInBtn').data('isadmin') == 1) {
                                $('.alsoPublishInBtn').removeClass('hide');
                            }
                            else {
                                $('.alsoPublishInBtn').addClass('hide');
                            }

                            if(postSubmitted === 1) {
                                $().General_ShowNotification({message: 'Successfully submitted for reviewing.' });
                                setTimeout(function(){
                                    window.location = baseHttpPath + "/user-blogs/index";
                                }, 1000);
                            }
                            else {
                                $().General_ShowNotification({message: 'Successfully saved.' });
                            }
                            
                            //refresh page if publishing status is changed
                            var oldPubStatus = $('.PostFormContainer').data('poststatus');
                            var newPubStatus = data.publishedStatus;
                            if(oldPubStatus != "" && oldPubStatus != newPubStatus) {
                                window.location = baseHttpPath + "/post/edit/" + data.postId;
                            }
                            //set new status - runs only once - from null status to draft
                            $('.PostFormContainer').data('poststatus', newPubStatus);
                            
                        },
                        beforeSend: function(){
                            if($(btnObj).hasClass('SavePostBtn')){
                                $('i', btnObj).General_AddRemoveSpinnerIcon();
                            }
                            else {
                                $(btnObj).data('origText', $(btnObj).html()).html('Please wait..');
                            }
                        },
                        onComplete: function(){
                            if($(btnObj).hasClass('SavePostBtn')){
                                $('i', btnObj).General_AddRemoveSpinnerIcon();
                            }
                            else {
                                $(btnObj).html($(btnObj).data('origText'));
                            }
                        }
                    });//PostController.savePost ends
                
                });//Callback of freshereditor ends
                
            });//Save button click ends
        },
                
        bindRemovePostMedia: function(){
            $('#content-editor').on('click', 'button.RemovePostMediaBtn', function(e){
                e.preventDefault();
                var btnObj = $(this);
                bootbox.confirm({
                    title: "Confirm",
                    message: "Do you really want to remove this media?",
                    callback: function(result) {
                        if (result) {
                            var gettyImgId = $(btnObj).data('getty-imageid');
                            
                            //Remove getty image tag - START
                            if(gettyImgId !== "" && gettyImgId !== undefined) {
                                $('div.autocomplete-tags-scroller').find('a.tag').each(function(){
                                    var gettyImgTagCls = 'PostTag' + gettyImgId;
                                    if($(this).hasClass(gettyImgTagCls)) {
                                        var title = $(this).attr('title');
                                        var existingTags = $('#ExistingPostTags').val();
                                        //remove from hidden input
                                        $('#ExistingPostTags').val(existingTags.replace(title + ',', ''));
                                        //remove from added tags
                                        $(this).remove();
                                        //if added tags list is empty then hide it
                                        if ($('#ExistingPostTags').val() === '') {
                                            $('.autocomplete-selected-item-lists').addClass('hide');
                                        }                                            
                                    }
                                });
                            }
                                //Remove getty image tag - ends

                             $(btnObj).closest('div.media-placeholder').remove();
                        }
                    }
                });
            });
        },
        
        bindRemoveYoutubeMedia: function(){
            $('#content-editor').on('click', 'button.RemoveYouTubeBtn', function(e){
                e.preventDefault();
                var btnObj = $(this);
                bootbox.confirm({
                    title: "Confirm",
                    message: "Do you really want to remove this video?",
                    callback: function(result) {
                        if (result) {
                            $(btnObj).closest('div.media-placeholder').remove();
                        }
                    }
                });
            });
        },
        
        bindRemoveTweetMedia: function(){
            $('#content-editor').on('click', 'button.RemoveTwitterBtn', function(e){
                e.preventDefault();
                var btnObj = $(this);
                bootbox.confirm({
                    title: "Confirm",
                    message: "Do you really want to remove this tweet?",
                    callback: function(result) {
                        if (result) {
                            $(btnObj).closest('div.media-placeholder').remove();
                        }
                    }
                });
            });
        },
        
        bindRemoveInstagramMedia: function(){
            $('#content-editor').on('click', 'button.RemoveInstagramBtn', function(e){
                e.preventDefault();
                var btnObj = $(this);
                bootbox.confirm({
                    title: "Confirm",
                    message: "Do you really want to remove this instagram entry?",
                    callback: function(result) {
                        if (result) {
                            $(btnObj).closest('div.media-placeholder').remove();
                        }
                    }
                });
            });
        },
        
        bindRemoveVimeoMedia: function(){
            $('#content-editor').on('click', 'button.RemoveVimeoBtn', function(e){
                e.preventDefault();
                var btnObj = $(this);
                bootbox.confirm({
                    title: "Confirm",
                    message: "Do you really want to remove this video?",
                    callback: function(result) {
                        if (result) {
                            $(btnObj).closest('div.media-placeholder').remove();
                        }
                    }
                });
            });
        },
        
        addArticleTag: function(tag, gettyImgId){
                 if(tag !== ''){
                    var existingPostTags = $('#ExistingPostTags').val();
                    var source   = $("#post-tag-template").html();
                    var template = Handlebars.compile(source);
                    var gettyImageId = "";
                    if(gettyImgId !== undefined) {
                        gettyImageId = gettyImgId;
                    }
                    var result = {'inputValue': tag, 'gettyImageId': gettyImageId};
                    //add tag to hidden input of existing tags
                    $('#ExistingPostTags').val(existingPostTags + tag + ',');
                    //add tag to list of added tags
                    $('.autocomplete-selected-item-lists').removeClass('hide');
                    $('.autocomplete-selected-item-lists .autocomplete-tags-scroller').append(template(result));
                }
        },
                
        addFeaturedImage: function(jsonObjects){
            var postId = jsonObjects.postId;
            var thumbnailPath = jsonObjects.images.thumb.path;
            var mediaId = jsonObjects.images.asset.id;
            var caption = jsonObjects.images.listing.caption;
           
            if(postId > 0){
                var source   = $("#post-image-owl-thumbnail-template").html();
                var template = Handlebars.compile(source);
                var commaSeparatedIds = mediaId + ',' + jsonObjects.images.thumb.id + ',' + jsonObjects.images.listing.id;
                var hasOrig = false;
                var origMediaId = 0;
                var origImgPath = '';
                if(jsonObjects.images.orig !== undefined && jsonObjects.images.orig.id !== undefined) {
                    origMediaId = jsonObjects.images.orig.id;
                    origImgPath = jsonObjects.images.orig.path;
                    hasOrig = true;
                }
                var thumbnail = template({
                    'imgSrc': thumbnailPath, 'postId': postId, 'mediaId': mediaId, 'mediaCaption': caption, 'selected': 0, 'commaSepAssetIds': commaSeparatedIds , 
                    'gettyImageId': jsonObjects.gettyImageId, 'origMediaId': origMediaId, 'origImgPath': origImgPath, 'hasOrig': hasOrig
                });
                var owl = $('#owl-thumbnails');
                owl.data('owlCarousel').addItem(thumbnail);
            }
            else {
                var source   = $("#post-image-upload-owl-thumbnail-template").html();
                var template = Handlebars.compile(source);
                var commaSeparatedIds = mediaId + ',' + jsonObjects.images.thumb.id + ',' + jsonObjects.images.listing.id;
                var origMediaId = 0;//jsonObjects.images.orig.id;
                var origImgPath = '';//jsonObjects.images.orig.path;
                if (jsonObjects.hasOwnProperty('uploadVimeoVideoId')) {
                    commaSeparatedIds += ',' + jsonObjects.uploadVimeoVideoId;
                }                
                var thumbnail = template({
                    'imgSrc': thumbnailPath, 'postId': 0, 'mediaId': mediaId, 'mediaCaption': caption, 'selected': 0, 'commaSepAssetIds': commaSeparatedIds, 
                    'gettyImageId': jsonObjects.gettyImageId, 'origMediaId': origMediaId, 'origImgPath': origImgPath, 'hasOrig': false
                });
                var owl = $('#owl-thumbnails');
                owl.data('owlCarousel').addItem(thumbnail);
            }
            //if selected image found in thumbnails then set it as post image
            var postImageSet = false;
            $('.PostImageOwlThumbnails').find('img').each(function(){
                if($(this).data('selected') === 1){
                    postImageSet = true;
                    var postId = $(firstImgObj).data('postid');
                    var mediaId = $(firstImgObj).data('mediaid');
                    PostController.setPostLargeImage({'postId': postId, 'mediaId': mediaId});
                }
            });

            if(!postImageSet){
                //if selected image not found in thumbnails then set first thumbnail as post image
                var firstImgObj = $('.PostImageOwlThumbnails').find('img').first();
                if(firstImgObj.length > 0){
                    var postId = $(firstImgObj).data('postid');
                    var mediaId = $(firstImgObj).data('mediaid');
                    PostController.setPostLargeImage({'postId': postId, 'mediaId': mediaId});
                    
                    $(firstImgObj).data('selected', 1);
                    $(firstImgObj).closest('div.thumbnail-elements-logo').addClass('selected');
                }
                else{
                    $('.PostThumbImage').attr('src', $('.PostThumbImage').data('defaultimage'));
                }
                
                if (caption !== '') {
                    $('div.article-image-caption').removeClass('hide');
                    $('p.image-caption').html(caption);
                }
            }
        },
        
        bindSetFeaturedImage: function(){
            $('#owl-thumbnails').on('click', '.PostImageThumbnail', function(e){
                e.preventDefault();
                
                $('.PostImageOwlThumbnails img').data('selected', 0);
                $('div.thumbnail-elements-logo ').removeClass('selected');
                
                var postId = parseInt($(this).data('postid'));
                var mediaId = parseInt($(this).data('mediaid'));
                var selectedImgSrc = $(this).attr('src');
                
                if(isNaN(postId) || isNaN(mediaId) || postId <= 0 || mediaId <= 0){
                    //image is not yet saved
                    if(selectedImgSrc.indexOf('thumb') > -1){
                        selectedImgSrc = selectedImgSrc.replace('thumb', 'asset');
                    }
                    $('.PostThumbImage').attr('src', selectedImgSrc);
                    $(this).data('selected', 1);
                    $(this).closest('div.thumbnail-elements-logo ').addClass('selected');
                    var caption = $(this).data('caption');
                    if(caption !== "") {
                        $('div.article-image-caption').removeClass('hide');
                        $('p.image-caption').html(caption);
                    }
                    else {
                        $('div.article-image-caption').addClass('hide');
                    }
                    return;
                }
                var thumbImgObj = $(this);
                $.ajax({
                    type: 'POST',
                    url: baseHttpPath + '/post/update-post-image',
                    dataType: 'json',
                    data: {id: postId, mediaid: mediaId, _csrf: yii.getCsrfToken()},
                    success: function(data, textStatus, jqXHR) {
                        PostController.setPostLargeImage({'postId': postId, 'mediaId': mediaId});
                        $(thumbImgObj).data('selected', 1);
                        $(thumbImgObj).closest('div.thumbnail-elements-logo ').addClass('selected');
                        var caption = $(thumbImgObj).data('caption');
                        if(caption !== "") {
                            $('div.article-image-caption').removeClass('hide');
                            $('p.image-caption').html(caption);
                        }
                        else {
                            $('div.article-image-caption').addClass('hide');
                        }
                        $().General_ShowNotification({message: 'Successfully updated' });
                    },
                    error: function(jqXHR, textStatus, errorThrown){
                        $().General_ShowErrorMessage({message: jqXHR.responseText});
                    }
                });
                
            });
        }
        
        
	};
	
}(jQuery));

/*Post Create Javacsript*/
PostController.CreateEditPost = (function($) {
    
    var startAutoSave = function(){
        
        $("#TimerDummy").timer({
            duration: 90,   //every 1 min 30 sec
            repeat: true,
            restart: true,
            callback: function() {
                
                var postType = $('.SavePostBtn').data('post-type');
                var hasWorkflowAccess = parseInt($('.SavePostBtn').data('hasworkflowaccess'));
                
                if ($('.SavePostBtn').data('status') !== 'published' && hasWorkflowAccess === 1 && postType == 'article') {
                    var title = $.trim($('.PostTitleTextarea').val());
                    var blogId = parseInt($('.PostBlogID').val());

                    if(title === '' || isNaN(blogId) || blogId <= 0){
                        return;
                    }

                    $('.SavePostBtn').trigger('click');
                }
                else if(postType == 'event') {
                    var title = $.trim($('.PostTitleTextarea').val());
                    var blogId = parseInt($('.PostBlogID').val());
                    var startDate =$.trim($('#createpost-start_date').val());
                    var endDate =$.trim($('#createpost-end_date').val());
                    
                    if(title === '' || isNaN(blogId) || blogId <= 0 || startDate == '' || endDate == '' ){
                       return;
                    }
                    
                    $('.SavePostBtn').trigger('click');
                }
            }
        });
    };
        
	var attachEvents = function() {
                                
        //bind delete post asset thumbnail fxn
        PostController.bindDeletePostImage();
        //bind save post fxn
        PostController.bindSavePost();
        //bind delete media from post content
        PostController.bindRemovePostMedia();
        //bind delete youtube video from post content
        PostController.bindRemoveYoutubeMedia();
        //bind delete vimeo video from post content
        PostController.bindRemoveVimeoMedia();
        //bind delete tweet from post content
        PostController.bindRemoveTweetMedia();
        //bind delete instragram from post content
        PostController.bindRemoveInstagramMedia();
        //bind set featuredimage on click of thumbnail
        PostController.bindSetFeaturedImage();
        
        $('.socialPostTo').click(function(e){
            e.preventDefault();
            if ($(this).hasClass('active') && !$(this).hasClass('disabled')) {
                $(this).toggleClass('not-connected');
            }
        });

        $('.ImportURLBtn').on('click', function(e){
            e.preventDefault();
            var url = $('#ImportURL').val();
            if($.trim(url) === ''){
                $().General_ShowErrorMessage({message: "Please enter the import URL"});
                return;
            }

            if($.trim($('#createpost-title').val()) !== ''){
                $().General_ShowErrorMessage({message: "Title should be empty to import from a URL"});
                return;
            }
            var btnObj = $(this);
            $.ajax({
                type: 'POST',
                url: baseHttpPath + '/post/import-url',
                dataType: 'json',
                data: {url: url, _csrf: yii.getCsrfToken()},
                success: function(data, textStatus, jqXHR) {
                    if(data.title.length > 0){
                        $('#createpost-title').val(data.title);
                    }
                    if(data.description.length > 0){
                        $('#content-editor').html("<p>" + data.description + "</p>");
                    }
                    if(data.keywords.length > 0){
                        var tagsArr = data.keywords.split(',');
                        for(var indx in tagsArr){
                            var keyword = tagsArr[indx];
                            PostController.addArticleTag(keyword);
                        }
                    }
                    $().General_ShowNotification({message: 'Successfully imported' });
                },
                error: function(jqXHR, textStatus, errorThrown){
                    $().General_ShowErrorMessage({message: jqXHR.responseText});
                },
                beforeSend: function(jqXHR, settings) { 
                    $(btnObj).html("<i class='fa fa-spinner fa-spin'></i>");
                },
                complete: function(jqXHR, textStatus) {
                    $(btnObj).html("Import");
                }
            });

        });

        //Tags auto completer
        $('#ArticleTags').autocompleter({
            highlightMatches: true, // marker for autocomplete matches
            source: baseHttpPath + '/general/tags', // object to local or url to remote search
            hint: true, // show hint
            empty: false,   // abort source if empty field
            limit: 20,  // max results
            minLength: 3    // Minimum letters to type for auto complete
        });

        $('.AddArticleTag').click(function (e){
            e.preventDefault();

            var selectedTag = $('#ArticleTags').val();
            if (selectedTag === '') {
                return;
            }
            PostController.addArticleTag(selectedTag);
            
            //empty dropdown
            $('#ArticleTags').val('');
        });
        
        // Enter Press save Article tags
        $('#ArticleTags').keypress(function (e) {
            var key = e.which;
            if(key === 13) {
               e.preventDefault();
               $('.AddArticleTag').click(); 
            }
        });
               
        //remove tag from added tags
        $('.autocomplete-selected-item-lists').on("click", '.tag', function(e){
            e.preventDefault();
            var elem = $(this);
            var title = elem.attr('title');
            var existingTags = $('#ExistingPostTags').val();
            //remove from hidden input
            $('#ExistingPostTags').val(existingTags.replace(title + ',', ''));
            //remove from added tags
            elem.remove();
            //if added tags list is empty then hide it
            if ($('#ExistingPostTags').val() === '') {
                $('.autocomplete-selected-item-lists').addClass('hide');
            }
        });

        $('.DeletePostBtn').on('click', function(e){
            e.preventDefault();
            var postId = parseInt($(this).data('postid'));
            if(postId <= 0){
                return;
            }
            var btnObj = $(this);
            bootbox.confirm({
                title: "Confirm",
                message: "Do you really want to delete this article?",
                callback: function(result) {
                    if (result) {
                        $.ajax({
                            type: 'POST',
                            url: baseHttpPath + '/post/delete',
                            dataType: 'json',
                            data: {id: postId, _csrf: yii.getCsrfToken()},
                            success: function(data, textStatus, jqXHR) {
                                $().General_ShowNotification({message: 'Successfully deleted' });
                                setTimeout(function(){
                                    window.location = baseHttpPath + '/user-blogs';
                                }, 1000);
                            },
                            error: function(jqXHR, textStatus, errorThrown){
                                $().General_ShowErrorMessage({message: jqXHR.responseText});
                            },
                            beforeSend: function(jqXHR, settings) {
                                $("#TimerDummy").timer('remove');
                                $('i', btnObj).General_AddRemoveSpinnerIcon();
                            },
                            complete: function(jqXHR, textStatus) {
                                $('i', btnObj).General_AddRemoveSpinnerIcon();
                            }
                        });
                    }
                }
            });
        });

        //Generate slug from title, if slug field is empty
        $('.PostTitleTextarea').on('blur', function(e){
            var title = $.trim($(this).val());
            if(title === ''){
                return;
            }
            if($('.PostCustomURL').val() !== ''){
                return;
            }
            
            $('.PostCustomURL').val(generateSlug(title));
        });
        
        //Generate slug from title, if slug field is empty
        $('.PostCustomURL').on('blur', function(e){
            $(this).val(generateSlug($(this).val()));
        });
        
        function generateSlug(title) {
            title = $.trim(title);
            if(title === ''){
                return title;
            }
            
            title = title.toLowerCase();
            title = title.replace(/\s/g,'-');
            title = title.replace(/[^a-zA-Z0-9\-]+/g,'');
            
            return title;
        }
	};
    
    $('div.add-thumbnail a').on('click', function(){
        $('.PostImageAddToContent').html('0');
    });
    $('li.TopPostImageLink a').on('click', function(){
        $('.PostImageAddToContent').html('1');
    });
	
	return {
		init: function() {
			attachEvents();
            startAutoSave();
		},
	};	
}(jQuery));

/* Javascript needed at start */
PostController.CreateEditStartup = (function ($) {
    
    var editorSelection;
    var captureSelection;
    var SetupEditor = function () {
        var editable = document.getElementById('content-editor'),selection, range;
        editable.focus();
        captureSelection = function (e) {
            // Don't capture selection outside editable region
            var isOrContainsAnchor = false,
                isOrContainsFocus = false,
                sel = window.getSelection(),
                parentAnchor = sel.anchorNode,
                parentFocus = sel.focusNode;

            while (parentAnchor && parentAnchor != document.documentElement) {
                if (parentAnchor == editable) {
                    isOrContainsAnchor = true;
                }
                parentAnchor = parentAnchor.parentNode;
            }

            while (parentFocus && parentFocus != document.documentElement) {
                if (parentFocus == editable) {
                    isOrContainsFocus = true;
                }
                parentFocus = parentFocus.parentNode;
            }

            if (!isOrContainsAnchor || !isOrContainsFocus) {
                return;
            }
            selection = window.getSelection();

            // Get range (standards)
            if (selection.getRangeAt !== undefined) {
                range = selection.getRangeAt(0);

                // Get range (Safari 2)
            } else if (
                document.createRange &&
                selection.anchorNode &&
                selection.anchorOffset &&
                selection.focusNode &&
                selection.focusOffset
            ) {
                range = document.createRange();
                range.setStart(selection.anchorNode, selection.anchorOffset);
                range.setEnd(selection.focusNode, selection.focusOffset);
            } else {
                // Failure here, not handled by the rest of the script.
                // Probably IE or some older browser
            }
            editorSelection = range;
        };
        editable.onkeyup = captureSelection;
    };
    
    var insertPostMedia = function(embedCode) {
        var range, expandedSelRange, node;
        if (editorSelection) {
            range = editorSelection;
            expandedSelRange = range.cloneRange();
            range.collapse(false);
            var el = document.createElement("div");
            el.innerHTML = embedCode;
            var frag = document.createDocumentFragment(), node, lastNode;
            while ((node = el.firstChild)) {
                lastNode = frag.appendChild(node);
            }
            range.insertNode(frag);
        }
        else {
            $('#content-editor').append(embedCode);
        }
    };
    
    var attachJS = function() {
        
        SetupEditor();
        
        $('#content-editor').on('focus', function(){
            captureSelection();
        });
        
        $('.autocomplete-tags-scroller').slimScroll({
            size: 				'7px',
            color: 				'#b4b4b4',
            opacity: 			1,
            height: 			'50px',
            distance: 			'0px',
            disableFadeOut: 	true,
            railVisible: 		true,
            alwaysVisible: 		true
        });
        
        //bind republish button 
        $('.RepublishBtn').duplicatePost({});
        
        $('#SearchYoutubeVideos').SearchYoutube({
            onSuccess: function(data){
                $('.YoutubeSearchVideoItem').unbind('click');
                $('.YoutubeSearchVideoItem').on('click', function(e){
                    e.preventDefault();
                    var videoId = $(this).data('videoid');
                    var source   = $("#post-embed-video-template").html();
                    
                    var template = Handlebars.compile(source);
                    var embedCode = template({'videoId': videoId});
                    
                    if($("#content-editor").html().trim() === ''){
                        $('#content-editor').append(embedCode);
                    }
                    else {
                        //Embed video at cursor position
                        insertPostMedia(embedCode);
                    }

                    $().General_ShowNotification({message: 'Video added successfully' });
                });
            }
        });
        
        $('#InsertYoutubeVideos').SearchYoutube({
            modalContainer: $('#ModalImage'),
            inputObj : $('#InsertYoutubeVideos input.InsertYoutubeInput'),
            searchItemsOuterContainer: $('div.InsertYoutubeVideosOuterContainer'),
            searchItemsContainer: $('ul.InsertYoutubeVideosListContainer'),
            loadMoreButton: $('button.InsertYoutubeLoadMore'),
            searchButton: $('#InsertYoutubeVideos button.InsertYoutubeSearchBtn'),
            onSuccess: function(data){
                $('.YoutubeSearchVideoItem').unbind('click');
                $('.YoutubeSearchVideoItem').on('click', function(e){
                    e.preventDefault();
                    var videoId = $(this).data('videoid');
                    var largeImage = $(this).data('largeimage');
                    
                    var postId = parseInt($('#createpost-post_id').val());
                    var nPostId = 0;
                    if(!isNaN(postId) && postId > 0){
                        nPostId = postId;
                    }
                    $.ajax({
                        type: 'post',
                        url: baseHttpPath + '/post/upload-videos-image',
                        dataType: 'json',
                        data: {videoid: videoId, postid: nPostId, image: largeImage, source : 'youtube', _csrf: yii.getCsrfToken()},
                        success: function(data, textStatus, jqXHR) {

                            PostController.addFeaturedImage(data);

                            $().General_ShowNotification({message: 'Video added successfully' });
                        },
                        error: function(jqXHR, textStatus, errorThrown){
                            $().General_ShowErrorMessage({message: jqXHR.responseText, type: 'error'});
                            return false;
                        },
                        beforeSend: function(jqXHR, settings) {
                            $('#ModalImage .modal-content').General_AddRemoveAjaxLoader();
                        },
                        complete: function(jqXHR, textStatus) {
                            $('#ModalImage .modal-content').General_AddRemoveAjaxLoader();                        
                        }
                    });   
                    
                });
            }
        });
        
        /** VIMEO VIDEOS SEARCH FUNCATIONALITY **/
        
        $('#SearchVimeoVideos').SearchVimeo({
            onSuccess: function(data){
                $('.VimeoSearchVideoItem').unbind('click');
                $('.VimeoSearchVideoItem').on('click', function(e){
                    e.preventDefault();
                    var videoId = $(this).data('videoid');
                    var source   = $("#post-embed-vimeo-video-template").html();
                    
                    var template = Handlebars.compile(source);
                    var embedCode = template({'videoId': videoId});
                    
                    if($("#content-editor").html().trim() === ''){
                        $('#content-editor').append(embedCode);
                    }
                    else {
                        //Embed video at cursor position
                        insertPostMedia(embedCode);
                    }

                    $().General_ShowNotification({message: 'Video added successfully' });
                });
            }
        });
        $('#InsertVimeoVideos').SearchVimeo({
            modalContainer: $('#ModalImage'),
            inputObj : $('#InsertVimeoVideos input.InsertVimeoInput'),
            searchItemsOuterContainer: $('div.InsertVimeoVideosOuterContainer'),
            searchItemsContainer: $('ul.InsertVimeoVideosListContainer'),
            loadMoreButton: $('button.InsertVimeoLoadMore'),
            searchButton: $('#InsertVimeoVideos button.InsertVimeoSearchBtn'),
            onSuccess: function(data){
                $('.VimeoSearchVideoItem').unbind('click');
                $('.VimeoSearchVideoItem').on('click', function(e){
                    e.preventDefault();
                    var videoId = $(this).data('videoid');
                    var largeImage = $(this).data('largeimage');
                    
                    var postId = parseInt($('#createpost-post_id').val());
                    var nPostId = 0;
                    if(!isNaN(postId) && postId > 0){
                        nPostId = postId;
                    }
                    $.ajax({
                        type: 'post',
                        url: baseHttpPath + '/post/upload-videos-image',
                        dataType: 'json',
                        data: {videoid: videoId, postid: nPostId, image: largeImage, source: 'vimeo', _csrf: yii.getCsrfToken()},
                        success: function(data, textStatus, jqXHR) {

                            PostController.addFeaturedImage(data);

                            $().General_ShowNotification({message: 'Video added successfully' });
                        },
                        error: function(jqXHR, textStatus, errorThrown){
                            $().General_ShowErrorMessage({message: jqXHR.responseText, type: 'error'});
                            return false;
                        },
                        beforeSend: function(jqXHR, settings) {
                            $('#ModalImage .modal-content').General_AddRemoveAjaxLoader();
                        },
                        complete: function(jqXHR, textStatus) {
                            $('#ModalImage .modal-content').General_AddRemoveAjaxLoader();                        
                        }
                    });   
                    
                });
            }
        });
        
        /** END VIMEO VIDEO SEARCHING **/
         
        $('#dropbox-chooser').click(function(e) {
            e.preventDefault();
           
            var options = {
                success: function(files) {
                    $.ajax({
                        type: 'post',
                        url: baseHttpPath + '/post/upload-dropbox-image',
                        dataType: 'json',
                        data: {fileUrl: files[0].link, _csrf: yii.getCsrfToken()},
                        success: function(data, textStatus, jqXHR) {
                            
                            var addToContent = $('.PostImageAddToContent').html();
                            if(addToContent === '1'){
                                var source = $("#post-embed-images-template").html();
                                var template = Handlebars.compile(source);
                                var blockId = new Date().getTime();
                                var embedImage = template({'imgSrc': data.images.asset.path,'blockId':blockId});
                                if($("#content-editor").html().trim() === ''){
                                    $('#content-editor').append(embedImage);
                                }
                                else {
                                    //Embed image at cursor position
                                    insertPostMedia(embedImage);
                                }
                            }
                            else{
                                //Show thumbnail in slider
                                PostController.addFeaturedImage(data);
                            }
                            
                            $().General_ShowNotification({message: 'Image added successfully' });
                        },
                        error: function(jqXHR, textStatus, errorThrown){
                            $().General_ShowErrorMessage({message: jqXHR.responseText, type: 'error'});
                            return false;
                        },
                        beforeSend: function(jqXHR, settings) {
                            $('#ModalImage .modal-content').General_AddRemoveAjaxLoader();
                        },
                        complete: function(jqXHR, textStatus) {
                            $('#ModalImage .modal-content').General_AddRemoveAjaxLoader(); 
                        }
                    }); 
                },
                cancel: function() {

                },
                linkType: "direct", // or "direct"
                multiselect: false, // or true
                extensions: ['.jpg', '.png', '.gif', '.jpeg']
            };
           
            Dropbox.choose(options);
        });
        
        $('#SearchTwitterForm').SearchTwitter({
            onSuccess: function(data){
                $('.TwitterSearchItem').unbind('click');
                $('.TwitterSearchItem').on('click', function(e){
                    e.preventDefault();
                    
                    var tweetId = $(this).data('id');
                    /*var thumbnail = $(this).find('img').attr('src');
                    var postedTime = $(this).find('span.time').html();
                    var userName = $(this).find('h4').html();
                    var screenName = $(this).find('span.twitter-handler-name').html();
                    var description = $(this).find('p.desc').html();
                    var tweet = {
                        tweetId: tweetId,
                        thumbnail: thumbnail,
                        postedTime: postedTime,
                        userName: userName,
                        screenName: screenName
                    };*/
                    
                    $.ajax({
                        type: 'post',
                        url: baseHttpPath + '/search/twitter-embed-code',
                        dataType: 'json',
                        data: {id: tweetId, _csrf: yii.getCsrfToken()},
                        success: function(data, textStatus, jqXHR) {
                            var data = {
                                blockquote: data.html
                            };
                            
                            var source   = $("#post-embed-tweets-template").html();
                            var template = Handlebars.compile(source);
                            var embedCodeTweet = template(data);

                            if($("#content-editor").html().trim() === ''){
                                $('#content-editor').append(embedCodeTweet);
                            }
                            else {

                                //Embed tweet at cursor position
                                insertPostMedia(embedCodeTweet);
                            }
                            
                            $().General_ShowNotification({message: 'Tweet added successfully' });
                        },
                        error: function(jqXHR, textStatus, errorThrown){
                            $().General_ShowErrorMessage({message: jqXHR.responseText, type: 'error'});
                            return false;
                        },
                        beforeSend: function(jqXHR, settings) {
                            $('#ModalTwitter .modal-content').General_AddRemoveAjaxLoader();
                        },
                        complete: function(jqXHR, textStatus) {
                            $('#ModalTwitter .modal-content').General_AddRemoveAjaxLoader();                        
                        }
                    });
                    
                    /*var source   = $("#post-embed-tweets-template").html();
                    var template = Handlebars.compile(source);
                    var embedCodeTweet = template(tweet);
                    
                    if($("#content-editor").html().trim() === ''){
                        $('#content-editor').append(embedCodeTweet);
                    }
                    else {
                        
                        //Embed tweet at cursor position
                        var range, expandedSelRange, node;
                        if (editorSelection) {
                            range = editorSelection;
                            expandedSelRange = range.cloneRange();
                            range.collapse(false);
                            var el = document.createElement("div");
                            el.innerHTML = embedCodeTweet;
                            var frag = document.createDocumentFragment(), node, lastNode;
                            while ((node = el.firstChild)) {
                                lastNode = frag.appendChild(node);
                            }
                            range.insertNode(frag);
                        }
                    }
                    
                    $().General_ShowNotification({message: 'Tweet added successfully' });*/
                });
            }
        });
        
        $('#SearchInstagramForm').SearchInstagram({
            onSuccess: function(data){
                $('.InstagramSearchItem').unbind('click');
                $('.InstagramSearchItem').on('click', function(e){
                    e.preventDefault();
                    
                    var mediaId = $(this).data('id');
                    var mediaLink = $(this).data('link');
                    $.ajax({
                        type: 'post',
                        url: baseHttpPath + '/search/instagram-embed-code',
                        dataType: 'json',
                        data: {mediaLink: mediaLink, _csrf: yii.getCsrfToken()},
                        success: function(data, textStatus, jqXHR) {
                            var data = {
                                blockquote: data.html
                            };
                            
                            var source   = $("#post-embed-instagram-template").html();
                            var template = Handlebars.compile(source);
                            var embedMediaCode = template(data);
                    
                            if($("#content-editor").html().trim() === ''){
                                $('#content-editor').append(embedMediaCode);
                            }
                            else {
                                //Embed post at cursor position
                                insertPostMedia(embedMediaCode);
                            }

                            $().General_ShowNotification({message: 'Media added successfully' });
                        },
                        error: function(jqXHR, textStatus, errorThrown){
                            $().General_ShowErrorMessage({message: jqXHR.responseText, type: 'error'});
                            return false;
                        },
                        beforeSend: function(jqXHR, settings) {
                            $('#ModalInstagram .modal-content').General_AddRemoveAjaxLoader();
                        },
                        complete: function(jqXHR, textStatus) {
                            $('#ModalInstagram .modal-content').General_AddRemoveAjaxLoader();                        
                        }
                    });
                });
            }
        });
        
        $('#embed-code-btn').on('click', function(e){
            e.preventDefault();
            var source = $('#embed-code-box').val();
            
            if (source != '') {
                //remove twitter widget
                source = source.replace('<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>', '');
                //remove instagram widget
                source = source.replace('<script async defer src="//platform.instagram.com/en_US/embeds.js"></script>', '');
                
                if($("#content-editor").html().trim() === ''){
                    $('#content-editor').append(source);
                }
                else {
                    //Embed source at cursor position
                    insertPostMedia(source);
                }
                
                $('#embed-code-box').val('');
                
                $('#ModalEmbed').modal('hide');
            }
            else {
                $().General_ShowNotification({message: 'Please enter your code to embed.', type: 'error' });
            }
            
         });
        
        
        Dropzone.autoDiscover = false;
        var myDropzone = new Dropzone("#dropzone", {
            paramName: "post_image_file",
            addRemoveLinks: false,
            maxFiles: postMaxUploadImages,
            init: function(){ 
                this.on("success", function(file, response) {
                    var addToContent = $('.PostImageAddToContent').html();
                    if(addToContent === '1'){
                        var source   = $("#post-embed-images-template").html();
                        var template = Handlebars.compile(source);
                        var blockId = new Date().getTime();
                        var embedImage = template({'imgSrc': response,'blockId':blockId});
                        if($("#content-editor").html().trim() === ''){
                            $('#content-editor').append(embedImage);
                        }
                        else {
                            //Embed image at cursor position
                            insertPostMedia(embedImage);
                        }
                    }
                    else{
                        //Show thumbnail in slider
                        var jsonObjects = JSON.parse(response);
                        PostController.addFeaturedImage(jsonObjects);
                    }
                    $().General_ShowNotification({message: 'Image added successfully' });
                });
            }
        });
        
        //Remove existing thumbnails from modal
        $('#ModalImage').on('shown', function () {
            myDropzone.removeAllFiles();
            var addToContent = $('.PostImageAddToContent').html();
            $('#contentimage').val(addToContent);
            var postId = parseInt($('#createpost-post_id').val());
            if(!isNaN(postId) && postId > 0){
                //Set post id in dropzone form, so if postid exists then image will be directly linked to post
                $('#dropzone-postid').val(postId);
                $('#dropzone-video-postid').val(postId);
            }
            //upload video is allowed for featured images only
            //same modal is used for content images & featured images
            if(addToContent == 1) {
                $("#ModalImage li.VideoTabs").hide();
                //count tabs - leave vimeo tab
                var tabsLen = 0;
                $("ul.maintabs").children('li').each(function(){
                    if($(this).is(':visible')) {
                        tabsLen += 1;
                    }
                });
                        
                //remove existing tabs-count class
                $('ul.maintabs').attr('class',
                    function(i, c){
                       return c.replace(/(^|\s)nav-tabs-\S+/g, '');
                });
                
                //add appropriate tabs-count class
                if(tabsLen === 3) {
                    $("ul.maintabs").addClass('nav-tabs-three');
                }
                else if(tabsLen === 4) {
                    $("ul.maintabs").addClass('nav-tabs-four');
                }
                else if(tabsLen === 5) {
                    $("ul.maintabs").addClass('nav-tabs-five');
                }
            }
            else {
                $("#ModalImage li.VideoTabs").show();
                //count all tabs
                var tabsLen = $("ul.maintabs").children('li').length;
                //remove existing tabs-count class
                $('ul.maintabs').attr('class',
                    function(i, c){
                       return c.replace(/(^|\s)nav-tabs-\S+/g, '');
                });
                //add appropriate tabs-count class
                if(tabsLen === 3) {
                    $("ul.maintabs").addClass('nav-tabs-three');
                }
                else if(tabsLen === 4) {
                    $("ul.maintabs").addClass('nav-tabs-four');
                }
                else if(tabsLen === 5) {
                    $("ul.maintabs").addClass('nav-tabs-five');
                }
            }
        }); 

        /**
         * Upload Dropzone video on vimeo Server
         */
       var uploadVideoDropzone = new Dropzone("#uploadVideoDropzone", {
            paramName: "post_upload_video",
            addRemoveLinks: false,
            acceptedFiles: 'video/mp4',
            autoProcessQueue: false,
            maxFiles: 1,
            init: function () {

                // Start Upload file on Click listener
                var startUpload = document.querySelector("#uploadfile");
                uploadVideoDropzone = this; // closure

                startUpload.addEventListener("click", function() {
                    if($('.videoTitle').val() === "") {
                        $().General_ShowNotification({message: 'Please enter a title for video.', type: 'error' });
                        return;
                    }
                   startUpload.innerHTML = 'Please Wait...';
                   startUpload.disabled = true;
                   uploadVideoDropzone.processQueue();
                });
                
                this.on("sending" , function(file, xhr, formData){
                        var title = $('.videoTitle').val();
                        formData.append('title', title);
                });
                this.on("success", function (file, response) {
                    startUpload.innerHTML = 'Upload';
                    startUpload.disabled = false;

                    //Show thumbnail in slider
                    var jsonObjects = JSON.parse(response);
                    PostController.addFeaturedImage(jsonObjects);
                    
                    //Reset Form Element
                    $('.videoTitle').val('');
                    uploadVideoDropzone.removeAllFiles();
                    $('#ModalImage').modal('hide');
                    $().General_ShowNotification({message: 'Video added successfully'}); 
                });
                
            }
        });
        
        /**
         * Search Images in fansunite media modal
         * @type Boolean|Boolean|Boolean
         */
        var loadingSearchImage = false;
        
        $('#SearchImages form').FansuniteImages({
            inputObj: $('#SearchImages form input.SearchImagesInput'),
            thumbsOuterContainer: $('#SearchImages div.blog-level'),
            thumbsDisplayContainer: $('#SearchImages div.scroller-clubs'),
            displayPageNumbersElement: $('#SearchImages span.SearchImagesPages'),
            loadMoreButton: $('#SearchImages button.SearchImagesLoadMore'),
            onImageSelect: function(imageObj) {
                
                if (loadingSearchImage) {
                    $().General_ShowNotification({message: 'Image download already in progress', type: 'error' });
                    return;
                }
                
                var imageId = imageObj.imageId;
                var caption = imageObj.caption;
                
                var addToContent = $('.PostImageAddToContent').html();
                var postId = parseInt($('#createpost-post_id').val());
                var nPostId = 0;
                if(!isNaN(postId) && postId > 0){
                    nPostId = postId;
                }
                
                $.ajax({
                    type: 'post',
                    url: baseHttpPath + '/post/upload-search-image',
                    dataType: 'json',
                    data: {id: imageId, postid: nPostId, contentimage: addToContent,caption: caption,  _csrf: yii.getCsrfToken()},
                    success: function(data, textStatus, jqXHR) {
                         if(addToContent === '1'){
                            var source   = $("#post-embed-search-images-template").html();
                            var template = Handlebars.compile(source);
                            var blockId = new Date().getTime();
                            var embedImage = template({'imgSrc': data.imageSrc, 'imageId': imageId,'blockId':blockId,caption: caption});
                            if($("#content-editor").html().trim() === ''){
                                $('#content-editor').append(embedImage);
                            }
                            else {
                                //Embed video at cursor position
                                insertPostMedia(embedImage);
                            }
                        }
                        else{
                            //Show thumbnail in slider
                            PostController.addFeaturedImage(data);
                        }
                        
                        $().General_ShowNotification({message: 'Image added successfully' });
                    },
                    error: function(jqXHR, textStatus, errorThrown){
                        $().General_ShowErrorMessage({message: jqXHR.responseText, type: 'error'});
                        return false;
                    },
                    beforeSend: function(jqXHR, settings) {
                        loadingSearchImage = true;
                        $('#ModalImage .modal-content').General_AddRemoveAjaxLoader();
                    },
                    complete: function(jqXHR, textStatus) {
                        loadingSearchImage = false;
                        $('#ModalImage .modal-content').General_AddRemoveAjaxLoader();                        
                    }
                }); 
            }
        });
        
        
        var loadingGettyImage = false;
        
        //getty images
        $('#GettyImages form').GettyImages({
            inputObj: $('#GettyImages form input.GettyImagesInput'),
            thumbsOuterContainer: $('#GettyImages div.blog-level'),
            thumbsDisplayContainer: $('#GettyImages div.scroller-clubs'),
            displayPageNumbersElement: $('#GettyImages span.GettyImagesPages'),
            loadMoreButton: $('#GettyImages button.GettyImagesLoadMore'),
            onImageSelect: function(imageObj) {
                
                if (loadingGettyImage) {
                    $().General_ShowNotification({message: 'Image download already in progress', type: 'error' });
                    return;
                }
                
                var gettyImgId = imageObj.imageId;
                var imgCaption = imageObj.caption;
                //var imgArtist = imageObj.artist;
                
                var caption = null;
                if($.trim(imgCaption) != '') {
                    caption = imgCaption;
                    /*if($.trim(imgArtist) != '') {
                        caption = caption +' by: '+ imgArtist;
                    }*/
                }
                
                //add getty image keywords as post tags
                if(imageObj.keywords.length > 0){
                    for(var indx in imageObj.keywords){
                        var keyword = imageObj.keywords[indx];
                        if(keyword !== ''){
                            PostController.addArticleTag(keyword, gettyImgId);
                        }
                    }
                }
                
                var addToContent = $('.PostImageAddToContent').html();
                var postId = parseInt($('#createpost-post_id').val());
                var nPostId = 0;
                if(!isNaN(postId) && postId > 0){
                    nPostId = postId;
                }
                $.ajax({
                    type: 'post',
                    url: baseHttpPath + '/post/upload-getty-image',
                    dataType: 'json',
                    data: {id: gettyImgId, postid: nPostId, contentimage: addToContent,caption: caption,  _csrf: yii.getCsrfToken()},
                    success: function(data, textStatus, jqXHR) {
                         if(addToContent === '1'){
                            var source   = $("#post-embed-images-template").html();
                            var template = Handlebars.compile(source);
                            var blockId = new Date().getTime();
                            var embedImage = template({'imgSrc': data.imageSrc, 'gettyImageId': gettyImgId,'blockId':blockId,caption: caption});
                            if($("#content-editor").html().trim() === ''){
                                $('#content-editor').append(embedImage);
                            }
                            else {
                                //Embed video at cursor position
                                insertPostMedia(embedImage);
                            }
                        }
                        else{
                            //Show thumbnail in slider
                            PostController.addFeaturedImage(data);
                        }
                        
                        $().General_ShowNotification({message: 'Image added successfully' });
                    },
                    error: function(jqXHR, textStatus, errorThrown){
                        $().General_ShowErrorMessage({message: jqXHR.responseText, type: 'error'});
                        return false;
                    },
                    beforeSend: function(jqXHR, settings) {
                        loadingGettyImage = true;
                        //$('#GettyImages .loader' ).removeClass('hide');
                        $('#ModalImage .modal-content').General_AddRemoveAjaxLoader();
                    },
                    complete: function(jqXHR, textStatus) {
                        loadingGettyImage = false;
                        //$('#GettyImages .loader').addClass('hide');
                        $('#ModalImage .modal-content').General_AddRemoveAjaxLoader();                        
                    }
                });                    
            }
        });

        $('textarea.header-name').autogrow({onInitialize: true});

        $('#content-editor').freshereditor({
            toolbar_selector: "#toolbar",
            excludes: 	['removeFormat', 'insertheading4']
        });
        
        $("#content-editor").freshereditor("edit", true);
        
        $('#toolbar').find('.toolbar_p').trigger('click');
        
        $('.btn-group .btn').click(function(){
            $('.btn-group .btn').removeClass("active");
            $(this).addClass("active");
        });
        
        $('#createpost-published_date').datetimepicker({
            autoclose: true,
            format: 'dd-mm-yyyy HH:ii:ss P',    //'mm-dd-yyyy HH:ii:ss P',
            pickerPosition: "bottom-left"
        });
        $('#createpost-start_date').datetimepicker({
            autoclose: true,
            format: 'dd-mm-yyyy HH:ii:ss P',    //'mm-dd-yyyy HH:ii:ss P',
            pickerPosition: "bottom-left"
        });
        $('#createpost-end_date').datetimepicker({
            autoclose: true,
            format: 'dd-mm-yyyy HH:ii:ss P',    //'mm-dd-yyyy HH:ii:ss P',
            pickerPosition: "bottom-left"
        });
        
        /**
         * DateTime picker close issue Custom resolved.
         * @date 23 feb 2016
         */
        $(".field-createpost-published_date, .field-createpost-start_date, .field-createpost-end_date").on('click', function (e) {
            e.stopPropagation();
        });

        $(document).on('click', 'body', function (e) {
            if ($(e.target).closest('.datetimepicker').length === 0) {
                $('.datetimepicker').hide();
            }
        });
                 
        //Sticky header with buttons in Create Post page
        var stickyOffset = $('.edit-post').offset().top;
        var editorOffset = $('#content-editor').offset().top - $('.toolbar-navbar').outerHeight(true);
        
        $(window).scroll(function(){
            var sticky = $('.sticky'),
                scroll = $(window).scrollTop(),
                editorParentWidth = $('.editor').parent().width(),
                stickyHeaderHeight = $('.edit-post-fixed-section').outerHeight(true);
                
            if (scroll >= stickyOffset) {
                sticky.addClass('fixed');
            }
            else {
                sticky.removeClass('fixed');
            }
            
            if(scroll >= (editorOffset - stickyHeaderHeight - stickyOffset)) {
               $('.editor').addClass('toolbar-fixed').css('top', stickyHeaderHeight + 'px').css('width', editorParentWidth + 'px');
            }
            else {
                $('.editor').removeClass('toolbar-fixed').css('top', 'auto').css('width', 'auto');
            }
        }); 
        
        $(window).resize(function(){
            stickyOffset = $('.edit-post').offset().top;
            editorOffset = $('#content-editor').offset().top - $('.toolbar-navbar').outerHeight(true);
        });
        
        //Scroll Bar
        $('.publish-scrollbar').slimScroll({});
        
        $('.alsoPublishInSubmitBtn').click(function (e) {
            
            var blogIds = [];
            var postId = $('#createpost-post_id').val();
            $(".alsoPublishInBlogs:checked").not(':disabled').each(function () {
                blogIds.push($(this).val());
            });
            
            var btnObj = $(this);
            if (blogIds.length > 0) {

                $.ajax({
                    type: 'post',
                    url: baseHttpPath + '/post/also-publish-in',
                    dataType: 'json',
                    data: {blogIds: blogIds, postId: postId,  _csrf: yii.getCsrfToken()},
                    success: function (data, textStatus, jqXHR) {
                        if (data.success == 1) {
                            $('#alsoPublishInModal').modal('hide');
                            $().General_ShowNotification({message: 'Article successfully published in selected blog(s).'});
                            $(".alsoPublishInBlogs:checked").not(':disabled').attr('disabled','disabled');
                        }
                    },
                    error: function (jqXHR, textStatus, errorThrown) {
                        $().General_ShowErrorMessage({message: jqXHR.responseText, type: 'error'});
                    },
                    beforeSend: function (jqXHR, settings) {
                        $(btnObj).html("Please wait...");
                    },
                    complete: function (jqXHR, textStatus) {
                        $(btnObj).html("Submit");
                    }
                });
            }
            else {
                $().General_ShowNotification({message: "Please select a blog from list to publish article.", type: 'error'});
            }
        });
        
        $('.changeAttribution').click(function(e) {
            $('.changeAttribution:checked').not(this).removeAttr('checked');
        });
        
        // Change Post Attribution
        $('.changeAttributionBtn').click(function (e) {
            
            e.preventDefault();
            
            var userId = 0;
            var postId = $(this).data('postid');
            
            var selected = $("input[type='checkbox'][name='attributionUser']:checked");
            if (selected.length > 0) {
                userId = selected.val();
            }
            
            var btnObj = $(this);
            if (userId > 0) {

                $.ajax({
                    type: 'post',
                    url: baseHttpPath + '/post/change-attribution',
                    dataType: 'json',
                    data: {userId: userId, postId: postId,  _csrf: yii.getCsrfToken()},
                    success: function (data, textStatus, jqXHR) {
                        if (data.success == 1) {
                            $('#changeAttributionInModal').modal('hide');
                            $().General_ShowNotification({message: 'Attribution applied successfully.'});
                        }
                    },
                    error: function (jqXHR, textStatus, errorThrown) {
                        $().General_ShowErrorMessage({message: jqXHR.responseText, type: 'error'});
                    },
                    beforeSend: function (jqXHR, settings) {
                        $(btnObj).html("Please wait...");
                    },
                    complete: function (jqXHR, textStatus) {
                        $(btnObj).html("Submit");
                    }
                });
            }
            else {
                $().General_ShowNotification({message: "Please select a user", type: 'error'});
            }
        });
        
        
        
        //on change blog, find user workflow and show/hide submit/publish button
        $('.PostBlogID').on('change', function(){
            var blogid = parseInt($(this).val());

            //if post is published, no need of submit button
            if($('.SavePostBtn').data('status') === 'published') {
                return;
            }
            
            //if post type is event
            if($('.SavePostBtn').data('post-type') === 'event') {
                return;
            }
            
            if(isNaN(blogid) || blogid <= 0) {
                return;
            }
            
            $.ajax({
                type: 'post',
                url: baseHttpPath + '/post/check-user-workflow',
                dataType: 'json',
                data: {blogid: blogid, _csrf: yii.getCsrfToken()},
                success: function(data, textStatus, jqXHR) {
                    if(data.workflowExists === 1) {
                        $('.SavePostPublish').addClass('hide');
                        $('.SavePostSubmit').removeClass('hide');
                    }
                    else {
                        $('.SavePostSubmit').addClass('hide');
                        $('.SavePostPublish').removeClass('hide');
                    }
                },
                error: function(jqXHR, textStatus, errorThrown){
                    $().General_ShowErrorMessage({message: jqXHR.responseText, type: 'error'});
                },
                beforeSend: function(jqXHR, settings) {
                },
                complete: function(jqXHR, textStatus) {
                }
            });              
        });
        
        //Resend post back to prev group
        $('#resend-post-btn').on('click', function(e){
            e.preventDefault();
            
            var userid = parseInt($('.ResendPostSelectUser').val());
            if(isNaN(userid) || userid <= 0) {
                $().General_ShowNotification({message: 'Please select an author from list', type: 'error' });
                return;
            }
            
            var btnObj = $(this);
            var postid = parseInt($(btnObj).data('postid'));
            if(isNaN(postid) || postid <= 0) {
                return;
            }
            
            var postStatus = $(btnObj).data('status');
            var message = $('#resend-message').val();
            
            $.ajax({
                type: 'post',
                url: baseHttpPath + '/post/resend-post',
                dataType: 'json',
                data: {postid: postid, userid: userid, message: message, _csrf: yii.getCsrfToken()},
                success: function(data, textStatus, jqXHR) {
                    $().General_ShowNotification({message: 'Article resent successfully' });
                    setTimeout(function(){
                        window.location = baseHttpPath + "/user-blogs/index";
                    }, 1000);
                },
                error: function(jqXHR, textStatus, errorThrown){
                    $().General_ShowErrorMessage({message: jqXHR.responseText, type: 'error'});
                },
                beforeSend: function(jqXHR, settings) {
                    $(btnObj).html('Please wait...');
                },
                complete: function(jqXHR, textStatus) {
                    $(btnObj).html('Submit');
                }
            }); 
            
        }); 
    };
    
    return {
		//main function to initiate the module
        init: function() {
            attachJS();
            
        }
    };

} (jQuery));

/*Article Javacsript*/
PostController.Article = (function($) {
    
    var bindDuplicatePost = function(){
        $('.duplicate-post-plus').duplicatePost({});
    };
    
    var attachEvents = function() {
        
        bindDuplicatePost();
        
        //follow/unfollow blog 
        $('.FollowBlog').followBlog({
            'onSuccess': function(data, obj){
                if($(obj).data('status') === 'follow') {
                    $().General_ShowNotification({message: "Blog un-followed successfully."});
                }
                else {
                    $().General_ShowNotification({message: "Blog followed successfully."});
                }
            },
           'onError': function(obj, errorMessage) {
                $().General_ShowErrorMessage({message: errorMessage});
            },
            'beforeSend': function(obj) {
               $('i', obj).General_AddRemoveSpinnerIcon();
            },
            'onComplete': function(obj){
                $('i', obj).General_AddRemoveSpinnerIcon();
                ($(obj).data('status') === 'follow') ? $(obj).html("<i class='fa fa-star'></i> Follow Blog") : $(obj).html("<i class='fa fa-star'></i> Following Blog");
            }
        });
        
        $('#ReportAbuseForm-submit').on('click', function(e){
            e.preventDefault();
            if($.trim($('#ReportAbuseForm-message').val()) === '') {
                $().General_ShowNotification({type: 'error', message: "Please provide your message."});
                return;
            }
            if($.trim($('.ReportAbuseCaptcha').val()) === '') {
                $().General_ShowNotification({type: 'error', message: "Please provide captcha."});
                return;
            }
            
            $.ajax({
                type: 'POST',
                url: baseHttpPath + '/article/report-abuse',
                dataType: 'json',
                data: $('#report-abuse-form').serialize(),
                success: function(data, textStatus, jqXHR) {
                    $().General_ShowNotification({message: "Successfully reported as abuse."});
                    $('#ModalReportAbuse').modal('hide');
                    $('a.ReportAbuse').hide();
                },
                error: function(jqXHR, textStatus, errorThrown){
                    $().General_ShowErrorMessage({message: jqXHR.responseText});
                }
            });
        });
        
        //Auto Ellipsis
        $(".nav-fillslide h3").autoEllipsisText({multiline:true, accuracyStep:1});
        
        //triggers when user wants to like or unlike a post
        $('.like-post').click(function(e){
            e.preventDefault();
            var action = $(this).hasClass('like') ? 'like' : 'unlike';
            var post_id = $(this).data('id');            
            var token = yii.getCsrfToken();
            
            $.ajax({
                url: baseHttpPath + '/article/like-post',
                type: 'post',
                data: {action: action, post_id: post_id, _csrf: token},
                dataType: 'json',
                success: function(data){
                    if(data.success == 1) {
                        if(action == 'like') {
                           // $('.like-post > i').removeClass('fa-thumbs-up').addClass('fa-thumbs-down');
                            $('.like-post > span').html(data.total_likes);
                            $('.like-post').removeClass('like').addClass('unlike');                            
                        }
                        else {
                          //  $('.like-post > i').removeClass('fa-thumbs-down').addClass('fa-thumbs-up');
                            $('.like-post > span').html(data.total_likes);
                            $('.like-post').removeClass('unlike').addClass('like');                            
                            
                        }
                    }
                },
                error: function(jqXHR, textStatus, errorThrown){
                    $().General_ShowErrorMessage({message: jqXHR.responseText});
                }

            });
        });
        
    };
    
    return {
		//main function to initiate the module
        init: function() {
            attachEvents();
        }
    };

} (jQuery));

/** for image caption **/
PostController.ImageCaption = (function ($) {

    var attachEvents = function () {
        
        //Edit caption model render
        $('body').on('click', '.EditPostThumbnail, button.captionPostMediaBtn', function (e){
            e.preventDefault();
            var elem = $(this);
            var isContentImage = false;
            
            // for content image only
            if(elem.hasClass('contentImage')) {
                isContentImage = true;
                var contentDivId =  $(elem).closest('.media-placeholder').attr('id');
                var caption = $('#'+contentDivId).find('.content-caption').text();
                
                $('#saveCaptionBtn').data('content-image-id', contentDivId);
                $('#saveCaptionBtn').data('postid','');
                $('#saveCaptionBtn').data('mediaid','');
                $('#updateCaptionText').val(caption);
                $('#saveCaptionBtn').data('content-image',isContentImage);
                
            }
            else {
                var postId = elem.data('postid');
            	var mediaIdsCommaSeparated = elem.data('allmediaids');
            	var caption = elem.data('caption');

            	//set Post and media Id
            	$('#updateCaptionText').val(caption);
            	$('#saveCaptionBtn').data('postid',postId);
            	$('#saveCaptionBtn').data('allmediaids',mediaIdsCommaSeparated);
                $('#saveCaptionBtn').data('content-image-id', '');
                
            }
            
            $('#ModalImageCaption').modal('show');
        });
        
        //Save caption data
        $('#saveCaptionBtn').on('click', function () {
            var elem = $(this);
            
            /** This Clause Execute When user Put images on Contents **/
            var contentImage = elem.data('content-image');
            if(contentImage === true) {
                var blockId = $(elem).data('content-image-id');
                var caption = $('#updateCaptionText').val();
                if(caption == "") {
                    $('#'+blockId).find('.content-caption').html("").addClass('hide');
                }
                else {
                    $('#'+blockId).find('.content-caption').html(caption).removeClass('hide');
                }
                $('#'+blockId).find('.captionPostMediaBtn').data('caption', caption);
                $('#ModalImageCaption').modal('hide'); 
                $().General_ShowNotification({message: "Caption updated successfully."});
                return;
            }
            
            /** For Featured Image caption **/
            var postId = elem.data('postid');
            var mediaIdsCommaSeparated = elem.data('allmediaids');
            var caption = $('#updateCaptionText').val();
            var token = yii.getCsrfToken();

            $.ajax({
                url: baseHttpPath + '/post/update-caption',
                type: 'post',
                data: {postId: postId, mediaIds: mediaIdsCommaSeparated, caption: caption, _csrf: token},
                dataType: 'json',
                success: function(data){
                    if (data.success == '0') {
                        $().General_ShowErrorMessage({message: "Error updating caption."});
                        return;
                    }
                    var temp = mediaIdsCommaSeparated.split(",");
                    var id = temp[0];
                    
                    $('#postThumbnailEditCaptionBtn-'+id).data('caption', caption);
                    $('#ModalImageCaption').modal('hide');  
                    
                    $('#PostImageThumbnail-'+id).data('caption', caption);
                    if($('#PostImageThumbnail-'+id).data('selected') == 1) {
                        if(caption !== "") {
                            $('div.article-image-caption').removeClass('hide');
                            $('p.image-caption').html(caption);
                        }
                        else {
                            $('div.article-image-caption').addClass('hide');
                        }
                    }
                },
                error: function(jqXHR, textStatus, errorThrown){
                    $().General_ShowErrorMessage({message: jqXHR.responseText});
                },
                beforeSend: function(jqXHR, settings) { 
                    $(elem).text('Saving...');
                },
                complete: function(jqXHR, textStatus) {
                    (elem).text('SAVE');
                }

            });
            
            
        });

    };

    return {
        //main function to initiate the module
        init: function () {
            attachEvents();
        }
    };

}(jQuery));


/** for Post type event **/
PostController.EventPost = (function ($) {

    var attachEvents = function () {

        var marker;
        var elem = $('#addressMap');
        var latitude = elem.data('latitude');
        var longitude = elem.data('longitude');
        var location = elem.data('location');
        
        google.maps.event.addDomListener(window, 'load', initMap);
        function initMap() {
            var mapLat;
            var mapLong;
            if(latitude != '' && longitude !='' ) {
                mapLat = latitude; 
                mapLong = longitude;
            }
            else {
                mapLat = parseFloat(defaultLatitude); 
                mapLong = parseFloat(defaultLongitude);
            }
            
            var map = new google.maps.Map(document.getElementById('addressMap'), {
                zoom: 7,
                center: {lat: mapLat, lng: mapLong}
            });
            var geocoder = new google.maps.Geocoder();

            document.getElementById('createpost-suburb').addEventListener('change', function () {
                geocodeAddress(geocoder, map);
            });
            
            //set current marker
            if(latitude != '' && longitude !='' ) {
               updateMarker = new google.maps.Marker({
                    position: new google.maps.LatLng(latitude, longitude),
                    map: map
                });
            }
        }
        function geocodeAddress(geocoder, resultsMap) {
            var address1 = document.getElementById('createpost-address').value;
            var address2 = document.getElementById('createpost-address1').value;
            var suburb = document.getElementById('createpost-suburb').value;

            var address = address1 + ',' + address2 + ',' + suburb;
            geocoder.geocode({'address': address}, function (results, status) {
                if (status === google.maps.GeocoderStatus.OK) {
                    resultsMap.setCenter(results[0].geometry.location);

                    //clear the previous marker
                    if (marker) {
                        marker.setMap(null);
                    }

                    marker = new google.maps.Marker({
                        map: resultsMap,
                        position: results[0].geometry.location
                    });

                    // Set Lat and Long
                    var latitude = results[0].geometry.location.lat();
                    var longitude = results[0].geometry.location.lng();
                    document.getElementById('createpost-latitude').value = latitude;
                    document.getElementById('createpost-longitude').value = longitude;
                } else {
                    document.getElementById('createpost-suburb').value = '';
                    $().General_ShowErrorMessage({message: 'Geocode was not successful for the following reason: ' + status});
                }
            });
        }
        
        $('.prefill-btn').on('click', function(e){
            e.preventDefault();
            
            var blogId = parseInt($('.PostBlogID').val());
            if(isNaN(blogId) || blogId <= 0){
                $().General_ShowErrorMessage({message: "Please select a blog."});
                return;
            }    
            
            $('#eventPrefillModal').modal('toggle');
        });
        
        //enable single selection
        $('.event-prefill-list').on('click', '.eventPrefillChkbox', function(e) {
            $('.eventPrefillChkbox:checked').not(this).removeAttr('checked');
        });
        
        $("#eventPrefillModal").on('shown', function () {
            
            var blogId = parseInt($('.PostBlogID').val());
            $.ajax({
                type: 'POST',
                url: baseHttpPath + '/search/blog-events',
                dataType: 'json',
                data: {blogid: blogId},
                success: function(data, textStatus, jqXHR) {
                    $('ul.event-prefill-list').html('');
                    
                    if(data.events.length > 0){
                        var source   = $("#event-prefill-template").html();
                        var template = Handlebars.compile(source);

                        for(var ind in data.events){
                            var item = template(data.events[ind]);
                            $('ul.event-prefill-list').append(item);
                        }
                        
                        $('#eventPrefillModal p.no-data').addClass('hide');
                        $('.eventPrefillSubmitBtn').removeClass('hide');
                    }
                    else {
                        $('#eventPrefillModal p.no-data').removeClass('hide');
                        $('.eventPrefillSubmitBtn').addClass('hide');
                    }
                },
                error: function(jqXHR, textStatus, errorThrown){
                    $().General_ShowErrorMessage({message: jqXHR.responseText});
                },
                beforeSend: function(jqXHR, settings) { 
                },
                complete: function(jqXHR, textStatus) {
                }
            });
            
        });
        
        $('.eventPrefillSubmitBtn').on('click', function(e){
            e.preventDefault();
            
            var postId = 0;
            var selected = $("input[type='checkbox'][name='eventPrefillChkbox']:checked");
            if (selected.length > 0) {
                postId = parseInt(selected.val());
            }
            
            if(isNaN(postId) || postId <= 0){
                $().General_ShowErrorMessage({message: "Please select an event."});
                return;
            } 
            
            $.ajax({
                type: 'POST',
                url: baseHttpPath + '/search/event-details',
                dataType: 'json',
                data: {postid: postId},
                success: function(data, textStatus, jqXHR) {
                    
                    $('#createpost-venue').val(data.event.venue);
                    $('#createpost-address').val(data.event.address);
                    $('#createpost-address1').val(data.event.address1);
                    $('#createpost-suburb').val(data.event.suburb);
                    $('#createpost-postcode').val(data.event.postcode);
                    $('#createpost-contact_name').val(data.event.contact_name);
                    $('#createpost-contact_email').val(data.event.contact_email);
                    $('#createpost-contact_number').val(data.event.contact_number);
                    $('#createpost-website_url').val(data.event.website_url);
                    $('#createpost-latitude').val(data.event.latitude);
                    $('#createpost-longitude').val(data.event.longitude);
                    
                    $('#eventPrefillModal').modal('toggle');
                },
                error: function(jqXHR, textStatus, errorThrown){
                    $().General_ShowErrorMessage({message: jqXHR.responseText});
                },
                beforeSend: function(jqXHR, settings) { 
                },
                complete: function(jqXHR, textStatus) {
                }
            });            
            
        });
        
    };

    return {
        //main function to initiate the module
        init: function () {
            attachEvents();
        }
    };

}(jQuery));
var WriteArticleController = (function($) {
        var saveArticle = function(options){

            var defaults = {
                'formData' : {},
                'onSuccess' : function(){},
                'onError' : function(){},
                'beforeSend' : function(){},
                'onComplete' : function(){}
            };
            var opts = $.extend( {}, defaults, options );
            if($.isEmptyObject(opts.formData)){
                return false;
            }
            $.ajax({
                type: 'POST',
                url: baseHttpPath + '/post/save-post',
                dataType: 'json',
                data: opts.formData,
                success: function(data, textStatus, jqXHR) {
                    if (opts.onSuccess && typeof opts.onSuccess === 'function') {
                        opts.onSuccess(data);
                    }
                },
                error: function(jqXHR, textStatus, errorThrown){
                    if (opts.onError && typeof opts.onError === 'function') {
                        opts.onError(jqXHR.responseText);
                    }
                },
                beforeSend: function(jqXHR, settings) { 
                    if (opts.beforeSend && typeof opts.beforeSend === 'function') {
                        opts.beforeSend();
                    }
                },
                complete: function(jqXHR, textStatus) {
                    if (opts.onComplete && typeof opts.onComplete === 'function') {
                        opts.onComplete();
                    }
                }
            });
        };
        
    var clearForm = function(){
        $('#tags_2_tagsinput').find('span.tag').remove();
        $('#write-article-form').trigger('reset');
        $('.sbOptions').find('a[href=#]').trigger('click');
        $('.WriteArticleThumbnails').html('');
        $('#tags_2_tag').trigger('focus');
        $('#tags_2_tag').trigger('blur');        
    };  
    
    var attachEvents = function(){
        $('button.WriteArticlePublishBtn, a.WriteArticleOpenInEditorBtn').on('click', function(e){
            e.preventDefault();
            
            var btnObj = $(this);
            var publishedStatus = 'draft';
            //Validate article attribs
            if($('.WriteArticleBlogId').val() === ""){
                $().General_ShowErrorMessage({message: "Please select a blog."});
                return;
            }
            if($('.WriteArticleTitle').val() === ""){
                $().General_ShowErrorMessage({message: "Please provide an article title."});
                return;
            }
            if($(btnObj).hasClass('WriteArticlePublishBtn')){
                if($('.WriteArticleSportId').val() === ""){
                    $().General_ShowErrorMessage({message: "Please select a sport."});
                    return;
                }
                if($('.WriteArticlePostContent').val() === ""){
                    $().General_ShowErrorMessage({message: "Please provide post content."});
                    return;
                }
                if($('.WriteArticleTags').val() === ""){
                    $().General_ShowErrorMessage({message: "Please provide article tag(s)."});
                    return;
                }
                if($('.WriteArticleThumbnails').find('img').length <= 0){
                    $().General_ShowErrorMessage({message: "Please select an image."});
                    return;
                }
                publishedStatus = 'published';
            }
            
            var formData = $('#write-article-form').serializeArray();
            formData.push({name: "CreatePost[published_status]", value: publishedStatus});
            //save article
            saveArticle({
                formData: $.param(formData),
                onError: function(error){
                    $().General_ShowErrorMessage({message: error});
                },
                onSuccess: function(data){
                    //$('#createpost-post_id').val(data.postId);
                    clearForm();
                    
                    if($(btnObj).hasClass('WriteArticleOpenInEditorBtn')){
                        window.location = baseHttpPath + '/post/edit/' + data.postId;
                    }
                    
                    $().General_ShowNotification({message: 'Successfully saved' });
                },
                beforeSend: function(){
                    if($(btnObj).hasClass('WriteArticlePublishBtn')){
                        $(btnObj).data('origText', $(btnObj).html()).html('Please wait..');
                    }
                    else {
                        $('i', btnObj).General_AddRemoveSpinnerIcon();
                    }
                },
                onComplete: function(){
                    if($(btnObj).hasClass('WriteArticlePublishBtn')){
                        $(btnObj).html($(btnObj).data('origText'));
                    }
                    else {
                        $('i', btnObj).General_AddRemoveSpinnerIcon();
                    }
                }
            });
            
        });
        
        Dropzone.autoDiscover = false;
        var myDropzone = new Dropzone("#dropzone", {
            paramName: "post_image_file",
            addRemoveLinks: false,
            maxFiles: 10,
            init: function(){
                this.on("success", function(file, response) {
                        //Show thumbnail in slider
                        var jsonObjects = JSON.parse(response);
                        var thumbnailPath = jsonObjects.images.thumb.path;
                        var mediaId = jsonObjects.images.asset.id;
                        var source   = $("#write-article-thumbnail-template").html();
                        var template = Handlebars.compile(source);
                        var commaSeparatedIds = mediaId + ',' + jsonObjects.images.thumb.id + ',' + jsonObjects.images.listing.id;
                        var thumbnail = template({'imgSrc': thumbnailPath, 'commaSepAssetIds': commaSeparatedIds});
                        $('.WriteArticleThumbnails').append(thumbnail);
                        
                        $().General_ShowNotification({message: 'Image added successfully' });
                });
            }
        });
        
        //Remove existing thumbnails from modal
        $('#ModalImage').on('shown', function () {
            myDropzone.removeAllFiles();
        });        
        
        var loadingGettyImage = false;
        
        //getty images
        $('#GettyImages form').GettyImages({
            inputObj: $('#GettyImages form input.GettyImagesInput'),
            thumbsOuterContainer: $('#GettyImages div.blog-level'),
            thumbsDisplayContainer: $('#GettyImages div.scroller-clubs'),
            displayPageNumbersElement: $('#GettyImages span.GettyImagesPages'),
            loadMoreButton: $('#GettyImages button.GettyImagesLoadMore'),
            onImageSelect: function(imageObj) {
                
                if (loadingGettyImage) {
                    $().General_ShowNotification({message: 'Image download already in progress', type: 'error' });
                    return;
                }
                
                var gettyImgId = imageObj.imageId;
                var nPostId = 0;
                $.ajax({
                    type: 'post',
                    url: baseHttpPath + '/post/upload-getty-image',
                    dataType: 'json',
                    data: {id: gettyImgId, postid: nPostId, contentimage: 0, _csrf: yii.getCsrfToken()},
                    success: function(data, textStatus, jqXHR) {
                        var thumbnailPath = data.images.thumb.path;
                        var mediaId = data.images.asset.id;
                        var source   = $("#write-article-thumbnail-template").html();
                        var template = Handlebars.compile(source);
                        var commaSeparatedIds = mediaId + ',' + data.images.thumb.id + ',' + data.images.listing.id;
                        var thumbnail = template({'imgSrc': thumbnailPath, 'commaSepAssetIds': commaSeparatedIds});
                        $('.WriteArticleThumbnails').append(thumbnail);
                        
                        $().General_ShowNotification({message: 'Image added successfully' });
                    },
                    error: function(jqXHR, textStatus, errorThrown){
                        $().General_ShowErrorMessage({message: jqXHR.responseText, type: 'error'});
                        return false;
                    },
                    beforeSend: function(jqXHR, settings) {
                        loadingGettyImage = true;
                        //$('#GettyImages .loader' ).removeClass('hide');
                        $('#ModalImage .modal-content').General_AddRemoveAjaxLoader();
                    },
                    complete: function(jqXHR, textStatus) {
                        loadingGettyImage = false;
                        //$('#GettyImages .loader').addClass('hide');
                        $('#ModalImage .modal-content').General_AddRemoveAjaxLoader();
                    }
                });                    
            }
        });
    }
    
    return {
        init: function(){
            attachEvents();
        }
    };
}(jQuery));


(function($) {
   
    $.fn.duplicatePost = function(options){

        var defaults = {
            'onSuccess' : function(){},
            'onError' : function(){},
            'beforeSend' : function(){},
            'onComplete' : function(){}
        };
        var opts = $.extend( {}, defaults, options );

        return this.each (function(){
            var elem  = $(this);
            $(elem).click(function(e){
                e.preventDefault();
                
                var postId = parseInt($(this).data('id'));
                var $modal = $('#ajax-modal');
                       
                // create the backdrop and wait for next modal to be triggered
                $('body').modalmanager('loading');

                setTimeout(function() {
                    $modal.load(baseHttpPath + '/post/modal-duplicate-post?postId=' + postId, '', function() {
                        
                        // slim scroll in republish blogs
                        $('.republish-scrollbar').slimScroll({});
                        $modal.modal();
                        
                    });
                }, 500);
            });
        });
    };
    
    $('#ajax-modal').on('shown', function () {
        $('#duplicate-post-btn').on('click', function () {
            
            var blogIds = [];
            var postId = parseInt($(this).data('post'));
            $(".republishInBlogs:checked").not(':disabled').each(function () {
                blogIds.push($(this).val());
            });

            if (blogIds.length > 0) {

                $.ajax({
                    type: 'POST',
                    url: baseHttpPath + '/article/duplicate-post',
                    dataType: 'json',
                    data: {postId: postId, blogIds: blogIds, _csrf: yii.getCsrfToken()},
                    success: function (data) {
                        if (data.success == 1) {
                            $('#ajax-modal').modal('hide');
                            $().General_ShowNotification({message: 'Article successfully republished in selected blog(s).'});
                            $(".republishInBlogs:checked").not(':disabled').attr('disabled','disabled');
                        }
                        else {
                            $().General_ShowErrorMessage({message: "Invalid Request"});
                        }
                    },
                    error: function (jqXHR, textStatus, errorThrown) {
                        $().General_ShowErrorMessage({message: jqXHR.responseText});
                    },
                    beforeSend: function () {
                        $('#duplicate-post-btn i').General_AddRemoveSpinnerIcon();
                    },
                    onComplete: function () {
                        $('#duplicate-post-btn i').General_AddRemoveSpinnerIcon();
                    }
                });
            }
        });
    });
}(jQuery));
var SocialContactsController = (function($) {
	
	return {
		init: function() {
			SocialContactsController.Invite.init();
			SocialContactsController.MyFeed.init();
		}
	};
	
}(jQuery));

/*My feed Tab*/
SocialContactsController.MyFeed = (function($) {
	
	var attachEvents = function() {
        
        //select all / unselect all codes
        $('button.SelCodes').on('click', function(e){
            e.preventDefault();

            var action = $(this).data('action');
            if(action === 'select') {
                $('ul.fu-fav-sports input[type=checkbox]').attr('checked', true);
                $(this).data('action', 'deselect');
                $(this).html('Unselect all');
            }
            else {
                $('ul.fu-fav-sports input[type=checkbox]').attr('checked', false);
                $(this).data('action', 'select');
                $(this).html('Select all');
            }
        });

        //select all / unselect all clubs
        $('button.SelClubs').on('click', function(e){
            e.preventDefault();

            var action = $(this).data('action');
            if(action === 'select') {
                $('ul.fu-fav-clubs input[type=checkbox]').attr('checked', true);
                $(this).data('action', 'deselect');
                $(this).html('Unselect all');
            }
            else {
                $('ul.fu-fav-clubs input[type=checkbox]').attr('checked', false);
                $(this).data('action', 'select');
                $(this).html('Select all');
            }
        });            
            
        //select all / unselect all suggested writers
        $('button.SelWriters').on('click', function(e){
            e.preventDefault();

            var action = $(this).data('action');
            if(action === 'select') {
                $('ul.suggestedwriters button.like').addClass('selected');
                $(this).data('action', 'deselect');
                $(this).html('Unselect all');
            }
            else {
                $('ul.suggestedwriters button.like').removeClass('selected');
                $(this).data('action', 'select');
                $(this).html('Select all');
            }
        });
        
        //select all / unselect all suggested blogs
        $('button.SelBlogs').on('click', function(e){
            e.preventDefault();

            var action = $(this).data('action');
            if(action === 'select') {
                $('ul.suggestedblogs button.like').addClass('selected');
                $(this).data('action', 'deselect');
                $(this).html('Unselect all');
            }
            else {
                $('ul.suggestedblogs button.like').removeClass('selected');
                $(this).data('action', 'select');
                $(this).html('Select all');
            }
        });

        //handle click on star in suggested sections
        $('ul.suggestedwriters button.like, ul.suggestedblogs button.like').on('click', function(e){
            e.preventDefault();

            $(this).toggleClass('selected');
        });

        var submitBtnClicked = false;
        $('.SubmitMyFeedBtn').on('click', function(e){
            e.preventDefault();
            //prevent reclick submit button
            if(submitBtnClicked) {
                return false;
            }
            submitBtnClicked = true;

            //get selected sports
            var sports = [];
            var i = 0;
            $('#FUFavSports').find('input[type=checkbox]').each(function(){
                if($(this).is(':checked')) {
                    sports[i] = encodeURIComponent($(this).val());
                    i++;
                }
            });

            //get selected clubs
            var clubs = [];
            var i = 0;
            $('#FUFavClubs').find('input[type=checkbox]').each(function(){
                if($(this).is(':checked')) {
                    clubs[i] = encodeURIComponent($(this).val());
                    i++;
                }
            });

            //get selected writers
            var writers = [];
            var i = 0;
            $('ul.suggestedwriters').find('button.like').each(function(){
                if($(this).hasClass('selected')) {
                    writers[i] = encodeURIComponent($(this).data('id'));
                    i++;
                }
            });

            //get selected blogs
            var blogs = [];
            var i = 0;
            $('ul.suggestedblogs').find('button.like').each(function(){
                if($(this).hasClass('selected')) {
                    blogs[i] = encodeURIComponent($(this).data('id'));
                    i++;
                }
            });

            //post data
            var btnObj = $(this);
            $.ajax({
                url: baseHttpPath + '/social-contacts/index',
                type: 'post',
                data: {sports: sports, clubs: clubs, writers: writers, blogs: blogs, _csrf: yii.getCsrfToken()},
                dataType: 'json',
                success: function(data){
                    if(data.success) {
                        $().General_ShowNotification({message: 'Successfully updated' });
                        setTimeout(function(){
                            window.location = baseHttpPath + "/social-connect/index";
                        }, 1000);
                    }
                },
                error: function(jqXHR, textStatus, errorThrown){
                    $().General_ShowErrorMessage({message: jqXHR.responseText});
                },
                beforeSend: function(jqXHR, settings) { 
                    $('.SubmitMyFeedBtn').html('Please wait...');
                },
                complete: function(jqXHR, textStatus) {
                    submitBtnClicked = false;
                    $('.SubmitMyFeedBtn').html('Submit');
                }
            });
        });
	};
	
	return {
		init: function() {
			attachEvents();
		}
	};
	
}(jQuery));

/*Invite Tab*/
SocialContactsController.Invite = (function($) {
	
	var attachEvents = function() {
            
        $('button.inviteSubmit').on('click', function(e){
            e.preventDefault();
            var anySelected = false;
            $('#InviteForm').find('input[type=checkbox]').each(function(){
                if($(this).is(' :checked')) {
                   anySelected = true;
                }
            });

            if(!anySelected) {
                $().General_ShowErrorMessage({message: "Please select a contact to invite."});
                return;
            }
            
            $('#InviteForm').submit();
        });

        $('button.SelectAllSocialContacts').on('click', function(e){
            e.preventDefault();
            $('#SocialContactsPanel input[type=checkbox]').attr('checked', true);
        });

        $('button.UnSelectSocialContacts').on('click', function(e){
            e.preventDefault();
            $('#SocialContactsPanel input[type=checkbox]').attr('checked', false);
        });
	};
	
	return {
		init: function() {
			attachEvents();
		}
	};
	
}(jQuery));
var SocialConnectController = (function($) {
	
	return {
		init: function() {
			SocialConnectController.Followers.init();
			SocialConnectController.MyFeed.init();
		}
	};
	
}(jQuery));

/*My feed Tab*/
SocialConnectController.MyFeed = (function($) {
	
	var attachEvents = function() {

        $('.submitFollower').on('click', function(e){
            e.preventDefault();

            //get selected followers
            var followers = [];
            $('#SocialFollowersPanel').find('input[type=checkbox]').each(function(){
                if($(this).is(':checked')) {
                    followers.push(encodeURIComponent($(this).val()));
                }
            });
            
            //post data
            var btnObj = $(this);
            if (followers.length > 0) {
                $.ajax({
                    url: baseHttpPath + '/social-connect/follow',
                    type: 'post',
                    data: {SocialFollower: followers},
                    dataType: 'json',
                    success: function(data){
                        if(data.success) {
                            window.location = baseHttpPath + "/social-connect";
                        }
                    },
                    error: function(jqXHR, textStatus, errorThrown){
                        $().General_ShowErrorMessage({message: jqXHR.responseText});
                    },
                    beforeSend: function(jqXHR, settings) { 
                        $(btnObj).html('Please wait...');
                    },
                    complete: function(jqXHR, textStatus) {
                        $(btnObj).html('Follow');
                    }
                });
            }
        });
	};
	
	return {
		init: function() {
			attachEvents();
		}
	};
	
}(jQuery));

/*Followers Tab*/
SocialConnectController.Followers = (function($) {
	
	var attachEvents = function() {
		
            $('button.SelectAllSocialFollowers').on('click', function(e){
                e.preventDefault();
                $('#SocialFollowersPanel input[type=checkbox]').attr('checked', true);
            });
            
            $('button.UnSelectSocialFollowers').on('click', function(e){
                e.preventDefault();
                $('#SocialFollowersPanel input[type=checkbox]').attr('checked', false);
            });
	};
	
	return {
		init: function() {
			attachEvents();
		}
	};
	
}(jQuery));
var SocialModerationController = (function ($) {

    var attachEvents = function () {

        $('.custom-blog-select').change(function () {

            var value = $(this).val();
            if (value != '') {
                window.location.href = baseHttpPath + '/social-moderation/index?blogId=' + value;
            }
        });
    };

    return {
        init: function () {
            attachEvents();
            SocialModerationController.SocialFeed.init();
        },
    };

}(jQuery));

/** Social Feed Script **/
SocialModerationController.SocialFeed = (function ($) {

    var attachEvents = function () {
        
        var reLayout = function() {
            new AnimOnScroll( document.getElementById( 'moderationgrid' ), {
                minDuration : 0.4,
                maxDuration : 0.7,
                viewportFactor : 0.2
            });
        };
        
        reLayout();
        
        var loadMoreSocialPosts = function(options){
            var defaults = {
                loader: $('div.load-more-items'),
                container: $('ul.moderationgrid'),
                onSuccess: false,
                onError: false,
                beforeSend: false,
                onComplete: false,
                page: 0,
                blogId: 0,
                socialSource: 'all',
                replaceExisting: false,
                keywords: null
            };
            var opts = $.extend( {}, defaults, options );
         
            if(isNaN(opts.blogId) || opts.blogId <= 0){
                return;
            }
            if(isNaN(opts.page)){
                return;
            }

            $(opts.container).data('page', opts.page);
            var csrfToken = $('meta[name="csrf-token"]').attr("content");
            
            $.ajax({
                type: 'POST',
                url: baseHttpPath + '/social-moderation/load-more-posts',
                dataType: 'json',
                data: {blogid: opts.blogId, page: opts.page, keywords: opts.keywords, source: opts.socialSource, _csrf: csrfToken},
                success: function(data, textStatus, jqXHR) {
                    if(opts.socialSource === 'review') {
                        if(data.articlesCount > 0){
                            $('#ModalReview div.modal-body').html(data.html);
                        }
                        else {
                            $('#ModalReview div.modal-body').html('<p class="no-data">No data found.</p>');
                        }
                        
                        $('.reviewList').slimScroll({height: '350px'});
                    }
                    else {
                        if(data.articlesCount > 0){
                            if(opts.replaceExisting) {
                                $(opts.container).html(data.html);
                            }
                            else {
                                $(opts.container).append(data.html);
                            }

                            if (data.articlesCount < postsOffset) {
                                waypoint.destroy();
                            }
                            else {
                                Waypoint.refreshAll();
                            }

                            reLayout();
                        }
                        else {
                            waypoint.destroy();
                            if(opts.replaceExisting) {
                                $(opts.container).html('');
                                $(opts.container).css('height', '0px');
                            }

                            if(opts.page <= 0) {
                                $('.NoDataModeration').removeClass('hide');
                            }
                        }
                    }
                    if (opts.onSuccess && typeof opts.onSuccess === 'function') {
                        opts.onSuccess(data);
                    }
                },
                error: function(jqXHR, textStatus, errorThrown){
                    if (opts.onError && typeof opts.onError === 'function') {
                        opts.onError(jqXHR.responseText);
                    }
                },
                beforeSend: function(jqXHR, settings) { 
                    $(opts.loader).removeClass('hide');
                    $('.NoDataModeration').addClass('hide');
                    if (opts.beforeSend && typeof opts.beforeSend === 'function') {
                        opts.beforeSend();
                    }
                },
                complete: function(jqXHR, textStatus) {
                    $(opts.loader).addClass('hide');
                    if (opts.onComplete && typeof opts.onComplete === 'function') {
                        opts.onComplete();
                    }
                }
            });
        };
        
        var waypoint = new Waypoint({
            element: $('#LoadMoreArticles'),
            offset: '90%',
            handler: function(direction){
                if(direction == 'down'){
                    var blogid = parseInt($('ul.moderationgrid').data('blogid'));
                    var source = $('#SocialSource option:selected').val();
                    var searchKeyword = $('#searchSocialFeed').val();
                    var page = parseInt($('ul.moderationgrid').data('page'));
                    page = page + 1;
                    loadMoreSocialPosts({page: page, blogId: blogid, keywords: searchKeyword, socialSource: source});
                }
            }
        });
        
        $('#SocialSource').on('change', function(){
            var source = $(this).val();
            var searchKeyword = $('#searchSocialFeed').val();
            var blogid = parseInt($('ul.moderationgrid').data('blogid'));
            var page = 0;
            loadMoreSocialPosts({page: page, blogId: blogid, keywords: searchKeyword, socialSource: source, replaceExisting: true});
        });
        
        //on Review modal shown
        $('#ModalReview').on('shown', function() {
            var blogid = parseInt($('ul.moderationgrid').data('blogid'));
            loadMoreSocialPosts({blogId: blogid, socialSource: 'review'});
        });
        
        // Remove article from review modal
        $('#ModalReview').on('click', 'button.RemoveFromReview', function (e) {

            e.preventDefault();
            var obj = $(this);
            var id = $(this).data('postid');
            var blogId = $('#moderationgrid').data('blogid');
            var csrfToken = $('meta[name="csrf-token"]').attr("content");

            if (isNaN(id) || id <= 0) {
                $().General_ShowErrorMessage({message: "Invalid Post"});
                return;
            }

            $.ajax({
                type: 'POST',
                url: baseHttpPath + '/social-moderation/session-social-moderation',
                dataType: 'json',
                data: {id: id, blogId: blogId, _csrf: csrfToken},
                success: function (data) {
                    if (data.success == 1) {
                        $(obj).closest('li').remove();
                        $('.moderationgrid').find('li.SocialArticle' + id).find('a.PinArticleBtn').removeClass('active');
                        
                        if($('#ModalReview ul.reviewBody li').length <= 0) {
                             $('#ModalReview div.modal-body').html('<p class="no-data">No data found.</p>');
                        }
                        
                        $().General_ShowNotification({message: 'Successfully un-pinned.'});
                    }
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    $().General_ShowErrorMessage({message: jqXHR.responseText});
                },
                beforeSend: function (jqXHR, settings) {
                    $('i', obj).General_AddRemoveSpinnerIcon();
                },
                complete: function (jqXHR, textStatus) {
                    $('i', obj).General_AddRemoveSpinnerIcon();
                }
            });
        });
        
        //Edit Social Articles
        $('#moderationgrid').on('click', 'a.EditSocialBtn', function (e) {
            
            e.preventDefault();
            var obj =$(this);
            var elem = $('#ModalNewCode');
            var socialId = obj.data('postid');
            var contents = $('#postsContent-'+socialId).children('p').text();
         
            $('.edit-social-form', elem).data('id', socialId);
            $('.editSocialContent', elem).val(contents);
            elem.modal('show');
            
        });
        
        //Update Social Articles
        $('.edit-social-form').on('submit', function (e) {
            
            e.preventDefault();
            var obj = $(this);
            var id = obj.data('id');
            var blogId = obj.data('blogid');
            
            var content = $('.editSocialContent', obj).val();
            var csrfToken = $('meta[name="csrf-token"]').attr("content");
         
            $.ajax({
                type: 'POST',
                url: baseHttpPath + '/social-moderation/update-social-moderation',
                dataType: 'json',
                data: {action : 'editPost', id: id, blogId: blogId, content : content,  _csrf: csrfToken},
                success: function (data) {
                    if (data.success == 1) {
                        $('#postsContent-'+id).children('p').html(content);
                        reLayout();
                        $().General_ShowNotification({message: 'Article updated successfully.'});
                    }
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    $().General_ShowErrorMessage({message: jqXHR.responseText});
                },
                beforeSend: function (jqXHR, settings) {
                    
                },
                complete: function (jqXHR, textStatus) {
                    $('#ModalNewCode').modal('hide');
                }
            });
            
        });
        
        // Pin Social Articles
        $('#moderationgrid').on('click', 'a.PinArticleBtn', function (e) {

            e.preventDefault();
            var obj = $(this);
            var id = $(this).data('postid');
            var blogId = $('#moderationgrid').data('blogid');
            var csrfToken = $('meta[name="csrf-token"]').attr("content");

            var msg = ($(obj).hasClass('active')) ? 'Un-Pinned' : 'Pinned';

            if (isNaN(id) || id <= 0) {
                $().General_ShowErrorMessage({message: "Invalid Article"});
                return;
            }

            $.ajax({
                type: 'POST',
                url: baseHttpPath + '/social-moderation/session-social-moderation',
                dataType: 'json',
                data: {id: id, blogId: blogId, _csrf: csrfToken},
                success: function (data) {
                    if (data.success == 1) {
                        if ($(obj).hasClass('active')) {
                            $(obj).removeClass('active');
                            $(obj).attr('title', 'Pin');
                        }
                        else {
                            $(obj).addClass('active');
                            $(obj).attr('title', 'UnPin');
                        }

                        $().General_ShowNotification({message: 'Successfully ' + msg + '.'});
                    }
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    $().General_ShowErrorMessage({message: jqXHR.responseText});
                },
                beforeSend: function (jqXHR, settings) {
                    $('i', obj).General_AddRemoveSpinnerIcon();
                },
                complete: function (jqXHR, textStatus) {
                    $('i', obj).General_AddRemoveSpinnerIcon();
                }
            });
        });

        // delete  Social Post Articles
        $('#moderationgrid').on('click', 'a.DeleteSocialBtn', function (e) {

            e.preventDefault();
            var obj = $(this);
            var id = obj.data('postid');
            var action = obj.data('action');
            var blogId = $('#moderationgrid').data('blogid');

            var confirmMsg = "Do you really want to delete this article?";
            var successMsg = "Article deleted successfully.";
            bootbox.confirm({
                title: "Confirm",
                message: confirmMsg,
                callback: function (result) {
                    if (result) {
                        _updateSocialPost(blogId, action, successMsg, id);
                    }
                }
            });
        });

        // Approve Social Post Articles
        $('#moderationgrid').on('click', 'a.ApproveSocialBtn', function (e) {

            e.preventDefault();
            var obj = $(this);
            var id = obj.data('postid');
            var action = obj.data('action');
            var blogId = $('#moderationgrid').data('blogid');
            var confirmMsg = "Do you really want to publish this article?";
            var successMsg = "Article published successfully.";
            
            bootbox.confirm({
                title: "Confirm",
                message: confirmMsg,
                callback: function (result) {
                    if (result) {
                        _updateSocialPost(blogId, action, successMsg, id);
                    }
                }
            });
        });

        // Approve and delete buttons
        $('#ModalReview, ul.allFeedControls, div.chSocialBlocks').on('click', '.ApproveSelectedBtn, .DeleteSelectedBtn, a.deleteUnselectedPosts', function (e) {
            e.preventDefault();
            
            var obj = $(this);
            var action = $(obj).data('action');
            var blogId = $('#moderationgrid').data('blogid');

            if (action === 'approvePosts') {
                confirmMsg = "Do you really want to publish all pinned article(s)?";
                successMsg = "All selected article(s) published successfully.";

            }
            else if (action === 'deletePosts') {
                confirmMsg = "Do you really want to delete all pinned article(s)?";
                successMsg = "All selected article(s) deleted successfully.";
            }
            else if (action === 'deleteRestPosts') {
                var confirmMsg = "Do you really want to delete all un-pinned article(s)?";
                var successMsg = "All un-pinned article(s) deleted successfully.";
            }

            bootbox.confirm({
                title: "Confirm",
                message: confirmMsg,
                callback: function (result) {
                    if (result) {
                        _updateSocialPost(blogId, action, successMsg, '');
                    }
                }
            });
        });

        function _updateSocialPost(blogId, action, successMsg, id)
        {
            var csrfToken = $('meta[name="csrf-token"]').attr("content");
            $.ajax({
                url: baseHttpPath + '/social-moderation/update-social-moderation',
                type: 'post',
                dataType: 'json',
                data: {id: id, action: action, blogId: blogId, _csrf: csrfToken},
                success: function (data) {
                    if (data.success == 1) {

                        var len = data.socialPost.length;
                        for (var i = 0; i < len; i++) {
                            $('.SocialArticle' + data.socialPost[i]).remove();
                        }
                        /*$.each(data.count, function (index, obj) {
                            var number = (isNaN(obj) || obj == null) ? 0 : obj
                            $('.total-' + index).children('span').text(number);
                        });*/
                        
                        if (action === 'deleteRestPosts') {
                            /*var blogid = parseInt($('ul.moderationgrid').data('blogid'));
                            var source = $('#SocialSource option:selected').val();
                            var searchKeyword = $('#searchSocialFeed').val();
                            var page = parseInt($('ul.moderationgrid').data('page'));
                            page = page + 1;
                            loadMoreSocialPosts({page: page, blogId: blogid, keywords: searchKeyword, socialSource: source});*/
                            window.location.reload();
                        }
                        else {
                            var len = $("#moderationgrid li").length;
                            if(len <= 0 ) {
                                $('.NoDataModeration').removeClass('hide');
                            }
                            if($('#ModalReview').hasClass('in')) {
                                $('#ModalReview').modal('hide');
                            }
                        }
                        
                        reLayout();

                        $().General_ShowNotification({message: successMsg});
                    }
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    $().General_ShowErrorMessage({message: jqXHR.responseText});
                },
                beforeSend: function (jqXHR, settings) {
                },
                complete: function (jqXHR, textStatus) {
                }
            });
        }

        function _resetSelectBox(value)
        {
            var obj = $('#social-select-filter');
            obj.selectbox('detach');
            obj.val(value);
            obj.selectbox('attach');
        }
        
        $("#searchSocialFeedBtn").on("click", function (e) {
            e.preventDefault();
            var searchKeyword = $('#searchSocialFeed').val();
            if ($.trim(searchKeyword) === '') {
                $().General_ShowErrorMessage({message: "Enter Hashtags and handles"});
                return;
            }
            var blogid = parseInt($('ul.moderationgrid').data('blogid'));
            var socialSource = $('#SocialSource option:selected').val();
            var page = 0;
            loadMoreSocialPosts({page: page, blogId: blogid, keywords: searchKeyword, socialSource: socialSource, replaceExisting: true});
        });
        
    };
    return {
        init: function () {
            attachEvents();
        }
    };
}(jQuery));

var CropImageController = (function($) {
    return {
        init: function(){
            CropImageController.CropImage.init();
        }
    }
}(jQuery));

CropImageController.CropImage = (function ($) {

    var attachEvents = function () {
        
            $('.thumbnail-crop-image').cropper({
                aspectRatio: $('#aspect-ratios').data('thumbnail-w') / $('#aspect-ratios').data('thumbnail-h'),
                minContainerWidth: 600,
                minContainerHeight: 400,
                minCanvasWidth: 600,
                minCanvasHeight: 400,
                minCropBoxWidth: 200,
                minCropBoxHeight: 200,
                crop: function(e) {
                  // Output the result data for cropping image.
                  $('.thumbnailX').val(e.x);
                  $('.thumbnailY').val(e.y);
                  $('.thumbnailWidth').val(e.width);
                  $('.thumbnailHeight').val(e.height);
                  $('.thumbnailRotate').val(e.rotate);
                  $('.thumbnailScaleX').val(e.scaleX);
                  $('.thumbnailScaleY').val(e.scaleY);
                }
              });

            $('.listing-crop-image').cropper({
                aspectRatio: $('#aspect-ratios').data('listing-w') / $('#aspect-ratios').data('listing-h'),
                minContainerWidth: 600,
                minContainerHeight: 400,
                minCanvasWidth: 600,
                minCanvasHeight: 400,               
                minCropBoxWidth: 200,
                minCropBoxHeight: 200,                
                crop: function(e) {
                  // Output the result data for cropping image.
                  $('.listingX').val(e.x);
                  $('.listingY').val(e.y);
                  $('.listingWidth').val(e.width);
                  $('.listingHeight').val(e.height);
                  $('.listingRotate').val(e.rotate);
                  $('.listingScaleX').val(e.scaleX);
                  $('.listingScaleY').val(e.scaleY);
                }
              });
              
            $('.large-crop-image').cropper({
                aspectRatio: $('#aspect-ratios').data('large-w') / $('#aspect-ratios').data('large-h'),
                minContainerWidth: 600,
                minContainerHeight: 400,   
                minCanvasWidth: 600,
                minCanvasHeight: 400,
                minCropBoxWidth: 200,
                minCropBoxHeight: 200,
                crop: function(e) {
                  // Output the result data for cropping image.
                  $('.largeX').val(e.x);
                  $('.largeY').val(e.y);
                  $('.largeWidth').val(e.width);
                  $('.largeHeight').val(e.height);
                  $('.largeRotate').val(e.rotate);
                  $('.largeScaleX').val(e.scaleX);
                  $('.largeScaleY').val(e.scaleY);                  
                }
              });                     

        var cropImagesrc;
        $('.post-thumbnail-controls').on('click', '.CropPostImage', function(e){
            e.preventDefault();
            
            var postId = parseInt($(this).data('postid'));
            var mediaIds = $(this).data('allmediaids');
            if(mediaIds !== '') {
                var mediaArr = mediaIds.split(',');
                if(mediaArr.length >= 3) {
                    $('#ModalCropImage input.assetMediaId').val(mediaArr[0]);
                    $('#ModalCropImage input.thumbMediaId').val(mediaArr[1]);
                    $('#ModalCropImage input.listingMediaId').val(mediaArr[2]);
                }
            }
            var origMediaId = parseInt($(this).data('orig-mediaid'));
            $('#ModalCropImage input.postId').val(postId);
            $('#ModalCropImage input.origMediaId').val(origMediaId);
            
            if(isNaN(postId) || postId <= 0 || isNaN(origMediaId) || origMediaId <= 0){
                return;
            }    
            cropImagesrc = $(this).data('orig-image-path');
            
            //set image src //it is later hidden by cropper
            $('.thumbnail-crop-image').attr('src', cropImagesrc);
            $('.listing-crop-image').attr('src', cropImagesrc);
            $('.large-crop-image').attr('src', cropImagesrc);
            
            //set cropper's image src
            $('.thumbnail-crop-image').cropper('replace', cropImagesrc);
            $('.listing-crop-image').cropper('replace', cropImagesrc);
            $('.large-crop-image').cropper('replace', cropImagesrc);            
            
            $('#ModalCropImage').modal('toggle');
        });

//        $("#ModalCropImage").on('shown', function () {
//            //set image src //it is later hidden by cropper
//            $('.thumbnail-crop-image').attr('src', cropImagesrc);
//            $('.listing-crop-image').attr('src', cropImagesrc);
//            $('.large-crop-image').attr('src', cropImagesrc);
//            
//            //set cropper's image src
//            $('.thumbnail-crop-image').cropper('replace', cropImagesrc);
//            $('.listing-crop-image').cropper('replace', cropImagesrc);
//            $('.large-crop-image').cropper('replace', cropImagesrc);
//        });
        
        //rotate left
        $('#ModalCropImage').on('click', 'button.rotateLeftBtnThumbnail', function(e){
            e.preventDefault();
            
            $('.thumbnail-crop-image').cropper('rotate', -5);
        });
        //rotate right
        $('#ModalCropImage').on('click', 'button.rotateRightBtnThumbnail', function(e){
            e.preventDefault();
            
            $('.thumbnail-crop-image').cropper('rotate', 5);
        });        
        
        //submit thumbnail
        $('#ModalCropImage').on('click', 'button.submitThumbnail', function(e){
            e.preventDefault();
            var data = new Object();
            data.x = $('.thumbnailX').val();
            data.y = $('.thumbnailY').val();
            data.width = $('.thumbnailWidth').val();
            data.height = $('.thumbnailHeight').val();
            data.rotate = $('.thumbnailRotate').val();
            data.scalex = $('.thumbnailScaleX').val();
            data.scaley = $('.thumbnailScaleY').val();
            data.type = 'thumbnail';

            processServerCropping(data, $(this));
        });
        
        //submit listing image
        $('#ModalCropImage').on('click', 'button.submitListing', function(e){
            e.preventDefault();
            var data = new Object();
            data.x = $('.listingX').val();
            data.y = $('.listingY').val();
            data.width = $('.listingWidth').val();
            data.height = $('.listingHeight').val();
            data.rotate = $('.listingRotate').val();
            data.scalex = $('.listingScaleX').val();
            data.scaley = $('.listingScaleY').val();
            data.type = 'listing';

            processServerCropping(data, $(this));
        }); 
        
        //submit large image
        $('#ModalCropImage').on('click', 'button.submitLarge', function(e){
            e.preventDefault();
            var data = new Object();
            data.x = $('.largeX').val();
            data.y = $('.largeY').val();
            data.width = $('.largeWidth').val();
            data.height = $('.largeHeight').val();
            data.rotate = $('.largeRotate').val();
            data.scalex = $('.largeScaleX').val();
            data.scaley = $('.largeScaleY').val();
            data.type = 'large';

            processServerCropping(data, $(this));
        });         
        
        var processServerCropping = function(jsonPostData, btnObj){
            jsonPostData.postid = $('#ModalCropImage input.postId').val();
            jsonPostData.origmediaid = $('#ModalCropImage input.origMediaId').val();
            jsonPostData.thumbmediaid = $('#ModalCropImage input.thumbMediaId').val();
            jsonPostData.assetmediaid = $('#ModalCropImage input.assetMediaId').val();
            jsonPostData.listingmediaid = $('#ModalCropImage input.listingMediaId').val();
            jsonPostData._csrf = yii.getCsrfToken();
            
            $.ajax({
                url: baseHttpPath + '/post/crop-image',
                type: 'post',
                data: jsonPostData,
                dataType: 'json',
                success: function(data){
                    if(data.success == 1) {
//                            var thumbnailId = $('#ModalCropImage input.thumbMediaId').val();
                            var assetMediaId = $('#ModalCropImage input.assetMediaId').val();
//                            var listingMediaId = $('#ModalCropImage input.listingMediaId').val();
                            
                            //set thumbnail image attributes
                            var thumbnailObj = $('#PostImageThumbnail-' + assetMediaId);
                            $(thumbnailObj).data('mediaid', data.postAssets.media_id);
                            $(thumbnailObj).attr('id', 'PostImageThumbnail-' + data.postAssets.media_id);
                            
                            //set edit. delete, crop icon attributes
                            var delBtnObj = $('button.DeletePostThumbnail[data-mediaid='+assetMediaId+']');
                            $(delBtnObj).data('mediaid', data.postAssets.media_id);
                            
                            var captionBtnObj = $('button.EditPostThumbnail[data-mediaid='+assetMediaId+']');
                            $(captionBtnObj).data('allmediaids', data.allMediaIds);
                            $(captionBtnObj).data('mediaid', data.postAssets.media_id);
                            $(captionBtnObj).attr('id', 'postThumbnailEditCaptionBtn-'+data.postAssets.media_id);
                            
                            var cropBtnObj = $('button.CropPostImage[data-mediaid='+assetMediaId+']');
                            $(cropBtnObj).data('allmediaids', data.allMediaIds);
                            $(cropBtnObj).data('mediaid', data.postAssets.media_id);
                            
                            var timestamp = $.now();
                            if(jsonPostData.type === 'thumbnail') {
                                $(thumbnailObj).attr('src', data.imageData.cdn_path + "?tmp=" + timestamp);
                            }
                            else if(jsonPostData.type === 'large') {
                                //if selected image is cropped then change large post image
                                if($(thumbnailObj).closest('div.thumbnail-elements-logo').hasClass('selected')) {
                                    $('.PostThumbImage').attr('src', data.imageData.cdn_path + "?tmp=" + timestamp);
                                }
                            }
                            else {  //listing image

                            }

                        var mediaArr = data.allMediaIds.split(',');
                        if(mediaArr.length >= 3) {
                            $('#ModalCropImage input.assetMediaId').val(mediaArr[0]);
                            $('#ModalCropImage input.thumbMediaId').val(mediaArr[1]);
                            $('#ModalCropImage input.listingMediaId').val(mediaArr[2]);
                        }
                            
                    }
                    
                    $().General_ShowNotification({message: 'Successfully cropped' });
                    //$('#ModalCropImage').modal('hide');
                },
                error: function(jqXHR, textStatus, errorThrown){
                    $().General_ShowErrorMessage({message: jqXHR.responseText});
                },
                beforeSend: function(jqXHR, settings) { 
                    $(btnObj).html("Please wait...");
                },
                complete: function(jqXHR, textStatus) {
                    $(btnObj).html("Select");
                }                
            });
        };
        
    };

    return {
        //main function to initiate the module
        init: function () {
            attachEvents();
        }
    };

}(jQuery));
var EventController = (function ($) {

    return {
        pagination: function () {
            EventController.Pagination.init();
        },
        calendar: function () {
            EventController.Calendar.init();
        },
        list: function () {
            EventController.List.init();
        },
        address: function () {
            EventController.Address.init();
        },
        createEvent: function () {
            EventController.CreateEvent.init();
        },
        post: function () {
            EventController.EventPost.init();
        },
        map: function () {
            EventController.Map.init();
        }
    };

}(jQuery));

EventController.Pagination = (function ($) {

    var attachEvents = function () {

        //Pagination For events
        $('.pagination-date').on('click', function () {
            var elem = $(this);
            var type = elem.data('type');
            var date = elem.data('date');
            var viewType = elem.data('view');
            var csrfToken = $('meta[name="csrf-token"]').attr("content");
            
            var loaderClass = ($(elem).parent().hasClass('top')) ? '.top-loader' : '.bottom-loader';
            
            if (type == '' || date == '') {
                //error raised
                $().General_ShowErrorMessage({message: "Internal Server Error On Pagination !"});
                return;
            }

            $.ajax({
                type: 'POST',
                url: baseHttpPath + '/event/more-events',
                dataType: 'json',
                data: {date: date, type: type, viewType: viewType, _csrf: csrfToken},
                success: function (data, textStatus, jqXHR) {
                    if (data.success == 1) {
                        $('.currentDate').text(data.currentMonth);
                        $('.pagination-date, .event-container').data('date', data.currentDate);
                        $('.nextDate').text(data.nextMonth);
                        $('.preDate').text(data.preMonth);
                        // Address filter
                        if (data.address.length > 0) {
                            var addrSource = $("#event-address-template").html();
                            var addressTemplate = Handlebars.compile(addrSource);
                            var item = $(addressTemplate(data.address));
                            $("#eventAddress").html(item);
                        }
                        else {
                            $("#eventAddress").html('');
                        }
                        if (viewType == 'calendar') {
                            $('#eventCalendar').html(data.template);
                            $('#eventCalendar').append('<div class="calendar-details--modal"></div>');
                        }
                        else if (viewType == 'list') {
                            if (data.totalRecords <= 0) {
                                $('.events__pagination').hide();
                                $('#eventList').html("No events found on this month !");
                                $('#eventList').addClass('text-center');
                            } else {
                                $('.events__pagination').show();
                                $('#eventList').html(data.template);
                            }

                        }
                        else if (viewType == 'map') {
                            $('#eventMap').html(data.template);
                            EventController.Map.init();
                        }

                    }

                },
                error: function (jqXHR, textStatus, errorThrown) {
                    $().General_ShowErrorMessage({message: jqXHR.responseText});
                },
                beforeSend: function (jqXHR, settings) {
                    $(loaderClass).removeClass('hide');
                },
                complete: function (jqXHR, textStatus) {
                    $(loaderClass).addClass('hide');
                }
            });
        });

    };
    return {
        init: function () {
            attachEvents();
        }
    };

}(jQuery));


/** for event calendar page **/
EventController.Calendar = (function ($) {

    var attachEvents = function () {

        $("tr").each(function () { //get all rows in table
            $("td", this).each(function () { //get all tds in current row
                var total = $(this).data('count');
                var anchorTag = $(this).find('a').length;
                var remain = parseInt(total) - parseInt(anchorTag);
                var margin = parseInt(remain) * parseInt(24);
                if (!isNaN(margin)) {
                    $(this).find("a:nth-child(1)").css('margin-top', margin + "px");
                }

            });
        });

        //Pagination For events
        $(document).on('click', '.calendar__event', function (e) {
            e.preventDefault();
            var elem = $(this);
            var postId = elem.data('id');
            var csrfToken = $('meta[name="csrf-token"]').attr("content");

            if (postId == '' || postId <= 0) {
                //error raised
                $().General_ShowErrorMessage({message: "Internal Server Error On Events !"});
                return;
            }
            $.ajax({
                type: 'POST',
                url: baseHttpPath + '/event/event-model',
                dataType: 'json',
                data: {postId: postId, _csrf: csrfToken},
                success: function (data, textStatus, jqXHR) {
                    if (data.success == 1) {
                        $(".calendar-details--modal").html('');
                        $(".calendar-details--modal").append(data.template);
                        $(".calendar-details").simplemodal({
                            appendTo: ".calendar-details--modal",
                            overlayClose: !0,
                            containerId: "calendar-details--container",
                            overlayId: "calendar-details--overlay",
                            closeClass: "calendar-details__close",
                            fixed: !1,
                            opacity: 60,
                            zIndex: 11e3
                        });
                    }

                },
                error: function (jqXHR, textStatus, errorThrown) {
                    $().General_ShowErrorMessage({message: jqXHR.responseText});
                },
                beforeSend: function (jqXHR, settings) {
                    // $('.loader').removeClass('hide');
                },
                complete: function (jqXHR, textStatus) {
                    // $('.loader').addClass('hide');
                }
            });
        });

    };
    return {
        init: function () {
            attachEvents();
        }
    };

}(jQuery));

/** For event listing Page **/

EventController.List = (function ($) {
    
    var bindFollowEvent = function(){
            $('a.followEvent').followPost({
                'onSuccess': function(data, obj){
                    ($(obj).data('status') === 'follow') ? $(obj).html("Add to my events") : $(obj).html("Remove from my events");
                },
               'onError': function(obj, errorMessage) {
                    $().General_ShowErrorMessage({message: errorMessage});
                    ($(obj).data('status') === 'follow') ? $(obj).html("Add to my events") : $(obj).html("Remove from my events");
                },
                'beforeSend': function(obj) {
                    $(obj).html("Please wait...");
                },
                'onComplete': function(obj){
                    ($(obj).data('status') === 'follow') ? $(obj).html("Add to my events") : $(obj).html("Remove from my events");
                }
            });
    };

    var attachEvents = function () {
            
         bindFollowEvent();
         
        //Blog Filter Process
        $('.filter-blog').on('change', function () {
           
            var elem = $('.event-list__month--current');
            var m = elem.data('month');
            var y = elem.data('year');
            var blogId = ($(this).val() > 0) ? $(this).val() : 0;
            var followedonly = $('.event-list__items').data('followed-only');
            var csrfToken = $('meta[name="csrf-token"]').attr("content");
            
            if (m === undefined || y === undefined) {
                $().General_ShowErrorMessage({message: "Internal Server Error On Pagination !"});
                return;
            }

            $.ajax({
                type: 'POST',
                url: baseHttpPath + '/event/list',
                dataType: 'json',
                data: {month: m, year: y, blogId: blogId, myevents: followedonly, _csrf: csrfToken},
                success: function (data, textStatus, jqXHR) {
                    if (data.success == 1) {
                        if (data.eventsCount > 0) {
                            $('.event-list__items').html(data.html);
                        }
                        else {
                            $('.event-list__items').html('<div class="event-item"><p class="text-center">No Event(s) found !</p></div>');
                        }
                      bindFollowEvent();
                    }

                },
                error: function (jqXHR, textStatus, errorThrown) {
                    $().General_ShowErrorMessage({message: jqXHR.responseText});
                },
                beforeSend: function (jqXHR, settings) {
                    $('.blogLoader').removeClass('hide');
                },
                complete: function (jqXHR, textStatus) {
                    $('.blogLoader').addClass('hide');
                }
            });
        });
         
        
        //Pagination For events
        $('a.event-list__month, a.event-list__arrow').on('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            
            if($(this).hasClass('event-list__month--current')) {
                return;
            }
            
            var elem = $(this);
            var m = elem.data('month');
            var y = elem.data('year');
            var followedonly = $('.event-list__items').data('followed-only');
            var csrfToken = $('meta[name="csrf-token"]').attr("content");
            
            var selectedBlog = $('.filter-blog option:selected').val();
            var blogId = 0;
            if(selectedBlog > 0) {
                blogId = selectedBlog;
            }
            
            
            if (m === undefined || y === undefined) {
                //error raised
                $().General_ShowErrorMessage({message: "Internal Server Error On Pagination !"});
                return;
            }
            
            var itemno = $('.event-list__month--current').data('month-itemno');
            if($(this).hasClass('event-list__arrow--previous')) {
                if(itemno == 0) {
                    window.location = baseHttpPath + '/event/list?act=prev&month=' + m + '&year=' + y + '&myevents=' + followedonly + '&blogid=' + blogId;
                    return;
                }
            }
            if($(this).hasClass('event-list__arrow--next')) {
                if(itemno == 9) {
                    window.location = baseHttpPath + '/event/list?act=next&month=' + m + '&year=' + y + '&myevents=' + followedonly + '&blogid=' + blogId;
                    return;
                }
            }            

            $.ajax({
                type: 'POST',
                url: baseHttpPath + '/event/list',
                dataType: 'json',
                data: {month: m, year: y, blogId: blogId, myevents: followedonly, _csrf: csrfToken},
                success: function (data, textStatus, jqXHR) {
                    if (data.success == 1) {
                        if(data.eventsCount > 0) {
                            $('.event-list__items').html(data.html);
                        }
                        else {
                            $('.event-list__items').html('<div class="event-item"><p class="text-center">No Event(s) found !</p></div>');
                        }
                        $('div.event-list__months a.event-list__month--current').removeClass('event-list__month--current');
                        $('a.event-'+m+'-'+y).addClass('event-list__month--current');
                        $('a.event-list__arrow--previous').data('month', data.prevMonth);
                        $('a.event-list__arrow--previous').data('year', data.prevYear);
                        $('a.event-list__arrow--next').data('month', data.nextMonth);
                        $('a.event-list__arrow--next').data('year', data.nextYear);
                        
                        bindFollowEvent();
                    }

                },
                error: function (jqXHR, textStatus, errorThrown) {
                    $().General_ShowErrorMessage({message: jqXHR.responseText});
                },
                beforeSend: function (jqXHR, settings) {
                    $('.loader').removeClass('hide');
                },
                complete: function (jqXHR, textStatus) {
                    $('.loader').addClass('hide');
                }
            });
        });

    };
    return {
        init: function () {
            attachEvents();
        }
    };

}(jQuery));


/** For event Address filter Page **/

EventController.Address = (function ($) {

    var attachEvents = function () {
        // address filter event call here
        $(document).on('click', '.event-addr-filter', function () {
            var elem = $(this);
            var address = elem.data('address');
            var container = $('.event-container');
            var viewType = $(container).data('view');
            var date = $(container).data('date');
            var csrfToken = $('meta[name="csrf-token"]').attr("content");

            $.ajax({
                type: 'POST',
                url: baseHttpPath + '/event/more-events',
                dataType: 'json',
                data: {address: address, type: 'address', viewType: viewType, date: date, _csrf: csrfToken},
                success: function (data, textStatus, jqXHR) {
                    if (data.success == 1) {
                        if (viewType == 'calendar') {
                            $('#eventCalendar').html(data.template);
                            $('#eventCalendar').append('<div class="calendar-details--modal"></div>');
                        }
                        else if (viewType == 'list') {
                            $('#eventList').html(data.template);
                        }
                        else if (viewType == 'map') {
                            $('#eventMap').html(data.template);
                            EventController.map();
                        }
                    }
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    $().General_ShowErrorMessage({message: jqXHR.responseText});
                },
                beforeSend: function (jqXHR, settings) {
                    // $('.loader').removeClass('hide');
                },
                complete: function (jqXHR, textStatus) {
                    // $('.loader').addClass('hide');
                }
            });
        });

    };
    return {
        init: function () {
            attachEvents();
        }
    };

}(jQuery));


/** For event creation Page **/
EventController.CreateEvent = (function ($) {

    var attachEvents = function () {
        
        Dropzone.autoDiscover = false;
        var myDropzone = new Dropzone('#eventDropzone', {
            url: baseHttpPath + "/event/process-upload-image",
            paramName: "post_image_file",
            addRemoveLinks: false,
            maxFiles: 3,
            acceptedFiles: ".jpeg,.jpg,.png",
            init: function () {
                this.on("success", function (file, response) {
                    var jsonObjects = JSON.parse(response);
                    var commaSeparatedIds = jsonObjects.images.asset.id + ',' + jsonObjects.images.thumb.id + ',' + jsonObjects.images.listing.id;
                    $('#eventImages').append('<input type="hidden" name="CreatePost[post_images_upload][]" value="'+commaSeparatedIds+'" />');
                    $().General_ShowNotification({message: 'Image added successfully'});
                });
            this.on( "addedfile", function() { 
                if(this.files.length > 1) {
                    var preIndex = parseInt(this.files.length) - 2;
                    if(this.files[preIndex].status === 'error') {
                        this.removeFile(this.files[preIndex]);
                    }
                }
            });
            }
        });

        myDropzone.on('sending', function (file, xhr, formData) {
            formData.append('_csrf', yii.getCsrfToken());
        });


        //Content -editor Js 

        $('#content-editor').freshereditor({
            toolbar_selector: "#toolbar",
            excludes: ['removeFormat', 'insertheading4']
        });

        $("#content-editor").freshereditor("edit", true);
        
 
        //current date functionality
        $('#createpost-start_date').datetimepicker({
            autoclose: true,
            format: 'dd-mm-yyyy HH:ii:ss P', //'mm-dd-yyyy HH:ii:ss P',
            pickerPosition: "bottom-left",
           // startDate: ApplicationController.dateFormat("-",null)
                   //}).on('changeDate', function(ev){          
           // $('#createpost-end_date').datetimepicker('setStartDate',ApplicationController.dateFormat("-",ev.date.valueOf()));
        });
        
        $('#createpost-end_date').datetimepicker({
            autoclose: true,
            format: 'dd-mm-yyyy HH:ii:ss P', //'mm-dd-yyyy HH:ii:ss P',
            pickerPosition: "bottom-left",
            //startDate: ApplicationController.dateFormat("-",null)
        //}).on('changeDate', function(ev){
            //$('#createpost-start_date').datetimepicker('setEndDate',ApplicationController.dateFormat("-",ev.date.valueOf()));
        });
        
        var marker;
        google.maps.event.addDomListener(window, 'load', initMap);
        
        function initMap() {
            var map = new google.maps.Map(document.getElementById('addressMap'), {
              zoom: 7,
              center: {lat: parseFloat(defaultLatitude), lng: parseFloat(defaultLongitude)}
            });
            
            var geocoder = new google.maps.Geocoder();
            $("#createpost-contact_name").on('change' , function () {
                geocodeAddress(geocoder, map);
            })
              
        }
        
        function geocodeAddress(geocoder, resultsMap) {
            var address = document.getElementById('createpost-address').value + ',' + document.getElementById('createpost-suburb').value + ',Australia';

            geocoder.geocode({'address': address}, function(results, status) {
                if (status === google.maps.GeocoderStatus.OK) {
                  resultsMap.setCenter(results[0].geometry.location);
                  
                    //clear the previous marker
                    if (marker) {
                        marker.setMap(null);
                    }
                  
                    marker = new google.maps.Marker({
                      map: resultsMap,
                      position: results[0].geometry.location
                    });
                    
                    resultsMap.setZoom(10);
                    // Set Lat and Long
                    var latitude = results[0].geometry.location.lat();
                    var longitude = results[0].geometry.location.lng();
                    document.getElementById('createpost-latitude').value = latitude;
                    document.getElementById('createpost-longitude').value = longitude;

                } else {
                  document.getElementById('createpost-address').value = '';
                  document.getElementById('createpost-suburb').value = '';
                  $().General_ShowErrorMessage({message: 'Geocode was not successful for the following reason: ' + status});
                  return;
                }
            });
        }   

        // Event Saving functionality Calling
        $('.SaveEventBtn').on('click', function (e) {
            e.preventDefault();
            var btnObj = $(this); 
            
            var postContent;
            $("#content-editor").freshereditor("save", function (id, contents) {

                postContent = contents;
                postContent = PostController.clearMSFormatting(postContent);

                if($.trim($('#createpost-title').val()) === ''){
                    $().General_ShowErrorMessage({message: "Please at least give event a title."});
                    return;
                }
                
                
                // For Post Type Events
                var error = [];
                if ($.trim($('#createpost-start_date').val()) === '') {
                    error.push('Start date can not empty');
                }
                
                if ($.trim($('#createpost-address').val()) === '') {
                    error.push('Address can not empty');
                }
                if ($.trim($('#createpost-suburb').val()) === '') {
                    error.push('Suburb can not empty');
                }
                if ($.trim($('#createpost-postcode').val()) === '') {
                    error.push('Post code can not empty');
                }
                
                if ($.trim($('#createpost-contact_name').val()) === '') {
                    error.push('Contact name can not empty');
                }
                if ($.trim($('#createpost-contact_email').val()) === '') {
                    error.push('Contact email can not empty');
                }
                          
                if (error.length > 0) {
                    var message = error.join("</br>");
                    $().General_ShowErrorMessage({message: message});
                    return;
                }
                
                //for featured event image
                if($.inArray("image", eventRequiredAttribs) >= 0) { //if absent returns -1
                    if($.trim($('#createpost-post_images_upload').val()) === ''){
                        $().General_ShowErrorMessage({message: "Please select a featured image."});
                        return;
                    }
                }

                var formData = $('#create-post-form').serializeArray();
                formData.push({name: "CreatePost[post_content]", value: postContent});
                
                $.ajax({
                    type: 'POST',
                    url: baseHttpPath + '/event/create',
                    dataType: 'json',
                    data: formData,
                    formData: $.param(formData),
                    success: function (data, textStatus, jqXHR) {
                        if(data.success == '1') {
                            $().General_ShowNotification({message: 'Event submitted successfully.' });
                            // window reload after 3 second
                            setTimeout(function(){
                                window.location.reload(true);
                            }, 3000);
                        }
                    },
                    error: function(jqXHR, textStatus, errorThrown){
                        $().General_ShowErrorMessage({message: jqXHR.responseText});
                    },
                    beforeSend: function(jqXHR, settings) { 
                        $(btnObj).val('Please Wait..');
                        $(btnObj).attr('disabled','disabled');
                    },
                    complete: function(jqXHR, textStatus) {
                        $(btnObj).val('submit event +');
                        $(btnObj).removeAttr('disabled');
                    }
                });
            });//Callback of freshereditor ends
        });      
    };
    return {
        init: function () {
            attachEvents();
        }
    };

}(jQuery));


EventController.EventPost = (function ($) {

    var attachEvents = function () {
        var elem = $('#event-map');
        var latitude = elem.data('latitude');
        var longitude = elem.data('longitude');
        var title = elem.data('title');
        var myCenter= new google.maps.LatLng(latitude,longitude);
        google.maps.event.addDomListener(window, 'load', initEventMap);  

        function initEventMap()
        {
            var mapProp = {
              center: myCenter,
              zoom:12,
              mapTypeId: google.maps.MapTypeId.ROADMAP
              };

            var map = new google.maps.Map(document.getElementById("event-map"),mapProp);

            var marker = new google.maps.Marker({
              position: myCenter,
              title: title,
            });

            marker.setMap(map);

            google.maps.event.addListener(marker,'click',function() {
              map.setZoom(9);
              map.setCenter(marker.getPosition());
              });
        }
    };
    return {
        init: function () {
            attachEvents();
        }
    };

}(jQuery));


//Map Event Call here
EventController.Map = (function ($) {

    var attachEvents = function () {
        var elem = $('#map');
        var events = elem.data('info');
        var isAjaxCall = elem.data('ajax');
        if (isAjaxCall) {
            initEventsMap();
        } else {
            google.maps.event.addDomListener(window, 'load', initEventsMap);
        }
        function initEventsMap() {

            var myCenter = new google.maps.LatLng(parseFloat(defaultLatitude), parseFloat(defaultLongitude));

            var map = new google.maps.Map(document.getElementById('map'), {
                zoom: 7,
                center: myCenter
            });
            if (events.length > 0) {
                for (var ind in events) {
                    if (events[ind].latitude == '' || events[ind].longitude == '') {
                        continue;
                    }

                    var marker = new google.maps.Marker({
                        position: {
                            lat: parseFloat(events[ind].latitude),
                            lng: parseFloat(events[ind].longitude)
                        },
                        map: map
                    });

                    var message = "<div><img width='300' height='250' src='" + events[ind].picture + "'/><h3>" + events[ind].title + "</h3><em>Time:" + events[ind].startTime + "-" + events[ind].endTime + "</em></div>"
                    eventMessage(marker, message);
                }
            }
        }
        function eventMessage(marker, message) {
            var infowindow = new google.maps.InfoWindow({
                content: message
            });

            marker.addListener('click', function () {
                infowindow.open(marker.get('map'), marker);
            });
        }
    };
    return {
        init: function () {
            attachEvents();
        }
    };

}(jQuery));

var HomeController = (function($) {
	
return {
    home: function() {
        //attachEvents();
        HomeController.Home.init();
    },
    blog: function () { 
        HomeController.Blog.init();
    },
    code: function () { 
        HomeController.Code.init();
    },
    post: function () {
        HomeController.Post.init();
    },
    subscription: function () {
        HomeController.Subscription.init();
    },
};
	
}(jQuery));

HomeController.Home = (function($) {
    
    $('.playVideo').youtubePlay({showSelector: 'div.play-container',containerClass:'card__image', iframeClass : ''});
	$('.LoadMorePostsContainer').youtubePlay({showSelector: 'div.play-container',containerClass:'card__image', iframeClass : ''});
    
	$('.playVideo').vimeoPlay({showSelector: 'div.play-container',containerClass:'card__image', iframeClass : ''});  
	$('.LoadMorePostsContainer').vimeoPlay({showSelector: 'div.play-container',containerClass:'card__image', iframeClass : ''});	
    
    
    var pinUnpinArticle = function(obj){
        var postId = parseInt($(obj).data('id'));
        var isSocial = parseInt($(obj).data('social'));
        var position = parseInt($(obj).data('position'));

        var pinUnpinMsg = ($(obj).hasClass('selected')) ? 'unpinning' : 'pinning';
        if(isNaN(postId) || postId <= 0 || isNaN(position) || position <= 0){
            $().General_ShowErrorMessage({message: "Error " + pinUnpinMsg + " article."});
            return;
        }
        var csrfToken = $('meta[name="csrf-token"]').attr("content");
        $.ajax({
            type: 'POST',
            url: baseHttpPath + '/post/toggle-pin-post',
            dataType: 'json',
            data: {id: postId, position: position, social: isSocial, blogid: blogId, _csrf: csrfToken},//blogId is now global
            success: function(data, textStatus, jqXHR) {
                if($(obj).hasClass('selected')){
                    $(obj).removeClass('selected');
                    $(obj).attr('title', 'Pin');
                    $().General_ShowNotification({message: 'Successfully unpinned.' });
                }
                else {
                    $(obj).addClass('selected');
                    $(obj).attr('title', 'Un-Pin');
                    $().General_ShowNotification({message: 'Successfully pinned.' });
                }
            },
            error: function(jqXHR, textStatus, errorThrown){
                $().General_ShowErrorMessage({message: jqXHR.responseText});
            },
            beforeSend: function(jqXHR, settings) { 
                $('i', obj).General_AddRemoveSpinnerIcon();
            },
            complete: function(jqXHR, textStatus) {
                $('i', obj).General_AddRemoveSpinnerIcon();
            }
        });
    };
    
    var attachEvents = function(){
        
       $('body').on('click', '.social-share', function(e){
           e.preventDefault();
           
           var url = $(this).data('url');
           var type = $(this).data('type');
           if( url === undefined || url === '') {
               return;
           }
           window.open( url, "sharewin-"+type, "height=500,width=650,resizable=1" );
       }); 
        
       function initSwap() {
            initDroppable();
            initDraggable();
        }

        function initDraggable() {
            $('div.Swappable div.ln-article').draggable({
                helper: 'clone',
                revert: true,
                zIndex: 100,
                scroll: true,
                scrollSensitivity: 100,
                cursorAt: { left: 150, top: 50 },
                appendTo:'body',
//                containment: 'body',
                start: function( event, ui ) {
                    var postImage = $(ui.helper).data('postimage');
                    var postText = $(ui.helper).data('posttext');
                    if(postImage !== "") {
                        $('div.SwappingHelper img.post-image').attr('src', postImage);
                    }
                    else {
                        //postImgPlaceHolder - defined globally in _javascripts.php
                        $('div.SwappingHelper img.post-image').attr('src', postImgPlaceHolder);
                    }
                    $('div.SwappingHelper p.post-text').html(postText);
 
                    $(ui.helper).html($('div.SwappingHelper').html());              
                    /*ui.helper.animate({
                        width: 400
                    });*/
                }
            });
        }

        function initDroppable() {
            $('div.Swappable div.ln-article').droppable({
                hoverClass: "ui-state-hover",
                drop: function(event, ui) {
                    var sourceObj = $(ui.draggable);
                    var $this = $(this);
                    //get positions
                    var sourcePosition = parseInt($(sourceObj).data('position'));
                    var sourcePostId = parseInt($(sourceObj).data('postid'));
                    var sourceIsSocial = parseInt($(sourceObj).data('social'));
                    var sourceType = $(sourceObj).data('type');
                    
                    var destinationPosition = parseInt($($this).data('position'));
                    var destinationPostId = parseInt($($this).data('postid'));
                    var destinationIsSocial = parseInt($($this).data('social'));
                    var destinationType = $($this).data('type');
                    
                    $(this).after(ui.draggable.clone().removeAttr('style'));
                    $(ui.draggable).after($(this).clone());
                    $(ui.helper).remove(); //destroy clone
                    $(ui.draggable).remove();
                    $(this).remove();
                    
//                    //swap positions
//                    $(sourceObj).data('position', destinationPosition);
//                    $(this).data('position', sourcePosition);
//                    //swap types
//                    $(sourceObj).data('type', destinationType);
//                    $(this).data('type', sourceType);
                    
                    var csrfToken = $('meta[name="csrf-token"]').attr("content");
                    if(isNaN(blogId) || blogId <= 0){//blogId is global
                        return;
                    }
                    var postData = {
                        blogId: blogId,
                        sourcePosition: sourcePosition,
                        sourcePostId: sourcePostId,
                        sourceIsSocial: sourceIsSocial,
                        sourceType: sourceType,
                        
                        destinationPosition: destinationPosition,
                        destinationPostId: destinationPostId,
                        destinationIsSocial: destinationIsSocial,
                        destinationType: destinationType,
                        
                        _csrf: csrfToken
                    };
                    
                    $.ajax({
                        url: baseHttpPath + '/home/swap-posts',
                        type: 'post',
                        data: postData,
                        dataType: 'json',
                        success: function(data){

                            if(data.success) {
                                
                                var article1Html = ApplicationController.jsUTF8Decode(data.article1html);
                                var article2Html = ApplicationController.jsUTF8Decode(data.article2html);
                                
                                if( sourceIsSocial === 1 ) {
                                    $('.SocialPost' + data.article1).replaceWith(article1Html);
                                }
                                else {
                                    $('.ArticlePost' + data.article1).replaceWith(article1Html);
                                }
                                if( destinationIsSocial === 1 ) {
                                    $('.SocialPost' + data.article2).replaceWith(article2Html);
                                }
                                else {
                                    $('.ArticlePost' + data.article2).replaceWith(article2Html);
                                }
                            }
                            
                            $(".lazyload").lazyload({
                                threshold : 200
                            });
                            
                            initSwap();
                            //dotdot long text
                            $(".card p.card__text").each(function() {
                              var content_height, event_height, text_position;
                              content_height = $(this).parent(".card__content").height();
                              text_position = $(this).position().top;
                              event_height = $(this).siblings(".card__event") ? $(this).siblings(".card__event").outerHeight() : 0;
                              return $(this).height(content_height - event_height - text_position);
                            });                            
                            return $(".card p, .card h1").dotdotdot();

                        },
                        error: function(jqXHR, textStatus, errorThrown){
                            //$().General_ShowErrorMessage({message: jqXHR.responseText});
                        },
                        beforeSend: function(jqXHR, settings) { 
                        },
                        complete: function(jqXHR, textStatus) {
                        }
                    });

                }
            }); 
        }
        
        if(isUserLoggedIn == 1 && loggedInUserId > 0 && (isUserBlogOwner == 1 || isUserLeadAuthorOfBlog == 1 || isUserAdmin == 1)) {
            initSwap();
        }
        
          $('div.ln-article, div.LoadMorePostsContainer').on('click', '.PinArticleBtn', function(e){
            e.preventDefault();
            e.stopPropagation();
            var obj = $(this);
            pinUnpinArticle(obj);
        });

        $('div.ln-article, div.LoadMorePostsContainer').on('click', '.DeleteSocialBtn', function(e){
            e.preventDefault();
            e.stopPropagation();
            var obj = $(this);
            var socialId = parseInt($(this).data('id'));
            
            var csrfToken = $('meta[name="csrf-token"]').attr("content");
            bootbox.confirm({
                title: "Confirm",
                message: "Do you really want to delete this post?",
                callback: function(result) {
                    if (result) {
                        if(isNaN(socialId) || socialId <= 0){
                            $().General_ShowErrorMessage({message: "Error deleting article."});
                            return;
                        }
                        
                        $.ajax({
                            type: 'POST',
                            url: baseHttpPath + '/post/delete-social-post',
                            dataType: 'json',
                            data: {id: socialId, blogfeed: 1, blogid: blogId, _csrf: csrfToken},//blogId is global
                            success: function(data, textStatus, jqXHR) {
                                $('.SocialPost' + socialId).remove();
                                $().General_ShowNotification({message: 'Successfully deleted.' });
                            },
                            error: function(jqXHR, textStatus, errorThrown){
                                $().General_ShowErrorMessage({message: jqXHR.responseText});
                            },
                            beforeSend: function(jqXHR, settings) { 
                                $('i', obj).General_AddRemoveSpinnerIcon();
                            },
                            complete: function(jqXHR, textStatus) {
                                $('i', obj).General_AddRemoveSpinnerIcon();
                            }
                        });
                    }
                }
            });
        });

        //on click for hide for user post
        $('div.ln-article, div.LoadMorePostsContainer').on('click', '.HideBlogArticle', function(e){
            e.preventDefault();
            var obj = $(this);
            var postId = parseInt($(this).data('id'));
            var csrfToken = $('meta[name="csrf-token"]').attr("content");
            var postType = $(obj).closest('div.cnFeatures').data('type');
            bootbox.confirm({
                title: "Confirm",
                message: "Do you really want to hide this article?",
                callback: function(result) {
                    if (result) {
                        if(isNaN(postId) || postId <= 0){
                            $().General_ShowErrorMessage({message: "Error hiding article."});
                            return;
                        }
                        
                        $.ajax({
                            type: 'POST',
                            url: baseHttpPath + '/post/hide-post',
                            dataType: 'json',
                            data: {id: postId, blogfeed: 1, blogid: blogId, _csrf: csrfToken},//blogId is global
                            success: function(data, textStatus, jqXHR) {
                                $('.ArticlePost' + postId).remove();
                                $().General_ShowNotification({message: 'Successfully hidden' });
                            },
                            error: function(jqXHR, textStatus, errorThrown){
                                $().General_ShowErrorMessage({message: jqXHR.responseText});
                            },
                            beforeSend: function(jqXHR, settings) { 
                                $('i', obj).General_AddRemoveSpinnerIcon();
                            },
                            complete: function(jqXHR, textStatus) {
                                $('i', obj).General_AddRemoveSpinnerIcon();
                            }
                        });
                    }
                }
            });
        });
        
         //edit social post
        $('div.ln-article, div.LoadMorePostsContainer').on('click', '.EditSocialBtn', function(e){
            e.preventDefault();
            e.stopPropagation();
            
            var obj =$(this);
            var elem = $('#ModalEditSocial');
            var socialId = obj.data('id');
            var csrfToken = $('meta[name="csrf-token"]').attr("content");
            $.ajax({
                type: 'POST',
                url: baseHttpPath + '/post/get-social-post',
                dataType: 'json',
                data: {id: socialId, _csrf: csrfToken},//blogId is global
                success: function(data, textStatus, jqXHR) {
                    //set social post id at save button
                    $('.SaveEditSocialPost', elem).data('id', socialId);
                    //set text in textarea in popup
                    $('.editSocialContent', elem).val(data.post.text);
                    //show modal popup
                    elem.modal('show');
                },
                error: function(jqXHR, textStatus, errorThrown){
                    $().General_ShowErrorMessage({message: jqXHR.responseText});
                }
            });

        });
        
        $('button.SaveEditSocialPost').on('click', function(e){
            e.preventDefault();
            e.stopPropagation();
            var obj = $(this);
            var socialId = parseInt($(obj).data('id'));
            var content = $('.editSocialContent').val();
            var csrfToken = $('meta[name="csrf-token"]').attr("content");
            
            $.ajax({
                type: 'POST',
                url: baseHttpPath + '/post/update-social-post',
                dataType: 'json',
                data: {id: socialId, text: content, _csrf: csrfToken},//blogId is global
                success: function(data, textStatus, jqXHR) {
                    $('.SocialPostText'+socialId).html(content);
                    $('#ModalEditSocial').modal('hide');
                    
                    $().General_ShowNotification({message: 'Successfully updated.' });
                    //dotdot long text
                      $(".card p.card__text").each(function() {
                        var content_height, event_height, text_position;
                        content_height = $(this).parent(".card__content").height();
                        text_position = $(this).position().top;
                        event_height = $(this).siblings(".card__event") ? $(this).siblings(".card__event").outerHeight() : 0;
                        return $(this).height(content_height - event_height - text_position);
                      });                    
                     return $(".card p, .card h1").dotdotdot();
                },
                error: function(jqXHR, textStatus, errorThrown){
                    $().General_ShowErrorMessage({message: jqXHR.responseText});
                },
                beforeSend: function(jqXHR, settings) { 
                    $('i', obj).General_AddRemoveSpinnerIcon();
                },
                complete: function(jqXHR, textStatus) {
                    $('i', obj).General_AddRemoveSpinnerIcon();
                }
            });
        });
        
        //Load more posts
        var loadMoreBtnIsClicked = false;
        $('a.LoadMorePostsBtn').on('click', function(e){
            e.preventDefault();
            if(loadMoreBtnIsClicked) {
                return;
            }
            loadMoreBtnIsClicked = true;
            var btnObj = $(this);
            var offset = parseInt($(this).data('offset'));
            var firstOffset = parseInt($(this).data('first-offset'));
            var page = parseInt($(this).data('page'));
            var nonPinnedCount = parseInt($(this).data('non-pinned-count'));
                       
            var nblogid = parseInt($(this).data('blogid'));
            if(isNaN(nblogid) || nblogid <= 0){
                nblogid = blogId;//blogId is global
            }
            
            if(isNaN(nblogid) || nblogid <= 0){
                return;
            }
            if(isNaN(offset)){
                return;
            }
            
            if(offset <= 0) {
                offset = offset + firstOffset; //First time only
            }
            else {
                offset = offset + 9;
            }
            page = page + 1;
            //set new values
            $(this).data('offset', offset);
            $(this).data('page', page);
            var csrfToken = $('meta[name="csrf-token"]').attr("content");
            
            $.ajax({
                type: 'POST',
                url: baseHttpPath + '/home/more-posts',
                dataType: 'json',
                data: {blogid: nblogid, page: page, nonpinnedcount: nonPinnedCount, offset: offset, _csrf: csrfToken},
                success: function(data, textStatus, jqXHR) {
                    $(btnObj).data('non-pinned-count', data.nonPinnedCount);
                    if(data.totalArticles > 0){
                        var postsHtml = ApplicationController.jsUTF8Decode(data.articlesHtml);
                        $('div.LoadMorePostsContainer').append(postsHtml);
                        $(".lazyload").lazyload({
                            threshold : 200
                        });
                        //Swapping is allowed in certain cases only
                        if(isUserLoggedIn == 1 && loggedInUserId > 0 && (isUserBlogOwner == 1 || isUserLeadAuthorOfBlog == 1 || isUserAdmin == 1)) {
                            initSwap();
                        }
                        
                        if(data.totalArticles < 9) {
                            $(btnObj).addClass('hide');
                        }
                        //dotdot long text
                          $(".card p.card__text").each(function() {
                            var content_height, event_height, text_position;
                            content_height = $(this).parent(".card__content").height();
                            text_position = $(this).position().top;
                            event_height = $(this).siblings(".card__event") ? $(this).siblings(".card__event").outerHeight() : 0;
                            return $(this).height(content_height - event_height - text_position);
                          });
                        return $(".card p, .card h1").dotdotdot();
                    }
                    else {
                        $(btnObj).addClass('hide');
                    }
                },
                error: function(jqXHR, textStatus, errorThrown){
                    //jqXHR.responseText
                },
                beforeSend: function(jqXHR, settings) { 
                    $(btnObj).find('i.fa').addClass('fa-spin');
                },
                complete: function(jqXHR, textStatus) {
                    loadMoreBtnIsClicked = false;
                    $(btnObj).find('i.fa').removeClass('fa-spin');
                }
            });            
            
        });
        
        
    };
    
    return {
        init: function(){
            attachEvents();
        }
    };
}(jQuery));


HomeController.Blog = (function ($) {

    var attachEvents = function () {
        
        // Follow Blog News
        $('.topFollowBlogBtn, .accrodianFollowBlogBtn, .followBlogBtn').followBlog({
            'onSuccess': function(data, obj){
            },
           'onError': function(obj, errorMessage) {
                $().General_ShowErrorMessage({message: errorMessage});
            },
            'beforeSend': function(obj) {
               //$('i', obj).General_AddRemoveSpinnerIcon();
               $(obj).html("Please wait...");
            },
            'onComplete': function(obj){
                $('i', obj).General_AddRemoveSpinnerIcon();
                ($(obj).data('status') === 'follow') ? $(obj).html("Follow " + $(obj).data('name') + " +") : $(obj).html("Following " + $(obj).data('name') + " -");
                //second follow btn
                if($(obj).hasClass('topFollowBlogBtn')) {
                    var secObj = $('.accrodianFollowBlogBtn');
                    $(secObj).data('status', $(obj).data('status'));
                    ($(secObj).data('status') === 'follow') ? $(secObj).html("Follow " + $(secObj).data('name') + " +") : $(secObj).html("Following " + $(secObj).data('name') + " -");
                }
                else if($(obj).hasClass('accrodianFollowBlogBtn')) {
                     var secObj = $('.topFollowBlogBtn');
                    $(secObj).data('status', $(obj).data('status'));
                    ($(secObj).data('status') === 'follow') ? $(secObj).html("Follow " + $(secObj).data('name') + " +") : $(secObj).html("Following " + $(secObj).data('name') + " -");
                }
            }
        });
        
        //Follow button below profile user image on left side
        $('.FollowProfileUser').followWriter({
            'onSuccess': function(data, obj){
            },
           'onError': function(obj, errorMessage) {
                $().General_ShowErrorMessage({message: errorMessage});
            },
            'beforeSend': function(obj) {
               $(obj).html('Please wait...');
            },
            'onComplete': function(obj){
                if($(obj).data('status') === 'follow'){
                    $(obj).html('Follow ' + $(obj).data('name') + ' +');
                }
                else{
                    $(obj).html('Following ' + $(obj).data('name') + ' -');
                }
            }
        });
    }; 
    return {
        init: function () {
            attachEvents();
        }
    };

}(jQuery));


HomeController.Code = (function ($) {

    var attachEvents = function () {
        
        // Follow code
        $('.followCodeBtn').followCode({
            'onSuccess': function(data, obj){
            },
           'onError': function(obj, errorMessage) {
                $().General_ShowErrorMessage({message: errorMessage});
            },
            'beforeSend': function(obj) {
                $(obj).html("Please wait...");
            },
            'onComplete': function(obj){
                ($(obj).data('status') === 'follow') ? $(obj).html("Follow " + $(obj).data('codename') + " +") : $(obj).html("Following " + $(obj).data('codename') + " -");
            }
        });
        

    }; 
    return {
        init: function () {
            attachEvents();
        }
    };

}(jQuery));


/*Post Listing Page*/
HomeController.Post = (function($) {

	var attachEvents = function() {
        
        $('.followPostBtn').followPost({
            'onSuccess': function(data, obj){
            },
           'onError': function(obj, errorMessage) {
                $().General_ShowErrorMessage({message: errorMessage});
            },
            'beforeSend': function(obj) {
               $('i', obj).General_AddRemoveSpinnerIcon();
            },
            'onComplete': function(obj){
                $('i', obj).General_AddRemoveSpinnerIcon();
                if($(obj).data('status') === 'follow') {
                    $(obj).removeClass("selected");
                    $(obj).children('span').html("Add to my events");
                }else {
                    $(obj).addClass("selected");
                    $(obj).children('span').html("Remove from my events")
                }
            }
        });
    };
        
    return {
		init: function() {
			attachEvents();
        }
	};
	
}(jQuery));


/*Subscription Listing Page*/
HomeController.Subscription = (function ($) {

    var attachEvents = function () {

        $('.form__subscribe').on('submit', function (e) {
            e.preventDefault();
            var email = $('#subscriptionEmail').val();
            if (email != '') {
                var csrfToken = $('meta[name="csrf-token"]').attr("content");
                $.ajax({
                    type: 'POST',
                    url: baseHttpPath + '/home/subscription',
                    dataType: 'json',
                    data: {email: email, _csrf: csrfToken},
                    success: function (data, textStatus, jqXHR) {
                        if(data.success = 1) {
                            $().General_ShowNotification({message: 'Subscribed successfully.'});
                        }
                    },
                    error: function (jqXHR, textStatus, errorThrown) {
                        $().General_ShowErrorMessage({message: jqXHR.responseText});
                    },
                    beforeSend: function (jqXHR, settings) {
                        $('#subscriptionBtn').val('Please Wait...');
                    },
                    complete: function (jqXHR, textStatus) {
                        $('#subscriptionBtn').val('Subscribe');
                        $('#subscriptionEmail').val('');
                    }
                });
            }

        });
    };

    return {
        init: function () {
            attachEvents();
        }
    };

}(jQuery));

var ArticleController = (function($) {
	
return {
    article: function() {
        //attachEvents();
        ArticleController.Article.init();
    }
};
	
}(jQuery));

ArticleController.Article = (function($) {
    var attachEvents = function(){
        
        //adjust contents
        var winWidth = $(window).width();
        if(winWidth > 992) {
            ApplicationController.adjustArticlePageContents();//ads take time to load
        }
            
        //play youtube video
        $('body').on('click', '.btnYoutubePlay', function(e){
            e.preventDefault();
            var video = $(this).data('videoid');
            var title = $(this).data('title');
            if(video !== undefined && video !== "") {
                $.fancybox.open([
                {
                    href : 'http://www.youtube.com/embed/'+video+'?autoplay=1',
                    title : title,
                    type: 'iframe'
                }   
            ]);
            }
        });
        
         //Play Vimeo Videos
        $('body').on('click', '.btnVimeoPlay', function(e){
            e.preventDefault();
            var video = $(this).data('videoid');
            var title = $(this).data('title');
            if(video !== undefined && video !== "") {
                $.fancybox.open([
                {
                    href : 'http://player.vimeo.com/video/'+video+'?autoplay=1',
                    title : title,
                    type: 'iframe'
                }   
            ]);
            }
        });
        
        /*$('body').on('click', '.social-share', function(e){
           e.preventDefault();
           
           var url = $(this).data('url');
           var type = $(this).data('type');
           if( url === undefined || url === '') {
               return;
           }
           window.open( url, "sharewin-"+type, "height=500,width=650,resizable=1" );
        });*/
        
        //triggers when user wants to like or unlike a post
        $('a.like-post').click(function(e){
            e.preventDefault();
            var action = $(this).hasClass('like') ? 'like' : 'unlike';
            var post_id = $(this).data('id');            
            var token = yii.getCsrfToken();
            
            $.ajax({
                url: baseHttpPath + '/article/like-post',
                type: 'post',
                data: {action: action, post_id: post_id, _csrf: token},
                dataType: 'json',
                success: function(data){
                    if(data.success == 1) {
                        $('.like-post > span').html(data.total_likes + " Likes");
                        if(action == 'like') {
                            $('.like-post').removeClass('like').addClass('unlike');                            
                        }
                        else {
                            $('.like-post').removeClass('unlike').addClass('like');                            
                            
                        }
                    }
                },
                error: function(jqXHR, textStatus, errorThrown){
                    $().General_ShowErrorMessage({message: jqXHR.responseText});
                }

            });
        });
        
    };
    
    return {
        init: function(){
            attachEvents();
        }
    };
}(jQuery));


var UserController = (function($) {
	
return {
    myNews: function() {
        //attachEvents();
        UserController.MyNews.init();
    }
};
	
}(jQuery));

UserController.MyNews = (function($) {
    var attachEvents = function(){
       
        $('body').on('click', '.social-share', function(e){
           e.preventDefault();
           
           var url = $(this).data('url');
           var type = $(this).data('type');
           if( url === undefined || url === '') {
               return;
           }
           window.open( url, "sharewin-"+type, "height=500,width=650,resizable=1" );
       }); 
       
        //Load more posts
        var loadMoreBtnIsClicked = false;
        $('a.LoadMorePostsBtn').on('click', function(e){
            e.preventDefault();
            if(loadMoreBtnIsClicked) {
                return;
            }
            loadMoreBtnIsClicked = true;
            var btnObj = $(this);
            var offset = parseInt($(this).data('offset'));
            var morePostsCount = parseInt($(this).data('moreposts-count'));
            var firstOffset = parseInt($(this).data('firstoffset'));
            
            if(isNaN(offset)){
                return;
            }
            
            if(isNaN(morePostsCount) || morePostsCount <= 0) {
                morePostsCount = 10;
            }
            if(isNaN(firstOffset) || firstOffset <= 0) {
                firstOffset = 10;
            }
            
            offset = (offset === 0) ? offset + firstOffset : offset + morePostsCount;
            
            //set new values
            $(this).data('offset', offset);
            
            var csrfToken = $('meta[name="csrf-token"]').attr("content");
            
            $.ajax({
                type: 'POST',
                url: baseHttpPath + '/user/more-posts',
                dataType: 'json',
                data: {offset: offset, limit: morePostsCount, _csrf: csrfToken},
                success: function(data, textStatus, jqXHR) {
                    
                    if(data.totalArticles > 0){
                        var postsHtml = ApplicationController.jsUTF8Decode(data.articlesHtml);
                        $('div.MorePostsContainer').append(postsHtml);
                        $(".lazyload").lazyload({
                            threshold : 200
                        });
                        
                        if(data.totalArticles < morePostsCount) {
                            $(btnObj).addClass('hide');
                        }
                        
                        $(".card p.card__text").each(function () {
                            var content_height, event_height, text_position;
                            content_height = $(this).parent(".card__content").height();
                            text_position = $(this).position().top;
                            event_height = $(this).siblings(".card__event") ? $(this).siblings(".card__event").outerHeight() : 0;
                            return $(this).height(content_height - event_height - text_position);
                        });
                        return $(".card p, .card h1").dotdotdot();
                    }
                    else {
                        $(btnObj).addClass('hide');
                    }
                },
                error: function(jqXHR, textStatus, errorThrown){
                    //jqXHR.responseText
                },
                beforeSend: function(jqXHR, settings) { 
                    $(btnObj).find('i.fa').addClass('fa-spin');
                },
                complete: function(jqXHR, textStatus) {
                    loadMoreBtnIsClicked = false;
                    $(btnObj).find('i.fa').removeClass('fa-spin');
                }
            });            
            
        });
        
        
    };
    
    return {
        init: function(){
            attachEvents();
        }
    };
}(jQuery));
var SearchController = (function($) {
	
	return {
		init: function() {
            SearchController.FansSearch.init();
        },
    };
	
}(jQuery));

/*ClubBlogs*/
SearchController.FansSearch = (function($) {

    var attachEvents = function() {
          
       $('body').on('click', '.social-share', function(e){
           e.preventDefault();
           
           var url = $(this).data('url');
           var type = $(this).data('type');
           if( url === undefined || url === '') {
               return;
           }
           window.open( url, "sharewin-"+type, "height=500,width=650,resizable=1" );
       }); 
        
        $(".card p.card__text, .card h1.card__heading").dotdotdot();
        
        $('form.search').on('submit', function(e){
            var searchQuery = $('input.SearchInput').val();
            if($.trim(searchQuery) === ''){
                $().General_ShowErrorMessage({message: "Please enter a search term."});
                e.preventDefault();
                return;
            }
            var btnElem = $('button:submit');
            $('i', btnElem).General_AddRemoveSpinnerIcon();
        });
        
       var postsCount = $('#searchedArticles').data('postcount');
        if(postsCount  >= postsOffsetSearch){//postsOffsetSearch defined in _javascripts.php
            var waypoint = new Waypoint({
              element: $('#load-more'),
              offset: '90%',
              handler: function(direction) {
                  if(direction == 'down'){
                      fansSearch();
                  }
              }
            })
        }

        function fansSearch() {
            
            var search = $('.blog-post-search input.c9n-ippt').val();
            
            $.ajax({
                url: baseHttpPath + '/search/fans-search/',
                type: 'get',
                data: {s: search, _csrf : $('meta[name="csrf-token"]').attr("content") },
                dataType: 'json',
                success: function(obj){
                    
                    var results = obj.articles;
                    if (results.length <= 0) {
                        $('#load-more').removeClass('exists');
                        $('#load-more-cover').html('');
                        $('.no-data').removeClass('hide');
                    }
                    else {
                        $('.no-data').addClass('hide');
                        var postSource = $("#search-post-template").html();
                        var postTemplate = Handlebars.compile(postSource);
                        for(var ind in obj.articles){
                            var postItem = postTemplate(obj.articles[ind]);
                            $("#searchedArticles").append(postItem);
                        }
                        $(".card p.card__text").each(function() {
                              var content_height, event_height, text_position;
                              content_height = $(this).parent(".card__content").height();
                              text_position = $(this).position().top;
                              event_height = $(this).siblings(".card__event") ? $(this).siblings(".card__event").outerHeight() : 0;
                              return $(this).height(content_height - event_height - text_position);
                        });                          
                        $(".card p.card__text, .card h1.card__heading").dotdotdot();   
                    }
                    
                    if (obj.articles.length < postsOffsetSearch) {
                        waypoint.destroy();
                    }
                    else {
                        Waypoint.refreshAll();
                    }
                     
                },
                error: function(jqXHR, textStatus, errorThrown){
                    $().General_ShowErrorMessage({message: jqXHR.responseText});
                },
                beforeSend: function() { 
                    $('i', $('.spinner')).General_AddRemoveSpinnerIcon();
                },
                complete: function() {
                    $('i', $('.spinner')).General_AddRemoveSpinnerIcon();
                }
            });
        }
    };
        
    return {
		init: function() {
			attachEvents();
        }
	};
	
}(jQuery));
var Profile = function () {

    var attachDashboardEvents = function() {
        
        $('.DeleteAllNotifications').on('click', function(e){
            e.preventDefault();
            var obj = $(this);
            
            bootbox.confirm({
                title: "Confirm",
                message: "Do you really want to delete all unread notifications?",
                callback: function(result) {
                    if (result) {
                        $.ajax({
                            type: 'POST',
                            url: baseHttpPath + '/user/delete-notification',
                            dataType: 'json',
                            data: {id: 0, deleteall: 1, _csrf: yii.getCsrfToken()},
                            success: function(data, textStatus, jqXHR) {
                                $('ul.NotificationsList').remove();
                                //update count badge
                                $('span.NotificationCount').html('0');
                                $('div.UserNotifications').append('<p class=" no-data">No notification(s) found.</p>');
                                $('.DeleteAllNotifications').parent('span').addClass('hide');
                                $().General_ShowNotification({message: totalCount + ' notifications deleted successfully.' });
                            },
                            error: function(jqXHR, textStatus, errorThrown){
                                $().General_ShowErrorMessage({message: jqXHR.responseText});
                            },
                            beforeSend: function(jqXHR, settings) { 
                                $('i', obj).General_AddRemoveSpinnerIcon();
                            },
                            complete: function(jqXHR, textStatus) {
                                $('i', obj).General_AddRemoveSpinnerIcon();
                            }
                        });                        
                    }
                }
            });
        });
        
        $('.NotificationsLoadMore').on('click', function(e){
            e.preventDefault();
            var page = parseInt($(this).data('page'));
            if(isNaN(page) || page <= 0) {
                $(this).addClass('hide');
                return;
            }
            
            var btnObj = $(this);
            
            $.ajax({
                type: 'POST',
                url: baseHttpPath + '/user/dashboard',
                dataType: 'json',
                data: {page: page, _csrf: yii.getCsrfToken()},
                success: function(data, textStatus, jqXHR) {
                    if(data.notifications.length > 0) {
                        var notificationItemSource = $("#notification-template").html();
                        var notificationItemTemplate = Handlebars.compile(notificationItemSource);
                        for(var notificationIndex in data.notifications) {
                            var notification = data.notifications[notificationIndex];
                            $('ul.NotificationsList').append(notificationItemTemplate(notification));
                        }
                        
                        $(btnObj).data('page', (page + 1));
                    }
                    
                    if(data.notifications.length < notificationsLimit) {
                        $(btnObj).addClass('hide');
                    }
                },
                error: function(jqXHR, textStatus, errorThrown){
                    $().General_ShowErrorMessage({message: jqXHR.responseText});
                },
                beforeSend: function(jqXHR, settings) { 
                    $('i', btnObj).General_AddRemoveSpinnerIcon();
                },
                complete: function(jqXHR, textStatus) {
                    $('i', btnObj).General_AddRemoveSpinnerIcon();
                }
            });            
            
        });
        
        //Mark notification as read
        $('.UserNotifications').on('click', '.markReadNotification', function(e){
            e.preventDefault();
            var obj = $(this);
            var notificationId = parseInt($(this).data('id'));
            if(isNaN(notificationId) || notificationId <= 0){
                $().General_ShowErrorMessage({message: "Error marking notification as read."});
                return;
            }

            $.ajax({
                type: 'POST',
                url: baseHttpPath + '/user/mark-read-notification',
                dataType: 'json',
                data: {id: notificationId, _csrf: yii.getCsrfToken()},
                success: function(data, textStatus, jqXHR) {
                    $('li.Notification' + notificationId).remove();
                    //update count badge
                    var existingCount = parseInt($('span.NotificationCount').html());
                    if(!isNaN(existingCount) && existingCount > 0){
                        var newCount = existingCount - 1;
                        $('span.NotificationCount').html(newCount);
                        if(newCount <= 0){
                            $('div.UserNotifications').append('<p class=" no-data">No notification(s) found.</p>');
                        }
                    }

                    $().General_ShowNotification({message: 'Successfully marked as read.' });
                },
                error: function(jqXHR, textStatus, errorThrown){
                    $().General_ShowErrorMessage({message: jqXHR.responseText});
                },
                beforeSend: function(jqXHR, settings) { 
                    $('i', obj).General_AddRemoveSpinnerIcon();
                },
                complete: function(jqXHR, textStatus) {
                    $('i', obj).General_AddRemoveSpinnerIcon();
                }
            });
        });
        //Delete notification
        $('.UserNotifications').on('click', '.deleteNotification', function(e){
            e.preventDefault();
            var obj = $(this);
            var notificationId = parseInt($(this).data('id'));
            if(isNaN(notificationId) || notificationId <= 0){
                $().General_ShowErrorMessage({message: "Error deleting notification."});
                return;
            }

            $.ajax({
                type: 'POST',
                url: baseHttpPath + '/user/delete-notification',
                dataType: 'json',
                data: {id: notificationId, deleteall: 0, _csrf: yii.getCsrfToken()},
                success: function(data, textStatus, jqXHR) {
                    $('li.Notification' + notificationId).remove();
                    //update count badge
                    var existingCount = parseInt($('span.NotificationCount').html());
                    if(!isNaN(existingCount) && existingCount > 0){
                        var newCount = existingCount - 1;
                        $('span.NotificationCount').html(newCount);
                        if(newCount <= 0){
                            $('div.UserNotifications').append('<p class=" no-data">No notification(s) found.</p>');
                        }
                    }
                    $().General_ShowNotification({message: 'Successfully deleted.' });
                },
                error: function(jqXHR, textStatus, errorThrown){
                    $().General_ShowErrorMessage({message: jqXHR.responseText});
                },
                beforeSend: function(jqXHR, settings) { 
                    $('i', obj).General_AddRemoveSpinnerIcon();
                },
                complete: function(jqXHR, textStatus) {
                    $('i', obj).General_AddRemoveSpinnerIcon();
                }
            });
        });
        
        $('.deleteBlog').deleteBlog({
           'onSuccess': function(data, obj){
                $().General_ShowNotification({message: 'Successfully deleted'});
                 $('li.blogId_' + $(obj).data('id')).slideUp().remove();
           },
           'onError': function(obj, errorMessage) {
                $().General_ShowErrorMessage({message: errorMessage});
           },
           'beforeSend': function(obj) {
               $('i', obj).General_AddRemoveSpinnerIcon();
           },
           'onComplete': function(obj){
                $('i', obj).General_AddRemoveSpinnerIcon();
           }
        });
        
        $('.blogSettingsBtn').on('click', function(e){
            e.preventDefault();
            var blogId = $(this).data('id');
            window.location = baseHttpPath + "/user-blogs/settings?blogId=" + blogId;
        });
    };

    var addAddRemoveWebsiteURL = function() {
        
        $('.AddMoreWebsiteUrl').on('click',function(e){
            e.preventDefault();
            var num = $(this).attr('shownext');
            $(".field-blogsetting-website_url"+num).slideDown('slow');
            $(this).hide();
        });
        
        $('.RemoveWebsiteUrl').on('click', function(e){
            e.preventDefault();
            var num = $(this).attr('removenum');
            $('#blogsetting-website_url'+num).val('');
            var parentDiv = $(this).parent('div');
            var numPrev = num-1;
            var sib = parentDiv.siblings('.field-blogsetting-website_url'+numPrev);
            sib.children('.AddMoreWebsiteUrl').show();
            $(".field-blogsetting-website_url"+num).slideUp('slow');
            
        });
    };
    
    var attachEvents = function() {
        
        //Follow button below profile user image on left side
        $('.FollowProfileUser').followWriter({
            'onSuccess': function(data, obj){
            },
           'onError': function(obj, errorMessage) {
                $().General_ShowErrorMessage({message: errorMessage});
            },
            'beforeSend': function(obj) {
               $('i', obj).General_AddRemoveSpinnerIcon();
            },
            'onComplete': function(obj){
                $('i', obj).General_AddRemoveSpinnerIcon();
                if($(obj).data('status') === 'follow'){
                    $(obj).removeClass('red').addClass('green');
                    $(obj).html('<i class="fa fa-star"></i>Follow');
                }
                else{
                    $(obj).removeClass('green').addClass('red');
                    $(obj).html('<i class="fa fa-star"></i>Following');
                }
            }
        });
        
        $('.FollowProfileBlog').followBlog({
            'onSuccess': function(data, obj){
                var status = $(obj).data('status');
                (status === 'follow')?$(obj).removeClass('selected'):$(obj).addClass('selected');
            },
           'onError': function(obj, errorMessage) {
                $().General_ShowErrorMessage({message: errorMessage});
            }
        });
        
         //follow/unfollow code from Codes Tab in public profile page
        $('.FollowCode').followCode({
           'onSuccess': function(data, obj){
            },
           'onError': function(obj, errorMessage) {
                $().General_ShowErrorMessage({message: errorMessage});
            },
            'beforeSend': function(obj) {
               $('i', obj).General_AddRemoveSpinnerIcon();
            },
            'onComplete': function(obj){
                $('i', obj).General_AddRemoveSpinnerIcon();
                ($(obj).data('status') === 'follow') ? $(obj).removeClass('selected') : $(obj).addClass('selected');
            }
        });
        
        //follow/unfollow club from Clubs Tab in public profile page
        $('.FollowClub').followBlog({
           'onSuccess': function(data, obj){
            },
           'onError': function(obj, errorMessage) {
                $().General_ShowErrorMessage({message: errorMessage});
            },
            'beforeSend': function(obj) {
               $('i', obj).General_AddRemoveSpinnerIcon();
            },
            'onComplete': function(obj){
                $('i', obj).General_AddRemoveSpinnerIcon();
                ($(obj).data('status') === 'follow') ? $(obj).removeClass('selected') : $(obj).addClass('selected');
            }
        });
        
        //follow/unfollow blog from blogs tab in public profile page
        $('.FollowBlog').followBlog({
            'onSuccess': function(data, obj){
            },
           'onError': function(obj, errorMessage) {
                $().General_ShowErrorMessage({message: errorMessage});
            },
            'beforeSend': function(obj) {
               $('i', obj).General_AddRemoveSpinnerIcon();
            },
            'onComplete': function(obj){
                $('i', obj).General_AddRemoveSpinnerIcon();
                ($(obj).data('status') === 'follow') ? $(obj).removeClass('selected') : $(obj).addClass('selected');
            }
        });
        
        //follow/unfollow writer from writers tab in public profile page
        $('.FollowWriter').followWriter({
            'onSuccess': function(data, obj){
            },
           'onError': function(obj, errorMessage) {
                $().General_ShowErrorMessage({message: errorMessage});
            },
            'beforeSend': function(obj) {
               $('i', obj).General_AddRemoveSpinnerIcon();
            },
            'onComplete': function(obj){
                $('i', obj).General_AddRemoveSpinnerIcon();
                ($(obj).data('status') === 'follow') ? $(obj).removeClass('selected') : $(obj).addClass('selected');
            }
        });
        
        //follow / unfollow user from Followed By section in public profile page
        $('.FollowUnfollowUser').followWriter({
            'onSuccess': function(data, obj){
            },
           'onError': function(obj, errorMessage) {
                $().General_ShowErrorMessage({message: errorMessage});
            },
            'beforeSend': function(obj) {
               $('i', obj).General_AddRemoveSpinnerIcon();
            },
            'onComplete': function(obj){
                $('i', obj).General_AddRemoveSpinnerIcon();
                ($(obj).data('status') === 'follow') ? $(obj).removeClass('selected') : $(obj).addClass('selected');
            }
        });
        
    };    
    
    var userPosts = function(){
        
    //Auto Ellipsis
    $(".card p.card__news-description, .card h1.card__news-heading").dotdotdot();
    
    /*var pcontainer = document.querySelector('#image-container');
	// init
	var pckry = new Packery( pcontainer, {
	  // options
	  itemSelector: '.posts-grid',
	  gutter: 0
	});*/
        
    var loadMoreUserPosts = function(options){

            var defaults = {
                loader: $('div.loader'),
                container: $('div.posts'),
                onSuccess: false,
                onError: false,
                beforeSend: false,
                onComplete: false
            };
            var opts = $.extend( {}, defaults, options );
            
            var username = $(opts.container).data('username');
            var totalPosts = parseInt($(opts.container).data('total-count'));
            var offset = parseInt($(opts.container).data('offset'));
            if(username === '' || username === undefined){
                return;
            }
            if(isNaN(totalPosts) || isNaN(offset)){
                return;
            }
            
            offset = offset + postsOffset; //Declared in _javascripts.php
            if(offset > totalPosts){
                return;
            }
            
            $(opts.container).data('offset', offset);
            
            $.ajax({
                type: 'POST',
                url: baseHttpPath + '/profile/' + username + '/posts',
                dataType: 'json',
                data: {offset: offset},
                success: function(data, textStatus, jqXHR) {
                    
                    if(data.articles.length > 0){
                        for(var ind in data.articles){
                             var source   = $("#post-listing-template").html();
                             var template = Handlebars.compile(source);
                             var postItem = template(data.articles[ind]);
                             $(opts.container).append(postItem);
                        }
                        
                        $(".card p.card__news-description, .card h1.card__news-heading").dotdotdot();
                        
                        if (data.articles.length < postsOffset) {
                            waypoint.destroy();
                        }
                        else {
                            Waypoint.refreshAll();
                        }
                    }
                    
                    if (opts.onSuccess && typeof opts.onSuccess === 'function') {
                        opts.onSuccess(data);
                    }
                },
                error: function(jqXHR, textStatus, errorThrown){
                    if (opts.onError && typeof opts.onError === 'function') {
                        opts.onError(jqXHR.responseText);
                    }
                },
                beforeSend: function(jqXHR, settings) { 
                    $(opts.loader).removeClass('hide');
                    if (opts.beforeSend && typeof opts.beforeSend === 'function') {
                        opts.beforeSend();
                    }
                },
                complete: function(jqXHR, textStatus) {
                    $(opts.loader).addClass('hide');
                    if (opts.onComplete && typeof opts.onComplete === 'function') {
                        opts.onComplete();
                    }
                }
            });
        };
        
        var totalPosts = parseInt($('div.posts').data('total-count'));
        
        if(totalPosts > postsOffset){
            var waypoint = new Waypoint({
            element: $('#LoadMoreArticles'),
            offset: '80%',
            handler: function(direction){
                    if(direction == 'down'){
                       loadMoreUserPosts({});
                    }
                }
            }); 
        }
    };
    
    
    return {
        
		//main function to initiate the module
        init: function() {
            attachEvents();
            addAddRemoveWebsiteURL();
        },
        dashboard: function(){
            attachDashboardEvents();
        },
        userArticles: function(){
            userPosts();
        }
    };
    
} ();
var ContactController = (function ($) {

    return {
        map: function () {
            ContactController.Map.init();
        }
    };

}(jQuery));


ContactController.Map = (function ($) {

    var attachEvents = function () {
        var elem = $('#map');
        var lat = elem.data('lat');
        var lng = elem.data('lng');
        var address = elem.data('address');

        google.maps.event.addDomListener(window, 'load', initContactMap);
        function initContactMap() {

            var myCenter = new google.maps.LatLng(parseFloat(lat), parseFloat(lng));

            var map = new google.maps.Map(document.getElementById('map'), {
                zoom: 12,
                center: myCenter
            });

            var marker = new google.maps.Marker({
                position: {
                    lat: lat,
                    lng: lng
                },
                map: map
            });

            var message = address;
            contactAddress(marker, message);

        }
        function contactAddress(marker, message) {
            var infowindow = new google.maps.InfoWindow({
                content: message
            });

            marker.addListener('click', function () {
                infowindow.open(marker.get('map'), marker);
            });
        }
    };
    return {
        init: function () {
            attachEvents();
        }
    };

}(jQuery));

function additionalFamily(field, rules, i, options){
    if($('#MemberType').val() === 'family' && $('#AdditionalFamily').val() === "") {
        rules.push('required');
        //return "Please fill Primary Membership No.";
    }
}

function studentNumber(field, rules, i, options){
    if(($('#MemberType').val() === 'student' || $('#MemberType').val() === 'pensioner') && $('#StudentCardNumber').val() === "") {
        rules.push('required');
    }
}

function fireArms(field, rules, i, options){
    if(($('#FirearmMake').val() !== '' || $('#FirearmModel').val() !== '' || 
            $('#FirearmCalibre').val() !== '' || $('#SerialNumber').val() !== '' || $('#AdditionalFirearms').is(':checked')) && field.val() === "") {
        rules.push('required');
    }
}

function donationVal(field, rules, i, options){
    if(($('#Donate').is(':checked') || $('#FightingFund').is(':checked'))&& $('#donation').val() === "") {
        rules.push('required');
        //return "Please fill Primary Membership No.";
    }
}

//function memberBefore(field, rules, i, options){
//    if(!$('#MemberYes').is(':checked') && !$('#MemberNo').is(':checked')) {
//        $('.alert.alert-danger p.error-message').html("Please select Yes or No for 'Have you been a member before?'.");
//        $('.alert.alert-danger').removeClass('hide');
//    }
//}

var FieldGameAuthController = (function ($) {

    return {
        signup: function () {
            FieldGameAuthController.Signup.init();
        },
        signupv2: function () {
            FieldGameAuthController.SignupV2.init();
        }
    };

}(jQuery));

FieldGameAuthController.SignupV2 = (function ($) {

    var attachEvents = function () {
        
        var handler = StripeCheckout.configure({
            key: stripePublishKey,
            image: baseHttpPath  + '/resources/fieldgames/images/favicons/apple-touch-icon-152x152.png',
            locale: 'auto',
            'allow-remember-me': false,
            token: function(token) {
                $("#stripe_token").val(token.id);
                $('#signupForm').submit();
            }
        });
          
        $('.CreditCardBtn').on('click', function(e){
            e.preventDefault();
            
            $('.OtherPaymentOptions').addClass('hide');
            $('#ElectronicFundsTransfer,#PaymentByCheque').prop('checked', false);
            
            var valid = $("#signupForm").validationEngine('validate');
            if (!valid) {
                return;
            }
            
            var total = parseFloat($('#MemberType').find(':selected').data('cost'));
            if($('#donation').val() != "") {
                var value = $('#donation').val();
                value = value.replace(/[^\d\.]+/g,'');
                value = value.replace(/(\..*)\./g,'$1');
                var don = parseFloat(value);
                if(!isNaN(don) && don > 0) {
                    total = don + total;
                }
            }            
            
            var totalCents = total * 100;
            if(isNaN(totalCents) || totalCents <= 0) {
                alert("Please select a Membership Type");
                return false;
            }
            
            handler.open({
                name: 'Field & Game',
                description: 'Field & Game Membership',
                currency: 'AUD',
                email: $('#Email').val(),
                amount: totalCents
            });
        });
        
        // Close Checkout on page navigation:
        window.addEventListener('popstate', function() {
            handler.close();
        });
        
        $('.OtherPaymentOptionsBtn').on('click', function(){
            $('.OtherPaymentOptions').removeClass('hide');
        });
        
        $('#signupForm').validationEngine({
            prettySelect: true, promptPosition : "topRight", showOneMessage: true,
            onValidationComplete: function(form, status){ // when validate is on and the form scan is completed
                if (status == true) { // equiv to success everythings is OK
                    // we disable the default from action to make our own action like alert or other function
                    form.on('submit', function(e) {
                        e.preventDefault();
                    });
                    
                    if ($('.OtherPaymentOptions').hasClass('hide') && $("#stripe_token").val() == '') {
                        alert("Please click on Pay by Credit Card to connect");
                        return false;
                    }
                    
                    if (!$('.OtherPaymentOptions').hasClass('hide') && !$('#ElectronicFundsTransfer').is(':checked') && !$('#PaymentByCheque').is(':checked')) {
                        alert("Please select atleast one payment method");
                        return false;
                    }
                    
                    // your function or your action
                    var formData = $('#signupForm').serialize();
                    formData += "&_csrf=" + yii.getCsrfToken();
                    $.ajax({
                        url: baseHttpPath + '/auth/save-user',
                        type: 'post',
                        data: formData,
                        dataType: 'json',
                        success: function (data) {
                            if (data.success === 1) {
                                window.location = baseHttpPath + '/auth/complete-signup';
                            }
                            else {
                                $('.alert.alert-danger p.error-message').html(data.error);
                                $('.alert.alert-danger').removeClass('hide');                                    
                            }
                        },
                        error: function(jqXHR, textStatus, errorThrown){
                            $().General_ShowNotification({type: 'error',message: jqXHR.responseText});
                        },
                        beforeSend: function(jqXHR, settings) { 
                            $('body').addClass('Signup__Error');
                        },
                        complete: function(jqXHR, textStatus) {
                            $('body').removeClass('Signup__Error');
                        }
                    }); 

                    //alert("Successful! Now submitting");
                    return true;
                } 
            }
        });

        //Select2 box
        $("select.form-control").select2({
            blurOnChange: true,
            dropdownAutoWidth: true
        });

        $('#DOB.date').datepicker({
            'autoclose': true,
            format: 'dd/mm/yyyy'            
        });        
        
        $('#donation').on('keyup', function(e){
            if(e.which === 18) {
                e.preventDefault();
            }
            
            //get numeric value only
            var cost = parseFloat($('#MemberType').find(':selected').data('cost'));
            var totalCost = cost;
            var value = $(this).val();
            value = value.replace(/[^\d\.]+/g,'');
            value = value.replace(/(\..*)\./g,'$1');
            var don = parseFloat(value);
            if(!isNaN(don) && don > 0) {
                totalCost = cost+don;
            }
            
            $('#TotalPayable').val('$ ' + totalCost.toFixed(2) + ' inc GST');
        });
        
        $('#MemberType').on('change', function(e){
            
            var cost = parseFloat($(this).find(':selected').data('cost'));
            var total = new Number(cost);
            $('#TotalMembershipFees').val('$ ' + total.toFixed(2) + ' inc GST');
            if($('#donation').val() != "") {
                var value = $('#donation').val();
                value = value.replace(/[^\d\.]+/g,'');
                value = value.replace(/(\..*)\./g,'$1');
                var don = parseFloat(value);
                if(!isNaN(don) && don > 0) {
                    cost += don;
                }
            }
            
            total = new Number(cost);
            $('#TotalPayable').val('$ ' + total.toFixed(2) + ' inc GST');
            
            var memberType = $(this).val();
            
            if(memberType === 'family') {
                $('.additional-family-row').removeClass('hide');
                $('.type-help').html("(Spouse or Child U18)");
                $('.type-help').removeClass('hide');
            }
            else {
                $('.additional-family-row').addClass('hide');
                if(memberType === 'student' || memberType === 'pensioner') {
                    $('.type-help').html("Proof must be provided");
                    $('.type-help').removeClass('hide');
                }
                else {
                    $('.type-help').addClass('hide');
                }
            }
            

            
            if (memberType === 'junior' || memberType === 'superjunior') {
                $('.firearm').val('');
                $('.firearm').prop("disabled", true);
            }
            else {
                $('.firearm').prop("disabled", false);
            }
            
            $('#donation').prop("disabled", false);
        });
        
        $('#SameResidentialAddress').on('click', function(e){
            
            if($(this).is(':checked')) {
                $('#PostalAddress').val($('#ResidentialAddress').val());
                $('#Suburb2').val($('#Suburb').val());
                //$('#State2').val($('#State').val());
                $('#Postcode2').val($('#Postcode').val());
                var $state2 = $('#State2').select();
                $state2.val($('#State').val()).trigger("change");
            }
            
        });

    };
    return {
        init: function () {
            attachEvents();
        }
    };

}(jQuery));

FieldGameAuthController.Signup = (function ($) {

    var attachEvents = function () {
        
        $('#same_as_postal').click(function(e) {
            if ($(this).is(':checked')) {
                $('#signupform-residential_address').val($('#signupform-postal_address').val());
                $('#signupform-residential_postcode').val($('#signupform-postal_postcode').val());
            }
        });
        
        $('#signupform-dateofbirth').datetimepicker({
            autoclose: true,
            format: 'dd-mm-yyyy',    //'mm-dd-yyyy HH:ii:ss P',
            pickerPosition: "bottom-left",
            initialDate: '01-01-1980',
            minView: 2
        });
                
        $('.membershipSignupForm').on('click', function() {
           var elem = $(this);
           var data = elem.data('membership');
           var cost = elem.data('cost');
           $('.membershipForm').find('.active').removeClass('active');
           elem.addClass('active');
           $('#memberTypeInput').val(data);
           $('#cost').removeClass('hide');
           $('#cost').children('span').text(cost);
           if(elem.hasClass('family')) {
              $('.additionalInfo').removeClass('hide'); 
           }
           else {
              $('.additionalInfo').addClass('hide');
              $('#additionalFamilyInfo').val('');
           }
        });
    };
    return {
        init: function () {
            attachEvents();
        }
    };

}(jQuery));

var FieldGamePopularController = (function ($) {

    return {
        branch: function () {
            FieldGamePopularController.Branch.init();
        }
    };

}(jQuery));

/*ClubBlogs*/
FieldGamePopularController.Branch = (function ($) {

    var bindFollowClub = function () {
        $('button.follow').followBlog({
            'onSuccess': function (data, obj) {
            },
            'onError': function (obj, errorMessage) {
                $().General_ShowErrorMessage({message: errorMessage});
            },
            'beforeSend': function (obj) {
                $('i', obj).General_AddRemoveSpinnerIcon();
            },
            'onComplete': function (obj) {
                $('i', obj).General_AddRemoveSpinnerIcon();
                ($(obj).data('status') === 'follow') ? $(obj).html("<i class='fa fa-star'></i> Follow") : $(obj).html("<i class='fa fa-star'></i> Following");
            }
        });
    };

    var attachEvents = function () {

        bindFollowClub();

        //var status = "follow";
        var template = Handlebars.compile(clubs_index_club);
        $('.blog-post-search form').submit(function (e) {
            e.preventDefault();
            searchClubs();
        });

        $('#filter a').click(function (e) {
            e.preventDefault();
            if ($(this).hasClass('selected')) {
                return;
            }

            $('#filter a').removeClass('selected');
            $(this).addClass('selected');
            $('.blog-post-search form input.c9n-ippt').val('');
            searchClubs();
        });

        function searchClubs() {

            var code = $('#filter a.selected').data('code');
            var search = $('.blog-post-search input.c9n-ippt').val();

            $.ajax({
                url: baseHttpPath + '/branch/index',
                type: 'get',
                data: {s: search, code: code, _csrf: $('meta[name="csrf-token"]').attr("content")},
                dataType: 'json',
                success: function (obj) {
                    $('#clubBlogs').empty();

                    Handlebars.registerHelper('loggedUser', function (status, options) {
                        var fnTrue = options.fn, fnFalse = options.inverse;
                        return status = obj.loggedUser == true ? fnTrue() : fnFalse();
                    });

                    var results = obj.clubs;
                    if (results.length <= 0) {
                        $('.polpular-writers').addClass('hide');
                        $('.no-data').removeClass('hide');
                    }
                    else {
                        $('.polpular-writers').removeClass('hide');
                        $('.no-data').addClass('hide');
                        $("#clubBlogs").append(template(results));

                        $('.forceLogin').unbind('click');
                        ApplicationController.init();

                        bindFollowClub();
                    }
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    $().General_ShowErrorMessage({message: jqXHR.responseText});
                },
                beforeSend: function () {
                    $('i', $('.blog-post-search form button')).General_AddRemoveSpinnerIcon();
                },
                complete: function () {
                    $('i', $('.blog-post-search form button')).General_AddRemoveSpinnerIcon();
                }
            });
        }
    };

    return {
        init: function () {
            attachEvents();
        }
    };

}(jQuery));
