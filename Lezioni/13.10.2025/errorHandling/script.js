function somma2(a,b){
    return a + b;    
}

/**
 * The function calculate a + b
 * @param {number} a finite number
 * @param {number} b finite number
 * @returns {number} result of a + b
 * 
 * @throws {TypeError} value is not a number
 * @throws {TypeError} number is not finite
 * 
 * @example 
 * -----------
 * //return 7
 * somma(3,4);
 * -----------
 * 
 * @author Rick_doMasco
 */
function somma(a,b){
    if(typeof(a) != 'number' || typeof(a) != 'number'){
       throw new TypeError("input != number"); 
    }

    if(!Number.isFinite(a) || !Number.isFinite(a)){
       throw new RangeError("input != finite"); 
    }

    return a + b;
}

console.log(somma(2,3));

try {
    console.log(somma([{},{}],3));
} catch (e) {
    console.log(`[Error] --> ${e.message}`)
}

try {
    let res = somma(Infinity,3);
} catch (e) {
    console.log(`[Error] --> ${e.message}`)
}
