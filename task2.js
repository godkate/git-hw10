//Один долар коштує 27 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів

console.log('start task 2')
let dollar = 10;
const uah = 27;
let money = "";
for (dollar; dollar <= 100; dollar += 10) {
    money = `${dollar} доларів - це ${dollar * uah} гривень`;
    console.log(money)
}

console.log('end task 2')