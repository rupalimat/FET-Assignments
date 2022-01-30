
function backspace(input) {
        //input.value = input.value.substring( input.value.length - 1);
		input.value = input.value.substring(0, input.value.length - 1);
}
    

function addChar(input, character) {
	if(input.value == null || input.value == "0")
		input.value = character
	else
		input.value += character
}

 function shiftToScientific() {
	var x = document.getElementById("scientificCalc");
		var y = document.getElementById("normalCalc");
	

  if (x.style.display === "block") {
		x.style.display = "none";
			y.style.display = "block";		
  } else {
		x.style.display = "block";
		y.style.display = "none";
  }
}

function checkNum(str) {
	for (var i = 0; i < str.length; i++) {
		var ch = str.charAt(i);
		if (ch < "0" || ch > "9") {
			if (ch != "/" && ch != "*" && ch != "+" && ch != "-" && ch != "."
				&& ch != "(" && ch!= ")" && ch != "%") {
				alert("invalid entry!")
				return false
				}
			}
		}
		return true
}

function compute(form) {
  //if (val !== 0.0) {
   // var percent = form.display.value;  
   // percent = pcent.substring(percent.indexOf("%")+1);
   // form.display.value = parseFloat(percent)/100 * val;
    //val = 0.0;
 // } else 
    form.display.value = eval(form.display.value);
  }
