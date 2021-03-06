# 设计模式
设计模式并不是发明出来的，而是在无数人的开发实践中总结出来的经验，并提取出来成为一定运用的高效规律和思维。
总结来说，设计模式就是指代那些大家开发中总结出来的那些思想和经验。将其抽象为设计模式更利于程序员的同行之间互相传播学习。

设计模式中有很多思路类似的设计模式，但是总结成设计模式并不是因为这些经验具有相同的结构，而是具有相同的意图，所以有些结构相似但意图不同的代码成为了不同的设计模式。
新手容易将结构作为分辨设计模式的根据，所以经常在开发中混淆以至于摸不着北，不知道该用什么设计。

# 面向对象
### 多态
多态：同一操作作用于不同的对象上，会产生不同的解释和不同的执行结果。
而并不是该操作特殊，是不同对象本身对于同一操作发出的不同响应，这种响应因为是基于对象自己的，所以会产生各个对象不同的结果。
可以解决很多情况下过程化的条件分支语句的冗余。
### 封装
封装的目的就是将信息隐藏，不只是包括特征等信息隐藏，还将自己过程化的内容隐藏。也将对外界内容的依赖切断，自己成为一个独立的个体，那么就更容易复用，迁移，卸载。


### 设计
项目总是预先设计好再进行编程，而如何进行实现单元设计的编程也需要设计。考虑你的编程中哪些部分很可能会面临修改，面临扩展，而你最好要将其考虑在内，以节省未来的成本。
好的设计是如何在不重新设计的情况下进行改变。

### 原型模式
原型模式是一种编程泛型。

