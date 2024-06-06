//Via 'Promise' methods
const finalArray1 = [];
//In 'for' cycle we're pulling all 10 planets into the newly created 'finalArray1' array. And this promise becomes a 'response' parameter in the next 'then' method. Inside this 'then', we convert the promise from the previous 'fetch' action to 'json' format using the specific 'json' method)
for (let i = 1; i <= 10; i++) {
    finalArray1.push(fetch(`https://swapi.dev/api/planets/${i}`).then((response) => response.json()));
}
//With the help of the 'Promise.all' method we ensure that all the promises from 'finalArray1' run one after another (not asynchronously). The result of the 'Promise.all' method (eventually the array of 10 planets) becomes an 'arr' parameter in the next 'then' method. Inside this 'then', we convert all the information, received in the form of arrays, to print only the 'name' property, using 'map' method)
Promise.all(finalArray1).then((arr) => console.log(arr.map((massive) => massive.name)));

// Via 'await'
const finalArray2 = [];
for (let i = 1; i <= 10; i++) {
    const response = await fetch(`https://swapi.dev/api/planets/${i}`);
    const finalName = await response.json();
    finalArray2.push(finalName.name);
}
console.log(finalArray2);
