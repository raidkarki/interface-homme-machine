
var   audio=["a","b","c","d","e","f","g","h","i"];
var   randomnumber = Math.floor(Math.random()*9 );

var   userClickedletter=[];
var   randomletterchosen=[];
var   started=false;
level=0;


$(".start").click(function () {
    if(!started){ $(".startbox").addClass("none");
    $("#btnbox").removeClass("none");
    $(".h1div").removeClass("none");

started=true;
   nextSequence();
}
   

});

function nextSequence(){
    userClickedletter = [];
    randomletterchosen=[];
    level++;
    console.log(level);
    
    
   
    

var randomnumber = Math.floor(Math.random()*9 );
console.log(randomnumber);

var randomletter =audio[randomnumber];
randomletterchosen.push(randomletter);
console.log(randomletterchosen);

playsound(randomletter);


    
}














$(".btnbt").click(function(){
        

    buttonclicked =$(this).attr("id");
    userClickedletter.push(buttonclicked);
    console.log(userClickedletter);
    
    
    
      checkanswer();
      
});


function checkanswer(){
    

    if(randomletterchosen[0]===userClickedletter[0]){ 
        animatePress(randomletterchosen[0]);
        var audio =new Audio("sounds/mixkit-achievement-bell-600.wav");
        audio.play();
        setTimeout(function(){nextSequence();},1000);
        
     
    
      
    
    }else{
        animatePress1(randomletterchosen[0]);
        
        
        
        var audio =new Audio("sounds/mixkit-apartment-buzzer-bell-press-932.wav");
    audio.play();
    setTimeout(function () {startagain();
        
    },2000)
    


    }

}

    function playsound(name){

        var audio =new Audio("sounds1/"+ name +".mp3");
        audio.play();
    
    }

    function startagain(){
        randomletterchosen =[];
        level=0;
        started=false;
        $(".startbox").removeClass("none");
    $("#btnbox").addClass("none");
    $(".h1div").addClass("none");

    
    
        }



        function animatePress(currentcolor){

            var cc = document.querySelector("#"+currentcolor);
            cc.classList.add("pressed");
            setTimeout(function(){cc.classList.remove("pressed");},500);
          
            }


            function animatePress1(currentcolor){

                var cc = document.querySelector("#"+currentcolor);
                cc.classList.add("pressed1");
                setTimeout(function(){cc.classList.remove("pressed1");},1500);
              
                }