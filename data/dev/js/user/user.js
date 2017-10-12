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