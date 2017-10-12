var HeaderController = (function($) {
	
return {
    weather: function() {
        HeaderController.Weather.init();
    },
};
	
}(jQuery));

HeaderController.Weather = (function($) {
    var attachEvents = function(){
        $('div.weather-dropdown').on('click', 'button.ChangeLocationBtn', function(e){
            e.preventDefault();
            
            var place = $('#weather-place-dropdown').val();
            if($.trim(place) === "") {
                alert("Please select a place to show its weather.");
                return;
            }
            var csrfToken = $('meta[name="csrf-token"]').attr("content");
            $.ajax({
                url: baseHttpPath + '/home/weather',
                type: 'post',
                data: {place: place, _csrf: csrfToken},
                dataType: 'json',
                success: function(data){

                    if(data.success) {
                        $('div.weather-widget').html(data.html);
                        $('li.dropdown-weather').html(data.htmlSmall);
                        $('li.dropdown-weather a').trigger('click');
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
    };
    
    return {
        init: function(){
            attachEvents();
        }
    };
}(jQuery));