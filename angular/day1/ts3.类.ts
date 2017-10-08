class Person{
    //类中属性的声明
    //三种方式的声明
    //1.public方式,声明这个Person有这个属性，并且是公共的，在类内部和外部都可以访问的
    name;//没有关键字修饰就是public的
    // public age;

    //private 私有的,这个属性只能在类内部访问
    //private age;

    //protected 受保护的,这个属性只能在类内部访问和子类中访问
    protected age;

    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    protected say(){
        console.log('name is '+this.name+', age is '+this.age);
    }
}

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
class Person1{
    //在构造函数中，如果参数是属性就必须有关键字修饰
    constructor(public name: string, protected age: number){
        console.log(this.name);
    }
}


var p2 = new Person1('lisi', 111);
console.log(p2.name);


//继承
//一个类继承了另一个类，就继承了另一个类的（公共的，受保护的）方法和（公共的，受保护的）属性。
class Woman extends Person{

    constructor(name: string, age: number, public height: number){//name和age不是属性
        super(name, age);//在父类中将name和age赋值给了属性

        console.log('子类访问age'+this.age);

    }

    work(){
        super.say();
        console.log('正在工作');
    }
}

var p3 = new Woman('zhaoliu', 20, 162);
console.log(p3.height);
p3.say();
p3.work();


