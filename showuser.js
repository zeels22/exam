html = "<table><tr><th>Name</th><th>Password</th><th>Email</th><th>Birthdate</th><th>Age</th><th>Action</th>";
var data = JSON.parse(localStorage.getItem("user"));

for (i = 0; i < data.length; i++) {
    html += "<tr>";

    //console.log(data);
    for (j in data[i]) {
        //alert(data[j]);
        html += "<td>" + data[i][j] + "</td>";
    }
    html += "<td></td><td><u>Edit</u> <u>Delete</u></td>";
    html += "</tr>";
}
html += "</table>";
document.getElementById("tables").innerHTML = html;