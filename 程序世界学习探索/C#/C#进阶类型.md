# 简单数据结构类
ArrayList数组列表   Stack栈   Queue队列   Hashtable哈希表（键值对象）
hashtable是以键值对来存放和读取数据，键可以是整数，字符串，也可以限定类型。
实例.Add("001","C#");
实例["001"];

# 索引器
索引器：类里的一个成员，定义后可以给指定的类增加一种数组下标访问其特定数据的方式。
```
public int this[int index]{}
```

# 可空类型
C#可空类型 int? i = null;
默认int和bool等基本数据类型必须初始赋值，负责会报错。
int a = i ?? 0;
如果i为空则赋值为0;

# 杂记
C#的预处理器是在编译的时候调用。
类成员修饰符:public，private，protected受保护的，internal内部的
protected只有派生类才能访问其成员，是为了让类成员不能被外部访问，但是又想被派生类访问到的设计。

# 面向对象的设计
C#不支持多重继承，但为保留类似灵活性，所以提出了接口概念。
接口的实质是定义规则，接口的实现交由其他类负责。
接口像C++中的纯虚类一样，只能被继承，不能实例化。
接口中不能包含字段，接口成员都是公有的。
接口中定义了类要实现的一系列方法，但是它本身不实现这些方法，只是用逻辑结构方式描述。
接口成员中只能说方法，属性时间或索引器。

装箱与拆箱概念：类似于JS中的包装类让基本值类型与Object类型自由转化。

# 抽象类
和接口一样不能直接实例化。
可以拥有抽象成员，没有代码体，它的执行方法是在其派生类中实现的。
抽象方法的实现要加关键字 override
