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





# 2021.9.3展望

> 记录前一天对后一天的展望~

## 核心基础知识

- [ ] 计网

> 今天继续看IP篇的内容



- [ ] 操作系统

> 看下线程的内容
>





## 前端基础

- [ ] 绿叶学习网

> 开启一些H5 C3的内容



- [ ] 响应式网页设计实操练习

> `freecodecamp`



- [ ] JS红宝书

> 续看第三章 争取往下看一看 



- [ ] JS算法与数据结构实操练习

> `freecodecamp`



## 前端开发框架

- [ ] react尚硅谷

> 从p11开始看



- [ ] react习题练习

> `freecodecamp`



## 面试题

- [ ] 每日一道面试题



- [ ] 力扣

> 今天打算把链表的最后一题干掉

