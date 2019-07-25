$(function(){

			var savolxo = [1,2,3,4];
		function shuffle(o) {
    	for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    	return o;
	};
	console.log(shuffle(savolxo))
		$(".questions[savol="+savolxo[0]+"]").css("display","block");




						///////////// Timer for games ////////////// 

						timer = $(".game_timer").html();


						timerShow()

						function timerShow(){
							$(".game_timer").html(timer);
							timer--;

							if(timer=="-1"){
								$(".answers[quest='1']:visible").css("box-shadow","0 0 7px #48bb00");
    				$(".answers[quest='1']:visible").animate({"background-color":"#48bb00"})
								$(".lose_wrapper").show();
								timer=0;
							}

							setTimeout(timerShow,1000)
						}


							/// Answers  configuration \\\
						var money_timer = 0;
    $("body").on("click",".answers",function(){
    		var this_attr = $(this).attr("quest");

    		savolxo.shift(savolxo[0])

    		if(this_attr==1){
    					money_timer++;
    					
    				$(".answers[quest='1']:visible").css("box-shadow","0 0 7px #48bb00");
    				$(".answers[quest='1']:visible").animate({"background-color":"#48bb00"})
    				$(".win_wrapper").fadeIn(400);
    				var money_offset = $("li[money="+money_timer+"]").position();
    				console.log($("li[money="+money_timer+"]").position())
    				$(".money_overlay").animate({left:money_offset.left,top:money_offset.top},1000);

    		}else{
    			$(this).css("box-shadow","0 0 7px red");
    			$(this).animate({"background-color":"#9e0000a3","box-shadow":"0 0 7px red"},function(){
    				$(".answers[quest='1']:visible").css("box-shadow","0 0 7px #48bb00");
    				$(".answers[quest='1']:visible").animate({"background-color":"#48bb00"});
    				$(".lose_wrapper").show();
    				var lose_wrapper =$(".lose_wrapper").html()
    				$(".lose_wrapper").html(lose_wrapper+"Ваш Уровень "+"<strong>"+$("li[money="+money_timer+"]").html()+"</strong>")
    			 if($("strong").html()=="undefined"){
                    $("strong").html("0$")
                 }
                });
    		}
    });

     $("body").on("click",".next_quest",function(){
     			$(".win_wrapper").hide();
     			$(".answers").parent().parent().find("span").hide();
     			timer=45;
     			
     			function shuffle(o) {
    	for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    	return o;
	};
		$(".questions[savol="+savolxo[0]+"]").show();


     });



     					/////////////Подсказки\\\\\\\\\\\\\\

     								//50 for 50\\
     				var fifty_timer = 0;
     			$("body").on("click",".fifty_wrapper",function(){
     				if(fifty_timer==0){
     				$(this).css("background-color","#003fb1");
     				$(".answers[quest='0']:visible").fadeOut(600);
     				$(".answers[quest='1']:visible").fadeIn(600);
     				fifty_timer=1;
     				}else{
     					alert("Вы уже использовали эту подсказку");
     				}
     			});
     								//friend call\\
     				var friends_call_timer = 0;
     			$("body").on("click",".friend_call_wrapper",function(){
     				if(friends_call_timer==0){
     				$(this).css("background-color","#003fb1");
     				$(".friend_calling_wrapper").show();
     				var friends_think = $(".friends_think").html();
     				var true_answer   = $(".answers[quest='1']:visible").find("b").html();
     				$(".friends_think").html("По моему это "+true_answer);
     				friends_call_timer=1;
     				}else{
     					alert("Вы уже использовали эту подсказку");
     				}
     			});


     			$("body").on("click",".ok_btn",function(){
     				$(".friend_calling_wrapper").css("display","none");
     			});

     					//////Hole Helop\\\\\\
     					var hole_help_timer = 0;
     				$("body").on("click",".hole_help_wrapper",function(){
     					if (hole_help_timer==0) {
     				 $(this).css("background-color","#003fb1");
     				 $(".hole_helping_wrapper").show();
     				 var vars = $(".vars").attr("quest");
     				 
     				 ////////////////////////////////
     				 
     				 ////////////////////////////////

     				 hole_help_timer=1;
     				 }else{
     				 	alert("Вы уже использовали эту подсказку")
     				 }
     			});

     				$("body").on("click",".hole_ok_btn",function(){
     				 $(".hole_helping_wrapper").hide();
     			});

});
		
				















