<?php require "functions/functions.php" ?>
<!DOCTYPE html>
<!--[if lte IE 7]>
<html class="ie ie7" lang="en-US">
<![endif]-->
<!--[if IE 8]>
<html class="ie ie8" lang="en-US">
<![endif]-->
<!--[if gt IE 8]>
<html class="ie" lang="en-US">
<![endif]-->
<!--[if !(IE 7) & !(IE 8)]><!-->
<html lang="en-US">
<!--<![endif]-->

<head>
  <meta charset="UTF-8" />
  <title>Field & Game</title>

  <meta name="viewport" content="width=device-width, initial-scale=1">

  <?php require "partials/_favicon.php" ?>

  <!--[if lte IE 8]><script type="text/javascript" src="ie.js"></script><![endif]-->

  <link href='https://fonts.googleapis.com/css?family=Playfair+Display:700,700italic,400' rel='stylesheet' type='text/css'>
  <link rel="stylesheet" href="index.css" type="text/css" media="all">

  <!-- <script type="text/javascript" src="/index.js"></script> -->

  <script type="text/javascript" src="js/jquery-1.11.3.min.js"></script>
  <script type="text/javascript" src="js/jquery.bigslide.min.js"></script>
  <script type="text/javascript" src="js/jquery.dotdotdot.js"></script>
  <script type="text/javascript" src="js/jquery.dropit.js"></script>
  <script type="text/javascript" src="js/jquery.lazy-load-google-maps.js"></script>
  <script type="text/javascript" src="js/jquery.simplemodal2.js"></script>
  <script type="text/javascript" src="js/jquery.slick.min.js"></script>
  <script type="text/javascript" src="js/jquery.slider.js"></script>
  <script type="text/javascript" src="js/jquery.tabs.js"></script>
  <script type="text/javascript" src="js/application.js"></script>
</head>

<body class="body">
  <header class="header">
    <?php require "partials/_header-navigation.php" ?>
    <?php require "partials/_side-navigation.php" ?>

    <div class="header__heading">
      <div class="header__heading-container">
        <div class="header__heading--right">
          <span href="#" class="header__heading-text">Welcome back, <strong>Charlie</strong></span>
          <a href="#" class="header__heading-link header__heading-link--profile" id="profile">
            <div class="header__heading-link--profile-image" style="background-image: url(images/data/avatar-02.jpg)"></div>
          </a>
          <a href="#" class="header__heading-link header__heading-link--responsive"></a>
        </div>
        <?php require "partials/_profile.php" ?>
      </div>
    </div>
  </header>

  <?php require "partials/_login-form.php" ?>
