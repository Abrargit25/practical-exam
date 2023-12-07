let title = document.querySelector('input[placeholder="title"]')
let desc = document.querySelector('input[placeholder="description"]')
let btn = document.querySelector('#btn')
let container=document.querySelector('.todo-container')

let titleVal;
let descVal;
let listVals=[];

title.addEventListener("keyup", function (e) {
  titleVal = e.target.value
  console.log(titleVal)
})

desc.addEventListener("keyup", function (e) {
  descVal = e.target.value
  console.log(descVal)
})

btn.addEventListener("click", function (e) {
  let objInps = { "titleVal": titleVal, "descVal": descVal }
  listVals = [objInps];
  console.log(listVals)
  displayItems();
})



function displayItems() {
  const items = listVals.map(function (e, index) {

    let div1 = document.createElement('div');
    div1.innerHTML = "";

    div1.setAttribute("class", "card");
    div1.setAttribute("style", "display:flex; flex-direction:column; gap:5px justify-content:space-between;");

    let div2 = document.createElement('div');
    div2.setAttribute("class", "tit-desc");
    div2.setAttribute("style", "display:flex; flex-direction:column; order:-1;")

    let div3 = document.createElement('div');
    div3.setAttribute("class", "btndiv");
    div3.setAttribute("style", "display:flex; flex-direction:row;justify-content:space-around; border-top:1px solid grey; padding-top:5px;")

    let h2 = document.createElement('h2');
    h2.textContent = e.titleVal;

    let p = document.createElement('p');
    p.style.color='white'
    p.style.fontSize='16px'
    p.textContent = e.descVal;


    let btnEdit = document.createElement('button');
    btnEdit.setAttribute("style", "width:80px; height:40px; border-radius:5px; font-size:16px;");
    btnEdit.textContent = "Edit";



    btnEdit.addEventListener("click", function () {
      
      alert('you can edit the task and submit it again');
      const todoToEdit = listVals[index];
      
      const newTitle = prompt("Edit title:", todoToEdit.titleVal) 
      const newDesc = prompt("Edit description:", todoToEdit.descVal) 
      
      todoToEdit.titleVal = newTitle;
      todoToEdit.descVal = newDesc;
  
      div1.remove();
      displayItems();
  
    });

    let btnDelete = document.createElement('button');
    btnDelete.setAttribute("style", "width:80px; height:40px; border-radius:5px; font-size:18px");
    btnDelete.textContent = "Delete";


    btnDelete.addEventListener("click", function () {       
      alert(' delete!,are you sure ?')                     
      div1.remove();
    });

    div2.appendChild(h2);                              
    div2.appendChild(p);                            

    div3.appendChild(btnEdit);                   
    div3.appendChild(btnDelete);                  
    div1.appendChild(div3);                       

    div1.appendChild(div2);                    

    container.appendChild(div1);                   

    return div1;
  });
}







