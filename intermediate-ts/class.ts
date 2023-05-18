class UserInfo {
  public name: string;
  public age: number;
  private _city: string;

  constructor(name: string, age: number, city: string) {
    this.name = name;
    this.age = age;
    this._city = city;
  }

  get city(): string {
    return this._city;
  }

  set city(newCity: string) {
    this._city = newCity;
  }
}

const user = new UserInfo("용수", 25, "Seoul");
console.log(user.name, user.age, user.city);
