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

