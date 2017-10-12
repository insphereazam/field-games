<?php require "partials/_header-signup.php" ?>

<div class="membership">
  <h1 class="membership__heading">Member Area</h1>


  <div class="membership__form">
    <div class="membership__label">Login</div>

    <div class="membership__inputs">
      <div class="membership__form-row">
        <div class="membership__input">
          <input placeholder="Username" type="text" class="membership__input-text" />
        </div>
        <div class="membership__input">
          <input placeholder="Password" type="password" class="membership__input-text" />
        </div>
      </div>
    </div>
    <div class="membership__form-footer">
      <a href="/membership-signup-04.php" class="membership__form-footer-link">I’ve forgotten my password</a>
      <a href="/membership-signup-06.php" class="button">Login</a>
    </div>
  </div>

  <div class="membership__sign-up" style="background-image:url(images/data/membership-01.jpg);">
    <h1 class="membership__sign-up-heading">Access all areas</h1>

    <p class="membership__sign-up-text">
      Want to be a part of Field & Game?<br>
      <strong>Become a member today!</strong>
    </p>

    <form class="form__subscribe">
      <input class="membership__sign-up-input-text" type="text" placeholder="see our membership benefits">
      <input class="button button--large" type="submit" value="Sign up">
    </form>
  </div>

</div>


<?php require "partials/_footer.php" ?>