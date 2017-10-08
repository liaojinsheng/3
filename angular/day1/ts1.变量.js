//声明布尔变量
var boo = true;
//声明数字
var num = 123;
//声明字符串
var str = 'zhangsan';
var words = "name is " + str;
//声明数组
var arr = ['a', 'b', 'c', 'd']; //arr数组中的元素只能是string类型
var arr1 = ['aaa', 'bbb']; //与上面的写法是等价的
var arr2 = [1, 'a', { name: 'zhangsan' }]; //arr数组中的元素可以是任意类型
//any:typesctript中新增的类型：在写代码时，我们还不知道是什么类型的时候就使用any
var obj;
obj = 123;
obj = '123';
//元组，类似于数组，类型和个数已经确定了
var tup = ['ac', 123];
//声明
var tup1;
//赋值
tup1 = ['abc', [1, 2, 3]];
console.log(tup1[0]);
console.log(tup1[2]);
//元组越界访问是为undefined，设置就必须设置为元组已有的类型
tup1[2] = '12';
console.log(tup1);
//枚举
//ClassName是枚举的名字，枚举通常首字母大写，枚举值通常也是首字母大写
//在枚举当中的值就是一个数字常量。默认从0开始递增
var ClassName;
(function (ClassName) {
    ClassName[ClassName["One"] = 0] = "One";
    ClassName[ClassName["Two"] = 1] = "Two";
    ClassName[ClassName["Three"] = 2] = "Three";
})(ClassName || (ClassName = {}));
console.log(ClassName.One);
console.log(ClassName.Two);
console.log(ClassName.Three);
function test(flag) {
    if (flag === ClassName.One) {
        console.log('aaa');
    }
    else if (flag === 1) {
        console.log('bbb');
    }
    else if (flag === 2) {
        console.log('ccc');
    }
}
//修改枚举值
// enum IsLogin {
//     Login = 2,//从初始值开始递增
//     LogOut
// }
// console.log(IsLogin.Login);
// console.log(IsLogin.LogOut);
var IsLogin;
(function (IsLogin) {
    IsLogin[IsLogin["Login"] = 2] = "Login";
    IsLogin[IsLogin["LogOut"] = 12] = "LogOut"; //任意赋值,但是只可以赋值数字
})(IsLogin || (IsLogin = {}));
console.log(IsLogin.Login);
console.log(IsLogin.LogOut);
//void类型  没有内容,一般是用在函数的返回值上
function fun1() {
    return 'abcde';
}
function fun2() {
    console.log(123);
}
var val1 = undefined; //如果子变量上只能是undefined
//null  undefined
//never
//类型断言
var val2 = '123'; //在没有生命变量类型时根据第一次的赋值推断该变量是什么类型
val2 = { name: 'zhang' };
