let inputs = document.getElementById("task");
let text = document.querySelector(".text");
let description= document.getElementById('desc');
let day= document.getElementById("date");
let Priority= document.getElementById('Priority');
let box= document.getElementById("box");
function addtask(){
    if(inputs.value == ""){
        alert("Please Enter Task")
    }else{
        let newEle = document.createElement("ul");
        newEle.className="remo";
        newEle.innerHTML=`<input type="checkbox" id="check"> ${inputs.value} <p> ${description.value}</p> <p>
        ${Priority.value}    ${day.value}    ${box.value}</p>`;
        text.appendChild(newEle);
        inputs.value="";
        description.value="";
        day.value="";
        Priority.value="";
        box.value="";
        let again=document.getElementById('write');
        again.style.display='none';
        
        newEle.querySelector("#check").addEventListener("click" , remove);
        function remove(){
            newEle.remove()
        }
        
    }
}

