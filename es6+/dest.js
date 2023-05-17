const ID = "yongsoo";

const register = (ID, PW) => ({ ID, PW });
console.log(register("HO", 1));

//객체

const { name, age, sex } = { name: "hu", age: 25, sex: "남" };
console.log(name, age, sex);
