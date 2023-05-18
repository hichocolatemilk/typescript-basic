// 1. union 합집합 | (OR)
let nameOrAge: string | number;
nameOrAge = "youngsoo";
nameOrAge = 25;

interface IName {
  name: string;
}
interface IAge {
  age: number;
}

type NameOrAge = IName | IAge;
function prtUnion(params: NameOrAge) {
  if ("name" in params) {
    console.log(params.name);
  } else if ("age" in params) {
    console.log(params.age);
  }
}
prtUnion({ name: "youngsoo" });

//2. intersection 교집합 & (AND)

interface IIName {
  name: string;
}
interface IIAge {
  age: number;
}

type ForSearch = IIName & IIAge;

function search(params: ForSearch) {
  console.log(params.age + " " + params.name);
}

search({ age: 25, name: "hi" });
