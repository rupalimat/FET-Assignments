function calculate(){
    var p = document.getElementById("principalAmt").value;
    var r= document.getElementById("rateOfInterest").value;
    var n = document.getElementById("period").value;

    var compoundInterest= p * (Math.pow((1 + r/100),n));

     document.getElementById("ci").value = compoundInterest;
    console.log(compoundInterest);
    }