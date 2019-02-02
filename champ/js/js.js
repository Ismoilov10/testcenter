$(function(){


	
$("body").on("click",".btnn",function(){
    var words = ["Manchester City","Manchester United","Barcelona","Real Madrid","Arsenal","Chelsea","Bayern Munchёn","Juventus","PSG","Atletico Madrid","BVB","Liverpool"]
       $("#word")
     var hisob = {
     	random:random
     }
            
      function random(rakam){
      	rakam = Math.random()*12;
      	rakam = Math.floor(rakam);
      	$(".word").html(""+words[rakam])
      }
      hisob.random(4)
      });  


});