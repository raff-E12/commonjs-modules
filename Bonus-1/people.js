import Names from "./names.js"
import Hobbies from "./hobbies.js"

console.log(">> Rappresentazione in Funzione:");

const obj_names = Names();
const obj_hobbies = Hobbies();

// Creazione delle Card In base alla lunghezza degli oggetti.

const OutputObjPerson = () => {
    let parent_node = document.getElementById("parent-node");
    for (let index = 0; index < 10; index++) {
        let target_node =  `<div class="card-name">
        <h4><b>FullName:</b> ${obj_names[index].fullname}</h4>
        <h4><b>Hobby:</b> ${obj_hobbies[index].hobby}.</h4>
        </div>`;
        parent_node.innerHTML += target_node;
    }
    return parent_node;
}

// console.log(OutputObjPerson());
// console.log(obj_hobbies[0].hobby)
OutputObjPerson();