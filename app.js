// See https://codepen.io/mabarbeau/pen/Myrmov
$(document).ready(function(){
  adjustTop();

  $(window).resize(function(){
    adjustTop();
  });
});

function adjustTop() {
    var height = $('#site-header').height();
    var width = $(window).width();
    if(width < 1092){
      height = 0;
    }
    $('#main-wrapper').css({'top' : height + 'px'});
}
