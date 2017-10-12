<?php require "partials/_header-signup.php" ?>

<div class="membership">
  <h1 class="membership__heading">Membership signup</h1>

  <div class="membership__progress">
    <div class="membership__progress-completion membership__progress-completion--2"></div>
    <a href="membership-signup-01.php" class="membership__progress-item membership__progress-item--complete">Member type</a>
    <a href="membership-signup-03.php" class="membership__progress-item membership__progress-item--current">Branch</a>
    <a href="membership-signup-04.php" class="membership__progress-item">Personal</a>
    <a href="membership-signup-05.php" class="membership__progress-item">Contact</a>
    <a href="membership-signup-06.php" class="membership__progress-item">Firearm</a>
  </div>

  <div class="membership__form">
    <div class="membership__label">Your Branch</div>

    <div class="membership__inputs">
      <select class="membership__input-select">
        <option>Select your Branch</option>
      </select>
      <select class="membership__input-select">
        <option>Select your reasons for joining Field & Game</option>
      </select>

    </div>
    <div class="membership__form-footer">
      <a href="membership-signup-02.php" class="button button--back">back</a>
      <a href="membership-signup-04.php" class="button">next</a>
    </div>
  </div>
</div>

<?php require "partials/_footer.php" ?>