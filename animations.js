$(document).ready(function() {
  $(".scripttext").hide().first().fadeIn(3500);
  $("#labox").hide().first().fadeIn(2000);
  $("#explore").hide().delay(1000).fadeIn(2000)

  window.addEventListener('scroll', function() {
    const target = document.querySelector('#labanner');

    var scrolled = window.pageYOffset;
    var rate = scrolled * 0.7;

    target.style.transform = 'translate3d(0px,'+rate+'px, 0px)'
  })

});
