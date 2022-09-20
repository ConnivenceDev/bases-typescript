console.log("yo")

// variables

let num1 = 24;
let num2:number;
let numOrString: number | string;

// tableaux

let array = ['chien', 'chat', 'lapin'];
let array2:number[] = [];
let array3:(number|boolean)[] = []

// objets

// On crée un modèle

interface Player {
  id: number,
  name: string,
  jersey?: number
}

// Une valeur avec un ? après le nom peut être undefined

// On ajoute une ligne

const zidane:Player = {
  id:0,
  name:"Zidane"
}

// Les classes

class Singer {
  id:number;
  name: string;
  alive?: boolean;
  nbgrammys: number|boolean;

  constructor(id: number, name: string, nbgrammys: number|boolean, alive?: boolean){
    this.id = id;
    this.name = name;
    this.alive = alive;
    this.nbgrammys = nbgrammys;
  }
}

const prince = new Singer(0, 'Prince', 2)
const macmiller = new Singer(1, 'Mac Miller', false, false)

// Les fonctions

const superFonction = (name: string) => {
  console.log(`Bonjour ${name}`)
}

// void = je n'attends rien de la fonction

const capitaine = (age: number | string, size?:number):void => {
  if(size){
    console.log(`La taille du capitaine est de ${size}cm `)
  }

  console.log(`Il est âgé de ${age} ans `)
}

// string ou autre derrière le fonction = j'attends un return de ce type

const capitaine2 = (age: number | string, size?:number):string => {
  if(size){
    console.log(`La taille du capitaine est de ${size}cm `)
  }

  console.log(`Il est âgé de ${age} ans `)

  return("bonjour");
}

superFonction("Théo");

capitaine(16);

capitaine(16, 163)


// Enum & Tuple

// Tuple :

interface User{
  name:string;
  attributes: [number, string]
}

const user1:User = {
  name: "Julien",
  attributes: [1, "test"]
}

// Enum :

enum Role {ADMIN, PREMIUM, BASIC}

interface UserBis{
  name:string;
  attributes: [number, string]
  role: Role
}

const user2:UserBis = {
  name: "Julien",
  attributes: [1, "test"],
  role: Role.PREMIUM
}

if(user2.role === Role.ADMIN){
  console.log("Connexion speciale admin")
}