function fun1(name, age) {
    return 'name:' + name + ', age:' + age;
}
console.log(fun1('zhangsna', 30));
//在typescript中声明函数
function fun2(name, age) {
    return "name: " + name + ", age: " + age;
}
console.log(fun2('lisi', 40));
//默认参数,注意点：有默认值的参数需要放在最后
function fun3(name, age) {
    if (age === void 0) { age = 0; }
    return "name: " + name + ", age: " + age;
}
console.log(fun3('wangwu'));
//可选参数,注意点:可选参数需要放在最后，还得做可选参数没有传值的情况判断
function fun4(name, age) {
    if (age == null) {
        return "name: " + name;
    }
    else {
        return "name: " + name + ", age: " + age.length;
    }
}
console.log(fun4('zhaoliu', [1, 2]));
