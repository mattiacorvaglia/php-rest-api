<?php
/**
 * @author Mattia Corvaglia <corvagliamattia@gmail.com>
 * @link http://mattiacorvaglia.com
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
