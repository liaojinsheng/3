/**
 * Created by Administrator on 2017/8/28.
 */
//接口是用来约束一个类或者方法调用时需要遵循的一个规则
//声明接口 interface
//实现接口 implements

//在调用方法时使用
interface InterPerson{
    name: string,
    age: number,
    height: number
}
//如果需要实现这个接口，使用接口，那么必须要有name，age这两个属性，并属性的类型需要对应上



class Person{
    constructor(public personInfo: InterPerson){//不是说personInfo是InterPerson类型的
                                                    //而是这个personInfo参数遵循这个InterPerson规则

    }
}

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







interface PersonDo{//接口声明中方法没有实现，需要在实现接口的地方实现这个方法
    work();
    eat();
}

class Woman implements PersonDo{
    work(){
        console.log('woman work');
    }

    eat(){
        console.log('woman eat');
    }
}

class Man implements PersonDo{
    work(){
        console.log('woman work');
    }

    eat(){
        console.log('woman eat');
    }
}


var w1 = new Woman();

w1.eat();
w1.work();




