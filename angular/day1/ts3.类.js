var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Person = (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.say = function () {
        console.log('name is ' + this.name + ', age is ' + this.age);
    };
    return Person;
}());
var p1 = new Person('zhangsan', 40);
p1.age = 30;
p1.say();
/*
*                public公共的    private私有的     protected受保护的
*    函数内部      YES              YES               YES
*    函数外部      YES              NO                NO
*    子类          YES              NO                YES
* */
//构造函数可以一并声明属性
var Person1 = (function () {
    //在构造函数中，如果参数是属性就必须有关键字修饰
    function Person1(name, age) {
        this.name = name;
        this.age = age;
        console.log(this.name);
    }
    return Person1;
}());
var p2 = new Person1('lisi', 111);
console.log(p2.name);
//继承
//一个类继承了另一个类，就继承了另一个类的（公共的，受保护的）方法和（公共的，受保护的）属性。
var Woman = (function (_super) {
    __extends(Woman, _super);
    function Woman(name, age, height) {
        _super.call(this, name, age); //在父类中将name和age赋值给了属性
        this.height = height;
        console.log('子类访问age' + this.age);
    }
    Woman.prototype.work = function () {
        _super.prototype.say.call(this);
        console.log('正在工作');
    };
    return Woman;
}(Person));
var p3 = new Woman('zhaoliu', 20, 162);
console.log(p3.height);
p3.say();
p3.work();
