//타입스크립트에서는 대상의 type을 다시 쓸 수 있음

console.log(typeof "hi");
console.log(typeof 123);
console.log(typeof true);

const exString: string = "some String";

const childString: typeof exString = "HAHA";

function add(a: number, b: number): number {
  return a + b;
}

type A = ReturnType<typeof add>;
