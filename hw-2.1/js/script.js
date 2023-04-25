// задание 1
let a = 10;
alert('задание 1 \n' + a);
a = 20;
alert('задание 1 \n' + a);
//задание 2
const releaseDateiphone = alert('задание 2 \n 29 июня 2007 года');
// задание 3
const autorJs = alert('задание 3 \n Brendan Eich');
// задание 4
let b = 2;
a = 10;
alert('задание 4 \n' + Number(a + b));
alert('задание 4 \n' + Number(a - b));
alert('задание 4 \n' + Number(a * b));
alert('задание 4 \n' + Number(a / b));

// задание 5
a = Number(prompt(`задание 5 \n Введите первое число`));
b = Number(prompt(`задание 5 \n Введите первое число`));
alert('Сумма чисел ' + a + ' и ' + b + ' равна\n' + Number(a + b));
// задание 6
a = 2;
b = 5;
result = Number(2 ** 5);
alert('задание 6 \n 2 в 5 степени\n' + result);
// задание 7
a = 9;
b = 2;
alert('задание 7 \n остаток от деления ' + a + ' и ' + b + ' равен\n' + Number(a % b));
// задание 8
a = 2;
b = 3;
alert('задание 8 \n' + Number(a + b));
// задание 9
a = 1;
b = 2;
alert('задание 9 \n' + a + b);
// задание 10
a = 5;
b = 6;
alert('задание 10 \n' + Number(a + b) + 'px');
// задание 11
let age = Number(prompt(`задание 11 \n Введите ваш возаст`));
age++;
alert('задание 11 \n Через год вам будет ' + age);

// задание 12
let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num++;
num--;
alert(num);


// задание 13
let name = prompt(`Задание 13 \n Ваше Имя`);
alert(`Задание 13 \n Привет, ${name} !`);



// задание 14
let salary = Number(prompt(` Введите сумму вашей ЗП! `));//запрашиваем зп
while (isNaN(salary) || salary == 0) { //проверяем введенные данные на 0  и Nan
    alert(`Вы не ввели данные, или ввели не цифры. Попробуйте заново`); //если пусто или не нумбер
    salary = Number(prompt(` Введите сумму вашей ЗП! `)); //заново запрашиваем
}
let premium = Number(salary / 100 * 20); //премия
let sum = Number(salary + premium); // за + премия
let tax = Number(sum / 100 * 13);// налог от за +премия
let budget = Number(sum - tax); //сумма за вычетом налога
let forDay = Number(budget / 30); // бюджет на день с учетом 30 дней в месяце
// Вывод всей инфы в алерте    
alert(`Ваш доход: ` + salary + '\nВаша премия: ' + premium +

    '\nОбщая сумма с премией: ' + sum + '\nНалог на доход: ' + tax +
    `\nВаш бюджет за вычетом налога: ` + budget + `\nБюджет на один день: ` + forDay);
