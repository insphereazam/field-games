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

