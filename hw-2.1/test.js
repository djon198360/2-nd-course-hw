
let userName = getCookie();

const randomNum = (length, num) => { //Функция рандомного выбора загадки
    return Math.round(Math.random() * (length - num)); //умножаем рандомное число на длину массива - 1 и округляем

}

function getCookie() {
    let userNames = '';
    const results = document.cookie.match(/user_name=(.+?)(;|$)/);
    if (results) {
        userNames = decodeURIComponent(results[1]);
    } else {
        userNames = prompt('Привет, давай знакомться !\nВведи своё имя !')
        if (userNames === null) userNames = 'Гость';
        document.cookie = 'user_name=' + encodeURIComponent(userNames) + ';max-age=31556926;'
    }
    return `${userNames}`;
}

const season = () => {
    let numbers = Number(prompt(userName + ' введите номер месяца'));

    const seasonArr = ['Январь', 'Февраль', 'Март', 'Апрель',
        'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
    let num = numbers - 1;

    (numbers > 0 && numbers < 13) ?

        alert(
            (numbers > 0 && numbers < 3) ? `Месяц ${seasonArr[num]}, это Зима` :
                (numbers > 2 && numbers < 6) ? `Месяц ${seasonArr[num]}, это Весна` :
                    (numbers > 5 && numbers < 9) ? `Месяц ${seasonArr[num]}, это Лето` :
                        (numbers > 8 && numbers < 12) ? `Месяц ${seasonArr[num]}, это Осень` :
                            `Месяц ${seasonArr[num]}, это Зима`
        ) :
        alert('Вы ввели некорректное значение');
}
/*
let gameArray = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];

const gameStart = () => {
    gameArray = gameArray.sort(() => Math.random() - 0.5);
    alert(gameArray);
    let firstWord = prompt('Введите первое слово');
    let secondWord = prompt('Введите последнее слово');
    if (firstWord.toUpperCase() === gameArray[0].toUpperCase() && secondWord.toUpperCase() === gameArray[gameArray.length - 1].toUpperCase()) {
        alert(`${userName}, ты угадал оба слова`);
    }
    else if (firstWord.toUpperCase() === gameArray[0].toUpperCase() || secondWord.toUpperCase() === gameArray[gameArray.length - 1].toUpperCase()) {
        alert(`${userName}, ты был близок к победе, угадал одно из слов`);
    }
    else {
        alert(`${userName}, ты не угадал слова`)
    }
}
*/
let gameArray = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];//Массив фруктовый

