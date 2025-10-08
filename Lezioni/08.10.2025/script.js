//---------------------------------------------------------------------//
//Deprecated: *var* Temperatura = 32;
let nome = "Tommaso";
const valore = 3920;

console.log("Nome: " + nome);
console.log(`ciao ${nome}`);
//---------------------------------------------------------------------//
console.log(`-------------------------------`);
console.log(`Pointer non funzionate (dio grazia)`)
let temp = 34;
let tp = temp;

console.log(temp);
console.log(tp);

temp = 4;

console.log(temp);
console.log(tp);
//---------------------------------------------------------------------//
console.log(`-------------------------------`);
console.log(`Pointer bruttissimo con arr`);

let arr1 =  [1,2,3];
let arr2 =  arr1;
let arr3 =  [...arr1];

console.log(arr1);
console.log(arr2);
console.log(arr3);

arr1.push(4);

console.log(arr1);
console.log(arr2);
console.log(arr3);
//---------------------------------------------------------------------//
console.log(`-------------------------------`);
console.log(`Pointer bruttissimo con obj`);

let obj1 =  {a: 0,b: 1,c: 3};
let obj2 =  obj1;
let obj3 =  {...obj1};

console.log(obj1);
console.log(obj2);
console.log(obj3);

obj1.d = 4;

console.log(obj1);
console.log(obj2);
console.log(obj3);
//---------------------------------------------------------------------//
console.log(`-------------------------------`);
console.log(`IF:`)
let voto = 30;
let lode = true;
let votoFinale;

if (voto === 30 && lode){
    votoFinale = voto + 1;
} else{
    votoFinale = voto;
}

if(votoFinale >= 18 && votoFinale <=30){
    console.log(`bravo superato con un rispettosissimo: ${votoFinale}`);
} else if(votoFinale>30){
    console.log(`30 e LODE!!`);
} else{
    console.log(`ritenta cojone ${votoFinale} è crazy. blud studia...`);
}

if(votoFinale < 18){
    console.log(`ritenta cojone ${votoFinale} è crazy. blud studia...`);
} else if(votoFinale>30){
    console.log(`30 e LODE!!`);
} else{
    console.log(`bravo superato con un rispettosissimo: ${votoFinale}`);
}
//---------------------------------------------------------------------//
/*
guarda le falsy value
https://developer.mozilla.org/en-US/docs/Glossary/Falsy
*/
//---------------------------------------------------------------------//
console.log(`-------------------------------`);
console.log(`Switch`);

let auto = `BMW`; // Audi BMW o Ferrari

switch (auto){
    case "BMW":
        console.log(`Hai una BMW.`);
        break;
    case "Audi":
        console.log(`Hai una Audi.`);
        break;
    case "Ferrari":
        console.log(`Rich bitch... hai una Ferrari`);
        break;
    default:
        console.log(`Hai voluto la bici? pedala`);
        break;
}

switch (votoFinale){
    case 31:
        console.log(`30 e LODE!!`)
        break;
    case voto > 0 && voto < 18:
        console.log(`ritenta cojone ${votoFinale} è crazy. blud studia...`)
        break;
    case voto >= 18 && voto <= 30:
        console.log(`bravo superato con un rispettosissimo: ${votoFinale}`)
        break;        
}
//---------------------------------------------------------------------//
console.log(`-------------------------------`);
console.log(`Obj`);

let automobile = {
    marca: "Ford",
    modello: "Focus",
    anno: 2018,
    colore: "Nero",
    cilindrata: 1.6,
    "km/l": 15.2
};

console.table(automobile);
console.log(`Tipo ${typeof automobile}`);

let anno = automobile.anno;
console.log(`Anno: ${anno}`);

let marca = automobile["marca"];
console.log(`Marca: ${marca}`);

let consumi = automobile["km/l"];
console.log(`consumi Km/l: ${consumi}`);

const CONSUMI_UM = "km/l";

let consumi_const = automobile[CONSUMI_UM];
console.log(`consumi (con cost) Km/l: ${consumi_const}`);

let owner = automobile["owner"] ?? "Nessun Owner assegnato";
console.log(`Proprietario: ${owner}`);

if (automobile.autista){
    console.log(`Autista ${automobile.autista}`)
} else {
    automobile.autista = {
        nome: "Riccardo",
        cognome: "Mascotto",
        dNascita: "2003",
        sesso: 'M'
    };
    console.log(`Autista ${automobile.autista}`)
}

automobile.autista.patente = true;

automobile.autista.patente = {};
automobile.autista.patente.categoria = `AB`;
automobile.autista.patente.emissione = 2021;


automobile["4x4"] = true;
automobile["rimorchio"] = null;
automobile["ruotadiscorta"] = NaN;

delete automobile["km/l"];

automobile["kml/l"] = 1.6;

console.log("table:");
console.table(automobile);
console.log("table:");
console.log(automobile);
console.log("dir:");
console.dir(automobile, {depth: Infinity});

//---------------------------------------------------------------------//
console.log(`-------------------------------`);