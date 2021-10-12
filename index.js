

function onTaskSubmit() {
    var text = document.getElementById("input").value
    
    var div = document.getElementById("main");
    div.classList.add("barre");
    div.innerHTML = div.innerHTML + ` <div class="inside"> <p class="text">${text}</p> <div class="insideButton"> <button class="mod"> Modifier </button> <button class="x"> <i class="fas fa-trash-alt"></i> </button> </div> </div> `
                     
}


