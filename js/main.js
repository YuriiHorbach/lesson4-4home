$(document).ready(function(){
  $('.slider').slick({
  	 appendArrows: $('.feedback__left'),
            prevArrow: '<button id="prev" type="button" class="btn btn-juliet"><i class="fa fa-chevron-left" aria-hidden="true"></i> Туда</button>',
     appendArrows: $('.feedback__right'),
            nextArrow: '<button id="next" type="button" class="btn btn-juliet">Сюда <i class="fa fa-chevron-right" aria-hidden="true"></i></button>'
  });
 
});