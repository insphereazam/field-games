<?php require "partials/_header-logged-out.php" ?>

<div class="banner" style="background-image:url(images/data/article-31.jpg);">
  <div class="banner__content">
    <img src="images/logo.png" width="200">

    <h1 class="banner__heading">Australia’s most surprising conservationists</h1>

    <a href="#" class="banner__button">see our membership benefits</a>
  </div>
</div>

<div class="banner__row">
  <a href="#" class="banner__col" style="background-image:url(images/data/article-34.jpg);">
    <h2 class="banner__sub-heading">Conservation</h2>
  </a>
  <a href="#" class="banner__col" style="background-image:url(images/data/article-32.jpg);">
    <h2 class="banner__sub-heading">Hunting</h2>
  </a>
  <a href="#" class="banner__col" style="background-image:url(images/data/article-33.jpg);">
    <h2 class="banner__sub-heading">Clay Target</h2>
  </a>
</div>

<div class="section section--hunting">
  <div class="section__content">
    <div class="row">
      <div class="col-two-thirds">
        <h2 class="section__heading">Latest News</h2>
      </div>
      <div class="col-third">
        <h2 class="section__heading">Events</h2>
      </div>
    </div>
    <div class="row">
      <div class="col-third"><?php require "partials/cards/_news-07.php" ?></div>
      <div class="col-third"><?php require "partials/cards/_news-09.php" ?></div>
      <div class="col-third-short">
        <?php require "partials/cards/_event-03.php" ?>
        <?php require "partials/cards/_event-03.php" ?>
        <?php require "partials/cards/_event-03.php" ?>
      </div>
      <div class="col-third"><?php require "partials/cards/_twitter-04.php" ?></div>
      <div class="col-third"><?php require "partials/cards/_news-06.php" ?></div>
      <div class="col-third"><?php require "partials/cards/_youtube-02.php" ?></div>
    </div>
    <div class="row">
      <div class="col-third"><?php require "partials/cards/_news-07.php" ?></div>
      <div class="col-third"><?php require "partials/cards/_facebook-02.php" ?></div>
      <div class="col-third"><?php require "partials/cards/_instagram-02.php" ?></div>
    </div>
  </div>
</div>
<div class="section section--feature" style="background-image:url(images/data/article-35.jpg);">
  <div class="section__content">
    <div class="row">
      <div class="col-two-thirds">
        <h2 class="section__heading section__heading--feature">Field & Game Magazine</h2>
      </div>
      <div class="col-third">
        <a href="#" class="section__heading section__heading--link">Access Premium content</a>
      </div>
    </div>
    <div class="row">
      <div class="col-half"><?php require "partials/cards/_feature-01.php" ?></div>
      <div class="col-half"><?php require "partials/cards/_feature-02.php" ?></div>
    </div>
  </div>
</div>

<div class="section">
  <div class="section__content">
    <div class="row">
      <div class="section__text">
        <h2>About Field & Game</h2>
        <p>Fusce vel justo magna. Etiam orci mi, pharetra eu aliquam sit amet, dapibus vitae sapien. Pellentesque eget sapien felis. Cras eleifend massa at mauris suscipit dictum. Mauris auctor eget leo a fringilla. Fusce vel justo magna.</p>
        <a href="#">Learn more about us</a>
      </div>
      <div class="section__text">
        <h2>Education</h2>
        <p>Fusce vel justo magna. Etiam orci mi, pharetra eu aliquam sit amet, dapibus vitae sapien. Pellentesque eget sapien felis. Cras eleifend massa at mauris suscipit dictum. Mauris auctor eget leo a fringilla. Fusce vel justo magna.</p>
        <a href="#">See where we can help </a>
      </div>
    </div>
  </div>
</div>

<div class="section section--update" style="background-image:url(images/data/article-35.jpg);">
  <div class="section__content">
    <h2 class="section__heading--update">Want the latest updates and events?</h2>
    <form class="form__subscribe">
      <input class="input__text--large" type="text" placeholder="Email address">
      <input class="button button--large" type="submit" value="Subscribe">
    </form>
  </div>
</div>


<?php require "partials/_footer-sponsors.php" ?>