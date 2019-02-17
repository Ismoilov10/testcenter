$(function(){



				$("body").on("click","#signinbtn",function () {

					$(this).animate({left:-500},2000)

                })
				
				$("body").on("click","#registbtn",function(){

					$(".reg").show();
					$(".overlay").show();

				});	


				$("body").on("click",".regist",function(){
					var name  = $(".name").val();
					var sname = $(".sname").val();
					var login = $(".login").val();
					var password = $(".password").val();
					var age   = $(".age").val();
					var pr_name = $(".pr_name").html();
					var urlog = $(".urlog").html();
					var urpass = $(".urpass").html();
					var urdate = $(".urdate").html();

				$(".pr_name").html(pr_name+name+" "+sname);
				$(".urlog").html(urlog+login);
				$(".urpass").html(urpass+password);
				$(".urdate").html(urdate+age);
				$("#registbtn").html("Выйти");
				$("#signinbtn").html("Мой профиль");	
				$(".reg").hide();
					$(".overlay").hide();
				});

			$("body").on("click","#signinbtn",function(){
				$(".profile").show();
				$(".overlay").show();

			});

						//slider

			var	selecter = 1;
			
			$("body").on("click",".shower", function(){

				if (selecter==1) {
				$(this).parent().find("a").show();
				$(this).parent().find("br").show();
				$(this).html("Показать -");
				selecter=0;
			}else{
				$(this).parent().find("a").hide();
				$(this).parent().find("br").hide();
				$(this).html("Показать +");
				selecter=1;
			}
			

		});

});