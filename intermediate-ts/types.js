"use strict";
function login(params) {
    console.log(params);
}
function searchBook(params) {
    console.log(params);
}
function addBookCart(params) {
    console.log(params);
}
login({ name: "hi", age: 25 });
searchBook({ title: "책책", price: 19000 });
addBookCart({ userName: "hi", bookName: "책책" });
