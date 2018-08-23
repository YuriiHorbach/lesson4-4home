$(document).ready(function(){
  $('.slider').slick({
  	dots: true,
  	//dots: true;
    prevArrow: $('.prev'),
    nextArrow: $('.next'),
    

  });

    //при нажатию на любую кнопку, имеющую класс .btn
  $(".contacts__buttonForm").click(function() {
    //открыть модальное окно с id="myModal"
    $('#myModal').modal('show')
  });
 
});