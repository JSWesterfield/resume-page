
// document ready
$(document).ready(function() {

    console.log( 'ready!' );
});
//Add to init function
//used for identifying and hiding list element until submission


$('.submit').on('click', function() {
    $.ajax({
        url: "demo_test.txt", 
        success: function(result) {
            $("img > media-object")[0].html('https://openlibrary.org/isbn/' + result + 'M');
        }
    });

    // $.ajax({
    //     url: url,
    //     data: data,
    //     success: success,
    //     dataType: dataType
    // });
    var $addBooks = $('.addBooks');
    $addBooks.css("display", $addBooks.css("display") === 'none' ? '' : 'none');

//$('.addBooks').toggle("display"); //on click of button show or hide info
    console.log('Clickable');
    

    if (!$('.form-container').val().length === 0 ) {
        $(this).parents('p').addClass('warning');
        console.log('This didnt work');
    } 

    //Set the values from these titles to 
    var _title = $('.title').val();
    var _author= $('.author').val();
    var _numPages = $('.numPages').val();
    var _pubDate = $('.pubDate').val();

    /* Store our variable ALSO with the data object, by creating a data attribute to target a certain DOM element */
    $('.temp-title').text(_title);  //Will set the location of the data to '.temp-title', or the template for our data. THEN
    $('.temp-author').text(_author);
    $('.temp-numPages').text(_numPages );
    $('.temp-pubDate').text(_pubDate);

    $('media-body > :input').remove();
});

/* Functions for sortable list*/
$( function() {
    $( "#sortable" ).sortable();
    $( "#sortable" ).disableSelection();
});


/* CARD CAROUSEL Javascript*/
$("#myCarousel").on("slide.bs.carousel", function(e) {
    var $e = $(e.relatedTarget);
    var idx = $e.index();
    var itemsPerSlide = 3;
    var totalItems = $(".carousel-item").length;
  
    if (idx >= totalItems - (itemsPerSlide - 1)) {
      var it = itemsPerSlide - (totalItems - idx);
      for (var i = 0; i < it; i++) {
        // append slides to end
        if (e.direction == "left") {
          $(".carousel-item")
            .eq(i)
            .appendTo(".carousel-inner");
        } else {
          $(".carousel-item")
            .eq(0)
            .appendTo($(this).find(".carousel-inner"));
        }
      }
    }
  });
  