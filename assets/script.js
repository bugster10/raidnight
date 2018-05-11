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