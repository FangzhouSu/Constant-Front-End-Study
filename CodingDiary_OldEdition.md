以下为四天的 学习日记的**测试版本**  主要用于摸索找到更好的总结方式

2021.9.6 周一 更新正式版本的学习笔记

# 学习日报测试版本

# 2021.9.2

```js
//今日主要收获 & 学习时间
1.计网
2.操作系统
3.前端基础知识
    3.1 JS
4.前端开发框架
5.刷题心得
```

9:40-00:30 晚睡晚起了欸

今日整体**状态一般**，好多学习任务都没完成，除每日任务外花费了较多时间在

- 字节青训营项目文档撰写
- 规划学习路线&探究新的每日总结方法

上面 

但还是很有意义！认识了非常优秀的一位学长 向他学习了每日总结的好习惯。

知识上主要学习了核心基础知识——计网、操作系统；前端开发框架上复习了react基础；刷了一道leetcode01

## 1.核心基础知识

- [x] 计网

开始了《网络层——IP地址》的学习 

```js
//学习内容
IP地址的定义 + IP地址的分类 + 广播、多播地址用于什么？ + IP 分类的优、缺点
```

- IP地址的定义

在 TCP/IP 网络通信时，为了保证能正常通信，每个设备都需要配置正确的 IP 地址，否则无法实现正常的通信。

IP 地址（IPv4 地址）由 `32` 位正整数来表示，IP 地址在计算机是以二进制的方式处理的。

- IP地址的分类

