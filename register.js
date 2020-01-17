function register(){
    var adminPass= document.getElementById("adminPass").value;
var adminconpass= document.getElementById("adminConPass").value;
var adminName= document.getElementById("adminName").value;
var adminEmail=document.getElementById("adminEmail").value;
var adminCity=document.getElementById("city").value;
var adminState=document.getElementById("state").value;
var adminItem, store;
var adminArray = new Array();
    if( adminPass!==adminconpass){
        alert("password not match");
    }
    else if(adminName==null || adminconpass== null )   {
        alert("Fill the form first..!!");
    }
    else{
        
        localStorage.setItem("admin",adminItem)
        alert("submit..!!");
            
        var admin = {
            "name":adminName,
            "email":adminEmail,
            "password":adminPass,
            "city":adminCity,
            "state":adminState
        };


        //store = JSON.parse(localStorage.getItem("admin"));
        //if (store != null) { adminArray = store; }
        //adminArray.push(admin);
        localStorage.setItem("admin", JSON.stringify(admin));
    }
}