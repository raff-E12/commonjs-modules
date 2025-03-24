import Names from "./names.js"
import Hobbies from "./hobbies.js"

console.log(">> Rappresentazione in Funzione:");

function OutputObjPerson(){
    let Name = Names("Marco", "Merrino");
    let Hobby = Hobbies("Calcio", "Leggere Fantasy", "Basket");
    let Object_Modules = { fullName: Name.complete, hobbies: Hobby }
    let parent_node = document.getElementById("parent-node");
    let tag_node = `<div class="card-name">
            <h4><b>FullName:</b> ${Object_Modules.fullName}</h4>
            <h4><b>Hobby:</b> ${Object_Modules.hobbies.join("-")}.</h4>
        </div>`;
    parent_node.innerHTML = tag_node;
    return parent_node;
}


OutputObjPerson();