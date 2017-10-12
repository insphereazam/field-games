<?php require "partials/_header-signup.php" ?>

<div class="membership">
  <h1 class="membership__heading">Membership signup</h1>

  <div class="membership__progress">
    <div href="#" class="membership__progress-completion membership__progress-completion--1"></div>
    <a href="membership-signup-01.php" class="membership__progress-item membership__progress-item--current">Member type</a>
    <a href="membership-signup-03.php" class="membership__progress-item">Branch</a>
    <a href="membership-signup-04.php" class="membership__progress-item">Personal</a>
    <a href="membership-signup-05.php" class="membership__progress-item">Contact</a>
    <a href="membership-signup-06.php" class="membership__progress-item">Firearm</a>
  </div>

  <div class="membership__form">
    <div class="membership__label">Member Type</div>

    <div class="membership__inputs">
      <div class="membership__form-row">
        <div class="membership__input">
          <div class="membership__input-button">Additional Family (Spouse of Child U18)</div>
        </div>
        <div class="membership__input">
          <div class="membership__input-button">Student (U25 - Proof must be provided)</div>
        </div>
      </div>
      <div class="membership__form-row">
        <div class="membership__input">
          <div class="membership__input-button">Junior (U18)</div>
        </div>
        <div class="membership__input">
          <div class="membership__input-button">Pensioner (Proof must be provided)</div>
        </div>
      </div>
      <div class="membership__form-row">
        <div class="membership__input">
          <div class="membership__input-button">Adult</div>
        </div>
        <div class="membership__input">
          <div class="membership__input-button">Super Junior (U12)</div>
        </div>
      </div>
    </div>
    <div class="membership__form-footer">
      <a href="membership-signup-02.php" class="button">next</a>
    </div>
  </div>
</div>

<?php require "partials/_footer.php" ?>