//Дане ціле число. З'ясувати, чи є воно простим
// (простим називається число, більше 1, які не мають інших дільників крім 1 і себе).
console.log('start task 4')
let x = 3;
let y = 2;
function isPrime (num){
    if (num === 1) {
        return 'Число не є простим';
    } else if (num === 2 || num === 3) {
        return 'Число є простим';
    } else {
        for (y; y <= num; y++) {
            if (num % y === 0) {
                return 'Число не є простим';
            }
        }
    } return 'Число є простим';
}
console.log(x, isPrime(x));
console.log('end task 4')
