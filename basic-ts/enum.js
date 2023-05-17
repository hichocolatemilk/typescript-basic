"use strict";
//성별, 부서코드, 카테고리, ...
var categoryEnum;
(function (categoryEnum) {
    categoryEnum["\uAC00\uC804\uC81C\uD488"] = "\uAC00\uC804\uC81C\uD488";
    categoryEnum["\uC8FC\uBC29\uC81C\uD488"] = "\uC8FC\uBC29\uC81C\uD488";
})(categoryEnum || (categoryEnum = {}));
const category = categoryEnum.가전제품;
//웹
//기준선
//서버
function cate(category) {
    if (category === "가전제품") {
        console.log("2%할인");
    }
    else if (category === "주방제품") {
        console.log("10%할인");
    }
    else {
        console.log("서버 멈춤");
    }
}
cate(category);
//리터럴 타입
var sexEnum;
(function (sexEnum) {
    sexEnum["MALE"] = "MALE";
    sexEnum["FEMALE"] = "FEMALE";
})(sexEnum || (sexEnum = {}));
const sex = "MALE";
const sex2 = sexEnum.FEMALE;
console.log(sex);
console.log(sex2);
