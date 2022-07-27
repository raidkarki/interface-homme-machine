var lettersnumber=document.querySelectorAll('.letterbtn').length;


var allAudios = document.querySelectorAll('audio');
function stopAllAudio(){
    allAudios.forEach(function(audio){
        audio.pause();
    });
}

for(i=0;i<lettersnumber-1;i++){
    document.querySelectorAll('.letterbtn')[i].addEventListener('click', function(){
        var lettername =this.classList[0];    
        console.log(lettername);       
        var audiob=document.querySelector("#"+lettername);    
        stopAllAudio();
        buttonAnimation(lettername);
        audiob.play();
    })
}

    document.addEventListener('keypress', function(pressed){
                 
        var audiob=document.querySelector("#"+pressed.key);    
        stopAllAudio();
        buttonAnimation(pressed.key);
        audiob.play();
    })




    function buttonAnimation(currentKey) {

        var activeButton = document.querySelector("." + currentKey);
      
        activeButton.classList.add("pressed1");
      
        setTimeout(function() {
          activeButton.classList.remove("pressed1");
        }, 1000);
      
      }
      function buttonAnimation1() {



        var audiob=document.querySelector("#allabc");
        audiob.play();
        setTimeout(function () {
        var activeb=document.querySelector(".a");
        console.log(activeb);
        activeb.classList.add("pressed");
        setTimeout(function() {
         activeb.classList.remove("pressed");
       }, 1000);
       },9000)
           
       setTimeout(function () {
        var activeb=document.querySelector(".b");
        console.log(activeb);
        activeb.classList.add("pressed1");
        setTimeout(function() {
         activeb.classList.remove("pressed1");
       }, 1000);
       },10000)
   
   
       setTimeout(function () {
        var activeb=document.querySelector(".c");
        console.log(activeb);
        activeb.classList.add("pressed");
        setTimeout(function() {
         activeb.classList.remove("pressed");
       }, 1000);
       },11000)
   
   
       setTimeout(function () {
        var activeb=document.querySelector(".d");
        console.log(activeb);
        activeb.classList.add("pressed");
        setTimeout(function() {
         activeb.classList.remove("pressed");
       }, 1000);
       },12000)
   
   
       setTimeout(function () {
        var activeb=document.querySelector(".e");
        console.log(activeb);
        activeb.classList.add("pressed1");
        setTimeout(function() {
         activeb.classList.remove("pressed1");
       }, 1000);
       },13000)
   
   
       setTimeout(function () {
        var activeb=document.querySelector(".f");
        console.log(activeb);
        activeb.classList.add("pressed");
        setTimeout(function() {
         activeb.classList.remove("pressed");
       }, 1000);
       },14000)
   
   
       setTimeout(function () {
        var activeb=document.querySelector(".g");
        console.log(activeb);
        activeb.classList.add("pressed1");
        setTimeout(function() {
         activeb.classList.remove("pressed1");
       }, 1000);
       },15000)
   
   
       setTimeout(function () {
        var activeb=document.querySelector(".h");
        console.log(activeb);
        activeb.classList.add("pressed");
        setTimeout(function() {
         activeb.classList.remove("pressed");
       }, 1000);
       },18000)
   
   
       setTimeout(function () {
        var activeb=document.querySelector(".i");
        console.log(activeb);
        activeb.classList.add("pressed1");
        setTimeout(function() {
         activeb.classList.remove("pressed1");
       }, 1000);
       },19000)
   
   
       setTimeout(function () {
        var activeb=document.querySelector(".j");
        console.log(activeb);
        activeb.classList.add("pressed");
        setTimeout(function() {
         activeb.classList.remove("pressed");
       }, 1000);
       },20000)
   
   
       setTimeout(function () {
        var activeb=document.querySelector(".k");
        console.log(activeb);
        activeb.classList.add("pressed1");
        setTimeout(function() {
         activeb.classList.remove("pressed1");
       }, 1000);
       },21000)
   
   
       setTimeout(function () {
        var activeb=document.querySelector(".l");
        console.log(activeb);
        activeb.classList.add("pressed");
        setTimeout(function() {
         activeb.classList.remove("pressed");
       }, 1000);
       },22500)
   
   
       setTimeout(function () {
        var activeb=document.querySelector(".m");
        console.log(activeb);
        activeb.classList.add("pressed1");
        setTimeout(function() {
         activeb.classList.remove("pressed1");
       }, 1000);
       },23500)
   
   
       setTimeout(function () {
        var activeb=document.querySelector(".n");
        console.log(activeb);
        activeb.classList.add("pressed");
        setTimeout(function() {
         activeb.classList.remove("pressed");
       }, 2000);
       },24500)
   
   
       setTimeout(function () {
        var activeb=document.querySelector(".o");
        console.log(activeb);
        activeb.classList.add("pressed1");
        setTimeout(function() {
         activeb.classList.remove("pressed1");
       }, 1000);
       },27300)
   
   
       setTimeout(function () {
        var activeb=document.querySelector(".p");
        console.log(activeb);
        activeb.classList.add("pressed");
        setTimeout(function() {
         activeb.classList.remove("pressed");
       }, 1000);
       },28500)
   
   
       setTimeout(function () {
        var activeb=document.querySelector(".q");
        console.log(activeb);
        activeb.classList.add("pressed1");
        setTimeout(function() {
         activeb.classList.remove("pressed1");
       }, 1000);
       },29700)
   
   
       setTimeout(function () {
        var activeb=document.querySelector(".r");
        console.log(activeb);
        activeb.classList.add("pressed");
        setTimeout(function() {
         activeb.classList.remove("pressed");
       }, 1000);
       },31000)
   
   
       setTimeout(function () {
        var activeb=document.querySelector(".s");
        console.log(activeb);
        activeb.classList.add("pressed1");
        setTimeout(function() {
         activeb.classList.remove("pressed1");
       }, 1000);
       },32200)
   
   
       setTimeout(function () {
        var activeb=document.querySelector(".t");
        console.log(activeb);
        activeb.classList.add("pressed");
        setTimeout(function() {
         activeb.classList.remove("pressed");
       }, 1000);
       },33200)
   
   
       setTimeout(function () {
        var activeb=document.querySelector(".u");
        console.log(activeb);
        activeb.classList.add("pressed1");
        setTimeout(function() {
         activeb.classList.remove("pressed1");
       }, 1000);
       },34200)
   
   
       setTimeout(function () {
        var activeb=document.querySelector(".v");
        console.log(activeb);
        activeb.classList.add("pressed");
        setTimeout(function() {
         activeb.classList.remove("pressed");
       }, 1000);
       },37000)
   
       setTimeout(function () {
        var activeb=document.querySelector(".w");
        console.log(activeb);
        activeb.classList.add("pressed1");
        setTimeout(function() {
         activeb.classList.remove("pressed1");
       }, 1000);
       },39000)
   
   
       setTimeout(function () {
        var activeb=document.querySelector(".x");
        console.log(activeb);
        activeb.classList.add("pressed");
        setTimeout(function() {
         activeb.classList.remove("pressed");
       }, 1000);
       },41500)
   
   
       setTimeout(function () {
        var activeb=document.querySelector(".y");
        console.log(activeb);
        activeb.classList.add("pressed1");
        setTimeout(function() {
         activeb.classList.remove("pressed1");
       }, 1000);
       },43000)
   
   
       setTimeout(function () {
        var activeb=document.querySelector(".z");
        console.log(activeb);
        activeb.classList.add("pressed");
        setTimeout(function() {
         activeb.classList.remove("pressed");
       }, 1000);
       },44000)

       
        
      




        
      
        
      
        
      
      }   
      document.querySelector('.allabc').addEventListener('click',function(){

       
        
        
        buttonAnimation1();
      
            
           
            
        








       


      });
