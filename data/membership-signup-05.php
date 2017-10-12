<?php require "partials/_header-signup.php" ?>

<div class="membership">
  <h1 class="membership__heading">Membership signup</h1>

  <div class="membership__progress">
    <div class="membership__progress-completion membership__progress-completion--4"></div>
    <a href="membership-signup-01.php" class="membership__progress-item membership__progress-item--complete">Member type</a>
    <a href="membership-signup-03.php" class="membership__progress-item membership__progress-item--complete">Branch</a>
    <a href="membership-signup-04.php" class="membership__progress-item membership__progress-item--complete">Personal</a>
    <a href="membership-signup-05.php" class="membership__progress-item membership__progress-item--current">Contact</a>
    <a href="membership-signup-06.php" class="membership__progress-item">Firearm</a>
  </div>

  <div class="membership__form">
    <div class="membership__label">Contact Details</div>

    <div class="membership__inputs">
      <div class="membership__form-row">
        <div class="membership__input">
          <input placeholder="Phone no." type="text" class="membership__input-text" />
        </div>
        <div class="membership__input">
          <input placeholder="Email" type="text" class="membership__input-text" />
        </div>
      </div>
      <div class="membership__form-row">
        <div class="membership__input">
          <input placeholder="Date of Birth" type="date" class="membership__input-text" />
        </div>
        <div class="membership__input">
          <input placeholder="Occupation" type="text" class="membership__input-text" />
        </div>
      </div>
    </div>
    <div class="membership__form-footer">
      <a href="membership-signup-04.php" class="button button--back">back</a>
      <a href="membership-signup-06.php" class="button">next</a>
    </div>
  </div>
</div>

<?php require "partials/_footer.php" ?>