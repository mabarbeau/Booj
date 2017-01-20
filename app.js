// See https://codepen.io/mabarbeau/pen/Myrmov
$(document).ready(function(){
  adjustTop();

  $(window).resize(function(){
    adjustTop();
  });
});

function adjustTop() {
    var height = $('#site-header').height();
    $('#main-wrapper').css({'top' : height + 'px'});
}
