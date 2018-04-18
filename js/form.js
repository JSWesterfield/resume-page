//form.js

// document ready
$(function() {
    console.log( "ready!" );
});

$('#modal-button').click(function() {
    $('#form-container').toogle(display);
});

/* Functions for sortable list*/
$( function() {
    $( "#sortable" ).sortable();
    $( "#sortable" ).disableSelection();
});
