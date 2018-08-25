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


  var $page = $('html, body');
  $('a[href*="#"]').click(function(){
  	$page.animate({
  		scrollTop:$($.attr(this,'href')).offset().top
  	},400);
  	return false;
  });




  $("button#submit").click(function(){
$.ajax({
type: "POST",
url: "feedback.php",
data: $('form.feedback').serialize(),
success: function(message){
$("#feedback").html(message)
$("#feedback-modal").modal('hide');
},
error: function(){
alert("Error");
}
});
});

	

 
});