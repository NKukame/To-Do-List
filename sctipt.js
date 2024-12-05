function isEmpty(activities, dateTimeValue){
    if(activities == '' && Date.parse(dateTimeValue) == null){
        alert("Please Enter All The Fields");
        return false;
    }

    return true;
}

// function showData(){
//     var list;

//     if(localStorage.getItem("list") == null){
//         list = [];
//     }else{
//         list = JSON.parse(localStorage.getItem("list"));
//     }

// }

function add(){

    const activities = document.getElementById("activities");
    const dateTimeValue = document.getElementById('datetime');

    if(isEmpty(activities, dateTimeValue)){
        alert(activities.value);
        alert("Date Chosen: "+ dateTimeValue.value);
    }  
    
    
}