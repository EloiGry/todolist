
var inmain = document.getElementById("main")
var array = []




function onTaskSubmit() {

    var tasks = {
        value : document.getElementById("input").value,
        status : "To Do"
    }
    array.push(tasks)
    
    inmain.innerHTML = ""
    
    array.forEach(function(task, index) {
        inmain.innerHTML = inmain.innerHTML + ` 
            <div class="inside" id="delete"> 
                <p class="text">${task.value}</p> 
                <div class="insideButton"> 
                    <button class="mod" id="modif-${index}" onclick = "modify(${index})"> Modifier </button> 
                    <button class="x" onclick = "removeItem(${index})"> <i class="fas fa-trash-alt"></i> 
                    </button> 
                </div> 
            </div> 
        `
      })
    
     console.log(array)                
}

function modify(index) {
    var choice = document.getElementById(`modif-${index}`)
    choice.innerHTML = `<select>
                                <option value="toDo">Do</option>
                                <option value="Doing">Doing</option>
                                <option value="Done">Done</option>
                            </select>`
  }






