$(function(){


	
$("body").on("click",".btnn",function(){
    var words = ["Manchester City","Manchester United","Barcelona","Real Madrid","Arsenal","Chelsea","Bayern Munchёn","Juventus","PSG","ATM","BVB","Liverpool"] 
    
     var hisob = {
     	random:random
     }
            
      function random(rakam){
      	rakam = Math.random()*12;
      	rakam = Math.floor(rakam);
      	$(".word").html(""+words[rakam])
      }
      hisob.random(4)

      var word = $(".word").html();

      
        $(".img").html('<img src="image/'+word+'.jpg">')
        if (word=="ATM") {
          $(".img").html('<img src="image/ATM.jpeg">')
        }

      });  
        
});
