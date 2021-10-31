- [不断摸索前进方向的开始 9.6-10.10的学习日报 ](./9.6-10.10学习日报)

> 新的开始 
>
> 这份日报结束后 准备去投简历准备面试了！

# 10.11



很遗憾的是 今天下午拉了跨 所以原定的重启react计划被迫后移一天

非常不应该！那么明天请给足时间学习它吧！

晚上上课回来时间也没太抓紧 上课还是会打乱一些节奏！哎！

明天还有两节课 希望可以把握好节奏 在课上也能学起来！

```js
// DDL
	写出第一版简历  10.24
		1.重点掌握HTTP协议
        2.JS基础良好 https://github.com/KieSun/fucking-frontend
        3.ES6过完 
    	4.JS30项目完结
        5.框架相关内容完结并大致完成记事本项目！
```



```js
// 今日主要收获 & 学习时间
Totally 470min
1.前端基础知识 
// 从早上-中午 拿出一整块时间学习JS 晚上跑完步回来继续看JS
    1.1 前端基础学习 190min 
		/* 学习JSON部分的内容 
        	学习异步编程 promise*/
    1.2 freecodecamp JS + 响应式网页设计 min
    	/*  */
    1.3 JS 30demos 30+80min
    	/* demo15 里面封装了不少好用的操作列表的函数
        	了解了H5中的localStorage方法*/
    1.4 react前置知识 min
    	/*  */

2.核心基础知识 下午开始学计网 + 刷题
	2.1 计网 40min
		/* 对HTTPS的一些内容进行复习
        	图解HTTP开了个头 读读书！*/
	2.2 操作系统 min
		/*  */

3.面试刷题
	3.1 刷算法 刷力扣 60min	
    	/* 掘金小册 7/28 代码随想录
        	学习了环状链表的一个骚操作*/   
    	// 每个阶段结束后 简单总结下应对某种数据结构/对应类型的题目 应该怎么去想
    	每日推进掘金小册的进度 + 一道代码随想录的对应部分题目
        链表 + 二叉树
        字符串 + 二叉树 + 栈/队列
        双指针 + 遍历专题DFS BFS
        回溯算法 + 贪心算法
        动态规划
    3.2 面试题 min
		/*  */  
    
4.前端开发框架 
	4.1 react学习 min
		/*  */
    
5.前端进阶知识学习
    Node.js
	webpack
6.其他 
	数据库作业 30min
    计通项目整理 40min
7.每日总结 min
```



> 学习顺序预告
>
> 这里说的实操 都是在 `freecodecamp` 中进行练习

- [x] ES6 Promise 
- [x] JS基础复习 
- [ ] ~~JS 实操~~
- [x] JS30demos
- [x] 计网
- [x] 力扣
- [x] 计通项目整理 聊天儿😐
- [ ] ~~看完promise AJAX `axios`~~  
- [ ] ~~react文档复习~~
- [ ] ~~晚间JS学习看篇文章 响应式布局 刷题~~



## 1.前端基础

### 前端基础知识

```js
1.因为力扣周赛开始进行对哈希表的研究
	Map 具体的API回忆
    Set 具体API回忆
2.异步的学习
```

#### 1.Map的应用以及API回忆

#### 2.Set的应用以及API回忆

#### 3.异步的学习

[通用异步编程概念](https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/Asynchronous/Concepts)

