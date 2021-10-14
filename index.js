
var inmain = document.getElementById("main")
var array = []

function displayList () {
    inmain.innerHTML = ""

    array.forEach(function(task, index) {
        inmain.innerHTML = inmain.innerHTML + ` 
            <div class="inside" id="delete"> 
                <p class="text">${task.value}</p> 
                <div class="insideButton"> 
                    <p class="write" id="write${index}"> <i class="fas fa-pencil-alt" onclick="stylo(${index})"></i> </p> 
                    <select class="select" onChange="onSelectChange(${index})">
                        <option ${task.status === "to do" ? 'selected' : ''} value="to do">To do</option>
                        <option ${task.status === "doing" ? 'selected' : ''} value="doing">Doing</option>
                        <option ${task.status === "done" ? 'selected' : ''} value="done">Done</option>
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
    displayList ()
   
}         
   
                  

function removeItem(index) {
    array.splice(index, 1)
    inmain.innerHTML = ""
    array.forEach(function(task, index) {
        inmain.innerHTML = inmain.innerHTML + ` <div class="inside" id="delete"> <p class="text">${task.value}</p> <div class="insideButton"> <button class="mod"> Modifier </button> <button class="x" onclick = "removeItem(${index})"> <i class="fas fa-trash-alt"></i> </button> </div> </div> `
      })  
      displayList () 
}
                                 

  function stylo(index) {
    var rescribe = document.getElementById(`write${index}`)
    rescribe.innerHTML = ` 
                            <input id="inputChange" type="texte" placeholder : "New name of the task">
                            <button onclick="addNewTask(${index})"> Change </button>
                        `
}

function addNewTask (index) {
    array[index].value = document.getElementById("inputChange").value
    displayList()
}



function onSelectChange (index) {
    var select = document.getElementsByClassName("select")[index]
    array[index].status = select.value
}


