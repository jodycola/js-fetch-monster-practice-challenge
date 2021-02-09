let URL = "http://localhost:3000/monsters/"
let PAGE = 1
let container = document.body.querySelector("#monster-container")
const forward = document.querySelector("#forward")
const back = document.querySelector("#back")


fetch (URL + "?_limit=50&_page=" + PAGE)
    .then(res => res.json())
    .then(monsters => monsters.forEach(renderMonsters))

function renderMonsters(monster) {
    let entry = document.createElement("div")
    entry.innerHTML = "<h2>" + monster.name + "</h2> <h4> Age:" + monster.age + "</h4> <p> Bio:" + monster.description + "</p>"
    container.appendChild(entry)
}

// Load pages
forward.addEventListener('click', nextPage)
back.addEventListener('click', lastPage)

function nextPage(){
    PAGE + 1
    container.innerHTML = ""
    fetch(URL + "?_limit=50&_page=" + PAGE)
        .then(res => res.json())
        .then(monsters => monsters.forEach(renderMonsters))
}

function lastPage(){
    if (PAGE > 1) {
        PAGE = 1
    }
    else (PAGE = 1)
    container.innerHTML = ""
    fetch(URL + "?_limit=50&_page=" + PAGE)
        .then(res => res.json())
        .then(monsters => monsters.forEach(renderMonsters))
}

// Create form
const create = document.querySelector("#create-monster")
const form = document.createElement("form")
form.id = "monster-form"
create.appendChild(form)

const formName = document.createElement("input")
formName.id = "name"
formName.placeholder = "name..."

const formAge = document.createElement("input")
formAge.id = "age"
formAge.placeholder = "age..."

const formDes = document.createElement("input")
formDes.id = "description"
formDes.placeholder = "description..."

const createButton = document.createElement("button")
createButton.innerText = "Create Monster"

form.append(formName,formAge,formDes,createButton)
// End of Create form
