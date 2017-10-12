<?php require "partials/_header-signup.php" ?>

<div class="membership">
  <h1 class="membership__heading">Membership signup</h1>

  <div class="membership__progress">
    <div class="membership__progress-completion membership__progress-completion--3"></div>
    <a href="membership-signup-01.php" class="membership__progress-item membership__progress-item--complete">Member type</a>
    <a href="membership-signup-03.php" class="membership__progress-item membership__progress-item--complete">Branch</a>
    <a href="membership-signup-04.php" class="membership__progress-item membership__progress-item--current">Personal</a>
    <a href="membership-signup-05.php" class="membership__progress-item">Contact</a>
    <a href="membership-signup-06.php" class="membership__progress-item">Firearm</a>
  </div>

  <div class="membership__form">
    <div class="membership__label">Personal Information</div>

    <div class="membership__inputs">
      <div class="membership__form-row">
        <div class="membership__input">
          <div class="membership__input-button membership__input-button--facebook">Connect with Facebook</div>
        </div>
        <div class="membership__input">
          <div class="membership__input-button membership__input-button--google-plus">Connect with Google +</div>
        </div>
      </div>
      <div class="membership__form-row">
        <div class="membership__input">
          <select class="membership__input-select">
            <option>Select your Branch</option>
          </select>
        </div>
        <div class="membership__input">
          <input placeholder="Full Name" type="text" class="membership__input-text" />
        </div>
      </div>
      <div class="membership__form-row">
        <div class="membership__input">
          <input placeholder="Postal Address" type="text" class="membership__input-text" />
        </div>
        <div class="membership__input">
          <input placeholder="Postcode" type="text" class="membership__input-text" />
        </div>
      </div>


    </div>
    <div class="membership__form-footer">
      <a href="membership-signup-03.php" class="button button--back">back</a>
      <a href="membership-signup-05.php" class="button">next</a>
    </div>
  </div>
</div>

<?php require "partials/_footer.php" ?>