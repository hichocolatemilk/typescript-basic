"use strict";
function prtBOOk(params, key) {
    // IBook 정의만 들어갈 수 잇음
    console.log(params[key]);
}
prtBOOk({
    title: "TS 배우기",
    publisher: "인프런",
    price: 100,
    author: "홍길동",
}, "title" // 키
);
