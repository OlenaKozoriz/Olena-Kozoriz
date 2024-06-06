//Відстеження кількості позитивних, негативних та нульових чисел
const numbers = [2, -5, 0, 7, -3, 0, 10, -8];
let positiveCount = 0;
let negativeCount = 0;
let zeroCount = 0;

for (const element of numbers) {
    if (element > 0) {
        positiveCount++;
    } else if (element < 0) {
        negativeCount++;
    } else if (element == 0) {
        zeroCount++;
    }
}
console.log(`Кількість позитивних чисел: ${positiveCount}`);
console.log(`Кількість негативних чисел: ${negativeCount}`);
console.log(`Кількість нульових чисел: ${zeroCount}`);
