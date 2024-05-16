//Обчислення суми елементів масиву
const numbers = [10, 20, 30, 40, 50];
const sumNumbers = numbers.reduce ((accumulator, number) => {
	return accumulator + number
}, 0
)
//NOTE: syntax of this method is array.reduce(function(total, currentValue, currentIndex, arr), initialValue), where 'accumulator' parameter is the initialValue or the previously returned value of the function; 'currentValue' points to the value of array's element (required parameter of the callback; and I didn't 'currentIndex' and 'arr' parameters since there is no need due to the description of the task.
console.log (sumNumbers)