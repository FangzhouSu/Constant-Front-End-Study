# 2021年学习日报

# 2021.9.2

9:40-00:30 晚睡晚起了欸

今日整体**状态一般**，好多学习任务都没完成，除每日任务外花费了较多时间在

- 字节青训营项目文档撰写
- 规划学习路线&探究新的每日总结方法

上面 

但还是很有意义！认识了非常优秀的一位学长 向他学习了每日总结的好习惯。

明天要更加高效并更加清晰自己的学习内容！

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

主要学习内容——计网的IP部分 知识体系更加清晰了 练习了一下HTML的布局 刷了leetcode02 踩了个JS无法向下取整的坑 这辈子都错不了这块儿了！！！！！！ 

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

- 2.TCP 泛洪攻击（TCP 建立连接过程中的攻击手段）与防护



#### **1、TCP 建立连接与断开连接的过程**

##### TCP 三次握手（连接过程）

![img](https://bytedancecampus1.feishu.cn/space/api/box/stream/download/asynccode/?code=ZmRiNTdjOGUxMmJkNzBlOGE0ZWZjYjRiODI4ZjJmOWRfZ0VPaVNkN0hVRnpTR25BUmtjbVMzeUttZ0hVeFNicTRfVG9rZW46Ym94Y250bWtGOElkVHFlZUN5blJLSWdCelhjXzE2MzA2NzU3NjI6MTYzMDY3OTM2Ml9WNA)

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

![img](https://bytedancecampus1.feishu.cn/space/api/box/stream/download/asynccode/?code=MWMzYWEwYTdhZGQyNjY1ZmMyNmY3OGNmMmZiYjk3ZDNfVDZUVXVPMlhHVEp1UjNuUlBKRXFPTjB2TWVWUDhtdFBfVG9rZW46Ym94Y25PUXU3NjlwV2xxNW1vRDR6T0tRR2lnXzE2MzA2NzU4MTI6MTYzMDY3OTQxMl9WNA)

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

![img](https://bytedancecampus1.feishu.cn/space/api/box/stream/download/asynccode/?code=N2Q3MzY1N2YyYzg0ODVmNDZlOTFjOWQwN2M0NGJkMjZfT3BCTkNwYTNNSlpzTXZmVmc3WlFlTVljTEFScW5raWVfVG9rZW46Ym94Y25WMkp2b1c4QzY4VlpEZks1RWR5MzJiXzE2MzA2NzU4NDA6MTYzMDY3OTQ0MF9WNA)

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

# 2021.9.4展望

> 9.4要出去玩耍 所以不报太高期望 学到啥简单记录下好了



