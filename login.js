
function login(){
    var adminst=JSON.parse(localStorage.getItem("admin"));
    var userst =JSON.parse(localStorage.getItem("user"));  
    var uemail=document.getElementById("email").value;
    var upass=document.getElementById("password").value;
    for(i=0;i<adminst.length;i++){
        
        if(uemail==adminst[i].email || upass==adminst[i].pass){
            //console.log("Welcome Admin",adminst[i].name);
            sessionStorage.setItem("name",adminst[i].name);
            window.location.href="dashboard.html";
        }
    }
    for(i=0;i<userst.length;i++){
        //console.log(userst[i].email);
        //console.log(userst[i].pass);
        if(uemail==userst[i].email && upass==userst[i].pass){
            //console.log("Welcome user",userst[i].name);
            sessionStorage.setItem("name",userst[i].name);
            window.location.href="subuser.html";
        }
    }


}