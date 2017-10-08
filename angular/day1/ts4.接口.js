/**
 * Created by Administrator on 2017/8/28.
 */
//接口是用来约束一个类或者方法调用时需要遵循的一个规则
//声明接口 interface
//实现接口 implements
//如果需要实现这个接口，使用接口，那么必须要有name，age这两个属性，并属性的类型需要对应上
var Person = (function () {
    function Person(personInfo) {
        //而是这个personInfo参数遵循这个InterPerson规则
        this.personInfo = personInfo;
    }
    return Person;
}());
var p1 = new Person({
    name: 'zhangsan',
    age: 40,
    height: 179
});
var p2 = new Person({
    name: 'wangwu',
    age: 20,
    height: 100
});
var Woman = (function () {
    function Woman() {
    }
    Woman.prototype.work = function () {
        console.log('woman work');
    };
    Woman.prototype.eat = function () {
        console.log('woman eat');
    };
    return Woman;
}());
var Man = (function () {
    function Man() {
    }
    Man.prototype.work = function () {
        console.log('woman work');
    };
    Man.prototype.eat = function () {
        console.log('woman eat');
    };
    return Man;
}());
var w1 = new Woman();
w1.eat();
w1.work();
