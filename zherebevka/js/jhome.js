$(function(){

			$("body").on("click",".tms",function(){
				var team = $(this).html();

				
				if (team==numbers[0] || team==numbers[1] || team==numbers[2] || team==numbers[3] || team==numbers[4] || team==numbers[5] || team==numbers[6] || team==numbers[7] || team==numbers[8] || team==numbers[9] || team==numbers[10] || team==numbers[11]) {
					for (var i = 0; i<numbers.length; i++) {
						if (numbers[i]==team) {
							delete numbers[i];
							$("t").html("");
							numbers = numbers.filter(function(x) {
    							return x !== undefined && x !== null; 
							});
							$(this).css("background-color","red");
							$(this).css("border","2px solid white");
							$(this).css("color","black");
						}

						
						
					}
				}else{
				$(this).css("background-color","black");
				$(this).css("border","2px solid whire");
				$(this).css("color","#ff0000");	
				numbers.push(team);
				}
				
			   
			   console.log(numbers)
			});

		var numbers = []
			$("body").on("click",".zrbvka",function(){

				if (numbers=="") {
					$("t").html("");
				}
				
				var zero = numbers[0];
				var first = numbers[1];
				var second = numbers[2];
				var third = numbers[3];
				var fourth = numbers[4];
				var fives = numbers[5];
				var sixs = numbers[6];
				var sevens = numbers[7];
				var eights = numbers[8];
				var nines = numbers[9];
				var tens = numbers[10];
				var elevens = numbers[11];
			
				$(".tms0").html(zero);
				$(".tms1").html(first);
				$(".tms2").html(second);
				$(".tms3").html(third);
				$(".tms4").html(fourth);
				$(".tms5").html(fives);
				$(".tms6").html(sixs);
				$(".tms7").html(sevens);
				$(".tms8").html(eights);
				$(".tms9").html(nines);
				$(".tms10").html(tens);
				$(".tms11").html(elevens);
				
				
				function shuffle(o) {
    	for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    	return o;
	};

var random = shuffle(numbers);

console.log(random);
			});


			$("body").on("click",".changer",function(){
				$(".champ").toggle();
				$(".zrb").toggle();
			});
			
			$("body").on("click",".btnn",function(){
				

				$('.btnn').find('i').animate({  borderSpacing: -390 }, {
    step: function(now,fx) {
      $("i").css('transform','rotate('+now+'deg)');  
    },
    duration:'slow'
},'linear');



    var words = ["Manchester City","Manchester United","Barcelona","Rеal Madrid","Arsenal","Chelsea","Bayern Munchёn","Juventus","PSG","ATM","BVB","Liverpool","Jackpot"]; 
    
     var hisob = {
     	random:random
     }
      function random(rakam){
      	rakam = Math.random()*13;
      	rakam = Math.floor(rakam);
      	if (sel==0) {
						$(".word").html("Jackpot")
						sel=1;
					}else{
      	$(".word").html(words[rakam])
        //$(".tm"+rakam).html([rakam]);
        }
      }
      
	hisob.random(4);
            
              ///array

      var word = $(".word").html();

/*        if (word==comands){
          return;
        }else{
          comands.push(word);
        }
      */  

      
        $(".img").html('<img src="image/'+word+'.jpg">')
        if (word=="ATM") {
          $(".img").html('<img src="image/ATM.jpeg">')
        }

      });  
        

			var sel = 1;

			$("body").on("click",".jackson",function(){
				if (sel==1) {
					sel=0;
				}else{
					sel=1;
				}
				console.log(sel)				
			});

});












