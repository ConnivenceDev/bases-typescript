"use strict";
console.log("yo");
// variables
let num1 = 24;
let num2;
let numOrString;
// tableaux
let array = ['chien', 'chat', 'lapin'];
let array2 = [];
let array3 = [];
// Une valeur avec un ? après le nom peut être undefined
// On ajoute une ligne
const zidane = {
    id: 0,
    name: "Zidane"
};
// Les classes
class Singer {
    constructor(id, name, nbgrammys, alive) {
        this.id = id;
        this.name = name;
        this.alive = alive;
        this.nbgrammys = nbgrammys;
    }
}
const prince = new Singer(0, 'Prince', 2);
const macmiller = new Singer(1, 'Mac Miller', false, false);
// Les fonctions
const superFonction = (name) => {
    console.log(`Bonjour ${name}`);
};
// void = je n'attends rien de la fonction
const capitaine = (age, size) => {
    if (size) {
        console.log(`La taille du capitaine est de ${size}cm `);
    }
    console.log(`Il est âgé de ${age} ans `);
};
// string ou autre derrière le fonction = j'attends un return de ce type
const capitaine2 = (age, size) => {
    if (size) {
        console.log(`La taille du capitaine est de ${size}cm `);
    }
    console.log(`Il est âgé de ${age} ans `);
    return ("bonjour");
};
superFonction("Théo");
capitaine(16);
capitaine(16, 163);
const user1 = {
    name: "Julien",
    attributes: [1, "test"]
};
// Enum :
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["PREMIUM"] = 1] = "PREMIUM";
    Role[Role["BASIC"] = 2] = "BASIC";
})(Role || (Role = {}));
const user2 = {
    name: "Julien",
    attributes: [1, "test"],
    role: Role.PREMIUM
};
if (user2.role === Role.ADMIN) {
    console.log("Connexion speciale admin");
}
