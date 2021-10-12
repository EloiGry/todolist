

function onTaskSubmit() {
    var div = document.createElement("div");
        div.classList.add("barre");
        div.innerHTML = document.getElementById("input").value
    document.getElementById("main").appendChild(div);
}


