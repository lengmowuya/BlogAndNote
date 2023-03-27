## redux
做状态管理的JS库
可以在react,vue,angular,但主要是react。
集中管理react应用中多个组件的状态

使用情景：某个状态需要让其他组件可以拿到（共享）
一个组件需要改变另一个组件的状态（通信）

### redux原理
ActionCreators(动作对象的工厂)
dispatch action(分发动作对象)：包含type和data
Store(数据指挥者)：存放状态
Reducers(数据修改操作):用来初始化和加工状态

# redux
reducer的本质是一个函数，接收preState,action,返回加工后的状态
reducer有两个作用：初始化状态，加工状态
reducer被一帝赐调用时，是store自动触发的，传递的preState是undefined
redux只负责管理状态，至于状态的改变驱动着页面的展示，要靠我们自己写。在index.js中检测store中状态的改变，一旦发生改变重新渲染。

# 文件
count_action.js 专用用于创建action对象
constat.js 专门用于存放常量

# 异步action（非必须）
action还分同步和异步，action可以是对象，也可以是函数（异步action）
让store接收异步函数需要安装和使用中间件`redux-thunk`

**使用异步action**
1.明确：延迟的动作不想交给组件自身，想交给action
2.想要对状态进行操作，但是具体的数据靠异步任务返回。
3.异步任务有结果后，分发一个同步的action去真正操作数据。
4.异步action不是必须要写的，完全可以自己等待异步任务的结果了再去分发。

## react-redux模型
1.所有的UI组件都应该包裹一个容器组件，他们是父子关系。
2.容器组件是真正与redux打交道的，里面可以随意使用redux的api
3.UI组件中不能使用任何redux的api
4.容器组件会传给UI组件：redux中的状态  操作状态的方法
5.备注：容器给UI传递状态和操作状态的方法，均是通过props传递。

# react-redux概念
UI组件：不能使用redux的api,只负责页面的呈现，交互等。
容器组件：负责和redux通信，将结果交给UI组件
容器组件中的store是靠props传进去的

把所有逻辑全部交给容器组件来完成，避免污染整个app组件