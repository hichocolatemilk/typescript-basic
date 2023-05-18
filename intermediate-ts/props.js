"use strict";
//key 값 중복
// interface IName {
//   name: string;
// }
function prtSchool(params) {
    if ("name" in params) {
        console.log(params.name);
    }
    if ("school" in params) {
        console.log(params.school);
    }
    else {
        console.log("error 500");
    }
}
prtSchool({ name: "hi", school: "영희" });
