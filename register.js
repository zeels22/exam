function register(){
    var adminPass= document.getElementById("adminPass").value;
    var adminconpass= document.getElementById("adminConPass").value;
    var adminName= document.getElementById("adminName").value;
    var adminEmail=document.getElementById("adminEmail").value;
    var adminCity=document.getElementById("city").value;
    var adminState=document.getElementById("state").value;
    var store;
    var adminArray = new Array();
    var adminst=JSON.parse(localStorage.getItem("admin"));
    if( adminPass!==adminconpass){
        alert("password not match");
    }
    else if(adminName==null || adminconpass== null )   {
        alert("Fill the form first..!!");
    }
    else if(document.getElementById("terms").checked==false){
        alert("not checked");
    }  
    
    else{
        for(i=0;i<adminst.length;i++){
            if(adminEmail==adminst[i].email){
                alert("email already exist..!!");
                
                flag=1;
    }
    
}if(flag==0){
        var admin = {
            "name":adminName,
            "pass":adminPass,
            "email":adminEmail,
            "city":adminCity,
            "state":adminState
        };
        store = JSON.parse(localStorage.getItem("admin"));
        if (store != null) { adminArray = store; }
        adminArray.push(admin);
        //console.log(adminArray,admin);
        localStorage.setItem("admin", JSON.stringify(adminArray));
        alert("admin registered");
        window.location.href="login.html";
    }
    else{
        window.location.href="register.html";
        flag=0;
    }
    }}