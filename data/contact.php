<?php require "partials/_header.php" ?>
<div class="contact">
  <div class="contact__map">
    <div id="map" data-lat="-33.8674196" data-lng="151.2074355"></div>
  </div>

  <div class="contact__details">
    <div class="container">
      <div class="contact__details-col">
        <label class="contact__details-label">Phone:</label>
        <strong class="contact__details-value">03 5799 0960</strong>
      </div>
      <div class="contact__details-col">
        <label class="contact__details-label">Address:</label>
        <strong class="contact__details-value">65, Anzac Avenue, Seymour, VIC, 3660</strong>
      </div>
      <div class="contact__details-col">
        <label class="contact__details-label">Postal:</label>
        <strong class="contact__details-value">PO Box, 464, Seymour, VIC, 3660</strong>
      </div>
    </div>
  </div>

  <div class="contact__container">
    <div class="contact__main">
      <h1 class="contact__heading">Get in Touch</h1>

      <p>Fusce vel justo magna. Etiam orci mi, pharetra eu aliquam sit amet, dapibus vitae sapien. Pellentesque eget sapien felis.</p>

      <form class="contact__form">
        <input type="text" class="input__text" placeholder="Full name" />
        <input type="text" class="input__text" placeholder="Phone no." />
        <input type="text" class="input__text" placeholder="Email" />
        <input type="text" class="input__text" placeholder="Enquiry" />
        <textarea class="input__textarea" placeholder="Message"></textarea>

        <div class="form__footer">
          <input type="submit" class="form__button" value="send" />
        </div>
      </form>
    </div>
    <div class="contact__sidebar">
      <h1 class="contact__heading">Contacts</h1>
      <a href="#" class="contact__card">
        <div class="contact__card-avatar" style="background-image:url(images/data/avatar-01.jpg);"></div>
        <div class="contact__card-name">David McNabb</div>
        <div class="contact__card-title">General manager</div>
        <div class="contact__card-mail"></div>
      </a>
      <a href="#" class="contact__card">
        <div class="contact__card-avatar" style="background-image:url(images/data/avatar-02.jpg);"></div>
        <div class="contact__card-name">Rod Drew</div>
        <div class="contact__card-title">Director of policy & external relations</div>
        <div class="contact__card-mail"></div>
      </a>
      <a href="#" class="contact__card">
        <div class="contact__card-avatar" style="background-image:url(images/data/avatar-03.jpg);"></div>
        <div class="contact__card-name">Daryl Snowdon</div>
        <div class="contact__card-title">Development manager</div>
        <div class="contact__card-mail"></div>
      </a>
      <a href="#" class="contact__card">
        <div class="contact__card-avatar" style="background-image:url(images/data/avatar-04.jpg);"></div>
        <div class="contact__card-name">Alison O’Connor</div>
        <div class="contact__card-title">Communications officer</div>
        <div class="contact__card-mail"></div>
      </a>
      <a href="#" class="contact__card">
        <div class="contact__card-avatar" style="background-image:url(images/data/avatar-05.jpg);"></div>
        <div class="contact__card-name">Rachel Berry</div>
        <div class="contact__card-title">Communications officer</div>
        <div class="contact__card-mail"></div>
      </a>
      <a href="#" class="contact__card">
        <div class="contact__card-avatar" style="background-image:url(images/data/avatar-01.jpg);"></div>
        <div class="contact__card-name">Noreen Sloan</div>
        <div class="contact__card-title">Finance & operations administrator</div>
        <div class="contact__card-mail"></div>
      </a>
      <a href="#" class="contact__card">
        <div class="contact__card-avatar" style="background-image:url(images/data/avatar-02.jpg);"></div>
        <div class="contact__card-name">Lauri Rowe & Shelley Gough</div>
        <div class="contact__card-title">Membership offices</div>
        <div class="contact__card-mail"></div>
      </a>
    </div>
  </div>
</div>
<?php require "partials/_footer.php" ?>