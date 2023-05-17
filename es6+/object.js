function prt4() {
  console.log("hello word4");
}

const ob = {
  name: "hi",
  age: 35,

  func1: function prt() {
    console.log("hello world");
  },

  func2: () => {
    console.log("hello world2");
  },

  func3() {
    console.log("hello world3");
  },
  prt4,
};

const test = "test world";

const ob2 = {
  [test]: 1,
};
console.log(ob2);

// ob.func1();
// ob.func2();
// ob.func3();
// ob.prt4();
