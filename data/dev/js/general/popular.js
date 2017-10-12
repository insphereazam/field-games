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