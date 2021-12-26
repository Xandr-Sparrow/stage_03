'use strict'


// Some split include map reduce forEach filter find findIndex


let numbers = [4, 3, 10, 14, 32];

function f_some() {
    console.log(`Метод some`);

    function zero_big(numbers) {
        return numbers > 0;
    }

    function zero_little(numbers) {
        return numbers < 0;
    }
    if (numbers.some(zero_big)) {
        console.log(`В массиве ${numbers} есть минимум одна положительная цифра`);
    }
    if (numbers.some(zero_little)) {
        console.log(`В массиве ${numbers} есть минимум одна отрицательная цифра`);
    }
}

f_some();

function f_split() {
    console.log(`Метод split`);
    let numbers_str = numbers.join(' ');
    console.log(`Массив ${numbers} преобразован в строчку ${numbers_str}`);
    let numbers_arr = numbers_str.split(' ');
    console.log(`Строка ${numbers_str} преобразована в массив ${numbers_arr}`);
}

f_split();

function f_include() {
    console.log(`Метод include`);
    let num = 10;
    console.log(`Выбрана цифра ${num}`);
    let check_in = numbers.includes(num);
    if (check_in) {
        console.log(`Цифра ${num} присутствует в массиве ${numbers}`);
    }
}

f_include();

function f_map() {
    console.log(`Метод map`);
    let fun = numbers.map(item => item + 1);
    console.log(`Значения массива ${numbers} увеличены на 1 => ${fun}`);
}

f_map();

function f_reduce() {
    console.log(`Метод reduce`);
    let sums = numbers.reduce((sum, item) => sum + item);
    let average_num = sums / numbers.length;
    console.log(`Среднее арифметическое массива ${numbers} равно ${average_num}`);
}

f_reduce();

function f_forEach() {
    console.log(`Метод forEach`);
    numbers.forEach((item, index) => {
        console.log(`На ${index + 1} месте находится ${item}`);
    });
}

f_forEach();

function f_filter() {
    console.log(`Метод filter`);
    let two = numbers.filter(item => item % 2 === 0);
    console.log(`В массиве ${numbers} четные числа ${two}`);
}

f_filter();

function f_find() {
    console.log(`Метод find`);
    let item = numbers.find(item => item == 32);
    console.log(`В массиве ${numbers} выбранное число ${item}`);
}

f_find();

function f_findIndex() {
    console.log(`Метод findIndex`);
    let num = 3;
    let index = numbers.findIndex(index => index == num);
    console.log(`В массиве ${numbers} число ${num} находится на ${index + 1} месте`);
}

f_findIndex();