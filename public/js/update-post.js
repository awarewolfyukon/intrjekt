$(function() {

// Load from url
  var fileLocation = '/audio/CarbonFootprint.wav'
  wavesurfer.load(fileLocation)

//   // post = { 2: 'What the f**k is goin on in this podcast??', 9: 'Not really..', 18: "That's cruelty to animals.", 25: 'Yum, badger burgers!!', 28: 'Noo. Save the badgers!' };
  
//   $.getJSON( "comments.json", function( data ) {
//     console.log("get JSON")
//     post = data
// })
//   .fail(function() {
//     console.log( "error" );
//  });

//   var message = function(time){
//     if (post[time] != undefined){
//       document.getElementById('post').innerHTML = post[time];
//     }
//   }
//   var wave_time = function(){
//     return Math.floor(wavesurfer.getCurrentTime())
//   }
//   setInterval(function () {message(wave_time())}, 500);

});
