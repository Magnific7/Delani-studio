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
});

$(document).ready(function(){
  $('#one').moseenter(function(){
    $('#pp').mouseleave();
    // $('#pp').fadeOut();
  });
});
// $(document).ready(function(){
//   $("form").submit(function(event){
//     var hee = $("name").val();
//     alert(hee+ " ");

// });
// });