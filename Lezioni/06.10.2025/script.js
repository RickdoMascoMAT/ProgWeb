//---------------------------------------------------------------------//
//Deprecated: *var* Temperatura = 32;
let nome = "Tommaso";
const valore = 3920;

console.log("Nome: " + nome);
console.log(`ciao ${nome}`);
//---------------------------------------------------------------------//
console.log(`Pointer non funzionate (dio grazia)`)
let temp = 34;
let tp = temp;

console.log(temp);
console.log(tp);

temp = 4;

console.log(temp);
console.log(tp);
//---------------------------------------------------------------------//
console.log(`Pointer bruttissimo con obj`);

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
console.log(`IF:`)
let voto = 15;
let lode = 1;
let votoFinale;

if (voto === 30){
    votoFinale = voto + lode;
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
console.log(`Switch`);

//---------------------------------------------------------------------//
