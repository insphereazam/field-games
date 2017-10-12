<?php
/**
 * General helpers
 *
 * @package utilities
 */


/**
 * Output the contents of a variable in a readable format
 *
 * @param object $value The value to output
 */
function o($value) {
  echo "<pre>";
  print_r($value);
  echo "</pre>";
  // var_dump($value);
}


/**
 *
 */
function strip($text) {
  $text = preg_replace('/\s+/', ' ', $text);

  return $text;
}


/**
 *
 */
function slugify($text) {
  // replace non letter or digits by -
  $text = preg_replace('~[^\\pL\d]+~u', '-', $text);

  // trim
  $text = trim($text, '-');

  // transliterate
  $text = iconv('utf-8', 'us-ascii//TRANSLIT', $text);

  // lowercase
  $text = strtolower($text);

  // remove unwanted characters
  $text = preg_replace('~[^-\w]+~', '', $text);

  if (empty($text))
  {
    return 'n-a';
  }

  return $text;
}


/**
 * Determines whether an array is associative or numeric
 *
 * @param array $arr The array to test
 */
function is_assoc($arr) {
  return array_keys($arr) !== range(0, count($arr) - 1);
}


/**
 * Return the HTML template of the navigation
 *
 * @todo this function is incomplete
 */
function get_navigation($class_name = "") {
  $menu = array(
    "News",
    "Sport",
    "Education",
    "Opinion",
    "Entertainment",
    "Lifestyle",
    "Cars",
    "Property",
    "Events");


  $return = "
  <ul class='$class_name'>
    <li class='header__navigation-item'><a href='#' class='header__navigation-link'>News</a></li>
    <li class='header__navigation-item'><a href='#' class='header__navigation-link header__navigation-selected'>Hunting</a></li>
    <li class='header__navigation-item'><a href='#' class='header__navigation-link'>Education</a></li>
    <li class='header__navigation-item'><a href='#' class='header__navigation-link'>Opinion</a></li>
    <li class='header__navigation-item'><a href='#' class='header__navigation-link'>Entertainment</a></li>
    <li class='header__navigation-item'><a href='#' class='header__navigation-link'>Lifestyle</a></li>
    <li class='header__navigation-item'><a href='#' class='header__navigation-link'>Cars</a></li>
    <li class='header__navigation-item'><a href='#' class='header__navigation-link'>Property</a></li>
    <li class='header__navigation-item'><a href='#' class='header__navigation-link'>Events</a></li>
  </ul>";

  return $return;
}


/**
 * Output the HTML template of the navigation
 *
 * @todo this function is incomplete
 */
          // %ul.nav.navbar-nav

function navigation($class_name = "") {
  echo get_navigation($class_name);
}
