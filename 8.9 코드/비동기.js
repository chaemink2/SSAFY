const result = axios.get("https://jsonplaceholder.typicode.com/todos")
const array = [];
array.push(result.data);
console.log(array)