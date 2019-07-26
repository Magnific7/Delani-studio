$(document).ready(function(){
$("form").submit(function(event){
var a = $("#name").val();
alert(a+ " we have received your message. Thank you fro reaching out to us.");
});
});

$(document).ready(function(){
$('#design').click(function(){
$('#desig').toggle();
$('#design').toggle();
});
$('#desig').click(function(){
  $('#design').toggle();
  $('#desig').toggle();
});

$('#icon').click(function(){
  $('#con').toggle();
  $('#icon').toggle();
  });
  $('#con').click(function(){
    $('#icon').toggle();
    $('#con').toggle();
  });

  $('#product').click(function(){
    $('#produc').toggle();
    $('#product').toggle();
    });
    $('#produc').click(function(){
      $('#product').toggle();
      $('#produc').toggle();
    });

$(".ba").hide();
$("#one").animate({
  opacity:1
});
$('#one').hover(function(){
  $(this).stop().animate({
    opacity: .4},200);
    $('.ba').fadeIn();
  },
function(){
  $(this).stop.animate({
    opacity: 1},500);
    $(".ba").fadeOut();
  });
},
  });
});





});

