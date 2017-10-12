<?php require "partials/_header.php" ?>

<div class="membership">
  <h1 class="membership__heading">Membership signup</h1>

  <div class="membership__progress">
    <div class="membership__progress-completion membership__progress-completion--2"></div>
    <div class="membership__progress-item membership__progress-item--complete">Member type</div>
    <div class="membership__progress-item membership__progress-item--complete">Branch</div>
    <div class="membership__progress-item">Personal</div>
    <div class="membership__progress-item">Contact</div>
    <div class="membership__progress-item">Firearm</div>
  </div>

  <div class="membership__form">
    <div class="membership__label">Member Type</div>

    <div class="membership__inputs">
      <div class="membership__form-row">
        <div class="membership__input">Additional Family (Spouse of Child U18)</div>
        <div class="membership__input">Student (U25 - Proof must be provided)</div>
      </div>
      <div class="membership__form-row">
        <div class="membership__input">Junior (U18)</div>
        <div class="membership__input">Pensioner (Proof must be provided)</div>
      </div>
      <div class="membership__form-row">
        <div class="membership__input">Adult</div>
        <div class="membership__input">Super Junior (U12)</div>
      </div>
    </div>
    <div class="membership__form-footer">
      <div class="button">next</div>
    </div>
  </div>
</div>

<?php require "partials/_footer.php" ?>