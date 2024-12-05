const activities = document.getElementById("activities");
let dateTimeValue = document.getElementById('datetime');

function isEmpty(){
    if(activities == '' && Date.parse(dateTimeValue) == null){
        alert("Please Enter All The Fields");
        return false;
    }

    return true;
}

function add(){

    if(isEmpty() == true){
        alert(activities.value);
        alert("Date Chosen: "+ dateTimeValue.value);
    }  
    
    
}