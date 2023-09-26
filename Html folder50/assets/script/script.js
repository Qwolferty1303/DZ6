// 4
$(".btn4").click(function(){
    $(".box4").append(" <div class='green-box green-box4' ></div> ");
})

// 5
$(".btn5").click(function(){
    $(".box5").prepend(" <div class='green-box green-box5' ></div> ");
})

// 6
$(".btn6").click(function(){
    $(" <div class='green-box green-box6' ></div> ").appendTo(".box6");
})

// 7
$(".btn7").click(function(){
    $(" <div class='green-box green-box7' ></div> ").prependTo(".box7");
})

// 8
$(".btn8").click(function(){
    $(".box8").before(" <div class='green-box green-box8' ></div> ");
})

// 9
$(".btn9").click(function(){
    $(".box9").after(" <div class='green-box green-box9' ></div> ");
})

// 10
$(".btn10").click(function(){
    $( ".inner-box-removable" ).empty();
})

// 11
$(".btn11").click(function(){
    $( ".inner-box-removable2" ).remove();
})

// 12
$('.clickToChange').click(function() {
    let inputValue = $('.chanHei').val();
    $(".changeThis").height(inputValue)
    $('.click12').click(function(){
        $(".txtChanges").html(inputValue)
    })
});

// 13
$('.clickToChange2').click(function() {
    let inputValue = $('.chanWid').val();
    $(".changeThis2").width(inputValue)
    $('.click13').click(function(){
        $(".txtChanges2").html(inputValue)
    })
});
