console.log(">> Sezione Sul Nome Completo");

export default function HandlePersonName () {
    const names = ["Luca", "Marco", "Giulia", "Alessandro", "Sara", "Matteo", "Francesca", "Davide", "Martina", "Andrea"];
    const lastnames = ["Bianchi", "Rossi", "Ferri", "Conti", "Moretti", "Galli", "De Luca", "Rizzo", "Colombo", "Fontana"];
    let obj_result = {};

    for (const key in names) {
        obj_result[key] = {name: names[key], lastname: lastnames[key], fullname: `${names[key]} ${lastnames[key]}`};
    }

    return obj_result;
}

console.log(HandlePersonName())