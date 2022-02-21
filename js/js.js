'use strict'


// Some split include map reduce forEach filter find findIndex


let numbers = [4, 3, 10, 14, 32];

function f_some() {
    let inner = "";
    let find_item = prompt(`Значения для поиска в маcсиве ${numbers}`);
    for (const x of numbers) {
        if (find_item == x) {
            inner = "";
            console.log(true);
            inner += `<p>true</p>`;
            break;
        } else if (find_item !== x) {
            inner = "";
            console.log(false);
            inner += `<p>false</p>`;
        }
    }
    document.getElementById("some").innerHTML = inner;
}



function f_split() {
    let numbers_ = prompt(`Ведите цифры через пробел. Значение меняется для всех функций`, `4 3 10 14 32`);
    let reg = /\s?\d+\s?/g;
    let result = numbers_.matchAll(reg);
    result = Array.from(result);
    numbers = result;
    console.log(result);
    document.getElementById("split").innerHTML = result;
}


function f_include() {
    let inner = "";
    let find_item = prompt(`Значения для поиска в маcсиве ${numbers}`);
    for (const x of numbers) {
        if (find_item == x) {
            inner = "";
            console.log(true);
            inner += `<p>true</p>`;
            break;
        } else if (find_item !== x) {
            inner = "";
            console.log(false);
            inner += `<p>false</p>`;
        }
    }
    document.getElementById("include").innerHTML = inner;
}


function f_map() {

}


function f_reduce() {
    let inner = "";
    let sum_num = 0;
    for (const x of numbers) {
        console.log(sum_num += x);
    }
    inner += `<p>${sum_num}</p>`;
    document.getElementById("reduce").innerHTML = inner;
}


function f_forEach() {
    let inner = "";
    for (const x of numbers) {
        console.log(x);
        inner += `<p>${x}</p>`;
    }
    document.getElementById("foreach").innerHTML = inner;
}


function f_filter() {

}


function f_find() {
    let inner = "";
    let find_item = prompt(`Значения для поиска в маcсиве ${numbers}`);
    for (const x of numbers) {
        if (find_item == x) {
            console.log(x);
            inner += `<p>${x}</p>`;
            break;
        }
    }
    document.getElementById("find").innerHTML = inner;
}


function f_findIndex() {
    let inner = "";
    let find_item = prompt(`Введите индекс для поиска в массиве ${numbers}`);
    if (numbers[find_item]) {
        console.log(numbers[find_item]);
        inner += `<p>${numbers[find_item]}</p>`;
    } else {
        console.log(-1);
        inner += `<p>-1</p>`;
    }
    document.getElementById("findIndex").innerHTML = inner;
}