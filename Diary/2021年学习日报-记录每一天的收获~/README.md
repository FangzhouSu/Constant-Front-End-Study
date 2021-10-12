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

没起来床的一天 下午努努力吼吼

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
Totally min
1.前端基础知识 
// 从早上-中午 拿出一整块时间学习JS 晚上跑完步回来继续看JS
    1.1 前端基础学习 min 
		/*  */
    1.2 freecodecamp JS + 响应式网页设计 min
    	/*  */
    1.3 JS 30demos min
    	/*  */
    1.4 react前置知识 min
    	/*  */

2.核心基础知识 下午开始学计网 + 刷题
	2.1 计网 min
		/*  */
	2.2 操作系统 min
		/*  */

3.面试刷题
	3.1 刷算法 刷力扣 min	
    	/* 掘金小册 7/28 代码随想录
        */   
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
7.每日总结 min
```



> 学习顺序预告
>
> 这里说的实操 都是在 `freecodecamp` 中进行练习

- [ ] Map Set的API总结
- [ ] 看完promise AJAX `axios`  
- [ ] 红宝书
- [ ] JS 实操
- [ ] JS30demos
- [ ] 计网
- [ ] 力扣
- [ ] react文档复习 + 视频学习
- [ ] 晚间JS学习看篇文章 - this问题~ 响应式布局 刷题



## 1.前端基础

### 前端基础知识

```js
1.因为力扣周赛开始进行对哈希表的研究
	Map 具体的API回忆
    Set 具体API回忆
2.异步继续学习
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



#### 2.Set的应用以及API回忆

```js
// 数组去重 
function unique(){
    return [...new Set(arr)];// return Array.from(new Set(arr)) e
}
```



#### 3.继续学习异步编程





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



## 4.前端开发框架

### react学习



