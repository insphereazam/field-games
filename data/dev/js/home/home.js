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

