const arr1: number[] = [1, 2, 3]; //주 사용
const arr2: Array<number> = [1, 2, 3]; //제네릭 타입

const arr3: string[] = ["hi", "hello", "world"];
const arr4: Array<string> = ["hi", "hello", "world"];

interface Person {
  name: string;
  age: number;
  city?: string;
}

const arr5: IPerson[] = [
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
  console.log(e?.city ?? "default");
});

//튜플 - 배열의 길이와 안에 원소를 바꿀수 없는 자료 구조
const arr6: [number, string, object, boolean, any[]] = [1, "hi", {}, true, []];

console.log(arr6);
