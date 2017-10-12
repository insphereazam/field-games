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