const gameStart = () => { //функция старта игры
    gameArray = gameArray.sort(() => Math.random() - 0.5);//перемешиваем массив 
    alert(gameArray); // алерт массива фруктов
    let numFirst = randomNum(gameArray.length, 1);//объявлем переменную со значением рандом массив - 1
    let numTwo = randomNum(gameArray.length, 1);//объявлем переменную со значением рандом массив - 1
    do { numTwo = randomNum(gameArray.length, 1); } while (numFirst === numTwo);//если numFirst === numTwo , то запрашиваем новыя numTwo пока они не станут разными
   /*  if (numFirst === numTwo) numTwo = randomNum(gameArray.length, 1); */
    let firstWord = prompt(`Введите ${numFirst + 1} слово`).toUpperCase(); //срашиваем первое рандомное слово и приводим его в нижний регистр
    (firstWord === gameArray[numFirst].toUpperCase()) ? alert('Верный ответ') : alert('Неверный ответ'); //проверяем ответ со словом из массива
    let TwoWord = prompt(`Введите ${numTwo + 1} слово`).toUpperCase();//срашиваем второе рандомное слово и приводим его в нижний регистр
    (TwoWord === gameArray[numTwo].toUpperCase()) ? alert('Верный ответ') : alert('Неверный ответ');//проверяем ответ со словом из массива
    (firstWord === gameArray[numFirst].toUpperCase() && TwoWord === gameArray[numTwo].toUpperCase()) ? alert('Верно угадал оба слова') : //Если угаданы оба слова 
        (firstWord === gameArray[numFirst].toUpperCase()) ? alert(`Ты был близок к победе ! Верно угадал ${numFirst + 1} слово`) : // если угадано первое слово
            (TwoWord === gameArray[numTwo].toUpperCase()) ? alert(`Ты был близок к победе ! Верно угадал ${numTwo + 1} слово`) : // если угадано второе слово
                alert('Ты не угадал ни одного слова') //если нет правильных ответов
    
}
/*

const riddles = ['Висит груша нельзя скушать?',
    'Не лает, не кусает, а в дом не пускает',
    'Ты помни его немножко станет твердый как картошка', //сами загадки
    'Что ты смотришь на меня? Раздевайся, я твоя!'];
const hints = {
    0: ['Состоит из стекла и метала', 'Дает освещение'], //подсазки
    1: ['Это из железа', 'Требуется ключ'],
    2: ['Это холодное', 'Можно сделать зимой'],
    3:['Есть в каждом доме','Мягкая и мы все любим ее']
};
const answers = ['лампочка', 'замок', 'снежок','кровать']; //ответы
let counts = 3; 
let hints_count = 0; //счетчик подсказок
let moves_count = 0;// счетчик ходов
let num = Number(Math.round(Math.random() * (riddles.length - 1))); //рандомная загадка по количеству загадок в масииве - 1 так как length показывает количество значений , а значения начинаются с 0

const gameStartRiddles = (hints_count, moves_count, num) => { //стартовая заставка , на случай если юзер случайно нажал кнопку играть
    if (moves_count === 0) {
        let start = confirm(`${userName} угадай загадку за ${counts} попытки, у тебя будет еще и ${counts - 1} подсказки!!!\n Ну что начнём ?`)
        if (start === true) games(hints_count, moves_count, num); //если нажата ОК то стартуем игру
    }

}

function games(hints_count, moves_count,num) { //старт игры
    
    let userQuestion = prompt(`${riddles[num]}\nВведи ответ в поле ниже!`).toLowerCase();//выводим загадку с полем для ответа и приводим ответ в нижний регистр
    if (userQuestion === answers[num]) {
        alert(`Поздравляю ты угадал \nправильны ответ ${userQuestion}`);
        start = confirm(`Хочешь еще `);
        if (start === true) { games(hints_count, moves_count, Number(Math.round(Math.random() * (riddles.length - 1)))); }
    }
        else { error(hints_count, moves_count, num);}
     //проверяем ответ со значением массива , если верно выводим Угадал , нет то функция ошибки
}

const error = (hints_count, moves_count, num) => { //функция ошибки с переданными переменными , значения на момент игры 
    ++hints_count;//+ посказки
    ++moves_count;//+ ходы
    if (hints_count === 3) { //если счетчик подсазок 3 то выводим что конец игре
        start = confirm(`Закончились подсказки и ходы! \nНачать заново ?\n Продолжить?`);
        reboot();//функция ребута с обнуленныи переменными, вернее передается без них что приводит к значениям по умолчанию
    } else { //если счетчик подсказок еще не 3 
        start = confirm(`Ответ неверный!\nПодсказка номер ${hints_count} \n${hints[num][hints_count-1]}\nПродолжить ?`);  //показываем подсказку и спрашиваем продолжить 
        if (start === true) {//если не передумал играть и нажал ОК
            games(hints_count, moves_count, num)//переходим к функции играть с переменныи увеличенными выше на 1 
        }
    }
}

const reboot = () => {
    games(hints_count, moves_count, num)//запуск игры с начала с тойже загадкой
}

*/


const riddles = [ //Массив с загадками , подсказками и ответами // Можно сделать отдельными
    ['Висит груша нельзя скушать?', 'Состоит из стекла и метала', 'Дает освещение', 'лампочка'],
    ['Мы - ребята удалые лазим в щели половые!', 'Раньше был в каждом доме', 'Сейчас есть даже роботы', 'веник'],
    ['Не лает, не кусает, а в дом не пускает', 'Это из железа', 'Требуется ключ', 'замок'],
    ['Ты помни его немножко станет твердый как картошка', 'Это холодное', 'Можно сделать зимой', 'снежок'], //сами загадки
    ['Что ты смотришь на меня? Раздевайся, я твоя!', 'Есть в каждом доме', 'Мягкая и мы все любим ее', 'кровать'],
    ['Кругом волоса, посредине колбаса.', 'Растет на юге', 'Очень долго варится', 'кукуруза'],
    ['То  холодный - то горячий, то висячий - то стоячий.', 'Есть почти в каждом доме', 'Находится в ванной комнате', 'душ'],
    ['Волосатая головка за щеку заходит ловко.\nВнимание ответ состоит из двух слов', 'Используется для гигиены', 'Сейчас появилась на батарейках', 'зубная щётка']
];
/*
const randomNum = (params) => { //Функция рандомного выбора загадки
    return Math.round(Math.random() * (riddles.length - 1)); //умножаем рандомное число на длину массива - 1 и округляем
}
*/

let hint_counter = 0; //начальное число подсказок
let userQuestion = ''; //переменная для prompt с вопросом и подсказками
let RandomQuestion = randomNum(riddles.length,1); // номер загадки рандоное число полученное из функции 


