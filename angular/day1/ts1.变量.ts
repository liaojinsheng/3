//声明布尔变量
var boo: boolean = true;

//声明数字
let num: number = 123;

//声明字符串
let str: string = 'zhangsan';
let words: string = `name is ${str}`;

//声明数组
let arr: string[] = ['a', 'b', 'c', 'd'];//arr数组中的元素只能是string类型
let arr1: Array<string> = ['aaa', 'bbb'];//与上面的写法是等价的

let arr2: Array<any> = [1, 'a', {name: 'zhangsan'}]; //arr数组中的元素可以是任意类型


//any:typesctript中新增的类型：在写代码时，我们还不知道是什么类型的时候就使用any
let obj: any;
obj = 123;
obj = '123';

//元组，类似于数组，类型和个数已经确定了
let tup: [string, number] = ['ac', 123];

//声明
let tup1: [string, Array<number>];
//赋值
tup1 = ['abc', [1,2,3]];

console.log(tup1[0]);
console.log(tup1[2]);
//元组越界访问是为undefined，设置就必须设置为元组已有的类型
tup1[2] = '12';
console.log(tup1);


//枚举
//ClassName是枚举的名字，枚举通常首字母大写，枚举值通常也是首字母大写
//在枚举当中的值就是一个数字常量。默认从0开始递增
enum ClassName {
    One,
    Two,
    Three
}
console.log(ClassName.One);
console.log(ClassName.Two);
console.log(ClassName.Three);


function test(flag){
    if (flag === ClassName.One){//dang
        console.log('aaa')
    }else if(flag === 1) {
        console.log('bbb')
    }else if(flag === 2){
        console.log('ccc')
    }
}

//修改枚举值
// enum IsLogin {
//     Login = 2,//从初始值开始递增
//     LogOut
// }
// console.log(IsLogin.Login);
// console.log(IsLogin.LogOut);

enum IsLogin {
    Login = 2,
    LogOut = 12 //任意赋值,但是只可以赋值数字
}
console.log(IsLogin.Login);
console.log(IsLogin.LogOut);


//void类型  没有内容,一般是用在函数的返回值上
function fun1(): string{//函数返回值为字符串
    return 'abcde';
}
function fun2(): void{//这个函数没有返回值
    console.log(123);
}
let val1: void = undefined;//如果子变量上只能是undefined


//null  undefined
//never


//类型断言
let val2 = '123';//在没有生命变量类型时根据第一次的赋值推断该变量是什么类型
val2 = {name: 'zhang'};














