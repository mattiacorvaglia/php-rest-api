<?php
/**
 * Foo resource handler
 *
 * @author     Mattia Corvaglia <corvagliamattia@gmail.com>
 * @see        http://www.mattiacorvaglia.com
 * @version    1.0.0
 * @since      1.0.0
 * @copyright  2017 Mattia Corvaglia All Rights Reserved.
 * @license    MIT
 */

require_once "../controllers/foo.php";
$foo = new Foo();

// -----------------------------------------------------------------------------
// RESTFul API Router
switch ($_SERVER['REQUEST_METHOD']) {
  // ---------------------------------------------------------------------------
  case "GET":
    $id = explode("foo/", $_SERVER['REQUEST_URI']);
    if (isset($id[1])) {
      $result = $foo->get($id[1]);
    } else {
      $result = $foo->read();
    }
    break;
  // ---------------------------------------------------------------------------
  case "POST":
    if (!isset($_POST) || empty($_POST)) {
      http_response_code(400);
      $result = array(
        'error_code' => 11,
        'error_desc' => 'data not received.'
      );
      $json = json_encode($result);
      echo $json;
      exit;
    }
    $result = $foo->create($_POST);
    break;
  // ---------------------------------------------------------------------------
  case "PUT":
    $data = json_decode(file_get_contents("php://input"), true);
    if (!isset($data) || empty($data)) {
      http_response_code(400);
      $result = array(
        'error_code' => 11,
        'error_desc' => 'data not received.'
      );
      $json = json_encode($result);
      echo $json;
      exit;
    }
    $id = explode("foo/", $_SERVER['REQUEST_URI']);
    if (!isset($id[1])) {
      http_response_code(400);
      $result = array(
        'error_code' => 12,
        'error_desc' => 'Id not received.'
      );
      $json = json_encode($result);
      echo $json;
      exit;
    }
    $result = $foo->update($id[1], $data);
    break;
  // ---------------------------------------------------------------------------
  case "DELETE":
    $id = explode("foo/", $_SERVER['REQUEST_URI']);
    if (isset($id[1])) {
      $result = $foo->delete($id[1]);
    } else {
      http_response_code(400);
      $result = array(
        'error_code' => 10,
        'error_desc' => 'Id not received.'
      );
      $json = json_encode($result);
      echo $json;
      exit;
    }
    break;
  // ---------------------------------------------------------------------------
  // Respond to preflights
  case "OPTIONS":
    header('Access-Control-Allow-Origin: *'); // Enable CORS
    header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
    header('Access-Control-Allow-Headers: Origin, Content-Type');
    http_response_code(200);
    exit;
    break;
  // ---------------------------------------------------------------------------
  default:
    http_response_code(405);
    exit;
    break;
}
// -----------------------------------------------------------------------------
// Set the headers
header('Access-Control-Allow-Origin: *'); // Enable CORS
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, Content-Type');
header('Content-type: application/json'); // Response format

// Return JSON response
http_response_code(200);
$json = json_encode($result);
echo $json;
exit;

?>