let language = new Map([ //Массив текстовых оповещений , можно прописывать отдельно в каждом случае мне удобнее так
    ['start', `${userName} чтобы разгадать загадку у тебя будет три хода, и 2 подсказки! \nЖми Ок для старта игры, или Отмена для прекращения игры!`],
    ['cancel', `Нам очень жаль, что ты решил прекратить игру!`],
    ['riddles', `\nВведи ответ в поле ниже и нажми ОК`],
    ['victory', `${userName} поздравляю тебя ты дал верный ответ!\nХочешь еще поиграть?\nЖми ОК, если да и ОТМЕНА если нет`],
    ['endmove', `${userName} закончились подсказки и ходы!\nХочешь повторить с этой загадкой?\nЖми ОК, если да и ОТМЕНА если нет`],
    ['hint', `Подсказка номер `],
    ['error', `Вы не ввели ничего, повторите ввод! `],
    ['errorAnswer', `${userName} ответ неверный! Нажми ОК чтобы увидеть подсказку, или ОТМЕНА если хочешь прекратить игру!`]
]);

const alerts = (params) => { //функция алерт принимает строку и выводит алерт 
    alert(params);
}

const startGame = () => { //начальная функция игры 
    let start = confirm(language.get('start')); //Пишем уловия игры и спрашиваем пользователя хочет ли продолжить
    (start === true) ? Game(RandomQuestion, hint_counter) : End(); // если ОК то стартуем игру с рандомной загадкой и счетчиком подсказок 0 иначе функция End 
}

const Question = (userQuestion, RandomQuestion, hint_counter) => { //функция проверок ответов

    if (userQuestion === "") { //Если в окно ответов не ведено ничего
        Error(RandomQuestion, hint_counter); //вызываем функию еррор с параметрами рандомной загадк и счетчика подсказок
    } else if (userQuestion === null) {//если в окне вопроса или подсказки нажата кнопка Отмены выводим 
        End(); // функцию Конец
    }
    else if (userQuestion.toLowerCase() === riddles[RandomQuestion][3].toLowerCase())//Если ответ совпадает с ответом из массива (все в нижнем регистре)
    {
        userQuestion = confirm(language.get('victory'));//Показываем сообщение о победе и предлагаем еще поиграть
        (userQuestion === true) ? Game(RandomQuestion = randomNum(riddles.length,1), hint_counter = 0) : End();//Если нажата ОК то перезаускаем игру с новым рандомным и обнуленным счетчиком подсказок иначе функция Конец
    }
    else {
        Game(RandomQuestion, ++hint_counter)//если ответ введен но неверен вызываем функцию Game с сораненным рандомным числом и счетчик подсказок увеличиваем на 1
    }
}

const Game = (RandomQuestion, hint_counter) => {//с параметрами рандомного числа для выборки загадки из массива и счетчик подсказок

    switch (hint_counter) { //проверям счетчик подсказок 
        case 0: // если 0 значит это первый шаг игры показываем окно
            userQuestion = prompt(`${riddles[RandomQuestion][0]}${language.get('riddles')}  `); //загадка с подсказкой нажать ок после ввода ответа
            Question(userQuestion, RandomQuestion, hint_counter)//вызов функции проверки ответа с передаваемыми значениями Ответ,Рандом,счетчик подсказок
            break; //стоп
        case 1: //если счетчик подсказок 1 то показываем окно 
            userQuestion = prompt(`${language.get('hint')} ${hint_counter}\n${riddles[RandomQuestion][hint_counter]}${language.get('riddles')}`); //Номер подсказки, саму подсказку и предлагаем нажать ОК
            Question(userQuestion, RandomQuestion, hint_counter)//вызов функции проверки ответа с передаваемыми значениями Ответ,Рандом,счетчик подсказок
            break;
        case 2:
            userQuestion = prompt(`${language.get('hint')} ${hint_counter}\n${riddles[RandomQuestion][hint_counter]}${language.get('riddles')}`);//Номер подсказки, саму подсказку и предлагаем нажать ОК
            Question(userQuestion, RandomQuestion, hint_counter)//вызов функции проверки ответа с передаваемыми значениями Ответ,Рандом,счетчик подсказок
            break;
        case 3: userQuestion = confirm(language.get('endmove'));//если счетчик подсказок 3 значит подсказки кончились , спрашиваем хочет ли попробовать еще с этой же загадкой
            if (userQuestion === true) { //если нажата ОК
                Game(RandomQuestion, hint_counter = 0);//перезапускаем игру с тем же рандомом но с обнулением счетчика подсказок
            } else { End(); }//иначе функция Конец
            break;
    }
}

const End = () => { alerts(language.get('cancel')); RandomQuestion = randomNum(riddles.length,1); } //функция Конец алерт что нам жаль и обнуление рандома и счетчика подсказок

const Error = (RandomQuestion, hint_counter) => { //если ничего не введено
    alerts(language.get('error')); //алерт что поле пусто 
    Game(RandomQuestion, hint_counter); //возвращаем окно с тем же шагом игры .
}

