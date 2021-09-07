# 2021年学习总结

# 2021.9.6

```js
//今日主要收获 & 学习时间
Totally 470min
1.计网 10min
	/*简单完结了IP的学习 过了一下 ping的工作原理 与IP协议是密不可分的！ 尤其是ICMP协议
	之后要去学习网络综合篇 用我们学到的知识去了解网络中发生的一些事情*/
2.操作系统 30min
	/*学习了进程间通信的几种方法
	管道、消息队列、共享内存、信号量
	它们的优缺点要记住（有趣的是 后面的方法可以改善前面的缺点）*/
3.前端基础知识 
	3.1 H5 C3 0min
    3.2 JS 150min
    	/*了解了reduce方法
  		总结了一道面试题 然而用到了俺不会的正则 没整出来！
    	JS30-demo01 熟悉了github中部署网页的方式
    	红宝书没来得及看*/
4.前端开发框架 150min
	/*p11-p27 看到了 refs 这个组件三大属性的最后一个*/
5.刷题心得 110min
	/*lc1 两数之和
    lc88 合并两个有序数组*/
```



## 核心基础知识

### 计网

```js
//小林的图解网络 先刷几遍所需要的知识点 &读图解HTTP TCP等书籍 & 网络抓包实操练习 深入理解
简单完结了IP的学习 过了一下 ping的工作原理 与IP协议是密不可分的！ 尤其是ICMP协议
之后要去学习网络综合篇 用我们学到的知识去了解网络中发生的一些事情
```

判断与对方**网络是否畅通**，使用的最多的莫过于 `ping` 命令了

ping也算个面试常客了 所以要熟练掌握！

###  操作系统

```js
//小林的图解系统 & 学校课程学习 & 王道考研-OS 三者配合 高效学习
1.只来得及看图解系统 
	学习了进程间通信的几种方法
	管道、消息队列、共享内存、信号量
	它们的优缺点要记住（有趣的是 后面的方法可以改善前面的缺点）
```

#### 管道

如果你学过 Linux 命令（然而我没学过Linux啊这），那你肯定很熟悉「`|`」这个竖线。

```shell
$ ps auxf | grep mysql
```

上面命令行里的「`|`」竖线就是一个**管道**，它的功能是将前一个命令（`ps auxf`）的输出，作为后一个命令（`grep mysql`）的输入，从这功能描述，可以看出**管道传输数据是单向的**，如果<u>想相互通信，我们需要创建两个管道才行</u>。

#### 消息队列解决管道通信的效率低

管道的通信方式是效率低的，因此管道**不适合进程间频繁地交换数据**。

**消息队列**的通信模式就可以解决

比如，A 进程要给 B 进程发送消息，A 进程把数据放在对应的消息队列后就可以正常返回了，B 进程需要的时候再去读取数据就可以了。同理，B 进程要给 A 进程发送消息也是如此。

#### 共享内存解决消息队列消息拷贝的开销

消息队列的读取和写入的过程，都会有发生用户态与内核态之间的消息拷贝过程。那**共享内存**的方式，就很好的解决了这一问题。

共享内存的机制，就是拿出一块虚拟地址空间来，**映射**到相同的物理内存中 不需要拷贝来拷贝去，传来传去

