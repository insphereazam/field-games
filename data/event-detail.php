<?php require "partials/_header.php" ?>
<?php require "partials/_sub_header-event.php" ?>
<div class="event-detail">
  <div class="row">
    <div class="event-detail__header">
      <div class="event-detail--left">
        <h1 class="event-detail__heading">Event Title</h1>
      </div>
      <div class="event-detail--right">
        <a href="#" class="event-detail__button">+ Add to personal calendar</a>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="event-detail__main">
      <div class="event-detail__map">
        <div class="event-detail__map-content" id="map" data-lat="-33.8674196" data-lng="151.2074355"></div>
      </div>
    </div>
    <div class="event-detail__sidebar">
      <a href="#" class="event-detail__card event-detail__card-link">Add to my events</a>
      <div class="event-detail__card event-detail__card--date">24 november, 2015</div>
      <div class="event-detail__card event-detail__card--time">12:00 - 16:00</div>
      <div class="event-detail__card event-detail__card--location">melbourne, australia</div>
    </div>
  </div>
  <div class="row">

    <div class="event-detail__main">
      <div class="event-detail__content">

        <p>Fusce vel justo magna. Etiam orci mi, pharetra eu aliquam sit amet, dapibus vitae sapien. Pellentesque eget sapien felis. Cras eleifend massa at mauris suscipit dictum. Mauris auctor eget leo a fringilla. Aliquam erat volutpat. Nullam vel justo magna rutrum ut eros at lacinia.  </p>
        <p>Fusce vel justo magna. Etiam orci mi, pharetra eu aliquam sit amet, dapibus vitae sapien. Pellentesque eget sapien felis. Cras eleifend massa at mauris suscipit dictum. Mauris auctor eget leo a fringilla. Aliquam erat volutpat. Nullam vel justo magna rutrum ut eros at lacinia.  </p>

        <img width="100%" src="images/data/article-12.jpg">
      </div>
      <div class="news__social news__social--horizontal">
        <a href="#" class="news__social-link news__social-link--facebook">Share</a>
        <a href="#" class="news__social-link news__social-link--twitter">Share</a>
        <a href="#" class="news__social-link news__social-link--google-plus">Share</a>
        <a href="#" class="news__social-link news__social-link--mail">145 Likes</a>
        <a href="#" class="news__social-link news__social-link--comments">23 Comments</a>
      </div>
    </div>
    <div class="event-detail__sidebar">
      <?php require "partials/cards/_announcement-06.php" ?>
      <?php require "partials/cards/_header-02.php" ?>
      <?php require "partials/cards/_event-01.php" ?>
      <?php require "partials/cards/_event-01.php" ?>
      <?php require "partials/cards/_event-01.php" ?>
    </div>
  </div>



</div>
<?php require "partials/_footer.php" ?>