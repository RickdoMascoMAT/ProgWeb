let log = console.log;

log("1");

setInterval(() => {
    log("6");
}, 1000);

setTimeout(
    () => {
    log("2");
}, 100);

Promise.resolve().then(() => {
    log("3");
});

Promise.resolve().then(() => {
    log("4");
});

setTimeout(
    () => {
    log("5");
}, 100);  

(() => { log("7") })();

log("8");