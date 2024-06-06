const numbersList = [1, 10, 14, 2, 4, 5, 43, 34];
const copiedArray = Array.from(numbersList); //копіювання першого масиву в другий

copiedArray.sort((a, b) => a - b); //here we used the compare function with 'a' and 'b' parameters which have been compared between each other and thus the values have been sorted according to the returned (negative, zero, positive) value.

console.log(numbersList, copiedArray);
