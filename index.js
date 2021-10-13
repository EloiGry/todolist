
var inmain = document.getElementById("main")
var array = []






function onTaskSubmit() {


    var tasks = {
        value : document.getElementById("input").value,
        status : "To Do"
    }

    array.push(tasks)
    inmain.innerHTML = ""
    
    array.forEach(function(task) {
        inmain.innerHTML = inmain.innerHTML + ` <div class="inside"> <p class="text">${task.value}</p> <input type="checkbox"> <div class="insideButton"> <button class="mod"> Modifier </button> <button class="x"> <i class="fas fa-trash-alt"></i> </button> </div> </div> `
      })                 
}


    array.forEach(function(task, index) {
        inmain.innerHTML = inmain.innerHTML + ` 
            <div class="inside" id="delete"> 
                <p class="text">${task.value}</p> 
                <input type="checkbox"> 
                <div class="insideButton"> 
                    <p class="write"> <i class="fas fa-pencil-alt" id="write${indexElement}" onclick = "write(${indexElement})"></i> </p> 
                    <button class="mod" id="modif-${index}" onclick = "modify(${index})"> Modifier </button> 
                    <button class="x" onclick = "removeItem(${index})"> <i class="fas fa-trash-alt"></i> 
                    </button> 
                </div> 
            </div> 
        `
      })
                  

function removeItem(index) {
    array.splice(index, 1)
    inmain.innerHTML = ""
    array.forEach(function(task, index) {
        inmain.innerHTML = inmain.innerHTML + ` <div class="inside" id="delete"> <p class="text">${task.value}</p> <div class="insideButton"> <button class="mod"> Modifier </button> <button class="x" onclick = "removeItem(${index})"> <i class="fas fa-trash-alt"></i> </button> </div> </div> `
      })
}
                  


function modify(index) {
    var choice = document.getElementById(`modif-${index}`)
    choice.innerHTML = `<select>
                                <button onclick="firstChoice"><option value="toDo">  To Do  </option><button>
                                <button onclick="secondChoice"><option value="Doing">  Doing </option><button>
                                <button onclick="thirdChoice"> <option value="Done">  Done </option><button>
                        </select>`

  }

  function write(indexElement) {
    var rescribe = document.getElementById(`write-${indexElement}`)
    rescribe.innerHTML = `<form>
                            <input type="texte" placeholder : "New name of the task">
                         </form>`
}


// function firstChoice (index) {
//     var choice = document.getElementById(`modif-${index}`)
//     choice.innerHTML = "To Do"
// }

// function secondChoice (index) {
//     var choice = document.getElementById(`modif-${index}`)
//     choice.innerHTML = "Doing"
// }

// function thirdChoice (index) {
//     var choice = document.getElementById(`modif-${index}`)
//     choice.innerHTML = "Done"
// }



