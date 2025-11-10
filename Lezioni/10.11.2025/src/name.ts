/**
 * dichiaratori <nome>:<tipo> = <valore>;
 */

let NomeCognome: string = "Riccardo Mascotto";

let isMinor: boolean = true;

let obj: Object = {};

let tutto: any = "può essere qualsiasi cosa";

tutto = {};
tutto = 42;
tutto = false;
tutto = "ora una stringa";

tutto.length; // nessun errore, anche se 'tutto' potrebbe non avere una proprietà 'length'

let idk: unknown = "";
//idk.length; // errore, 'unknown' non garantisce l'esistenza di proprietà specifiche

if (typeof idk === "string") {
  idk.length; // ok, dopo il controllo di tipo
}