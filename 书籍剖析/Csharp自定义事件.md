### 自定义事件
事件的右边只能通过+=或者-=操作符
事件委托的命名一般为 [事件名]EventHandler

### 事件模型的五个组成部分
事件的拥有者【类】  Customer类
事件【event关键字修饰】 OnOrder,点餐事件
事件的响应者【类】  Waiter类
事件处理器【方法-受到约束的方法】   TakeAction方法
事件的订阅关系【+=】

### 事件的完整声明格式
```C#
// 为OnOrder事件声明委托
public delegate void OrderEventHandler(Customer _customer,OrderEventArgs _e);
public class EventEx : MonoBehaviour {
    Customer customer = new Customer();
    private void Start(){
        customer.OnOrder +=  waiter.TakeAction;
        customer.Order();
        cutomer.PayTheBill();
    }
}
public class Customer{
    public float Bill {get;set;}
    public void PayTheBill(){
        Debug.Log("I have to pay :" + this.Bill);
    }
    // 事件的完整声明格式
    private OrderEventHandler orderEventHandler;
    // 下面是事件的封装
    public event OrderEventHandler OnOrder{
        add{
            // 添加事件处理器
            orderEventHandler += value;
        }
        remove{
            // 移除事件处理器
            orderEventHandler -= value;
        }
    }
    public void Order(){
        // 如果无人订阅则返回
        if(orderEventHandler == null) return;
        OrderEventArgs e = new OrderEventArgs();
        e.CoffeeName = "Mocha";
        e.CoffeeSize = "Tall";
        e.CoffeePrice = 28;
        orderEventHandler(this,e)
    }
}
public class OrderEventArgs : EventArgs{
    public string CoffeeName {get;set;}
    public string CoffeeSize {get;set;}
    public float CoffeePrice {get;set;}
}
public class Waiter{
    internal void TakeAction(Customer _customer,OrderEventArgs _e){
        float finalPrice = 0;
        switch(_e.CoffeeSize){
            case "Tall":
                finalPrice = _e.
        }
    }
}
```

### 事件的简略声明
```C#
public event OrderEventHandle OnOrder;
public void Order(){
    if(OnOrder == null) return;
    OrderEventArgs e = new OrderEventArgs();
    e.CoffeeName = "Black Tea";
    e.CoffeeSize = "Grand";
    e.CoffeePrice = 28;
    OnOrder(this,e);
}
public class OrderEventArgs : EventArgs{
    public string CoffeeName {get;set;}
    public string CoffeeSize {get;set;}
    public float CoffeePrice {get;set;}
}
public class Waiter{
    internal void TakeAction(Customer _customer,OrderEventArgs _e){
        float finalPrice = 0;
        switch(_e.CoffeeSize){
            case "Tall":
                finalPrice = _e.
        }
    }
}
```

### 类型检测操作符
is操作符:检查对象是否与给定的类型兼容
as操作符:用于检查在兼容的引用类型之间执行某些类型的转换（如果不兼容也不会报错，返回null)

### 事件的意义
事件成员能够让程序之间的逻辑和对象之间的关系变得符合业务逻辑。
事件起到了一个限制作用，于面向对象的封装概念相通。
总结：事件是用来阉割委托实例的，事件只能add,remove，事件处理器不能赋值。并且事件只能+=，-=，不能=，不能外部触发事件。