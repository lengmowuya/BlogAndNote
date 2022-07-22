# ScriptableObject
可以做一些持久化的数据，但更多用于Editor环境，也可以进行一定的数据管理。

# 拖拽效果
DragHandle接口，可以获得三个方法以表示拖拽按下，拖拽移动，拖拽放开。

# StartCoroutine协程
用于辅助的大量代码异步计算。

# Job System
C# Job System是一种低成本的高效多线程方案。

# Attribute特性
在代码中书写的标记，用于开发和测试环境中的功能。

可以重新拉回引用。
ExcuteInEditMode可以在编辑模式下自动运行
DissallowMultipleComponent 不允许重复添加该组件在同一对象
函数的警告提示，如此函数已不建议使用，即将废弃。
强制要求游戏对象必须添加指定组件，如该组件的对象身上必须拥有一个刚体，没有则会自动增加。
限定变量的值范围，如只能在50-100间取值。

# 数据持久化方案
PlayerPerfs 键值对保存
二进制保存
JSON保存
XML保存
