console.log("Sanity Check: JS is working!");

$(document).ready(function(){

  // code in here
  $.ajax({
   method: 'GET',
   url: 'http://localhost:3000/api/albums',
   success: handleSuccess,
   error: handleError
 });
$.ajax({
  method: "GET",
  url: "/api/taquerias",
  success: onSuccess
});
function onSuccess(json){
  var output = '<ul>';
  json.forEach(function(data) {
    output = output + "<li>" + data.name + "</li>" ;
    console.log (output);
  });
  output += '</ul>';
  $('#taquerias').html(output);
}
 function handleSuccess(responseData) {
   console.log(responseData);
   // takes an array of albums and renders them as an unordered list
  // var albums = responseData;
   var output = '<ul>';
   responseData.forEach(function(album) {
     output = output + "<li>" + album.artist + " -- " + album.title + "</li>" ;
     console.log (output);
   });
   output += '</ul>';
   $('#data').html(output);
 }

 function handleError(xhr, status, errorThrown) {
   console.log('uh oh');
 }

});
