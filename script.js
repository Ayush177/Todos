var ul = document.getElementById("list");
var li;

let addButton = document.getElementById("add");
addButton.addEventListener("click",addTodo);

let removeButton = document.querySelector("#remove");
removeButton.addEventListener("click",removeTodo);

let removeEvery = document.querySelector(".removeEvery");
removeEvery.addEventListener("click",remEve);

function addTodo(){
    let input = document.querySelector("input");
    let val = input.value;
    let textnode = document.createTextNode(val);
    console.log(val);

    if(val === ""){
        return false;
    }
    else{
        li = document.createElement("li");
        
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.setAttribute("id","check");

        let label = document.createElement("label");

        li.appendChild(checkbox);
        label.appendChild(textnode);
        li.appendChild(label);
        ul.insertBefore(li,ul.childNodes[0]);
        setTimeout(()=>{
            li.className="visual";    
        },2);
        input.value="";
    }
}


function removeTodo(){
    li = ul.children;
    for(let i=0;i<li.length;i++){
       while(li[i] && li[i].children[0].checked){
            ul.removeChild(li[i]);
       }
    }
}

function remEve(){
    li = ul.children;
    for(let i=0;i<li.length;){
        if(li[i])
            ul.removeChild(li[i]);
    }
}