"use strict";
const man = {
    name: "hi",
    age: 25,
    city: "seoul",
};
//웹
//경계선
//서버
function prt(params) {
    var _a;
    console.log((_a = params === null || params === void 0 ? void 0 : params.city) !== null && _a !== void 0 ? _a : "default city"); //null 이면 default city를 넣어라
}
prt(man);
