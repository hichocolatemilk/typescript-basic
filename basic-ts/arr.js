"use strict";
const arr1 = [1, 2, 3]; //주 사용
const arr2 = [1, 2, 3]; //제네릭 타입
const arr3 = ["hi", "hello", "world"];
const arr4 = ["hi", "hello", "world"];
const arr5 = [
    {
        name: "hi",
        age: 25,
        city: "seoul",
    },
    {
        name: "hi",
        age: 25,
    },
];
arr5.forEach((e) => {
    var _a;
    console.log((_a = e === null || e === void 0 ? void 0 : e.city) !== null && _a !== void 0 ? _a : "default");
});
//튜플 - 배열의 길이와 안에 원소를 바꿀수 없는 자료 구조
const arr6 = [1, "hi", {}, true, []];
console.log(arr6);
