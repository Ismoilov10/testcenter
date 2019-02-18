$(function(){

			$("body").on("click",".tms",function(){

				$(this).css("background-color","blue")
				var team = $(this).html();
				numbers.push(team);
			   
			   console.log(numbers)
			});

		var numbers = []
			$("body").on("click",".zrbvka",function(){
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
				
				
					


    var words = ["Manchester City","Manchester United","Barcelona","Rеal Madrid","Arsenal","Chelsea","Bayern Munchёn","Juventus","PSG","ATM","BVB","Liverpool","Jackpot"]; 
    
     var hisob = {
     	random:random
     }
      function random(rakam){
      	rakam = Math.random()*13;
      	rakam = Math.floor(rakam);
      	if (sel==0) {
						$(".word").html("Jackpot")
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















//randomfunc with array//
/*for (var a = [0, 1, 2, 3, 4], i = a.length; i--; ) {
    var random = a.splice(Math.floor(Math.random() * (i + 1)), 1)[0];
    console.log(random);
}*/