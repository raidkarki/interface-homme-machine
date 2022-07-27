var lettersnumber=document.querySelectorAll('.nbrbtn').length;
console.log(lettersnumber);

var allAudios = document.querySelectorAll('audio');
function stopAllAudio(){
    allAudios.forEach(function(audio){
        audio.pause();
    });
}

for(i=0;i<lettersnumber-1;i++){
    document.querySelectorAll('.nbrbtn')[i].addEventListener('click', function(){
        var nbrname =this.classList[0];    
        console.log(nbrname);       
        var audiob=document.querySelector("#"+nbrname);    
        stopAllAudio();
        buttonAnimation(nbrname);
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



        var audiob=document.querySelector("#allnb");
        audiob.play();
        setTimeout(function () {
        var activeb=document.querySelector(".one");
        console.log(activeb);
        activeb.classList.add("pressed");
        setTimeout(function() {
         activeb.classList.remove("pressed");
       }, 1000);
       },2500)
           
       setTimeout(function () {
        var activeb=document.querySelector(".tow");
        console.log(activeb);
        activeb.classList.add("pressed1");
        setTimeout(function() {
         activeb.classList.remove("pressed1");
       }, 1000);
       },3500)
   
   
       setTimeout(function () {
        var activeb=document.querySelector(".three");
        console.log(activeb);
        activeb.classList.add("pressed");
        setTimeout(function() {
         activeb.classList.remove("pressed");
       }, 1000);
       },12000)
   
   
       setTimeout(function () {
        var activeb=document.querySelector(".four");
        console.log(activeb);
        activeb.classList.add("pressed");
        setTimeout(function() {
         activeb.classList.remove("pressed");
       }, 1000);
       },16100)
   
   
       setTimeout(function () {
        var activeb=document.querySelector(".five");
        console.log(activeb);
        activeb.classList.add("pressed1");
        setTimeout(function() {
         activeb.classList.remove("pressed1");
       }, 1000);
       },21000)
   
   
       setTimeout(function () {
        var activeb=document.querySelector(".six");
        console.log(activeb);
        activeb.classList.add("pressed");
        setTimeout(function() {
         activeb.classList.remove("pressed");
       }, 1000);
       },28000)
   
   
       setTimeout(function () {
        var activeb=document.querySelector(".seven");
        console.log(activeb);
        activeb.classList.add("pressed1");
        setTimeout(function() {
         activeb.classList.remove("pressed1");
       }, 1000);
       },32000)
   
   
       setTimeout(function () {
        var activeb=document.querySelector(".nine");
        console.log(activeb);
        activeb.classList.add("pressed");
        setTimeout(function() {
         activeb.classList.remove("pressed");
       }, 1000);
       },36000)
   
   
       setTimeout(function () {
        var activeb=document.querySelector(".ten");
        console.log(activeb);
        activeb.classList.add("pressed1");
        setTimeout(function() {
         activeb.classList.remove("pressed1");
       }, 1000);
       },40000)    
      }   
      document.querySelector('.allnb').addEventListener('click',function(){

       
        
        
        buttonAnimation1();
      
});