![图片](https://mmbiz.qpic.cn/mmbiz_png/J0g14CUwaZckxn1SzJ697nE1m1wJzmPQicu3anA4icCr5sY8I4CWsXBUSsGQQGlWuWgNSNJThhyNrpaourrwITQQ/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

#### 信号量解决进程修改共享内存时的冲突

如果多个进程同时修改同一个共享内存，很有可能就冲突

可以 **使用信号量 达成保护机制**

信号量表示资源的数量，控制信号量的方式有两种原子操作：

-  **P 操作**，这个操作会把信号量减去 -1 
  - 相减后如果信号量 < 0，则表明资源已被占用，进程需==阻塞==等待
  - 相减后如果信号量 >= 0，则表明还有资源可使用，进程可正常继续执行。
- 另一个是 **V 操作**，这个操作会把信号量加上 1
  - 相加后如果信号量 <= 0，则表明当前有阻塞中的进程，于是会将该进程==唤醒==运行
  - 相加后如果信号量 > 0，则表明当前没有阻塞中的进程；

P 操作是用在**进入共享资源之前**，V 操作是用在**离开共享资源之后**，这两个操作是必须成对出现的。

## 前端基础

### 基础知识

```js
//每日学到的知识点 可以写文章 可以记在心里 总结下来！
1.JS数组方法 reduce() 还有很多骚操作 比如 求字符串中字母出现的次数 数组转对象 对象数组去重 将多维数组转化为一维  
```

- JS中数组方法 `reduce()` 的使用

参考文章 [JS中 reduce() 的用法](https://www.cnblogs.com/amujoe/p/11376940.html)

[JS数组reduce()方法详解及高级技巧](https://www.jianshu.com/p/e375ba1cfc47)

首先上概念

```js
array.reduce(function(total, currentValue, currentIndex, arr), initialValue);
/*
  total: 必需。初始值, 或者计算结束后的返回值。
  currentValue： 必需。当前元素。
  currentIndex： 可选。当前元素的索引；                     
  arr： 可选。当前元素所属的数组对象。
  initialValue: 可选。传递给函数的初始值，相当于total的初始值。
*/
```

然后举几个例子

1. 设定初始值的数组求和

   ```js
   const arr = [12, 34, 23];
   const sum = arr.reduce((total, num) => total + num);
   ```

   如果想给定一个初始值就在后面加上

   ```js
   const arr = [12, 34, 23];
   const sum = arr.reduce((total, num) => total + num, 10);
   ```

   结果如下

   ![在这里插入图片描述](https://img-blog.csdnimg.cn/4a82ccd51a404c9bae0a803d9ac3e3c2.png)

2. 传入特定数组的求和

```js
function sum(...numbers){
    return numbers.reduce((total, num)=>{
        return total + num
    })
}
console.log(sum(1,2,3,4))
```



![在这里插入图片描述](https://img-blog.csdnimg.cn/c19d6ab68b854d7a979e5a0ca55f64bd.png)

同样可以 以某个数为初始值求和

![在这里插入图片描述](https://img-blog.csdnimg.cn/f93d105480c84f5e9d1740db0c6e8e0f.png)

3. 对象数组求和 其实是同理的~

```js
var result = [
  { subject: 'math', score: 88 },
  { subject: 'chinese', score: 95 },
  { subject: 'english', score: 80 }
];
const sum = result.reduce((accumulator, cur) => accumulator + cur.score, 0); 
const sum = result.reduce((accumulator, cur) => accumulator + cur.score, -10);  // 总分扣除10分
```

![在这里插入图片描述](https://img-blog.csdnimg.cn/75c98a2ec2b442c686ef854c8b70e0d8.png)

### 响应式网页设计实操练习

```js
//freecodecamp刷题
```

### JS红宝书

```js
//经典书籍 目标：反复阅读
```

### JS30练

```js
//一天一个有趣的原生JS练手demo 边做边总结！
完成JS30-demo01
```

[demo01地址](https://fangzhousu.github.io/JS-30Demos/01_JS-Drum-Kit/index.html)

![在这里插入图片描述](https://img-blog.csdnimg.cn/92a51e30269c400f9cf5a96bf9685a4f.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5pWy5Luj56CB55qE5bCP5o-Q55C05omL,size_20,color_FFFFFF,t_70,g_se,x_16)

## 前端开发框架

### react尚硅谷

```js
//广受好评的react教程 先快速过一下 再去实操哦！
p11-p27 看到了 refs 这个组件三大属性的最后一个 蛮有收获的！
```



### react习题练习

```js
//先过一遍原理 再去敲代码加深印象（freecodecamp）
```

- 组件中render方法中的this为**组件实例对象**

```jsx
render(){
    console.log(this);//输出组件实例对象的名称
}
```



- 组件**自定义的方法中this为undefined**

```jsx
function demo(){
    'use strict'
    console.log(this);//输出undefined 因为有局部严格模式
}
function demo2(){
    //'use strict'
    console.log(this);//输出窗口window对象 因为去掉了严格模式
}
demo()
demo2()
```



- 引出来了 强制绑定this

```jsx
this.方法名 = this.方法名.bind(this);
```

之后就可以通过`this.方法名` 调用方法了 要不然this是窗口对象 它没这个方法啊！

## 面试题

### 每日刷点面试题

```js
//网上面试题辣么多 一天多看一些 然后同时也要研究一些题的答案！
1.实现一个 normalize 函数 这个没搞懂 先抄上了 
```

- 1.涉及了正则表达式、reduce的知识（刚刚学过reduce~）

```js
// 参考1
const normalize = (str) => {
  const result = {};
  
  str.split(/[\[\]]/g).filter(Boolean).reduce((obj, item, index, a) => {
    obj.value = item;
    
    if(index !== a.length -1) {
      return (obj.children = {});
    }
  }, result);
  
  return result;
}
```

- 2.不用正则表达式的做法

可见 要繁琐得多！

```js
function normalize(str) {
    let len = str.length, stack = [], j = 0;
    for (let i = 0; i < len; i++) {
        if (str[i] === '[') {
            j++;
        } else if (str[i] === ']') {
            j--;
        } else {
            if (!stack[j]) {
                stack[j] = '';
            }
            stack[j] = stack[j] + str[i];
        }
    }
    //上述步骤 代替正则 提取出字符串 
    if (stack.length && stack[0] === undefined) {
        stack.shift();
    }
    let root = {}, temp = root;
    for (let i = 0; i < stack.length; i++) {
        temp.value = stack[i];
        if (i !== stack.length - 1) {
            temp.children = {};
            temp = temp.children;
        }
    }
    return root;
}
```



### 力扣

```js
//跟着数据结构入门 的每日学习计划 进行刷题 一天2-3题！ 
//不要忘了温故而知新啊！
1.两数之和
2.
```



#### 1.两数之和

[1. 两数之和](https://leetcode-cn.com/problems/two-sum/)

给定一个整数数组 `nums` 和一个整数目标值 `target`，请你在该数组中找出 **和为目标值** *`target`* 的那 **两个** 整数，并返回它们的数组下标。

你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。

你可以按任意顺序返回答案。

**示例 1：**

```
输入：nums = [2,7,11,15], target = 9
输出：[0,1]
```

**示例 2：**

```
输入：nums = [3,2,4], target = 6
输出：[1,2]
```

**示例 3：**

```
输入：nums = [3,3], target = 6
输出：[0,1]
```

##### 解题思路与代码

###### 暴力解法

暴力枚举 没啥好说的 相当简单

```js
var twoSum = function(nums, target) {
    let n = nums.length;
    for(let i = 0; i < n; i++){
        for(let j = i + 1; j < n; j++){
            if(nums[i] + nums[j] === target){
                return [i, j];
            }
        }
    }
    return false;
};
```

- 时间复杂度为O(N^2^)毕竟是两层循环 时间复杂度还是高 

- 空间复杂度为O(1)

哈希表可以给优化一下！

###### 使用Map函数创建的哈希表

如果说暴力枚举是加法 那么哈希表的方法就是减法

这个方法第一下没想到！看了[题解](https://leetcode-cn.com/problems/two-sum/solution/jie-suan-fa-1-liang-shu-zhi-he-by-guanpengchn/)才明白… 对哈希表的用法还是没啥概念！得练！

哈希表存好数组之后 只需要一趟遍历就能获得结果（哈希查找的时间复杂度为O(1)）

这种方法的

- 时间复杂度仅为 O(N) 
- 当然了 空间复杂度因为哈希表的开销 涨到了 O(N)



```js
var twoSum = function(nums, target) {
    const map = new Map();
    for(let i = 0; i < nums.length; i++){
        if(map.has(target - nums[i])){
            return [map.get(target - nums[i]), i];//暴力枚举用加法 哈希映射用减法~ 反过来想~
        }
        map.set(nums[i], i);
    }
    return false;
};
```

利用[Map类](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Map) 创建了对象（实例）map 也就是我们的哈希表 - 要注意哈希表是不可以重复的奥！



###### 边存边比较的哈希表

先创建个json空数组 以键值对的方式存储

其实依旧是哈希表的思路（跟上面的方法二一毛一样） 区别是：

> 初始化哈希表的方式是用一个空对象{} 遇到不符合要求的值 就用`{nums[i]: i}`这样的形式存储一个键值对 如果在键里面找到了 `target - nums[i]` 自然符合题意 输出值即可



```js
var twoSum = function(nums, target) {
    const map = {};
    for(let i = 0; i < nums.length; i++){
        if(map[target - nums[i]] >= 0){
            return [map[target - nums[i]], i];//暴力枚举用加法 哈希映射用减法~ 反过来想~
        }
        map[nums[i]] = i;
    }
    return false;
};
```



#### 88.合并两个有序数组

[88. 合并两个有序数组](https://leetcode-cn.com/problems/merge-sorted-array/)

给你两个按 **非递减顺序** 排列的整数数组 `nums1` 和 `nums2`，另有两个整数 `m` 和 `n` ，分别表示 `nums1` 和 `nums2` 中的元素数目。

请你 **合并** `nums2` 到 `nums1` 中，使合并后的数组同样按 **非递减顺序** 排列。

**注意：**最终，合并后数组不应由函数返回，而是存储在数组 `nums1` 中。为了应对这种情况，`nums1` 的初始长度为 `m + n`，其中前 `m` 个元素表示应合并的元素，后 `n` 个元素为 `0` ，应忽略。`nums2` 的长度为 `n` 。



**示例 1：**

```
输入：nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
输出：[1,2,2,3,5,6]
解释：需要合并 [1,2,3] 和 [2,5,6] 。
合并结果是 [1,2,2,3,5,6]  ，前两个和倒数第三个为 nums1 中的元素。
```

**示例 2：**

```
输入：nums1 = [1], m = 1, nums2 = [], n = 0
输出：[1]
解释：需要合并 [1] 和 [] 。
合并结果是 [1] 。
```

**示例 3：**

```
输入：nums1 = [0], m = 0, nums2 = [1], n = 1
输出：[1]
解释：需要合并的数组是 [] 和 [1] 。
合并结果是 [1] 。
注意，因为 m = 0 ，所以 nums1 中没有元素。nums1 中仅存的 0 仅仅是为了确保合并结果可以顺利存放到 nums1 中。
```



##### 解题思路与代码

又走了牛角尖 输出结果不对就一直在那里干想！

###### 双指针

收到”合并链表“启发的双指针法 其他暂时不研究了 这题拐到一个死胡同里没绕过来！太蠢了！

> 下回再输出错误==老老实实按照用例的数值  配合画图把流程走明白==了！别在那里干想！！

```js
var merge = function(nums1, m, nums2, n) {
    // const arr = new Array(m + n).fill(0); 和官方题解学了个高级一点的创建数组的方法
    const arr = [];
    let i = 0, j = 0;
    let cur = 0;//用来获取数组中的元素
    while(i < m || j < n){
        if(i === m){
            cur = nums2[j++];
        }
        else if(j === n){
            cur = nums1[i++];
        }
        else if(nums1[i] < nums2[j]){
            cur = nums1[i++];
        }
        else{
            cur = nums2[j++];
        }
        arr[i + j - 1] = cur;
    }
    for(let i = 0; i < arr.length; i++){//因为题目返回nums1 所以要把arr的内容再赋给nums1
        nums1[i] = arr[i];
    }
    return nums1;
};
```



# 2021.9.7

```js
 //今日主要收获 & 学习时间
 Totally 450min
 1.计网 10min
     /**/
 2.操作系统 30+30min
     /*王道考研操作系统 学习了 3p 的内容 还在操作系统概述的内容中 3p/6p
     图解系统 完结进程间通信 明天学习多线程同步的内容 主要是关注多线程竞争共享资源的问题 */
 3.前端基础知识 
     3.1 H5 C3 0min
     3.2 JS 150+60min
         /*demo2的练习*/
 4.前端开发框架 60min
     /*p28-32*/
 5.刷题心得 1min
     /*lc350
     lc121*/
```

晚上看球效率崩掉了

难受！

## 核心基础知识

### 计网

```js
//小林的图解网络 先刷几遍所需要的知识点 &读图解HTTP TCP等书籍 & 网络抓包实操练习 深入理解
简单浏览了下网络的一些重点内容
```



###  操作系统

```js
//小林的图解系统 & 学校课程学习 & 王道考研-OS 三者配合 高效学习
1.王道 学习了一些操作系统基础的内容：
	操作系统的概念、功能、目标；
    四大特征 并发 共享（前两个是最基本的特征 没有并发和共享就谈不上虚拟与异步），虚拟 异步；
    发展与分类
2.图解系统
	学习了进程间通信的内容
    	信号
        套接字
        进程间通信的六种方法的小结：优缺点 一些细节
    准备学习多线程同步的内容
```

#### 1.操作系统基础

【1】概念功能目标

![请添加图片描述](https://img-blog.csdnimg.cn/36bca06bce63435594d9e6c90987fbcb.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5pWy5Luj56CB55qE5bCP5o-Q55C05omL,size_15,color_FFFFFF,t_70,g_se,x_16)

【2】四大特征

![请添加图片描述](https://img-blog.csdnimg.cn/e1b9b5cc3d17485bbdc0acdeb3599c0a.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5pWy5Luj56CB55qE5bCP5o-Q55C05omL,size_19,color_FFFFFF,t_70,g_se,x_16)

【3】发展与分类

要理解各阶段的优缺点

因为各阶段的主要优点都是解决上一阶段的主要缺点

![请添加图片描述](https://img-blog.csdnimg.cn/7c924bc75bde47389975307daeaeacdf.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5pWy5Luj56CB55qE5bCP5o-Q55C05omL,size_15,color_FFFFFF,t_70,g_se,x_16)





#### 2.进程间通信小结

【1】由于每个进程的用户空间都是独立的，不能相互访问，这时就需要借助内核空间来实现进程间通信，原因很简单，每个进程都是共享一个内核空间。像下图这样

![图片](https://mmbiz.qpic.cn/mmbiz_png/J0g14CUwaZckxn1SzJ697nE1m1wJzmPQ0htwayMPsS42OhdjA1MOZnsPvUuOqB25UDUkeYpWvKQ7FGqtUhZjaw/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

【2】Linux 内核提供了不少进程间通信的方式，其中最简单的方式就是管道，管道分为

- 「匿名管道」 没有名字标识，匿名管道是特殊文件只存在于内存，没有存在于文件系统中，shell 命令中的「`|`」竖线就是匿名管道。
  - 通信的数据是**无格式的流并且大小受限**，通信的方式是**单向**的，数据只能在一个方向上流动
  - 如果要双向通信，需要创建两个管道
  - **匿名管道是只能用于存在父子关系的进程间通信**
  - 匿名管道的**生命周期**随着进程创建而建立，随着进程终止而消失。
- 「命名管道」突破了匿名管道只能在亲缘关系进程间的通信限制，因为使用命名管道的前提，需要在文件系统创建一个类型为 p 的设备文件，那么毫无关系的进程就可以通过这个设备文件进行通信。
  - 另外，不管是匿名管道还是命名管道，进程==写入的数据都是**缓存在内核**中==，另一个进程==读取数据时候自然也是从内核中获取==



【3】**消息队列**==克服了管道通信的数据是无格式的字节流的问题（也提高了效率）==

- 消息队列通信的速度==不是最及时的，毕竟**每次数据的写入和读取都需要经过用户态与内核态之间的拷贝过程。**==



【4】**共享内存**可以==解决消息队列通信中用户态与内核态之间数据拷贝过程带来的开销==

**它直接分配一个共享空间，每个进程都可以直接访问**，就像访问进程自己的空间一样快捷方便，不需要陷入内核态或者系统调用，大大提高了通信的速度，享有==**最快**的进程间通信方式==之名。

但是便捷高效的共享内存通信，==**带来新的问题，多进程竞争同个共享资源会造成数据的错乱。**==



【5】那么，就==需要**信号量**来保护共享资源==，以确保任何时刻只能有一个进程访问共享资源，这种方式就是**互斥访问**。

- **信号量不仅可以<u>实现访问的互斥性</u>，还可以<u>实现进程间的同步</u>**。

- 信号量其实是一个计数器，表示的是资源个数，其值可以通过两个原子操作来控制，分别是 **P 操作和 V 操作**。

【6】与信号量名字很相似的叫**信号**，它俩名字虽然相似，但功能一点儿都不一样。

- 信号是进程间通信机制中**==唯一的异步通信机制==**，信号可以在**应用进程和内核之间直接交互**，内核也可以利用信号来通知用户空间的进程发生了哪些系统事件。
- 信号事件的来源主要有硬件来源（如键盘 `Cltr+C` ）和软件来源（如 `kill` 命令）。
- 一旦有信号发生，**进程有三种方式响应信号** （这里没太搞懂这三种响应信号分别的作用）
  - **1. 执行默认操作**
  - **2. 捕捉信号**
  - **3. 忽略信号**
- 有两个信号是应用进程无法捕捉和忽略的，即 `SIGKILL` 和 `SEGSTOP`，这是为了方便我们能**在任何时候结束或停止某个进程。**



【7】前面说到的通信机制，都是工作于同一台主机，如果**要与不同主机的进程间通信，那么就需要 Socket 通信了**。

- Socket 实际上不仅用于不同的主机进程间通信，还可以用于本地主机进程间通信。
- 可根据创建 Socket 的类型不同，分为三种常见的通信方式
  - 基于 TCP 协议的通信方式
  - 一个是基于 UDP 协议的通信方式
  - 一个是本地进程间通信方式





【8】以上，就是进程间通信的主要机制了。你可能会问了，那线程通信间的方式呢？

同个进程下的线程之间都是**共享进程的资源**，<u>只要是共享变量都可以做到线程间通信</u>（比如全局变量）

所以对于线程间关注的不是通信方式，而是关注==多线程竞争共享资源的问题==

这里注意 信号量也同样可以在线程间实现互斥与同步：

- 互斥的方式，可保证任意时刻只有一个线程访问共享资源；
- 同步的方式，可保证线程 A 应在线程 B 之前执行；

挺好使哈这个信号量 下一章详细学习下



#### 3.多线程同步前瞻

同个进程下的线程都是共享进程的资源——只要是共享变量就可以做到线程间的通信（比如全局变量 就是个很好的例子）

所以对于线程间 **不需要关注通信方式** 它们都是资源共享滴 通信轻轻松松哈！



但是！既然都用一个资源 就容易出现冲突！如果多个线程为了这同一个资源打起来了 该如何让它们安分点儿？

- 可以使用信号量在线程间实现互斥（保证**任何时刻只有一个线程访问共享资源**）与同步（保证**线程A应在线程B之前执行**）~

更多内容详见“多线程同步”的内容



## 前端基础

### 基础知识

```js
//每日学到的知识点 可以写文章 可以记在心里 总结下来！
1.模板字符串
```

- 了解到了模板字符串 很有趣的用法！ES6中兴起

[模板字符串（` `）的用途](https://blog.csdn.net/zwt_guiji/article/details/81979299)

[MDN文档 模板字符串](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Template_literals)

这篇文章很不错

总得来说就是可以

- **当作普通字符串使用，**
- **也可以用来定义多行字符串，**
- **或者在字符串中嵌入变量**

今天的JS30demos中遇到了这个用法感觉很奇特！

```js
function setRotate(deg) {
    if (deg === 0) {
        document.querySelector('.hand').style.transition = 'all 0s';
    } 
    else {
         document.querySelector('.hand').style.transition = 'all 0.05s';
    }
            // 
    return `rotate(${deg}deg)`;//这个${deg}是传入的deg变量的
}
```

这个函数是用来改变CSS样式的

搭配着 `要改变样式的元素.style.transform = setRotate(度数);`使用

从而可以改变对应元素的样式 这里是改变角度~



### 响应式网页设计实操练习

```js
//freecodecamp刷题
```







### JS红宝书

```js
//经典书籍 目标：反复阅读
看了一下第五章基本引用类型
	Date
    RegExp
    原始值包装类型
    单例内置对象
```

JS中对象称为引用值

几种**内置的引用类型**可用于创建特定类型的对象。

- 引用值与传统面向对象中的类相似 但是实现不同
- **Date类型**提供关于日期和时间的信息 包括**当前日期、时期、相关计算**
- JS比较独特的一点：函数实际上是Function类型的实例（函数也是对象！）所以函数也有方法 用于增强其能力
- 存在原始值包装类型的存在 所以JS中的原始值可以被当成对象来使用。
  - Boolean
  - Number
  - String



### JS30练

```js
//一天一个有趣的原生JS练手demo 边做边总结！‘
demo2 一个时钟 做了一些小优化
```

https://fangzhousu.github.io/JS-30Demos/02_JS&CSS-Clock/index.html

[![在这里插入图片描述](https://camo.githubusercontent.com/854fce1278fe46d0a27f1045af36f1a8f59a0e8e78fd3e3183c34c35dba9e38a/68747470733a2f2f696d672d626c6f672e6373646e696d672e636e2f33363335396430376333646234373262393962663134336531376433643034312e706e673f782d6f73732d70726f636573733d696d6167652f77617465726d61726b2c747970655f5a484a766157527a5957357a5a6d467362474a685932732c736861646f775f35302c746578745f51314e455469424135705779354c756a353643423535714535624350356f2d5135354330356f6d4c2c73697a655f32302c636f6c6f725f4646464646462c745f37302c675f73652c785f3136)](https://camo.githubusercontent.com/854fce1278fe46d0a27f1045af36f1a8f59a0e8e78fd3e3183c34c35dba9e38a/68747470733a2f2f696d672d626c6f672e6373646e696d672e636e2f33363335396430376333646234373262393962663134336531376433643034312e706e673f782d6f73732d70726f636573733d696d6167652f77617465726d61726b2c747970655f5a484a766157527a5957357a5a6d467362474a685932732c736861646f775f35302c746578745f51314e455469424135705779354c756a353643423535714535624350356f2d5135354330356f6d4c2c73697a655f32302c636f6c6f725f4646464646462c745f37302c675f73652c785f3136)

## 前端开发框架

### react尚硅谷

```js
//广受好评的react教程 先快速过一下 再去实操哦！
p28-32 看了ref 每天开始看受控组件啥的
```

组件内的标签可以**定义ref属性来标识自己**

- 字符串形式的ref（不建议使用 因为效率低 已经过时 可能在未来的版本被废弃）

  ![在这里插入图片描述](https://img-blog.csdnimg.cn/219192c47e8042539127239685628831.png)

- 回调形式的ref

![在这里插入图片描述](https://img-blog.csdnimg.cn/1f784ebefdd948f58d0936149acf8202.png)

- createRef创建ref容器·（容器myRef可以存储被ref所标识的节点）

![在这里插入图片描述](https://img-blog.csdnimg.cn/ade96f5bf94f4ac49fe3a4226ef8f233.png)

### react习题练习

```
  //先过一遍原理 再去敲代码加深印象（freecodecamp）
```



## 面试题

### 每日刷点面试题

```js
//网上面试题辣么多 一天多看一些 然后同时也要研究一些题的答案！
```



### 力扣

```js
//跟着数据结构入门 的每日学习计划 进行刷题 一天2-3题！ 
//不要忘了温故而知新啊！
350.两个数组的交集II
121.【经典面试题】买卖股票的最佳时机
时间有些不足 就不去想动态规划了 今天主要跟——
	第一题”哈希表“玩儿命了 
    另外第二题的贪心方法很有启发性！
```

#### 350.两个数组的交集II

[350. 两个数组的交集 II](https://leetcode-cn.com/problems/intersection-of-two-arrays-ii/)

给定两个数组，编写一个函数来计算它们的交集。

 **示例 1：**

```
输入：nums1 = [1,2,2,1], nums2 = [2,2]
输出：[2,2]
```

**示例 2:**

```
输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]
输出：[4,9]
```

##### 解题思路与代码

两个思路都想到了 但是编码时出现了不同的问题 都没有一次AC掉…

###### 哈希表

最开始我想 这题肯定不能用哈希表啊！这哈希表又不能存重复的元素！

然而我忘记了 哈希表的键值对可以自由设置啊…

这里是 **{num数组元素值: count数组元素出现的次数}** 的哈希表

```js
var intersect = function(nums1, nums2) {
    // 本题 哈希表中存储的形式为 {num: count}
    let map = new Map();
    let res = [];
    if(nums1.length > nums2.length){
        // 将较短的数组存入哈希表中 降低空间复杂度 一天一个优化小技巧~
        return intersect(nums2, nums1);
    }
    for(let x of nums1){
        let count = map.get(x);//根据数组的元素（也就是键） 获得“值”
        if(count > 0){//判断这个值是否已经插入过哈希表
            count++;
            map.set(x, count);
        }
        else{
            map.set(x, 1)
        }
    }
    for(let x of nums2){
        // 开始进行比对
        let count = map.get(x);//如果哈希表中有x这个键 那么获取它对应的count
        if(count > 0){
            res.push(x);
            count--;
            map.set(x, count);
        }
    }
    return res;
};
```





###### 排序 + 双指针

这里最开始错在了数组添加元素上…（第一次直接使用JS的数组来进行添值 不老会的 现在会了！！）

然后发现遍历的方法有问题 最开始双指针的思路还不是很明朗 使用了两个for循环的嵌套 发现思路转不过来了！

这时候就**应该想到while循环**！！！！

换用了while循环 很轻松地AC掉

```js
var intersect = function(nums1, nums2) {
    nums1.sort((a, b) => a - b);
    nums2.sort((a, b) => a - b);
    let l1 = 0, l2 = 0;
    let res = [];
    while(l1 < nums1.length && l2 < nums2.length){
        if(nums1[l1] === nums2[l2]){
            res.push(nums1[l1]);
            l1++;
            l2++;
        }
        else if(nums1[l1] > nums2[l2]){
            l2++;
        }
        else{
            l1++
        }
    }
    return res;
};
```



#### 121.买卖股票的最佳时机

[121. 买卖股票的最佳时机](https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/)

给定一个数组 `prices` ，它的第 `i` 个元素 `prices[i]` 表示一支给定股票第 `i` 天的价格。

你只能选择 **某一天** 买入这只股票，并选择在 **未来的某一个不同的日子** 卖出该股票。设计一个算法来计算你所能获取的最大利润。

返回你可以从这笔交易中获取的最大利润。如果你不能获取任何利润，返回 `0` 。

**示例 1：**

```
输入：[7,1,5,3,6,4]
输出：5
解释：在第 2 天（股票价格 = 1）的时候买入，在第 5 天（股票价格 = 6）的时候卖出，最大利润 = 6-1 = 5 。
注意利润不能是 7-1 = 6, 因为卖出价格需要大于买入价格；同时，你不能在买入前卖出股票。
```

**示例 2：**

```
输入：prices = [7,6,4,3,1]
输出：0
解释：在这种情况下, 没有交易完成, 所以最大利润为 0。
```



##### 解题思路和代码

###### 暴力法 

超时了。

```js
var maxProfit = function(prices) {
    let n = prices.length - 1;//最后一个元素的索引
    let max = 0, profit = 0;
    for(let i = n; i > 0; i--){
        for(let j = i - 1; j >= 0; j--){
            profit = prices[i] - prices[j];
            if(profit > 0){
                max = profit > max ? profit : max;
            }
        }
    }   
    return max;
};
```

- 时间复杂度O(n^2^)
- 空间复杂度：O(1)

###### 贪心法

”贪心“算法关键：怎么个贪心法——

- 让自己每日的买入价格最小 

- 让自己每日的`卖出价格 - lowPrice`最高

```js
var maxProfit = function(prices) {
    let lowPrice = prices[0];
    let profit = 0;
    for(let i = 0; i < prices.length; i++){
        if(prices[i] < lowPrice){
            lowPrice = prices[i];//每日贪婪地更新最低价格
        }
        else{
            profit = Math.max(prices[i] - lowPrice, profit);//每日贪婪地获取最大的收益（恰好同一天是最低价格就不用算啦！）
        }
    }
    return profit;
};
```

- 时间复杂度O(n^2^)
- 空间复杂度：O(1)
