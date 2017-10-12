/* Scrolleffect Plugin */

function scrollEffect(parentElement, childElement, scrollSpeed) {
	jQuery( document ).ready(function( $ ) {
		$(parentElement).each(function(){

			var	windowHeight = $(window).height(),
				scroll = $(window).scrollTop(),
				bottomOfScroll = scroll + windowHeight,
				ID = $(parentElement).attr('id');

			if($('#'+ID).length){
				var elementOffset = $(this).offset().top + (windowHeight / 4);
			}

			if(bottomOfScroll > elementOffset && elementOffset > scroll){
				$($(this)).children(childElement).each(function(e){
					var 	item = $(this);
					console.log($(this));

					if(item.hasClass('seDisplay')){
						return false;
					} else {
						setTimeout(function(){
							item.addClass('seDisplay');
						}, e*scrollSpeed);
					}
				});
			} else {
				$(window).scroll(function(){
					var	scroll = $(window).scrollTop(),
						bottomOfScroll = scroll + windowHeight;

					$(parentElement).each(function(){

						// animation
						if(bottomOfScroll > elementOffset && elementOffset > scroll){

							$(this).children(childElement).each(function(e){
								var 	item = $(this);

								if(item.hasClass('seDisplay')){
									return false;
								} else {
									setTimeout(function(){
										item.addClass('seDisplay');
									}, e*scrollSpeed);
								}
							});
						}

						// animation reset
						if(scroll < 100 && elementOffset > windowHeight){
							$($(this)).children(childElement).removeClass('seDisplay');
						}
					});
				});
			}
		});
	});
};