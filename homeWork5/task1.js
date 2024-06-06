//Calculation of a rectangle's area

//Function declaration
function calculateRectangleArea(width, height) {
    return width * height;
}
console.log(calculateRectangleArea(24, 48));

//Function expression
const calculateRectangleArea2 = function (width, height) {
    return width * height;
};
console.log(calculateRectangleArea2(4, 55));

//Arrow Function
const calculateRectangleArea3 = (width, height) => width * height;

console.log(calculateRectangleArea3(12, 515));
