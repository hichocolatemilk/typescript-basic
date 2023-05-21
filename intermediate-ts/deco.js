"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// 데코레이터 함수
function InitClass(params) {
    console.log("InitClass: ", params);
}
//데코레이터는 무조건 class 와 같이쓴다.
let ExampleClass = class ExampleClass {
    constructor() { }
};
ExampleClass = __decorate([
    InitClass,
    __metadata("design:paramtypes", [])
], ExampleClass);
// 런타임에 클래스에 붙어서 실행되는 함수
//데코레이터, new Class 및 인스턴스 안해도 사용됨
