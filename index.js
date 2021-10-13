
var inmain = document.getElementById("main")
var array = []
var randomBtn = document.getElementById("random");
var list = ["manger","dormir","boire","pleurer","douche","nettoyer"]
list.innerHTML



function onTaskSubmit() {

    var tasks = {
        value : document.getElementById("input").value,
        status : "To Do"
    }
    array.push(tasks)
    
    inmain.innerHTML = ""
    
    array.forEach(function(task) {
        inmain.innerHTML = inmain.innerHTML + ` <div class="inside"> <p class="text">${task.value}</p> <div class="insideButton"> <button class="mod"> Modifier </button> <button class="x"> <i class="fas fa-trash-alt"></i> </button> </div> </div> `
      })                 
}

function randomTask() {
    // generer chiffre aleatoire 
    // recuperer element qui correspond au chiffre dans le tableau list
    // ajouter a la valeur du task
    var tasks = {
        value : "testjnuininninnin",
        status : "To Do"
    }

    array.push(tasks)
    
    inmain.innerHTML = ""
    
    array.forEach(function(task) {
        inmain.innerHTML = inmain.innerHTML + ` <div class="inside"> <p class="text">${task.value}</p> <div class="insideButton"> <button class="mod"> Modifier </button> <button class="x"> <i class="fas fa-trash-alt"></i> </button> </div> </div> `
    })

}






// function onButtonClick() {

    

//     .innerHTML = `<ul class="nav nav-tabs"> 
//                             <ul class="dropdown-menu">
//                                 <li><a class="dropdown-item" href="#">Action</a></li>
//                                 <li><a class="dropdown-item" href="#">Another action</a></li>
//                                 <li><a class="dropdown-item" href="#">Something else here</a></li>
//                             </ul>
//                         <ul class="nav nav-tabs">`
// }
