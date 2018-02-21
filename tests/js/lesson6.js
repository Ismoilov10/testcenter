$(function(){
    


      $("body").on("mouseenter",".slider",function(){
       
          $(".slider_submenu").toggle(300);
      });

       $("body").on("mouseleave",".slider",function(){
       
          $(".slider_submenu").hide(300);
      });

      

    $("body").on("click",".player_row",function(){
     var this_attr = $(this).attr("muzik");
     $("#my_player").attr("src","audios/"+this_attr);
     $("#my_player")[0].play();
  
     });



      $("body").on("click",".btn",function(){

           var xol = 0       
 
        $(".test").each(function(){

          var selected_j = $(this).attr("selected_j")
          if(selected_j=="1"){
            xol++}

         $(this).find("input[type='radio']").each(function(){
           var this_javob = $(this).attr("javob");  
                if(this_javob=="1"){
                  $(this).parent().css("color","green");
                }else{
                  $(this).parent().css("color","red");
                }


               });
           });
    var tamom = $(".tamom").html();
    $(".overlay").show(10)
     $(".mainball").html(xol) 
     $(".tamom").show(600)
   });

      $("body").on("click","input[type='radio']",function(){
        var selected_j = $(this).attr("javob")
           
           if(selected_j=="1"){
              selected_j= "1";
           }else{
              selected_j= "0"
           }  
    
       $(this).parent().parent().attr("selected_j",selected_j)

      })

});