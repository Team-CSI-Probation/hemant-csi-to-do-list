function addtask(){
    var listitem = document.createElement("li");
    var textvalue = document.getElementById("task-to-do").value;
    var task = document.createTextNode(textvalue);
    listitem.appendChild(task);
    if(textvalue === ''){
        alert("Empty!");
    }

    else{
        document.getElementById("mytask").appendChild(li);
    }
    document.getElementById("task-to-do").value = "";

    var span = document.createElement("SPAN");
    var text = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(text);
    li.appendChild(span);

    for(var i = 0; i < close.length; i++){
        close[i].onclick = function(){
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}