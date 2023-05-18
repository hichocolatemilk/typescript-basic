"use strict";
class UserInfo {
    constructor(name, age, city) {
        this.name = name;
        this.age = age;
        this._city = city;
    }
    get city() {
        return this._city;
    }
    set city(newCity) {
        this._city = newCity;
    }
}
const user = new UserInfo("용수", 25, "Seoul");
console.log(user.name, user.age, user.city);
