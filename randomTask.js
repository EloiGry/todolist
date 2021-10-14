
function randomTask() {
    
    var randomBtn = document.getElementById("random");
    var list = ["manger","dormir","boire","sport","douche","nettoyer"]
    list.innerHTML
    // generer chiffre aleatoire 
    // recuperer element qui correspond au chiffre dans le tableau list
    // ajouter a la valeur du task
    var random = list[Math.floor(Math.random() * list.length -1)];
    var tasks = {
        value : random,
        status : "To Do"    
    };
    array.push(tasks)
    inmain.innerHTML = ""
    array.forEach(function(task) {
        inmain.innerHTML = inmain.innerHTML + ` <div class="inside"> <p class="text">${task.value}</p> <div class="insideButton"> <button class="mod"> Modifier </button> <button class="x"> <i class="fas fa-trash-alt"></i> </button>  </div> </div> `
       
    })
    displayList ()
}
       

//<input type="checkbox">