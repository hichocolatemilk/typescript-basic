"use strict";
// class Person {
//   constructor(public name: string, public city: string) {}
//   getName() {
//     console.log(`my name is ${this.name}`);
//   }
// }
function Person(name, city) {
    this.name = name;
    this.city = city;
    this.getName = function () {
        console.log(`my name is ${this.name}`);
    };
}
const p = new Person("cys", "seoul");
console.log(p, p.getName());
// console.log(Object.getPrototypeOf(p));
