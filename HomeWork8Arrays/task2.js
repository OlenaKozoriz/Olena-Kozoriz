//Копіювання з мутацією
const initialArray = [1, 2, 3, 4, 5];

const mappedArray = initialArray.map((number, index) => number * index);
//NOTE: syntax of this method is array.map(function(currentValue, index, arr), thisValue), where parameter 'currentValue' points to the value of array's element (required parameter of the callback; and parameter 'index' points to the index of array's element (optional parameter). 'arr' and 'thisValue' I didn't use since there is no need due to the description of the task.
console.log(mappedArray);
