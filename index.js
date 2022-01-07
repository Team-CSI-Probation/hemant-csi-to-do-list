// ADD TASK IN LIST
function addtasks(){
    var listitem = document.createElement("li");
    var textvalue = document.getElementById("task-to-do").value;
    var task = document.createTextNode(textvalue);
    listitem.appendChild(task);
    if(textvalue === ''){
        alert("Empty!");
    }

    else{
        document.getElementById("mytask").appendChild(listitem);
    }
    document.getElementById("task-to-do").value = "";

    var deletebutton = document.createElement("SPAN");
    var X = document.createTextNode("\u00D7");
    deletebutton.className = "close";
    deletebutton.appendChild(X);
    listitem.appendChild(deletebutton);

    // DELETE TASK

    var close = document.getElementsByClassName("close");

    for(var i = 0; i < close.length; i++){
        close[i].onclick = function(){
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}

// CHECKBOX QUERRY
var list = document.querySelector('ul');

list.addEventListener('click', function(listitem){
    if (listitem.target.tagName == 'LI'){
        listitem.target.classList.add('checked');
    }
});
