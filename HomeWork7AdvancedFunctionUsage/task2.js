function Num(num) {
    console.log(num);
    if (num <= 0) {
        return 'Stop';
    } else {
        return Num(num - 1);
    }
}
const result = Num(5);
console.log(result);
