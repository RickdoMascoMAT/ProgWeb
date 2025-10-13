document.addEventListener("DOMContentLoaded", () =>  {
    console.log(`Hello World;`)
    let title = document.getElementById("title");
    console.log(`Title: ${title}`);
    console.log(`body: ${typeof document.body}`);
    console.log(document.body instanceof HTMLElement);
});



