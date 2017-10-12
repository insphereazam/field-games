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
