"use strict";
// 1. union 합집합 | (OR)
let nameOrAge;
nameOrAge = "youngsoo";
nameOrAge = 25;
function prtUnion(params) {
    if ("name" in params) {
        console.log(params.name);
    }
    else if ("age" in params) {
        console.log(params.age);
    }
}
prtUnion({ name: "youngsoo" });
function search(params) {
    console.log(params.age + " " + params.name);
}
search({ age: 25, name: "hi" });
