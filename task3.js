//Дане ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N

console.log('start task 3')
const integer = 36;
for (firstInteger = 1; firstInteger <=100; firstInteger++) {
    let squareNumber = firstInteger*firstInteger;
    if (squareNumber <= integer) {
        console.log(firstInteger);
    }
}
console.log('end task 3')