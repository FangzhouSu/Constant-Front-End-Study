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
Totally 4min
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
- [ ] 搞图床

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
