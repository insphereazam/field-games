<?php require "partials/_header-signup.php" ?>

<div class="membership">
  <h1 class="membership__heading">Membership signup</h1>

  <div class="membership__progress">
    <div class="membership__progress-completion membership__progress-completion--1"></div>
    <a href="membership-signup-01.php" class="membership__progress-item membership__progress-item--current">Member type</a>
    <a href="membership-signup-03.php" class="membership__progress-item">Branch</a>
    <a href="membership-signup-04.php" class="membership__progress-item">Personal</a>
    <a href="membership-signup-05.php" class="membership__progress-item">Contact</a>
    <a href="membership-signup-06.php" class="membership__progress-item">Firearm</a>
  </div>

  <div class="membership__form">
    <div class="membership__label">Additional Family</div>

    <p>You must have the primary membership number of the account you wish to be added to in order to proceed.</p>

    <div class="membership__inputs">
      <input placeholder="Primary Membership no." type="text" class="membership__input-text" />
    </div>
    <div class="membership__form-footer">
      <a href="membership-signup-01.php" class="button button--back">back</a>
      <a href="membership-signup-03.php" class="button">next</a>
    </div>
  </div>
</div>

<?php require "partials/_footer.php" ?>