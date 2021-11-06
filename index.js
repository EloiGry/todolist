
var descriptionInput = document.getElementById("input")
var priorityInput = document.getElementById("priority-input")
var list = document.getElementById("list")

var tasks = []

function onTaskSubmit() {
  var task = {
    value: descriptionInput.value,
    status: "to do",
    priority: priorityInput.value
  }
  
  tasks.push(task)
  displayList(tasks)

  descriptionInput.value = ""
  priorityInput.value = ""
}

function displayList(array) {
  list.innerHTML = ``
  
  array.forEach(function(task, index) {
    var statusClass = getStatusClass(task.status)

    list.innerHTML = list.innerHTML + `
      <li id="item-${index}" class="list-group-item">
        <div class="row justify-between py-2">
          <div class="col-5 d-flex align-items-center">
            <span>${task.value}</span>
          </div>
          <div class="col-2 d-flex align-items-center">
            <b class="${statusClass} opacity-75">${task.status}</b>
          </div>
          <div class="col-2 d-flex align-items-center">
             <span>${task.priority !== 0 ? task.priority : ''}</span>
           </div>
          <div class="col-3 d-flex justify-content-end">
            <button type="button" class="btn btn-outline-primary me-3" onclick="edit(${index})">Modifier</button>
            <button type="button" class="btn btn-outline-danger" onclick="remove(${index})">Supprimer</button>
          </div>
        </div>
      </li>
    `
  })
}

function remove(index) {
  tasks.splice(index, 1)
  displayList(tasks)
}

function edit(index) {
  var taskLi = document.getElementById(`item-${index}`)
  var task = tasks[index]
  
  taskLi.innerHTML = `
    <div class="row justify-between py-2">
      <div class="col-5 d-flex align-items-center">
        <input id="item-${index}-input" type="text" class="form-control" value="${task.value}" autofocus />
      </div>
      <div class="col-2 d-flex align-items-center">
        <select id="item-${index}-select" class="form-select" aria-label="Select status">
          <option ${task.status === 'to do' ? 'selected' : ''} value="to do">To do</option>
          <option ${task.status === 'doing' ? 'selected' : ''} value="doing">Doing</option>
          <option ${task.status === 'done' ? 'selected' : ''} value="done">Done</option>
        </select>
      </div>
      <div class="col-2 d-flex align-items-center">
        <input id="item-${index}-priority" type="number" class="form-control" value="${task.priority}" min="0" max="5" />
      </div>
      <div class="col-3 d-flex justify-content-end">
        <button type="button" class="btn btn-outline-danger me-3" onclick="displayList()">Annuler</button>
        <button type="button" class="btn btn-outline-success" onclick="modify(${index})">Valider</button>
      </div>
    </div> 
  `
}

function modify(index) {
  var input = document.getElementById(`item-${index}-input`)
  var select = document.getElementById(`item-${index}-select`)
  var singlePriorityInput = document.getElementById(`item-${index}-priority`)
  tasks[index].value = input.value
  tasks[index].status = select.value
  tasks[index].priority = Number(singlePriorityInput.value)
  displayList(tasks)
}

function getStatusClass(status) {
  if (status === "to do") {
    return "text-danger"
  } else if (status === "doing") {
     return "text-warning"
  } else {
    return "text-success"
  }
}

function generateRandomTask() {
  var randomTasks = [
    "Faire du yoga",
    "Aller au cinéma",
    "Manger la meilleure pizza de sa vie",
    "100 - 0 au basket",
    "Faire les courses"
  ]

  var task = {
    value: randomTasks[Math.floor(Math.random() * randomTasks.length)],
    status: "to do"
  }

  tasks.push(task)
  displayList(tasks)
}

function filter(status) {
  var filteredTasks = tasks.filter(function(task) {
    return task.status === status || status === "all"
  })
  
  displayList(filteredTasks)
}

function priorityKeypress(event) {
  var char = String.fromCharCode(event.charCode)

  if (Number(char) === NaN) {
    priorityInput.value = ""
  }
}

function orderPriority(operator) {
  var sortedTasks = []

  if (operator === "+") {
    sortedTasks = tasks.sort(function(a, b) {
      return b.priority - a.priority
    })
  } else {
    sortedTasks = tasks.sort(function(a, b) {
      return a.priority - b.priority
    })
  }

  displayList(sortedTasks)
}


