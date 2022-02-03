$(document).ready(()=>{ 
$("input[type='button']").click(()=>{
       // var username=$("input[name='username']").val();
        //var password=$("input[name='password']").val();
     
         var button =$("button");
        //if(username!= "" && password!=""){
            button.click(()=>{
                console.log("Clicked...");
        $.ajax({
        url:"..\html\registration.html" ,
        method:"POST",
        data:{
            "username":username,
            "password":password,
        },
        success:(x)=>{
            //alert(x.username+" posted!!!");
            console.log(x);
        }
        })
        })
        //}
    })
 });