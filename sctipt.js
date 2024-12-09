var activities = document.getElementById("activities").value;
var dateTimeValue = document.getElementById("datetime").value;

function isEmpty() {

    activities = document.getElementById("activities").value;
    dateTimeValue = document.getElementById("datetime").value;

    if (activities === '' || dateTimeValue === '') {
        alert("Please Enter All The Fields");
        return false;
    }

    return true;
}

function displayData() {
    var list;

    if (localStorage.getItem("list") == null) {
        list = [];
    } else {
        list = JSON.parse(localStorage.getItem("list"));
    }

    var html = "";

    list.forEach(function (element, index) {
        html += "<tr>";
        html += "<td>" + element.activities + "</td>";
        html += "<td>" + element.dateTimeValue + "</td>";
        html += '<td><button onclick="deleteData(' +
            index +
            ')" class= "delete">Delete</button><button onclick="updateData(' + index + ')" class= "edit">Edit</button></td>';
        html += "</tr>";
    });

    document.querySelector("#activitiesTable tbody").innerHTML = html;

}

document.onload = displayData();

function add() {

    if (isEmpty()) {
        activities = document.getElementById("activities").value;
        dateTimeValue = document.getElementById("datetime").value;

        var list;

        if (localStorage.getItem("list") == null) {
            list = [];
        } else {
            list = JSON.parse(localStorage.getItem("list"));
        }

        list.push({
            activities: activities,
            dateTimeValue: dateTimeValue,
        });

        localStorage.setItem("list", JSON.stringify
            (list));
        displayData();
        document.getElementById("activities").value = "";
        document.getElementById("datetime").value = "";
    }

}

function deleteData(index) {
    var list;

    if (localStorage.getItem("list") == null) {
        list = [];
    } else {
        list = JSON.parse(localStorage.getItem("list"));
    }

    list.splice(index, 1);
    localStorage.setItem("list", JSON.stringify
        (list));
    displayData();
}

function updateData(index){
    document.getElementById("add").style.display = "none";
    document.getElementById("update").style.display = "block";

    var list;

    if (localStorage.getItem("list") == null) {
        list = [];
    } else {
        list = JSON.parse(localStorage.getItem("list"));
    }

    document.getElementById("activities").value = list[index].activities;
    document.getElementById("datetime").value = list[index].dateTimeValue;

    document.querySelector("#update").onclick = function(){
        if(isEmpty()){
            list[index].activities = document.getElementById("activities").value;
            list[index].dateTimeValue = document.getElementById("datetime").value;

            localStorage.setItem("list", JSON.stringify
                (list));
            displayData();

            document.getElementById("activities").value = "";
            document.getElementById("datetime").value = "";

            document.getElementById("add").style.display = "block";
            document.getElementById("update").style.display = "none";
        }
    }
}