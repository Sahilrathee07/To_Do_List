const inputbox = document.getElementById("input-box");
const list1 = document.getElementById("list");

function addtask(){
    if(inputbox.value == '') {
        alert("You must write something");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        list1.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputbox.value = '';
    savedata();
}

list1.addEventListener("click",function(e){
    if(e.target.tagName === 'LI') {
        e.target.classList.toggle("checked");
    }
    else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
},false);

function savedata() {
    localStorage.setItem("data",list1.innerHTML);
}

function showtask() {
    list1.innerHTML = localStorage.getItem("data");
}
showtask();