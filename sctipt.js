const activities = document.getElementById("activities").value;
let dateTimeValue = document.getElementById('datetime');

function isEmpty(){
    if(activities == ''){
        alert("Please Enter A Task");
        return false;
    }else if(dateTimeValue === ''){
        alert("Please Enter A Date");
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