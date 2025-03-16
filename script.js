const inputBox=document.getElementById("input-box");
const listContainer=document.getElementById("list-container");
function addTask(){
    if(inputBox.value===''){
        alert("You must give text!");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        let img = document.createElement("img");
        img.src="images/delete.png";
        img.alt="Delete";
        img.classList.add("delete-icon");

        span.appendChild(img);
        li.appendChild(span);
        listContainer.appendChild(li);

        span.onclick = function() {
            this.parentElement.remove();
        };
    }
    inputBox.value="";
    saveData();
}

listContainer.addEventListener("click",function(e)
{
    if(e.target.tagName ==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName ==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML=localStorage.getItem("data");
}
showTask();