$( "div" ).on("click", function() {
  $( this ).fadeOut( "slow" );
});

// this will do fadeout for any div clicked on, can also add more events besides 'click' inside quotes with spaces

$( "myDiv" ).on("click", function() {
  $( "myDiv" ).fadeOut( "slow" );
});

// this will do fadeout only for div with specific id
