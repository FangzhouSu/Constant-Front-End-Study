-  不断摸索前进方向的开始 [9.6-10.10的学习日报](./9.6-10.10学习日报)

- 渐入佳境的10月份，明确方向与重要面试时间节点，接触企业级项目的前端开发 [10.11-11.7的学习日报](10.11-11.7学习日报)

> 需要极强时间管理的11月！不要浪费时间！保证规律作息！
>
> - 三门重要专业课的期中、期末考试
> - 信控平台项目的DDL
> - （也许会有？）一些面试

# 11.8 做项目之余不要忘记基本功的扎实！

虽然九点多才爬起来但是状态蛮不错，是睡得比较久的缘故么？

但是下午时间规划差一些，三点多午睡起来之后开始快乐玩耍勒，所幸晚上效率尚可，这要是抓好早上+下午，一天不得学他个十几个小时！😄（做白日梦ing）

```js
// 今日主要收获 & 学习时间
Totally 520min
1.前端基础知识
    1.1 前端基础学习 60min 
    // 红宝书、刷题
		/* this指针的指向复习——谁调用A函数，A函数中的this就指向谁~
		了解了下Cookie中domain字段，存储请求的地址的信息，前后端分离的小概念~
        思考下一些鼠标悬停效果的实现，这个雀氏没想过*/
    1.2 JS 30demos 60min
    	/* 把24 25俩demo简单完成了一下 25中对事件的学习蛮有感觉的~
        26-30的基本模板也整了下*/

2.核心基础知识 下午开始学计网 + 刷题
	2.1 计网 50min
		/* 专题：与HTTP协作的Web服务器：单台虚拟主机实现多个域名 & 通信数据转发程序-代理、网关、隧道（后面两个可以保证数据传输的安全性，回头再学习下） & 保存资源的缓存-使用代理缓存服务器保存资源副本/本地磁盘保存资源副本
        跨域*/
	2.2 操作系统 & 数据库 20min
		/* 数据库作业-是真心看不懂啊，回头赶紧复习吧... */

3.面试刷题
	3.1 刷算法 刷力扣 60min	
    	/* 掘金小册 11/28
        	每日一题，比较简单的一道模拟题，因为对哈希表不熟悉+规则没想明白写了快一个小时！之后做模拟题把思路理清楚！*/   
    	// 每个阶段结束后 简单总结下应对某种数据结构/对应类型的题目 应该怎么去想
        1.数组 + 字符串 + 链表 + 二叉树 + 栈/队列 熟练掌握这些数据结构
        2.双指针 + 遍历专题DFS BFS + 递归
        3.回溯算法 + 贪心算法 + 动态规划
        4.了解下前缀和方法 熟练使用哈希表（解决数组问题） 
    3.2 面试内容 30min
    	/* 看了会儿剑指Offer 早日刷到这个专题呐！（先把基础内容刷了）
        复习下Git的操作，看点儿基础知识刷小册~*/
4.做项目
	4.1 Vue学习 min
		/*  */
    4.2 项目开发 160min
    	/* 项目阶段性汇总+困难总结，这个阶段要完成的是静态页面之上的内容勒！
    	思考前后端交互的实现方式，继续阅读各个组件的代码
    	继续讨论如何完成这个项目~
        */
5.其他 
	周总结 感慨蛮多，距离出去找实习准备工作越来越近勒鸭~ 40min
    windows自带的剪切板没法用勒，下载了个copyQ暂时用它吧！ 40min
```

> 学习顺序预告

- [x] 基础知识学习
- [x] 周总结+上月小结+本月展望
- [x] 项目任务拆分+请求场外援助~
- [x] 今日刷题
- [x] 项目进度推进
- [ ] 复习OS & 数据库
- [x] 看会儿图解网络
- [x] JS30demos简略地完成两个
- [x] 项目内容讨论

## 1.前端基础

- this指针
- cookie中的domain字段

