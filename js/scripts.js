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
    $(".one").hover(function(){
        $(this).stop().animate({opacity:.2},200);
        $(".ba").fadeIn();
    },function(){
        $(this).stop().animate({opacity:2},500);
        $(".ba").fadeOut();
    });


    $(".be").hide();
    $(".two").hover(function(){
        $(this).stop().animate({opacity:.2},200);
        $(".be").fadeIn();
    },function(){
        $(this).stop().animate({opacity:2},500);
        $(".be").fadeOut();
    });

    $(".bi").hide();
    $(".three").hover(function(){
        $(this).stop().animate({opacity:.2},200);
        $(".bi").fadeIn();
    },function(){
        $(this).stop().animate({opacity:2},500);
        $(".bi").fadeOut();
    });

    $(".bo").hide();
    $(".four").hover(function(){
        $(this).stop().animate({opacity:.2},200);
        $(".bo").fadeIn();
    },function(){
        $(this).stop().animate({opacity:2},500);
        $(".bo").fadeOut();
    });

    $(".bv").hide();
    $(".five").hover(function(){
        $(this).stop().animate({opacity:.2},200);
        $(".bv").fadeIn();
    },function(){
        $(this).stop().animate({opacity:2},500);
        $(".bv").fadeOut();
    });

    $(".bs").hide();
    $(".six").hover(function(){
        $(this).stop().animate({opacity:.2},200);
        $(".bs").fadeIn();
    },function(){
        $(this).stop().animate({opacity:2},500);
        $(".bs").fadeOut();
    });

    $(".bn").hide();
    $(".seven").hover(function(){
        $(this).stop().animate({opacity:.2},200);
        $(".bn").fadeIn();
    },function(){
        $(this).stop().animate({opacity:2},500);
        $(".bn").fadeOut();
    });

    // $(".bt").hide();
    // $(".eight").hover(function(){
    //     $(this).stop().animate({opacity:.2},200);
    //     $(".bt").fadeIn();
    // },function(){
    //     $(this).stop().animate({opacity:2},500);
    //     $(".bt").fadeOut();
    // });
});

