$(document).ready(function() {
  $('.sidebar-item').click(function() {
    var target = $(this).data('target');
    var targetSection = $('#' + target);

    if (targetSection.length) {
      $('html, body').animate({
        scrollTop: targetSection.offset().top
      }, 500); // Adjust scroll speed (milliseconds)
    }
  });
});
