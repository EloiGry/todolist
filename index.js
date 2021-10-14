
var inmain = document.getElementById("main")
var array = []

function displayList (array) {
    inmain.innerHTML = ""

    array.forEach(function(task, index) {
        inmain.innerHTML = inmain.innerHTML + ` 
            <div class="inside" id="delete"> 
                <p class="text">${task.value}</p> 
                <div class="insideButton"> 
                    <p class="write" id="write${index}"> <i class="fas fa-pencil-alt" onclick="stylo(${index})"></i> </p> 
                    <select class="select" onChange="onSelectChange(${index})">
                        <option ${task.status === "To do" ? 'selected' : ''} value="To do">To do</option>
                        <option ${task.status === "Doing" ? 'selected' : ''} value="Doing">Doing</option>
                        <option ${task.status === "Done" ? 'selected' : ''} value="Done">Done</option>
                    </select> 
                    <button class="x" onclick = "removeItem(${index})"> <i class="fas fa-trash-alt"></i> 
                    </button>
                </div> 
            </div> 
            `
      })   
}



function onTaskSubmit() {

    var task = {
        value : document.getElementById("input").value,
        status : "To Do"
    }
    array.push(task)
    displayList (array)
   
}         
   
                  

function removeItem(index) {
    array.splice(index, 1)
    inmain.innerHTML = ""
    array.forEach(function(task, index) {
        inmain.innerHTML = inmain.innerHTML + ` <div class="inside" id="delete"> <p class="text">${task.value}</p> <div class="insideButton"> <button class="mod"> Modifier </button> <button class="x" onclick = "removeItem(${index})"> <i class="fas fa-trash-alt"></i> </button> </div> </div> `
      })  
      displayList (array) 
}
                                 

  function stylo(index) {
    var rescribe = document.getElementById(`write${index}`)
    rescribe.innerHTML = ` 
                            <input id="inputChange" type="texte" placeholder="New name of the task">
                            <button onclick="addNewTask(${index})"> Change </button>
                        `
}

function addNewTask (index) {
    array[index].value = document.getElementById("inputChange").value
    displayList(array)
}



function onSelectChange (index) {
    var select = document.getElementsByClassName("select")[index]
    array[index].status = select.value
}

function filter(status){
        var filterToDo = array.filter(function(task){
            return task.status === status || status === "All"
        })
        displayList(filterToDo)
}


function randomTask() {
    
    var list = ["manger","dormir","boire","sport","douche","nettoyer"]
    var random = list[Math.floor(Math.random()*list.length)];
    var tasks = {
        value : random,
        status : "To Do"    
    };
    array.push(tasks)
    displayList(array)
}


