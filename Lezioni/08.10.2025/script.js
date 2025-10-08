//---------------------------------------------------------------------//
console.log(`-------------------------------`);
console.log(`funzioni`);

function somma(a,b){
    return a + b;    
}

//ricorsione non ancora fatta:
let c = 0
function fibonacci(a,b,c){
    if(c>= 20){
        c = 0;
        return;
    }
    console.log(`fibonacci n-${c+1}: ${a}`);
    c = c+1;
    return fibonacci(b, a + b, c);
}

const sottrazione = function(a,b){
    return a-b;
}

const moltiplicazione = (a,b) => a * b;

console.log(somma(32,45));
fibonacci(1,2,c);
console.log(sottrazione(32,123));
console.log(moltiplicazione(32,45));

//somma e sottrazione si comportano in modo stronzo se si sommano numeri a char o stringhe

function creaAuto(marca,modello,anno){
    let obj = {
        marca,
        modello,
        anno
    }

    return {
        marca: marca,
        modello: modello,
        anno: anno
    }
}

function auto(marca,modello,anno){
    this.marca = marca;
    this.modello = modello;
    this.anno = anno;
}

//2 diversi modi per creare degli obj
let auto1 = creaAuto("Fiat", "punto", 2025);
let auto2 = new auto("Fiat","punto",2023);

console.table(auto1);
console.table(auto2);

let temp = Object.create({});
console.log(temp);

let auto3 = Object.create(auto2);
console.log(auto3);

console.log("key: ", Object.keys(auto1));
console.log("values: ", Object.values(auto1));

//---------------------------------------------------------------------//
console.log(`-------------------------------`);
console.log(`errori`);

try{
    let error = new Error("Boom");
    typeError = new TypeError("Type Boom!!")
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
    console.log("Va tutto bene!");

    throw error;
    throw typeError;
} catch (e){
    console.error(`[Error] -> ${e.message}`)
    console.log(`ERRORE: ${e.message}`)
    console.table({
            name: e.name,
            message: e.message,
            instanceof: e instanceof TypeError
        }
    )
} finally {
    console.warn("Cleanup")
}

console.log(`FINITO`)