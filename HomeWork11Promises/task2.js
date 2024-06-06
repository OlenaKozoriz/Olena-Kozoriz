//Fetching all the starships for Han Solo character (Promises methods' implementation)
function getStarShips1() {
    const resultArray = [];
    resultArray.push(
        fetch('https://swapi.dev/api/people/14')
            .then((response) => response.json())
            .then((data) => console.log(data.starships))
    );
}
getStarShips1();

//Fetching all the starships for Han Solo character (implementation via the asynchronous function with 'async' key word)
async function getStarShips2() {
    const resultArray = [];
    const response = await fetch('https://swapi.dev/api/people/14');
    const finalName = await response.json();
    resultArray.push(finalName.starships);
    console.log(resultArray);
}
getStarShips2();