![图片](https://mmbiz.qpic.cn/mmbiz_png/J0g14CUwaZdpI5tWwB8wMfZQ8ichJW1yu3u9AgedCb0tFU7W1fZlqG0ImZVnIoAan7z2vX71WYeKZz1waagqoXw/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

具体这几类IP地址是干嘛的 回头要总结下！



- **广播地址用于什么？**

广播地址用于在**同一个链路中相互连接的主机之间发送数据包**。

> 在准备上课的时候，通常班长会喊：“上课， 全体起立！”，班里的同学听到这句话是不是全部都站起来了？这个句话就有广播的含义。

当主机号全为 1 时，就表示该网络的广播地址。

- 多播地址用于什么？

多播用于**将包发送给特定组内的所有主机。**

> **多播使用的 D 类地址，其前四位是 `1110` 就表示是多播地址**

> 还是举班级的栗子，老师说：“最后一排的同学，上来做这道数学题。”，老师是指定的是最后一排的同学，也就是多播的含义了。

由于**广播无法穿透路由**，若想给其他网段发送同样的包，就可以使用可以穿透路由的多播（组播）。

![图片](https://mmbiz.qpic.cn/mmbiz_png/J0g14CUwaZdpI5tWwB8wMfZQ8ichJW1yuPHVENpfzl2iaODOyy0rjcseRJ3sJV1pVQDORnb8VAoAdCFrBWSzGkYw/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

- IP 分类的优点

简单明了、选路（基于网络地址）简单

- IP 分类的缺点
  - 缺少地址的灵活性
  - A、B、C类有个尴尬处境，就是**不能很好的与现实网络匹配**
    - C 类地址能包含的最大主机数量实在太少了，只有 254 个，估计一个网吧都不够用。
    - 而 B 类地址能包含的最大主机数量又太多了，6 万多台机器放在一个网络下面，一般的企业基本达不到这个规模，闲着的地址就是浪费。



- [x] 操作系统

```js
//学习内容
进程的状态 + 进程控制的内容
```

继续进行《进程管理》的学习

进程有着「**运行 - 暂停 - 运行**」的活动规律

- 另外学习了一下进程的状态
  - 三种状态的变迁

  ![图片](https://mmbiz.qpic.cn/mmbiz_png/J0g14CUwaZcvw4t9kicec370n3cvX2JS9EfRviciaGMLREQ1nqvjWkibKlREGPI9JyfhA5XlmzFRRiaIATAEiaLbCx4w/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

  - 五种状态的变迁 加上了创建、结束状态

  ![图片](https://mmbiz.qpic.cn/mmbiz_png/J0g14CUwaZcvw4t9kicec370n3cvX2JS9gjKOC2IyZwLJXMcqzgvpKia0u1ezepiawX0iaFkrvsLeV6qsHplv5grnw/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

  - 七种状态的变迁 - 加上了 就绪挂起、阻塞挂起状态

![图片](https://mmbiz.qpic.cn/mmbiz_png/J0g14CUwaZcvw4t9kicec370n3cvX2JS9OSw0O4hBZhsvyrPTCkXqwCg9QgtBfdrCsU90NaspiabyILN5QxmAYxQ/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

- 学习了进程控制的内容

在操作系统中，是用**进程控制块**（*process control block，PCB*）数据结构来**描述进程的**。

**PCB 是进程存在的唯一标识**，这意味着一个进程的存在，必然会有一个 PCB，如果进程消失了，那么 PCB 也会随之消失。

## 2.前端基础

今天没学前端基础的内容欸

- [ ] 绿叶学习网
- [ ] 响应式网页设计实操练习
- [ ] JS红宝书
- [ ] JS算法与数据结构实操练习





## 3.前端开发框架

- [x] react尚硅谷

第一遍视频懵得很 浏览了几遍官方文档 再回头看 感触颇深！

明日做一个大的总结 今天内容刚推进到p10类的复习

明天开始看类组件

- [ ] react习题练习



## 4.面试题

- [ ] 每日一道面试题

- [x] 力扣

经典的[两数之和](https://leetcode-cn.com/problems/two-sum/)~

```js
//JS
var twoSum = function(nums, target) {
    for(let i = 0; i < nums.length; i++){
        for(let j = i + 1; j < nums.length; j++){
            if(nums[i] + nums[j] == target){
                return [i, j];
                //return new int[]{i, j}; JAVA代码
                //return {i, j}; C++代码
            }
        }
    }
    return false;
};
```

强化下对JS数组的概念吧





# 2021.9.3

今天主要学习时间比昨天更短 因为和女票出去嗨皮了哈哈哈（另外就是上午电脑崩溃了 下午才解决 解决方法是更改时间？ 感谢[这位大佬的文章](https://blog.csdn.net/weixin_50892413/article/details/120074972?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522163067225516780271586820%2522%252C%2522scm%2522%253A%252220140713.130102334.pc%255Fall.%2522%257D&request_id=163067225516780271586820&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~all~first_rank_ecpm_v1~rank_v29_ecpm-2-120074972.pc_search_result_control_group&utm_term=win11%E4%BB%BB%E5%8A%A1%E6%A0%8F%E6%B6%88%E5%A4%B1&spm=1018.2226.3001.4187)！）

明天也要出去嗨皮 所以——

咳咳 先放松两天咯

主要学习内容——计网的IP部分 知识体系更加清晰了另外复习了超级经典的“为啥要三次握手四次挥手捏？” 练习了一下HTML的布局 刷了leetcode02 踩了个JS无法向下取整的坑 这辈子都错不了这块儿了！！！！！！ 

## 核心基础知识

- [x] 计网

> 今天继续看IP篇的内容

```JS
无分类IP地址 
    + 如何&为啥划分网络号和主机号？ + 子网掩码的两个作用 +
私有、公有IP地址的用处 +
IP地址与路由控制
	+ 环回地址（主机名localhost同理）是不会流向网络的
```

- 无分类IP地址

无分类地址的方案，即 `CIDR`

不再有分类地址的概念，32 比特的 IP 地址被划分为两部分，前面是**网络号**，后面是**主机号**

- 如何划分网络号和主机号

表示形式 `a.b.c.d/x`，其中 `/x` 表示前 x 位属于**网络号**

> 比如 10.100.122.2/24，这种地址表示形式就是 CIDR，`/24` 表示前 24 位是网络号，剩余的 8 位是主机号。



- 子网掩码

另一种**划分网络号与主机号**的形式——子网掩码

掩码的意思就是掩盖掉主机号，剩余的就是网络号。

**将子网掩码和 IP 地址按位计算 AND，就可得到网络号。**

![图片](https://mmbiz.qpic.cn/mmbiz_png/J0g14CUwaZdpI5tWwB8wMfZQ8ichJW1yuhrtwMQodBxkibnM9yRH5bqXVeT16YuTfLuoB9usoMg9hCrhfsmU9yUA/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

- 为啥要划分网络号和主机号？

两台计算机要通讯的话，首先要判断是否处于同一个广播域内（判断网络地址是否相同——**用到了网络号**）如果接受方在本网络上，那么可以把数据包直接发送到目标主机

路由器寻址工作中 也就是通过这样的方式来 先找到对应的网络号（从而就找到对应的广播域）再把数据包转发给对应的网络内

——所以网络号是很重要的！



- 怎么进行子网划分？

子网掩码在上面刚说过——有“划分出网络号和主机号”的作用

另外还有一个作用——划分子网~

**子网划分：将主机地址分为两个部分：**

1. 子网网络地址
2. 子网主机地址

进行子网划分前后的IP地址：

![图片](https://mmbiz.qpic.cn/mmbiz_png/J0g14CUwaZdpI5tWwB8wMfZQ8ichJW1yutNlCIP4A8dbFcQbJfAU0GhGTuDFicyO5ibRZBOmyPfr6OTgOvk9ksicaQ/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

举个例子

假设对 C 类地址进行子网划分，网络地址 192.168.1.0，使用子网掩码 255.255.255.192 对其进行子网划分。

C 类地址中前 24 位 是网络号，最后 8 位是主机号，根据子网掩码可知**从 8 位主机号中借用 2 位作为子网号**。

![图片](https://mmbiz.qpic.cn/mmbiz_png/J0g14CUwaZdpI5tWwB8wMfZQ8ichJW1yu3unGRonhVDSsjibA6Nibggibk4grngY8U5iaZxYUtiaNYibFZJu74qKVQMYA/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

由于子网网络地址被划分成 2 位，那么子网地址就有 4 个，分别是 00、01、10、11，具体划分如下图：

![图片](https://mmbiz.qpic.cn/mmbiz_png/J0g14CUwaZdpI5tWwB8wMfZQ8ichJW1yu0ovy7mtGVaxg1glSicvXsxGyic5zB61lmZCJFG4IEO7OVQz56gfPwVxA/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

划分后的 4 个子网如下表格：

![图片](https://mmbiz.qpic.cn/mmbiz_png/J0g14CUwaZdpI5tWwB8wMfZQ8ichJW1yu3ib8zRHKqR69wtniaiaofXxT4JzzaAm6f0QMa9XDQpVI0SuN62XoZIKKw/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)



- 私有IP地址的用处

平时我们**办公室、家里、学校用的 IP 地址，一般都是私有 IP 地址**。因为这些地址允许组织内部的 IT 人员自己管理、自己分配，而且可以重复。

因此，你学校的某个私有 IP 地址和我学校的可以是一样的，在各自的私网中可以正常使用。



- 公有IP地址的用处

就像每个小区都有自己的楼编号和门牌号，你小区家可以叫  1 栋 101 号，我小区家也可以叫 1 栋 101，没有任何问题。但一旦出了小区，就需要带上**中山路 666 号**（**公网 IP 地址**），是国家统一分配的，不能两个小区都叫中山路 666。

公有 IP 地址是有个组织统一分配的，假设你要开一个博客网站，那么你就需要去申请购买一个公有 IP，这样全世界的人才能访问。并且<u>公有 IP 地址基本上要在整个互联网范围内保持唯一</u>。

> 公有 IP 地址在中国是由 CNNIC 的机构进行管理，它是中国国内唯一指定的全局 IP 地址管理的组织。



- IP地址与路由控制

> 这个部分还木有看懂 回头还要细琢磨
>
> 先记住——

IP地址的网络地址这部分的作用是：路由控制！

**主机和路由器都有的路由控制表**中记录着

1. 网络地址
2. 下一步应该发送到路由器的地址



- 环回地址不会流向网络

环回地址是在同一台计算机上的程序之间进行网络通信时所使用的一个默认地址。

计算机使用一个特殊的 IP 地址 **127.0.0.1 作为环回地址，**与该地址具有相同意义的是一个叫做 `localhost` 的主机名。

**使用这个 IP 或主机名时，数据包不会流向网络**。





- [ ] 操作系统

> - 看下线程的内容
>
> - 看1集王道

最后只看了线程 没来得及看王道的视频QAQ

后天补上！



## 前端基础

- [ ] 绿叶学习网

> 开启一些H5 C3的内容



- [x] 响应式网页设计实操练习

> `freecodecamp`

- 复习了一些前端的内容

![请添加图片描述](https://img-blog.csdnimg.cn/c31f98cba1974d1ea6ce3e9725701546.png)









- [ ] JS红宝书

> 续看第三章 争取往下看一看 





- [ ] JS算法与数据结构实操练习

> `freecodecamp`



## 前端开发框架

今天意外情况 没来得及学react——先是上午电脑坏了 win11系统在9.3集体崩溃 非常神奇

- [ ] react尚硅谷

> 从p11开始看



- [ ] react习题练习

> `freecodecamp`



## 面试题

- [x] 每日一道面试题

> 011 请讲解下TCP的三次握手和四次挥手 以及泛洪攻击

> 这里我其实没太搞明白 两次握手的问题在哪里
>
> - 工程师答疑说 如果两次握手 接收端接收不到最后发送端给的那个ACK报文 就不连了 
> - 但是之前看小林的图解内容 他说 两次握手的话 也是会分配资源 建立连接的 真正的问题在于——有可能会重复分配资源 建立连接！
>
> 这个回头再去研究

引言

- 1.TCP 建立连接与断开连接的过程

- 2.TCP                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               泛洪攻击（TCP 建立连接过程中的攻击手段）与防护



#### **1、TCP 建立连接与断开连接的过程**

##### TCP 三次握手（连接过程）

![在这里插入图片描述](https://img-blog.csdnimg.cn/652b05eb1b614cd38843ff7e5ea03683.png)

**第一次握手**

客户端向服务端发送连接请求报文段。该报文段中包含自身的数据通讯初始序号。请求发送后，客户端便进入 SYN-SENT 状态。

**第二次握手**

服务端收到连接请求报文段后，如果同意连接，则会发送一个应答，该应答中也会包含自身的数据通讯初始序号，发送完成后便进入 SYN-RECEIVED 状态。

**第三次握手**

当客户端收到连接同意的应答后，还要向服务端发送一个确认报文。客户端发完这个报文段后便进入 ESTABLISHED 状态，服务端收到这个应答后也进入 ESTABLISHED 状态，此时连接建立成功。

**为什么需要三次握手，2次不行吗？**

喂喂喂，我是A，你听的到吗？ B：在在在，我能听到，我是B，你能听到我吗? A：(听到了，老子不想理你) B：喂喂喂？听不听到？我X，对面死了，我挂了。。

如果只有 2 次的话，B 并不清楚 A 是否收到他发过去的信息。



##### **TCP 四次挥手（断开链接）**

![在这里插入图片描述](https://img-blog.csdnimg.cn/04ddccdaa07a474487eb43ea8f89e3fe.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5pWy5Luj56CB55qE5bCP5o-Q55C05omL,size_20,color_FFFFFF,t_70,g_se,x_16)

**第一次挥手**

若客户端 A 认为数据发送完成，则它需要向服务端 B 发送**连接释放**请求。

**第二次挥手**

B 收到连接释放请求后，会告诉应用层要释放 TCP 链接。然后会发送 ACK 包，并进入 CLOSE_WAIT 状态，此时表明 A 到 B 的连接已经释放，不再接收 A 发的数据了。但是因为 **TCP 连接是双向的，所以 B 仍旧可以发送数据给 A**。

**第三次挥手**

B 如果此时还有没发完的数据会继续发送，完毕后会向 A 发送连接释放请求，然后 B 便进入 LAST-ACK 状态。

PS：通过延迟确认的技术（通常有时间限制，否则对方会误认为需要重传），可以将第二次和第三次握手合并，延迟 ACK 包的发送。

**第四次挥手**

A 收到释放请求后，向 B 发送确认应答，此时 A 进入 TIME-WAIT 状态。该状态会持续 2MSL（最长报文段寿命，指报文段在网络中生存的时间，超时会被抛弃） 时间，若该时间段内没有 B 的重发请求的话，就进入 CLOSED 状态。当 B 收到确认应答后，也便进入 CLOSED 状态。

#### **2、SYN 泛洪攻击**

我们已经知道，TCP 只有经过三次握手才能连接，而 SYN 泛洪攻击就是针对 TCP 握手过程进行攻击：

- 攻击者发送大量的 SYN 包给服务器（第一次握手成功）

- 服务器回应(SYN + ACK）包（第二次握手成功）

- 但是攻击者不回应 ACK 包（第三次握手不进行）

导致服务器存在大量的半开连接，这些半连接可以耗尽服务器资源，使被攻击服务器无法再响应正常 TCP 连接，从而达到攻击的目的

![在这里插入图片描述](https://img-blog.csdnimg.cn/45fe2a2fafed44dfaa2358de1247a858.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5pWy5Luj56CB55qE5bCP5o-Q55C05omL,size_14,color_FFFFFF,t_70,g_se,x_16)

幸运的是，一种称为 SYN cookie 的有效防御现在已部署在大多数主要的操作系统中：

- 在客户端发送 SYN 报文给服务器（第一次握手），服务端收到连接请求报文段后，服务器不会为此SYN创建半开连接，而是生成一个序列号（所谓的 cookie）一起发送给客户端（第二次握手），在这个阶段，服务器不会为该连接分配任何资源

- 客户端返回 ACK 报文给服务器（第三次握手），服务器会验证这个 cookie 值，只有验证成功才创建 TCP 连接，分配资源

- 如果客户端没有返回 ACK 报文给服务器，也不会对服务器造成任何的伤害，因为服务器没有分配任何资源给它

- [x] 力扣

> 今天打算把链表的最后一题干掉

[2. 两数相加](https://leetcode-cn.com/problems/add-two-numbers/)

这道题踩了个JS无法向下取整的坑！

7/10在JS中=1。。

Java C++都是向下取整的 但是JS要实现向下取整要使用 `Math.floor()`

```js
//JS
var addTwoNumbers = function(l1, l2) {
    let dummyHead = new ListNode(0);//建立虚拟头结点
    let cur = dummyHead;
    let carry = 0;//进位值
    while(l1 || l2){
        let x = l1 === null ? 0 : l1.val;
        let y = l2 === null ? 0 : l2.val;
        let sum = x + y + carry;

        //carry = sum / 10;//错这里了！！！
        carry = Math.floor(sum / 10);//这就对了。彩笔 JS无法向下取整的坑 踩了一下 
        sum = sum % 10;//当前那一位的值
        cur.next = new ListNode(sum);//链表结点指向一个新建结点

        cur = cur.next;//cur继续往下挪动 如果还没算完 继续进行链表结点的新建&指向
        if(l1 !== null){
            l1 = l1.next;
        }
        if(l2 !== null){
            l2 = l2.next;
        }
    }
    if(carry === 1){
        cur.next = new ListNode(carry);
    }
    return dummyHead.next;
};
```



另外学习了 使用虚拟头结点的具体原因——（感谢 画手大鹏 大佬给出的总结！）

- 【什么时候用虚拟头结点】对于链表问题，**返回结果为头结点**时，通常需要先初始化一个虚拟头结点 `dummyHead`，该指针的下一个节点指向真正的头结点head。

  【为什么要用虚拟头结点】使用虚拟头指针的目的在于链表初始化时无可用节点值，而且**链表构造过程需要指针移动，进而会导致头指针丢失，无法返回结果**。

# 2021.9.4

> 9.4要出去玩耍 所以不报太高期望 学到啥简单记录下好了

计网的话学习了一下

- IP分片与重组
- IPV6的基本认识
- IPV4 IPV6首部的对比

明天开始学习IP协议的相关技术



操作系统简单学习了一下三种线程的实现方式：用户线程、内核线程、轻量级线程

明天学习一下调度的内容 并开始学习王道考研的OS课程



JS基础部分 过了一下红宝书第三章：JS语言基础的内容 写得很全面！但是没有仔细地深究每个点，之后要再杀个回马枪！

尤其是**let声明的部分 数据类型的部分**（这里是所有语言的基础哈哈~）



为期一天的放松结束 明天状态拉满！



# 2021.9.5

今日效率一般般~下午收拾完寝室出去拿个快递回来就颓废掉了。。我很难过

学习时间配比：60+160+30+160



## 核心基础知识

- [x] 计网

```JS
1.IP协议相关技术
	1.1 DNS域名解析
    1.2 ARP 与 RARP协议
    1.3 DHCP动态获取IP地址
    1.4 NAT网络地址转换
    1.5 ICMP互联网控制报文协议
    1.6 IGMP因特网组管理协议
```

一个很有趣的点：

##### 计网

###### 域名解析的工作流程

浏览器【1】首先看一下自己的缓存里有没有

如果没有就【2】向操作系统的缓存要

还没有就【3】检查本机域名解析文件 `hosts`



如果还是没有，就会【4】使用 DNS 服务器进行查询，查询的过程如下：



1. 客户端首先会发出一个 DNS 请求，问 www.server.com 的 IP 是啥，并发给本地 DNS 服务器（也就是客户端的 TCP/IP 设置中填写的 DNS 服务器地址）。
2. 本地域名服务器收到客户端的请求后，如果缓存里的表格能找到 www.server.com，则它直接返回 IP 地址。如果没有，本地 DNS 会去问它的根域名服务器：“老大， 能告诉我 www.server.com 的 IP 地址吗？” 根域名服务器是最高层次的，它不直接用于域名解析，但能指明一条道路。
3. 根 DNS 收到来自本地 DNS 的请求后，发现后置是 .com，说：“www.server.com 这个域名归 .com 区域管理”，我给你 .com 顶级域名服务器地址给你，你去问问它吧。”
4. 本地 DNS 收到顶级域名服务器的地址后，发起请求问“老二， 你能告诉我 www.server.com  的 IP 地址吗？”
5. 顶级域名服务器说：“我给你负责 www.server.com 区域的权威 DNS 服务器的地址，你去问它应该能问到”。
6. 本地 DNS 于是转向问权威 DNS 服务器：“老三，www.server.com对应的IP是啥呀？” server.com 的权威 DNS 服务器，它是域名解析结果的原出处。为啥叫权威呢？就是我的域名我做主。
7. 权威 DNS 服务器查询后将对应的 IP 地址 X.X.X.X 告诉本地 DNS。
8. 本地 DNS 再将 IP 地址返回客户端，客户端和目标建立连接。

至此，我们完成了 DNS 的解析过程。现在总结一下，整个过程我画成了一个图。

![图片](https://mmbiz.qpic.cn/mmbiz_png/J0g14CUwaZdpI5tWwB8wMfZQ8ichJW1yuj1bqqp8P1QxT5vZcBYvCqTF6p9Zeg0xtttiaGFaK4knaA9AeoXegVOQ/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

DNS 域名解析的过程蛮有意思的，整个过程就和我们日常生活中找人问路的过程类似，**只指路不带路**。

明天开始学习ping的工作原理

- [x] 操作系统

```js
1.调度
	1.1 调度时机
    1.2 调度原则
    1.3 六种调度算法
    	1.3.1 一个超级棒的例子！
```

来看看小林是怎么通过一个例子带我们熟悉5种调度算法的吧！



**办理业务的客户相当于进程，银行窗口工作人员相当于 CPU。**

现在，假设这个银行只有一个窗口（单核 CPU ），那么工作人员一次只能处理一个业务。

![图片](https://mmbiz.qpic.cn/mmbiz_png/J0g14CUwaZcvw4t9kicec370n3cvX2JS9todvJHeyA9iaryca5BjqcAkUfCt6aCia6P87HWCWIBBgLXJ9VjcuXWvg/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

##### OS

###### 先来先服务调度算法 FCFS

`First Come First Severd`

那么最简单的处理方式，就是先来的先处理，后面来的就乖乖排队，这就是**先来先服务（\*FCFS\*）调度算法**。但是万一先来的这位老哥是来贷款的，这一谈就好几个小时，一直占用着窗口，这样后面的人只能干等，或许后面的人只是想简单的取个钱，几分钟就能搞定，却因为前面老哥办长业务而要等几个小时，你说气不气人？

![图片](https://mmbiz.qpic.cn/mmbiz_png/J0g14CUwaZcvw4t9kicec370n3cvX2JS9uEG5AB1AkMibfnDNTRjeAzlvMyDckqA30gvYrWlROQDlbZgQRrZCp6Q/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

###### 短作业优先调度算法 SJF

`Shortest Job First`

有客户抱怨了，那我们就要改进，我们干脆优先给那些几分钟就能搞定的人办理业务，这就是**短作业优先（\*SJF\*）调度算法**。听起来不错，但是依然还是有个极端情况，万一办理短业务的人非常的多，这会导致长业务的人一直得不到服务，万一这个长业务是个大客户，那不就捡了芝麻丢了西瓜

![图片](https://mmbiz.qpic.cn/mmbiz_png/J0g14CUwaZcvw4t9kicec370n3cvX2JS9jy5J7qNlRiatsWqOiaplxIvNQ0FkVKJthW68PRuNDpE8jpnCFnmdTXqw/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

###### 时间片轮转调度算法 RR

`Round Robin`

那就公平起见，现在窗口工作人员规定，每个人我只处理 10 分钟。如果 10 分钟之内处理完，就马上换下一个人。如果没处理完，依然换下一个人，但是客户自己得记住办理到哪个步骤了。这个也就是**时间片轮转（\*RR\*）调度算法**。但是如果时间片设置过短，那么就会造成大量的上下文切换，增大了系统开销。如果时间片过长，相当于退化成退化成 FCFS 算法了。

![图片](https://mmbiz.qpic.cn/mmbiz_png/J0g14CUwaZcvw4t9kicec370n3cvX2JS95lRoQf7K0cK2PWF95IicLCqU8r7fvbsyeMHs1v5khd17d7UO43MM1dw/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

###### 最高优先级调度算法

`HPF`



既然公平也可能存在问题，那银行就对客户分等级，分为普通客户、VIP 客户、SVIP 客户。只要高优先级的客户一来，就第一时间处理这个客户，这就是**最高优先级（\*HPF\*）调度算法**。但依然也会有极端的问题，万一当天来的全是高级客户，那普通客户不是没有被服务的机会，不把普通客户当人是吗？那我们把优先级改成动态的，如果客户办理业务时间增加，则降低其优先级，如果客户等待时间增加，则升高其优先级。

![图片](https://mmbiz.qpic.cn/mmbiz_png/J0g14CUwaZcvw4t9kicec370n3cvX2JS9WVOiaGDpysDpqMAian3eprFibicVu4VdYW1jdcEFccLlV5bzia76HMniah5A/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

###### 多级反馈队列调度算法 MFQ

`Multilevel Feedback Queue`

那有没有兼顾到公平和效率的方式呢？这里介绍一种算法，考虑的还算充分的，**多级反馈队列（\*MFQ\*）调度算法**，它是时间片轮转算法和优先级算法的综合和发展。它的工作方式：

![图片](https://mmbiz.qpic.cn/mmbiz_png/J0g14CUwaZcvw4t9kicec370n3cvX2JS9UUMwBVbgN2gdQib8C9AbDGaCmwUwhiaicsecVkywFJDCGp4rnWeZfvw6A/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

- 银行设置了多个排队（就绪）队列，每个队列都有不同的优先级，**各个队列优先级从高到低**，同时每个队列执行时间片的长度也不同，**优先级越高的时间片越短**。
- 新客户（进程）来了，先进入第一级队列的末尾，按先来先服务原则排队等待被叫号（运行）。如果时间片用完客户的业务还没办理完成，则让客户进入到下一级队列的末尾，以此类推，直至客户业务办理完成。
- 当第一级队列没人排队时，就会叫号二级队列的客户。如果客户办理业务过程中，有新的客户加入到较高优先级的队列，那么此时办理中的客户需要停止办理，回到原队列的末尾等待再次叫号，因为要把窗口让给刚进入较高优先级队列的客户。

可以发现，对于要办理短业务的客户来说，可以很快的轮到并解决。对于要办理长业务的客户，一下子解决不了，就可以放到下一个队列，虽然等待的时间稍微变长了，但是轮到自己的办理时间也变长了，也可以接受，不会造成极端的现象，可以说是综合上面几种算法的优点。

## 前端基础

- [ ] 绿叶学习网

> 开启一些H5 C3的内容



- [ ] 响应式网页设计实操练习

> `freecodecamp`





- [x] JS红宝书

今天看了第四章的内容 蛮有收获的！ 有不少很偏僻的知识点（日常编码用不到 但是出现问题就会很要命 比如面试中 哈哈哈）





- [x] JS每日一例

> 确定了之后的每一天要进行每日一例的学习

第一遍敲一下代码熟手 第二遍对知识点进行深挖 

[中文教程01](https://dustinhsiao21.github.io/Javascript30-dustin/)

[中文教程02](http://guahsu.io/JavaScript30/) 这个好像写得更全！

## 前端开发框架

- [x] react尚硅谷

复习了一下类组件、state属性的细节

- [ ] react习题练习



## 面试题

- [x] 每日一道面试题

找到了非常优秀的几个面试题汇总网站 回头慢慢总结！

附带[目录](http://markyun.github.io/2015/Front-end-Developer-Questions/)的[超棒面经](https://github.com/markyun/My-blog/tree/master/Front-end-Developer-Questions/Questions-and-Answers)！

[前端进阶之道](https://yuchengkai.cn/docs/frontend/#%E5%86%85%E7%BD%AE%E7%B1%BB%E5%9E%8B)



- [x] 力扣

刷了两题 数组专题

![在这里插入图片描述](https://img-blog.csdnimg.cn/f806150cff144fefb776fca85f90cb2a.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5pWy5Luj56CB55qE5bCP5o-Q55C05omL,size_19,color_FFFFFF,t_70,g_se,x_16)

### 217.存在重复元素

给定一个整数数组，判断是否存在重复元素。

如果存在一值在数组中出现至少两次，函数返回 `true` 。如果数组中每个元素都不相同，则返回 `false` 。

**示例 1:**

```
输入: [1,2,3,1]
输出: true
```

**示例 2:**

```
输入: [1,2,3,4]
输出: false
```

**示例 3:**

```
输入: [1,1,1,3,3,4,3,2,4,2]
输出: true
```



#### 解题思路与代码

##### 暴力解

是个人都会系列 击败10%的暴力解法

```js
var containsDuplicate = function(nums) {
    let slow = 0,fast = 1;
    for(; slow < nums.length - 1; slow++){
        for(fast = slow + 1; fast < nums.length; fast++){
            if(nums[slow] == nums[fast]){
                return true;
            }
        }
    }
    return false;
};
```







##### 排序法

```js
var containsDuplicate = function(nums) {
    // nums.sort(); 这样排序时间复杂度高一些！
    nums.sort((a, b) => a - b);
    // 上述方法是对数组进行冒泡排序 时间复杂度低一些！
    const n = nums.length; 
    for(let i = 0; i < n; i++){
        if(nums[i] == nums[i + 1]){
            return true;
        }
    }
    return false;
};
```



这里有一个很有意思的点

> `arr.sort(Comparator<>)`
> 对数组中相邻的两个数进行比较
> 一轮完了接着二轮 是一个冒泡排序

`(a, b) -> a - b` 相当于

```js
function(a,b){
	return a-b;
}
```

相当于Comparator<>  (Java中的内容)

**源码中写作(a, b) => a - b**

> `arr.sort(Comparator<>)`
> 是对数组进行冒泡排序
> ==如果 a - b>0 则 **b在前 a 在后**、直到有序==



- 而sort是不稳定的！所以尽量不要用

##### 哈希表

要会建立哈希表奥~

使用JS内置的[Set对象](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set)

```js
var containsDuplicate = function(nums) {
    const set = new Set();//借助Set对象创建哈希表set
    for(const x of nums){//使用js中的 for...of 函数快速遍历数组！类似Java中的强化循环！
        if(set.has(x)){
            return true;
        }
        set.add(x);
    }
    return false;
};
```



这里知识点满满啊！

- 使用JS中的 for...of 函数快速遍历数组！类似Java中的强化循环！

- ### [使用`Set`对象](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set#使用set对象)

  - .add
  - .has 查找是否有键值匹配
  - .delete
  - .size

  ```js
  let mySet = new Set();
  
  mySet.add(1); // Set [ 1 ]
  mySet.add(5); // Set [ 1, 5 ]
  mySet.add(5); // Set [ 1, 5 ]
  mySet.add("some text"); // Set [ 1, 5, "some text" ]
  let o = {a: 1, b: 2};
  mySet.add(o);
  
  mySet.add({a: 1, b: 2}); // o 指向的是不同的对象，所以没问题
  
  mySet.has(1); // true
  mySet.has(3); // false
  mySet.has(5);              // true
  mySet.has(Math.sqrt(25));  // true
  mySet.has("Some Text".toLowerCase()); // true
  mySet.has(o); // true
  
  mySet.size; // 5
  
  mySet.delete(5);  // true,  从set中移除5
  mySet.has(5);     // false, 5已经被移除
  
  mySet.size; // 4, 刚刚移除一个值
  
  console.log(mySet);
  // logs Set(4) [ 1, "some text", {…}, {…} ] in Firefox
  // logs Set(4) { 1, "some text", {…}, {…} } in Chrome
  ```



### 53.最大子序和

给定一个整数数组 `nums` ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。

 **示例 1：**

```
输入：nums = [-2,1,-3,4,-1,2,1,-5,4]
输出：6
解释：连续子数组 [4,-1,2,1] 的和最大，为 6 。
```

**示例 2：**

```
输入：nums = [1]
输出：1
```

**示例 3：**

```
输入：nums = [0]
输出：0
```

**示例 4：**

```
输入：nums = [-1]
输出：-1
```

**示例 5：**

```
输入：nums = [-100000]
输出：-100000
```



#### 解题思路与代码

这是之前刷题时候记录的[思路](https://blog.csdn.net/qq_45704942/article/details/116802889) 

##### 贪心法

在力扣上发了篇[文章](https://leetcode-cn.com/problems/maximum-subarray/solution/tan-xin-suan-fa-da-bai-hua-ti-jie-san-bu-xvpq/)~ 貌似因为这个升上了L2？:smile:

当前指针所指元素之前和小于0 则丢弃当前元素之前的数列

- 时间复杂度 O(N) 只遍历了一次数组
- 空间复杂度 O(1) 只使用了常数空间

贪心算法很好想！！

【1】维护一个记录相邻元素和的sum 从头开始记录 当然 这样就要做一个特殊值处理了

```js
let sum = nums[0];

if(n == 1){
    return nums[0];
}
```

【2】我们为了让相邻的一组数加起（`sum + nums[i]`）来最大

要保证==每一次相加都是左侧的 sum > 0==  我们要激发出这组元素的最大潜力！暂时碰到了一个小于零的`nums[i]`？没关系 万一它后面有个超级大的`nums[i+1]`呢？

当然 我们不能忘了在每次迭代中记录下来sum的巅峰时期！

```js
let max = nums[0];

max = max < sum ? sum : max;
```

确定了要保证sum大于零 我们可以写逻辑了！

【3】如果sum < 0 了 抛弃这组元素！从当前元素重新开始！！

```js
sum = nums[i];
```

【3’】sum > 0 继续往下加 

```js
sum += nums[i];
```



最后返回max 完事儿~so easy

完整代码如下：

```js
var maxSubArray = function(nums) {
    let n = nums.length;
    let max = nums[0];
    let sum = nums[0];
    if(n == 1){
        return nums[0];
    }
    else{
        for(let i = 1; i < n; i++){
            if(sum > 0){
                sum += nums[i];
            }
            else{
                sum = nums[i];//如果当前值之前的和不是大于零 那么sum值前移 =当前元素的值
            }
            max = max < sum ? sum : max;
        }
    }
    return max;
};
```





维护一个记录相邻元素和的sum 开始遍历数组 遍历数组的途中只要当前元素前的sum小于0 抛弃这个sum 以当前元素的值为sum 重新开始遍历



