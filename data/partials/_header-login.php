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
  <title>Local News</title>

  <meta name="viewport" content="width=device-width, initial-scale=1">

  <?php require "partials/_favicon.php" ?>

  <!-- Country News Stylesheet -->
  <!-- <link rel="stylesheet" href="http://ww2.countrynews.com.au/resources/countrynews/resources/deploy/all.min.css"> -->

  <!-- Country News Javascript -->
  <!-- <script type="text/javascript" src="http://ww2.countrynews.com.au/resources/countrynews/resources/deploy/plugins.min.js?time=2015121501"></script>
  <script type="text/javascript" src="http://ww2.countrynews.com.au/resources/countrynews/resources/deploy/app.min.js?time=2015121501"></script>
   -->

  <!--[if lte IE 8]><script type="text/javascript" src="ie.js"></script><![endif]-->

  <link href='https://fonts.googleapis.com/css?family=Montserrat:400,700' rel='stylesheet' type='text/css'>
  <link rel="stylesheet" href="index.css" type="text/css" media="all">

  <!-- <script type="text/javascript" src="/index.js"></script> -->
  <script type="text/javascript" src="js/jquery-1.11.3.min.js"></script>
  <script type="text/javascript" src="js/jquery.bigslide.min.js"></script>
  <script type="text/javascript" src="js/jquery.dotdotdot.js"></script>
  <script type="text/javascript" src="js/jquery.dropit.js"></script>
  <script type="text/javascript" src="js/jquery.lazy-load-google-maps.js"></script>
  <script type="text/javascript" src="js/jquery.simplemodal.min.js"></script>
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
        <div class="header__heading--left">
          <a class="header__heading-logo" href="#" style="background-image: url(images/logo.png)"></a>
          <a class="header__heading-menu" href="#" id="news-outlets"></a>
        </div>
        <div class="header__heading--right">
          <a href="#" class="header__heading-link header__heading-link--search" id="search"></a>
          <a href="#" class="header__heading-link" id="login">Login</a>
          <a href="#" class="header__heading-link header__heading-link--button" id="signup">Sign Up</a>
          <a href="#" class="header__heading-link header__heading-link--responsive"></a>
        </div>
        <?php require "partials/search.php" ?>
        <?php require "partials/profile.php" ?>
      </div>
    </div>
    <?php require "partials/_sub_header-news-outlets.php" ?>
  </header>

  <?php require "login-form.php" ?>
