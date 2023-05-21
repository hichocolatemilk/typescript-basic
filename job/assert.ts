// const testText = document.querySelector("#someText") as HTMLElement; //확실히 있음
// console.log(testText?.id);
// console.log((testText as HTMLElement).id);

interface IEaxm {
  value: Number;
}
const example: object = { value: 1 };
// console.log(example.value);

// as
console.log(example as IEaxm);

// <>
console.log(<IEaxm>example);
