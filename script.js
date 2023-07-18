const inputvalue = document.getElementById("input");
const button = document.querySelector(".btn");
const tasks = document.querySelector(".tasks-container");

button.addEventListener("click", function () {
    if (input.value === "") {
        alert("Write something to add.");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = input.value;
        tasks.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    input.value = "";
    saveData();
})
tasks.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
});

function saveData(){
    localStorage.setItem("data",tasks.innerHTML);
}
function showData(){
    tasks.innerHTML = localStorage.getItem("data");
}
showData();