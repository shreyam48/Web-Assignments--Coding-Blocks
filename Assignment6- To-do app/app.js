const itemInput = document.querySelector('#to-do')
const addBtn = document.querySelector('#add')
const todoList = document.querySelector('#list');
var todos = [];

function addTask(){
    let list = "";
    todos.forEach((todo,id)=>{
        list += `<li class="item">
        <input class="todoItem" value="${todo}" disabled>
        <button onclick="edit(${id})"><i class="far fa-edit"></i></button>
        <button onclick="remove(${id})"><i class="far fa-trash-alt"></i></button>
        <button onclick="moveUp(${id})"><i class="fas fa-level-up-alt"></i></button>
        <button onclick="moveDown(${id})"><i class="fas fa-level-down-alt"></i></button>
        `
        todoList.innerHTML = list;
    })
}
function edit(id){
    let secInput = document.querySelector(`[value="${todos[id]}"]`);
    // console.log(secInput);
    if(secInput.disabled == true)
        secInput.disabled = !secInput.disabled;
    else{
        secInput.disabled = !secInput.disabled;
        todos[id]=secInput.value;
    }
}
function remove(id){
    todos.splice(id,1);
    addTask();
}

function moveUp(id){
    if(id>0)
        [todos[id],todos[id-1]] = [todos[id-1],todos[id]];
    addTask();
}

function moveDown(id){
    if(id<todos.length-1)
        [todos[id],todos[id+1]] = [todos[id+1],todos[id]];
    addTask();
}


function check(){
    if(itemInput.value!=""){
        todos.push(itemInput.value);
    }
    else
        alert('Enter a valid Todo');
    itemInput.value = "";
    addTask();
}

addBtn.addEventListener('click',()=>check());
itemInput.addEventListener('keydown',(e)=>{
    if(e.key === "Enter")
        check();
})
