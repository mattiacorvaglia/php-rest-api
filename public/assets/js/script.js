/**
 * This is the main client code.
 *
 * @author     Mattia Corvaglia <corvagliamattia@gmail.com>
 * @see        http://www.mattiacorvaglia.com
 * @version    1.0.0
 * @since      1.0.0
 * @copyright  2017 Mattia Corvaglia All Rights Reserved.
 * @license    MIT
 */

// Wait for the DOM to be fully loaded
$(function() {

  // ---------------------------------------------------------------------------
  $('#get').click(function() {
    var resource = $('#resource').val();
    $.ajax({
      type: "GET",
      url: resource,
      dataType: "json"
    }).done(onSuccess).fail(onError);
  });
  // ---------------------------------------------------------------------------
  $('#getid').click(function() {
    var resource = $('#resource').val();
    $.ajax({
      type: "GET",
      url: resource+"/3",
      dataType: "json"
    }).done(onSuccess).fail(onError);
  });
  // ---------------------------------------------------------------------------
  $('#post').click(function() {
    var resource = $('#resource').val();
    $.ajax({
      type: "POST",
      url: resource,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8", // Outcoming
      dataType: "json", // Incoming
      data: {
        "name": "Linux",
        "comment": "rules."
      }
    }).done(onSuccess).fail(onError);
  });
  // ---------------------------------------------------------------------------
  $('#postwrong').click(function() {
    var resource = $('#resource').val();
    $.ajax({
      type: "POST",
      url: resource,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8", // Outcoming
      dataType: "json" // Incoming
    }).done(onSuccess).fail(onError);
  });
  // ---------------------------------------------------------------------------
  $('#put').click(function() {
    var resource = $('#resource').val();
    $.ajax({
      type: "PUT",
      url: resource+"/2",
      contentType: "application/json", // Outcoming
      dataType: "json", // Incoming
      data: JSON.stringify({
        "name": "Linux 2",
        "comment": "rules."
      })
    }).done(onSuccess).fail(onError);
  });
  // ---------------------------------------------------------------------------
  $('#putwrong').click(function() {
    var resource = $('#resource').val();
    $.ajax({
      type: "PUT",
      url: resource,
      dataType: "json"
    }).done(onSuccess).fail(onError);
  });
  // ---------------------------------------------------------------------------
  $('#delete').click(function() {
    var resource = $('#resource').val();
    $.ajax({
      type: "DELETE",
      url: resource+"/3",
      dataType: "json"
    }).done(onSuccess).fail(onError);
  });
  // ---------------------------------------------------------------------------
  $('#deletewrong').click(function() {
    var resource = $('#resource').val();
    $.ajax({
      type: "DELETE",
      url: resource,
      dataType: "json"
    }).done(onSuccess).fail(onError);
  });
  // ---------------------------------------------------------------------------
  $('#wrong').click(function() {
    var resource = $('#resource').val();
    $.ajax({
      type: "HEAD",
      url: resource,
      dataType: "json"
    }).done(onSuccess).fail(onError);
  });

});

// -----------------------------------------------------------------------------
function onSuccess(data, textStatus, jqXHR) {
  $('#res').html('<hr><h3>Request:</h3>'+
    '<dl class="dl-horizontal">'+
      '<dt>Method:</dt><dd><code>'+this.type+'</code></dd>'+
      '<dt>URL:</dt><dd><code>'+this.url+'</code></dd>'+
      '<dt>Content-Type:</dt><dd><code>'+this.contentType+'</code></dd>'+
      '<dt>Accepts:</dt><dd><code>application/json, text/javascript, */*; q=0.01</code></dd>'+
    '</dl>'+
    '<h3>Response:</h3>'+
    '<dl class="dl-horizontal">'+
      '<dt>Status Code:</dt><dd><code>'+jqXHR.status+'</code></dd>'+
      '<dt>Status Text:</dt><dd><code>'+jqXHR.statusText+'</code></dd>'+
      '<dt>Content-Type:</dt><dd><code>'+jqXHR.getResponseHeader('Content-Type')+'</code></dd>'+
    '</dl>'+
    '<h5>Response JSON:</h5><pre>'+JSON.stringify(jqXHR.responseJSON, null, 2)+'</pre>');
}
// -----------------------------------------------------------------------------
function onError(jqXHR, textStatus, errorThrown) {
  $('#res').html('<hr><h3>Request:</h3>'+
  '<dl class="dl-horizontal">'+
    '<dt>Method:</dt><dd><code>'+this.type+'</code></dd>'+
    '<dt>URL:</dt><dd><code>'+this.url+'</code></dd>'+
    '<dt>Content-Type:</dt><dd><code>'+this.contentType+'</code></dd>'+
    '<dt>Accepts:</dt><dd><code>application/json, text/javascript, */*; q=0.01</code></dd>'+
  '</dl>'+
  '<h3>Response:</h3>'+
  '<dl class="dl-horizontal">'+
    '<dt>Status Code:</dt><dd><code>'+jqXHR.status+'</code></dd>'+
    '<dt>Status Text:</dt><dd><code>'+jqXHR.statusText+'</code></dd>'+
    '<dt>Content-Type:</dt><dd><code>'+jqXHR.getResponseHeader('Content-Type')+'</code></dd>'+
  '</dl>'+
  '<h5>Response JSON:</h5><pre>'+JSON.stringify(jqXHR.responseJSON, null, 2)+'</pre>');
}
