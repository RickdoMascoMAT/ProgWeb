document.addEventListener("DOMContentLoaded", () => {
    console.log(`Hello World;`)
    let title = document.getElementById("title");
    console.log(`Title: ${title}`);
    console.log(`body: ${typeof document.body}`);
    console.log(document.body instanceof HTMLElement);
});

const button = document.getElementById("btn1");

let c = 0
    function fibonacci(a, b, c) {
        if (c > 20) {
            c = 0;
            return;
        }
        console.log(`fibonacci n-${c}: ${a}`);
        c = c + 1;
        return fibonacci(b, a + b, c);
    }

button.addEventListener("click", (event) => {
    console.clear();
    fibonacci(0,1,c);
});


/* function myListener(){}; */

/* button.addEventListener("click", myListener); */