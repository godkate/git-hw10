//Дане деяке число. Визначити, чи можна одержати це число шляхом зведення числа 3 у деякий ступінь.
// (Наприклад, числа 9, 81 можна отримати, а 13 - не можна)

console.log('start task 5')
let randomNumber = 82;
while (randomNumber % 3 === 0) {
    randomNumber /= 3;
}
if (randomNumber === 1) {
    console.log('Число можна одержати');
} else {
    console.log('Число не можна одержати')
}
console.log('end task 5')
