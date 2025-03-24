console.log(">> Sezione Sugli Interessi Personali");

export default function HandleHobbyPerson () {
    const hobbyLuca = ["Calcio", "Musica", "Fotografia"];
    const hobbyMarco = ["Corsa", "Cinema", "Lettura"];
    const hobbyGiulia = ["Viaggi", "Disegno", "Yoga"];
    const hobbyAlessandro = ["Pittura", "Escursionismo", "Cucina"];
    const hobbySara = ["Shopping", "Fitness", "Scrittura"];
    const hobbyMatteo = ["Pittura", "Escursionismo", "Cucina"];
    const hobbyFrancesca = ["Pittura", "Escursionismo", "Cucina"];
    const hobbyDavide = ["Pittura", "Escursionismo", "Cucina"];
    const hobbyMartina = ["Pittura", "Escursionismo", "Cucina"];
    const hobbyAndrea = ["Pittura", "Escursionismo", "Cucina"];
    
    const Hobbys = [ hobbyLuca, hobbyMarco, hobbyGiulia, hobbyAlessandro, hobbySara, hobbyMatteo, hobbyFrancesca, hobbyDavide, hobbyMartina, hobbyAndrea ];
    let list_hobby = {};

    for (const key in Hobbys){
        list_hobby[key] = {hobby: Hobbys[key]};
    }

    return list_hobby;
}

console.log(HandleHobbyPerson())
