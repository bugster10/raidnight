$( "input" ).click(function( event ) {
  var target = $( event.target );
  $('.test-z').addClass('hidden')
  if ( target.is( "#patbtn" ) ) {
    $('#pat').removeClass('hidden')
  }
  if ( target.is( "#cafebtn" ) ) {
    $('#cafe').removeClass('hidden')
  }
  if ( target.is( "#joeybtn" ) ) {
    $('#joey').removeClass('hidden')
  }
  if ( target.is( "#aldbtn" ) ) {
    $('#ald').removeClass('hidden')
  }
  if ( target.is( "#joshbtn" ) ) {
    $('#josh').removeClass('hidden')
  }
  if ( target.is( "#trevorbtn" ) ) {
    $('#trevor').removeClass('hidden')
  }
  if ( target.is( "#coffeebtn" ) ) {
    $('#coffee').removeClass('hidden')
  }
  if ( target.is( "#natebtn" ) ) {
    $('#nate').removeClass('hidden')
  }
  if ( target.is( "#sickpeabtn" ) ) {
    $('#sickpea').removeClass('hidden')
  }
  if ( target.is( "#spideybtn" ) ) {
    $('#spidey').removeClass('hidden')
  }
  if ( target.is( "#blakebtn" ) ) {
    $('#blake').removeClass('hidden')
  }
  if ( target.is( "#monkeybtn" ) ) {
    $('#monkey').removeClass('hidden')
  }
});

var audio = [];
var isMuted = audio.muted

audio[0] = new Audio();
audio[0].src = 'assets/title.mp3';
audio[1] = new Audio();
audio[1].src = 'assets/select.wav';
setTimeout(function(){
audio[0].play();
}, 500)

$( "input" ).click(function() {
  audio[1].play();
});