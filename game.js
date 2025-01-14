 
  var userClickedPattern = [];
  var buttonColours = ["red","blue","green","yellow"];
  var gamePattern = [];
  var level = 0;
  var started = false;

  $(document).keypress(function(){
     if(!started){
         $("#level-title").text("Level "+ level);
         nextSequence();
         started = true;
     }

  });

  function startOver(){
    level = 0;
    gamePattern= [];
    started = false;
  }

  function checkAnswer(currentLevel){
   if(userClickedPattern [currentLevel]== gamePattern[currentLevel]){
    console.log("Sucess");
     if(userClickedPattern.length == gamePattern.length)
     {
            setTimeout(function(){
                nextSequence();
            },1000);
     }
   }
   else {
    playSound("wrong");
    $("body").addClass("game-over");
    setTimeout(function(){
        $("body").removeClass("game-over")
    },200);
    $("#level-title").text("Game Over, Press Any Key to Restart");
    console.log("Wrong");
    startOver();
   }

  }
  
 function nextSequence(){
    userClickedPattern = [];
    level++;
    $("#level-title").text("Level "+ level);
    var n = Math.random();
    var randomNumber = Math.floor(n*4);
    var randomChosenColour  = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#"+randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);

}

$(".btn").click(function(){

    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    checkAnswer(userClickedPattern.length - 1);
}) 

function playSound(name){

    
    var audio= new Audio("sounds/"+name+".mp3");
    audio.play();


}

function animatePress(currentColour){
    $(".btn").click(function(){
        $("#"+currentColour).addClass("pressed");
        setTimeout(function(){
            $("#"+currentColour).removeClass("pressed");
        }, 100);
    });
}



 