[异步](https://developer.mozilla.org/zh-CN/docs/Glossary/Asynchronous)

事件队列 ([setTimeout](https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/Asynchronous/Timeouts_and_intervals#settimeout)/[setInterval](https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/Asynchronous/Timeouts_and_intervals#setinterval)/[Promise](https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/Asynchronous/Introducing#%E4%BA%8B%E4%BB%B6%E9%98%9F%E5%88%97))



## 2.核心基础知识

### 计网

```js
// 准备读 图解HTTP
// 每天一道计网面试题 把自己带入面试者的身份 跟面试官白话白话 嗯就这样子
“聊聊HTTPS的一些细则
	 https与http相比 就是传输的内容多了对称加密 可以这么理解嘛？
     TLS 和 SSL 需要区分嘛？
     为啥SSL的握手是4次呢？”
```

#### 聊聊HTTPS的一些细则

##### https与http相比 就是传输的内容多了对称加密 可以这么理解嘛？

雀氏如此，但是不止如此

再来复习下HTTP HTTPS两个协议之间的区别

- 建立连接的过程中 —— HTTPS比HTTP多了TLS的握手过程！
  - SSL/TLS是可以保证通信安全的~
- 建立连接之后 开始传输内容时 HTTPS会进行对称加密操作 把数据加密~

##### TLS 和 SSL 需要区分嘛？

实际上这俩是一个东西 很多文章都把SSL TLS这二者并列称呼 

总之 可以视为 **同一个东西的不同阶段** ——

- SSL `Secure Sockets Layer` ——安全套接层
  - 上世纪90年代中期由网景公司设计
- SSL标准化之后称为 TLS `Transport Layer Security` ——传输层安全协议
  - 1999年 因为SSL应用广泛 IETF把SSL标准化

##### 为啥SSL的握手是4次呢？

先来复习一下SSL握手发生的场景 HTTPS建立连接、TCP三次握手之后 会发生SSL的四次握手

SSL/TLS协议基本流程

- 【1】客户端向服务器索要并验证服务器的公钥
- 【2】双方协商生产 **会话密钥**

至此 SSL/TLS连接建立完成（也就是握手完成）

- 【3】之后双方采用**会话密钥**进行加密通信

四次握手流程图如下：

> 参考 https://blog.csdn.net/caofengtao1314/article/details/106839678/

![img](https://img-blog.csdnimg.cn/20200618174351941.png)

> 1、客户端**请求建立SSL连接**，并向服务端发送一个随机数–Client random和客户端支持的加密方法，比如RSA公钥加密，此时是明文传输。（也就是发送 “加密规则”）
> 2、服务端**回复一种客户端支持的加密方法**、一个随机数–Server random、**授信的服务器证书和非对称加密的公钥**。
> 3、客户端收到服务端的回复后**利用服务端的公钥，加上新的随机数–Premaster secret 通过服务端下发的公钥及加密方法进行加密**，发送给服务器。
> 4、服务端收到客户端的回复，利**用已知的加解密方式进行解密**，同时利用Client random、Server random和Premaster secret通过一定的算法生成HTTP链接数据传输的对称加密key – session key。

另外 看一下RFC5246中的解释

- SSL/TLS1.2 四次握手 2个RTT的时延

![img](https://img-blog.csdnimg.cn/20200618173704984.png)

- SSL/TLS1.3 优化了过程 三次握手 1个RTT往返时延

![img](https://img-blog.csdnimg.cn/20200618173724794.png)



###  操作系统



## 3.面试题

### 面试题、面经总结

### 算法题

#### 解环状链表的一个骚操作——立flag

[立flag法](https://leetcode-cn.com/problems/linked-list-cycle-ii/solution/javascript-ba-zhong-deng-nan-du-zuo-chen-j8en/)

## 4.前端开发框架

### react学习



# 10.12

没起来床的一天 

主要收获是 github玩儿得更六了 对客户端服务端的通信更有感觉了

明天继续rush React ！！

```js
     
// DDL
	写出第一版简历  10.24
		1.重点掌握HTTP协议
        2.JS基础良好 https://github.com/KieSun/fucking-frontend
        3.ES6过完 
    	4.JS30项目完结
        5.框架相关内容完结并大致完成记事本项目！
```



```js
// 今日主要收获 & 学习时间
Totally 430min
1.前端基础知识 
// 从早上-中午 拿出一整块时间学习JS 晚上跑完步回来继续看JS
    1.1 前端基础学习 120min 
		/* 大致完结了异步编程的学习内容 不得不说MDN这块儿的教程难度有点大！
        	简单看了下WebAPI的内容 AJAX axios库啥的
        	晚上开始搞框架！搞！*/
    1.2 freecodecamp JS + 响应式网页设计 min
    	/*  */
    1.3 JS 30demos 60min
    	/* demo16 对事件的认知更深一层 复习了解构赋值 */

2.核心基础知识 下午开始学计网 + 刷题
	2.1 计网 30min
		/* HTTPS一些细则的学习 开始读图解网络 */
	2.2 操作系统 min
		/*  */

3.面试刷题
	3.1 刷算法 刷力扣 100min	
    	/* 掘金小册 7/28 代码随想录
        	160 相交链表*/   
    	// 每个阶段结束后 简单总结下应对某种数据结构/对应类型的题目 应该怎么去想
    	每日推进掘金小册的进度 + 一道代码随想录的对应部分题目
        链表 + 二叉树
        字符串 + 二叉树 + 栈/队列
        双指针 + 遍历专题DFS BFS
        回溯算法 + 贪心算法
        动态规划
    3.2 面试题 min
		/*  */  
    
4.前端开发框架 
	4.1 react学习 40+50min
		/* 了解了解决跨域的两种方法 
        	package.json中追加配置
        	创建代理配置文件
        	了解了下客户端服务端收发请求的一个过程 有点感觉了？*/
    
5.前端进阶知识学习
    Node.js
	webpack
6.其他 
	完成了pr的一些更改 熟悉了一下流程 40min
7.每日总结 20min
```



> 学习顺序预告
>
> 这里说的实操 都是在 `freecodecamp` 中进行练习

- [x] Map Set的API总结
- [x] 看完promise AJAX `axios`  
- [x] JS30demos
- [x] 计网
- [x] 力扣
- [x] react文档复习 + 视频学习



## 1.前端基础

### 前端基础知识

```js
1.因为力扣周赛开始进行对哈希表的研究
	Map 具体的API回忆
    Set 具体API回忆
2.异步继续学习
	回调地狱
    Promises的简单学习——这里还是有点懵的😂
3.客户端网页API
4.高级且实用的解构赋值 把对象的属性赋值给某个属性变量
let {offsetWidth:width, offsetHeight: height} = hero;// 把hero的offsetWidth,...属性赋为 width height
```

[2032. 至少在两个数组中出现的值](https://leetcode-cn.com/problems/two-out-of-three/)

可以使用暴力遍历（数据规模不太大的话）

但是本题选择采用Map来存储元素出现的次数~同时在数组去重中使用到了Set

正好借这个机会复习下Map Set~

#### 1.Map的应用以及API回忆

```js
// 记录map中的键出现的次数count 并将其更新为值 {x=>count}
for(let x of nums){
    if(count > 0){
        count ++;
        map.set(x, count);
    }
    else{
        map.set(x, 1);
    }
}
// map中存储了键值对之后 迭代其每一对的键、值 将count>2的插入结果数组res
for(let [key, value] of map.entries()){
    if(value >= 2){
        res.push(key);
    }
}
```

[Map](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Map)

**`Map`** 对象保存键值对，并且能够记住键的原始插入顺序。任何值(对象或者[原始值](https://developer.mozilla.org/zh-CN/docs/Glossary/Primitive)) 都可以作为一个键或一个值。



#### 2.Set的应用以及API回忆

```js
// 数组去重 
function unique(){
    return [...new Set(arr)];// return Array.from(new Set(arr)) e
}
```

[Set](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set)

**`Set`** 对象允许你存储任何类型的唯一值，无论是[原始值](https://developer.mozilla.org/zh-CN/docs/Glossary/Primitive)或者是对象引用。

`Set`对象是值的集合，你可以按照插入的顺序迭代它的元素。 Set中的元素只会**出现一次**，即 Set 中的元素是**唯一**的。

```js
new Set(['d','d','d']);// {"d"}
new Set([6,6,6,6,8]);// {6, 8}
```



#### 3.继续学习异步编程

[优雅的异步处理 Promise](https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/Asynchronous/Promises)



##### [回调地狱](https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/Asynchronous/Promises#%E5%9B%9E%E8%B0%83%E5%87%BD%E6%95%B0%E7%9A%84%E9%BA%BB%E7%83%A6)

我们来谈谈订购披萨作为类比。为了使你的订单成功，你必须按顺序执行，不按顺序执行或上一步没完成就执行下一步是不会成功的：

1. 选择配料。如果你是优柔寡断，这可能需要一段时间，如果你无法下定决心或者决定换咖喱，可能会失败。
2. 下订单。返回比萨饼可能需要一段时间，如果餐厅没有烹饪所需的配料，可能会失败。
3. 然后你收集你的披萨吃。如果你忘记了自己的钱包，那么这可能会失败，所以无法支付比萨饼的费用！

对于旧式[callbacks](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Introducing#callbacks)，上述功能的伪代码表示可能如下所示：

```js
chooseToppings(function(toppings) {
  placeOrder(toppings, function(order) {
    collectOrder(order, function(pizza) {
      eatPizza(pizza);
    }, failureCallback);
  }, failureCallback);
}, failureCallback);
```

这很麻烦且难以阅读（通常称为“回调地狱”），需要多次调用`failureCallback()`（每个嵌套函数一次），还有其他问题。

- 使用promise改良

```js
chooseToppings()
	.then(function(toppings){
    	return placeOrder(toppings);
})
	.then(function(order) {
      	return collectOrder(order);
    })
    .then(function(pizza) {
      	eatPizza(pizza);
    })
    .catch(failureCallback);// 优雅地处理错误
```

利用箭头函数进行极致简化——

```js
chooseToppings()
.then(toppings => placeOrder(toppings))
.then(order => collectOrder(order))
.then(pizza => eatPizza(pizza))
.catch(failureCallback);
```

这是有效的，因为使用箭头函数 `() => x` 是 `()=> {return x;}` 的有效简写; 。

你甚至可以这样做，因为函数只是直接传递它们的参数，所以不需要额外的函数层：

```js
chooseToppings().then(placeOrder).then(collectOrder).then(eatPizza).catch(failureCallback);
```

但是，这并不容易阅读，如果你的块比我们在此处显示的更复杂，则此语法可能无法使用。

> **注意**: 你可以使用 `async/await` 语法进行进一步的改进，我们将在下一篇文章中深入讨论。

最基本的，promise与事件监听器类似，但有一些差异：

- 一个promise只能成功或失败一次。它不能成功或失败两次(顺着.then一路传下去~)，并且一旦操作完成，它就无法从成功切换到失败，反之亦然。

- 如果promise成功或失败并且你稍后添加成功/失败回调，则将调用正确的回调，即使事件发生在较早的时间。



##### [Promise术语总结](https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/Asynchronous/Promises#promise%E6%9C%AF%E8%AF%AD%E5%9B%9E%E9%A1%BE)

- 创建promise时，它既不是成功也不是失败状态。这个状态叫作**pending**（待定）。
- 当promise返回时，称为 **resolved**（已解决）
  - 一个成功**resolved**的promise称为**fullfilled**（**实现**）。它返回一个值，可以通过将`.then()`块链接到promise链的末尾来访问该值。` .then()`块中的执行程序函数将包含promise的返回值。
  - 一个不成功**resolved**的promise被称为**rejected**（**拒绝**）了。它返回一个原因（**reason**），一条错误消息，说明为什么拒绝promise。可以通过将`.catch()`块链接到promise链的末尾来访问此原因。

##### [ES6 async和await:让异步编程更简单](https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/Asynchronous/Async_await)

#### 4.[客户端网页API](https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/Client-side_web_APIs/Introduction)

####  5.解构赋值

```js
let JsonData = { id: 10, status: "OK", data: [111, 222] } 
let { id, status, data: numbers } = JsonData; 
console.log(id, status, numbers); //10 "OK" [111, 222]
```

连续解构赋值

```js
let obj = {a:{b:{c:1}}}
console.log(a.b.c) // 1 常规访问数据方法

const {a:{b:{c}}} = obj
console.log(c) // 1

let obj2 = {a:{b:1}}
const {a:{b:data}} = obj2 // 给数据变量进行重命名 从b改为data
console.log(data) // 1
```





## 2.核心基础知识

### 计网

```js
// 准备读 图解HTTP
// 每天一道计网面试题 把自己带入面试者的身份 跟面试官白话白话 嗯就这样子
“网页是如何变成https://前缀的”
读图解HTTP 
```

##### 输入 `[www.baidu.com`，怎么变成`https://www.baidu.com` 的，[怎么确定用HTTP还是HTTPS？](https://github.com/wolverinn/Waking-Up/blob/master/Computer%20Network.md#https%E8%BF%9E%E6%8E%A5%E7%9A%84%E6%97%B6%E5%80%99%E6%80%8E%E4%B9%88%E7%A1%AE%E5%AE%9A%E6%94%B6%E5%88%B0%E7%9A%84%E5%8C%85%E6%98%AF%E6%9C%8D%E5%8A%A1%E5%99%A8%E5%8F%91%E6%9D%A5%E7%9A%84%E4%B8%AD%E9%97%B4%E4%BA%BA%E6%94%BB%E5%87%BB)

[你访问的网站是如何自动切换到 HTTPS 的？](https://www.sohu.com/a/136637876_487516)

一种是<u>原始的302跳转(暂时重定向)</u>，服务器**把所有的HTTP流量跳转到HTTPS**。

- 但这样**有一个漏洞**，就是中间人可能在第一次访问站点的时候就劫持。 
  - 解决方法是**引入HSTS机制**，用户浏览器在**访问站点的时候<u>强制</u>使用HTTPS**。



###  操作系统



## 3.面试题

### 面试题、面经总结

### 算法题



## 4.前端开发框架

### react学习

#### 解决跨域的方法

因为AJAX引擎 同源策略会限制请求

出现跨域问题

- 响应从服务器回到客户端时 无法被接收！

![在这里插入图片描述](https://img-blog.csdnimg.cn/79b6635a61d84bbda856403f5dc1723a.png)

使用代理解决跨域问题

![在这里插入图片描述](https://img-blog.csdnimg.cn/dc91fa54aff14e5e8e428d9096a27006.png)

##### 方法一

> 在package.json中追加如下配置

```json
"proxy":"http://localhost:5000"
```

说明：

1. 优点：配置简单，前端请求资源时可以不加任何前缀。
2. 缺点：不能配置多个代理。
3. 工作方式：上述方式配置代理，当请求了3000不存在的资源时，那么该请求会转发给5000 （优先匹配前端资源）



##### 方法二

1. 第一步：创建代理配置文件

   ```
   在src下创建配置文件：src/setupProxy.js
   ```

2. 编写setupProxy.js配置具体代理规则：

   ```js
   const proxy = require('http-proxy-middleware')
   
   module.exports = function(app) {
     app.use(
       proxy('/api1', {  //api1是需要转发的请求(所有带有/api1前缀的请求都会转发给5000)
         target: 'http://localhost:5000', //配置转发目标地址(能返回数据的服务器地址)
         changeOrigin: true, //控制服务器接收到的请求头中host字段的值
         /*
         	changeOrigin设置为true时，服务器收到的请求头中的host为：localhost:5000
         	changeOrigin设置为false时，服务器收到的请求头中的host为：localhost:3000
         	changeOrigin默认值为false，但我们一般将changeOrigin值设为true
         */
         pathRewrite: {'^/api1': ''} //去除请求前缀，保证交给后台服务器的是正常请求地址(必须配置)
       }),
       proxy('/api2', { 
         target: 'http://localhost:5001',
         changeOrigin: true,
         pathRewrite: {'^/api2': ''}
       })
     )
   }
   ```

说明：

1. 优点：可以配置多个代理，可以灵活的控制请求是否走代理。
2. 缺点：配置繁琐，前端请求资源时必须加前缀。



# 10.13

身体略有一些不适的一天 感觉有点消化不老好滴？

```js
// DDL
	写出第一版简历  10.24
		1.重点掌握HTTP协议
        2.JS基础良好 https://github.com/KieSun/fucking-frontend
        3.ES6过完 
    	4.JS30项目完结
        5.框架相关内容完结并尽量完成记事本项目！
```



```js
// 今日主要收获 & 学习时间
Totally 460min
1.前端基础知识 
// 从早上-中午 拿出一整块时间学习JS 晚上跑完步回来继续看JS
    1.1 前端基础学习 100+190min 
		/* 学习了DOM API的一些内容 完成了一个小demo 为前端知识库增添“项目”内容
        	项目内容的添砖加瓦 —— 一个DOM编程 一个Ajax的例子
        	从服务器获取数据，暂时学习了将本地.txt文件当作服务器的方法 但是这样是无法请求到数据的~明天学一下在server端运行这个例子~
        	复习闭包*/
    1.2 freecodecamp JS + 响应式网页设计 min
    	/*  */
    1.3 JS 30demos 80min
    	/* demo17 一个简单的小demo 练习了正则表达式和数组的一些方法 */

2.核心基础知识 下午开始学计网 + 刷题
	2.1 计网 30min
		/* 图解HTTP 简单学习了IP协议与数据链路层数据的传输，
        	复习了HTTP/1.1协议优化的方式	*/
	2.2 操作系统 min
		/*  */

3.面试刷题
	3.1 刷算法 刷力扣 30min	
    	/* 掘金小册 7/28 代码随想录
        	两数之和 哈希表解法 明天继续看数组 稍微小结一下~*/   
    	// 每个阶段结束后 简单总结下应对某种数据结构/对应类型的题目 应该怎么去想
    	每日推进掘金小册的进度 + 一道代码随想录的对应部分题目
        链表 + 二叉树
        字符串 + 二叉树 + 栈/队列
        双指针 + 遍历专题DFS BFS
        回溯算法 + 贪心算法
        动态规划
    3.2 面试题 min
		/*  */  
    
4.前端开发框架 
	4.1 react学习 min
		/*  */
    
5.前端进阶知识学习
    Node.js
	webpack
6.其他 
	毛概 30min
7.每日总结 min
```



> 学习顺序预告
>
> 这里说的实操 都是在 `freecodecamp` 中进行练习

- [x] MDN网页API学习
- [x] 闭包复习
- [x] JS30demos 
- [x] 计网
- [x] 力扣
- [ ] ~~CSS实操~~
- [ ] ~~react文档复习 + 视频学习~~



## 1.前端基础

### 前端基础知识

```js
1.Web API学习
```



#### 1.[客户端网页API](https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/Client-side_web_APIs/Introduction)

比如说，编程来显示一些3D图形，使用**以更高级语言编写的API**（例如JavaScript或Python）将会比**直接编写直接控制计算机的GPU或其他图形功能的低级代码**（比如C或C++）来执行操作要容易得多。



##### [操作文档](https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents#%E4%B8%BB%E5%8A%A8%E5%AD%A6%E4%B9%A0_%E5%9F%BA%E6%9C%AC%E7%9A%84dom_%E6%93%8D%E4%BD%9C)

对文档和DOM操作的研究

应该了解什么是文档对象模型，怎样操作它来创建有用的功能

- CSS样式的JavaSript属性版本以小驼峰式命名法书写，而CSS版本带连接符号（`backgroundColor` 对 `background-color`）。确保你不会混淆，否则就不能工作。

- 使用JavaScript创建静态内容是毫无意义的 — 最好将其写入HTML，而不使用JavaScript。用JavaScript创建内容也有其他问题（如不能被搜索引擎读取），比HTML复杂得多。



###### 根据官网指导做了一个DOM操作的小demo



##### [从服务器获取数据](https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/Client-side_web_APIs/Fetching_data)

完成了一半 明天学习开启一个本地服务器 并进行数据的发送接收

##### [第三方API](https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/Client-side_web_APIs/Third_party_APIs)



## 2.核心基础知识

### 计网

```js
// 准备读 图解HTTP
// 每天一道计网面试题 把自己带入面试者的身份 跟面试官白话白话 嗯就这样子
“HTTP/1.1如何优化
	传输层 TCP协议的角度
    HTTP协议的角度
    明天来看看如何利用缓存技术避免发送HTTP请求...最终优化HTTP/1.1协议”
读图解HTTP 
	简单看了一下IP协议 了解了如何通过 ARP协议与MAC地址 通过数据链路层找到接收方（路由选择）
```

#### HTTP/1.1如何优化

- 通过 TCP协议的keepalive将HTTP/1.1从短连接改成长连接

  这里参考了[这篇文章](https://www.jianshu.com/p/9fe2c140fa52)  得知了HTTP TCP协议各自有一个Keep-Alive 和 `KeepAlive`机制，这里优化HTTP/1.1的机制指的是传输层部分的内容~

  - 机制意图在于

    - 保活
    - 心跳
    - 检测连接错误

    一个TCP连接两端长时间没有数据传输时（通常默认配置是2小时），发送keepalive指针，探测链接是否存活

通过减少 TCP 连接建立和断开的次数，来减少了网络传输的延迟，从⽽提⾼ HTTP/1.1 协议的传输效率。



- HTTP协议的角度
- **尽量避免发送HTTP请求**
  - 缓存
- **在需要发送HTTP请求时，要考虑如何减少请求次数**
  - 减少重定向请求次数
  - 合并请求
  - 延迟发送请求
- **减少服务器的HTTP响应数据的大小**
  - 无损压缩
  - 有损压缩



###  操作系统



## 3.面试题

### 面试题、面经总结

### 算法题



## 4.前端开发框架

### react学习



# 10.14



```js
// DDL
	写出第一版简历  10.24
		1.重点掌握HTTP协议
        2.JS基础良好 https://github.com/KieSun/fucking-frontend
        3.ES6过完 
    	4.JS30项目完结
        5.框架相关内容完结并尽量完成记事本项目！
```



```js
// 今日主要收获 & 学习时间
Totally 480min
1.前端基础知识 
// 从早上-中午 拿出一整块时间学习JS 晚上跑完步回来继续看JS
    1.1 前端基础学习 170+80min 
		/* 继续入门ajax fetch promise 稍微有点感觉了！MDN文档还是比较顶！
        复习DOM编程内容，整理下，发到掘金上~
        做了个前端知识库的海报hhh
        复习下ajax promise
        总结前端能力个人画像的一些细则，发现还有好多要学的啊！*/
    1.2 freecodecamp JS + 响应式网页设计 min
    	/*  */
    1.3 JS 30demos 90min
    	/* demo18 */

2.核心基础知识 下午开始学计网 + 刷题
	2.1 计网 50min
		/* 复习一下HTTP/1.1协议的一些优化细节~
        	从HTTP出发
        	1.尽量不发送HTTP请求 缓存
        	2.尽量减少HTTP请求的次数 代理服务器重定向，合并请求，按需发送请求
        	3.减少响应返回的资源大小 压缩算法：无损压缩文本、代码；有所压缩：音视频、图片*/
	2.2 操作系统 min
		/*  */

3.面试刷题
	3.1 刷算法 刷力扣 50min	
    	/* 掘金小册 7.5/28 代码随想录
        	两数之和 */   
    	// 每个阶段结束后 简单总结下应对某种数据结构/对应类型的题目 应该怎么去想
    	每日推进掘金小册的进度 + 一道代码随想录的对应部分题目
        链表 + 二叉树
        字符串 + 二叉树 + 栈/队列
        双指针 + 遍历专题DFS BFS
        回溯算法 + 贪心算法
        动态规划
    3.2 面试题 min
		/*  */  
    
4.前端开发框架 
	4.1 react学习 min
		/*  */
    
5.前端进阶知识学习
    Node.js
	webpack
6.其他 
	金融市场分析 小论文 40min
7.每日总结 min
```



> 学习顺序预告
>
> 这里说的实操 都是在 `freecodecamp` 中进行练习

- [x] MDN从服务器获取数据的学习
- [x] 文章总结AJAX Fetch promise & DOM编程
- [x] 计网
- [x] 力扣 数组
- [x] JS30demos 
- [x] 如何理解金融



## 1.前端基础

### 前端基础知识

```js
1.Web API学习
	学习了如何开启本地服务器，学习了Fetch API，复习了Promise
2.parseInt，parseFloat应用
3.map方法复习
4.Map数据结构我不知道的事儿...
```



#### 1.[客户端网页API](https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/Client-side_web_APIs/Introduction)

##### [从服务器获取数据](https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/Client-side_web_APIs/Fetching_data)

 使用http-server开启一个本地服务器 并进行数据的发送接收

##### Fetch

##### Promise

##### [第三方API](https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/Client-side_web_APIs/Third_party_APIs)





#### 2.parseInt & parseFloat

首先明确定义

- `parseInt` 

`parseInt`函数将其第一个参数转换为一个字符串，对该字符串**进行解析**，然后返回一个整数或 `NaN`。

> 注意如果第一个参数从左到右数，遇到字符就会舍弃字符+字符后面的内容
>
> ```js
> parseInt('00x1111', 2);// 0
> parseInt('0011x11', 2);// 3
> ```

```js
parseInt('123xxx', 5) // 先把'123xxx'转换为'123' 将'123'看作5进制数，返回十进制数38 => 1*5^2 + 2*5^1 + 3*5^0 = 38
```

- `parseFloat`

**`parseFloat()`** 函数解析一个参数（必要时先转换为字符串）并返回一个浮点数。

```js
parseFloat('5556.6www');// 5556.6
```



这里一个有趣的应用

```js
var a = ["88","66"];
// 将a数组转换为数值型可以简单地这样做
a.map(parseFloat);// [88,66]这里其实我也不知道为啥可以XD
//a.map(parseInt) 返回就是 [88,NaN]🥺
// 也可以常规一些~
a.map(x => parseInt(x));// .map(x => parseFloat(x))
```



#### 3.map方法复习

`map()` 方法创建一个新数组，其结果是该数组中的每个元素是**调用一次提供的函数**后的返回值。

可以看上面的例子~



#### 4.Map数据结构虽好，可不能瞎用！

```js
var map = new Map();
var obj = {};

map.set(1,6);
obj[1] = 6;

map[1];// undefined
```

今天做两数和的时候，用Map对象map[1]想找对应的键，死活找不到！蠢了！

Map对象的键值对其实是存储在 `[[Entries]]` 中的！

![clipboard.png](https://segmentfault.com/img/bVPZag?w=197&h=93)

- 想获得并操作键&值

`for(let [key,value] of map.entries()){...}`

- 想一次性获得这些键值对并存在一个数组中

`var arr = Array.from(map)`



## 2.核心基础知识

### 计网

```js
// 准备读 图解HTTP
// 每天一道计网面试题 把自己带入面试者的身份 跟面试官白话白话 嗯就这样子
“HTTP/1.1如何优化
    从HTTP出发
    1.尽量不发送HTTP请求 缓存
    2.尽量减少HTTP请求的次数 代理服务器重定向，合并请求，按需发送请求
    3.减少响应返回的资源大小 压缩算法：无损压缩文本、代码；有所压缩：音视频、图片
    最终优化HTTP/1.1协议”
```

#### HTTP/1.1如何优化

- 传输层的角度
  - 通过 TCP协议的keepalive将HTTP/1.1从短连接改成长连接

- HTTP协议的角度

下面这三点是逐条递进的

【1】先考虑如何减少发送HTTP请求（通过缓存），

如果不得不发送HTTP请求，那么就【2】考虑如何让HTTP请求次数减少一些（TCP连接导致的握手、慢启动过程都很耗时欸！😂）

如果请求次数已经很少了，那么就【3】考虑下怎么减少服务器的HTTP响应数据的大小！（一般就是压缩咯）

##### 【1】**尽量避免发送HTTP请求**

###### 缓存


  对于一些具有重复性的HTTP请求 比如**每次请求得到的数据都是一样的** 我们就可以把这对**请求-响应**的数据都<u>缓存在本地</u> 那么下次就直接读取本地的数据 不必再通过网络获取服务器的响应了~

  HTTP的设计者很早就想到了利用==缓存技术==实现 **避免发送HTT** 所以HTTP协议的头部有不少是针对缓存的字段

  

##### 【2】**在需要发送HTTP请求时，要考虑如何减少请求次数**

###### 减少重定向请求次数

  服务端这一方往往不只有一台服务器，客户端为了请求一个资源，往往需要先发送请求给代理服务器，然后代理服务器再发送给源服务器；如果进行重定向会导致出现重复的消息传递

  ![在这里插入图片描述](https://img-blog.csdnimg.cn/f86d67f0ee374543bf318b892f1a2ee3.png)

  所以解决的方法也很简单

将重定向的工作交给代理服务器完成

![在这里插入图片描述](https://img-blog.csdnimg.cn/1b6ba1cd6222450facc9e8ce5fda904e.png)

另外代理服务器知晓了重定向规则之后，可以进一步减少消息传递的次数（代理服务器是通过缓存实现的这点么？这个不是很清楚）



###### 合并请求

多个访问小文件的请求合并成一个大的请求 虽然传输的总资源还是一样 但是减少请求 也就意味着减少了**重复发送的HTTP头部**

另外HTTP请求次数减少了（要时刻注意我们处于的主题是“减少HTTP请求次数”）的话，可以减少TCP连接的数量呐！

- 可以使用精灵图技术将零散的小图片合成一个大图片~达到合并请求的目的
- 服务端使用webpack等打包工具将 JS CSS 等资源合并打包成大文件也可以达到类似的效果
- 还可以将图片的二进制数据用 base64 编码后 以URL的形式嵌入到HTML文件中 跟随HTML文件一并发送

这样客户端收到HTML后 就可以直接解码出数据然后直接显示图片了！

客户端因此不用再发起图片相关的请求 这样便减少了请求的次数！

> 这样的合并请求又会带来新的问题 ==当大资源中的某一个小资源发生变化后 客户端必须重新下载整个完整的大资源文件==！ 这就很难受…反而带来了额外的网络消耗
>
> 所以说 好多解决方法都是双刃剑的说~
>

###### 延迟（按需）发送请求

请求网页的时候 我们不去获取全部资源 而是只获取当前用户所看到的的页面资源 当用户向下滑动的时候 再向服务器获取接下来的资源 这样就达到了 ==延迟发送请求== 的效果

> 平常看漫画的时候可能感触最深~
>
> 点开一集 一般都会先加载前面的 如果网不够快的话 可能往后看的时候会显示漫画加载中~

##### 【3】**减少服务器的HTTP响应数据的大小**

我们可以考虑对响应的资源进行==压缩== 这样就可以减少响应的数据大小 从而提高网络传输的效率

而我们要进一步考虑如何选择合适的压缩算法

###### 无损压缩

⽆损压缩是指**资源经过压缩后，信息不被破坏，还能完全恢复到压缩前的<u>原样</u>**，适合⽤在

- ⽂本⽂件
- 程序可执⾏⽂件
- 程序源代码。 

###### 有损压缩

经过此⽅法压缩，解压的数据会与原始数据不同但是⾮常接近

有损压缩主要将次要的数据舍弃，**牺牲⼀些质量来减少数据量**、提⾼压缩⽐，这种⽅法经常⽤于压缩

- 多媒体数据， 
  - ⽐如⾳频、视频、图⽚

###  操作系统



## 3.面试题

### 面试题、面经总结

### 算法题



## 4.前端开发框架

### react学习



# 10.15



```js
// DDL
	写出第一版简历  10.24
		1.重点掌握HTTP协议
        2.JS基础良好 
        3.ES6过完 
    	4.JS30项目完结
        5.框架相关内容完结并尽量完成记事本项目！
```



```js
// 今日主要收获 & 学习时间
Totally 400min
1.前端基础知识 
// 从早上-中午 拿出一整块时间学习JS 晚上跑完步回来继续看JS
    1.1 前端基础学习 120min 
		/* 过了一边面向对象那里的内容，之后还要回来看原型、继承、类的一些细节
        	通过字符串中找固定的几个字符来复习数组API*/
    1.2 freecodecamp JS + 响应式网页设计 10min
    	/* 复习了一下用来复制数组的slice方法和...运算符
        	复习了一下indexOf 用来检查元素是否存在*/
    1.3 JS 30demos 10min
    	/* 简单看了下demo19 时间不太够 跳过了~ */

2.核心基础知识 下午开始学计网 + 刷题
	2.1 计网 60min
		/* 听趣谈网络协议，看图解HTTP,完成第一章，复习了下URI 统一资源定位符的内容 */
	2.2 操作系统 min
		/*  */

3.面试刷题
	3.1 刷算法 刷力扣 150min	
    	/* 掘金小册 7.5/28 代码随想录
        	88 合并两个有序数组题多种方法的探索，明天还要来看双指针的方法！
        	15 三数之和 有哈希表的做法、双指针的做法*/   
    	// 每个阶段结束后 简单总结下应对某种数据结构/对应类型的题目 应该怎么去想
        链表 + 二叉树
        字符串 + 二叉树 + 栈/队列
        双指针 + 遍历专题DFS BFS
        回溯算法 + 贪心算法
        动态规划
    3.2 面试题 min
		/*  */  
    
4.前端开发框架 
	4.1 react学习 min
		/*  */
    
5.前端进阶知识学习
    Node.js
	webpack
6.其他 
	网络安全法导论 小论文 50min
7.每日总结 min
```



> 学习顺序预告
>
> 这里说的实操 都是在 `freecodecamp` 中进行练习

- [x] JS红宝书
- [x] JS实操 
- [x] 计网
- [x] 力扣 数组 + 字符串 + 数据结构基础 推进度
- [ ] ~~JS30demos~~ 
- [ ] ~~css实操~~
- [ ] ~~react框架学习~~



## 1.前端基础

### 前端基础知识

```js
1.红宝书 对象、类、面向对象编程
	先跳过原型这里~ p249-263
	继承 - 原型链 p263-274
	类 p274-290
2.从URL字符串中获取“查询字符串参数”
3.JS求数组最大值
	apply方法的使用
```

#### 1.从URL字符串中获取“查询字符串参数”

可参考下这篇 https://www.cnblogs.com/chun6/p/6366125.html

- 简单遍历🥺

```js
console.log(getUrlArr());
function getUrlArr() {
    let arr = [];
    let url = "https://github.com/FangzhouSu/Constant-Front-End-Study/?a=1&b=2&c=3"
    let str = url.split("?")[1];
    let arr1 = str.split("&");
    for(let i = 0; i < arr1.length; i++) {
        let value = arr1[i].split("=")[1];
        arr.push(value);
    }
    return arr;
}
```

- 用`Array.prototype.map()`优化一下查询方法🤔

```js
let url = "https://github.com/FangzhouSu/Constant-Front-End-Study/?a=1&b=2&c=3"
let obj = {};
let result = url.split('?')[1].split('&').map((item) =>
    obj[item.split('=')[0]] = item.split('=')[1];
)
console.log(obj);// 
```



- 利用`Array.prototype.reduce()`一行完成查询（骄傲脸😎）

```js
let url = "https://github.com/FangzhouSu/Constant-Front-End-Study/?a=1&b=2&c=3"
url.split('?')[1].split('&').reduce((obj, item) => (
    obj[item.split('=')[0]]=item.split('=')[1], obj), {}
)
```



#### 2.求数组最大值

```js
var arr = [66,88,166,30];
// 01 超级好用的展开运算符~
Math.max(...arr);
// 02 和call方法类似的apply方法，可以为数组调用本不属于它的方法
// 与call方法不同之处在于 接收的参数为数组，call方法是分别接受参数~
Math.max.apply(null, arr);
// 03 比较笨的for循环
let max = arr[0];
for(let i = 0; i < arr.length; i++){
    max = arr[i] > max ? arr[i] : max;
}
// 04 sort方法先倒序一下
arr.sort((a, b) => {
    return b - a;
})
arr[0];
// 05 归并方法
arr.reduce((pre, cur) => {
    return pre > cur ? pre : cur;
})
```

#### 3.apply方法的使用

通过 [apply() 方法](https://www.w3school.com.cn/js/js_function_apply.asp)，您能够编写用于不同对象的方法。

##### 方法重用

```js
var person = {
  fullName: function() {
    return this.firstName + "调用成功" + this.lastName;
  }
}
var person1 = {
  firstName:"Bill",
  lastName: "Gates"
}
person.fullName.apply(person1); // Bill调用成功Gates
```



```js
var person = {
  fullName: function(city, country) {
    return this.firstName + " " + this.lastName + "," + city + "," + country;
  }
}
var person1 = {
  firstName:"Bill",
  lastName: "Gates"
}
// 还可以传参进去哈！与call不同于参数的类型 为 数组
person.fullName.apply(person1, ["Seatle", "USA"]); // Bill Gates,Seatle,USA
```

##### 可用于在数组上模拟max方法

您可以使用 `Math.max()` 方法找到（数字列表中的）最大数字：

由于 JavaScript 数组没有 max() 方法，因此您可以应用 `Math.max.apply()` 方法。

```js
Math.max(1,2,3);

let arr = [1,2,3]
Math.max.apply(null, arr); // 也会返回 3 注意：第一个参数填啥没影响的，本次使用中没他事儿~
```

##### JavaScript 严格模式

在 JavaScript 严格模式下，如果 apply() 方法的第一个参数不是对象，则它将成为被调用函数的所有者（对象）。

在“非严格”模式下，它成为全局对象。



## 2.核心基础知识

### 计网

```js
// 准备读 图解HTTP
// 每天一道计网面试题 把自己带入面试者的身份 跟面试官白话白话 嗯就这样子
图解HTTP完成第一章
	从URI格式学习到了如何使用JS获得URL地址的查询字符串，文章总结
```



###  操作系统



## 3.面试题

### 面试题、面经总结

### 算法题

刷了一下数组的一些基础习题，不借助复杂的解题技巧，直接凭借对数组的熟练度、双指针进行对数组的遍历求解，就是得想到那个便利的方法并把方法想全！

## 4.前端开发框架

### react学习



# 10.16 *明天开始上午狂刷基础

今天出去放松放松~沙河半日游哈😄

晚上搞算法搞到2点

真是个不愉快且愚蠢的决定呐！快睡吧！下周可得把作息调整过来了！

```js
// DDL
	写出第一版简历  10.24
		1.重点掌握HTTP协议
        2.JS基础良好 
        3.ES6过完 
    	4.JS30项目完结
        5.框架相关内容完结并尽量完成记事本项目！
```



```js
// 今日主要收获 & 学习时间
Totally 420min
1.前端基础知识 
// 从早上-中午 拿出一整块时间学习JS 晚上跑完步回来继续看JS
    1.1 前端基础学习 160min 
		/* 红宝书面向对象那一章又仔细看了看，看了一些基础知识
        	明天打算实行 上午死磕前端基础（学+练一体） 的学习方式 早起冲！
        	复习数组那部分时，又看了一些数组的API，有收获！map forEach find*/
    1.2 freecodecamp JS + 响应式网页设计 min
    	/*  */
    1.3 JS 30demos min
    	/* */

2.核心基础知识 下午开始学计网 + 刷题
	2.1 计网 min
		/*  */
	2.2 操作系统 min
		/*  */

3.面试刷题
	3.1 刷算法 刷力扣 200min	
    	/* 掘金小册 9/28 代码随想录
        	复习了一下两章的数据结构，链表理解更深了，栈、队列更加熟练，不过都是理论上的知识，要多练题提升熟练度
        	复习数组那两道双指针 常规双指针+开辟额外空间 / 倒序双指针（学习到的新技巧）
        	力扣双周赛
        		第一道medium被虐，蓝瘦！以后碰到这种感觉代码量过长的就知道是想错了！*/   
    	// 每个阶段结束后 简单总结下应对某种数据结构/对应类型的题目 应该怎么去想
    	每日推进掘金小册的进度 + 一道代码随想录的对应部分题目
        链表 + 二叉树
        字符串 + 二叉树 + 栈/队列
        双指针 + 遍历专题DFS BFS
        回溯算法 + 贪心算法
        动态规划
    3.2 面试题 60min
		/* 一组数据中只有一个数字出现了一次.其他所有数字都是成对出现的.请找出这个数字 */  
    
4.前端开发框架 
	4.1 react学习 min
		/*  */
    
5.前端进阶知识学习
    Node.js
	webpack
6.其他 
7.每日总结 min
```



> 学习顺序预告
>
> 这里说的实操 都是在 `freecodecamp` 中进行练习

- [x] JS红宝书 
- [x] 力扣 数组 + 字符串 + 数据结构基础 推进度；双周赛
- [ ] J~~S30 demos~~ 
- [ ] ~~css实操~~
- [ ] ~~react框架学习~~



## 1.前端基础

### 前端基础知识

```js
1.红宝书 对象、类、面向对象编程
	原型复习 p249-263
	继承 - 原型链 p263-274
2.数组遍历的三种方式 for/arr.forEach((item, index) => {console.log(item, index)})/arr.map((item,index)=>{...; return xxx;})
3.this关键字学习 还有一篇文章待看！
4.find()方法 蛮好用的！返回数组中满足提供函数的第一个元素的值，否则返回undefined
findIndex()和find()差不多，返回数组中满足提供函数的第一个元素的下标，否则返回-1
5.字符串.indexOf(元素值,从索引为几开始寻找) 返回调用它的 String 对象中第一次出现的指定值的索引，从 fromIndex 处进行搜索。如果未找到该值，则返回 -1。
6.复习一下异或
```

#### 1.使用原型链达成继承

> 红宝书中（p268附近）介绍了六种实现继承的方法（下面这里-尚硅谷的课程-介绍了前三种）
>
> 另外还有
>
> - 原型式继承
> - 寄生式继承
> - 寄生式组合继承（解决前一个组合继承 也就是伪经典继承的不足）
>

【1】原型链继承 —— 子类型继承得到方法

- 通过`Child.prototype = new Parent()`继承父函数 从而继承了属性与方法
- **缺点**：通过Child构造的对象 的原型对象 的 `constructor` 属性指向Parent！这不好！
  - 我们需要让子类型的原型的 `constructor`  指向子类型 才对！
  - 这个问题可以通过 `Child.prototype.constructor = Child;` 来修正constructor属性

画一个继承的示意图（从内存的角度来看）

![在这里插入图片描述](https://img-blog.csdnimg.cn/b32d8872931d43888b9fec5889e3d1cd.png)



- 【2】借用构造函数 : 得到属性（这个其实不算继承拉~）（红宝书中称其为 盗用构造函数）

* * 通过 `Parent.call(this,name,age)` 继承（调用父类型构造函数）
  * 缺点：获得父类型的方法很麻烦！还得借助call方法一个个地弄 `Parent.func.call(this,参数)`

  ```js
  function Parent(xxx){this.xxx = xxx}
  Parent.prototype.test = function(){};
  function Child(xxx,yyy){
      Parent.call(this, xxx);//借用构造函数   this.Parent(xxx)
      // 相当于 this.Parent(xxx)
  }
  var child = new Child('a', 'b');  //child.xxx为'a', 但child没有test()
  ```

* 【3】组合（利用原型链继承方法和call方法继承属性）继承

```js
function Parent(xxx){this.xxx = xxx}
Parent.prototype.test = function(){};
function Child(xxx,yyy){
    Parent.call(this, xxx);//借用构造函数 相当于this.Parent(xxx) 继承父类型地属性
}
// 通过原型链继承父类型
Child.prototype = new Parent(); //得到test()
var child = new Child(); //child.xxx为'a', 也有test()
```



#### 2.数组遍历的三个方法

首先明确，for循环是最快的，没啥特别要求就用for循环即可！

- for方法 不用说了

- [forEach方法](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)

```js
arr.forEach(callback(currentValue [, index [, array]])[, thisArg]){
    // currentValue 数组中正在处理的当前元素。
    // index 可选 数组中正在处理的当前元素的索引。
}
```

- 调用 `forEach` 后添加到数组中的项不会被 `callback` 访问到

对数组的每个元素执行一次给定的函数

```js
arr.forEach((item, index)=> {// 第一个是元素值，第二个是对应索引
    // 输出数组的元素值，输出当前索引
    console.log(item, index)
})
```

- map方法

> 官方解释：map()方法创建一个新数组，其结果是该数组中的每个元素是调用一次提供的函数的返回值

map 方法在调用形式上与 forEach 无异，区别在于 map 方法会根据你传入的函数逻辑对数组中每个元素进行处理、进而**返回一个全新的数组**。所以其实 map 做的事情不仅仅是遍历，而是在遍历的基础上“再加工”。当我们需要对数组内容做批量修改、同时修改的逻辑又高度一致时，就可以调用 map 来达到我们的目的！

```js
const newArr = arr.map((item, index) => {
    // 输出数组的元素值，输出当前索引
    console.log(item, index)
    return item + 1;
})
```







#### 3.this关键字的学习

##### 阮大教程 偏基础，偏底层原理，例子很简单

this指向**函数运行时所在的环境**，那么为什么this关键字有这样的作用？函数的运行环境是如何决定的？看看阮一峰大大写得这篇文章，你会有新的感悟！（真的让我对内存、对象等知识都有了新的认识！）

[【阮大】JavaScript 的 this 原理](https://www.ruanyifeng.com/blog/2018/06/javascript-this.html)

粘一下this的定义：

> 由于函数可以在不同的运行环境执行，所以需要有一种机制，能够在函数体内部获得当前的**运行环境**（context）。所以，`this`就出现了，它的设计目的就是**在函数体内部，指代函数当前的运行环境**。

##### 前辈笔记 例子很多，做完以后面试题应该是不怕了！

[this到底指向哪里？](https://note.youdao.com/ynoteshare/index.html?id=b2fab3b044aa90033395df0c8c9ca3a4&type=note&_time=1634385217314)

> 在JavaScript中`this`的指向总是让人很困惑，它到底指的啥？。`this`在不同的执行环境，不同的用法下会有所不同，以下分几种情况，讨论`this`的指向。
>
> - ##### this在全局作用域中
>
> - ##### this在函数(function)里
>
> - ##### 在构造函数里的this指向
>
> - ##### 在事件处理器(event handler)中this的指向
>
> 总结：
>
> - 对于函数中的`this`，通过查看`()`左边所属的对象去确定，真的很好用。
> - 实质上，`this`是在创建函数的执行环境时，在创建阶段确定的，因此，弄透执行环境，去思考执行环境创建阶段的`this`的指向，`this`的指向就不会弄错了
>
> > 雀氏！在使用new关键字创建对象时，其中一步就是“构造函数内部的this被赋值为这个创建好的新对象（即this指向新对象）”（参考红宝书）
> >
> > ![在这里插入图片描述](https://img-blog.csdnimg.cn/2e9199be6e1d40df92a1d69246930628.png)

#### 4.异或的复习

我们在计组中学习过 异或的定义——

- a^b —— 先把a、b转换成二进制 每位进行比较 不相等的位为1 相等的位为0

一些规律——

- a^a = 0 
- a^0 = a

##### 交换两数 

```js
var a = 6;// 0110
var b = 8;// 1000
a = a^b;// 14
b = a^b;// b = a ^ b ^ b = a ^ 0 = 6
a = a^b;// (a = a ^ b(原来的那个b)) ^ b = a ^ b ^ a = a ^ a ^ b(原来的那个b) = b(原来的那个) = 8
```



##### 更高级地判断两数是否相等

```js
let a = 6;
let b =6;
if(a ^ b === 0){
    console.log("二者相等")
}
```



## 2.核心基础知识

### 计网

```js

```



###  操作系统



## 3.面试题

### 面试题、面经总结

跟同学讨论了一道面试题 同时也是小型算法题

#### 一组数据中只有一个数字出现了一次。其他所有数字都是成对出现的。 请找出这个数字

[在数组中出现1次,其他数字出现n次](https://blog.csdn.net/Later_1999/article/details/97762520?utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7Edefault-1.no_search_link&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7Edefault-1.no_search_link)

[在一个数组 nums 中除一个数字只出现一次之外，其他数字都出现了三次。请找出那个只出现一次的数字。](https://blog.csdn.net/Mason97/article/details/104769920)

#### [剑指 Offer 56 - II. 数组中数字出现的次数 II](https://leetcode-cn.com/problems/shu-zu-zhong-shu-zi-chu-xian-de-ci-shu-ii-lcof/)

### 算法题

```
1.复习一下数据结构，双指针完成数组的几道题
	leetcode 88.使用两个双指针的方法分别完成
2.链表结点的构造函数
```

#### 链表结点的构造函数

```js
function ListNode(val){
    this.val = val;
    this.next = next;
}
// 创建结点node时，传入数据域对应的值val-1；指定next-下一个链表结点
let head = new ListNode(1);// 头结点，值为1
head.next = new ListNode(2);// 头结点指向的结点，值为2
let dummyHead = new ListNode(0, head);// 虚拟头结点，指向头节点head
```

![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/816ad2c296f74df78342093e4d6edcf6~tplv-k3u1fbpfcp-watermark.awebp)

#### 解决上面说的面试题(二分法最优！)

##### 位运算

```js
var arr = [8,8,9,9,6];
let cur = arr[0];
for(let i = 1; i < arr.length; i++){
    cur ^= arr[i];// a^a = 0; a^0 = a;
}
console.log(cur);// 6
```

时间复杂度为O（N） 还不是最佳

##### 二分法（最优）

```js
// 明天写出来
```



## 4.前端开发框架

### react学习



# 10.17 *下周开始早起出去刷基础知识 *下周开始每天睡前进行每日学习总结！



```js
// DDL
	写出第一版简历  10.24
		1.重点掌握HTTP协议
        2.JS基础良好 
        3.ES6过完 
    	4.JS30项目完结
        5.框架相关内容完结并尽量完成记事本项目！
```



```js
// 今日主要收获 & 学习时间
Totally 350min
1.前端基础知识 
// 从早上-中午 拿出一整块时间学习JS 晚上跑完步回来继续看JS
    1.1 前端基础学习 120+90min 
		/* 主要复习了一下CSS实现垂直居中，实现高宽的设置
        	明天看隐式转换的内容并写文
        	复习了下函数作用域 函数执行上下文 闭包 构造函数
        		只能说 构造函数的基础都没打好 实在太菜辣！明天老老实实看红宝书的函数那章吧~*/
    1.2 freecodecamp JS + 响应式网页设计 min
    	/*  */
    1.3 JS 30demos 60min
    	/* 花里胡哨的demo19完成，虽说没有完全理解 但是这个轮子的基础版本算是会用了~之后有空可以研究下怎么在服务器上跑 */

2.核心基础知识 下午开始学计网 + 刷题
	2.1 计网 30min
		/* 复习了下HTTPS的优化方法
        	HTTP/2 HTTP/3的优点*/
	2.2 操作系统 min
		/*  */

3.面试刷题
	3.1 刷算法 刷力扣 50min	
    	/* 掘金小册 9/28 代码随想录
        	总结一下明天要刷啥题~剑指Offer的一些内容*/   
    	// 每个阶段结束后 简单总结下应对某种数据结构/对应类型的题目 应该怎么去想
    	每日推进掘金小册的进度 + 一道代码随想录的对应部分题目
        链表 + 二叉树
        字符串 + 二叉树 + 栈/队列
        双指针 + 遍历专题DFS BFS
        回溯算法 + 贪心算法
        动态规划
    3.2 面试题 min
		/*  */  
    
4.前端开发框架 
	4.1 react学习 min
		/*  */
    
5.前端进阶知识学习
    Node.js
	webpack
6.其他 
7.每日总结 
```



> 学习顺序预告
>
> 这里说的实操 都是在 `freecodecamp` 中进行练习

- [x] CSS实操
- [x] 计网
- [ ] ~~力扣 三道面试题 小册推进度~~
- [x] JS30 demos 
- [ ] ~~react框架学习~~
- [x] 周总结~

## 1.前端基础

### 前端基础知识

```js
1.隐式转换的问题
	由一道面试题引入
2.复习CSS页面垂直居中的六种方法 更新文章：https://juejin.cn/post/7009662518406676488
```

#### 1.一道面试题引入的隐式转换的学习

明天来[看](https://blog.csdn.net/weixin_33711647/article/details/88723157?utm_medium=distribute.pc_relevant.none-task-blog-2~default~baidujs_title~default-1.no_search_link&spm=1001.2101.3001.4242)

```js
if ([] == false) {
    console.log(1);// 1
}
if ([]) {
    console.log(3);// 3
}
if ({} == false ) {
    console.log(2);// undefined 
}
if ({}) {
    console.log(2);// 2
}
if ([1] == [1]) {
    console.log(4);// undefined 
}
```



```js
{} == false;// Unexpected token '=='
```



## 2.核心基础知识

### 计网

```js
1.HTTPS优化总览、HTTP/2优点、HTTP/3优点（细则就不琢磨了）
```

#### HTTPS优化总览

- 对于**硬件优化**的方向 

因为HTTPS是属于<u>计算密集型</u> 应该选择计算力更强的CPU 而且最好选择 ==支持 AES-NI 特性的CPU== 这个特性可以**在硬件级别优化AES对称加密算法** 加快应用数据的加解密

- 对于**软件优化**的方向

如果可以的话 把软件升级成较新的版本 比如将Linux内核 2.X 升级成 4.X

将`openssl 1.0.1`升级到`1.1.1` 因为新版本的软件不仅会提供新的特性 而且还会修复老版本的问题~

- 对于**协议优化**的方向 
  - 密钥交换算法应该选择 ==ECDHE算法== 而不用RSA算法 因为ECDHA算法具备前向安全性 而且**客户端可以在第三次握手之后就发送加密应用数据** 节省了1RTT
  - 将 TSL1.2 升级 TSL1.3，因为 TSL1.3 的握⼿过程只需要 1 RTT，⽽且安全性更强。

- 关于**证书优化**的方法
  - 服务器应该选⽤ ECDSA 证书，⽽⾮ RSA 证书，因为在相同安全级别下，ECC 的密钥⻓度⽐ RSA 短很多， 这样可以提⾼证书传输的效率；
  - 服务器应该开启 OCSP Stapling 功能，由服务器预先获得 OCSP 的响应，并把响应结果缓存起来，这样
    TLS 握⼿的时候就不⽤再访问 CA 服务器，减少了⽹络通信的开销，提⾼了证书验证的效率；

- 关于**会话复用**

对于重连 HTTPS 时，我们可以使⽤⼀些技术让客户端和服务端使⽤上⼀次 HTTPS 连接使⽤的会话密钥，直接恢 复会话，⽽不⽤再重新⾛完整的 TLS 握⼿过程。

常⻅的**会话重⽤技术**有 Session ID 和 Session Ticket，⽤了会话重⽤技术，当再次重连 HTTPS 时，只需要 1 RTT 就可以恢复会话。对于 TLS1.3 使⽤ Pre-shared Key 会话重⽤技术，只需要 0 RTT 就可以恢复会话。

这些会话重⽤技术虽然好⽤，**但是存在⼀定的安全⻛险**，它们不仅不具备前向安全，⽽且有重放攻击的⻛险，所以应当对会话密钥设定⼀个合理的过期时间。

#### HTTP/2优点

关于HTTP/2是**如何提示性能**的几个方向 它相比HTTP/1大大提高了==传输效率、吞吐能力==

【1】**头部压缩**

- 对于常见的 HTTP 头部通过**静态表和 Huffman 编码**的方式，将体积压缩了近一半

- 而且针对后续的请求头部，还可以建立**动态表**，将体积压缩近 90%，大大提高了编码效率，同时节约了带宽资源。
  - 不过，动态表并非可以无限增大， 因为动态表是会占用内存的，动态表越大，内存也越大，容易影响服务器总体的并发能力，因此服务器**需要限制 HTTP/2 连接时长或者请求次数**。



【2】**并发传输**

- **HTTP/2 实现了 Stream 并发**，多个 Stream 只需复用 1 个 TCP 连接
  - 节约了TCP和TLS握手时间
  - 以及减少了 TCP 慢启动阶段对流量的影响
- 不同的 Stream ID 才可以并发，即时乱序发送帧也没问题，但是同一个 Stream 里的帧必须严格有序。

- 另外，可以根据资源的渲染顺序来设置 Stream 的**优先级**，从而提高用户体验。



【3】服务器**支持主动推送资源**

- 大大提升了消息的传输性能

- 服务器推送资源时，会先发送 PUSH_PROMISE 帧，告诉客户端接下来在哪个 Stream 发送资源，然后用偶数号 Stream 发送资源给客户端。

- HTTP/2 通过 Stream 的并发能力，解决了 HTTP/1 队头阻塞的问题，看似很完美了，但是 HTTP/2 还是存在“队头阻塞”的问题，只不过问题不是在 HTTP 这一层面，而是在 TCP 这一层。

  - **HTTP/2 是基于 TCP 协议来传输数据的，TCP 是字节流协议，TCP 层必须保证收到的字节数据是完整且连续的，这样内核才会将缓冲区里的数据返回给 HTTP 应用，那么当「前 1 个字节数据」没有到达时，后收到的字节数据只能存放在内核缓冲区里，只有等到这 1 个字节数据到达时，HTTP/2 应用层才能从内核中拿到数据，这就是 HTTP/2 队头阻塞问题。**

  - 有没有什么解决方案呢？既然是 TCP 协议自身的问题，那干脆放弃 TCP 协议，转而使用 UDP 协议作为传输层协议，这个大胆的决定， HTTP/3 协议做了！

    ![图片](https://mmbiz.qpic.cn/mmbiz_jpg/J0g14CUwaZfUsx6kLW0BIhb41MgDMjGSVpOic2RofI9f4jRvhWRU70bUvkJzbl8gANjGbDlkvHokSibLtLg63H4w/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)



#### HTTP/3优点

##### HTTP/2的缺陷

HTTP/2 虽然具有多个流并发传输的能力 但是**传输层是TCP协议** 于是存在以下缺陷：

- **队头阻塞**

HTTP/2 多个请求跑在一个 TCP 连接中，如果序列号较低的 TCP 段在网络传输中丢失了，即使序列号较高的 TCP 段已经被接收了，应用层也无法从内核中读取到这部分数据，从 HTTP 视角看，就是**多个请求被阻塞了**；

- **TCP 和 TLS 握手时延**

TCL 三次握手和 TLS 四次握手，共有 **3-RTT（RTT:往返时延 = 发送方的数据完全发送完（最后一个bit推送到数据链路上）到收到确认信号的时间） 的时延**

![img](https://pic1.zhimg.com/80/v2-3c7376e036be5f531505ecfa8daf9cff_720w.jpg?source=1940ef5c)

- **连接迁移需要重新连接**（4G切换成WIFI后的那一下卡顿~）

移动设备从 4G 网络环境切换到 WIFI 时，由于 TCP 是基于四元组来确认一条 TCP 连接的，那么网络环境变化后，就会导致 IP 地址或端口变化，于是 **TCP 只能断开连接，然后再重新建立连接**，<u>切换网络环境的成本高</u>；



##### 在UDP协议上开发的QUIC协议保证了数据的可靠传输

HTTP/3 就将传输层从 TCP 替换成了 UDP，并在 UDP 协议上开发了 QUIC 协议，来保证数据的可靠传输。

QUIC 协议的特点：

>  上面HTTP/2的缺点在这里都有所改进！

- 无队头阻塞

HTTP/3 就将传输层从 TCP 替换成了 UDP，并在 UDP 协议上开发了 QUIC 协议，来保证数据的可靠传输。

![图片](https://mmbiz.qpic.cn/mmbiz_png/J0g14CUwaZeyKxnpjy8lBsnDoLG0H9KjfwOOuQ5yPvE5KibWzHcOqg9cbQDoXX95t4pUEqqm5f8jhbOI1NNWjTQ/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

- 建立连接速度快

因为 QUIC 内部包含 ==TLS1.3==，因此仅需 1 个 RTT 就可以「同时」完成建立连接与 TLS 密钥协商。

![在这里插入图片描述](https://img-blog.csdnimg.cn/b285a42233b848e0b2ba491d8294cbe5.png)



甚至在第二次连接的时候，应用数据包可以和 QUIC 握手信息（连接信息 + TLS 信息）一起发送，达到 0-RTT 的效果。

![图片](https://mmbiz.qpic.cn/mmbiz_gif/J0g14CUwaZeyKxnpjy8lBsnDoLG0H9Kj4THuEibxoaQ80CibfmxNfnLjVQewKNzr5GSWLaEgV2m6z2V7picIyEicOg/640?wx_fmt=gif&tp=webp&wxfrom=5&wx_lazy=1)

- 连接迁移

QUIC 协议没有用四元组的方式来“绑定”连接，而是**通过连接 ID 来标记通信的两个端点**，客户端和服务器可以各自选择一组 ID 来标记自己，因此即使移动设备的网络变化后，导致 IP 地址变化了，**只要仍保有上下文信息（比如连接 ID、TLS 密钥等），就可以“无缝”地复用原连接**，<u>消除重连的成本；</u>



- 另外 HTTP/3 的 QPACK 通过两个特殊的单向流来同步双方的动态表，解决了 HTTP/2 的 HPACK 队头阻塞问题。

> 不过，由于 QUIC 使用的是 UDP 传输协议，UDP 属于“二等公民”，**大部分路由器在网络繁忙的时候，会丢掉 UDP包**，把“空间”让给 TCP 包，所以 QUIC 的推广之路应该没那么简单。



###  操作系统



## 3.面试题

### 面试题、面经总结



#### 抛硬币问题

> 假设你是小A，和小B玩一个抛硬币的游戏，硬币为正面时获胜，如果一方失败了则交由另一方，现在由你先开始，求获胜的概率？

1. 假设小A第一次就抛到了正面，那小A获胜而游戏结束，概率为 1/2
2. 假设小A第一次抛到的是反面，想要小A获胜只能小B抛反面，小A再抛回正面，至此概率为 1/2(A) * 1/2(B) * 1/2(A) = 1/8
3. 后续同理，依次乘以四分之一，所有的概率进行相加，求**极限可得结果为三分之二**



#### CSS实现宽度和高度为父元素一半的正方形

```html
<style>
    .father{
        background-color:pink;
        height: 200px;
        width: 200px;
    }
.son{
    background-color: aqua;
    width: 50%;
    /* height: 50%; */
    padding-bottom: 50%;          
}
.inner{
    background-color: red;
}
</style>
<div class="father">
    <div class="son">
        <div class="inner">inner box</div>
</div>
</div>
```

开始给子元素设置padding属性，发现存在局限性：如果子元素中还是有子元素，位置将会被占据——

![在这里插入图片描述](https://img-blog.csdnimg.cn/f7b63dc6f1794ef680658a399f922536.png)

直接设置height就可以勒

```js
.son{
    background-color: aqua;
    width: 50%;
    /* height: 50%; */
    padding-bottom: 50%;          
}
```

![在这里插入图片描述](https://img-blog.csdnimg.cn/8ff5f547697244a4a3d3d705383cfea0.png)



#### CSS实现垂直居中

之前[青训营活动时写的文章](https://juejin.cn/post/7009662518406676488/)~

以下属性没有特别说明都是对子元素进行设置哈

- flex布局

  - 【1】`justify-content: center;  align-items: center;`
  - 【2】`margin: auto;`

- 绝对定位

  - 【3】很常见的一个方法

  ```css
  position: absolute;
  /* left变大的话盒子会往右移动（距离左边远） right大 向左
  top变大盒子会向下移动 bottom大 向上*/
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  ```

  - 【4】子绝父相+子元素通过transform向左上偏移（很重要的一个实现方法，涉及多方面知识点）

  ```css 
  position: absolute;
  top: 50%;
  left: 50%;
  /* 上述代码会将盒子的左上角置于页面的中心点（xy轴的交点，也就是零点）上 */
  transform: translate(-50%,-50%);// 向左上偏移50%
  ```

- grid布局与table-cell布局

  - 【5】父元素使用grid布局 同【2】一样，子元素设为`margin: atuo;`即可
  - 【6】父元素使用table-cell布局 子元素设置成行内块元素(这个方法比较新颖)

  ```css
  .father{
      display: table-cell;
      text-align: center;/* 水平居中 */
      vertical-align: middle;/* 垂直居中 */
  }
  .son{
      display: inline-block;
  }
  作者：敲代码的小提琴手
  链接：https://juejin.cn/post/7009662518406676488/
  来源：稀土掘金
  ```

  





发现昨天讨论的面试题就是剑指Offer上的内容~

### 算法题

```js
1.三数之和 双指针
// 昨天纠结勒半天的面试题 都是剑指上的鸭！
2.剑指 Offer 56 - I. 数组中数字出现的次数 - 成对出现的数
3.剑指 Offer II 070. 排序数组中只出现一次的数字 - 
4.剑指 Offer 56 - II. 数组中数字出现的次数 II
```

#### [15. 三数之和](https://leetcode-cn.com/problems/3sum/)



#### [剑指 Offer II 070. 排序数组中只出现一次的数字](https://leetcode-cn.com/problems/skFtm2/)



#### [剑指 Offer 56 - I. 数组中数字出现的次数](https://leetcode-cn.com/problems/shu-zu-zhong-shu-zi-chu-xian-de-ci-shu-lcof/)



#### [剑指 Offer II 070. 排序数组中只出现一次的数字](https://leetcode-cn.com/problems/skFtm2/)



## 4.前端开发框架

### react学习



# 10.18 

连着好几天没学react

今天要动起来了！

今日感想，**二分查找**的思想很重要！在代码上的实践也很重要！非常考验我们对一个问题的考虑全面程度！！

```js
// DDL
	写出第一版简历  10.24
		1.重点掌握HTTP协议
        2.JS基础良好 
        3.ES6过完 
    	4.JS30项目完结
        5.框架相关内容完结并尽量完成记事本项目！
```



```js
// 今日主要收获 & 学习时间
Totally 480min
1.前端基础知识 
// 从早上-中午 拿出一整块时间学习JS 晚上跑完步回来继续看JS
    1.1 前端基础学习 40min 
		/* 早上看了会儿红宝书 困得要命！ */
    1.2 freecodecamp JS + 响应式网页设计 80min
    	/* JS基础数据结构完结 数组 对象的结构与一些API更加清晰了！ */
    1.3 JS 30demos 30min
    	/* 调用了浏览器的API */

2.核心基础知识 下午开始学计网 + 刷题
	2.1 计网 30min
		/* 复习了一下TCP协议 */
	2.2 操作系统 min
		/*  */

3.面试刷题
	3.1 刷算法 刷力扣 190min	
    	/* 掘金小册 9/28 代码随想录
        	三数之和 剑指Offer的一些内容
        	经典面试题 有序数组的单一元素 全部方法
        	*/   
    	// 每个阶段结束后 简单总结下应对某种数据结构/对应类型的题目 应该怎么去想
        链表 + 二叉树
        字符串 + 二叉树 + 栈/队列
        双指针 + 遍历专题DFS BFS
        回溯算法 + 贪心算法
        动态规划
    3.2 面试题 min
		/*  */  
    
4.前端开发框架 
	4.1 react学习 30min
		/* 看了一集 明天要加快步伐了！ */
    
5.前端进阶知识学习
    Node.js
	webpack
6.其他 
	搞图床 80min 成功了！！！！
7.每日总结 
```



> 学习顺序预告
>
> 这里说的实操 都是在 `freecodecamp` 中进行练习

- [x] 周总结
- [x] 总结今日要写的文/刷的题
- [x] JS红宝书 函数 
- [x] JS实操 数据结构基础那块
- [x] 刷题 三数之和 剑指Offer经典面试题一道
- [x] 计网 复习传输层内容 + 继续读图解HTTP
- [x] react 重启！
- [x] JS30demos
- [x] 搞图床

## 1.前端基础

### 前端基础知识

```js
1.隐式转换的问题
	由一道面试题引入
2.找URI中的某个字符
// 上面两篇文明日总结 今天时间紧张了XD（其实是被自己浪没得 orz）
3.红宝书 函数
4.数组遍历	
5.巧用every 与 hasOwnProperty搜索数组/对象中是否有某几个元素
6.Object.keys(obj);// 生成obj所有属性组成的数组
```

#### 1.从URL字符串中获取“查询字符串参数”

可参考下这篇 https://www.cnblogs.com/chun6/p/6366125.html

- 简单遍历🥺

```js
console.log(getUrlArr());
function getUrlArr() {
    let arr = [];
    let url = "https://github.com/FangzhouSu/Constant-Front-End-Study/?a=1&b=2&c=3"
    let str = url.split("?")[1];
    let arr1 = str.split("&");
    for(let i = 0; i < arr1.length; i++) {
        let value = arr1[i].split("=")[1];
        arr.push(value);
    }
    return arr;
}
```

- 用`Array.prototype.map()`优化一下查询方法🤔

```js
let url = "https://github.com/FangzhouSu/Constant-Front-End-Study/?a=1&b=2&c=3"
let obj = {};
let result = url.split('?')[1].split('&').map((item) =>
    obj[item.split('=')[0]] = item.split('=')[1];
)
console.log(obj);// 
```



- 利用`Array.prototype.reduce()`一行完成查询（骄傲脸😎）

```js
let url = "https://github.com/FangzhouSu/Constant-Front-End-Study/?a=1&b=2&c=3"
url.split('?')[1].split('&').reduce((obj, item) => (
    obj[item.split('=')[0]]=item.split('=')[1], obj), {}
)
```



#### 2.一道面试题引入的隐式转换的学习

[看](https://blog.csdn.net/weixin_33711647/article/details/88723157?utm_medium=distribute.pc_relevant.none-task-blog-2~default~baidujs_title~default-1.no_search_link&spm=1001.2101.3001.4242)

```js
if ([] == false) {
    console.log(1);// 1
}
if ([]) {
    console.log(3);// 3
}
if ({} == false ) {
    console.log(2);// undefined 
}
if ({}) {
    console.log(2);// 2
}
if ([1] == [1]) {
    console.log(4);// undefined 
}
```



```js
{} == false;// Unexpected token '=='
```



#### 3.数组遍历

用一个 `for` 循环来做筛选，使函数返回一个由 `arr` 中不包含 `elem` 的数组所组成的新数组

```js
let arr = [4,5,[6,6,6],8];// 去掉4
arr = arr.flat(Infinity);
let newArr = [];
// map
var wnewArr = arr.map(item => item !== 4);// [false, true, true, true, true] 新数组中每个元素为函数item!=4的返回值 所以用map不太行 删不掉这个4~
// filter
newArr = arr.filter(item => item != 4);// [5, 6, 6, 8] 新数组中的值不满足函数中条件的会被筛掉

// 要求返回的数组格式不能变动 且只用一层for循环
let ans = [ [3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9] ]
// for
for(let i = 0; i < arr.length; i++){
	if(arr[i].indexOf(item) === -1){
        newArr.push(arr[i]);
    }
}
```



#### 4.巧用every

```js
let users = {
  Alan: {
    age: 27,
    online: true
  },
  Jeff: {
    age: 32,
    online: true
  },
};
function isEveryoneHere(userObj){
    return ['Alan', 'Jeff'].every(name => userObj.hasOwnProperty(name))
}
```



## 2.核心基础知识

### 计网

```js
1.TCP的基本认识
```

#### TCP的基本认识

![图片](https://mmbiz.qpic.cn/mmbiz_png/J0g14CUwaZeo9xBVAyPJ8iaWCC6sYS843PvjUjeM1AEqsdRCeZCODPM3k8fNbTe2BHlme1VmNNKlz3L0wyWcQxw/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

> （聊到某个细节的时候得能说出来点儿东西~）

##### 1.TCP的头格式以及重要字段

看看TCP头部格式中的重点字段

- 序列号 - 解决**网络包乱序**的问题

建立连接时由计算机生成的随机数作为其初始值

通过 SYN 包传给接收端主机，每发送一次数据，就「累加」一次该「数据字节数」的大小。**用来解决网络包乱序问题。**

- 确认应答号 - 解决**不丢包**的问题

指下一次「期望」收到的数据的序列号

**发送端收到**这个确认应答（第三次握手）以后可以认为在这个序号以前的数据都已经被正常接收。**用来解决不丢包的问题。**

- ACK

该位为 `1` 时，「确认应答」的字段变为有效，

> TCP 规定除了最初建立连接时的 `SYN` 包之外该位必须设置为 `1` 。

- RST

该位为 `1` 时，表示 TCP 连接中出现异常必须强制断开连接。

- SYN

该位为 `1` 时，表示希望建立连接，并在其「序列号」的字段进行序列号初始值的设定。

- FIN

该位为 `1` 时，表示今后不会再有数据发送，希望断开连接

> 当通信结束希望断开连接时，通信双方的主机之间就可以相互交换 `FIN` 位置为 1 的 TCP 段。

![图片](https://mmbiz.qpic.cn/mmbiz_png/J0g14CUwaZeo9xBVAyPJ8iaWCC6sYS843ZPb6tFLvCVuXEn98khfs7y2KRvOV0ia5icVByzIK3aAKRURuVZKagsKw/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

#####  2.为什么需要TCP协议？TCP工作在哪一层？

`IP` 层（网络层）是「不可靠」的，它不保证网络包的交付、不保证网络包的按序交付、也不保证网络包中的数据的完整性。

如果需要**保障网络数据包的可靠性**，那么就——

- 需要由上层（<u>传输层</u>）的 `TCP` 协议来负责。



![图片](https://mmbiz.qpic.cn/mmbiz_png/J0g14CUwaZeo9xBVAyPJ8iaWCC6sYS843tzTAWL4l6rZB0pulNqkLno7buMqnh5Hlphn7aibB798ga1t3a0Dqmzg/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

是的 TCP协议工作在传输层——

- 是一个**可靠数据传输**的服务
- 能确保接收端接收的网络包是**无损坏、无间隔、非冗余、按序**的

##### 3.什么是TCP？

==答==：

TCP是 面向连接的、可靠的、基于字节流 的传输层通信协议

> 记住这三个特性~
>
> ![图片](https://mmbiz.qpic.cn/mmbiz_png/J0g14CUwaZeo9xBVAyPJ8iaWCC6sYS8438HibyWCtJ5Tn9VN7YuzgAibg46Ocdf7swUxgeKMQ9ge8Nic3WOibTSxPXA/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

- 面向连接 - 一定是「一对一」才能连接

不能像 UDP 协议 可以<u>一个主机同时向多个主机发送消息</u>，也就是一对多是无法做到的；

- 可靠的 - 无论**网络链路中出现了怎样的链路变化**，TCP都可以保证一个报文一定能到达接收端
- 字节流 - 消息是「没有边界」的，所以无论我们消息有多大都可以进行传输。
  - 并且消息是「有序的」，当「前一个」消息没有收到的时候，即使它先收到了后面的字节（这个特性的缺点：可能导致队头堵塞~HTTP/3中提到使用QUIC协议+UDP协议优化它！<u>（回头可以再去看看HTTP/3的优化）</u>），那么也不能扔给应用层去处理
  - 同时对「重复」的报文会自动丢弃。

##### 4.什么是TCP连接？

==答==：

> 为了保证 客户端&服务端达成 **套接字Socket、序列号Sequence Numbers、窗口大小Window Sizes** 这三个信息的共识
>
> 根据RFC793对Connections的形容，连接是 套接字、序列号（用于保证可靠性）、窗口大小（用于进行流量控制） 的“combination”（组合）



不能死背八股文，来具体了解下

> 我们来看看 RFC 793 是如何定义「连接」的：
>
> > *Connections:* 
> >
> > *The reliability and flow control mechanisms described above require that TCPs initialize and maintain certain status information for each data stream.*  
> >
> > *The combination of this information, including sockets, sequence numbers, and window sizes, is called a connection.*
>
> 简单来说（主要看最后一句）就是，**用于保证【1】<u>可靠性</u>和【2】<u>流量控制维护的某些状态信息</u>**，这些信息**的组合**（<u>包括Socket、序列号和窗口大小</u>） **称为连接**。
>
> ![图片](https://mmbiz.qpic.cn/mmbiz_png/J0g14CUwaZeo9xBVAyPJ8iaWCC6sYS843wVoVXxKKTibcN9sLAuSgibkDfV2X8LH8eicpV1yAJ1uffibGqAuWShXibYg/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

所以我们可以知道 **建立一个TCP连接**是需要 客户端&服务端 **达成上述三个信息的共识**

- sockets套接字 **由 IP 地址和端口号组成**
- sequence numbers序列号 **用来解决乱序问题等**
- window sizes窗口大小 **用来做流量控制**

> 后面我们还会详细了解这里的细则 啥滑动窗口啥的 

##### 5.如何唯一确定一个TCP连接呢？

==答：==

> TCP四元组可以唯一地确定一个连接，四元组包括：
>
> - TCP头部中的 源**端口**号、目的端口号 
>   - <u>告诉TCP协议应该把报文发给哪个进程</u>
> - IP头部中的 源**地址**、目的地址 
>   - 通过IP协议<u>进行寻址，把报文发给对应进程</u>（IP协议有远程定位功能）
>
> 简单来说，根据起点、终点的端口号、地址，可以确定一个TCP连接



###  操作系统



## 3.面试题

### 面试题、面经总结

### 算法题

```js
1.三数之和 双指针
2.剑指 Offer 56 - I. 数组中数字出现的次数 - 成对出现的数
3.剑指 Offer II 070. 排序数组中只出现一次的数字 - 
4.剑指 Offer 56 - II. 数组中数字出现的次数 II
```

#### [15. 三数之和](https://leetcode-cn.com/problems/3sum/)

简单写了个题解[【JavaScript】对撞双指针 + 定指针 注释齐全](https://leetcode-cn.com/problems/3sum/solution/javascript-dui-zhuang-shuang-zhi-zhen-di-xbfk/)



#### [剑指 Offer II 070. 排序数组中只出现一次的数字](https://leetcode-cn.com/problems/skFtm2/)

同主站[540 有序数组的单一元素](https://leetcode-cn.com/problems/single-element-in-a-sorted-array/)

我的题解——[[JavaScript]异或、二分搜索（全体二分查找乱序数组&偶数二分查找有序数组）注释齐全](https://leetcode-cn.com/problems/single-element-in-a-sorted-array/solution/javascriptyi-huo-er-fen-sou-suo-quan-ti-f6rzu/)

##### 异或快捷解决

```js
var singleNonDuplicate = function(nums) {
    let res;
    for(let i = 0; i < nums.length; i++){
        res ^= nums[i];
    }
    return res;
};
```

##### 再优化，二分法（面试重点）

> 这里的第一个关键点是先把四种情况列出来！
>
> 参考官方题解
>
> 例子 1：中间元素的同一元素在右边，且被 mid 分成两半的数组为偶数。
>
> 我们将右子数组的第一个元素移除后，则右子数组元素个数变成奇数，我们应将 lo 设置为 mid + 2。
>
> ![在这里插入图片描述](https://pic.leetcode-cn.com/08f1ff0fa20c9963ae4f5aafb7c6317df713b5eb562064ba8b7644c1d773c626-file_1576478245275)
>
> 例子 2：中间元素的同一元素在右边，且被 mid 分成两半的数组为奇数。
>
> 我们将右子数组的第一个元素移除后，则右子数组的元素个数变为偶数，我们应将 hi 设置为 mid - 1。
>
> ![在这里插入图片描述](https://pic.leetcode-cn.com/8481e9a41430c85977693dbad0d12de7df96a7064d13edd6eb359f7d8ccbcf99-file_1576478245283)
>
> 例子 3：中间元素的同一元素在左边，且被 mid 分成两半的数组为偶数。
>
> 我们将左子数组的最后一个元素移除后，则左子数组的元素个数变为奇数，我们应将 hi 设置为 mid - 2。
>
> ![在这里插入图片描述](https://pic.leetcode-cn.com/186af681e3fced71c9588d9422accc7832062b24d33c343edecd9aef2e0c6ba1-file_1576478245286)
>
> 例子 4：中间元素的同一元素在左边，且被 mid 分成两半的数组为奇数。
>
> 我们将左子数组的最后一个元素移除后，则左子数组的元素个数变为偶数，我们应将 lo 设置为 mid + 1。
>
> ![在这里插入图片描述](https://pic.leetcode-cn.com/067fab9a30b1b278da9e633de7b627931cdab5444d0f99e7142eb2907bff4431-file_1576478245290)



然后就常规二分法做就行了~注意分情况讨论的细则即可！

```js
var singleNonDuplicate = function(nums) {
    // 定义双指针
    let i = 0, j = nums.length - 1;
    while(i < j){
        // let mid = (i + j) >> 1;
        // 为了防止大数溢出 建议这么写
        let mid = i + (j - i >> 1)
        // 此方法的关键——判断哪边为奇数的变量 要设置好
        let isEven = (j - mid) % 2 == 0;
        // 如果j-mid为偶数 则去除中间两个值相同的元素并跳过它们之后，两指针（包括两指针）之间有奇数个元素，
        // 也就是单个的元素一定在这之间
        if(nums[mid] === nums[mid - 1]){
            if(isEven){
                // 在左边
                j = mid - 2;
            }
            else{
                i = mid + 1;
            }
        }
        else if(nums[mid] === nums[mid + 1]){
            if(isEven){
                // 在右边
                i = mid + 2;
            }
            else{
                console.log("last j",j)
                j = mid - 1;
            }
        }
        else{
            return nums[mid];
        }
    }
    return nums[i];
};
```

怎么说呢，双指针的题，多画图就完事了！

时间复杂度 O(logn)，相比于暴力循环（包括异或），每次迭代将搜索空间缩减了一半！

##### 进一步优化，仅对偶数索引进行二分搜索

最佳实践

```js
var singleNonDuplicate = function(nums) {
    let i = 0, j = nums.length - 1;// 数组长度必为奇数，所以一前一后两个元素下标为偶数
    while(i < j){
        let mid = i + ((j - i) >> 1);
        if(mid % 2 === 1){
            // mid为奇数则-1变为偶数 则mid现在必为“边缘” 不必再分四种情况来讨论
            // 这就是仅对偶数索引进行二分搜索！
            mid--;
        }
        if(nums[mid + 1] === nums[mid]){
            // 去除mid那一对数之后，左侧数必为偶数，右侧数必为奇数，继续去紧挨着那对数的右边1个找
            i = mid + 2;
        }
        else{
            // 去除mid那一对数之后，左侧数为奇数，右侧数必为偶数，继续去紧挨着那对数的左边1个找
            j = mid;// 此时mid已经在原基础上左移一位了 所以j直接放在mid这个位置即可
        }
    }
    return nums[i];
};
```

- 时间复杂度：O(log n/2) = O(log*n*)。我们仅对元素的一半进行二分搜索。

#### [剑指 Offer 56 - I. 数组中数字出现的次数](https://leetcode-cn.com/problems/shu-zu-zhong-shu-zi-chu-xian-de-ci-shu-lcof/)



#### [剑指 Offer II 070. 排序数组中只出现一次的数字](https://leetcode-cn.com/problems/skFtm2/)



## 4.前端开发框架

### react学习

看了一集的~





#### 特别纪念 - 图床成功搭好！

一句话的经验教训：看日志找bug再去搜更好！

![image-20211019003938644](https://gitee.com/su-fangzhou/blog-image/raw/master/202110190039784.png)



# 10.19 *开始每日刷些面试高频题！

和浙大的一个同样步调的朋友聊过之后感觉自己该刷刷题了！

明天开始抓紧时间刷题！最好能有点规划~



```js
// DDL
	写出第一版简历  10.24
		1.重点掌握HTTP协议
        2.JS基础良好 
        3.ES6过完 
    	4.JS30项目完结
        5.框架相关内容完结并尽量完成记事本项目！
```



```js
// 今日主要收获 & 学习时间
Totally 450min
1.前端基础知识 
// 从早上-中午 拿出一整块时间学习前端基础 晚上跑完步回来继续看~
    1.1 前端基础学习 30min 
    // 红宝书、刷题
		/* 使用数组的API获取对应字符串~ 写文总结 */
    1.2 freecodecamp JS + 响应式网页设计 60min
    	/* ES6的一些内容 */
    1.3 JS 30demos 20min
    	/* demo20 效果做不出来呐！ */

2.核心基础知识 下午开始学计网 + 刷题
	2.1 计网 70min
		/* TCP协议基础知识&URI字符串遗留部分的学习 */
	2.2 操作系统 50min
		/* 操作系统作业 调度算法那块儿 */

3.面试刷题
	3.1 刷算法 刷力扣 90min	
    	/* 掘金小册 11/28
        	剑指两道题（再复习一下二分法）、二叉树基础完结
        	明天继续复习剑指这三道经典题 主要是位运算的内容 再复习下二分法
        	继续推进小册的内容 按顺序就可了
        	*/   
    	// 每个阶段结束后 简单总结下应对某种数据结构/对应类型的题目 应该怎么去想
        数组 + 字符串 + 链表 + 二叉树 + 栈/队列 熟练掌握这些数据结构
        双指针 + 遍历专题DFS BFS + 递归
        回溯算法 + 贪心算法 + 动态规划
        了解下前缀和方法 熟练使用哈希表（解决数组问题） 
    3.2 面试题 min
		/*  */  
    
4.前端开发框架 
	4.1 react学习 50min
		/* github搜索案例过了一遍，对网络请求有了新的认识，但是对react框架的使用记得不太清楚了 赶紧复习吧！ */
    
5.其他 
	和浙大的一个朋友聊了前端学习的一些细则，感到了自己项目上和基础上的不足，怎么说呢，起码要顾得上一边吧！60min
    	开始给项目更多的时间——让项目能力达到基本要求
6.每日总结 
	规划今日学习内容，读读前辈们的成长经历（感觉自己开始的不算晚XD）20min
```



> 学习顺序预告
>
> 这里说的实操 都是在 `freecodecamp` 中进行练习

- [x] JS实操 
- [x] 刷题 剑指Offer经典面试题2道 小册完成二叉树的两章
- [x] 计网 复习传输层内容 完结TCP基础 + 图解HTTP往下读
- [x] 总结1篇前端基础相关的文章！
- [x] react 完成github搜索案例
- [x] JS30demos

## 1.前端基础

### 前端基础知识

```js
1.隐式转换的问题
	由一道面试题引入// 这个明天写 今天时间不老够了！
2.找URI中的某个字符
// 总结文章！
3.使用 getter 和 setter 来控制对象的访问-华氏、摄氏温度转变
4.export重用代码块
```

#### 1.从URL字符串中获取“查询字符串参数”

[计网+JS小知识 从一个URI字符串中获取"查询字符串参数"](https://juejin.cn/post/7020688102758809636)

可参考下这篇 https://www.cnblogs.com/chun6/p/6366125.html

- 简单遍历🥺

```js
console.log(getUrlArr());
function getUrlArr() {
    let arr = [];
    let url = "https://github.com/FangzhouSu/Constant-Front-End-Study/?a=1&b=2&c=3"
    let str = url.split("?")[1];
    let arr1 = str.split("&");
    for(let i = 0; i < arr1.length; i++) {
        let value = arr1[i].split("=")[1];
        arr.push(value);
    }
    return arr;
}
```

- 用`Array.prototype.map()`优化一下查询方法🤔

```js
let url = "https://github.com/FangzhouSu/Constant-Front-End-Study/?a=1&b=2&c=3"
let obj = {};
let result = url.split('?')[1].split('&').map((item) =>
    obj[item.split('=')[0]] = item.split('=')[1];
)
console.log(obj);// 
```



- 利用`Array.prototype.reduce()`一行完成查询（骄傲脸😎）

每次迭代中 对obj对象进行 `obj[item.split('=')[0]]=item.split('=')[1]` 操作

obj初值为{}

```js
let url = "https://github.com/FangzhouSu/Constant-Front-End-Study/?a=1&b=2&c=3"
url.split('?')[1].split('&').reduce((obj, item) => (
    obj[item.split('=')[0]]=item.split('=')[1], obj), {}
)
```



#### 2.一道面试题引入的隐式转换的学习

[看](https://blog.csdn.net/weixin_33711647/article/details/88723157?utm_medium=distribute.pc_relevant.none-task-blog-2~default~baidujs_title~default-1.no_search_link&spm=1001.2101.3001.4242)

```js
if ([] == false) {
    console.log(1);// 1
}
if ([]) {
    console.log(3);// 3
}
if ({} == false ) {
    console.log(2);// undefined 
}
if ({}) {
    console.log(2);// 2
}
if ([1] == [1]) {
    console.log(4);// undefined 
}
```



```js
{} == false;// Unexpected token '=='
```



#### 3.**使用 getter 和 setter 来控制对象的访问**

在 class 中使用一个温度标准，要么是华氏温度，要么是摄氏温度。

这就是 getter 和 setter 的功能。 你正在**为别的用户创建一个 API**，不论你使用哪一个，用户都将获得正确的结果。

或者说，你从用户需求中抽象出了实现细节。

```js
class Thermostat{
  constructor(huashi){
    this._huashi = huashi;
  }
  get temperature(){
    return (this._huashi - 32)*5/9;
  }
  set temperature(sheshi){
    this._huashi = 9*sheshi/5 + 32;
  }

}

const thermos = new Thermostat(76); // 设置为华氏刻度
let temp = thermos.temperature; // 24.44 摄氏度(getter方法起作用)
thermos.temperature = 26;// 将摄氏度转化为类私有的华氏度(setter方法起作用)
temp = thermos.temperature; // 26 摄氏度(getter方法再次进行转换获得摄氏温度)
```



#### 4.export重用代码块

```js
// math_functions.js
// 想让其他JS文件也可以使用这个函数——
// 导出方法1
export const add = (x, y) => x + y;
// 导出方法2 可导出多个方法
const add = (x, y) => x + y;
{ add }
```



## 2.核心基础知识

### 计网

```js
1.继续学习TCP的基本认识
	头格式&基础字段
	为什么需要TCP协议？
    什么是TCP？什么是TCP连接？
    如何唯一确定一个TCP连接？
    一个IP服务器最大的TCP连接数是？
    UDP TCP协议
    	五个方位的区别
        应用场景的区别
    头部报文的内容上为何——
    	UDP报文头部无首部长度字段、有包长度字段
    	TCP报文头部有首部长度字段、无包长度字段 
```

#### TCP的基本认识

![图片](https://mmbiz.qpic.cn/mmbiz_png/J0g14CUwaZeo9xBVAyPJ8iaWCC6sYS843PvjUjeM1AEqsdRCeZCODPM3k8fNbTe2BHlme1VmNNKlz3L0wyWcQxw/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

> （聊到某个细节的时候得能说出来点儿东西~）

##### 1.TCP的头格式以及重要字段

看看TCP头部格式中的重点字段

- 序列号 - 解决**网络包乱序**的问题

建立连接时由计算机生成的随机数作为其初始值

通过 SYN 包传给接收端主机，每发送一次数据，就「累加」一次该「数据字节数」的大小。**用来解决网络包乱序问题。**

- 确认应答号 - 解决**不丢包**的问题

指下一次「期望」收到的数据的序列号

**发送端收到**这个确认应答（第三次握手）以后可以认为在这个序号以前的数据都已经被正常接收。**用来解决不丢包的问题。**

- ACK

该位为 `1` 时，「确认应答」的字段变为有效，

> TCP 规定除了最初建立连接时的 `SYN` 包之外该位必须设置为 `1` 。

- RST

该位为 `1` 时，表示 TCP 连接中出现异常必须强制断开连接。

- SYN

该位为 `1` 时，表示希望建立连接，并在其「序列号」的字段进行序列号初始值的设定。

- FIN

该位为 `1` 时，表示今后不会再有数据发送，希望断开连接

> 当通信结束希望断开连接时，通信双方的主机之间就可以相互交换 `FIN` 位置为 1 的 TCP 段。

![图片](https://mmbiz.qpic.cn/mmbiz_png/J0g14CUwaZeo9xBVAyPJ8iaWCC6sYS843ZPb6tFLvCVuXEn98khfs7y2KRvOV0ia5icVByzIK3aAKRURuVZKagsKw/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

#####  2.为什么需要TCP协议？TCP工作在哪一层？

`IP` 层（网络层）是「不可靠」的，它不保证网络包的交付、不保证网络包的按序交付、也不保证网络包中的数据的完整性。

如果需要**保障网络数据包的可靠性**，那么就——

- 需要由上层（<u>传输层</u>）的 `TCP` 协议来负责。



![图片](https://mmbiz.qpic.cn/mmbiz_png/J0g14CUwaZeo9xBVAyPJ8iaWCC6sYS843tzTAWL4l6rZB0pulNqkLno7buMqnh5Hlphn7aibB798ga1t3a0Dqmzg/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

是的 TCP协议工作在传输层——

- 是一个**可靠数据传输**的服务
- 能确保接收端接收的网络包是**无损坏、无间隔、非冗余、按序**的

##### 3.什么是TCP？

==答==：

TCP是 面向连接的、可靠的、基于字节流 的传输层通信协议

> 记住这三个特性~
>
> ![图片](https://mmbiz.qpic.cn/mmbiz_png/J0g14CUwaZeo9xBVAyPJ8iaWCC6sYS8438HibyWCtJ5Tn9VN7YuzgAibg46Ocdf7swUxgeKMQ9ge8Nic3WOibTSxPXA/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

- 面向连接 - 一定是「一对一」才能连接

不能像 UDP 协议 可以<u>一个主机同时向多个主机发送消息</u>，也就是一对多是无法做到的；

- 可靠的 - 无论**网络链路中出现了怎样的链路变化**，TCP都可以保证一个报文一定能到达接收端
- 字节流 - 消息是「没有边界」的，所以无论我们消息有多大都可以进行传输。
  - 并且消息是「有序的」，当「前一个」消息没有收到的时候，即使它先收到了后面的字节（这个特性的缺点：可能导致队头堵塞~HTTP/3中提到使用QUIC协议+UDP协议优化它！<u>（回头可以再去看看HTTP/3的优化）</u>），那么也不能扔给应用层去处理
  - 同时对「重复」的报文会自动丢弃。

##### 4.什么是TCP连接？

==答==：

> 为了保证 客户端&服务端达成 **套接字Socket、序列号Sequence Numbers、窗口大小Window Sizes** 这三个信息的共识
>
> 根据RFC793对Connections的形容，连接是 套接字、序列号（用于保证可靠性）、窗口大小（用于进行流量控制） 的“combination”（组合）



不能死背八股文，来具体了解下

> 我们来看看 RFC 793 是如何定义「连接」的：
>
> > *Connections:* 
> >
> > *The reliability and flow control mechanisms described above require that TCPs initialize and maintain certain status information for each data stream.*  
> >
> > *The combination of this information, including sockets, sequence numbers, and window sizes, is called a connection.*
>
> 简单来说（主要看最后一句）就是，**用于保证【1】<u>可靠性</u>和【2】<u>流量控制维护的某些状态信息</u>**，这些信息**的组合**（<u>包括Socket、序列号和窗口大小</u>） **称为连接**。
>
> ![图片](https://mmbiz.qpic.cn/mmbiz_png/J0g14CUwaZeo9xBVAyPJ8iaWCC6sYS843wVoVXxKKTibcN9sLAuSgibkDfV2X8LH8eicpV1yAJ1uffibGqAuWShXibYg/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

所以我们可以知道 **建立一个TCP连接**是需要 客户端&服务端 **达成上述三个信息的共识**

- sockets套接字 **由 IP 地址和端口号组成**
- sequence numbers序列号 **用来解决乱序问题等**
- window sizes窗口大小 **用来做流量控制**

> 后面我们还会详细了解这里的细则 啥滑动窗口啥的 

##### 5.如何唯一确定一个TCP连接呢？

==答：==

> TCP四元组可以唯一地确定一个连接，四元组包括：
>
> - TCP头部中的 源**端口**号、目的端口号 
>   - <u>告诉TCP协议应该把报文发给哪个进程</u>
> - IP头部中的 源**地址**、目的地址 
>   - 通过IP协议<u>进行寻址，把报文发给对应进程</u>（IP协议有远程定位功能）
>
> 简单来说，根据起点、终点的端口号、地址，可以确定一个TCP连接

##### 6.一个IP服务器监听了一个端口，它的TCP最大连接数是多少？

==答==：

> 服务器通常固定在某个本地端口上监听，等待客户端的连接请求。
>
> 因此，**客户端IP和端口是可变的**，**最大TCP连接数的理论值**计算公式如下：
>
> ![图片](https://mmbiz.qpic.cn/mmbiz_png/J0g14CUwaZeo9xBVAyPJ8iaWCC6sYS843wBh1Ca3jpEqO0Xia0YzlicCgFdhLw8N4f0TCfglTwtxzecpECvmhBtEQ/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)
>
> 对于<u>IPV4</u>来说：
>
> - 客户端的 **IP数 最多**为 `2` 的 `32` 次方
> - 客户端的**端口数最多**为 `2` 的 `16` 次方
>
> 也就是服务端**单机最大 TCP 连接数**，约为 `2` 的 `48` 次方。

当然，服务端**最大并发 TCP 连接数远<u>不能达到理论上限</u>。**

- 首先主要是**文件描述符限制**，Socket 都是文件，所以首先要通过 `ulimit` 配置文件描述符的数目；
- 另一个是**内存限制**，每个 TCP 连接都要占用一定内存，操作系统是有限的。

##### 7.UDP和TCP有什么区别呢？

==答==：

> 【1】连接
>
> - TCP - 面向连接 （具有可靠性、基于字节流）的传输层协议，传输数据之前要先建立连接
> - UDP - **不需要连接**，即刻传输数据（用在HTTP/3中，是优点！才不管你传没传过去呢哼唧😎）
>
> 【2】服务对象
>
> - TCP - 一对一的两点服务（一条连接只有两个端点哦~）
> - UDP - 支持一对一、**一对多、多对多**的交互通信
>
> 【3】可靠性
>
> - TCP是**可靠交付数据**的，数据可以无差错、不丢失、不重复，按需到达
> - UDP尽最大努力交付，不保证可靠交付数据
>
> 【4】拥塞控制、流量控制
>
> - TCP有**拥塞控制和流量控制**机制，保证数据传输的**安全**性
> - UDP则没有，即使网络非常拥堵了也不会影响UDP的发送速率~
>
> 【5】首部开销
>
> - TCP首部长度较长，会有一定的开销
>   - 在没有使用「选项」字段时是 `20` 个字节，如果使用了「选项」字段则会变长的。
> - UDP首部只有8个字节（64位），且是固定不变的，开销较小
>   - ![图片](https://mmbiz.qpic.cn/mmbiz_png/J0g14CUwaZeo9xBVAyPJ8iaWCC6sYS8431Mymq2yPGjMPGodSEg8b31eoyQbibzGjDEHiaQUUDlbvCEwcXN3aicOTw/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

###### UDP协议的一些特点

- 不提供复杂的控制机制，利用 IP 提供面向「无连接」的通信服务。
- 协议真的非常简单，头部就8个字节，如上👆
- 目标和源端口：主要是**告诉 UDP 协议应该把报文发给哪个进程**。
- 包长度：该字段**保存了 UDP 首部的长度跟数据的长度之和**。
- 校验和：校验和是为了**提供可靠的 UDP 首部和数据**而设计。

##### 8.UDP TCP分别的应用场景是什么？

==答==：

> TCP - 面向连接 可以保证数据的可靠性交付 经常用于：
>
> - FTP文件传输
> - HTTP / HTTPS协议
>
> UDP - 面向无连接 可以随时发送数据 UDP本身处理简单且高效 经常用于：
>
> - 包总量较少的通信：
>   - DNS
>   - SNMP
> - 视频、音频等多媒体通信
> - 广播通信

##### 9.为什么UDP头部没有「首部长度」字段，而 TCP 头部有「首部长度」字段呢？

![image-20210821191532870](https://gitee.com/su-fangzhou/blog-image/raw/master/202110191508650.png)

就是介个~首部长度字段

而UDP只有要给包长度的字段~

![image-20211019150948995](https://gitee.com/su-fangzhou/blog-image/raw/master/202110191509143.png)

==答：==

> - TCP 有 可以变长 的选项字段 所以需要 首部长度字段 来记录TCP的首部长度
> - UDP头部长度不会变化！所以不用多一个字段来记录UDP的首部长度了~
>
> 这里也可以看出来UDP是很简单滴一个通信协议~

##### 10.为什么 UDP 头部有「包长度」字段，而 TCP 头部则没有「包长度」字段呢？

==答==：

> TCP数据长度计算方法：
>
> ![图片](https://mmbiz.qpic.cn/mmbiz_png/J0g14CUwaZeo9xBVAyPJ8iaWCC6sYS843bzI6JAcXCXOvBbURJoFAsBWnFrSCc8xibRxNEWerFaY8dWFJDlbYibaA/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)
>
> - IP报文头部
>   - IP总长度
>   - IP首部长度
> - TCP报文头部
>   - TCP首部长度
>
> TCP数据长度（包长度）由此计算得来

这里有个令人疑惑的点：UDP也是基于IP层的呐~那UDP的数据长度不也可以通过这个公式算？

《图解网络》作者也觉得这个说法蛮有道理😂

但是再往深里挖掘以下，可以得知——

**为了网络设备的硬件设计和处理方便，首部长度需要是4字节的整数倍**

> 如果去掉 UDP 「包长度」字段，那 UDP 首部长度就不是 `4` 字节的整数倍了
>
> 为了补全 UDP 首部长度是 `4` 字节的整数倍，UDP头部报文才补充了「包长度」字段。

###  操作系统



## 3.面试题

### 面试题、面经总结

### 算法题

```js
剑指 Offer 56 - I. 数组中数字出现的次数 - 成对出现的数
剑指 Offer II 070. 排序数组中只出现一次的数字 -  复习~
剑指 Offer 56 - II. 数组中数字出现的次数 II
```

#### [540. 有序数组中的单一元素](https://leetcode-cn.com/problems/single-element-in-a-sorted-array/)

复习二分搜索

#### [剑指 Offer 56 - I. 数组中数字出现的次数](https://leetcode-cn.com/problems/shu-zu-zhong-shu-zi-chu-xian-de-ci-shu-lcof/)

哈希暴力解了 但是这样做不符合题意 应该使用位运算 明天来看



#### [剑指 Offer 56 - II. 数组中数字出现的次数 II](https://leetcode-cn.com/problems/shu-zu-zhong-shu-zi-chu-xian-de-ci-shu-ii-lcof/)

这题涉及的位运算就更烧脑了。

- 明天用哈希表刷一遍
- 看一遍位运算 争取看懂。。

#### 二叉树结点的构造函数

```js
function TreeNode(val){
    this.val = val;
    this.left = this.right = null;
}
// 再严谨一些（leetcode上给出的定义）
function TreeNode(val, left, right){
    this.val = (val === undefined ? 0 : val;)
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right)
}
```

值为 1 的二叉树结点，从结构上来说，它长这样：

![img](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/4/6/1714e6b26ae0d174~tplv-t2oaga2asx-watermark.awebp)

以这个结点为根结点，我们可以通过给 left/right 赋值拓展其子树信息，延展出一棵二叉树。因此从更加细化的角度来看，一棵二叉树的形态实际是这样的：
![img](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/4/6/1714e6b268b61522~tplv-t2oaga2asx-watermark.awebp)

二叉树也可以用一个嵌套对象来进行表示

举个例子

![img](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/4/6/1714ec42acc57e04~tplv-t2oaga2asx-watermark.awebp)



```js
const root = {
  val: "A",
  left: {
    val: "B",
    left: {
      val: "D"
    },
    right: {
      val: "E"
    }
  },
    
  right: {
    val: "C",
    right: {
      val: "F"
    }
  }
};
```

## 4.前端开发框架

### react学习



# 10.20 *刷题第一天，不用太刨根问题，有个认知即可~

坚持每日刷题的第一天哈！

但是下午得效率低的让我想打人！

```js
// DDL
	写出第一版简历  10.31
		1.重点掌握HTTP协议
        2.JS基础良好 
        3.ES6过完 
    	4.JS30项目完结
        5.框架相关内容完结并尽量完成记事本项目！
```



```js
// 今日主要收获 & 学习时间
Totally 450min
1.前端基础知识 
// 从早上-中午 拿出一整块时间学习前端基础 晚上跑完步回来继续看~
    1.1 前端基础学习 70+30min 
    // 红宝书、刷题
		/* 看了些面试题 规划一下学习路径
        	复习了下数组的API们，没事干的时候要多看看 熟练下！
        	经典面试题 两道 0.1+0.2 数据类型问题
        	*/
    1.2 freecodecamp JS + 响应式网页设计 60min
    	/* 复习勒Promise ES6 */
    1.3 JS 30demos 100min
    	/* demo22 另外复习了些其他的demo 比如计算总时长那个 */

2.核心基础知识 下午开始学计网 + 刷题
	2.1 计网 30min
		/* 预告下明天要学习的TCP连接细则
        	另外发现自己对HTTPS、IP的理解还是有问题啊！（跟同学聊了下他的项目，遇到一些网络上的问题，无法理解www）之后还要强化！ */
	2.2 操作系统 min
		/*  */

3.面试刷题
	3.1 刷算法 刷力扣 80min	
    	/* 掘金小册 11/28
        	继续复习剑指这三道经典题 主要是位运算的内容 
        	*/   
    	// 每个阶段结束后 简单总结下应对某种数据结构/对应类型的题目 应该怎么去想
        1.数组 + 字符串 + 链表 + 二叉树 + 栈/队列 熟练掌握这些数据结构
        2.双指针 + 遍历专题DFS BFS + 递归
        3.回溯算法 + 贪心算法 + 动态规划
        4.了解下前缀和方法 熟练使用哈希表（解决数组问题） 
    3.2 面试题 40min
		/* 看面经，看面试题 再次发现自己不足，感觉以后得打印几份面经贴墙上XD  */  
    
4.前端开发框架 
	4.1 react学习 min
		/*  */
    
5.其他 
    毛概作业 20min 观辛亥革命有感
    和同学讨论他做的一个登录校验功能 用到了内网穿透开启一个本地的服务器 20min
6.每日总结 
```



> 学习顺序预告
>
> 这里说的实操 都是在 `freecodecamp` 中进行练习

- [x] JS实操 
- [x] JS面试题1-2道
- [x] 刷题 剑指Offer经典面试题3道（位运算部分直接看答案） 
- [x] 计网 复习传输层内容  + 图解HTTP往下读
- [x] JS30demos

## 1.前端基础

### 前端基础知识

```js
1.隐式转换的问题
	由一道面试题引入
// 总结文章！
2.promise复习
3.for...in... 遍历对象的属性
```

#### 1.一道面试题引入的隐式转换的学习

[看](https://blog.csdn.net/weixin_33711647/article/details/88723157?utm_medium=distribute.pc_relevant.none-task-blog-2~default~baidujs_title~default-1.no_search_link&spm=1001.2101.3001.4242)

```js
if ([] == false) {
    console.log(1);// 1
}
if ([]) {
    console.log(3);// 3
}
if ({} == false ) {
    console.log(2);// undefined 
}
if ({}) {
    console.log(2);// 2
}
if ([1] == [1]) {
    console.log(4);// undefined 
}
```



```js
{} == false;// Unexpected token '=='
```



#### 2.用 then、catch 处理 Promise 完成的情况、捕获错误

```js
const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer 设置为 false，表示从服务器获得无效响应
  let responseFromServer = false;

  if(responseFromServer) {
    resolve("We got the data");
  } else {  
    reject("Data not received");
  }
});

makeServerRequest.then(result => {
  console.log(result);
}).catch(error => {
  console.log(error);
})
```

[JavaScript Promise对象 菜鸟教程](https://www.runoob.com/w3cnote/javascript-promise-object.html)

这里面讲述用Promise实现Ajax操作的内容还蛮不错的

```js
function ajax(URL) {
    return new Promise(function (resolve, reject) {
        var req = new XMLHttpRequest(); 
        req.open('GET', URL, true);
        req.onload = function () {
        if (req.status === 200) { 
                resolve(req.responseText);
            } else {
                reject(new Error(req.statusText));
            } 
        };
        req.onerror = function () {
            reject(new Error(req.statusText));
        };
        req.send(); 
    });
}
var URL = "/try/ajax/testpromise.php"; 
ajax(URL).then(function onFulfilled(value){
    document.write('内容是：' + value); //打印在页面上的内容如下：
    // 内容是：菜鸟教程 -- www.runoob.com
}).catch(function onRejected(error){
    document.write('错误：' + error); 
});
```

上面代码中，resolve 方法和 reject 方法调用时，都带有参数。它们的参数会被传递给回调函数。reject 方法的参数**通常是 Error 对象的实例**，而 resolve 方法的参数除了正常的值以外，还可能是另一个 Promise 实例，比如像下面这样。

```js
var p1 = new Promise(function(resolve, reject){  // ... some code });  
var p2 = new Promise(function(resolve, reject){  // ... some code  resolve(p1); })
```

上面代码中，p1 和 p2 都是 Promise 的实例，但是 p2 的 resolve 方法将 p1 作为参数，这时 **p1 的状态就会传递给 p2**。

- 如果调用的时候，p1 的状态是 pending，那么 p2 的回调函数就会等待 p1 的状态改变；
- 如果 p1 的状态已经是 fulfilled 或者 rejected，那么 p2 的回调函数将会立刻执行。

#### 3.for…in…遍历对象的属性

[MDN官方文档](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/for...in)

`for ... in`是为遍历对象属性而构建的，不建议与数组一起使用，数组可以用`Array.prototype.forEach()`和`for ... of`

```js
function countOnline(usersObj) {
  // 只修改这一行下面的代码
  let sum = 0;
  for(let user in usersObj){
    if(usersObj[user].online === true){
      sum++;
    }
  }
  return sum;
  // 只修改这一行上面的代码
}
```



```js
var bill = {
    name:"billSu",
    age:21,
    Male:true
}
for(let content in bill){
    console.log(bill[content])
}
```







## 2.核心基础知识

### 计网

```js
2.TCP连接的建立
```

#### TCP连接的建立

##### 1.TCP三次握手过程和状态变迁



##### 2.如何在Linux系统中查看TCP状态



##### 3.为啥TCP连接是三次握手？





##### 4.为啥TCP连接不能是两次握手呢？



##### 5.为啥TCP连接不能是四次握手呢？



##### 【之前做的总结】为啥TCP连接是三次握手？不是两次/四次握手呢？

图解网络3.1【1】 

写了一篇文章来总结下

[【经典面试题】为啥TCP是三次握手（three-way handshake） 而不是两次/四次呢？](https://blog.csdn.net/qq_45704942/article/details/120414548)





面试官问你 为啥TCP连接是三次握手 不是两次/四次呢？

> 这个经典问题吧~
>
> - 之前看过图解网络中的内容
>
> - 谢希仁的计算机网络 对应这部分的内容
>
> - 也搜过知乎 看过大佬解读的RFC中的内容
>
> 分两个点简单说下吧
>
> - 避免重复连接造成的**资源浪费**
>   - 防止**已经失效的连接请求报文段**一段时间后又传到了服务端
> - 避免历史连接造成的**网络混乱**
>
>   - 三次握手可以防止历史连接的发生（通过发送RST报文）
>   - TCP是可靠传输的 需要三次握手来约定、确定双方的初始序列号（seq——sequence numbers））
>
> 先说下三次握手建立起连接的过程吧 画个简图 
>
> ![请添加图片描述](https://img-blog.csdnimg.cn/84d8f71694c14e1189a1a61f4a3decb5.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5pWy5Luj56CB55qE5bCP5o-Q55C05omL,size_19,color_FFFFFF,t_70,g_se,x_16)
>
> 第一次握手的SYN报文
>
> ![图片](https://mmbiz.qpic.cn/mmbiz_png/J0g14CUwaZeo9xBVAyPJ8iaWCC6sYS843V0vbLBibXMvJbdiaqbfw4CictHX1Uc3OpOFWvZwxeI8B5Pv7y3beeAN9A/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)
>
> 第二次握手服务端发送的SYN+ACK报文
>
> ![图片](https://mmbiz.qpic.cn/mmbiz_png/J0g14CUwaZeo9xBVAyPJ8iaWCC6sYS84320oABn0E6jjsYHLicn6L5mlunbCDWGImCCHs41AWjZMnV8P1qdM99fQ/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)
>
> 第三次握手客户端发送的ACK报文
>
> ![图片](https://mmbiz.qpic.cn/mmbiz_png/J0g14CUwaZeo9xBVAyPJ8iaWCC6sYS843OM01fA1X8oZ3wpr2AV8ngpjSJcyhoTQEAFKo8UdYMr456Fb5dv0alQ/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

###### 【1】避免重复连接造成的==资源浪费==

> 然后说下三次握手相较于两次握手 的性能提升 以及一些关键作用！
>
> 第一点：（参考谢希仁的计算机网络-避免失效的连接造成影响 小林的图解网路-避免资源浪费）
>
> - 客户端发出的第一个连接请求报文段没有丢失 但是在某个网络结点被长时间阻塞了。
>
>   - 所以这个包就成为了一个不被需要的存在 然而 如果使用两次握手 服务端将不会知道这是一个重复的网络包！（两次握手）
>   - 在延误了一段时间后 这个旧的连接请求抵达服务端 服务端会误以为这是客户端发送的一个新的连接请求（两次握手）
>   - 然后服务端就会给客户端发出确认报文 之后建立新的连接（两次握手） 
>   - 所以使用两次握手会导致资源的大量浪费！
>
> - 同样遇到类似的这种情况 三次握手要机智得多！
>
>   - 其实看上图也可以清楚了 三次握手必须得在客户端向服务端发送那个最后的确认报文（ACK 确认应答号：server_sin + 1) 才能建立连接
>
>   ![图片](https://mmbiz.qpic.cn/mmbiz_png/J0g14CUwaZeo9xBVAyPJ8iaWCC6sYS843OM01fA1X8oZ3wpr2AV8ngpjSJcyhoTQEAFKo8UdYMr456Fb5dv0alQ/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

###### 【2】避免历史连接造成==网络混乱==

听起来雀氏是网络混乱更可怕啊哈哈

> 第二点：【首要原因】三次握手来确定双方的初始序列号 （知乎-依靠seq序列号来做可靠重传/接收 图解网路哦-三次握手同步客户端、服务端的初始序列号；避免历史连接）
>
> - 由于网络拥堵等乱七八糟的原因，会使得**旧的数据包**，先到达目标主机 
>
>   - 三次握手可以防止旧的重复连接初始化造成的混乱
>
>   > 参考**RFC 793**指出的 ==TCP连接使用三次握手的首要原因==
>   >
>   > The principle reason for the three-way handshake is to prevent old duplicate connections from causing confusion.
>
>   也就是防止旧的重复连接初始化 造成困难
>
>   用小林的图解网络中的一幅图来解释这个问题——
>
>   ![图片](https://mmbiz.qpic.cn/mmbiz_png/J0g14CUwaZeo9xBVAyPJ8iaWCC6sYS8436nKau10lAsztRqbyhjC1C1GRcsEz04icZmomMjwcxgeGn97BnKUoxibw/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)
>
>   - 当旧的数据包比新数据包先抵达服务端时 客户端会发送RST报文 告诉服务端“这个是我的历史连接 不用连接、分配资源了！”
>
> - 而知乎上的一位阿里的工程师持这样（与图解网路中还是不太一样的！）的观点——三次握手可以确定客户端、服务端的初始seq序列号（也就是ISN）所以可以防止历史连接造成的混乱
>
>   - TCP需要**通过seq序列号来做可靠重传或者接收** 而避免连接复用时无法分辨出seq是延迟/旧连接的seq
>   - 两次握手只能保证一方的初始序列号（也就是SQN报文中的序列号）被对方成功接收
>     - 注意！只有一来一回（一方发送SYN 一方发送ACK应答报文确定SYN报文已经被成功接收了！）才算是“成功”
>   - 而三次握手（其实是四次 中间的SYN+ACK 可以算作一步）可以保证双方的初始序列号都能被对方接收 这样就==不会出现历史连接捣乱的情况==！



来看看其他角度的答案

> 极客时间中的一个评论
>
> > 应用层的包 ->（通过socket编程实现包的传递->） 传输层 支付这种场景 往往使用传输层中的TCP协议 TCP会保证这个包能够到达目的地 如果不能到达就会重新发送 直至到达
> >
> > 这个过程就像是一份信你写好了，装进信封，根据收信人的名字（网址）从地址簿（DNS）里面查到了目的地的地址邮编（IP），然后交给邮局（传输层）传输，当然这个过程可能还有些波折。 
> >
> > 1.你在信里面说： 亲爱的某某，我们以后写信联系吧（SYN=1发起一个新的连接），我有不能说的秘密跟你讲，但是我不确定收到信的是不是你，如果是你自己就请给我回信，我就跟你分享我的秘密（seq=x）。 
> >
> > 2.收信人收到你的信后给你回信： 亲爱的某某某我也想跟你写信（SYN=1发起一个新的连接），我是我自己你可以接着给我写信了（ACK=1确认序列号有效）你可以从不能说的秘密开始接着往下讲（ack=x+1），另外我也有话对你讲（seq=y） 
> >
> > 3.你收到信后很高兴，立刻回信： 我们终于联系上了（ACK=1确认序列号有效），我们接着说我的秘密......（seq=x+1），你有什么话跟我说下次写信告诉我（seq=y+1） 这就是TCP三次握手的过程
>
> 知乎中的解答
>
> > 要注意 TCP的可靠连接是靠**seq（sequence numbers 序列号）**来达成的！——来自知乎
> >
> > - 因为没有网络全局时钟，两台机器分别为了确认序列号，证明这个包是新的，而**不是在链路中delay的**（也是小林中内容的第二天点）——来自知乎
>
> 谢希仁 版 计算机网络——
>
> > “已失效的连接请求报文段” 的产生在这样一种情况下：client 发出的第一个连接请求报文段并没有丢失，而是在某个网络结点长时间的滞留了，以致延误到连接释放以后的某个时间才到达 server。本来这是一个早已失效的报文段。但 server 收到此失效的连接请求报文段后，就误认为是 client 再次发出的一个新的连接请求。于是就向 client 发出确认报文段，同意建立连接。假设不采用 “三次握手”，那么只要 server 发出确认，新的连接就建立了。由于现在 client 并没有发出建立连接的请求，因此不会理睬 server 的确认，也不会向 server 发送数据。但 server 却以为新的运输连接已经建立，并一直等待 client 发来数据。这样，server 的很多资源就白白浪费掉了。采用 “三次握手” 的办法可以防止上述现象发生。例如刚才那种情况，client 不会向 server 的确认发出确认。server 由于收不到确认，就知道 client 并没有要求建立连接。”
>
> 具体意思就是——为了防止**已经失效的连接请求报文**段突然又传到了服务端 因而产生错误
>
> 而知乎博主 一名阿里工程师认为这个“只能算是表因，并不涉及本质。“ 所以提出了——
>
> > 如果你细读[RFC793](https://link.zhihu.com/?target=https%3A//www.ietf.org/rfc/rfc793.txt)，也就是 TCP 的协议 RFC，你就会发现里面就讲到了为什么三次握手是必须的——
> >
> > TCP **需要 seq 序列号来做可靠重传或接收**，而避免连接复用时无法分辨出 seq 是延迟或者是旧链接的 seq，因此需要三次握手来约定确定双方的 ISN（初始 seq 序列号）。
> >
> > 作者：一位阿里工程师 链接：https://www.zhihu.com/question/24853633/answer/573627478









###  操作系统



## 3.面试题

### 算法题

```js
剑指 Offer 56 - I. 数组中数字出现的次数 - 成对出现的数
剑指 Offer II 070. 排序数组中只出现一次的数字 -  复习~
剑指 Offer 56 - II. 数组中数字出现的次数 II
```

#### [剑指 Offer 56 - I. 数组中数字出现的次数](https://leetcode-cn.com/problems/shu-zu-zhong-shu-zi-chu-xian-de-ci-shu-lcof/)

烧脑的位运算 用到了 & 

#### [剑指 Offer 56 - II. 数组中数字出现的次数 II](https://leetcode-cn.com/problems/shu-zu-zhong-shu-zi-chu-xian-de-ci-shu-ii-lcof/)

哈希表暴力解了。。。



## 4.前端开发框架

### react学习

# 10.21

坚持刷题的第二天！

但是下午之后的效率让我惊了！太拉跨了！今后学习请务必锁手机&专心一些！！

```js
// DDL
	写出第一版简历  10.31
		1.重点掌握HTTP协议
        2.JS基础良好 
        3.ES6过完 
    	4.JS30项目完结
        5.框架相关内容完结并尽量完成记事本项目！
```



```js
// 今日主要收获 & 学习时间
Totally 320min
1.前端基础知识 
// 从早上-中午 拿出一整块时间学习前端基础 晚上跑完步回来继续看~
    1.1 前端基础学习 40min 
    // 红宝书、刷题
		/* 红宝书还是全面！之后还是多拿一些时间看看吧！函数那里东西真的很多啊！+HTML基础一些内容 忘差不多了！	*/
    1.2 freecodecamp JS + 响应式网页设计 60min
    	/* 复习勒Promise ES6 */
    1.3 JS 30demos min
    	/*  */

2.核心基础知识 下午开始学计网 + 刷题
	2.1 计网 50min
		/* TCP三次握手的内容，再看一遍还是很有收获！另外，第三次握手客户端给服务端发送的ACK报文中可以携带数据！这个高频考点要记住！ */
	2.2 操作系统 min
		/*  */

3.面试刷题
	3.1 刷算法 刷力扣 80min	
    	/* 掘金小册 11/28
        	晚上效率裂开了。。刷题效率太低 字符串那点东西都没看完。。锁手机太有必要了只能说！*/   
    	// 每个阶段结束后 简单总结下应对某种数据结构/对应类型的题目 应该怎么去想
        1.数组 + 字符串 + 链表 + 二叉树 + 栈/队列 熟练掌握这些数据结构
        2.双指针 + 遍历专题DFS BFS + 递归
        3.回溯算法 + 贪心算法 + 动态规划
        4.了解下前缀和方法 熟练使用哈希表（解决数组问题） 
    3.2 面试题 50min
		/* 看面经，看面试题 
        	JS基础两道 还是围绕着整数来学习勒一下~*/  
    
4.前端开发框架 
	4.1 react学习 20min
		/* 简单了解了下要做的记账本项目，下个阶段重点攻克react！ */
    
5.其他 
	规划今日学习路径 稳一些！20min
6.每日总结 
```

> 学习顺序预告
>
> 这里说的实操 都是在 `freecodecamp` 中进行练习

- [x] JS实操 
- [x] JS红宝书函数
- [x] JS面试题1-2道
- [x] 计网 TCP连接内容 图解HTTP
- [x] 小册刷字符串 

## 1.前端基础

### 前端基础知识

```js
1.隐式转换的问题
	由一道面试题引入
// 总结文章！
2.var变量存在的问题
3.防止对象改变的freeze方法
4.设置函数的默认参数来构建更加灵活的函数 const greeting = (name = "Anonymous") => "Hello " + name;
5. rest 操作符... 					function(...args)
	使用 spread 运算符展开数组项 ...  [1,2,3,...arr]
6.img标签中给搜索引擎看的属性是alt！alt属性有两个作用：加载失败的替换文字；让搜索引擎可以通过属性的文字描述获取图片。
7.src用于替代这个元素，而href用于建立这个标签与外部资源之间的关系。
```

#### 1.一道面试题引入的隐式转换的学习

[看](https://blog.csdn.net/weixin_33711647/article/details/88723157?utm_medium=distribute.pc_relevant.none-task-blog-2~default~baidujs_title~default-1.no_search_link&spm=1001.2101.3001.4242)

```js
if ([] == false) {
    console.log(1);// 1
}
if ([]) {
    console.log(3);// 3
}
if ({} == false ) {
    console.log(2);// undefined 
}
if ({}) {
    console.log(2);// 2
}
if ([1] == [1]) {
    console.log(4);// undefined 
}
```

另外 `null + 0 = 0`

```js
{} == false;// Unexpected token '=='
```

#### 2.var存在的问题

存储的函数会总是指向更新后的全局 `i` 变量的值。

```js
var printNumTwo;
for (var i = 0; i < 3; i++) {
  if (i === 2) {
    printNumTwo = function() {
      return i;
    };
  }
}
console.log(printNumTwo());// 3
```

因为赋值给 `i` 的值已经更新，`printNumTwo()` 返回全局的 `i`，而不是在 for 循环中创建函数时 `i` 的值。 `let` 关键字就不会出现这种现象

#### 3.Object.freeze()方法保证数据不被改变

任何更改对象的尝试都将被拒绝，如果脚本在严格模式下运行，将抛出错误。

```js
Object.freeze(obj);
```

#### 4.使用展开运算符替代apply方法传参

下面的 ES5 代码使用了 `apply()` 来计算数组的最大值：

```js
var arr = [6, 89, 3, 45];
var maximus = Math.max.apply(null, arr);
```

我们必须使用 `Math.max.apply(null, arr)`，因为 `Math.max(arr)` 返回 `NaN`。

 `Math.max()` 函数中**需要传入的是一系列由逗号分隔的参数**，而不是一个数组。 展开操作符可以<u>提升代码的可读性，使代码易于维护。</u>

```js
const arr = [6, 89, 3, 45];
const maximus = Math.max(...arr);
```

`maximus` 的值应该是 `89`。

`...arr` 返回一个**解压**的数组。 也就是说，它*展开*数组。 然而，展开操作符**只能够在函数的参数中或者数组中使用**。 下面的代码将会报错：

```js
const spreaded = ...arr;
```

#### 5.嵌套解构

```js
const user = {
  johnDoe: { 
    age: 34,
    email: 'johnDoe@freeCodeCamp.com'
  }
};
```

这是解构对象的属性值赋值给具有相同名字的变量：

```js
const { johnDoe: { age, email }} = user;
```

这是将对象的属性值赋值给具有不同名字的变量：

```js
const { johnDoe: { age: userAge, email: userEmail }} = user;
```

#### 6.使用解构赋值将对象作为函数的参数传递

在某些情况下，你可以在函数的参数里直接解构对象。

请看以下代码：

```js
const profileUpdate = (profileData) => {
  const { name, age, nationality, location } = profileData;

}
```

上面的操作解构了传给函数的对象。 这样的操作也**可以直接在参数里完成**：

```js
const profileUpdate = ({ name, age, nationality, location }) => {

}
```

当 `profileData` 被传递到上面的函数时，从函数参数中解构出值以在函数内使用。

#### 7.**使用简单字段编写简洁的对象字面量声明**

ES6 添加了一些很棒的功能，用于更方便地定义对象。

请看以下代码：

```js
const getMousePosition = (x, y) => ({
  x: x,
  y: y
});
```

`getMousePosition` 简单的函数，返回拥有两个属性的对象。 ES6 提供了一个语法糖，消除了类似 `x: x` 这种冗余的写法。 你可以只写一次 `x`，解释器会自动将其转换成 `x: x`（或效果相同的内容）。 下面是使用这种语法重写的同样的函数：

```js
const getMousePosition = (x, y) => ({ x, y });
```

另一种写法：

```js
const createPerson = (name, age, gender) => {
  return {
    name,age,gender
  };
};
```

Bingo!ES6专题完结

![image-20211021114531185](https://gitee.com/su-fangzhou/blog-image/raw/master/202110211145427.png)

#### 8.闭包原理建议去多读读红宝书！

第四章的作用域链 + 第十章的函数部分 p335（书页数311）

## 2.核心基础知识

### 计网

```js
2.TCP连接的建立
	TCP三次握手过程
    Linux下如何查看TCP状态
```

#### TCP连接的建立

##### 1.TCP三次握手过程和状态变迁

TCP 是<u>面向连接</u>的协议，所以使用 TCP 前必须先建立连接，而**建立连接是通过三次握手而进行的。**

![图片](https://mmbiz.qpic.cn/mmbiz_png/J0g14CUwaZeo9xBVAyPJ8iaWCC6sYS843fFol7gd3035Kibg3gPMSAZQLVibf9nwEblOUaX80hoOaRLVpaYCAI44w/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

那么其过程是怎么样的呢？

【1】一开始，客户端和服务端都处于 `CLOSED` 状态。先是==服务端主动监听==某个端口，**处于 `LISTEN` 状态**，且客户端向服务端发送SYN报文，客户端处于`SYN-SENT` 状态。

![图片](https://mmbiz.qpic.cn/mmbiz_png/J0g14CUwaZeo9xBVAyPJ8iaWCC6sYS843V0vbLBibXMvJbdiaqbfw4CictHX1Uc3OpOFWvZwxeI8B5Pv7y3beeAN9A/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

- 【客户端SYN报文的序列号】客户端会随机初始化序列号（`client_isn`），将此序号置于 TCP 首部的「序列号」字段中，同时把 `SYN` 标志位置为 `1` ，表示 `SYN` 报文。
  - 将SYN报文发送给服务端表示向服务端发起连接
  - SYN报文不包含应用层数据

【2】服务端向客户端发送SYN+ACK报文 - 服务端处于`SYN-RCVD` 状态

![图片](https://mmbiz.qpic.cn/mmbiz_png/J0g14CUwaZeo9xBVAyPJ8iaWCC6sYS84320oABn0E6jjsYHLicn6L5mlunbCDWGImCCHs41AWjZMnV8P1qdM99fQ/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

来看看报文头部的内容

- 【服务端SYN报文的序列号】服务端收到客户端的 `SYN` 报文后，首先服务端也随机初始化自己的序号（`server_isn`），将此序号填入 TCP 首部的「序列号」字段中。
- 【服务端ACK报文的确认应答号】其次把 TCP 首部的「确认应答号」字段填入 `client_isn + 1`,（将收到客户端的ISN+1）
- 【SYN ACK值的改变】接着**把 `SYN` 和 `ACK` 标志位置为 `1`。**
- 最后==把该报文（SYN+ACK报文，二者是一起的~）发给客户端==，该报文**也不包含应用层数据**，之后服务端处于 `SYN-RCVD` 状态。

【3】客户端向服务端回应最后一个应答报文：ACK报文 - 客户端处于`ESTABLISHED` 状态

![图片](https://mmbiz.qpic.cn/mmbiz_png/J0g14CUwaZeo9xBVAyPJ8iaWCC6sYS843OM01fA1X8oZ3wpr2AV8ngpjSJcyhoTQEAFKo8UdYMr456Fb5dv0alQ/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

- 首先该应答报文 TCP 首部 `ACK` 标志位置为 `1` 
- 其次「确认应答号」字段填入 `server_isn + 1` 
- 最后把报文发送给服务端
- 这次报文可以==携带客户到服务器的数据==，之后客户端处于 `ESTABLISHED` 状态。

【4】服务端接收到了应答报文(ACK)之后 进入`ESTABLISHED` 状态——TCP连接建立成功

> ==面试常问==：
>
> **第三次握手是可以携带数据的~而前两次不可以！**

一旦完成三次握手，双方都处于 `ESTABLISHED` 状态，此致连接就已建立完成，客户端和服务端就可以相互发送数据了。

##### 2.如何在Linux系统中查看TCP状态

==答：==

在 Linux 可以通过 `netstat -napt` 命令查看TCP的连接状态。

![图片](https://mmbiz.qpic.cn/mmbiz_png/J0g14CUwaZeo9xBVAyPJ8iaWCC6sYS843TdYaGI3f27nYYR47ibmH0iaV6zODCZhwpVoX7t7iasTTplcibpXXMib2DJA/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

##### 3.为啥TCP连接是三次握手？

> 下面还有一个我之前总结的内容[【经典面试题】为啥TCP是三次握手（three-way handshake） 而不是两次/四次呢？](https://blog.csdn.net/qq_45704942/article/details/120414548)，结合了很多资料
>
> 这里是小林的总结：



##### 4.为啥TCP连接不能是两次握手呢？



##### 5.为啥TCP连接不能是四次握手呢？



##### 【之前做的总结】为啥TCP连接是三次握手？不是两次/四次握手呢？

图解网络3.1【1】 

写了一篇文章来总结下

[【经典面试题】为啥TCP是三次握手（three-way handshake） 而不是两次/四次呢？](https://blog.csdn.net/qq_45704942/article/details/120414548)

面试官问你 为啥TCP连接是三次握手 不是两次/四次呢？

> 这个经典问题吧~
>
> - 之前看过图解网络中的内容
>
> - 谢希仁的计算机网络 对应这部分的内容
>
> - 也搜过知乎 看过大佬解读的RFC中的内容
>
> 分两个点简单说下吧
>
> - 避免重复连接造成的**资源浪费**
>   - 防止**已经失效的连接请求报文段**一段时间后又传到了服务端
> - 避免历史连接造成的**网络混乱**
>
>   - 三次握手可以防止历史连接的发生（通过发送RST报文）
>   - TCP是可靠传输的 需要三次握手来约定、确定双方的初始序列号（seq——sequence numbers））
>
> 先说下三次握手建立起连接的过程吧 画个简图 
>
> ![请添加图片描述](https://img-blog.csdnimg.cn/84d8f71694c14e1189a1a61f4a3decb5.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5pWy5Luj56CB55qE5bCP5o-Q55C05omL,size_19,color_FFFFFF,t_70,g_se,x_16)
>
> 第一次握手的SYN报文
>
> ![图片](https://mmbiz.qpic.cn/mmbiz_png/J0g14CUwaZeo9xBVAyPJ8iaWCC6sYS843V0vbLBibXMvJbdiaqbfw4CictHX1Uc3OpOFWvZwxeI8B5Pv7y3beeAN9A/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)
>
> 第二次握手服务端发送的SYN+ACK报文
>
> ![图片](https://mmbiz.qpic.cn/mmbiz_png/J0g14CUwaZeo9xBVAyPJ8iaWCC6sYS84320oABn0E6jjsYHLicn6L5mlunbCDWGImCCHs41AWjZMnV8P1qdM99fQ/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)
>
> 第三次握手客户端发送的ACK报文
>
> ![图片](https://mmbiz.qpic.cn/mmbiz_png/J0g14CUwaZeo9xBVAyPJ8iaWCC6sYS843OM01fA1X8oZ3wpr2AV8ngpjSJcyhoTQEAFKo8UdYMr456Fb5dv0alQ/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

###### 【1】避免重复连接造成的==资源浪费==

> 然后说下三次握手相较于两次握手 的性能提升 以及一些关键作用！
>
> 第一点：（参考谢希仁的计算机网络-避免失效的连接造成影响 小林的图解网路-避免资源浪费）
>
> - 客户端发出的第一个连接请求报文段没有丢失 但是在某个网络结点被长时间阻塞了。
>
>   - 所以这个包就成为了一个不被需要的存在 然而 如果使用两次握手 服务端将不会知道这是一个重复的网络包！（两次握手）
>   - 在延误了一段时间后 这个旧的连接请求抵达服务端 服务端会误以为这是客户端发送的一个新的连接请求（两次握手）
>   - 然后服务端就会给客户端发出确认报文 之后建立新的连接（两次握手） 
>   - 所以使用两次握手会导致资源的大量浪费！
>
> - 同样遇到类似的这种情况 三次握手要机智得多！
>
>   - 其实看上图也可以清楚了 三次握手必须得在客户端向服务端发送那个最后的确认报文（ACK 确认应答号：server_sin + 1) 才能建立连接
>
>   ![图片](https://mmbiz.qpic.cn/mmbiz_png/J0g14CUwaZeo9xBVAyPJ8iaWCC6sYS843OM01fA1X8oZ3wpr2AV8ngpjSJcyhoTQEAFKo8UdYMr456Fb5dv0alQ/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

###### 【2】避免历史连接造成==网络混乱==

听起来雀氏是网络混乱更可怕啊哈哈

> 第二点：【首要原因】三次握手来确定双方的初始序列号 （知乎-依靠seq序列号来做可靠重传/接收 图解网路哦-三次握手同步客户端、服务端的初始序列号；避免历史连接）
>
> - 由于网络拥堵等乱七八糟的原因，会使得**旧的数据包**，先到达目标主机 
>
>   - 三次握手可以防止旧的重复连接初始化造成的混乱
>
>   > 参考**RFC 793**指出的 ==TCP连接使用三次握手的首要原因==
>   >
>   > The principle reason for the three-way handshake is to prevent old duplicate connections from causing confusion.
>
>   也就是防止旧的重复连接初始化 造成困难
>
>   用小林的图解网络中的一幅图来解释这个问题——
>
>   ![图片](https://mmbiz.qpic.cn/mmbiz_png/J0g14CUwaZeo9xBVAyPJ8iaWCC6sYS8436nKau10lAsztRqbyhjC1C1GRcsEz04icZmomMjwcxgeGn97BnKUoxibw/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)
>
>   - 当旧的数据包比新数据包先抵达服务端时 客户端会发送RST报文 告诉服务端“这个是我的历史连接 不用连接、分配资源了！”
>
> - 而知乎上的一位阿里的工程师持这样（与图解网路中还是不太一样的！）的观点——三次握手可以确定客户端、服务端的初始seq序列号（也就是ISN）所以可以防止历史连接造成的混乱
>
>   - TCP需要**通过seq序列号来做可靠重传或者接收** 而避免连接复用时无法分辨出seq是延迟/旧连接的seq
>   - 两次握手只能保证一方的初始序列号（也就是SQN报文中的序列号）被对方成功接收
>     - 注意！只有一来一回（一方发送SYN 一方发送ACK应答报文确定SYN报文已经被成功接收了！）才算是“成功”
>   - 而三次握手（其实是四次 中间的SYN+ACK 可以算作一步）可以保证双方的初始序列号都能被对方接收 这样就==不会出现历史连接捣乱的情况==！



来看看其他角度的答案

> 极客时间中的一个评论
>
> > 应用层的包 ->（通过socket编程实现包的传递->） 传输层 支付这种场景 往往使用传输层中的TCP协议 TCP会保证这个包能够到达目的地 如果不能到达就会重新发送 直至到达
> >
> > 这个过程就像是一份信你写好了，装进信封，根据收信人的名字（网址）从地址簿（DNS）里面查到了目的地的地址邮编（IP），然后交给邮局（传输层）传输，当然这个过程可能还有些波折。 
> >
> > 1.你在信里面说： 亲爱的某某，我们以后写信联系吧（SYN=1发起一个新的连接），我有不能说的秘密跟你讲，但是我不确定收到信的是不是你，如果是你自己就请给我回信，我就跟你分享我的秘密（seq=x）。 
> >
> > 2.收信人收到你的信后给你回信： 亲爱的某某某我也想跟你写信（SYN=1发起一个新的连接），我是我自己你可以接着给我写信了（ACK=1确认序列号有效）你可以从不能说的秘密开始接着往下讲（ack=x+1），另外我也有话对你讲（seq=y） 
> >
> > 3.你收到信后很高兴，立刻回信： 我们终于联系上了（ACK=1确认序列号有效），我们接着说我的秘密......（seq=x+1），你有什么话跟我说下次写信告诉我（seq=y+1） 这就是TCP三次握手的过程
>
> 知乎中的解答
>
> > 要注意 TCP的可靠连接是靠**seq（sequence numbers 序列号）**来达成的！——来自知乎
> >
> > - 因为没有网络全局时钟，两台机器分别为了确认序列号，证明这个包是新的，而**不是在链路中delay的**（也是小林中内容的第二天点）——来自知乎
>
> 谢希仁 版 计算机网络——
>
> > “已失效的连接请求报文段” 的产生在这样一种情况下：client 发出的第一个连接请求报文段并没有丢失，而是在某个网络结点长时间的滞留了，以致延误到连接释放以后的某个时间才到达 server。本来这是一个早已失效的报文段。但 server 收到此失效的连接请求报文段后，就误认为是 client 再次发出的一个新的连接请求。于是就向 client 发出确认报文段，同意建立连接。假设不采用 “三次握手”，那么只要 server 发出确认，新的连接就建立了。由于现在 client 并没有发出建立连接的请求，因此不会理睬 server 的确认，也不会向 server 发送数据。但 server 却以为新的运输连接已经建立，并一直等待 client 发来数据。这样，server 的很多资源就白白浪费掉了。采用 “三次握手” 的办法可以防止上述现象发生。例如刚才那种情况，client 不会向 server 的确认发出确认。server 由于收不到确认，就知道 client 并没有要求建立连接。”
>
> 具体意思就是——为了防止**已经失效的连接请求报文**段突然又传到了服务端 因而产生错误
>
> 而知乎博主 一名阿里工程师认为这个“只能算是表因，并不涉及本质。“ 所以提出了——
>
> > 如果你细读[RFC793](https://link.zhihu.com/?target=https%3A//www.ietf.org/rfc/rfc793.txt)，也就是 TCP 的协议 RFC，你就会发现里面就讲到了为什么三次握手是必须的——
> >
> > TCP **需要 seq 序列号来做可靠重传或接收**，而避免连接复用时无法分辨出 seq 是延迟或者是旧链接的 seq，因此需要三次握手来约定确定双方的 ISN（初始 seq 序列号）。
> >
> > 作者：一位阿里工程师 链接：https://www.zhihu.com/question/24853633/answer/573627478



###  操作系统



## 3.面试题

### 算法题



## 4.前端开发框架

### react学习



# 10.22 *多花时间在框架学习上！

坚持刷题的第三天！

沙河一日游 

```js
// DDL
	写出第一版简历  10.31
		1.重点掌握HTTP协议
        2.JS基础良好 
        3.ES6过完 
    	4.JS30项目完结
        5.框架相关内容完结并尽量完成记事本项目！
```



```js
// 今日主要收获 & 学习时间
Totally 120min
1.前端基础知识 
// 从早上-中午 拿出一整块时间学习前端基础 晚上跑完步回来继续看~
    1.1 前端基础学习 80min 
    // 红宝书、刷题
		/* 快速过了一下DOM BOM，回头复习下JS30的案例和购物清单那个demo
        明天开始事件的学习
        复习勒原型链，这个知识点真是很恶心啊！要扎实掌握！*/
    1.2 freecodecamp JS + 响应式网页设计 min
    	/*  */
    1.3 JS 30demos min
    	/*  */

2.核心基础知识 下午开始学计网 + 刷题
	2.1 计网 min
		/*  */
	2.2 操作系统 min
		/*  */

3.面试刷题
	3.1 刷算法 刷力扣 30min	
    	/* 掘金小册 11/28
        	刷了回文字符串 感觉可以优化的点蛮多的 明天还要学习下！*/   
    	// 每个阶段结束后 简单总结下应对某种数据结构/对应类型的题目 应该怎么去想
        1.数组 + 字符串 + 链表 + 二叉树 + 栈/队列 熟练掌握这些数据结构
        2.双指针 + 遍历专题DFS BFS + 递归
        3.回溯算法 + 贪心算法 + 动态规划
        4.了解下前缀和方法 熟练使用哈希表（解决数组问题） 
    3.2 面试题 min
		/*  */  
    
4.前端开发框架 
	4.1 react学习 min
		/*  */
    
5.其他 
	规划今日学习路径 稳一些！10min
6.每日总结 
```

> 学习顺序预告
>
> 这里说的实操 都是在 `freecodecamp` 中进行练习

- [x] 红宝书 DOM
- [x] 小册刷字符串 

## 1.前端基础

### 前端基础知识

```js
1.隐式转换的问题
	由一道面试题引入
// 总结文章！
2.BOM DOM大概看一下
```

#### 1.一道面试题引入的隐式转换的学习

[看](https://blog.csdn.net/weixin_33711647/article/details/88723157?utm_medium=distribute.pc_relevant.none-task-blog-2~default~baidujs_title~default-1.no_search_link&spm=1001.2101.3001.4242)

```js
if ([] == false) {
    console.log(1);// 1
}
if ([]) {
    console.log(3);// 3
}
if ({} == false ) {
    console.log(2);// undefined 
}
if ({}) {
    console.log(2);// 2
}
if ([1] == [1]) {
    console.log(4);// undefined 
}
```

另外 `null + 0 = 0`也是隐式转换的内容~	

```js
{} == false;// Unexpected token '=='
```

#### 2.var存在的问题

存储的函数会总是指向更新后的全局 `i` 变量的值。

```js
var printNumTwo;
for (var i = 0; i < 3; i++) {
  if (i === 2) {
    printNumTwo = function() {
      return i;
    };
  }
}
console.log(printNumTwo());// 3
```

因为赋值给 `i` 的值已经更新，`printNumTwo()` 返回全局的 `i`，而不是在 for 循环中创建函数时 `i` 的值。 `let` 关键字就不会出现这种现象

#### 2.BOM小结

Browser Object Model 浏览器对象模型

五个浏览器对象

- window（Global）
- location
- navigator
- screen
- history

![image-20211022092611650](https://gitee.com/su-fangzhou/blog-image/raw/master/202110220926885.png)

![image-20211022093644528](https://gitee.com/su-fangzhou/blog-image/raw/master/202110220936704.png)

## 2.核心基础知识

### 计网

```js

```



###  操作系统



## 3.面试题

### 算法题



## 4.前端开发框架

### react学习



# 10.23

继续外出游玩的一天，学习并不系统，停一天！

另外今天忘记在github上提交进度了（完善了一些前端知识库的内容）断了一天，就很难受！



# 10.24 *细化接下来一周的学习内容

算是在外半日游吧，这两天彻底放松了下！感觉跟女票把好多事儿说开了，一个去读研，一个去就业~

总之，身体状态和心情好多了！

接下来几天要规划好每天要完成的最低标准，剩下的时间就用来疯狂推react的进度勒！

```js
// DDL
	写出第一版简历  10.31
		1.重点掌握HTTP协议
        2.JS基础良好 
        3.ES6过完 
    	4.JS30项目大致完结
        5.框架相关内容完结并尽量完成记事本项目！
```



```js
// 今日主要收获 & 学习时间
Totally 150min
1.前端基础知识 
// 从早上-中午 拿出一整块时间学习前端基础 晚上跑完步回来继续看~
    1.1 前端基础学习 30min 
    // 红宝书、刷题
		/* 看一些文章 */
    1.2 JS 30demos min
    	/*  */

2.核心基础知识 下午开始学计网 + 刷题
	2.1 计网 min
		/*  */
	2.2 操作系统 min
		/*  */

3.面试刷题
	3.1 刷算法 刷力扣 90min	
    	/* 掘金小册 11/28
        	基础回文字符串整理*/   
    	// 每个阶段结束后 简单总结下应对某种数据结构/对应类型的题目 应该怎么去想
        1.数组 + 字符串 + 链表 + 二叉树 + 栈/队列 熟练掌握这些数据结构
        2.双指针 + 遍历专题DFS BFS + 递归
        3.回溯算法 + 贪心算法 + 动态规划
        4.了解下前缀和方法 熟练使用哈希表（解决数组问题） 
    
4.前端开发框架 
	4.1 react学习 min
		/*  */
    
5.其他 
6.每日总结 & 第二天学习规划预告 60min
```

> 学习顺序预告
>
> 这里说的实操 都是在 `freecodecamp` 中进行练习

- [x] 规划学习内容
- [x] 小册刷字符串 + 写文总结
- [x] 周总结 + 下一天的学习安排

## 1.前端基础

### 前端基础知识

```js
1.隐式转换的问题
	由一道面试题引入
// 总结文章！
```

#### 1.一道面试题引入的隐式转换的学习

学习红宝书3.5.8中 p96的内容

```js
if ([] == false) {
    console.log(1);// 1
}
if ([]) {
    console.log(3);// 3
}
if ({} == false ) {
    console.log(2);// undefined 
}
if ({}) {
    console.log(2);// 2
}
if ([1] == [1]) {
    console.log(4);// undefined 
}
```

另外 `null + 0 = 0`也是隐式转换的内容~	

```js
{} == false;// Unexpected token '=='
```



## 2.核心基础知识

### 计网

```js

```



###  操作系统



## 3.面试题

### 算法题



## 4.前端开发框架

### react学习



# 10.25 *更改学习日记对知识点的记录 转移到前端知识库中【10/26开始】

时隔多日 终于突破了500min的学习时间大关！

但是还有可以提升的地方，继续努力啊粥哥！

```js
// DDL
	写出第一版简历  10.31
		1.重点掌握HTTP协议
        2.JS基础良好 
        3.ES6过完 
    	4.JS30项目大致完结
        5.框架相关内容完结并尽量完成记事本项目！
```



```js
// 今日主要收获 & 学习时间
Totally 500min
1.前端基础知识 
// 从早上-中午 拿出一整块时间学习前端基础 晚上跑完步回来继续看~
    1.1 前端基础学习 180min 
    // 红宝书、刷题
		/* 隐式类型转换的大坑，还有if语句的condition
        复习new关键字 整理一些面试题~ */
    1.2 JS 30demos 60min
    	/* demo23 调用浏览器中阅读器的接口，实现对输入框内容的阅读，实践了一些接口基础的功能~
        观察了demo12的一个问题*/

2.核心基础知识 下午开始学计网 + 刷题
	2.1 计网 30min
		/* 快速完结TCP连接内容，好多内容还需要继续学习！ */
	2.2 操作系统 min
		/*  */

3.面试刷题
	3.1 刷算法 刷力扣 130min	
    	/* 掘金小册 11/28
        	字符串两题，正则技巧一题，正则那个设计题没太搞懂！*/   
    	// 每个阶段结束后 简单总结下应对某种数据结构/对应类型的题目 应该怎么去想
        1.数组 + 字符串 + 链表 + 二叉树 + 栈/队列 熟练掌握这些数据结构
        2.双指针 + 遍历专题DFS BFS + 递归
        3.回溯算法 + 贪心算法 + 动态规划
        4.了解下前缀和方法 熟练使用哈希表（解决数组问题） 
    
4.前端开发框架 
	4.1 react学习 50min
		/* 浏览了下小册的项目，准备明天肝掉react基础的内容！冲！ */
    
5.其他 
	数据库作业 30min
6.每日总结 & 第二天学习规划预告 20min
```

> 学习顺序预告
>
> 这里说的实操 都是在 `freecodecamp` 中进行练习

- [x] 总结上周学习内容，展望本周学习内容
- [x] 隐式转换文章完成
- [x] 刷题 - JS相关
- [x] 完结小册字符串部分
- [x] JS30demos
- [x] react学习
- [x] 数据库作业
- [x] 计网TCP连接总结
- [ ] 正则表达式实操（留给明天了）

## 1.前端基础

### 前端基础知识

```js
1.隐式转换的问题
	由一道面试题引入
// 总结文章！
```

#### 1.一道面试题引入的隐式转换的学习

[掘金总结了一篇小文](https://juejin.cn/post/7022837573059870727/)

学习红宝书3.5.8中 p96的内容

```js
if ([] == false) {
    console.log(1);// 1
}
if ([]) {
    console.log(3);// 3
}
if ({} == false ) {
    console.log(2);// undefined 
}
if ({}) {
    console.log(2);// 2
}
if ([1] == [1]) {
    console.log(4);// undefined 
}
```

另外 `null + 0 = 0`也是隐式转换的内容~	

```js
{} == false;// Unexpected token '=='
```



## 2.核心基础知识

### 计网

```js
2.TCP连接的建立
	TCP三次握手过程
    Linux下如何查看TCP状态
    TCP连接为啥是三次握手？
    为啥客户端和服务端的初始序列号Seq Num（ISN）是不同的？
    初始序列号是如何随机产生的？
```

#### TCP连接的建立

##### 1.TCP三次握手过程和状态变迁

TCP 是<u>面向连接</u>的协议，所以使用 TCP 前必须先建立连接，而**建立连接是通过三次握手而进行的。**

![图片](https://mmbiz.qpic.cn/mmbiz_png/J0g14CUwaZeo9xBVAyPJ8iaWCC6sYS843fFol7gd3035Kibg3gPMSAZQLVibf9nwEblOUaX80hoOaRLVpaYCAI44w/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

那么其过程是怎么样的呢？

【1】一开始，客户端和服务端都处于 `CLOSED` 状态。先是==服务端主动监听==某个端口，**处于 `LISTEN` 状态**，且客户端向服务端发送SYN报文，客户端处于`SYN-SENT` 状态。

![图片](https://mmbiz.qpic.cn/mmbiz_png/J0g14CUwaZeo9xBVAyPJ8iaWCC6sYS843V0vbLBibXMvJbdiaqbfw4CictHX1Uc3OpOFWvZwxeI8B5Pv7y3beeAN9A/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

- 【客户端SYN报文的序列号】客户端会随机初始化序列号（`client_isn` - **客户端初始序列号** ISN就是初始序列号的意思），将此序号置于 TCP 首部的「序列号」字段中，同时把 `SYN` 标志位置为 `1` ，表示 `SYN` 报文。
  - 将SYN报文发送给服务端表示向服务端发起连接
  - SYN报文不包含应用层数据

【2】服务端向客户端发送SYN+ACK报文 - 服务端处于`SYN-RCVD` 状态

![图片](https://mmbiz.qpic.cn/mmbiz_png/J0g14CUwaZeo9xBVAyPJ8iaWCC6sYS84320oABn0E6jjsYHLicn6L5mlunbCDWGImCCHs41AWjZMnV8P1qdM99fQ/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

来看看报文头部的内容

- 【服务端SYN报文的序列号】服务端收到客户端的 `SYN` 报文后，首先服务端也随机初始化自己的序号（`server_isn` - 服务端初始序列号），将此序号填入 TCP 首部的「序列号」字段中。
- 【服务端ACK报文的确认应答号】其次把 TCP 首部的「确认应答号」字段填入 `client_isn + 1`,（将收到客户端的ISN+1）
- 【SYN ACK值的改变】接着**把 `SYN` 和 `ACK` 标志位置为 `1`。**
- 最后==把该报文（SYN+ACK报文，二者是一起的~）发给客户端==，该报文**也不包含应用层数据**，之后服务端处于 `SYN-RCVD` 状态。

【3】客户端向服务端回应最后一个应答报文：ACK报文 - 客户端处于`ESTABLISHED` 状态

![图片](https://mmbiz.qpic.cn/mmbiz_png/J0g14CUwaZeo9xBVAyPJ8iaWCC6sYS843OM01fA1X8oZ3wpr2AV8ngpjSJcyhoTQEAFKo8UdYMr456Fb5dv0alQ/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

- 首先该应答报文 TCP 首部 `ACK` 标志位置为 `1` 
- 其次「确认应答号」字段填入 `server_isn + 1` 
- 最后把报文发送给服务端
- 这次报文可以==携带客户到服务器的数据==，之后客户端处于 `ESTABLISHED` 状态。

【4】服务端接收到了应答报文(ACK)之后 进入`ESTABLISHED` 状态——TCP连接建立成功

> ==面试常问==：
>
> **第三次握手是可以携带数据的~而前两次不可以！**

一旦完成三次握手，双方都处于 `ESTABLISHED` 状态，此致连接就已建立完成，客户端和服务端就可以相互发送数据了。

##### 2.如何在Linux系统中查看TCP状态

==答：==

在 Linux 可以通过 `netstat -napt` 命令查看TCP的连接状态。

![图片](https://mmbiz.qpic.cn/mmbiz_png/J0g14CUwaZeo9xBVAyPJ8iaWCC6sYS843TdYaGI3f27nYYR47ibmH0iaV6zODCZhwpVoX7t7iasTTplcibpXXMib2DJA/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

##### 3.为啥TCP连接是三次握手？

> 下面还有一个我之前总结的内容[【经典面试题】为啥TCP是三次握手（three-way handshake） 而不是两次/四次呢？](https://blog.csdn.net/qq_45704942/article/details/120414548)，结合了很多资料
>
> 这里是小林的总结：

总览：

三次握手可以——

- 阻止历史重复连接的初始化（历史重复连接会造成网络混乱，很可怕！）
- 同步客户端、服务端的初始序列号（同样为了防止历史连接造成的网络混乱）
- 避免重复连接造成的资源浪费

###### 避免历史连接

我们来看看 RFC 793 指出的 TCP 连接使用三次握手的**首要原因**：

> *The principle reason for the three-way handshake is to prevent old duplicate connection initiations from causing confusion.*

简单来说，三次握手的**首要原因是为了防止旧的重复连接初始化造成混乱。**

网络环境是错综复杂的，往往并不是如我们期望的一样，先发送的数据包，就先到达目标主机，反而它很骚，可能会由于网络拥堵等乱七八糟的原因，会使得**旧的数据包**，先到达目标主机，那么这种情况下 TCP 三次握手是如何避免的呢？

![图片](https://mmbiz.qpic.cn/mmbiz_png/J0g14CUwaZeo9xBVAyPJ8iaWCC6sYS8436nKau10lAsztRqbyhjC1C1GRcsEz04icZmomMjwcxgeGn97BnKUoxibw/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)



==三次握手可以避免历史连接！！==（通过发送RST报文给服务器 中断TCP连接）

具体流程如下：

客户端连续发送多次 SYN 建立连接的报文，在网络拥堵等情况下：

- 一个「旧 SYN 报文」比「最新的 SYN 」 报文早到达了服务端；
- 那么此时服务端就会回一个 `SYN + ACK` 报文给客户端；
- 客户端收到后可以根据自身的上下文，判断这是一个历史连接（序列号过期或超时），那么客户端就会发送 `RST` 报文给服务端，表示中止这一次连接。



###### 同步双方初始==序列号==

TCP 协议的通信双方， 都必须维护一个==「序列号」==， 序列号是**可靠传输的一个关键因素**，它的作用：

- 接收方可以去除重复的数据；
- 接收方可以根据数据包的序列号按序接收；
- 可以标识发送出去的数据包中， 哪些是已经被对方收到的；

可见，序列号在 TCP 连接中占据着非常重要的作用，所以当客户端发送携带「初始序列号」的 `SYN` 报文的时候，需要服务端回一个 `ACK` 应答报文，表示客户端的 SYN 报文已被服务端成功接收，那当服务端发送「初始序列号」给客户端的时候，依然也要得到客户端的应答回应，**这样一来一回，才能确保双方的初始序列号能被可靠的同步。**

![图片](https://mmbiz.qpic.cn/mmbiz_png/J0g14CUwaZeo9xBVAyPJ8iaWCC6sYS843HWajXhQQfx6CH4EUxLqib0AAOXolZfIvuoEDkDoXaQ3RIceibo8ia9MQQ/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

- 四次握手其实也能够可靠的同步双方的初始化序号，但由于**第二步和第三步可以优化成一步**，所以就成了「三次握手」。

- 而两次握手只保证了一方的初始序列号能被对方成功接收，**没办法保证双方的初始序列号都能被确认接收**。





###### 避免资源浪费

如果只有「两次握手」，当客户端的 `SYN` 请求连接在网络中阻塞，客户端没有接收到 `ACK` 报文，就会重新发送 `SYN` ，由于没有第三次握手，**服务器不清楚客户端是否收到了自己发送的建立连接的 `ACK` 确认信号**，所以**每收到一个 `SYN` 就只能先主动建立一个连接**，这会造成什么情况呢？

如果客户端的 `SYN` 阻塞了，重复发送多次 `SYN` 报文，那么服务器在收到请求后就会**建立多个冗余的无效链接，造成不必要的资源浪费。**

![图片](https://mmbiz.qpic.cn/mmbiz_png/J0g14CUwaZeo9xBVAyPJ8iaWCC6sYS843CaTeGEvR5jg3iaHbUTEroayMBUoK3yfy9zGwlIia8pJu8x4RDkDGFLicg/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)



即两次握手会造成消息滞留情况下，服务器重复接受无用的连接请求 `SYN` 报文，而造成重复分配资源。

##### 4.为啥TCP连接不能是两次握手呢？

###### 防止历史连接造成的网络混乱

如果是**两次**握手连接，就<u>不能判断当前连接是否是历史连接</u>，**三次**握手则可以在客户端（发送方）准备发送第三次报文时，客户端因有足够的上下文来判断当前连接是否是历史连接：

- 如果是历史连接（序列号过期或超时），则第三次握手发送的报文是 `RST` 报文，以此中止历史连接；
- 如果不是历史连接，则第三次发送的报文是 `ACK` 报文，通信双方就会成功建立连接；

所以， TCP 使用三次握手建立连接的最主要原因是**防止历史连接初始化了连接**（在历史连接第三次握手的时候客户端发送RST报文 终止连接），从而==防止==了历史连接可能造成的==网络混乱==！

###### 两次握手不能同步双方的初始序列号（`client_isn`/`server_isn`）

两次握手只保证了一方的初始序列号能被对方成功接收，**没办法保证双方的初始序列号都能被确认接收**。

###### 防止客户端因为SYN阻塞而重复发送多次SYN报文，服务端收到请求后建立冗余的无效连接-资源浪费

两次握手会造成消息滞留情况下，服务器重复接受无用的连接请求 `SYN` 报文，而造成重复分配资源。



##### 5.为啥TCP连接不能是四次握手呢？

四次握手其实也能够可靠的同步双方的初始化序号，但由于**第二步和第三步可以优化成一步**，所以就成了「三次握手」。



##### 【之前做的总结】为啥TCP连接是三次握手？不是两次/四次握手呢？

图解网络3.1【1】 

写了一篇文章来总结下

[【经典面试题】为啥TCP是三次握手（three-way handshake） 而不是两次/四次呢？](https://blog.csdn.net/qq_45704942/article/details/120414548)

面试官问你 为啥TCP连接是三次握手 不是两次/四次呢？

> 这个经典问题吧~
>
> - 之前看过图解网络中的内容
>
> - 谢希仁的计算机网络 对应这部分的内容
>
> - 也搜过知乎 看过大佬解读的RFC中的内容
>
> 分两个点简单说下吧
>
> - 避免重复连接造成的**资源浪费**
>   - 防止**已经失效的连接请求报文段**一段时间后又传到了服务端
> - 避免历史连接造成的**网络混乱**
>
>   - 三次握手可以防止历史连接的发生（通过发送RST报文）
>   - TCP是可靠传输的 需要三次握手来约定、确定双方的初始序列号（seq——sequence numbers））
>
> 先说下三次握手建立起连接的过程吧 画个简图 
>
> ![请添加图片描述](https://img-blog.csdnimg.cn/84d8f71694c14e1189a1a61f4a3decb5.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5pWy5Luj56CB55qE5bCP5o-Q55C05omL,size_19,color_FFFFFF,t_70,g_se,x_16)
>
> 第一次握手的SYN报文
>
> ![图片](https://mmbiz.qpic.cn/mmbiz_png/J0g14CUwaZeo9xBVAyPJ8iaWCC6sYS843V0vbLBibXMvJbdiaqbfw4CictHX1Uc3OpOFWvZwxeI8B5Pv7y3beeAN9A/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)
>
> 第二次握手服务端发送的SYN+ACK报文
>
> ![图片](https://mmbiz.qpic.cn/mmbiz_png/J0g14CUwaZeo9xBVAyPJ8iaWCC6sYS84320oABn0E6jjsYHLicn6L5mlunbCDWGImCCHs41AWjZMnV8P1qdM99fQ/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)
>
> 第三次握手客户端发送的ACK报文
>
> ![图片](https://mmbiz.qpic.cn/mmbiz_png/J0g14CUwaZeo9xBVAyPJ8iaWCC6sYS843OM01fA1X8oZ3wpr2AV8ngpjSJcyhoTQEAFKo8UdYMr456Fb5dv0alQ/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

###### 【1】避免重复连接造成的==资源浪费==

> 然后说下三次握手相较于两次握手 的性能提升 以及一些关键作用！
>
> 第一点：（参考谢希仁的计算机网络-避免失效的连接造成影响 小林的图解网路-避免资源浪费）
>
> - 客户端发出的第一个连接请求报文段没有丢失 但是在某个网络结点被长时间阻塞了。
>
>   - 所以这个包就成为了一个不被需要的存在 然而 如果使用两次握手 服务端将不会知道这是一个重复的网络包！（两次握手）
>   - 在延误了一段时间后 这个旧的连接请求抵达服务端 服务端会误以为这是客户端发送的一个新的连接请求（两次握手）
>   - 然后服务端就会给客户端发出确认报文 之后建立新的连接（两次握手） 
>   - 所以使用两次握手会导致资源的大量浪费！
>
> - 同样遇到类似的这种情况 三次握手要机智得多！
>
>   - 其实看上图也可以清楚了 三次握手必须得在客户端向服务端发送那个最后的确认报文（ACK 确认应答号：server_sin + 1) 才能建立连接
>
>   ![图片](https://mmbiz.qpic.cn/mmbiz_png/J0g14CUwaZeo9xBVAyPJ8iaWCC6sYS843OM01fA1X8oZ3wpr2AV8ngpjSJcyhoTQEAFKo8UdYMr456Fb5dv0alQ/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

###### 【2】避免历史连接造成==网络混乱==

听起来雀氏是网络混乱更可怕啊哈哈

> 第二点：【首要原因】三次握手来确定双方的初始序列号 （知乎-依靠seq序列号来做可靠重传/接收 图解网路哦-三次握手同步客户端、服务端的初始序列号；避免历史连接）
>
> - 由于网络拥堵等乱七八糟的原因，会使得**旧的数据包**，先到达目标主机 
>
>   - 三次握手可以防止旧的重复连接初始化造成的混乱
>
>   > 参考**RFC 793**指出的 ==TCP连接使用三次握手的首要原因==
>   >
>   > The principle reason for the three-way handshake is to prevent old duplicate connections from causing confusion.
>
>   也就是防止旧的重复连接初始化 造成困难
>
>   用小林的图解网络中的一幅图来解释这个问题——
>
>   ![图片](https://mmbiz.qpic.cn/mmbiz_png/J0g14CUwaZeo9xBVAyPJ8iaWCC6sYS8436nKau10lAsztRqbyhjC1C1GRcsEz04icZmomMjwcxgeGn97BnKUoxibw/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)
>
>   - 当旧的数据包比新数据包先抵达服务端时 客户端会发送RST报文 告诉服务端“这个是我的历史连接 不用连接、分配资源了！”
>
> - 而知乎上的一位阿里的工程师持这样（与图解网络中还是不太一样的！）的观点——三次握手可以确定客户端、服务端的初始seq序列号（也就是ISN）所以可以防止历史连接造成的混乱
>
>   - TCP需要**通过seq序列号来做可靠重传或者接收** 而避免连接复用时无法分辨出seq是延迟/旧连接的seq
>   - 两次握手只能保证一方的初始序列号（也就是SQN报文中的序列号）被对方成功接收
>     - 注意！只有一来一回（一方发送SYN 一方发送ACK应答报文确定SYN报文已经被成功接收了！）才算是“成功”
>   - 而三次握手（其实是四次 中间的SYN+ACK 可以算作一步）可以保证双方的初始序列号都能被对方接收 这样就==不会出现历史连接捣乱的情况==！



来看看其他角度的答案

> 极客时间中的一个评论
>
> > 应用层的包 ->（通过socket编程实现包的传递->） 传输层 支付这种场景 往往使用传输层中的TCP协议 TCP会保证这个包能够到达目的地 如果不能到达就会重新发送 直至到达
> >
> > 这个过程就像是一份信你写好了，装进信封，根据收信人的名字（网址）从地址簿（DNS）里面查到了目的地的地址邮编（IP），然后交给邮局（传输层）传输，当然这个过程可能还有些波折。 
> >
> > 1.你在信里面说： 亲爱的某某，我们以后写信联系吧（SYN=1发起一个新的连接），我有不能说的秘密跟你讲，但是我不确定收到信的是不是你，如果是你自己就请给我回信，我就跟你分享我的秘密（seq=x）。 
> >
> > 2.收信人收到你的信后给你回信： 亲爱的某某某我也想跟你写信（SYN=1发起一个新的连接），我是我自己你可以接着给我写信了（ACK=1确认序列号有效）你可以从不能说的秘密开始接着往下讲（ack=x+1），另外我也有话对你讲（seq=y） 
> >
> > 3.你收到信后很高兴，立刻回信： 我们终于联系上了（ACK=1确认序列号有效），我们接着说我的秘密......（seq=x+1），你有什么话跟我说下次写信告诉我（seq=y+1） 这就是TCP三次握手的过程
>
> 知乎中的解答
>
> > 要注意 TCP的可靠连接是靠**seq（sequence numbers 序列号）**来达成的！——来自知乎
> >
> > - 因为没有网络全局时钟，两台机器分别为了确认序列号，证明这个包是新的，而**不是在链路中delay的**（也是小林中内容的第二天点）——来自知乎
>
> 谢希仁 版 计算机网络——
>
> > “已失效的连接请求报文段” 的产生在这样一种情况下：client 发出的第一个连接请求报文段并没有丢失，而是在某个网络结点长时间的滞留了，以致延误到连接释放以后的某个时间才到达 server。本来这是一个早已失效的报文段。但 server 收到此失效的连接请求报文段后，就误认为是 client 再次发出的一个新的连接请求。于是就向 client 发出确认报文段，同意建立连接。假设不采用 “三次握手”，那么只要 server 发出确认，新的连接就建立了。由于现在 client 并没有发出建立连接的请求，因此不会理睬 server 的确认，也不会向 server 发送数据。但 server 却以为新的运输连接已经建立，并一直等待 client 发来数据。这样，server 的很多资源就白白浪费掉了。采用 “三次握手” 的办法可以防止上述现象发生。例如刚才那种情况，client 不会向 server 的确认发出确认。server 由于收不到确认，就知道 client 并没有要求建立连接。”
>
> 具体意思就是——为了防止**已经失效的连接请求报文**段突然又传到了服务端 因而产生错误
>
> 而知乎博主 一名阿里工程师认为这个“只能算是表因，并不涉及本质。“ 所以提出了——
>
> > 如果你细读[RFC793](https://link.zhihu.com/?target=https%3A//www.ietf.org/rfc/rfc793.txt)，也就是 TCP 的协议 RFC，你就会发现里面就讲到了为什么三次握手是必须的——
> >
> > TCP **需要 seq 序列号来做可靠重传或接收**，而避免连接复用时无法分辨出 seq 是延迟或者是旧链接的 seq，因此需要三次握手来约定确定双方的 ISN（初始 seq 序列号）。
> >
> > 作者：一位阿里工程师 链接：https://www.zhihu.com/question/24853633/answer/573627478

##### 6.为什么客户端和服务端的初始序列号ISN是不同的？

==答：==

因为网络中的报文**会延迟、会复制重发、也有可能丢失**，这样会造成的不同连接之间产生互相影响，所以==为了避免互相影响==，客户端和服务端的初始序列号是随机且不同的。

##### 7.初始序列号ISN是如何随机产生的？

起始 `ISN` 是基于时钟的，每 4 毫秒 + 1，转一圈要 4.55 个小时。

RFC1948 中提出了一个较好的初始化序列号 ISN 随机生成算法。

*ISN = M + F (localhost, localport, remotehost, remoteport)*

- `M` 是一个计时器，这个计时器每隔 4 毫秒加 1。
- `F` 是一个 Hash 算法，根据源 IP、目的 IP、源端口、目的端口生成一个随机数值。要保证 Hash 算法不能被外部轻易推算得出，用 MD5 算法是一个比较好的选择。







# 10.26 *更新DDL的内容 *睡前从前端知识库进行今日小结

高开低走的一天！反省一下，明天在中午、晚上这两个节点把手机锁死！然后电脑留一个窗口看女票的消息就好😂！

```js
// DDL
	写出第一版简历  11.7
		1.重点掌握HTTP协议，详细了解网络包从客户端到服务端的流程
        2.HTML CSS JS基础良好 
    	3.JS30项目完结并进行重点项目的复习，对特定的项目很有见解。
        5.完结react基础并尽量完成记事本项目！
```



```js
// 今日主要收获 & 学习时间
Totally 450min
1.前端基础知识
// 从早上-中午 拿出一整块时间学习前端基础 晚上跑完步回来继续看~
    1.1 前端基础学习 110min 
    // 红宝书、刷题
		/* 复习闭包，闭包是可以引用父作用域中变量的函数~ 
		NaN - Not a Number
		刷了下面试题&甄别一些面试题中不好的点——程序员BUS给出的那份有的题目答案不太明确，当作一个学习方向是OK的
		复习了一下DOM~
        	*/
    1.2 JS 30demos 20min
    	/* demo12中的问题 改为了https协议就能用对应的API了 不太清楚是不是跨域？（主要是不太清楚调用这个API的原理，引入了脚本，直接拿来就用方法了）*/

2.核心基础知识 下午开始学计网 + 刷题
	2.1 计网 50min
		/* 图解HTTP重新开始看！ */
	2.2 操作系统 min
		/*  */

3.面试刷题
	3.1 刷算法 刷力扣 100min	
    	/* 掘金小册 11/28
        	 */   
    	// 每个阶段结束后 简单总结下应对某种数据结构/对应类型的题目 应该怎么去想
        1.数组 + 字符串 + 链表 + 二叉树 + 栈/队列 熟练掌握这些数据结构
        2.双指针 + 遍历专题DFS BFS + 递归
        3.回溯算法 + 贪心算法 + 动态规划
        4.了解下前缀和方法 熟练使用哈希表（解决数组问题） 
    
4.前端开发框架 
	4.1 react学习 160min
		/* 阮大的入门教程真心香！配合着官方文档、单元demo、尚硅谷之前学习的内容一起学习，真香！
        复习state的一些特性，总结之前的一篇文*/
5.其他 
6.每日总结 & 第二天学习规划预告 10min
```

> 学习顺序预告
>
> 这里说的实操 都是在 `freecodecamp` 中进行练习

- [x] 总结今日学习内容 看闭包的一些文章
- [x] react基础
- [ ] 正则表达式实操（继续留给明天了QAQ今天上午&中午有点拉）
- [x] JS面试题~
- [x] 计网学习 图解HTTP推进度
- [x] 算法题-栈、队列

晚上只能说是很拉跨！早些睡 明天早起些搞react咯！

- [x] 今日总结

## 1.前端基础

- Map对象的初始化方法

给构造函数传入的是一个**二维数组**~

```js
const map = new Map([
	["(", ")"],
    ["[", "]"],
    ["{", "}"]
])
```

20.有效的括号 有感XD



## 2.计网

- HTTP请求报文的构成
- HTTP响应报文的构成
- HTTP是不保存状态的协议



## 3.React

- 结合阮大、官方文档 进行了基础知识的学习，明天要完结基础知识&开始搞项目相关了！
  - JSX
  - 组件
  - Props
  - State
  - Refs

## 4.LeetCode

#### [20. 有效的括号](https://leetcode-cn.com/problems/valid-parentheses/)



# 10.27 *开始学习Vue准备搞真实项目！

今天用来搞框架的时间更多一些！

但是！

如果合理安排时间的话是可以学其他内容的！反思！明天给其他内容多一些时间！

```js
// DDL
	写出第一版简历  11.7
		1.重点掌握HTTP协议，详细了解网络包从客户端到服务端的流程
        2.HTML CSS JS基础良好 
    	3.JS30项目完结并进行重点项目的复习，对特定的项目很有见解。
        4.完结react基础并尽量完成记事本项目！
```



```js
// 今日主要收获 & 学习时间
Totally 480min
1.前端基础知识
// 从早上-中午 拿出一整块时间学习前端基础 晚上跑完步回来继续看~
    1.1 前端基础学习 40min 
    // 红宝书、刷题
		/* 看一些面试题的内容，等搞完react这块儿，把红宝书浏览下就买两本小册用来冲面试了！ */
    1.2 JS 30demos min
    	/*  */

2.核心基础知识 下午开始学计网 + 刷题
	2.1 计网 min
		/*  */
	2.2 操作系统 min
		/*  */

3.面试刷题
	3.1 刷算法 刷力扣 20min	
    	/* 掘金小册 11/28
        	 复习了有效括号*/   
    	// 每个阶段结束后 简单总结下应对某种数据结构/对应类型的题目 应该怎么去想
        1.数组 + 字符串 + 链表 + 二叉树 + 栈/队列 熟练掌握这些数据结构
        2.双指针 + 遍历专题DFS BFS + 递归
        3.回溯算法 + 贪心算法 + 动态规划
        4.了解下前缀和方法 熟练使用哈希表（解决数组问题） 
    
4.前端开发框架 
	4.1 react&Vue学习 220+200min
		/* 狂学react+vue 干就完了！ */
5.其他 
6.每日总结 & 第二天学习规划预告 min
```

> 学习顺序预告
>
> 这里说的实操 都是在 `freecodecamp` 中进行练习

- [x] react基础学习
- [x] 前端面试准备规划
- [x] Vue入门
- [x] 刷题

## 1.前端基础

- 箭头函数&call方法的学习，更进一步了解this指针



## 2.计网



## 3.React & Vue

- 框架真好玩（暂时）冲冲冲！

## 4.LeetCode

#### [20. 有效的括号](https://leetcode-cn.com/problems/valid-parentheses/)

又刷一遍~



# 10.28 *实际外包项目流程初体验orz



```js
// DDL
	写出第一版简历  11.7
		1.重点掌握HTTP协议，详细了解网络包从客户端到服务端的流程
        2.HTML CSS JS基础良好 
    	3.JS30项目完结并进行重点项目的复习，对特定的项目很有见解。
        4.完结react基础并尽量完成记事本项目！学习Vue
```



```js
// 今日主要收获 & 学习时间
Totally 460min
1.前端基础知识
// 从早上-中午 拿出一整块时间学习前端基础 晚上跑完步回来继续看~
    1.1 前端基础学习 30min 
    // 红宝书、刷题
		/* 看一些基础 */
    1.2 JS 30demos min
    	/*  */

2.核心基础知识 下午开始学计网 + 刷题
	2.1 计网 10min
		/* 简单看一些请求的方法 */
	2.2 操作系统 min
		/*  */

3.面试刷题
	3.1 刷算法 刷力扣 60min	
    	/* 掘金小册 11/28
        	 */   
    	// 每个阶段结束后 简单总结下应对某种数据结构/对应类型的题目 应该怎么去想
        1.数组 + 字符串 + 链表 + 二叉树 + 栈/队列 熟练掌握这些数据结构
        2.双指针 + 遍历专题DFS BFS + 递归
        3.回溯算法 + 贪心算法 + 动态规划
        4.了解下前缀和方法 熟练使用哈希表（解决数组问题） 
    
4.前端开发框架 
	4.1 react&Vue学习 180min
		/* Vue文档继续推进度 */
    4.2 项目开发 120min
    	/* 细则讨论+了解分工并了解开发一个企业级项目所需学习的技术栈 */
5.其他 
	数据库作业 15min
    金融学作业 45min
6.每日总结 & 第二天学习规划预告 min
```

> 学习顺序预告
>
> 这里说的实操 都是在 `freecodecamp` 中进行练习

- [x] Vue入门学习
- [x] 图解HTTP
- [x] 刷题
- [x] 金融学作业

## 1.前端基础



## 2.计网



## 3.React & Vue



## 4.LeetCode



# 10.29

沙河半日游，找颖姐玩儿去咯

恰个饭，放松一下~

+晚上陪颖姐玩双人成行，实在不忍心扫她的兴致呐~

今天权当是放松了，明天准备起飞！呼呼呼~

```js
// DDL
	写出第一版简历  11.7
		1.重点掌握HTTP协议，详细了解网络包从客户端到服务端的流程
        2.HTML CSS JS基础良好 
    	3.JS30项目完结并进行重点项目的复习，对特定的项目很有见解。
        4.完结react基础并尽量完成记事本项目！学习Vue
```



```js
// 今日主要收获 & 学习时间
Totally min
1.前端基础知识
// 从早上-中午 拿出一整块时间学习前端基础 晚上跑完步回来继续看~
    1.1 前端基础学习 min 
    // 红宝书、刷题
		/*  */
    1.2 JS 30demos min
    	/*  */

2.核心基础知识 下午开始学计网 + 刷题
	2.1 计网 min
		/*  */
	2.2 操作系统 min
		/*  */

3.面试刷题
	3.1 刷算法 刷力扣 min	
    	/* 掘金小册 11/28
        	 */   
    	// 每个阶段结束后 简单总结下应对某种数据结构/对应类型的题目 应该怎么去想
        1.数组 + 字符串 + 链表 + 二叉树 + 栈/队列 熟练掌握这些数据结构
        2.双指针 + 遍历专题DFS BFS + 递归
        3.回溯算法 + 贪心算法 + 动态规划
        4.了解下前缀和方法 熟练使用哈希表（解决数组问题） 
    
4.前端开发框架 
	4.1 react&Vue学习 90min
		/* 继续搞文档， */
    4.2 项目开发 60min
    	/* 继续了解一些项目细则 */
5.其他 
6.每日总结 & 第二天学习规划预告 min
```

> 学习顺序预告
>
> 这里说的实操 都是在 `freecodecamp` 中进行练习

- [x] Vue入门学习
- [ ] 外出玩耍4小时+
- [ ] 回寝室陪玩游戏4小时+

## 1.前端基础



## 2.计网



## 3.React & Vue



## 4.LeetCode



# 10.30

许久未见的早起

状态给我起来！

```js
// DDL
	写出第一版简历  11.7
		1.重点掌握HTTP协议，详细了解网络包从客户端到服务端的流程
        2.HTML CSS JS基础良好 
    	3.JS30项目完结并进行重点项目的复习，对特定的项目很有见解。
        4.完结react基础并尽量完成记事本项目！学习Vue
```



```js
// 今日主要收获 & 学习时间
Totally 450min
1.前端基础知识
// 从早上-中午 拿出一整块时间学习前端基础 晚上跑完步回来继续看~
    1.1 前端基础学习 160min 
    // 红宝书、刷题
		/* 蚂蚁前端校园行：前端发展概述+UI基础（HTML的一些内容）
        简单完成一个小页面（聊天室的雏形）*/
    1.2 JS 30demos min
    	/*  */

2.核心基础知识 下午开始学计网 + 刷题
	2.1 计网 min
		/*  */
	2.2 操作系统 min
		/*  */

3.面试刷题
	3.1 刷算法 刷力扣 30min	
    	/* 掘金小册 11/28
        	 */   
    	// 每个阶段结束后 简单总结下应对某种数据结构/对应类型的题目 应该怎么去想
        1.数组 + 字符串 + 链表 + 二叉树 + 栈/队列 熟练掌握这些数据结构
        2.双指针 + 遍历专题DFS BFS + 递归
        3.回溯算法 + 贪心算法 + 动态规划
        4.了解下前缀和方法 熟练使用哈希表（解决数组问题） 
    
4.前端开发框架 
	4.1 react&Vue学习 260min
		/* 做markdown编辑器这个demo */
    4.2 项目开发 min
    	/*  */
5.其他 
6.每日总结 & 第二天学习规划预告 min
```

> 学习顺序预告
>
> 这里说的实操 都是在 `freecodecamp` 中进行练习

- [x] Vue入门学习
- [x] 蚂蚁前端课程学习概述 + 规划今天剩余时间的学习内容
- [x] 前端基础学习 做个小demo复习下
- [ ] 总结下明天要搞定的文章~

## 1.前端基础



## 2.计网



## 3.React & Vue



## 4.LeetCode

# 10.31

响了一个小时的闹钟把舍友都摇起来了，就我还在呼呼大睡…

罪恶感爆棚。

晚上状态急剧下滑 缺觉啊！

早睡！

```js
// DDL
	写出第一版简历  11.7
		1.重点掌握HTTP协议，详细了解网络包从客户端到服务端的流程
        2.HTML CSS JS基础良好 
    	3.JS30项目完结并进行重点项目的复习，对特定的项目很有见解。
        4.完结react基础并尽量完成记事本项目！学习Vue
```



```js
// 今日主要收获 & 学习时间
Totally 510min
1.前端基础知识
// 从早上-中午 拿出一整块时间学习前端基础 晚上跑完步回来继续看~
    1.1 前端基础学习 380min 
    // 红宝书、刷题
		/* 蚂蚁前端校园行JS基础
		又见面了 shit原型链
		复习了函数作用域
		复习了
        */
    1.2 JS 30demos min
    	/*  */

2.核心基础知识 下午开始学计网 + 刷题
	2.1 计网 min
		/*  */
	2.2 操作系统 min
		/*  */

3.面试刷题
	3.1 刷算法 刷力扣 50min	
    	/* 掘金小册 11/28
        	 总结之前的专题内容 一口气三篇文~*/   
    	// 每个阶段结束后 简单总结下应对某种数据结构/对应类型的题目 应该怎么去想
        1.数组 + 字符串 + 链表 + 二叉树 + 栈/队列 熟练掌握这些数据结构
        2.双指针 + 遍历专题DFS BFS + 递归
        3.回溯算法 + 贪心算法 + 动态规划
        4.了解下前缀和方法 熟练使用哈希表（解决数组问题） 
    
4.前端开发框架 
	4.1 react&Vue学习 80min
		/* 完结markdown编辑器这个demo
        开启组件的学习*/
    4.2 项目开发 min
    	/*  */
5.其他 
	操作系统实验概述（进程调度算法实验） 60min
6.每日总结 & 第二天学习规划预告 min
```

> 学习顺序预告
>
> 这里说的实操 都是在 `freecodecamp` 中进行练习

- [x] Vue入门学习
- [x] 蚂蚁前端课程学习概述 + 规划今天剩余时间的学习内容
- [x] 算法题总结&继续刷小册
- [x] 阿里练习生笔试
- [ ] 周总结，下周要再规律一些

## 1.前端基础

#### 继承问题

> 通过原型链实现子类对父类的继承
>
> `Child.prototype = new Father();`
>
> 别忘了修正Child类显示原型的`constructor`
>
> `Child.prototype.constructor = Child`



#### 函数特性

```js
// 实际上是通过闭包实现这两个函数特性的！
// 01 函数作用域
// “函数是一等公民，像数据一样传递（Funarg）” 
function bar(){
    // 欢迎来到静态（词法）作用域
    // 因为作用域是静态的，与执行函数上下文的思想不同
    var x = 3;
    function foo(y){
        return x + y;
    }
    return foo;
}
var x = 2;
var f = bar();
console.log(f(3));// 6

// 02 经典面试题
let y = 10;
function foo(){
    console.log(y);
}
function bar2(funcArg){
    let y = 20;
    funcArg();// 调用传入的函数
}
bar2(foo);// 10 在函数声明的地方去找变量！因为“静态”
```





## 2.计网



## 3.React & Vue



## 4.LeetCode

