<?php require "partials/_header-signup.php" ?>

<div class="membership">
  <h1 class="membership__heading">Membership signup</h1>

  <div class="membership__progress">
    <div class="membership__progress-completion membership__progress-completion--5"></div>
    <a href="membership-signup-01.php" class="membership__progress-item membership__progress-item--complete">Member type</a>
    <a href="membership-signup-03.php" class="membership__progress-item membership__progress-item--complete">Branch</a>
    <a href="membership-signup-04.php" class="membership__progress-item membership__progress-item--complete">Personal</a>
    <a href="membership-signup-05.php" class="membership__progress-item membership__progress-item--complete">Contact</a>
    <a href="membership-signup-06.php" class="membership__progress-item membership__progress-item--current">Firearm</a>
  </div>

  <div class="membership__form">
    <div class="membership__label">Firearm Details</div>

    <div class="membership__inputs">
      <div class="membership__form-row">
        <div class="membership__input">
          <select class="membership__input-select">
            <option>Firearm Make</option>
          </select>
        </div>
        <div class="membership__input">
          <select class="membership__input-select">
            <option>Firearm Model</option>
          </select>
        </div>
      </div>
      <div class="membership__form-row">
        <div class="membership__input">
          <select class="membership__input-select">
            <option>Firearm Calibre</option>
          </select>
        </div>
        <div class="membership__input">
          <input placeholder="Serial no." type="text" class="membership__input-text" />
        </div>
      </div>

      <input placeholder="Want to add another firearm?" type="text" class="membership__input-text" />
    </div>
    <div class="membership__form-footer">
      <a href="membership-signup-05.php" class="button button--back">back</a>
      <a href="membership-signup-07.php" class="button">complete</a>
    </div>
  </div>
</div>

<?php require "partials/_footer.php" ?>