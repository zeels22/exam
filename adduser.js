function addUser() {

    var unames = document.getElementById("uname").value;
    var uemails = document.getElementById("uemail").value;
    var upasss = document.getElementById("upass").value;
    var udobs = document.getElementById("ubdate").value;
    var store;
    var userArray = new Array();
    var userst = JSON.parse(localStorage.getItem("user"));
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (unames == null || uemails == null || upasss == null || udobs == null) {
        alert("Check all the details..!");
    }
    else if (reg.test(uemails) == false) {
        alert('Invalid Email Address');
    }
    else {
        for (i = 0; i < userst.length; i++) {
            if (uemails == userst[i].email) {
                alert("email already exist..!!");
                flag = 1;
                break;
            }

        } if (flag == 0) {


            var user = {
                "name": unames,
                "pass": upasss,
                "email": uemails,
                "dob": udobs
            };
            store = JSON.parse(localStorage.getItem("user"));
            if (store != null) { userArray = store; }
            userArray.push(user);
            console.log(userArray, user);
            localStorage.setItem("user", JSON.stringify(userArray));
            window.location.href = "user.html";
        }
        else {
            window.location.href = "user.html";
            flag = 0;
        }

    }
}
