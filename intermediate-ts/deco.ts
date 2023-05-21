// 데코레이터 함수
function InitClass(params: any) {
  console.log("InitClass: ", params);
}

//데코레이터는 무조건 class 와 같이쓴다.

@InitClass
class ExampleClass {
  constructor() {}
}

// 런타임에 클래스에 붙어서 실행되는 함수
//데코레이터, new Class 및 인스턴스 안해도 사용됨
