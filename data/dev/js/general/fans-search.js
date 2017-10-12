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