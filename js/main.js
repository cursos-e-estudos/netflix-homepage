// iniciando o carrousel
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:false,
    autoHeight: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
});

// $('.buttonHilda').hover(function() {
//     $('.selectedMovie').addClass('hilda');
// }, function() {
//     $('.selectedMovie').removeClass('hilda');
// });

// $('#buttonHilda').click(function() {
//     $('.selectedMovie').removeClass('sense8');
//     $('.selectedMovie').addClass('hilda');
// });

// $('#buttonSense8').click(function() {
//     $('.selectedMovie').removeClass('hilda');
//     $('.selectedMovie').addClass('sense8');
// });


$(document).ready(function() {
     
    $('.buttonHilda').on('click', function(event){
      var $other =  $('.selectedMovie');
        $('.selectedMovie').removeClass();
        $other.addClass('selectedMovie');
        $other.addClass('hilda');
    });
    $('.buttonCarmen').on('click', function(event){
        var $other =  $('.selectedMovie');
        $('.selectedMovie').removeClass();
        $other.addClass('selectedMovie');
        $other.addClass('carmen');
    })
    $('.button3embaixo').on('click', function(event){
        var $other =  $('.selectedMovie');
        $('.selectedMovie').removeClass();
        $other.addClass('selectedMovie');
        $other.addClass('laEmbaixo');
    });
    $('.buttonSpace').on('click', function(event){
        var $other =  $('.selectedMovie');
        $('.selectedMovie').removeClass();
        $other.addClass('selectedMovie');
        $other.addClass('space');
    });

    $('.buttonSense8').on('click', function(event){
        var $other =  $('.selectedMovie');
          $('.selectedMovie').removeClass();
          $other.addClass('selectedMovie');
          $other.addClass('sense8');
      });


});

