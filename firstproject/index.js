const enterButton = document.getElementById ("enter")
const input = document.getElementById ("userInput")
const ul = document.querySelector ("ul")
const item = document.getElementsByTagName ("li")

function hasimput ( ) {
return input.value.length > 0
}

function createListElement() {
    const li = document.createElement ("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = " ";
}

   
function crossOut() {
    li.createList.toggle("dine")
}

li.addeventListener("click",crossOut);
const dBtn = createListElement("button");
dBtn.appendChild(document.createTextNode("X"));

function deleteListitem() {
    li.classList.add("delete")
   }




function addListAfterKeypress(event) {
    if (hasimput() && event.which === 13) {
        createListElement();
    }
    }
function addListAfterClick() {
    createListElement();
}

enterButton.addEventListener("click",addListAfterClick);
input.addEventListener("keypress",addListAfterKeypress);