<?php
/**
 * Database connection handler
 *
 * @author     Mattia Corvaglia <corvagliamattia@gmail.com>
 * @see        http://www.mattiacorvaglia.com
 * @version    1.0.0
 * @since      1.0.0
 * @copyright  2017 Mattia Corvaglia All Rights Reserved.
 * @license    MIT
 */

//------------------------------------------------------------------------------
// Connect to the database
function db_connect() {

  // Define connection as a static variable, to avoid connecting more than once
  static $conn;

  if (!isset($conn)) {
    // mysqli_connect(HOST, USERNAME, PASSWORD, SCHEMA)
    $conn = mysqli_connect('localhost', 'root', 'root', 'foo');
  }

  // Handle the errors
  if ($conn === false) {
    return 'Database connection error ('.mysqli_connect_errno().') '.mysqli_connect_error();
  }
  if (!mysqli_set_charset($conn, 'utf8')) {
    return 'An error occurred while loading charset utf8: '.mysqli_error($conn);
  }

  return $conn;

}
?>
