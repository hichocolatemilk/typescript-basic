//성별, 부서코드, 카테고리, ...

enum categoryEnum {
  가전제품 = "가전제품",
  주방제품 = "주방제품",
}

const category: categoryEnum = categoryEnum.가전제품;

//웹

//기준선

//서버

function cate(category: any) {
  if (category === "가전제품") {
    console.log("2%할인");
  } else if (category === "주방제품") {
    console.log("10%할인");
  } else {
    console.log("서버 멈춤");
  }
}

cate(category);

//리터럴 타입
enum sexEnum {
  MALE = "MALE",
  FEMALE = "FEMALE",
}

const sex: "MALE" | "FEMALE" = "MALE";
const sex2: sexEnum = sexEnum.FEMALE;

console.log(sex);
console.log(sex2);
