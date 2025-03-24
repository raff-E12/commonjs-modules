
console.log(">> Rappresentazione in Funzione:");

function OutputObjPerson(){
    let {HandlePersonName} = require("./names.js");
    let {HandleHobbyPerson} = require("./hobbies.js")
    let Names = HandlePersonName("Marco", "Merrino");
    let Hobby = HandleHobbyPerson("Calcio", "Leggere Fantasy", "Basket");
    let Object_Modules = { fullName: Names.complete, hobbies: Hobby }
    return Object_Modules;
}

console.log(OutputObjPerson());