//key 값 중복
// interface IName {
//   name: string;
// }

// interface ISchool {
//   school: string;
// }
//인터페이스 한번에 정리
interface ISuperKey {
  [props: string]: string;
}

function prtSchool(params: ISuperKey) {
  if ("name" in params) {
    console.log(params.name);
  }
  if ("school" in params) {
    console.log(params.school);
  } else {
    console.log("error 500");
  }
}

prtSchool({ name: "hi", school: "영희" });
