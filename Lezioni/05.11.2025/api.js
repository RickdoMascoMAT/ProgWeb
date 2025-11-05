const myAPI = fetch('https://jsonplaceholder.typicode.com/posts/1');

console.log(myAPI);

myAPI.then(response => {
    console.log('Data fetched successfully:', response);
});