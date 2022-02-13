'use strict'


// Some split include map reduce forEach filter find findIndex


let numbers = [4, 3, 10, 14, 32];

function f_some() {

}


function f_split() {

}


function f_include() {

}


function f_map() {

}


function f_reduce() {

}


function f_forEach() {
    let inner = "";
    for (const x of numbers) {
        console.log(x);
        inner += (x + "\n");
    }
    document.getElementById("foreach").innerHTML = inner;
}

f_forEach();


function f_filter() {

}


function f_find() {

}


function f_findIndex() {

}


function inner_html(div_id, fun) {
    document.getElementById(div_id).innerHTML = fun + '\n';
}

function inner_promt() {

}