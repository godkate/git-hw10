//Вивести числа від 20 до 30 через пропуск, використовуючи крок 0,5 (20 20,5 21 21,5….)
console.log('start task 1');
let firstNumber = 20;
let resultStr = "";
for (firstNumber; firstNumber <=30; firstNumber += 0.5) {
    resultStr += `${firstNumber} `;
}
console.log(resultStr);
console.log('end task 1');