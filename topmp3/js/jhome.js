$(function(){
																
				$("body").on("click",".add_music_btn",function(){
					var add_music_name = $(".treck_name").val();
					var add_singer_name = $(".treck_singer").val();
					var musics_wrap = $(".music_wrapper").html()
					$(".music_wrapper").html(musics_wrap+"<div class='musics' val="+add_music_name+">"+"<b>"+add_music_name+"</b>"+"<p>"+add_singer_name+"</p>"+"<i class='fa fa-play'></i>"+"</div>")

				});

				$("body").on("click",".musics",function(){
					var music = $(this).attr("val");
					var name  = $(this).find("p").html();
					var nowplaying  = $(this).find("b").html();
					var playicon = $(this).find("i").attr("class")
					$("audio").attr("src","audios/"+music+".mp3")
					$(".overlay").find("img").attr("src","cover/"+music+".jpg")
					$(".albomshower").find("img").attr("src","cover/"+music+".jpg")
					$(".nowplaying").html(nowplaying)
					$(".singer").html(name)
					if (playicon=="fa fa-play") {
					  $("i").attr("class","fa fa-play")		
					  $(this).find("i").attr("class","fa fa-pause");
					}else{
						$(this).find("i").attr("class","fa fa-play");
					}
				});

				$("body").on("click",".view_btn",function(){
						$(".player").show();
						$(".music_wrapper").show();
						$(".start_wrapper").hide();
				});

});















//randomfunc with array//
/*for (var a = [0, 1, 2, 3, 4], i = a.length; i--; ) {
    var random = a.splice(Math.floor(Math.random() * (i + 1)), 1)[0];
    console.log(random);
}*/