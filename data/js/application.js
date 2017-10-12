$(document).ready(function() {
  $(".header__navigation-link--responsive").bigSlide({
    menu: ".side-navigation",
    menuWidth: $(window).width() < 480 ? "260px" : "400px",
    easyClose: true,
    side: "right",
    activeBtn: "header__navigation-link--close",
    beforeOpen: function() {
      return $(this.menu).css("visibility", "visible");
    },
    afterClose: function() {
      return $(this.menu).css("visibility", "hidden");
    }
  });
  $("#search").on("click", function(e) {
    var $container;
    e.preventDefault();
    $container = $(".header__search").fadeIn(100);
    return $container.find(".header__search-text").focus();
  });
  $(".header__search-close").on("click", function(e) {
    e.preventDefault();
    return $(this).parents(".header__search").hide();
  });
  $(".header__regions-list").dropit({
    action: "mouseenter"
  });
  $("#profile, #profile-responsive").on("click", function(e) {
    e.preventDefault();
    return $("#header__menu").simplemodal({
      modal: true,
      overlayClose: true,
      opacity: 0.9,
      fixed: false,
      zIndex: 11010,
      closeHTML: "",
      autoPosition: false,
      onShow: function(object) {
        var header;
        header = $("header").height();
        return $(object.container).css("top", header + "px");
      }
    });
  });
  $(".tabs").tabs();
  /**
  $("#map").lazyLoadGoogleMaps({
    callback: function(container, map) {
      var $center, $container, $map;
      $container = $(container);
      $map = map;
      $center = new google.maps.LatLng($container.attr("data-lat"), $container.attr("data-lng"));
      $map.setOptions({
        zoom: 15,
        center: $center
      });
      return new google.maps.Marker({
        position: $center,
        map: $map
      });
    }
  });
  **/
  $(".slides").slick({
    prevArrow: '<a href="#" class="slick-prev">Prev</a>',
    nextArrow: '<a href="#" class="slick-next">Next</a>',
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 3000,
    draggable: false,
    slidesToShow: 1,
    dots: false,
    customPaging: function(slider, i) {
      var img_src;
      img_src = $(slider.$slides[i]).data("thumbnail");
      return "<button type='button' data-role='none' style='background-image: url(" + img_src + ")'></button>";
    }
  });
  $("#accordion-button").on("click", function(e) {
    e.preventDefault();
    return $("#accordion").slideToggle();
  });
  $(".card p.card__text").each(function() {
    var content_height, event_height, text_position;
    content_height = $(this).parent(".card__content").height();
    text_position = $(this).position().top;
    event_height = $(this).siblings(".card__event") ? $(this).siblings(".card__event").outerHeight() : 0;
    return $(this).height(content_height - event_height - text_position);
  });
  $(".card p, .card h1").dotdotdot();
  return $(window).resize(function() {
    return $(".card p, .card h1").dotdotdot();
  });
});
