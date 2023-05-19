
var buttonColors = ["red", "blue", "green", "yellow"] ;

var gamePattern = [];

var userClickedPattern = [] ;

function nextSequence() {

    var randomNumber = Math.floor(Math.random() *  4) ; // generates from 0 to 3 

    var randomChosenColor = buttonColors[ranomNumber] ;

    gamePattern.push(randomChosenColor) ;

    $("#" + randomChosenColor ).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100) ;

    playSound(randomChosenColor) ;
}



$(".btn").on("click", function() {
    
    var userChosenColor = $(this).attr("id") ;

    console.log( userChosenColor ) ;

    userClickedPattern.push( userChosenColor ) ;

    playSound( userChosenColor ) ;
    
    animatePress( userChosenColor ) ;

}) ;


function playSound(name) {

    var audio = new Audio("./sounds/" + name + ".mp3" ) ;
    audio.play() ;

}


function animatePress( currentColor ) {

    $("#" + currentColor ).addClass("pressed") ;

    setTimeout( function() {
        $("#" + currentColor ).removeClass("pressed") ;
    }, 100 ) ;
}