<?php require "partials/_header.php" ?>
<?php require "partials/_sub_header-event-list.php" ?>

<div class="event-list">
  <div class="event-list__navigation">
    <div class="event-list__arrows">
      <a href="#" class="event-list__arrow event-list__arrow--previous"></a>
      <a href="#" class="event-list__arrow event-list__arrow--next"></a>
    </div>
    <div class="event-list__months">
      <a href="#" class="event-list__month event-list__month--current">JUL</a>
      <a href="#" class="event-list__month">AUG</a>
      <a href="#" class="event-list__month">SEP</a>
      <a href="#" class="event-list__month">OCT</a>
      <a href="#" class="event-list__month">NOV</a>
      <a href="#" class="event-list__month">DEC</a>
      <span href="#" class="event-list__year">2016</span>
      <a href="#" class="event-list__month">JAN</a>
      <a href="#" class="event-list__month">FEB</a>
      <a href="#" class="event-list__month">MAR</a>
      <a href="#" class="event-list__month">APR</a>
    </div>
  </div>
  <div class="event-list__items">
    <?php require "partials/_event-list-item.php" ?>
    <?php require "partials/_event-list-item.php" ?>
    <?php require "partials/_event-list-item.php" ?>
    <?php require "partials/_event-list-item.php" ?>
  </div>
</div>

<?php require "partials/_footer.php" ?>