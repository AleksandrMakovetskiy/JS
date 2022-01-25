//25 Основи JavaScript - Норма

//1

/*let userName = prompt('Привет, как тебя зовут?','');
alert('Привет, '+userName+' !');*/

//2

/*let user = prompt('Какого ты года рождения?', '');
let userAge = Number (user);
const thisYear = 2022;
let yourAge = thisYear - userAge;
alert('Тебе ' + yourAge + ' лет!');*/

//3

/*let user = prompt('Назовите длину стороны квадрата?', '');
let x = Number(user);
let perimeter = x * 4;
alert('Периметр квадрата равен ' + perimeter);*/


// 26 Типи данних та оператори - норма

//1

/*let sum = 100;
let price = 21;
let pieces = (Math.floor(sum/price));
console.log(pieces);
let change = (sum - (price * pieces));
console.log(change);*/

//2

/*
let user = prompt('Назовите любое трёхзначное число?', '');
let a = Number(user);
let b = 0;
for (; a; a = Math.floor(a / 10)) {
    b *= 10;
    b += a % 10;
}
alert(b);
*/


// 27 Цикли - норма

//1

/*let user = prompt('Укажите пятиразрядное число, а мы проверим палиндром или нет?', '');
let x = Number(user);
let isPalindromeNumber = function (x) {
    if (x < 0) return false;
    if (x % 10 ===0) return false;
    if (x < 10) return true;

    let rev = 0;

    while (x > rev) {
        rev *= 10;
        rev += x % 10;
        x = Math.trunc(x /10)
    }

    return  x === rev || x === Math.trunc(rev/10)
};
alert(isPalindromeNumber(x));*/

//2

/*
let user = prompt('Укажите сумму Вашей покупки?', '');
let x = Number (user);
if (x < 200) {
    alert('Сумма к оплате со скидкой ' + x);
}
if (x >= 200 && x < 300) {
    alert('Сумма к оплате со скидкой ' + (x-(x * 3 / 100)));
}
if (x >= 300 && x < 500) {
    alert('Сумма к оплате со скидкой ' + (x-(x * 5 / 100)));
}
if (x >= 500) {
    alert('Сумма к оплате со скидкой ' + (x-(x * 7 / 100)));
}
*/

//4

/*let days = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
let currDay = 0;

while (confirm(`${days[currDay]}. Хотите увидеть следующий день?`)) {
    currDay = (currDay + 1) % days.length;
}*/
