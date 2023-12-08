
let title = document.querySelector('input[placeholder="title"]');
let desc = document.querySelector('input[placeholder="description"]');
let btn = document.querySelector('#btn');
let container = document.querySelector('.todo-container');

let listVals = [];

title.addEventListener("keyup", function (e) {
    titleVal = e.target.value;
    console.log(titleVal);
});

desc.addEventListener("keyup", function (e) {
    descVal = e.target.value;
    console.log(descVal);
});

btn.addEventListener("click", function () {
    listVals.push({ "titleVal": titleVal, "descVal": descVal });
    console.log(listVals);
    displayItems();
});

function displayItems() {
    container.innerHTML = listVals.map(function (e, index) {
        return `
            <div class="card" style="display:flex; flex-direction:column; gap:5px; justify-content:space-between;">
                <div class="tit-desc" style="display:flex; flex-direction:column; order:-1;">
                    <h2>${e.titleVal}</h2>
                    <p style="color:white; font-size:16px;">${e.descVal}</p>
                </div>
                <div class="btndiv" style="display:flex; flex-direction:row; justify-content:space-around; border-top:1px solid grey; padding-top:5px;">
                    <button style="width:80px; height:40px; border-radius:5px; font-size:16px;" onclick="editTask(${index})">Edit</button>
                    <button style="width:80px; height:40px; border-radius:5px; font-size:18px;" onclick="deleteTask(${index})">Delete</button>
                </div>
            </div>
        `;
    }).join('');
}

function editTask(index) {
    alert('You can edit the task and submit it again');
    const todoToEdit = listVals[index];
    const newTitle = prompt("Edit title:", todoToEdit.titleVal);
    const newDesc = prompt("Edit description:", todoToEdit.descVal);
    todoToEdit.titleVal = newTitle;
    todoToEdit.descVal = newDesc;
    displayItems();
}

function deleteTask(index) {
    if (confirm('Delete! Are you sure?')) {
        listVals.splice(index, 1);
        displayItems();
    }
}
