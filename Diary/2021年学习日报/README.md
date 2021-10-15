- [.不断摸索前进方向的开始 9.6-10.10的学习日报 ](./9.6-10.10学习日报)

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
        	两数之和 h*/   
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
Totally 4min
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



## 4.前端开发框架

### react学习