![image-20211108130852905](https://gitee.com/su-fangzhou/blog-image/raw/master/202111081308970.png)

- 前后端分离，前端、后端分别部署在不同的服务器上，但是具体怎么个部署法，细节是啥 还**不清楚**嘞~

## 2.计网

#### 图解HTTP第五章

- 单台虚拟主机实现多个域名 √

- 使用代理服务器实现资源的缓存

  ![image-20211108193724535](https://gitee.com/su-fangzhou/blog-image/raw/master/202111081937786.png)

  - 缓存有效性的检验

  ![image-20211108193903845](https://gitee.com/su-fangzhou/blog-image/raw/master/202111081939994.png)

- 使用客户端本地磁盘保存资源副本实现**缓存**

#### 我们访问一个网页的大致过程（从服务器的角度来看）

> 这个问题是从cookie 的 domain字段的内容引起的！
>
> ![image-20211108200508226](https://gitee.com/su-fangzhou/blog-image/raw/master/202111082005281.png)
>
> 很奇怪这个domain中的“域名”到底是前端服务器的域名还是后端服务器的域名呢？
>
> 为啥前端服务器还要个域名呢？
>
> 知乎一下学习学习

- 前后端交互的过程——
  - cookie生成的时间点

![image-20211108200124299](https://gitee.com/su-fangzhou/blog-image/raw/master/202111082001427.png)

- 拓展下跨域的问题

![image-20211108200133079](https://gitee.com/su-fangzhou/blog-image/raw/master/202111082001136.png)

## 3.Vue

- 总结下项目进度 开始构思如何把数据显现出来（继续读代码）

## 4.LeetCode

#### [299. 猜数字游戏](https://leetcode-cn.com/problems/bulls-and-cows/)

写了个题解[[JavaScript 哈希表]注释齐全的小白模拟解法](https://leetcode-cn.com/problems/bulls-and-cows/solution/javascript-ha-xi-biao-zhu-shi-qi-quan-de-7i79/)

## 5.准备面试~

- 看点小知识点，写写简历咯~

# 11.9 *tag:手忙脚乱

为啥手忙脚乱呢。

- 11.12字节跳动视频面试，也是人生中第一次接收前端开发的面试。

没关系，大方地说出“对不起，我只会这些内容了”是我最后的体面。

- 11.11操作系统期中考试。
- 11.14项目基本页面功能交付。

我….行吧，被DDL逼出最好的自己系列，做完这个项目我继续投简历，来啊，来虐我啊😐

```js
// 今日主要收获 & 学习时间
Totally 470min
1.前端基础知识
    1.1 前端基础学习 40min 
    // 红宝书、刷题
		/* 复习一下闭包（要return 内部函数）、作用域、异步的基础知识，感觉还是很有收获！ */
    1.2 JS 30demos 30min
    	/* demo26，很好看的特效，主要是写两个回调函数然后去监听~重点是设计出对应的CSS样式呐！ */

2.核心基础知识 下午开始学计网 + 刷题
	2.1 计网 30min
		/* 看看计网宏观的科普视频~本来想静下心来看看书，但是被面试的消息搞得有点浮躁！这可不好！
        */
	2.2 操作系统 & 数据库 20min
		/* 简单梳理下期中考试要涉及的内容，下午还得多给点时间看看，另外数据库也得给点时间！
        明天操作系统 多学点儿吧！虽说是期中但也不能啥也写不出来啊！*/

3.面试刷题
	3.1 刷算法 刷力扣 50min	
    	/* 掘金小册 13/28
        	用栈实现队列，走了点弯路（看了眼小册，思路带歪了XD），下次见到它五分钟以内干掉！
        	数据结构相关复习*/   
    	// 每个阶段结束后 简单总结下应对某种数据结构/对应类型的题目 应该怎么去想
        1.数组 + 字符串 + 链表 + 二叉树 + 栈/队列 熟练掌握这些数据结构
        2.双指针 + 遍历专题DFS BFS + 递归
        3.回溯算法 + 贪心算法 + 动态规划
        4.了解下前缀和方法 熟练使用哈希表（解决数组问题） 
    3.2 面试内容 160min
    	/* 接到字节实习生面试的一面通知（这周五 也就是11.12），忐忑+兴奋吧，慌忙规划了一下接下来这几天该怎么同时完成期中考试的准备+面试的准备XD 得出结论，要找时间肝掉一些面试必备知识：扎实的数据结构知识+计网知识，掘金小册仔细看完，Vue的基本使用要会！ 
    	看了看面经，嗯，都不老会的~
    	专心看一些基础-数据结构+计网...另外看了看牛客 模拟面试了一下 懵逼！
    	筛选勒下资源 看看之后咋学*/
4.做项目
	4.1 Vue学习 140min
		/* 学习了一下vuex和vue router，但还是有些一知半解的地方！基础知识没问题了，需要用实际开发熟熟手~ */
    4.2 项目开发 min
    	/*  */
5.其他 
```

> 学习顺序预告

- [x] 基础知识学习（明天请你下床学😐）
- [x] 每日刷题+小册专题推进
- [x] 操作系统复习
- [x] Vue学习
- [x] JS数据结构快速浏览+复习
- [x] JS30demos

突然来了个 小面试，配合上   期中考试和自己贫瘠的基础，突然进入地狱难度了鸭~

## 1.前端基础



## 2.计网



## 3.Vue



## 4.LeetCode

hard难度的祖玛游戏II 我直接一个跳过

二刷了一下 用栈实现队列，倍儿熟啊！对栈&队列这俩数据结构有了更清晰的认知！

## 5.准备面试~

手 忙 脚 乱

# 11.10 

高开低走的一天！反省下自我咯！

```js
// 今日主要收获 & 学习时间
Totally 510min
1.前端基础知识
    1.1 前端基础学习 70min 
    // 红宝书、刷题
		/* 看Promise规范，看一些JS的基础，了解到了为啥typeOf null是object，又是二进制哈~
        学习了一下事件相关，怎么阻止冒泡，怎么取消默认行为的事件*/
    1.2 JS 30demos 160min
    	/* demo26对事件冒泡和事件捕获又有了思考 熟悉了事件监听 熟悉了DOM注册事件的操作（三种方法）
    	 */

2.核心基础知识 下午开始学计网 + 刷题
	2.1 计网 60min
		/* 看了HTTP首部的一些内容~知识广度++（图解HTTP很细致！
        */
	2.2 操作系统 & 数据库 100min
		/* 复习~就学下信号量、调度算法的内容了！ */

3.面试刷题
	3.1 刷算法 刷力扣 80min	
    	/* 掘金小册 14/28
        	每日一题（简单的数组模拟题）+双端队列解决滑窗问题*/   
    	// 每个阶段结束后 简单总结下应对某种数据结构/对应类型的题目 应该怎么去想
        1.数组 + 字符串 + 链表 + 二叉树 + 栈/队列 熟练掌握这些数据结构
        2.双指针 + 遍历专题DFS BFS + 递归
        3.回溯算法 + 贪心算法 + 动态规划
        4.了解下前缀和方法 熟练使用哈希表（解决数组问题） 
    3.2 面试内容 min
    	/* 扎实的数据结构知识+计网知识，掘金小册仔细看完，Vue的基本使用要会！ 
    	*/
4.做项目
	4.1 Vue学习 min
		/* 看看基础知识点 */
    4.2 项目开发 20min
    	/* 整理下第一阶段的项目进度 */
5.其他 
	人工智能作业应付下咯~强化学习的内容XD还是很好玩儿（数学）的~ 20min
```

> 学习顺序预告

- [x] 基础知识学习（实在太冷了😐我也想早点下床嘛八点多抵达教室，还行吧~）
- [x] 每日刷题，看小册巩固双端队列 做了道困难题 双端队列思想本身不很难，维护双端队列时的思想是关键
- [x] 看计网
- [x] 人工智能作业
- [x] 看JS CSS基础的一些知识点~补充学习
- [x] JS30demos快速完成计时器的内容~暂时告一段落咯！
- [x] 项目进度推进一些，看看Vue基础知识~
- [x] 操作系统-信号量+内存管理ppt复习（聚焦于调度算法）
- [x] 睡前看Vue相关面试题~

## 1.前端基础



## 2.计网

#### HTTP首部的内容

> 更多具体细节一定要多读一下《图解HTTP》！讲得可详细了~

![image-20211110102718109](https://gitee.com/su-fangzhou/blog-image/raw/master/202111101027457.png)

##### 通用首部字段

通用首部字段是指，请求报文和响应报文双方**都会使用的首部**。

![image-20211110112720637](https://gitee.com/su-fangzhou/blog-image/raw/master/202111101127702.png)

##### 请求首部字段

请求首部字段是从客户端往服务器端**发送请求报文中所使用的字段**， 用于**补充**请求的附加信息、客户端信息、对响应内容相关的优先级等内容。

![image-20211110112742415](https://gitee.com/su-fangzhou/blog-image/raw/master/202111101127565.png)

##### 响应首部字段

响应首部字段是由服务器端向客户端返回响应报文中所使用的字段， 用于**补充**响应的附加信息、服务器信息，以及对客户端的附加要求等信息。

![image-20211110112751761](https://gitee.com/su-fangzhou/blog-image/raw/master/202111101127907.png)

##### 实体首部字段

实体首部字段是包含在请求报文和响应报文中的**实体部分所使用的首部**，用于**补充**内容的更新时间等与实体相关的信息。

![image-20211110112758301](https://gitee.com/su-fangzhou/blog-image/raw/master/202111101127448.png)

##### 为Cookie服务的首部字段

![image-20211110113059259](https://gitee.com/su-fangzhou/blog-image/raw/master/202111101130537.png)

两个很重要的首部字段！！

![image-20211110113114974](https://gitee.com/su-fangzhou/blog-image/raw/master/202111101131098.png)

简单解析

- 服务器发给客户端的报文中携带的Set-Cookie字段

![image-20211110113140853](https://gitee.com/su-fangzhou/blog-image/raw/master/202111101131989.png)

- 客户端发给服务端的报文中携带的Cookie字段

![image-20211110113242041](https://gitee.com/su-fangzhou/blog-image/raw/master/202111101132222.png)

## 3.Vue



## 4.LeetCode

#### [495. 提莫攻击](https://leetcode-cn.com/problems/teemo-attacking/)-数组模拟

#### [239. 滑动窗口最大值](https://leetcode-cn.com/problems/sliding-window-maximum/)-双端队列

## 5.准备面试~

# 11.11 *OS期中考试混过去勒！接下来要更专注地学习！

- 操作系统期中考完了。感悟是：以后每天真的要学一些了！这么下去期末危啊！另外数据库…也赶紧学起来吧XD
- 字节的面试推到了下周五11.19-生存时间++ 多刷一下面试题，好好看看项目咯！

是因为面试没了+刚考完试松懈+没睡午觉糟心得麽？状态略差呐~这可不行！我决定了明天还是早起出去然后中午在外面睡了午觉再回寝室吧！寝室舍友打游戏太吵了！难过😢

晚上状态也不行。没啥好说的 明天努力吧。

```js
// 今日主要收获 & 学习时间
Totally 400min
1.前端基础知识
    1.1 前端基础学习 140min 
    // 红宝书、刷题
		/* web API相关的基础知识刷一刷~
        跟着小青蛙可视化网站通过24个练习学习flex布局
        从鲨鱼哥那里拿学习资料，clone下来放桌面上看一看咯~*/
    1.2 JS 30demos min
    	/*  */

2.核心基础知识 下午开始学计网 + 刷题
	2.1 计网 50min
		/* 复习下HTTPS+学习一下SPDY消除HTTP协议的一些性能瓶颈-包括AJAX comet技术都是来源于此 */
	2.2 操作系统 & 数据库 110min
		/* 最后复习下调度算法+信号量的内容，期中考试50分钟写得很懵逼QAQ */

3.面试刷题
	3.1 刷算法 刷力扣 10min	
    	/* 掘金小册 14/28
        	抄了一道困难的动归~不会啊！回头要赶紧撸这里的专题！*/   
    	// 每个阶段结束后 简单总结下应对某种数据结构/对应类型的题目 应该怎么去想
        1.数组 + 字符串 + 链表 + 二叉树 + 栈/队列 熟练掌握这些数据结构
        2.双指针 + 遍历专题DFS BFS + 递归
        3.回溯算法 + 贪心算法 + 动态规划
        4.了解下前缀和方法 熟练使用哈希表（解决数组问题） 

4.做项目
	4.1 Vue学习 min
		/*  */
    4.2 项目开发 30min
    	/* 拉一下项目代码，看一下对应页面的实现方法 */
5.其他 
	金融学作业顺便看个国足~rz 60min
```

> 学习顺序预告

- [x] 准备操作系统考试
- [x] 计网基础知识
- [x] 每日刷题
- [x] 刷一下基础知识
- [ ] 项目进度推进
- [x] 金融作业

## 1.前端基础

- 简单系统学习下flex布局，之前只是“用过”~

## 2.计网

- 图解HTTP真是本入门用的好书！

## 3.Vue



## 4.LeetCode

- 629. K个逆序对数组 每日一题hard+动归。。

# 11.12 

昨天（确切说是今天）看国足+玩游戏有点兴奋，折腾到两点才睡！不该！下回不看了（真的….）

被今天的课搞起来，状态还可以吧，中午睡一下把状态找回来一点。

今天得**推进项目进度**勒！活儿全让朱神干了QAQ，努力！

下午+晚上贯彻到底的颓靡…这是咋了😂**破纪录**的低效啊！这可不行，明天恢复状态！！

```js
// 今日主要收获 & 学习时间
Totally 260min
1.前端基础知识
    1.1 前端基础学习 30min 
    // 红宝书、刷题
		/* 看了一看基础知识~ */
    1.2 JS 30demos min
    	/*  */

2.核心基础知识 下午开始学计网 + 刷题
	2.1 计网 60min
		/* 一刷图解HTTP完成！下阶段计网学习计划-网络是怎样连接的 + 图解HTTP二刷（再悄悄看看八股文🧑‍💻） */
	2.2 操作系统 & 数据库 min
		/*  */

3.面试刷题
	3.1 刷算法 刷力扣 80min	
    	/* 掘金小册 14/28
        	复习勒DFS-栈思想 回顾了下BFS-队列思想 复习一下经典BFS题 二叉树的层序遍历*/   
    	// 每个阶段结束后 简单总结下应对某种数据结构/对应类型的题目 应该怎么去想
        1.数组 + 字符串 + 链表 + 二叉树 + 栈/队列 熟练掌握这些数据结构
        2.双指针 + 遍历专题DFS BFS + 递归
        3.回溯算法 + 贪心算法 + 动态规划
        4.了解下前缀和方法 熟练使用哈希表（解决数组问题） 

4.做项目
	4.1 Vue学习 min
		/*  */
    4.2 项目开发 90min
    	/* 合并下之前的项目，处理一堆报错。。。 */
5.其他 
```

> 学习顺序预告

- [x] 看点儿计网
- [x] 每日刷题
- [x] 肝项目
- [x] 梳理下前端三件套基础

## 1.前端基础



## 2.计网

- 一刷图解HTTP完结

## 3.Vue



## 4.LeetCode

- 抄 375. 猜数字大小 II dp中等题我也做不来啊！（且看不懂）

- DFS BFS专题 [102. 二叉树的层序遍历](https://leetcode-cn.com/problems/binary-tree-level-order-traversal/)



# 11.13

早起去沙河校区探亲~

今天恢复状态！把昨天没学的学回来！！

状态起伏大了些，晚上注意力集中得不错，看来还是专心做项目更能让人精力集中呐！

明天项目大体上要搞定了！

```js
// 今日主要收获 & 学习时间
Totally 490min
1.前端基础知识
    1.1 前端基础学习 110min 
		/* 看了一下web API的内容
        复习下HTML CSS基础*/
    1.2 JS 30demos min
    	/*  */

2.核心基础知识 下午开始学计网 + 刷题
	2.1 计网 30min
		/* 复习下HTTP协议相关的基础知识~ */
	2.2 操作系统 & 数据库 min
		/*  */

3.面试刷题
	3.1 刷算法 刷力扣 150min	
    	/* 掘金小册 16/28
        	递归+DFS思想复习一遍
        	周赛-被虐 “暴力法是解决不了问题的，请选择更高级的思想-dp√”*/   
    	// 每个阶段结束后 简单总结下应对某种数据结构/对应类型的题目 应该怎么去想
        1.数组 + 字符串 + 链表 + 二叉树 + 栈/队列 熟练掌握这些数据结构
        2.双指针 + 遍历专题DFS BFS + 递归
        3.回溯算法 + 贪心算法 + 动态规划
        4.了解下前缀和方法 熟练使用哈希表（解决数组问题） 

4.做项目
	4.1 Vue学习 min
		/*  */
    4.2 项目开发 200min
    	/*  */
5.其他 
```

> 学习顺序预告

- [x] JS基础知识-校车上看
- [x] 每日刷题
- [x] 计网小知识
- [x] 前端三件套基础知识复习
- [x] 项目进度推进，读代码，更新功能
- [x] 力扣周赛
- [ ] 前端基础睡前复习+录个起床铃

## 1.前端基础



## 2.计网



## 3.Vue



## 4.LeetCode

- [520. 检测大写字母](https://leetcode-cn.com/problems/detect-capital/) easy~
- 复习一下“有效的括号” 主要是因为上力扣发现有人在评论区跟我讨论这个 那时候我还用着Java刷题！嗨呀！
- 周赛又跪在一道medium上了。。超时！用的暴力解，小规模用例都没毛病。这题，得想个方法优化——不要每个数都从头比对！明天看看题解

![image-20211114001037876](https://gitee.com/su-fangzhou/blog-image/raw/master/202111140010116.png)

```js
var maximumBeauty = function(items, queries) {
    // 用了个冒泡把二维数组按照第一个值排了个序
    for(let i = 0; i < items.length - 1; i++){
        for(let j = 0; j < items.length - i - 1; j++){
            if(items[j][0] > items[j + 1][0]){
                [items[j], items[j + 1]] = [items[j + 1], items[j]]
            }
        }
    }

    let ans = [];
    for(let i = 0; i < queries.length; i++){
        let tempMax = 0;
        let temp = 0;
        while(true){
            // 就是这里时间复杂度太高了！
            let price = items[temp][0];
            let beauty = items[temp][1];
            if(price <= queries[i]){
                tempMax = tempMax > beauty ? tempMax : beauty;
                temp++;
            }
            // 遍历完一遍才将答案入数组。。工作量巨大！
            if(queries[i] < price || temp >= items.length){
                ans.push(tempMax);
                break;
            }
        }
    }
    return ans;
};
```

# 11.14

十一点才从床上爬下去。。优秀如我，不过睡是睡够了XD挺精神的！

狂刷项目的一天

之前给自己挖太多坑了！！

总之，下周继续加油！要准备人生第一次面试了！

```js
// 今日主要收获 & 学习时间
Totally 580min
1.前端基础知识
    1.1 前端基础学习 30min 
		/* 继续抽空复习前端三件套基础
        着重又看了下Map数据结构（力扣每日一题碰到了）总结了一些内容到知识库认识更深一些了！*/
    1.2 JS 30demos min
    	/*  */

2.核心基础知识 下午开始学计网 + 刷题
	2.1 计网 min
		/*  */
	2.2 操作系统 & 数据库 min
		/*  */

3.面试刷题
	3.1 刷算法 刷力扣 10min	
    	/* 掘金小册 16/28
        	仓促地刷掉每日一题*/   
    	// 每个阶段结束后 简单总结下应对某种数据结构/对应类型的题目 应该怎么去想
        1.数组 + 字符串 + 链表 + 二叉树 + 栈/队列 熟练掌握这些数据结构
        2.双指针 + 遍历专题DFS BFS + 递归
        3.回溯算法 + 贪心算法 + 动态规划
        4.了解下前缀和方法 熟练使用哈希表（解决数组问题） 

4.做项目
	4.1 Vue学习 min
		/*  */
    4.2 项目开发 540min
    	/* 尝试写一些假数据到页面上，好测试一下点击效果是否可用
        疯狂推项目得进度，差不多完成绿波带和子区配置得效果，但是还有好多细节要搞！*/
5.其他 
```

> 学习顺序预告

- [x] 搞项目
- [x] 每日一题
- [x] 睡前看下前端基础

## 1.前端基础



## 2.计网



## 3.Vue

- 搞 项 目

## 4.LeetCode

[677. 键值映射](https://leetcode-cn.com/problems/map-sum-pairs/)

# 11.15

又是十点半才从床上爬下去。。明天开始早上得锁机。。

下午高效了两个多小时 晚饭回来学习力生产力降到0

nice！！！！！！！！！！！！！

明天找回状态吧 今天得是破了记录了吧 麻了(⊙﹏⊙)

```js
// 今日主要收获 & 学习时间
Totally 240min
1.前端基础知识
    1.1 前端基础学习 170min 
		/* 刷了一下CSS基础知识 门道儿真多 布局真烦！但是基础也得扎实鸭~ */
    1.2 JS 30demos min
    	/*  */

2.核心基础知识 下午开始学计网 + 刷题
	2.1 计网 40min
		/* 看看HTTP HTTPS协议相关知识 */
	2.2 操作系统 & 数据库 min
		/*  */

3.面试刷题
	3.1 刷算法 刷力扣 20min	
    	/* 掘金小册 16/28
        	DFS思想+递归解决全排列*/   
    	// 每个阶段结束后 简单总结下应对某种数据结构/对应类型的题目 应该怎么去想
        1.数组 + 字符串 + 链表 + 二叉树 + 栈/队列 熟练掌握这些数据结构
        2.双指针 + 遍历专题DFS BFS + 递归
        3.回溯算法 + 贪心算法 + 动态规划
        4.了解下前缀和方法 熟练使用哈希表（解决数组问题） 

4.做项目
	4.1 Vue学习 min
		/*  */
    4.2 项目开发 10min
    	/*  */
5.其他 
```

> 学习顺序预告

- [x] 看计网基础
- [x] 前端基础复习
- [x] 每日一题 算法小册进度继续推~
- [x] 睡前前端基础复习+小结

## 1.前端基础

- CSS加载性能
- z-index失效

父元素相对定位，改一种定位方法；元素本身没设置定位，设一个定位；元素本身设置了浮动，去掉浮动

- 布局单位

![](https://gitee.com/su-fangzhou/blog-image/raw/master/202111151639636.png)

- line-height

把 line-height 值设置为 height 一样大小的值可以**实现单行文字的垂直居中**；

一个容器没有设置高度，那么撑开容器高度的是 line-height，而不是容器内的文本内容；

## 2.计网



## 3.Vue



## 4.LeetCode

- 脑筋急转弯题 直接抄了 319. 灯泡开关

# 11.16

早上还是没起来！另外下午吃完饭回来颓了一会儿，晚上上完琴课颓了一会儿 加上和两位学长聊了聊天，又浪费了一会儿 整体状态就没那么好！

明天知道该怎么做吧！

```js
// 今日主要收获 & 学习时间
Totally 470min
1.前端基础知识
    1.1 前端基础学习 110min 
		/* JS基础，看了看隐式类型转换的内容
        又看了看数组去重，对数组的熟练程度++
        总结下目前知识储备，更新下个人前端能力画像~
        JS的new关键字干啥的？再复习一下~*/
    1.2 JS 30demos min
    	/*  */

2.核心基础知识 下午开始学计网 + 刷题
	2.1 计网 min
		/*  */
	2.2 操作系统 & 数据库 min
		/*  */

3.面试刷题
	3.1 刷算法 刷力扣 160min	
    	/* 掘金小册 16/28
        	我超 回溯算法太恶心了 不过套路感十足啊！了解了一下回溯的思想，好玩儿！算法还是好玩儿的！就是太难了XD*/   
    	// 每个阶段结束后 简单总结下应对某种数据结构/对应类型的题目 应该怎么去想
        1.数组 + 字符串 + 链表 + 二叉树 + 栈/队列 熟练掌握这些数据结构
        2.双指针 + 遍历专题DFS BFS + 递归
        3.回溯算法 + 贪心算法 + 动态规划
        4.了解下前缀和方法 熟练使用哈希表（解决数组问题） 

4.做项目
	4.1 Vue学习 60min
		/* 看了下组件间通信的内容，下午在实际项目中试一下 */
    4.2 项目开发 100min
    	/* 解决一些bug，做一些新的业务 */
5.其他 
	和16和18级的学长聊了下~进大厂的自信心又++勒？学长让我抓紧时间去实习（学三个月前端？实习轻松进！（真的么...））40min
```

> 学习顺序预告

- [x] 简单学习下Vue的基础
- [x] 每日一题+小册进度推进l
- [x] JS基础复习~
- [x] 总结下个人前端开发知识掌握程度-让他人/自己更了解自己！
- [x] 项目中的绿波带状态栏在点击下发按钮后进行更改 点击进入配置详情页面之后隐藏地图配置图层
- [ ] 睡前前端基础复习+小结

## 1.前端基础

- [隐式类型转换](https://juejin.cn/post/7022837573059870727)
- [数组塌陷现象](https://blog.csdn.net/thunderevil35/article/details/80514680)——从[数组查重](https://juejin.cn/post/6844903981311852557)的一个[好方法](https://juejin.cn/post/6844903981311852557#heading-10)里看到了这个

```js
let arr = [12,1,12,3,1,88,66,9,66];
function unique(arr) {
    let obj = {};
    for(let i=0;i<arr.length;i++){
        let cur = arr[i];
        if(obj[cur]){// 如果当前遍历到的元素之前碰到过，进入逻辑把它从arr中删了
            // 01 删除重复元素法一
            arr.splice(i,1);// 导致数组塌陷——用i--的方式规避数组塌陷！
            // 删除重复元素法二
            // arr[i]=arr[arr.length-1];// 重复元素的坑给数组最后一个元素勒
            // arr.length--;// 删除最后一项
            console.log(i);// 2 4 6
            // 02 对重复元素进行操作之后 手动将索引值-1 保证数组的每一项都被遍历~
            i--;// 注意！删了这个元素之后它之后的数组元素都提前勒！要倒回去一个索引获得原本的下一个数组元素。
            continue;// 跳过obj[cur] = cur，给i加上1 进入下一轮循环（其实这句不加也无所谓，给对象重复赋值也没啥影响~）
        }
        obj[cur]=cur;// 给obj新增键值对；属性名和属性值是一样的
    }
}
unique(arr);
console.log(arr);// 法一答案 [12, 1, 3, 88, 66, 9] 法二答案 [12, 1, 66, 3, 9, 88] 
```

- 数组塌陷

对数组进行操作的时候，会使数组的长度产生变化，同时**操作的数组那个项的下一个索引会被跳过**，从而造成数组的某项会被跳过

- [new关键字的作用](https://juejin.cn/post/7012887169878458404/) 一些细节又学习了一下~

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f493f86148bf4a3c888e34b6f6fd79c1~tplv-k3u1fbpfcp-watermark.awebp?)

手写new过程

```js
 new Person('bill',21) = {
     // 01 新建空对象实例
     var person = {};
     // 02 将构造函数的原型绑定到新创的对象实例上
     person.__proto__ = Person.prototype;
     // 03 调用构造函数并获得返回值res
     var res = Person.call(person, 'bill', 21);
     // 04 判断构造函数的返回值类型，如果res为对象类型，new Person的最终结果为res 而非我们想要的那个实例对象person！
     let isObject = typeof res === 'object' && res !== null;//判断res是否为对象
     // 额外注意 typeof null = object 
     let isFunction = typeof res === 'function';
     // 05 如果构造函数的返回值为对象类型
         //（比如{text: 'fake~'}），则调用new Person('bill', 21)会返回{text: 'fake~'}.
     // 如果返回值不是对象类型就返回之前新建的实例对象person
     return isObject || isFunction ? res : person;
 }

```

- `display:none` `visibility:hidden`的区别

  1.display:none是彻底消失，**不在文档流中占位**，浏览器也不会解析该元素；visibility:hidden是视觉上消失了，可以理解为透明度为0的效果，**在文档流中占位**，浏览器会解析该元素；

  ![image-20211116222402053](https://gitee.com/su-fangzhou/blog-image/raw/master/202111162224130.png)

  2.使用visibility:hidden比display:none性能上要好，

  - display:none切换显示时页面产生**回流**（当页面中的一部分元素需要改变规模尺寸、布局、显示隐藏等，页面重新构建，此时就是回流。所有页面第一次加载时需要产生一次回流），
  - 而visibility切换是否显示时则**不会引起回流**。

## 2.计网



## 3.Vue



## 4.LeetCode

- 每日一题又是困难，抄了。
- 学习回溯算法的思想，递归真烧脑啊！

# 11.17

十一点爬下床的我像个小丑🦹请改掉床上看技术文章的习惯，很空虚欸！踏踏实实坐在电脑桌前好吧！

感觉下午状态还蛮好的，为啥今天就学了这么一会儿捏…

明天balance一下刷题和前端基础嗷！后天面试哩！激动+紧张嘿嘿

```js
// 今日主要收获 & 学习时间
Totally 410min
1.前端基础知识
    1.1 前端基础学习 120min 
		/* 看了些面试题和JS基础知识，感觉手写体&数组API这里自己还是有欠缺啊！
		更新前端三件套主要学习内容
		数组API复习一波~
		复习了一下逻辑运算符，位运算 */
    1.2 JS 30demos 50min
    	/* 简单完结这个项目的一刷，回头再看一遍！ */

2.核心基础知识 下午开始学计网 + 刷题
	2.1 计网 40min
		/* 数据包在网络中遨游的具体流程~ */
	2.2 操作系统 & 数据库 min
		/*  */

3.面试刷题
	3.1 刷算法 刷力扣 80min	
    	/* 掘金小册 16/28
        	回顾二叉树几道题的迭代法，回顾了一下三数之和 */   
    	// 每个阶段结束后 简单总结下应对某种数据结构/对应类型的题目 应该怎么去想
        1.数组 + 字符串 + 链表 + 二叉树 + 栈/队列 熟练掌握这些数据结构
        2.双指针 + 遍历专题DFS BFS + 递归
        3.回溯算法 + 贪心算法 + 动态规划
        4.了解下前缀和方法 熟练使用哈希表（解决数组问题） 

4.做项目
	4.1 Vue学习 20min
		/* 继续了解下组件间通信的内容，和Vue基础知识点 */
    4.2 项目开发 40min
    	/* debug... */
5.其他 
	写写面试自我介绍咯~ 60min
```

> 学习顺序预告

- [x] 前端三件套基础复习
- [x] 计网基础复习
- [x] 每日一题+二叉树经典题
- [x] JS30demos-29
- [x] 项目进度推进
- [ ] 前端三件套继续复习

## 1.前端基础

- 逻辑运算符 写了篇 [位运算基础知识-按位与& 按位或| 异或^ 短路运算符（逻辑与&& 逻辑或||）](https://blog.csdn.net/qq_45704942/article/details/121379696)

## 2.计网

- 数据包在网络中遨游的具体流程~ 

## 3.Vue

- v-show VS v-if

![image-20211117113655628](https://gitee.com/su-fangzhou/blog-image/raw/master/202111171136710.png)

## 4.LeetCode

- #### [318. 最大单词长度乘积](https://leetcode-cn.com/problems/maximum-product-of-word-lengths/)

下面两题的迭代解法~一个道理的

- #### [144. 二叉树的前序遍历](https://leetcode-cn.com/problems/binary-tree-preorder-traversal/)

- #### [145. 二叉树的后序遍历](https://leetcode-cn.com/problems/binary-tree-postorder-traversal/)

```js
const postorderTraversal = function(root) {
  // 定义结果数组 —— 这里是个队列（头插-保证根节点是最后进去的）
  const res = []  
  // 处理边界条件
  if(!root) {
      return res
  }
  // 初始化栈结构
  const stack = [] 
  // 首先将根结点入栈
  stack.push(root)  
  // 若栈不为空，则重复出栈、入栈操作
  while(stack.length) {
      // 将栈顶结点记为当前结点
      const cur = stack.pop() 
      // 当前结点就是当前子树的根结点，把这个结点放在结果数组的头部
      res.unshift(cur.val)
      // 若当前子树根结点有左孩子，则将左孩子入栈
      if(cur.left) {
        stack.push(cur.left)
      }  
      // 若当前子树根结点有右孩子，则将右孩子入栈 - 右孩子先出栈插到res队头 保证右孩子在左孩子后面
      if(cur.right) {
        stack.push(cur.right)
      }
  }
  // 返回结果数组
  return res
};
```



# 11.18

又是十点才下床，而且真的是十点才醒。额…感觉还是晚睡的锅吧。我慢慢调整咯！

晚上搞完项目那会儿得玩儿了俩小时！所以睡眠时间被压缩了，蓝瘦！

```js
// 今日主要收获 & 学习时间
Totally 570min
1.前端基础知识
    1.1 前端基础学习 320min 
		/* HTML CSS基础
        原型链复习
        对象的隐式类型转换复习
        CSS复习*/
    1.2 JS 30demos min
    	/*  */

2.核心基础知识 下午开始学计网 + 刷题
	2.1 计网 min
		/*  */
	2.2 操作系统 & 数据库 min
		/*  */

3.面试刷题
	3.1 刷算法 刷力扣 70min	
    	/* 掘金小册 16/28
        	 回顾一下合并有序的数组 看看二叉树问题的迭代实现，复习DFS深搜解题*/   
    	// 每个阶段结束后 简单总结下应对某种数据结构/对应类型的题目 应该怎么去想
        1.数组 + 字符串 + 链表 + 二叉树 + 栈/队列 熟练掌握这些数据结构
        2.双指针 + 遍历专题DFS BFS + 递归
        3.回溯算法 + 贪心算法 + 动态规划
        4.了解下前缀和方法 熟练使用哈希表（解决数组问题） 

4.做项目
	4.1 Vue学习 min
		/*  */
    4.2 项目开发 170min
    	/* 修改之前bug 完成地图切换过程中图层的隐藏 左侧状态栏的显示完成 */
5.其他 
	改进一下面试自我介绍~ 10min
```

> 学习顺序预告

- [x] 前端三件套继续复习~
- [ ] 计网复习
- [x] 树的题大致刷完+每日一题
- [x] 搞项目

## 1.前端基础

- [原型链复习](https://juejin.cn/post/7011719899634630692)

- [对象的隐式类型转换复习](https://juejin.cn/post/7022837573059870727)
- 隐藏元素的方法有哪些
- display:none 与 visibility:hidden 的区别
- Sass、Less 是什么？为什么要使用他们？
  - 预处理器，其实就是 CSS 世界的“轮子” 预处理器支持我们写一种类似 CSS、但实际并不是 CSS 的语言，然后把它编译成 CSS 代码：
  - 主要是因为写起来好看懂一些（工程师说得~）
- 媒体查询
  - link元素中 使用 media属性
  - 在style标签中 @media
- z-index 属性在什么情况下会失效
- em 和 rem的区别
- **vw/vh** 和百分比很类似，两者的区别
- 一般两栏布局指的是**左边一栏宽度固定，右边一栏宽度自适应**，两栏布局的具体实现
-  对 BFC 的理解，如何创建 BFC  盒模型块级上下文格式化
  - Box: **Box** 是 CSS 布局的对象和基本单位，⼀个页面是由很多个 Box 组成的，这个 Box 就是我们所说的盒模型。
  - **Formatting context**：块级上下⽂格式化，它是⻚⾯中的⼀块渲染区域，并且有⼀套渲染规则，它决定了其⼦元素将如何定位，以及和其他元素的关系和相互作⽤。

实现自适应两栏布局可以给左边设置浮动 右边设置`overflow: hidden`。这样右边就触发了 BFC，BFC 的区域不会与浮动元素发生重叠，所以两侧就**不会发生重叠**。

- 元素的层叠顺序

![img](https://imgconvert.csdnimg.cn/aHR0cHM6Ly91cGxvYWQtaW1hZ2VzLmppYW5zaHUuaW8vdXBsb2FkX2ltYWdlcy8xODcyMDM1OC0xMjlhMmMzMWIyN2Y3YzU1LnBuZw)

- 层叠上下文是个啥欸！
- sticky 粘性定位

粘性定位的元素是依赖于用户的滚动，在 **position:relative** 与 **position:fixed** 定位之间切换。

- 它的行为就像 **position:relative;** 
- 而当页面滚动超出目标区域时，它的表现就像 **position:fixed;**，它会固定在目标位置。

元素定位表现为在跨越特定阈值前为相对定位，之后为固定定位。这个特定阈值指的是 top, right, bottom 或 left 之一，换言之，指定 top, right, bottom 或 left 四个阈值其中之一，才可使粘性定位生效。**否则其行为与相对定位相同**。

- [JavaScript toString() 方法](https://www.w3school.com.cn/jsref/jsref_tostring_number.asp)

toString方法在Object的显示原型上，其他对象对toString方法进行了重写~

![image-20211119083904566](https://gitee.com/su-fangzhou/blog-image/raw/master/202111190839663.png)

toString() 方法可把一个 Number 对象转换为一个字符串，并返回结果。

语法

```js
NumberObject.toString(radix)// radix就是指进制数
```

比较有趣的一个点

![image-20211118184251915](https://gitee.com/su-fangzhou/blog-image/raw/master/202111181842996.png)

小数居然算是`NumberObject`…？ ==存疑！==

看了下MDN [Number.prototype.toString()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/toString) 依旧困惑。暂且记住好了 

- (10) 是 numObj  10不是
- (0.6) 是 numObj 0.6也是numObj

![image-20211118191027604](https://gitee.com/su-fangzhou/blog-image/raw/master/202111181910721.png)

> ```js
> var count = 10;
> 
> console.log(count.toString());    // 输出 '10'
> console.log((17).toString());     // 输出 '17'
> console.log(17.toString());     // Uncaught SyntaxError: Invalid or unexpected token
> console.log((17.2).toString());   // 输出 '17.2'
> console.log(17.2.toString());   // 输出 '17.2'
> 
> var x = 6;
> 
> console.log(x.toString(2));       // 输出 '110'
> console.log((254).toString(16));  // 输出 'fe'
> 
> console.log((-10).toString(2));   // 输出 '-1010'
> console.log((-0xff).toString(2)); // 输出 '-11111111'
> ```
>
> 

- 利用这个方法 配合 [`substr()`方法](https://www.runoob.com/jsref/jsref-substr.html) 可以实现**随机验证码生成**

```js
Math.random().toString(36).substr(2, 10);// 以36进制将随机数转换为随机字符串，从得到的随机字符串的第二位开始拿10个字符~根本重复不了！
```

以36进制将随机数转换为随机字符串，从得到的随机字符串的第二位开始拿10个字符~根本重复不了！

![image-20211118184717386](https://gitee.com/su-fangzhou/blog-image/raw/master/202111181847459.png)



## 2.计网



## 3.Vue

继续肝项目 学到了v-if在实际开发中常用~（用于组件的切换啥的） v-show一般就是切换一个单独元素的状态，用的较少

## 4.LeetCode

#### [563. 二叉树的坡度](https://leetcode-cn.com/problems/binary-tree-tilt/)

```js
var findTilt = function(root) {
    let ans = 0;
    const dfs = (node) => {
        if (!node) {
            return 0;
        }
        const sumLeft = dfs(node.left);
        const sumRight = dfs(node.right);
        ans += Math.abs(sumLeft - sumRight);
        return sumLeft + sumRight + node.val;
    }
    dfs(root);
    return ans;
};
```



# 11.19 *【人生第一面】ByteDance一面

今日份大事件-人生第一次面试！！

对问答题的表现还算自我满意吧，大概都能聊两句，但是算法题做得太糟糕了！

```js
// 今日主要收获 & 学习时间
Totally 55min
1.前端基础知识
    1.1 前端基础学习 300min 
		/* JS基础复习一下~
        人生第一面~基础知识都能答上来，算法题GG
        面试总结！*/
    1.2 JS 30demos min
    	/*  */

2.核心基础知识 下午开始学计网 + 刷题
	2.1 计网 min
		/*  */
	2.2 操作系统 & 数据库 min
		/*  */

3.面试刷题
	3.1 刷算法 刷力扣 190min	
    	/* 掘金小册 16/28
        	面试前多刷了一些题~*/   
    	// 每个阶段结束后 简单总结下应对某种数据结构/对应类型的题目 应该怎么去想
        1.数组 + 字符串 + 链表 + 二叉树 + 栈/队列 熟练掌握这些数据结构
        2.双指针 + 遍历专题DFS BFS + 递归
        3.回溯算法 + 贪心算法 + 动态规划
        4.了解下前缀和方法 熟练使用哈希表（解决数组问题） 

4.做项目
	4.1 Vue学习 min
		/*  */
    4.2 项目开发 60min
    	/* 推进项目进度 都是一些机械化的工作！ */
5.其他 
```

> 学习顺序预告

- [ ] 前端三件套继续复习~
- [ ] 计网复习
- [ ] 树的题大致刷完+每日一题
- [ ] 搞项目

## 1.前端基础

- **存在性判定**：在过去，当判断一个字符/字符串是否在某字符串中时，只能用 indexOf > -1 来做。现在 ES6 提供了三个方法：includes、startsWith、endsWith，它们都会返回一个布尔值来告诉你是否存在。

- - **includes**：判断字符串与子串的包含关系：

```js
const son = 'haha' 
const father = 'xixi haha hehe'
father.includes(son) // true
```

- - **startsWith**：判断字符串是否以某个/某串字符开头：

```js
const father = 'xixi haha hehe'
father.startsWith('haha') // false
father.startsWith('xixi') // true
```

- - **endsWith**：判断字符串是否以某个/某串字符结尾：

```js
const father = 'xixi haha hehe'
  father.endsWith('hehe') // true
```

- **自动重复**：可以使用 repeat 方法来使同一个字符串输出多次（被连续复制多次）：

```js
const sourceCode = 'repeat for 3 times;'
const repeated = sourceCode.repeat(3) 
console.log(repeated) // repeat for 3 times;repeat for 3 times;repeat for 3 times;
```

- 对象深拷贝

- 对象深拷贝常用方法
  - `JSON.stringify()` 方法将一个 JavaScript 对象或值转换为 JSON 字符串
  - `JSON.parse()` 方法用来解析JSON字符串，构造由字符串描述的JavaScript值或对象

```js
let outObj = {
  inObj: {a: 1, b: 2}
}
let newObj = JSON.parse(JSON.stringify(outObj))
newObj.inObj.a = 2
console.log(outObj) // {inObj: {a: 1, b: 2}}
```

- 深拷贝与浅拷贝的区别

![img](https://camo.githubusercontent.com/667a0c19bb77ec41c552350d2c8b4c4d1be9662acdd2f931504f214d00b9876f/68747470733a2f2f75706c6f61642d696d616765732e6a69616e7368752e696f2f75706c6f61645f696d616765732f31353835363136392d323665326534613066633861333962342e706e673f696d6167654d6f6772322f6175746f2d6f7269656e742f7374726970253743696d61676556696577322f322f772f3331302f666f726d61742f77656270)

![img](https://camo.githubusercontent.com/89821ea9eb62e96d8699acc8f24676a542d0ee2d3d8b71816b0f2e96f402c23a/68747470733a2f2f75706c6f61642d696d616765732e6a69616e7368752e696f2f75706c6f61645f696d616765732f31353835363136392d383862643539373565616661613438382e706e673f696d6167654d6f6772322f6175746f2d6f7269656e742f7374726970253743696d61676556696577322f322f772f3630302f666f726d61742f77656270)

- `**Object.assign()**` 方法用于将所有可枚举属性的值从一个或多个源对象分配到目标对象。它将返回目标对象。

```js
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

console.log(target);
// expected output: Object { a: 1, b: 4, c: 5 }

console.log(returnedTarget);
// expected output: Object { a: 1, b: 4, c: 5 }
```

- 遍历map

```js
map.forEach( (value,key,map) => {
     console.log(key,value); // foo 1    bar 2
})
```

- [面试总结](https://blog.csdn.net/qq_45704942/article/details/121432692?spm=1001.2014.3001.5502)

## 2.计网

- HTTPS相关复习了一下

## 3.Vue



## 4.LeetCode

一堆题。。懒得记录了

# 11.20 *面试过后开始复习学校专业课+多刷题！ *恢复正常作息！

经过第一次面试被毒打，让我对自己的代码实现能力上的不足有了一个认知！为了展现给面试官更好的自己，要更加努力地去完成这部分的内容！来多少题都给它干掉！

```js
// 今日主要收获 & 学习时间
Totally 340min
1.前端基础知识
    1.1 前端基础学习 80min 
		/* 复习了下作用域中的内容
		回忆了一下昨天的面经缺了两个小知识点 CDN、页面渲染——看了看浏览器相关的知识（页面渲染那块儿） */

2.核心基础知识 下午开始学计网 + 刷题
	2.1 计网 min
		/*  */
	2.2 操作系统 & 数据库 min
		/*  */

3.现在不刷题 面试懵个逼
	3.1 刷算法 刷力扣 40min	
    	/* 掘金小册 16/28
        	594. 最长和谐子序列*/   
    	// 每个阶段结束后 简单总结下应对某种数据结构/对应类型的题目 应该怎么去想
        1.数组 + 字符串 + 链表 + 二叉树 + 栈/队列 熟练掌握这些数据结构
        2.双指针 + 遍历专题DFS BFS（递归/迭代）
        3.回溯算法 + 贪心算法 + 动态规划
        4.了解下前缀和方法 熟练使用哈希表（解决数组问题） 

4.做项目
	4.1 Vue学习 min
		/*  */
    4.2 项目开发 150min
    	/* 解决各种需求，查验成果 */
5.其他 
	接下来的学习路线总结+之前的周报小结 70min
```

> 学习顺序预告

- [x] 前端基础学习+学习路线小结
- [ ] 肝一下项目~
- [ ] 网安复习+整理一下作业
- [ ] 数据库复习
- [ ] 每日一题+二叉树继续钻研~

## 1.前端基础

- this指向问题

普通函数中出现this的话 会指向**调用这个函数的上下文** 

![image-20211120133150008](https://gitee.com/su-fangzhou/blog-image/raw/master/202111201331140.png)

稍微变式一下——（说明输出的是b中的a属性）

![img](https://gitee.com/su-fangzhou/blog-image/raw/master/202111201332850.jpg)

## 2.计网



## 3.Vue



## 4.LeetCode

# 11.21 

七点半被闹铃摇起来，然后意志力不坚定地倒头睡到十点半。。

明天要开始早起打开勒。。可一定要起来鸭！

下午晚上不太在状态，早睡调整咯！

```js
// 今日主要收获 & 学习时间
Totally 360min
1.前端基础知识
    1.1 前端基础学习 50min 
		/* jS数据类型 ES6复习~ */

2.核心基础知识 下午开始学计网 + 刷题
	2.1 计网 70min
		/* 网络包遨游的前三步-生成网络包、DNS域名解析、协议栈的概念（委托给OS干发消息的活儿） */
	2.2 操作系统 & 数据库 & 网络安全 70+80min
		/* 数据库-简单看了下mooc 总结了下之后要学习的方法-根据作业中涉及的知识点学习知识点——会做题~ 
		网安：复习下各个章节的内容*/

3.现在不刷题 面试懵个逼
	3.1 刷算法 刷力扣 90min	
    	/* 掘金小册 16/28
        	BFS进行层序遍历、DFS进行二叉树翻转、DFS进行二叉搜索树的插入、二叉树/N叉树的深度
           	*/   
    	// 每个阶段结束后 简单总结下应对某种数据结构/对应类型的题目 应该怎么去想
        1.数组 + 字符串 + 链表 + 二叉树 + 栈/队列 熟练掌握这些数据结构
        2.双指针 + 遍历专题DFS BFS（递归/迭代）
        3.回溯算法 + 贪心算法 + 动态规划
        4.了解下前缀和方法 熟练使用哈希表（解决数组问题） 

4.做项目
	4.1 Vue学习 min
		/*  */
    4.2 项目开发 min
    	/*  */
5.其他 
```

> 学习顺序预告

- [x] 计网学习
- [x] 数据库ppt整理+梳理一下要学习的点（根据每次的作业）
- [x] 网安重点梳理+作业题简单整理（这在书上就没办法了）
- [x] JS基础复习
- [x] 力扣树专题推进+每日一题

## 1.前端基础

#### 判断数组的方式

- 通过`Object.prototype.toString.call()`做判断

```js
Object.prototype.toString.call(obj).slice(8,-1) === 'Array';
```

- 通过原型链做判断

```js
obj.__proto__ === Array.prototype;
```

- 通过ES6的Array.isArray()做判断

```js
Array.isArrray(obj);
```

- 通过instanceof做判断

```js
obj instanceof Array
```

- 通过Array.prototype.isPrototypeOf

```js
Array.prototype.isPrototypeOf(obj)
```

#### 箭头函数的this指向

- 从自己作用域的上一级继承this

- 注意继承得来的this是永远不会改变的！

可以⽤Babel理解⼀下箭头函数: 

```js
// ES6 
const obj = { 
  getArrow() { 
    return () => { 
      console.log(this === obj); 
    }; 
  } 
}
```

转化后：

```js
// ES5，由 Babel 转译
var obj = { 
   getArrow: function getArrow() { 
     var _this = this; 
     return function () { 
        console.log(_this === obj); 
     }; 
   } 
};
```

#### 扩展运算符可以用来修改对象的部分属性

如果用户自定义的属性，放在扩展运算符后面，则扩展运算符内部的同名属性会被覆盖掉。

```js
let bar = {a: 1, b: 2};
let baz = {...bar, ...{a:2, b: 4}};  // {a: 2, b: 4}
```

利用上述特性就可以很方便的修改对象的部分属性。

实际应用：在`redux`中的`reducer`函数规定必须是**一个纯函数**，`reducer`中的`state`对象要求不能直接修改，可以通过扩展运算符把修改路径的对象都复制一遍，然后产生一个新的对象返回。

#### 嵌套解构

有时会遇到一些嵌套程度非常深的对象：

```js
const school = {
   classes: {
      stu: {
         name: 'Bob',
         age: 24,
      }
   }
}
```

像此处的 name 这个变量，嵌套了四层，此时如果仍然尝试老方法来提取它：

```js
const { name } = school
```

显然是不奏效的，因为 school 这个对象本身是没有 name 这个属性的，name 位于 school 对象的“儿子的儿子”对象里面。要想把 name 提取出来，一种比较笨的方法是逐层解构：

```js
const { classes } = school
const { stu } = classes
const { name } = stu
name // 'Bob'
```

但是还有一种更标准的做法，可以用一行代码来解决这个问题：

```js
const { classes: { stu: { name } }} = school
       
console.log(name)  // 'Bob'
```

可以在解构出来的变量名右侧，通过冒号+{目标属性名}这种形式，进一步解构它，一直解构到拿到目标数据为止。

#### `Array.prototype.includes()`

##### [语法](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/includes#语法)

```
arr.includes(valueToFind[, fromIndex])
```

##### [参数](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/includes#参数)

- `valueToFind`

  需要查找的元素值。**Note:** 使用 `includes()`比较字符串和字符时是区分大小写的。

- `fromIndex` 可选

  从`fromIndex` 索引处开始查找 `valueToFind`。如果为负值，则按升序从 `array.length + fromIndex` 的索引开始搜 （即**从末尾开始往前跳 `fromIndex` 的绝对值个索引**，然后往后搜寻）。默认为 0。

## 2.计网

- 学习了——

网络包遨游的前三步-

【1】客户端生成这个网络包准备发到服务端

【2】DNS寻址，获得IP地址 整个过程就和我们日常生活中找人问路的过程类似，**只指路不带路**。

【3】通过 DNS 获取到 IP 后，就可以把 HTTP 的传输工作交给**操作系统**中的**协议栈**。

上面的部分会向下面的部分委托工作 上层的应用程序（浏览器）通过**调用 Socket 库**，来委托协议栈工作。

![图片](https://mmbiz.qpic.cn/mmbiz_png/J0g14CUwaZdCwxNydn5YuT0s7aLuqWCvbLic0XNMIJgJ0pDm6K4s39vgGO4enAIT1jzDXfQPYrdiaQe8TMy11Wicw/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

下一步网络包要去找TCP大佬！

- 【1】浏览器与Web服务器交互的过程（宏观）

![image-20211121131214925](https://gitee.com/su-fangzhou/blog-image/raw/master/202111211312041.png)

![image-20211121131237757](https://gitee.com/su-fangzhou/blog-image/raw/master/202111211312856.png)

![image-20211121131246700](https://gitee.com/su-fangzhou/blog-image/raw/master/202111211312795.png)

- 【2】寻找响应的DNS服务器并获取IP地址

![image-20211121133602271](https://gitee.com/su-fangzhou/blog-image/raw/master/202111211336383.png)

具体步骤如下：

![image-20211121133644267](https://gitee.com/su-fangzhou/blog-image/raw/master/202111211336367.png)

图解网络中的解析 

![图片](https://mmbiz.qpic.cn/mmbiz_png/J0g14CUwaZdCwxNydn5YuT0s7aLuqWCv5bBPibRf9nk4wIb6J3jP62L6NEmPk3HicMUgf8VatcBicynP6BKLeT6GQ/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

## 3.Vue



## 4.LeetCode

# 11.22 *二面来勒，与考试并行准备~

六点五十成功起床 哦耶~

今天把书签啥的全搬到edge里了 受不了chrome不保存我的cookie！

虽然起得早 但是整体状态不佳！明天通过多喝点水+午睡来调节下试试！

晚间状态也较差，身体状态欠佳啊！碎觉！

```js
// 今日主要收获 & 学习时间
Totally 570min
1.前端基础知识
    1.1 前端基础学习 160min 
		/* JS基础的内容学习了一下！
        看了一下面经，完善下自我介绍~*/

2.核心基础知识 下午开始学计网 + 刷题
	2.1 计网 min
		/*  */
	2.2 操作系统 & 数据库 & 网络安全 60min
		/* 折腾一下操作系统实验二-linux虚拟机上的操作
        */

3.现在不刷题 面试懵个逼
	3.1 刷算法 刷力扣 150min	
    	/* 掘金小册 18/28
        	数组打乱&设计题结构理解 主要时间用在数组乱序算法的研究上 那个洗牌法真的很惊艳！
           	*/   
    	// 每个阶段结束后 简单总结下应对某种数据结构/对应类型的题目 应该怎么去想
        1.数组 + 字符串 + 链表 + 二叉树 + 栈/队列 熟练掌握这些数据结构
        2.双指针 + 遍历专题DFS BFS（递归/迭代）
        3.回溯算法 + 贪心算法 + 动态规划
        4.了解下前缀和方法 熟练使用哈希表（解决数组问题） 

4.做项目
	4.1 Vue学习 min
		/*  */
    4.2 项目开发 150min
    	/* 更新一些细节，明天任务还是有点重的-完成地图聚焦功能 */
5.其他 
	折腾了一下浏览器的配置问题 换到edge了 20min
    和学长还有前辈讨论下未来发展的问题，打一针鸡血继续努力！30min
```

> 学习顺序预告

- [x] JS基础复习
- [x] 看看面经，自我介绍完善一下~
- [x] 项目肝进度 发布新版本
- [x] 刷题
- [x] 项目版本汇总
- [ ] 睡前复习

## 1.前端基础

#### 利用splice(start, deleteCount)与额外空间进行暴力遍历打乱数组

【1】

splice方法中的start会做一步向下取整！！

**做力扣时发现的点**

```js
let index = Math.random()*list.length// 小数
shuffled[i] = list.splice(index, 1);// 返回对应元素并进行对应索引删除！
```

【2】暴力打乱数组法

```js
let arr = [1,2,3,4,5,6]
function getRandomArrElement(arr, count) {
    let res = []
    while (res.length < count) {
        // 生成随机 index
        let randomIdx = (Math.random() * arr.length) >> 0;// 涨知识 小数右移0位直接向下取整勒
        // 位运算符的特性：后面的操作数是 0 的时候，该语句的结果就和 Math.floor() 一样，是向下取整
        // splice 返回的是一个数组
        res.push(arr.splice(randomIdx, 1)[0]);
    }
    return res
}
getRandomArrElement(arr, 3)
```

#### [前端面试(算法篇) - 数组乱序](https://www.cnblogs.com/wisewrong/p/10517532.html)

> 写得挺好的 搭配 [384. 打乱数组](https://leetcode-cn.com/problems/shuffle-an-array/) 食用更佳
>
> 首先是伪随机的两种方法

- **随机取数**

从原数组中随机抽取一个数，然后使用 splice 删掉该元素

```js
function getRandomArrElement(arr, count) {
    let res = []
    while (res.length < count) {
        // 生成随机 index
        let randomIdx = (Math.random() * arr.length) >> 0;
        // splice 返回的是一个数组
        res.push(arr.splice(randomIdx, 1)[0]);
    }
    return res
}
```

上面生成随机 index 用到了按位右移操作符 >> 

当后面的操作数是 0 的时候，该语句的结果就和 Math.floor() 一样，是向下取整

但位操作符是在数值表示的最底层执行操作，因此速度更快

```js
// 按位右移
(Math.random() * 100) >> 0

// Math.floor
Math.floor(Math.random() * 100)
/* 这两种写法的结果是一样的，但位操作的效率更高 */
```



- **通过 sort 乱序**

首先认识一下 [`Array.prototype.sort()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) 不了解的查看下 这个必须滚瓜烂熟

```js
let arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
arr.sort((a, b) => 0.5 - Math.random());
```

**但这并不是真正的乱序**，计算机的 random 函数因为循环周期的存在，无法生成真正的随机数（力扣那题用这个方法也跑不通XD）

- **Fisher–Yates shuffle 洗牌算法**

洗牌算法的思路是：

【1】**先从数组末尾开始，选取最后一个元素，与数组中随机一个位置的元素交换位置**

【2】**然后在已经排好的最后一个元素以外的位置中，随机产生一个位置，让该位置元素与倒数第二个元素进行交换**

以此类推，打乱整个数组的顺序

```js
function shuffle(arr) {
  let len = arr.length;

  while (len) {
    let i = (Math.random() * len--) >> 0;// 获得随机数
    // 交换位置
    let temp = arr[len];
    arr[len] = arr[i];
    arr[i] = temp;
  }
  return arr;
}
```

再结合 ES6 的解构赋值，使用洗牌算法就更方便了：

```js
Array.prototype.shuffle = function() {
    let m = this.length, i;
    while (m) {
        i = (Math.random() * m--) >>> 0;
        [this[m], this[i]] = [this[i], this[m]]
    }
    return this;
}
```





#### [Document.createTextNode()](https://developer.mozilla.org/zh-CN/docs/Web/API/Document/createTextNode)

创建一个新的[`文本`](https://developer.mozilla.org/zh-CN/docs/Web/API/Text)节点。这个方法可以用来转义 HTML 字符。

##### [语法](https://developer.mozilla.org/zh-CN/docs/Web/API/Document/createTextNode#语法)

```
var text = document.createTextNode(data);
```

- *`text`* 是一个文本节点。
- *`data`* 是一个字符串，包含了要放入文本节点的内容。

![img](https://gitee.com/su-fangzhou/blog-image/raw/master/202111221537689.png)



#### 判断数组的方式

- 通过`Object.prototype.toString.call()`做判断

```js
Object.prototype.toString.call(obj).slice(8,-1) === 'Array';
```

![image-20211122085928813](https://gitee.com/su-fangzhou/blog-image/raw/master/202111220859922.png)

- 通过原型链做判断

```js
obj.__proto__ === Array.prototype;
```

- 通过ES6的Array.isArray()做判断

```js
Array.isArray(obj);
```

- 通过instanceof做判断

```js
obj instanceof Array
```

- 通过Array.prototype.isPrototypeOf

```js
Array.prototype.isPrototypeOf(obj)
```

#### instanceof的使用

**`instanceof`** **运算符**用于检测构造函数的 `prototype` 属性是否出现在某个实例对象的原型链上。

`instanceof` 运算符用来检测 `constructor.prototype `是否存在于参数 `object` 的原型链上。

> `a instanceof A`
>
> 如果 `a.__proto__ = A.prototype` 则返回true

```js
// 定义构造函数
function C(){}
function D(){}

var o = new C();

o instanceof C; // true，因为 Object.getPrototypeOf(o) === C.prototype

o instanceof D; // false，因为 D.prototype 不在 o 的原型链上

o instanceof Object; // true，因为 Object.prototype.isPrototypeOf(o) 返回 true
C.prototype instanceof Object // true，同上

C.prototype = {};
var o2 = new C();

o2 instanceof C; // true

o instanceof C; // false，C.prototype 指向了一个空对象,这个空对象不在 o 的原型链上.

D.prototype = new C(); // 继承
var o3 = new D();
o3 instanceof D; // true
o3 instanceof C; // true 因为 C.prototype 现在在 o3 的原型链上
```



#### isPrototypeOf的使用

`isPrototypeOf()` 方法用于测试**一个对象**是否存在于**另一个对象的原型链**上。

`isPrototypeOf()` 与 [`instanceof`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/instanceof) 运算符不同。在表达式 "`object instanceof AFunction`"中，`object` 的原型链是针对 `AFunction.prototype` 进行检查的，而不是针对 `AFunction` 本身。

##### [语法](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/isPrototypeOf#语法)

```
prototypeObj.isPrototypeOf(object)
```

##### [参数](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/isPrototypeOf#参数)

- `object`

  在该对象的原型链上搜寻

##### [返回值](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/isPrototypeOf#返回值)

[`Boolean`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Boolean)，表示调用对象是否在另一个对象的原型链上。

本示例展示了 `Baz.prototype`, `Bar.prototype`, `Foo.prototype` 和 `Object.prototype` 在 `baz` 对象的原型链上：

```js
function Foo() {}
function Bar() {}
function Baz() {}

Bar.prototype = Object.create(Foo.prototype);
Baz.prototype = Object.create(Bar.prototype);

var baz = new Baz();

console.log(Baz.prototype.isPrototypeOf(baz)); // true
console.log(Bar.prototype.isPrototypeOf(baz)); // true
console.log(Foo.prototype.isPrototypeOf(baz)); // true
console.log(Object.prototype.isPrototypeOf(baz)); // true
```

如果你有段代码只在需要操作继承自一个特定的原型链的对象的情况下执行，同 [`instanceof`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/instanceof) 操作符一样 `isPrototypeOf()` 方法就会派上用场，例如，为了确保某些方法或属性将位于对象上。

例如，检查 `baz` 对象是否继承自 `Foo.prototype`：

```js
if (Foo.prototype.isPrototypeOf(baz)) {
  // do something safe
}
```

#### JS数据结构与JSON格式的转换

- `JSON.stringify(obj)` 数据对象->JSON格式的字符串
- `JSON.parse()` JSON格式的字符串->数据对象

常见的对象深拷贝的方式就是

```js
obj = {a: 6, child: {b: 66}}
let copy = JSON.parse(JSON.stringify(obj))
copy.child.b = 888
console.log(obj)// {a: 6 child:{b: 66}}
```

#### 类数组对象转化为数组

> 一个拥有 length 属性和若干索引属性的对象就可以被称为类数组对象，类数组对象和数组类似，但是不能调用数组的方法。常见的类数组对象有 arguments 和 DOM 方法的返回结果，函数参数也可以被看作是类数组对象

常见的类数组转换为数组的方法有这样几种：

- 通过 call 调用数组的 slice 方法来实现转换

```js
Array.prototype.slice.call(arrayLike);
```

- 通过 call 调用数组的 splice 方法来实现转换

```js
Array.prototype.splice.call(arrayLike, 0);
```

- 通过 apply 调用数组的 concat 方法来实现转换

```js
Array.prototype.concat.apply([], arrayLike);
```

- 通过 Array.from 方法来实现转换

```js
Array.from(arrayLike);
```

##### 遍历类数组的方法

有三个方法：

（1）将数组的方法应用到类数组上，这时候就可以使用`call`和`apply`方法，如：

```js
function foo(){ 
  Array.prototype.forEach.call(arguments, a => console.log(a))
}
```

（2）使用Array.from方法将类数组转化成数组：‌

```js
function foo(){ 
  const arrArgs = Array.from(arguments) 
  arrArgs.forEach(a => console.log(a))
}
```

（3）使用展开运算符将类数组转化成数组

```js
function foo(){ 
    const arrArgs = [...arguments] 
    arrArgs.forEach(a => console.log(a)) 
}
```

#### JavaScript进行变量提升的本质原因

 js 引擎在代码执行前有一个解析的过程，**创建了执行上下文**，初始化了一些代码执行时需要用到的对象

当访问一个变量时，会到当前执行上下文中的作用域链中去查找，而作用域链的首端指向的是当前执行上下文的变量对象 这个对象的是在**代码解析的时候创建的**。

#### `Object.prototype.toString.call()` 方法来打印对象的[[Class]] 属性

```js
Object.prototype.toString.call(null);//”[object Null]”
Object.prototype.toString.call(undefined);//”[object Undefined]”
Object.prototype.toString.call(“abc”);//”[object String]”
Object.prototype.toString.call(123);//”[object Number]”
Object.prototype.toString.call(true);//”[object Boolean]”
```

#### 判断对象属于某个类

```js
function Fn(){}
let func = new Fn()
console.log(Fn.prototype.constructor === Fn)// true
console.log(func.constructor === Fn)// true
```

#### 强类型语言和弱类型语言的区别

- **强类型语言**：要求变量的使用要严格符合定义，所有变量都必须先定义后使用。Java和C++等语言都是强制类型定义的
  - 一旦一个变量被指定了某个数据类型，如果**不经过强制转换**，那么它就**永远是这个数据类型了**。例如你有一个整数，如果不显式地进行转换，你不能将其视为一个字符串。
- **弱类型语言**：与强类型定义相反。JavaScript语言就属于弱类型语言。简单理解就是一种变量类型可以被忽略的语言。
  - 在JavaScript中就可以将字符串'12'和整数3进行连接得到字符串'123'，在**相加的时候会进行强制类型转换**。

两者对比：强类型语言在速度上可能略逊色于弱类型语言，但是强类型语言带来的**严谨性可以有效地帮助避免许多错误**。

## 2.计网



## 3.Vue



## 4.LeetCode

####  [384. 打乱数组](https://leetcode-cn.com/problems/shuffle-an-array/) 

好题！
