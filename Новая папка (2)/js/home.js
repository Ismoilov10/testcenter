


 		selecter = 1;

function btn_1() {
 
		var rtcalc = document.getElementById("rtcalc").innerHTML;
		var rbcalc = document.getElementById("rbcalc").innerHTML;
		
			if (selecter==1) {
		document.getElementById("rtcalc").innerHTML = rtcalc + "1";
		}else{
			document.getElementById("rbcalc").innerHTML = rbcalc + "1"
		}
};






function btn_2() {
 
		var rtcalc = document.getElementById("rtcalc").innerHTML;
		var rbcalc = document.getElementById("rbcalc").innerHTML;
		
			if (selecter==1) {
		document.getElementById("rtcalc").innerHTML = rtcalc + "2";
		}else{
			document.getElementById("rbcalc").innerHTML = rbcalc + "2";
		}
};


function btn_3() {
 
		var rtcalc = document.getElementById("rtcalc").innerHTML;
		var rbcalc = document.getElementById("rbcalc").innerHTML;
		
			if (selecter==1) {
		document.getElementById("rtcalc").innerHTML = rtcalc + "3";
		}else{
			document.getElementById("rbcalc").innerHTML = rbcalc + "3"
		}
};

function btn_4() {
 
		var rtcalc = document.getElementById("rtcalc").innerHTML;
		var rbcalc = document.getElementById("rbcalc").innerHTML;
		
				if (selecter==1) {
		document.getElementById("rtcalc").innerHTML = rtcalc + "4";
		}else{
			document.getElementById("rbcalc").innerHTML = rbcalc + "4"
		}
};

function btn_5() {
 
		var rtcalc = document.getElementById("rtcalc").innerHTML;
		var rbcalc = document.getElementById("rbcalc").innerHTML;
			
			if (selecter==1) {
		document.getElementById("rtcalc").innerHTML = rtcalc + "5";
		}else{
			document.getElementById("rbcalc").innerHTML = rbcalc + "5"
		}
};

function btn_6() {
 
		var rtcalc = document.getElementById("rtcalc").innerHTML;
		var rbcalc = document.getElementById("rbcalc").innerHTML;
			
			if (selecter==1) {
		document.getElementById("rtcalc").innerHTML = rtcalc + "6";
		}else{
			document.getElementById("rbcalc").innerHTML = rbcalc + "6"
		}
};

function btn_7() {
 
		var rtcalc = document.getElementById("rtcalc").innerHTML;
		var rbcalc = document.getElementById("rbcalc").innerHTML;
			
			if (selecter==1) {
		document.getElementById("rtcalc").innerHTML = rtcalc + "7";
		}else{
			document.getElementById("rbcalc").innerHTML = rbcalc + "7"
		}
};

function btn_8() {
 
		var rtcalc = document.getElementById("rtcalc").innerHTML;
		var rbcalc = document.getElementById("rbcalc").innerHTML;
		
		if (selecter==1) {
		document.getElementById("rtcalc").innerHTML = rtcalc + "8";
		}else{
			document.getElementById("rbcalc").innerHTML = rbcalc + "8"
		}
};

function btn_9() {
 		
		var rtcalc = document.getElementById("rtcalc").innerHTML;
		var rbcalc = document.getElementById("rbcalc").innerHTML;
		
		if (selecter==1) {
		document.getElementById("rtcalc").innerHTML = rtcalc + "9";
		}else{
			document.getElementById("rbcalc").innerHTML = rbcalc + "9"
		}	
};

function btn_0() {
 
		var rtcalc = document.getElementById("rtcalc").innerHTML;
		var rbcalc = document.getElementById("rbcalc").innerHTML;
		

		if (selecter==1) {
		document.getElementById("rtcalc").innerHTML = rtcalc + "0";
		}else{
			document.getElementById("rbcalc").innerHTML = rbcalc + "0"
		}
};

function btn_mr() {
			document.getElementById("rtcalc").innerHTML = " ";
			document.getElementById("rbcalc").innerHTML = " ";
			document.getElementById("calculate").innerHTML = " ";
			selecter=1;
}


function btn_plus() {
 
			selecter=0;

		var rtcalc = document.getElementById("rtcalc").innerHTML;
		var rbcalc = document.getElementById("rbcalc").innerHTML;
		

		document.getElementById("calculate").innerHTML = "+";

};

function btn_minus() {
 			selecter=0;
		var rtcalc = document.getElementById("rtcalc").innerHTML;
		var rbcalc = document.getElementById("rbcalc").innerHTML;
		

		document.getElementById("calculate").innerHTML = "-";

};

function btn_taqsim() {
          selecter=0;
		var rtcalc = document.getElementById("rtcalc").innerHTML;
		var rbcalc = document.getElementById("rbcalc").innerHTML;
		

		document.getElementById("calculate").innerHTML = ":";

};

function btn_zarb() {
 			selecter=0;
		var rtcalc = document.getElementById("rtcalc").innerHTML;
		var rbcalc = document.getElementById("rbcalc").innerHTML;
		

		document.getElementById("calculate").innerHTML = "*";

};

		
function btn_brbr() {
 		var calculate = document.getElementById("calculate").innerHTML;
		var rtcalc = document.getElementById("rtcalc").innerHTML;
			rtcalc = parseInt(rtcalc);
		var rbcalc = document.getElementById("rbcalc").innerHTML;	
			rbcalc = parseInt(rbcalc);
			

			
		if (calculate=="+") {
			document.getElementById("calculate").innerHTML = (rtcalc)+(rbcalc);
		}else if (calculate=="*"){
			document.getElementById("calculate").innerHTML = (rtcalc)*(rbcalc);
		}else if (calculate==":"){
			document.getElementById("calculate").innerHTML = (rtcalc)/(rbcalc);
		}else if (calculate=="-"){
			document.getElementById("calculate").innerHTML = (rtcalc)-(rbcalc);
		}
		document.getElementById("rtcalc").innerHTML = " ";
		document.getElementById("rbcalc").innerHTML = " ";
		selecter=1;

};


		






































/*var word = prompt("kalima")

persent(word);
   function persent(word) {
   		if (word=="apple") alert("Сев");

   		if (word=="tree") alert("дарахт");
   		
   		if (word=="pen") alert("ручка");
   		
   		if (word=="box") alert("каробка");
   		
   }*/









/*perevod|||function btn_9() {

	var asss = document.getElementById("calcn").value;
		if (asss=="apple") {
		document.getElementById("tarjuma").innerHTML = "Себ";
		}else if(asss="table"){
			document.getElementById("tarjuma").innerHTML = "Стол";
		}
  
   }|||perevod*/

  


  /* ==   -баробар
   <    -хурд
   >	-кфлон
   <=	-хурд-баробар
   >=	-калон-баробар*/