var i = 0;
var studentArray = Array();
function addStudentToArray(){
     studentArray[i] = document.getElementById("names").value;
     i++;
     document.getElementById("names").value="";
}

function displayStudents(){
    var studentsList = "<hr>" + "<h3>List of Students</h3>";

    for(var j=0; j < studentArray.length; j++){
          studentsList += studentArray[j] + "<br>"; 
    
        //console.log(studentsList);
        document.getElementById("list").innerHTML = studentsList;
    }
}