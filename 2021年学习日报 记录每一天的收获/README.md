2021年学习总结

> 后期打算分3-4周 截出来一个当月学习日记 因为全放在一起太多了！

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

> 红宝书p179 两句话讲明白了。
>
> 传给reduce()和 reduceRight()的函数接收 4 个参数：**上一个归并值、当前项**、当前项的索引和数 组本身。这个函数返回的任何值都会作为下一次调用同一个函数的第一个参数
>
> `let sum = values.reduce((prev, cur, index, array) => prev + cur);`

参考文章 [JS中 reduce() 的用法](https://www.cnblogs.com/amujoe/p/11376940.html)

[JS数组reduce()方法详解及高级技巧](https://www.jianshu.com/p/e375ba1cfc47)

首先上概念

```js
array.reduce(function(prev, currentValue, currentIndex, arr), initialValue);
/*
  prev: 必需。上一个归并值 初始值, 或者计算结束后的返回值。
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
88.合并两个有序数组
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

受到”合并链表“启发的双指针法 其他暂时不研究了 这题拐到一个死胡同里没绕过来！太蠢了！

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





# 2021.9.8

```js
//今日主要收获 & 学习时间
Totally 260min
1.计网 40min
/*DNS服务器如何进行域名到IP地址的解析
了解到了**HTTP的数据包**的传输是由传输层的**协议栈**来做*/
2.操作系统 40min
/*1.梳理了一下多线程同步的内容
	竞争与协作
    互斥与同步的实现
    经典同步问题
2.王道考研
	OS的运行机制与体系结构
    中断和异常
    系统调用*/
3.前端基础知识 
3.1 H5 C3 0min
3.2 JS 120min
/* 通过刷一道面试题，对题目中运用到的知识点进行了总结和学习
1.复习了一下展开运算符 ...
2.复习了一下`array.sort((a, b) => {return a - b;})`的冒泡排序法
3.复习了一下JS数组转字符串的三种方法（由那道面试题引出来的）、字符串转数组的方法*/
3.3 JS红宝书
4.前端开发框架 0min
/**/
5.刷题心得 60min
/*杨辉三角*/
```

今天晚上上了两节琴课之后效率就降到0了 逛了一晚上b站 推荐算法太恐怖！（有趣的是 其中一个琴童麻麻在北京开软件开发公司的 还问了下我的技术栈哈哈哈好巧！“以后你可以来我这里实习嗷[doge]”）

今天主要收获是在下午那会儿 通过刷一道面试题，对题目中运用到的知识点进行了总结和学习！做了蛮多笔记也学到不少东西

另外 今天对计网方面收获也很大！

了解了 DNS服务器如何进行域名到IP地址的解析；了解到了**HTTP的数据包**的传输是由传输层的**协议栈**来做！

## 核心基础知识

### 计网

```js
//小林的图解网络 先刷几遍所需要的知识点 &读图解HTTP TCP等书籍 & 网络抓包实操练习 深入理解
1.HTTP应用层
2.用于域名解析的DNS服务器
3.帮助数据包找到目的地的关键部分——协议栈
```

#### 1.HTTP应用层

浏览器做的第一步工作就是要对 `URL` 进行解析 从而生成发送给 `Web` 服务器的==请求信息==。

应用层工作完事儿~

HTTP数据包被发送到网络中！

#### 2.DNS服务器进行域名解析的工作流程

两张图 一个流程解释得贼清楚

域名的层级关系类似一个树状结构：

- 根 DNS 服务器
- 顶级域 DNS 服务器（com）
- 权威 DNS 服务器（server.com）

![图片](https://mmbiz.qpic.cn/mmbiz_png/J0g14CUwaZdCwxNydn5YuT0s7aLuqWCvN6F6eZ2vAU04o8gh1mJ6l7ovc7wsCvTVMvCFHyHqfsRUKtWYnblsCA/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)



> 由== == 框起来得就是 在这个流程中的主角们（包括客户端 DNS服务器 ）

1. ==客户端==首先会**发出一个 DNS 请求** 问 www.server.com 的 IP 是啥，并发给==本地 DNS 服务器==（也就是客户端的 TCP/IP 设置中填写的 DNS 服务器地址）
2. ==本地域名服务器==收到客户端的请求后 
   - 如果==缓存==里的表格能找到 www.server.com，则它直接返回 IP 地址。
   - 如果没有，本地 DNS 会去问它的==根域名服务器==：“老大， 能告诉我 www.server.com 的 IP 地址吗？” 根域名服务器是最高层次的，它**不直接用于域名解析**，但能指明一条道路。
3. ==根 DNS==（服务器） 收到来自==本地 DNS== 的请求后，发现后置是 .com，说：“www.server.com 这个域名归 .com 区域管理”，我给你 .com ==顶级域名服务器==地址给你，你去问问它吧。”
4. ==本地 DNS== 收到顶级域名服务器的地址后，发起请求问“老二， 你能告诉我 www.server.com  的 IP 地址吗？”
5. ==顶级域名服务器==说：“我给你负责 www.server.com 区域的==权威 DNS 服务器的地址==，你去问它应该能问到”。（也是负责指路的~）
6. ==本地 DNS== 于是转向问权威 DNS 服务器：“老三，www.server.com对应的IP是啥呀？” server.com 的==权威 DNS 服务器==，它是域名解析结果的原出处。为啥叫权威呢？就是我的域名我做主。
7. ==权威 DNS 服务器==查询后将对应的 IP 地址 X.X.X.X 告诉==本地 DNS==。
8. ==本地 DNS== 再将 IP 地址返回客户端，客户端和目标建立连接。——目标达成！



至此，我们完成了 DNS 的解析过程。现在总结一下，整个过程我画成了一个图。

![图片](https://mmbiz.qpic.cn/mmbiz_png/J0g14CUwaZdCwxNydn5YuT0s7aLuqWCv5bBPibRf9nk4wIb6J3jP62L6NEmPk3HicMUgf8VatcBicynP6BKLeT6GQ/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

#### 3.指南好帮手——协议栈

> 这里只是一个总览哈！要有层次感！

通过 DNS 获取到 IP 后，就可以把 HTTP 的传输工作交给操作系统中的**协议栈**。

协议栈的内部分为几个部分，分别承担不同的工作。上下关系是有一定的规则的，上面的部分会向下面的部分委托工作，下面的部分收到委托的工作并执行。

![图片](https://mmbiz.qpic.cn/mmbiz_png/J0g14CUwaZdCwxNydn5YuT0s7aLuqWCvbLic0XNMIJgJ0pDm6K4s39vgGO4enAIT1jzDXfQPYrdiaQe8TMy11Wicw/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

协议栈的上半部分有两块 分别是——

- 负责收发数据的 TCP 和 UDP 协议，它们两会**接受应用层的委托执行收发数据的操作**。
- 协议栈的下面一半是用 IP 协议控制网络包收发操作，在互联网上传数据时，数据会被切分成一块块的网络包，而**将网络包发送给对方的操作就是由 IP 负责的**。
  - 此外 IP 中还包括 `ICMP` 协议和 `ARP` 协议。
    - `ICMP` 用于==告知==网络包传送过程中==产生的错误以及各种控制信息==。
    - `ARP` 用于==根据 IP 地址==查询相应的==以太网 MAC 地址==。

IP 下面的网卡驱动程序负责**控制网卡硬件**

而最下面的网卡（物理硬件网卡）则负责完成实际的收发操作，也就是对**网线中的信号**执行发送和接收操作。



#### 截至今天 我们的数据包经历的过程

1.一个孤单 HTTP 数据包很迷茫！

2.数据包表示：“DNS 老大哥厉害呀，**找到了目的地**了！我还是很迷茫呀，我要发出去，接下来我需要谁的帮助呢?”

3.数据包看了这份指南表示：“原来我需要那么多大佬的协助啊，那我先去找找 TCP 大佬！”

数据包在去传输层的路上哈 第二天继续学习那部分的内容

###  操作系统

```js
//小林的图解系统 & 学校课程学习 & 王道考研-OS 三者配合 高效学习
1.梳理了一下多线程同步的内容
	竞争与协作
    互斥与同步的实现
    经典同步问题
2.王道考研
	OS的运行机制与体系结构
    中断和异常
    系统调用
```



## 前端基础

### 基础知识

```js
//每日学到的知识点 可以写文章 可以记在心里 总结下来！
1.复习了一下展开运算符 ...
2.复习了一下`array.sort((a, b) => {return a - b;})`的冒泡排序法
3.复习了一下JS数组转字符串的三种方法（由那道面试题引出来的）、字符串转数组的方法
```

#### 1.展开运算符

- 【1】展开一个数组

```js
console.log(...arr1);//6 6 6
```

- 【2】连接两个数组

注意这里 […arr1, …arr2] 是一个Object

```js
let arr = [...arr1, ...arr2];
console.log(arr);//[6, 6, 6, 8, 8, 8]
console.log(...arr1, ...arr2)//6 6 6 8 8 8
console.log(typeof(arr));//Object
```

- 【3】在函数中使用 可以直接传入一个数组进去

不使用展开运算符的话 数组形式是 [6,6,6]

使用展开运算符 传入形式可以简单地输入一组数字 6,6,6

```js
function sum(...numbers){
    return numbers.reduce((preValue, currentValue) => {
        return preValue + currentValue;//这里顺带着复习下reduce方法 —— 可以用于数组求和等多个
    })
}
console.log(sum(6,6,6));
```

- 【4】==在对象中可以使用展开语法==

  - 用途1 *即使把person赋给了person2 person2在更改对象属性地时候也不会影响person*

  ```js
  let person = {name:'bill', age:21};
  let person2 = {...person};
  let person3 = person2;
  person2.name = 'gates';
  
  console.log(person);//{name: "bill", age: 21} 
  //即使把person赋给了person2 person2在更改对象属性地时候也不会影响person
  console.log(person2);//{name: "gates", age: 21}
  console.log(person3);//{name: "gates", age: 21}
  //只单纯地将person2赋给person3 就会导致对属性地改变一并赋给新的对象实例
  ```

  - 用途2 给对象扩充属性

    ```js
    let person = {name:'bill', age:21};
    let person3 = {...person, name:'oho', hobby:"eating"};
    
    console.log(person3)//{name: "oho", age: 21, hobby: "eating"}
    ```

  - react中也可以用到——
  
  9-14更新
  
  传props给子组件时 如果其中属性很多 组件一个个接收 很麻烦！
  
  
  
  

#### 2.`array.sort((a, b) => {return a - b;})`的冒泡排序法

`arr.sort(Comparator<>)`
对数组中相邻的两个数进行比较
一轮完了接着二轮 是一个冒泡排序



`(a, b) -> a - b` 相当于

```js
function(a,b){
	return a-b;
}
```

相当于Comparator<>  (Java中的内容)

**源码中写作(a, b) => a - b** (a-b等价于  return a - b;)

> `arr.sort(Comparator<>)`
> 是对数组进行冒泡排序
> ==如果 a - b < 0 则 **a在前  b在后**、直到有序==



而这个不光可以用于从小到大/从大到小 排列数组

还可以用于做一些复杂的操作



今天的面试题中 将一组字符串数组按照 黄、红、蓝 的顺序排列好 就用到了这个~

```js
var sort = function(str){
    let arr = str.split('');
    
    arr.sort((a, b) => {
        return getNumByType(a) - getNumByType(b);
    })//这里已经按照数组的顺序排列好了~
    
    return arr.toString();//再转成字符串形式即可
}
var getNumByType = function(num){
    switch(num){
    	case '黄':
            return 1;
        case '红':
            return 2;
        default:
            return 3;
    }
}
let str = ('红黄蓝蓝蓝黄红红黄黄');
console.log(sort(str));//黄,黄,黄,黄,红,红,红,蓝,蓝,蓝
```



#### 3.JS数组转字符串的三种方法

[JS数组转字符串（3种方法）](http://c.biancheng.net/view/5673.html)

- `.toString()` 顾名思义咯~
- `.join()` 可以指定分隔符奥！

```js
var a = [1,2,3,4,5];  //定义数组
var s = a.join("==");  //指定分隔符
console.log(s);  //返回字符串“1==2==3==4==5”
```

- `toLocaleString()` 方法与 `toString()` 方法用法基本相同 使用用户所在地区特定的分隔符把生成的字符串连接起来形成一个字符串。

这个方法还可以用来把对象转化为字符串 常与Date对象结合使用

```js
var d=new Date();
var n=d.toLocaleString();
console.log(n);  //将Date对象转换为字符串 
//格式类似：2021/9/8下午6:27:05
```



另外 字符串转化为数组的方法为——

`.split()` 同样可以指定分隔符





```
  //freecodecamp刷题
```







### JS红宝书

```
  //经典书籍 目标：反复阅读
```





### JS30练

```
  //一天一个有趣的原生JS练手demo 边做边总结！
```

今天没做！ 晚上回来太拉跨了！

## 前端开发框架

### react尚硅谷

```
  //广受好评的react教程 先快速过一下 再去实操哦！
```

我最爱的react今天也没学！

### react习题练习

```
  //先过一遍原理 再去敲代码加深印象（freecodecamp）
```



## 面试题

### 每日刷点面试题

```js
//网上面试题辣么多 一天多看一些 然后同时也要研究一些题的答案！
```

今天做了一个简单的算法题 用了两种方法

> - 013-【算法】【中等】在一个字符串中有红、黄、蓝三种颜色的球，且个数不相等、顺序不一致，请为该字符串中的内容进行排序。使得排序后得到一个数组，其中球的顺序为:黄、红、蓝。
>
> 例如：红蓝蓝黄红黄蓝红红黄红，排序后为：黄黄黄红红红红红蓝蓝蓝。

#### 解题思路及代码：

这里注意一个小细节

==字符串==：形如 `('红黄蓝蓝蓝黄红红黄黄')` ！

##### 字符串数组转数组法

自己想的 有点笨拙的方法 没有技巧 就是用了个前置运算符 把几个数组拼起来了。

```js
var sort = function(str){
    let arr = str.split('');
    let yellow = [];
    let red = [];
    let blue = [];
    for(let x of arr){
        if(x === "黄"){
            yellow.push(x);
        }
        else if(x === "红"){
            red.push(x);
        }
        else if(x === "蓝"){
            blue.push(x);
        }
        else{
            alert("your input is uncorrect!");
        }
    }
    let res = [...yellow,...red,...blue];
    return res.toString();
}
let str = ('红黄蓝蓝蓝黄红红黄黄');
console.log(sort(str));//黄,黄,黄,黄,红,红,红,蓝,蓝,蓝
```



##### 利用 `array.sort((a, b) => {return a - b;})`的方法重排列数组

很棒的方法！

工程师推荐的方法 很优雅！

引出来了很多小知识点！可以看今天总结的 《前端基础 - 基础知识》

```js
var sort = function(str){
    let arr = str.split('');
    
    arr.sort((a, b) => {
        return getNumByType(a) - getNumByType(b);
    })//这里已经按照数组的顺序排列好了~
    
    return arr.toString();//再转成字符串形式即可
}
var getNumByType = function(num){
    switch(num){
    	case '黄':
            return 1;
        case '红':
            return 2;
        default:
            return 3;
    }
}
let str = ('红黄蓝蓝蓝黄红红黄黄');
console.log(sort(str));//黄,黄,黄,黄,红,红,红,蓝,蓝,蓝
```





### 力扣

```JS
//跟着数据结构入门 的每日学习计划 进行刷题 一天2-3题！ 
//不要忘了温故而知新啊！
今天只写了一题 太颓废了！
```

#### 118.杨辉三角

给定一个非负整数 *`numRows`，*生成「杨辉三角」的前 *`numRows`* 行。

在「杨辉三角」中，每个数是它左上方和右上方的数的和。

![img](https://pic.leetcode-cn.com/1626927345-DZmfxB-PascalTriangleAnimated2.gif)

**示例 1:**

```
输入: numRows = 5
输出: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
```

**示例 2:**

```
输入: numRows = 1
输出: [[1]]
```



##### 解题思路和代码

###### 我的思路

看示例 第一反应 —— 二维数组

第二反应 嗯 来找一下规律 嗯 规律很好找 数学方法搞定

关键就是要**维护一个行数组 然后将其插入答案数组中**

```js
var generate = function(numRows) {
    const res = [];
    for(let i = 0; i < numRows; i++){
        const row = new Array(i + 1).fill(1);//这里row是一个长度为 i+ 1 值全为1的一维数组 用来记录每行的内容
        for(let j = 1; j < row.length - 1; j++){//row的长度 = i + 1 (i从0算起！还坑了我一下？！）√ 
            row[j] = res[i - 1][j] + res[i - 1][j - 1];//这题关键就是想出来：要把一维数组往总的答案里插 （不要创建二维数组）
        }
        res.push(row);
    }
    return res;
};
```





# 2021.9.9

```js
//今日主要收获 & 学习时间
Totally 400min
1.计网 0min
/**/
2.操作系统 0min
/**/
3.前端基础知识 
3.1 HTML CSS 60min
	/* 看了一些相关面试题 回忆了一下HTML一些基础知识
	freecodecamp部分的HTML内容 完成*/
3.2 JS 60min
	/* JS demo03 这里其实是玩了一个CSS的特效 用JS去修改了一下 */
3.3 JS红宝书 60min
	/* 看完了第五章 熟悉了一些内置的基本引用类型：
    原始值包装类型 Boolean Number String 得出结论 最好别创建实例 学习了一些内置的方法
    单例内置对象 Math 用来做一些计算*/
4.前端开发框架 100min
	/*  */
5.刷题心得 180min
	/* 今天刷题刷吐了。。。 */
```

游戏没咋玩 剩下的时间逛b站了 啊这。

但是总体来说 还是有收获的一天

- 力扣 硬是刷了三题 对二维数组、矩阵有了更深刻 更立体的认知
- react 学习了受控、非受控组件 跳过了一些生命周期钩子的详细内容（感觉和小程序的页面加载 页面卸载的函数差不多意思）学习了下key的作用 得知遍历列表时key最好不要用index！ 明天简单刷一下生命周期的练习题就进入项目模式啦！期待！！（脚手架我来了！项目开发我来了！！）
- JS这部分今天倒没有太多收获  刷题过程中知道了二维数组咋初始化算一个吧 `const arr = new Array(m).fill(0).map(() => new Array(n).fill(0))` ——m行n列初值为0的二维数组~
- HTML 这边找了很多面试题资源 明天总结下发一篇字节青训营的文章~
- 基础知识没有学习很遗憾 数据包只能先在去传输层的路上等会了 9.10来帮你往下走~

## 核心基础知识

### 计网

```js
//小林的图解网络 先刷几遍所需要的知识点 &读图解HTTP TCP等书籍 & 网络抓包实操练习 深入理解
```



###  操作系统

```js
//小林的图解系统 & 学校课程学习 & 王道考研-OS 三者配合 高效学习
```



## 前端基础

### 基础知识

```js
//每日学到的知识点 可以写文章 可以记在心里 总结下来！
```

 `const arr = new Array(m).fill(0).map(() => new Array(n).fill(0))` ——初始化m行n列初值为0的二维数组~

```js
//freecodecamp刷题
```

把HTML的部分刷完了 整体比较简单 都是HTML的基础 

- ```html
  <label for="name"><input id="name"/></label>
  /*这样可以将label和input之间建立起l*/
  ```

  

  





### JS红宝书

```js
//经典书籍 目标：反复阅读
读完了第五章 基本引用类型
	原始值包装类型 Boolean Number String 得出结论 最好别创建实例 学习了一些内置的方法
```





### JS30练

```js
//一天一个有趣的原生JS练手demo 边做边总结！
demo03
```

https://fangzhousu.github.io/JS-30Demos/03_CSS-Variables-Change/index-billSu.html

[![在这里插入图片描述](https://camo.githubusercontent.com/1802d3cedf97f2913888690e6c6ee371eaea55078e70350a11b755b5da2ea620/68747470733a2f2f696d672d626c6f672e6373646e696d672e636e2f31313663373364393064666534363233626264316232616362613334643162352e706e67)](https://camo.githubusercontent.com/1802d3cedf97f2913888690e6c6ee371eaea55078e70350a11b755b5da2ea620/68747470733a2f2f696d672d626c6f672e6373646e696d672e636e2f31313663373364393064666534363233626264316232616362613334643162352e706e67)

## 前端开发框架

### react尚硅谷

```js
//广受好评的react教程 先快速过一下 再去实操哦！
快速过到了p48 跳过了生命周期钩子的详细内容 后续写点题或者看一些文章来学习下
```



### react习题练习

```
  //先过一遍原理 再去敲代码加深印象（freecodecamp）
```



## 面试题

### 每日刷点面试题

```js
//网上面试题辣么多 一天多看一些 然后同时也要研究一些题的答案！
总结了一些记录前端面试题的网站 有趣！github上好资源真多啊！
同时复习了一些HTML面试题 明天写第一篇文章出来！
```

[大前端面试宝典 - 图解前端](https://lucifer.ren/fe-interview/#/?id=大前端面试宝典-图解前端)

[前端开发面试题](https://github.com/markyun/My-blog/tree/master/Front-end-Developer-Questions/Questions-and-Answers)

[前端开发面试题目录](http://markyun.github.io/2015/Front-end-Developer-Questions/)



### 力扣

```JS
//跟着数据结构入门 的每日学习计划 进行刷题 一天2-3题！ 
//不要忘了温故而知新啊！
写了三题 一easy两medium的疲惫一天，
	第一道easy用了100min去思考 对二维数组的理解加深了！
    第一道medium 写了50min 也只搞出来一个空间复杂度最大的做法！！还有三种更好的做法没精力搞了orz
	第二道medium 直接借鉴官方题解了 没精力了orz 但是看完一边题解对JS哈希表的理解加深了许多！好用！
```

#### 566.重塑矩阵

[566. 重塑矩阵](https://leetcode-cn.com/problems/reshape-the-matrix/)

在 MATLAB 中，有一个非常有用的函数 `reshape` ，它可以将一个 `m x n` 矩阵重塑为另一个大小不同（`r x c`）的新矩阵，但保留其原始数据。

给你一个由二维数组 `mat` 表示的 `m x n` 矩阵，以及两个正整数 `r` 和 `c` ，分别表示想要的重构的矩阵的行数和列数。

重构后的矩阵需要将原始矩阵的所有元素以相同的 **行遍历顺序** 填充。

如果具有给定参数的 `reshape` 操作是可行且合理的，则输出新的重塑矩阵；否则，输出原始矩阵。

**示例 1：**

![img](https://assets.leetcode.com/uploads/2021/04/24/reshape1-grid.jpg)

```
输入：mat = [[1,2],[3,4]], r = 1, c = 4
输出：[[1,2,3,4]]
```

**示例 2：**

![img](https://assets.leetcode.com/uploads/2021/04/24/reshape2-grid.jpg)

```
输入：mat = [[1,2],[3,4]], r = 2, c = 4
输出：[[1,2],[3,4]]
```



##### 解题思路和代码

###### 我的方法

先把二维数组的内容传到一维数组中 然后再把一维数组的值放到重置的r行c列数组中 

> 这题卡了50min！！！思路也不坚定 下回做题要把思路捋清楚再写代码！

```js
var matrixReshape = function(mat, r, c) {
    let res = [];
    let arr = [];
    let count1 = 0, count2 = 0;
    // 二维数组转一维数组
    for(let i = 0; i < mat.length; i++){
        for(let j = 0; j < mat[0].length; j++){
            arr[count1++] = mat[i][j];
        }
    }
    // 如果两个矩阵元素个数不同 放弃重置 输出原数组
    if(mat.length * mat[0].length !== c*r){
        return mat;
    }
    // 重置数组
    else{
        for(let i = 0; i < r; i++){
            let row = [];
            for(let j = 0; j < c; j++){
                row.push(arr[count2++]);      
            }
            res.push(row);
        }
    }
    return res;
};
```

###### 官方题解 二维数组的一维表示

[重塑矩阵](https://leetcode-cn.com/problems/reshape-the-matrix/solution/zhong-su-ju-zhen-by-leetcode-solution-gt0g/)

我是先把二维数组扔到了一维数组里 比较好想 但是很啰嗦

官方的题解非常巧妙！

同样是压缩为一维数组 但是人家用了一种高级的方法——只创建一层循环 将整数x映射回二维矩阵中的下标！

![在这里插入图片描述](https://img-blog.csdnimg.cn/55c85f4ce8764d13a168cbcdac9a7564.png)

另外官方给出的答案中 代码更优雅简练！

```js
var matrixReshape = function(mat, r, c) {
    const m = mat.length;
    const n = mat[0].length;
    if(m * n !== r * c){
        return mat;
    }

    const ans = new Array(r).fill(0).map(() => new Array(c).fill(0));//创建r行c列值全为0的二维数组 
    for(let x = 0; x < m * n; x++){
        ans[Math.floor(x / c)][x % c] = mat[Math.floor(x / n)][x % n];
    }
    return ans;
};
```

时间复杂度：O(r*c)。这里的时间复杂度是在重塑矩阵成功的前提下的时间复杂度 否则为O(1)

空间复杂度：O(1) 这里的空间复杂度不包含返回的重塑矩阵需要的空间。

> 小结：
> 1.学习了创建赋初值(为0）的二维数组的方法 `const ans = new Array(r).fill(0).map(() => new Array(c).fill(0));`
> 2.学习了这种映射的思维 二维数组也可以像一维数组一样用~  
> 3.矩阵思维强化 
> 4.复习了下floor(x/n)这回可错不了了！





#### 73.矩阵置零

[73. 矩阵置零medium](https://leetcode-cn.com/problems/set-matrix-zeroes/)

给定一个 `m x n` 的矩阵，如果一个元素为 **0** ，则将其所在行和列的所有元素都设为 **0** 。请使用 **[原地](http://baike.baidu.com/item/原地算法)** 算法**。**

**进阶：**

- 一个直观的解决方案是使用  `O(m*n)` 的额外空间，但这并不是一个好的解决方案。
- 一个简单的改进方案是使用 `O(m + n)` 的额外空间，但这仍然不是最好的解决方案。
- 你能想出一个仅使用常量空间的解决方案吗？

 **示例 1：**

![img](https://assets.leetcode.com/uploads/2020/08/17/mat1.jpg)

```
输入：matrix = [[1,1,1],[1,0,1],[1,1,1]]
输出：[[1,0,1],[0,0,0],[1,0,1]]
```

**示例 2：**

![img](https://assets.leetcode.com/uploads/2020/08/17/mat2.jpg)

```
输入：matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
输出：[[0,0,0,0],[0,4,5,0],[0,3,1,0]]
```



##### 解题思路与方法

###### 简单暴力法

最好想的方法 不去找规律 直接无脑遍历二维数组进行置零

> 21.9.9 又犯了和第一次做的时候一样的错误！
>
> 看到一个0就把他周围的全置零了 忘记了 如果这样置零 后面被置零的位置也会被==扩散开来==！
>
> 需要开辟一个额外的空间！



> 没看清楚是 原地算法。。
>
> 那就遍历一下额外的那个数组arr找为0元素的索引 然后修改原数组matrix就行！
>
> 或者遍历原数组找0 然后给额外数组做置零 最后把额外数组arr再赋给原始数组即可
>
> 二者都是一样的时空复杂度（都很高！）



```js
var setZeroes = function(matrix) {
    let m = matrix.length;
    let n = matrix[0].length;//m行n列的矩阵
    let arr = new Array(m).fill(1).map(() => new Array(n).fill(1));//创建一个m行n列 由1填充的二维数组
    // 将matrix赋给arr
    for(let i = 0; i < m; i++){
        for(let j = 0; j < n; j++){
            arr[i][j] = matrix[i][j];
        }
    }
    // 上面的res数组就是题目中提到的 O(m*n)时间复杂度的额外空间
    for(let i = 0; i < m; i++){
        for(let j = 0; j < n; j++){
            if(arr[i][j] === 0){
                // 得知了i行j列要删除
                setZ(matrix, i, j);
            }
        }
    }
};
var setZ = function(matrix, i, j){
    // 输入矩阵 和 0的位置——i行j列 进行删除
    let m = matrix.length;
    let n = matrix[0].length;//m行n列的矩阵
    // 01 删除第i行的
    for(let x = 0; x < n; x++){
        matrix[i][x] = 0;
    }
    // 02 删除第j列的
    for(let y = 0; y < m; y++){
        matrix[y][j] = 0;
    } 
}
```

- 时间复杂度 O(m*n)
- 空间复杂度O(m*n)

容易想到 但是时空复杂度最差的方法。

下面的三种方法来自[官方题解](https://leetcode-cn.com/problems/set-matrix-zeroes/solution/ju-zhen-zhi-ling-by-leetcode-solution-9ll7/) 有空来看看

###### 使用标记数组

比我的方法好一些的（空间复杂度 m+n）



###### 使用两个标记变量





###### 使用一个标记变量





#### 36.有效的数独

[36. 有效的数独medium](https://leetcode-cn.com/problems/valid-sudoku/)

请你判断一个 `9x9` 的数独是否有效。只需要 **根据以下规则** ，验证已经填入的数字是否有效即可。

1. 数字 `1-9` 在每一行只能出现一次。
2. 数字 `1-9` 在每一列只能出现一次。
3. 数字 `1-9` 在每一个以粗实线分隔的 `3x3` 宫内只能出现一次。（请参考示例图）

**注意：**

- 一个有效的数独（部分已被填充）不一定是可解的。
- 只需要根据以上规则，验证已经填入的数字是否有效即可。

 **示例 1：**

![img](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2021/04/12/250px-sudoku-by-l2g-20050714svg.png)

```
输入：board = 
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
输出：true
```

**示例 2：**

```
输入：board = 
[["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
输出：false
解释：除了第一行的第一个数字从 5 改为 8 以外，空格内其他数字均与 示例1 相同。 但由于位于左上角的 3x3 宫内有两个 8 存在, 因此这个数独是无效的。
```



##### 解题思路与代码

###### 用哈希表~

来复习下Map哈

给每一行、每一列、每个3*3子数组定义一个键值对Map，之后遍历数组，若单个键值对中出现重复数字返回false。



核心思路就是 创建三个哈希表 将对应的行、列、3*3子数组 与某些值 的映射保存好 遍历的时候发现重复就输出false

![在这里插入图片描述](https://img-blog.csdnimg.cn/10b87f9e2fec4a35acd29d994d0de0ac.png)

```js
var isValidSudoku = function(board) {
    let rows = [];//每行
    let cols = [];//每列
    let box = [];//每个3x3数组
    for(let i = 0; i < 9; i++){
        rows[i] = new Map();
        cols[i] = new Map();
        box[i] = new Map();
        //给每行、每列、每个3*3子数组定义一个键值对Map
    }
    for(let i = 0; i < board.length; i++){
        for(let j = 0; j < board[i].length; j++){
            if(board[i][j] !== '.'){
                // 
                let s = parseInt(i / 3) * 3 +parseInt(j / 3);// 获取数字所在3*3子数组的序号 
                if(rows[i].has(board[i][j]) || cols[j].has(board[i][j]) || box[s].has(board[i][j])){
                    return false;// 单个键值对出现重复数字 数独无效
                }
                else{
                    // 碰到数就分别查到三个哈希表中
                    rows[i].set(board[i][j], 1);
                    cols[j].set(board[i][j], 1);
                    box[s].set(board[i][j], 1);
                }
            }
        }
    }
    return true;
};
```



# 2021.9.10

```js
//今日主要收获 & 学习时间
Totally 360min
1.计网 45min
/* 数据包加上了TCP IP MAC头部 不再是一个迷茫的数据包！ */
2.操作系统 25min
/* 学习了一下多线程竞争中可能出现的问题以及对应的解决方案 上学期的“软基”中有学到这里 */
3.前端基础知识 
3.1 HTML CSS 100min
	/* 复习了HTML中的一些基础问题——head头部中的标签、以及常用标签的类型 
	并找了几道面试题 总结成文章*/
3.2 JS min
	/*  */
3.3 JS红宝书 min
	/*  */
4.前端开发框架 150min
	/* 终于学习到了项目级别的react开发方式——使用脚手架 了解了脚手架中各个文件的作用
    写了一个hello react的demo并且完善了一下 写成组件的形式 并了解了一些小坑 
    比如组件文件夹名称为特殊的 Welcome Hello 但是其中的.js文件 命名为index 不影响使用但是读代码时容易晕*/
5.刷题心得 10min
	/* 刷了一道老题——最大子序和 */
6.学校课程内容 30min
	/* 数据库第一章作业完成 */
```

整体效率偏低的一天，好多知识点没有学到 

得到经验教训！以后要完整地规划一天！大概几点到几点做什么要心里有数 一天尽量把所有部分都学到！

今天最大的收获应该是react的学习，终于上手了脚手架~

计网这块儿也了解了数据包从HTTP发出后还需要带很多报文才能获得方向感，向着目标（Web服务器）前进！



## 核心基础知识

### 计网

```js
//小林的图解网络 先刷几遍所需要的知识点 &读图解HTTP TCP等书籍 & 网络抓包实操练习 深入理解
```

网络包的报文在经过了传输层、网络层、数据链路层的传输后，终于整装待发，准备“出门” 前往服务器

这也是11号要进行学习的内容

![图片](https://mmbiz.qpic.cn/mmbiz_png/J0g14CUwaZdCwxNydn5YuT0s7aLuqWCvXwUb0quVf04jOA6PSQBw9JawNDhW2qykDZeicGBK1DQ6BSITEUMHjZQ/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

###  操作系统

```js
//小林的图解系统 & 学校课程学习 & 王道考研-OS 三者配合 高效学习
1.互斥的概念
2.同步的概念
3.锁🔒来实现互斥
4.信号量实现互斥、同步
```

1.一个线程在临界区执行时，其他线程应该被阻止进入临界区

2.我们又希望多个线程能密切合作，以实现一个共同的任务 所以出现了同步——并发进程/线程在**一些关键点**上可能需要互相等待与互通消息，这种==相互制约的等待与互通信息==称为进程/线程同步

举个生活的同步例子，你肚子饿了想要吃饭，你叫妈妈早点做菜，妈妈听到后就开始做菜，但是在妈妈没有做完饭之前，你必须阻塞等待，等妈妈做完饭后，自然会通知你，接着你吃饭的事情就可以进行了。

![图片](https://mmbiz.qpic.cn/mmbiz_png/J0g14CUwaZcJWrfgAR82HEMZFficYr34ywSAF4fc9d8QMmLDiavm2YSOdlPOU0eiaiaDkZAXZQZibmQVI2YsVC6OQMw/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

上面这个就是 吃饭与做菜的同步关系

> 注意，同步与互斥是两种不同的概念：
>
> - 同步就好比：「操作 A 应在操作 B 之前执行」，「操作 C 必须在操作 A 和操作 B 都完成之后才能执行」等；
> - 互斥就好比：「操作 A 和操作 B 不能在同一时刻执行」；

3.使用加锁操作和解锁操作可以解决并发线程/进程的互斥问题。

任何想进入临界区的线程，必须先执行加锁操作。若加锁操作顺利通过，则线程可进入临界区；在完成对临界资源的访问后再执行解锁操作，以释放该临界资源。

![图片](https://mmbiz.qpic.cn/mmbiz_png/J0g14CUwaZcJWrfgAR82HEMZFficYr34ybHBfczUFH9G2yteV17oIyRSodTNgj7IDmwEqKK1ImhmAOOSBrMx6Ig/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

锁分为 忙等锁（当获取不到锁时，线程就会一直 wile 循环，不做任何事情 也叫自旋锁）和 无忙等待锁（获取不到锁的时候，不用自旋）

4.信号量实现互斥和同步

- 我们先来说说如何使用**信号量实现临界区的互斥访问**。

为每类共享资源设置一个信号量 `s`，其初值为 `1`，表示该临界资源未被占用。

只要把进入临界区的操作置于 `P(s)` 和 `V(s)` 之间，即可实现进程/线程互斥：

![图片](https://mmbiz.qpic.cn/mmbiz_png/J0g14CUwaZcJWrfgAR82HEMZFficYr34ykfsu4y4iaWwgp5CMAicBCfTd6HT4LAN54HED7solQzIh2hZfY8c5zMVg/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

此时，任何想进入临界区的线程，必先在互斥信号量上执行 P 操作，在完成对临界资源的访问后再执行 V 操作。由于互斥信号量的初始值为 1，故在第一个线程执行 P 操作后 s 值变为 0，表示临界资源为空闲，可分配给该线程，使之进入临界区。

若此时又有第二个线程想进入临界区，也应先执行 P 操作，结果使 s 变为负值，这就意味着临界资源已被占用，因此，第二个线程被阻塞。

并且，直到第一个线程执行 V 操作，释放临界资源而恢复 s 值为 0 后，才唤醒第二个线程，使之进入临界区，待它完成临界资源的访问后，又执行 V 操作，使 s 恢复到初始值 1。

对于两个并发线程，互斥信号量的值仅取 1、0 和 -1 三个值，分别表示：

- 如果互斥信号量为 1，表示没有线程进入临界区；
- 如果互斥信号量为 0，表示有一个线程进入临界区；
- 如果互斥信号量为 -1，表示一个线程进入临界区，另一个线程等待进入。



通过互斥信号量的方式，就能==保证临界区任何时刻只有一个线程在执行==，就达到了互斥的效果。



- 再来，我们说说如何使用**信号量实现事件同步**。

同步的方式是设置一个信号量，其初值为 `0`。

我们把前面的「吃饭-做饭」同步的例子，用代码的方式实现一下：

![图片](https://mmbiz.qpic.cn/mmbiz_png/J0g14CUwaZcJWrfgAR82HEMZFficYr34yOM2cr6OXBRlzkBicLF1YasTYPhNHyrd2icMGOIbwYdt6dvJupWUZGicDQ/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

妈妈一开始询问儿子要不要做饭时，执行的是 `P(s1)` ，相当于询问儿子需不需要吃饭，由于 `s1` 初始值为 0，此时 `s1` 变成 -1，表明儿子不需要吃饭，所以妈妈线程就进入等待状态。

当儿子肚子饿时，执行了 `V(s1)`，使得 `s1` 信号量从 -1 变成 0，表明此时儿子需要吃饭了，于是就唤醒了阻塞中的妈妈线程，妈妈线程就开始做饭。

接着，儿子线程执行了 `P(s2)`，相当于询问妈妈饭做完了吗，由于 `s2` 初始值是 0，则此时 `s2` 变成 -1，说明妈妈还没做完饭，儿子线程就等待状态。

最后，妈妈终于做完饭了，于是执行 `V(s2)`，`s2` 信号量从 -1 变回了 0，于是就唤醒等待中的儿子线程，唤醒后，儿子线程就可以进行吃饭了。







## 前端基础

### 基础知识

```js
//每日学到的知识点 可以写文章 可以记在心里 总结下来！
```

[【青训营】做面试题般回顾前端基础知识HTML篇 - 1 head标签中的内容；内联元素、块级元素的那些事儿](https://juejin.cn/post/7006193588614725668/)



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
```

又咕咕了一天啊这。下回上午做这个！

## 前端开发框架

### react尚硅谷

```js
//广受好评的react教程 先快速过一下 再去实操哦！
p49-52
```



### react习题练习

```
  //先过一遍原理 再去敲代码加深印象（freecodecamp）
```



## 面试题

### 每日刷点面试题

```js
//网上面试题辣么多 一天多看一些 然后同时也要研究一些题的答案！
总结了一些HTML的面试题 放到文章中了
```



### 力扣

```JS
//跟着数据结构入门 的每日学习计划 进行刷题 一天2-3题！ 
//不要忘了温故而知新啊！
复习了一道最大子序和 用的贪心法
```



# 2021.9.11

```js
// 今日主要收获 & 学习时间
// 学习内容的细则下面分块简单列出了
Totally 180min
1.计网 40min
	/* 数据包在获取了方向之后 离开子网 向服务器前进 */
2.操作系统 20min
	/* 复习了前一天的内容 做了下总结——具体内容见前一天的笔记 */
3.前端基础知识 
	3.1 JS 30demos 120min
    	/*  */
    3.2 JS红宝书 min
    	/*  */
    3.3 freecodecamp一个专题练习2+道题 min
    	/*  */
    3.4 JS高级教程 min
    	/*  */
4.刷题心得 min
	4.1 力扣
    	/*  */    
    4.2 总结面经、面试题
    	/*  */
5.前端开发框架 react学习 min
	/*  */
6.Ajax学习
	/*  */
学校课程内容 min
```



一段时间后要看一下自己的学习路线是否正确 做一个简单的学习预告 

```js
// 学习预告 
学习完react基础，20号的掘金前端基础活动结束后 看情况学习——
1.jQuery —— 学习常用API的使用方法 熟悉其插件开发机制 —— 用不了多久就能掌握
2.CSS框架 这里要先回去看一下luke的学习推荐
3.对node进行学习 —— 要做出个像样的项目 需要node的帮助 我们作为前端 学习下基本操作、npm包管理即可 前端开发框架需要node来构建、管理
4.对webpack进行学习 —— 做项目肯定是要了解webpack 升级一下我们的开发环境
```

新增了每日睡眠时间记录 稍微有点啰嗦

希望可以起到督促的作用！

```js
const GetUp = function(time){
    if(time < 8.00) {
        console.log("早早起床，开启阳光高效的一天😊！");
    }
    else{
        console.log("😭");
    }
}
const Sleep = function(time){
    if(time < 12.00) {
        console.log("早早睡觉，身体健康 心情愉悦😊~");
    }
    else{
        console.log("😭");
    }
}
GetUp(8.00);//😭
Sleep(12.50);//😭
```



## 核心基础知识

### 计网

```js
//小林的图解网络 先刷几遍所需要的知识点 &读图解HTTP TCP等书籍 & 网络抓包实操练习 深入理解
1.出口——网卡
2.送别者——交换机
3.出境大门——路由器
4.数据包从客户端抵达服务端后会发生什么
```

1.出口——网卡

在这里 我们需要**将数字信息转换为电信号**！

网卡可以执行这一操作 网卡驱动程序可以控制网卡（这里我们之前学习协议栈的时候有提到过）

网卡从IP模块获取到包之后 会

- 将包复制到网卡内的缓存区中
- 在开头加上 **报头和起始帧分界符**
- 在末尾加上帧校验序列（用于检测错误~）

![图片](https://mmbiz.qpic.cn/mmbiz_png/J0g14CUwaZdCwxNydn5YuT0s7aLuqWCvRO9LjjVa7839p3IrJsdCAT6DSicnLVOBadYNbD79VdJR3iaguEhlMBWg/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

2.送别者——交换机

电信号到达网线接口，交换机里的模块进行接收，接下来交换机里的模块**将电信号转换为数字信号**。

通过包末尾的 `FCS` 校验错误，如果没问题则放到缓冲区。这部分操作基本和计算机的网卡相同，但交换机的工作方式和网卡不同（交换机端口不具有MAC地址 但是网卡端口是具有MAC地址的）。

3.路由器

网络包经过交换机之后，现在到达了**路由器**，并在此被转发到下一个路由器或目标设备。

这一步转发的工作原理和交换机类似，也是==通过查表判断包转发的目标==。



- 路由器基本原理

路由器的端口具有 MAC 地址，因此它就能够成为以太网的发送方和接收方；同时还具有 IP 地址，从这个意义上来说，它和计算机的网卡是一样的。

当转发包时，首先路由器端口会接收发给自己的以太网包，然后**路由表**查询转发目标，再由相应的端口作为发送方将以太网包发送出去。



- 路由器的包接收操作

路由器的端口都具有 MAC 地址，只**接收与自身地址匹配的包**，遇到不匹配（通过前面提到的数据包末尾的FCS）的包则直接丢弃。



- 查询路由表确定输出端口

完成包接收操作之后，路由器就会**去掉**包开头的 MAC 头部。

**MAC 头部的作用就是将包送达路由器**，其中的接收方 MAC 地址就是路由器端口的 MAC 地址。因此，当包到达路由器之后，MAC 头部的任务就完成了，于是 MAC 头部就会**被丢弃**。



- 路由器小结

这里其实我看得是有一些懵的

还需要再捋一下！

另外要注意 网络包传输的过程中 源IP和目标IP始终是不会变的！**一直变化的是MAC地址**~

因为需要MAC地址在以太网内进行两个设备之间的包传输



4.服务器与客户端

客户端发送给服务端的数据包需要里三层外三层地包裹起来 

那么服务端想要查看包中的内容并对此做出回应 就需要把数据包外面的内容“拆开” 就像拆快递一样~

![图片](https://mmbiz.qpic.cn/mmbiz_png/J0g14CUwaZdCwxNydn5YuT0s7aLuqWCvv55hSUSrw3kicf3mvfwRtibaqWnRBgtxDoXBklA4kokSqEfhMzicEe1lA/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

具体流程如下——

（全串起来了 好耶！）

- 数据包抵达服务器后，服务器会【1】先扒开数据包的 MAC 头部，查看是否和服务器自己的 MAC 地址符合，符合就将包收起来。

- 接着继续【2】扒开数据包的 IP 头，发现 IP 地址符合，根据 IP 头中协议项，知道自己上层是 TCP 协议。

- 于是，【3】扒开 TCP 的头，里面有序列号，需要看一看这个序列包是不是我想要的，如果是就【4】放入缓存中然后【5】返回一个 ACK（TCP/IP协议中 正确收到数据包后 接收端会发送ACK报文 用于对数据包进行确认），如果不是就丢弃。TCP头部里面还有<u>端口号</u>， **HTTP 的服务器正在监听这个（TCP头部携带的这个）端口号。**

- 于是，服务器自然就知道是 HTTP 进程想要这个包，于是就【6】将包发给 HTTP 进程。

- 服务器的 HTTP 进程**看到**，原来这个【7】**请求是要访问一个页面**，于是就【8】把这个网页封装在 HTTP 响应报文里。

**和客户端的HTTP请求报文相同 服务端发出的HTTP响应报文也要经过上述1-6步穿上这几个头部 再经过7-9步传到客户端！**

- HTTP 响应报文也需要==穿上 TCP、IP、MAC 头部==，不过这次是**源地址**是服务器 IP 地址，**目的地址**是客户端 IP 地址。

- 穿好头部衣服后，从==网卡==出去，交由==交换机==转发到出城的==路由器==，路由器就把响应数据包==转发==到了下一个路由器，就这样跳啊跳。

- 最后跳到了==客户端的城门把手的路由器==，路由器扒开 IP 头部发现是要找城内的人，于是把包发给了==城内的交换机==，再由交换机转发到客户端。

客户端收到了服务器的响应数据包后，同样也非常的高兴，客户能拆快递了！

于是，客户端开始扒皮，把收到的数据包的皮扒剩 **HTTP 响应报文**后，交给浏览器去渲染页面，一份特别的数据包快递，就这样显示出来了！



最后，客户端要离开了，向服务器发起了 TCP 四次挥手，至此双方的连接就断开了。



###  操作系统

```js
//小林的图解系统 & 学校课程学习 & 王道考研-OS 三者配合 高效学习
1.前一天内容的总结
```



## 前端基础

### 基础知识

```js
//每日学到的知识点 可以写文章 可以记在心里 总结下来！
1.要强化下回调函数的内容
```

1.起因 JS30demos中的一个操作看不太懂！

```js
// inventors 是一个数组
const fullNames = inventors.map(inventor => `${inventor.first}-${inventor.last}<br/>`)
// const fullnames = inventors.map(function(inventor){
//     return `${inventor.first}-${inventor.last}<br/>`
// })
// 其中 function(inventor) 就是 map 方法中的回调函数 二者结合 可以将inventors数组遍历一遍 并按照需要返回结果
document.getElementById("demo2").innerHTML = fullNames;
```

回头在研究辽~会用是会用了

> ——要明白map方法：迭代方法 
>
> 对数组每一项运行传入的（箭头）函数，返回由每次函数调用结果组成的数组
>
> 9-14更新



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
完成JS30-demo04的表格展示与探索
```



## 前端开发框架

### react尚硅谷

```js
//广受好评的react教程 先快速过一下 再去实操哦！
```



### react习题练习

```js
//先过一遍原理 再去敲代码加深印象（freecodecamp）
```



## 面试题

### 面试题、面经总结

```js
//网上面试题、面经辣么多 一天多看一些 然后同时也要研究一些题的答案！
```



### 力扣

```js
//跟着数据结构入门 的每日学习计划 进行刷题 一天2-3题！ 
```



# 2021.9.12 *项目点子 *健康日记开启

> 今天想到一个不错的点子——可以做一个每日任务打卡的网站 每人可以DIY自己的模板 

今天创建了 健康日记！

值得纪念的日子！

从明天开始 早睡早起 做健康的自己！

但是由于白天一直飘在外面玩耍 加上一直在构思如何搞这个健康日记 

所以 任务没完成多少啊这。

```js
// 今日主要收获 & 学习时间
// 学习内容的细则下面分块简单列出了
Totally 260min
思考健康的问题 并创建健康日记仓库 规定作息 200min
这很重要！
1.计网 40min
	/* 复习前天的内容 总结到昨天的笔记中——具体内容见前一天的笔记
    9.10我学习到了数据的报文都加上了对应的头部 TCP IP MAC
    9.11学习了一下加上了这些头部的报文如何到达目的地——主要内容是网卡、交换机、路由器的内容 今天简单总结了一下*/
2.操作系统 min
	/*  */
3.前端基础知识 
	3.1 JS 30demos 20min
    	/* 刷demo的时候遇到了之前学到的冒泡排序法（详见9.8的笔记）很好用啊哈哈哈
        */
    3.2 JS红宝书 min
    	/*  */
    3.3 freecodecamp一个专题练习2+道题 min
    	/*  */
    3.4 JS高级教程 min
    	/*  */
4.刷题心得 min
	4.1 力扣 min
    	/*  */    
    4.2 总结面经、面试题 min
    	/*  */
5.前端开发框架 react学习 min
	/*  */
6.Ajax学习
	/*  */
7.学校课程内容 20min
```





```js
const time = 6.66;
const GetUp = function(time){
    if(time < 8.00) {
        console.log("早早起床，开启阳光高效的一天😊！");
    }
    else{
        console.log("😭")
    }
}
const Sleep = function(time){
    if(time < 11.30){
        console.log("早早睡觉，身体健康 心情愉悦😊~");
    }
    else{
        console.log("😭");
    }
}
GetUp(8.30);//😭
Sleep(11.00);//早早睡觉，身体健康 心情愉悦😊~
```



## 核心基础知识

### 计网

```js
//小林的图解网络 先刷几遍所需要的知识点 &读图解HTTP TCP等书籍 & 网络抓包实操练习 深入理解
1.数据包从客户端到服务端的故事 大结局 
```

详情返回前一天的计网专题 在4.服务端与客户端中 学习内容都串起来了！

###  操作系统

```js
//小林的图解系统 & 学校课程学习 & 王道考研-OS 三者配合 高效学习

```



## 前端基础

### 基础知识

```js
//每日学到的知识点 可以写文章 可以记在心里 总结下来！
```





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
```



## 前端开发框架

### react尚硅谷

```js
//广受好评的react教程 先快速过一下 再去实操哦！
```



### react习题练习

```js
//先过一遍原理 再去敲代码加深印象（freecodecamp）
```



## 面试题

### 面试题、面经总结

```js
//网上面试题、面经辣么多 一天多看一些 然后同时也要研究一些题的答案！
```



### 力扣

```js
//跟着数据结构入门 的每日学习计划 进行刷题 一天2-3题！ 
```



# 2021.9.13 *学习知识方法论获取

> 学习概念的方法论——以后可以用这个方法论来学习生疏的**知识点**
> - 了解这个知识的概念是什么
> - 了解这个知识被提出来的目的是什么?
> - 将知识用一句话说清楚！
>
> 如果以上三点都做到了 那么我们基本就理解了这个知识点了😊

换了新的作息的第一天 整体效率起飞！达到历史新高~收获也蛮多！！

```js
// 今日主要收获 & 学习时间
// 学习内容的细则下面分块简单列出了
Totally 560min
1.计网 40min
	/* 复习了下网络模型 OSI网络模型——应用层 表示层 会话层；传输层；网络层；数据链路层 物理层 
	简单了解了下Linux网络协议栈*/
2.操作系统 50min
	/* 回忆了经典的生产者消费问题 
	通过王道课程 回忆了进程的内容 学习了更多细则
	进程的概念十分重要！要与进程的实体区分开来~虽说有时候也可以一概而论吧~*/
3.前端基础知识 
	3.1 JS 30demos min
    	/* 今天木有做~ */
    3.2 JS红宝书 90min
    	/* 看了下第六章前十页左右
        主要学习了数组Array的一些细则
        印象深刻的就是将 类数组结构转换为数组实例的from 和 迭代器方法 keys values entries~*/
    3.3 JS高级教程 120min
    	/* 学习了一些之前都没注意的细小的知识点！
        建议反复学习！来自尚硅谷的课程 感谢老师的知识点剖析*/
    3.4 freecodecamp一个专题练习2+道题 40min
    	/* 学习了一些H5 C3中的语法 */
4.刷题心得 min
	4.1 力扣 40min
    	/* 387 使用哈希映射解决  */    
    4.2 总结面经、面试题 100min
    	/* 写了一篇文章 关于 HTML5语义化标签、以及一些新特性
    	总结一个“接口防刷”的设计题 蛮有意思的 */
5.前端开发框架 react学习 70min
	/* 初次接触 组件化编码流程 包括如何把一个页面拆到组件里面 */
6.Ajax学习
	/*  */
7.学校课程内容 min
```



```js
const time = 6.66;
const GetUp = function(time){
    if(time < 8.00) {
        console.log("早早起床，开启阳光高效的一天😊！");
    }
    else{
        console.log("😭")
    }
}
const Sleep = function(time){
    if(time < 11.30){
        console.log("早早睡觉，身体健康 心情愉悦😊~");
    }
    else{
        console.log("😭");
    }
}
GetUp(7.00);//早早起床，开启阳光高效的一天😊！
Sleep(12:50);//😭
//失眠了。。
```



## 核心基础知识

### 计网

```js
//小林的图解网络 先刷几遍所需要的知识点 &读图解HTTP TCP等书籍 & 网络抓包实操练习 深入理解
1.OSI网络模型
2.更简化的TCP/IP网络模型
3.复习给数据包“穿衣服” 也就是报文中加头部的过程
4.简单了解Linux的网络协议栈
//图解网络 第一轮刷完！
//明天再看看学习心得这里~
```

#### 1.OSI网络模型

电脑与电脑之间通常都是 通话网卡、交换机、路由器 等网络设备连接到一起 

由于网络设备的异构性 国际标准化组织定义了一个七层的OSI网络模型 

但是这个模型太复杂了 实际应用中并没有采用（所以为啥有的面经中还有这个内容。）

> 这七层的OSI模型 每层负责的职能不同~
>
> - 应用层 负责给应用程序提供统一的接口
> - 表示层 负责把数据转换成兼容另一个系统能识别的格式
> - 会话层 负责建立、管理、终止 表示层实体之间的通信对话
> - 传输层 负责端到端的数据传输
> - 网络层 负责数据的路由、转发、分片
> - 数据链路层 负责数据的封帧和差错检测 以及MAC寻址
> - 物理层 负责在物理网络中传输数据帧
>

我们结合TCP/IP模型对这部分内容进行记忆——

#### 2.更简化的TCP/IP网络模型

四层的TCP/IP网络模型 ：

- 应用层 负责向用户提供一组应用程序 比如 HTTP DNS FTP等
  - 应用层
  - 表示层
  - 会话层
- 传输层 负责**端到端的通信** 比如 TCP UDP 等
  - 传输层
- 网络层 负责网络包的封装、分片、路由、转发 比如 IP ICMP等
  - 网络层
- 网络接口层 负责网络包在物理网络中的传输 比如 网络包的封帧、MAC寻址、差错检测、通过网卡传输网络帧等
  - 数据链路层
  - 物理层



![在这里插入图片描述](https://img-blog.csdnimg.cn/9114835017834c9d952c5dcf0b049d0c.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5pWy5Luj56CB55qE5bCP5o-Q55C05omL,size_13,color_FFFFFF,t_70,g_se,x_16)



#### 3.给数据包穿衣服

做个类比

- 应用层中的数据——我们的身体
- 传输层中的TCP头——打底衣服
- 网络层中的IP头——外套
- 网络接口层的帧头、帧尾——帽子、鞋子

![在这里插入图片描述](https://img-blog.csdnimg.cn/2fd6cee7965f44c8a6a9eeeadc1a4f7d.png)

> 在冬天这个季节，当我们要从家⾥出去玩的时候，⾃然要先穿个打底⾐服，再套上保暖外套，最后穿上帽⼦和鞋⼦才出⻔~
>
> 这个过程就好像我们把 TCP 协议通信的⽹络包发出去的时候，会**把应⽤层的数据按照⽹络协议栈层层封装和处理**。



#### 4.简单了解Linux网络协议栈

类似TCP/IP的四层结构

![img](https://images2015.cnblogs.com/blog/697113/201602/697113-20160228205711695-689378767.jpg)

-图源 [博客园](https://www.cnblogs.com/sammyliu/p/5225623.html)



好！截至此处 小林的图解网络 大概地过了一遍！

接下来  从头开始 再过一遍！！

###  操作系统

```js
//小林的图解系统 & 学校课程学习 & 王道考研-OS 三者配合 高效学习
1.生产者消费者问题
	// 从今天开始 没空就不看图解系统这部分了~
2.王道——进程第一课
	进程的定义
    进程的组成
    进程的组织方式
    进程的特征
```

#### 1.生产者消费者问题

老生常谈的经典问题

这个很好理解：

- 生产者——生成数据（放在缓冲区中）
- 消费者——拿数据（来处理）（从缓冲区中取）

![图片](https://mmbiz.qpic.cn/mmbiz_png/J0g14CUwaZcJWrfgAR82HEMZFficYr34yyRbhsR19SssE6jMicnibujjJd2p88Kib1bzU61yicQvj4qBBM31ogNzF7g/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

需要注意的是：任何时候**只能有一个**生产者或者消费者可以访问缓冲区

——说明操作缓冲区是临界代码 需要互斥！

具体流程如下——

那么我们需要三个信号量，分别是：

- 互斥信号量 `mutex`：用于互斥访问缓冲区，初始化值为 1；
- 资源信号量 `fullBuffers`：用于消费者询问缓冲区是否有数据，有数据则读取数据，初始化值为 0（表明缓冲区一开始为空）；
- 资源信号量 `emptyBuffers`：用于生产者询问缓冲区是否有空位，有空位则生成数据，初始化值为 n （缓冲区大小）；

具体的实现代码：

![图片](https://mmbiz.qpic.cn/mmbiz_png/J0g14CUwaZcJWrfgAR82HEMZFficYr34yX0HwhectDjLic12UOGxK1JDtBZSMwicZviaDboyeK8tuibboZuxHyQGLnQ/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

- 如果消费者线程【1】一开始执行 `P(fullBuffers)`，由于信号量 `fullBuffers` 初始值为 0，则此时【2】 `fullBuffers` **（缓存区中满槽的个数）的值从 0 变为 -1**，【3】**说明缓冲区里没有数据**，==消费者只能等待==。



- 接着，轮到【4】生产者执行 `P(emptyBuffers)`，表示**减少 1 个空槽**，如果当前没有其他生产者线程在临界区执行代码，那么该==生产者线程就可以【5】把数据放到缓冲区==



- 【6】放完后，执行 `V(fullBuffers)` ，信号量【7】 `fullBuffers` 从【8】 **-1 变成 0，表明有「消费者」线程正在阻塞等待数据**，于是【9】==阻塞等待的消费者线程会被唤醒==。





- ==消费者线程==被唤醒后，如果此时没有其他消费者线程在读数据，【10】那么就可以==直接进入临界区，从缓冲区读取数据==。最后，【11】离开临界区后，把空槽的个数 + 1。

#### 2.进程的定义

为了方便操作系统管理 完成各程序并发执行 引入了**进程、进程实体**的概念

系统为每个运行的程序配置了一个数据结构 称为进程控制块 PCB 用来描述进程的各种信息（如程序代码存放位置）



那么进程到底是个啥 面试中问得挺多的！！

首先 明确下 ==进程实体==的概念 —— 是**静态**的

- 程序段 数据段 PCB 三部分组成了进程实体（进程映像） 
  - 一般情况下 进程实体简称为进程
  - 例如 所谓创建进程 实质上是创建进程实体中的PCB 
  - 撤销进程 实质上是撤销进程实体中的PCB
  - 注意！**PCB是进程存在的唯一标志**

然后再来看看 ==进程==的定义 不同角度下 进程有不同的定义 ——是**动态**的

- 是程序的一次**执行过程**
- 是一个程序及其数据在处理机上顺序执行时**所发生的活动**
- 是具有独立功能的程序在数据集合上**运行的过程** 是系统进行资源分配和调度的一个独立单位



那么二者结合起来理解 就容易得多了！

- 进程**是进程实体的运行过程**，是系统进行资源分配和调度的一个独立单位！

> 注:严格来说，进程实体和进程并不一样，进程实体是静态的，进程则是动态的。
>
> 不过，除非题目专门考察二者区别，否则可以认为进程实体就是进程。因此我们也可以说“**进程由程序段、数据段、PCB三部分组成**”

#### 3.进程的组成

进程（进程实体）由程序段 数据段 PCB三部分组成

来看看这三个部分都有啥用

- PCB 包含OS对进程进行管理 所需要的各种信息

![请添加图片描述](https://img-blog.csdnimg.cn/7dee4f3b654a41488c0e90b6ededa114.png)

- 程序段

程序代码即存放在此 



- 数据段

程序运行时使用、产生的运算数据——全局变量、局部变量、宏定义的常量 存放在此



> 题目：xxx是否保存在PCB中？
>
> 只要是和 ==进程**管理**==相关的数据 都存在PCB中

 

#### 4.进程的组织

- 链接方式
- 索引方式



#### 5.进程的特征

- **动态性** —— 进程最基本的特征
- 并发性
- **独立性** —— 进程是资源分配、接受调度的基本单位
- **异步性** —— 可能导致并发程序执行结果的不确定性 之后学习 进程同步 时还会涉及~
- 结构性

## 前端基础

### 基础知识

```js
//每日学到的知识点 可以写文章 可以记在心里 总结下来！
1.SGML HTML HTML
2.数据类型的分类与各自可以使用的判断方式
	基本（数值）类型
    对象（引用）类型
    == 与 === 的区别
3.undefined与null的区别？
4.什么时候给变量赋值为null呢？
5.不同变量内存值的类型
	数值类型&引用类型
6.包装对象的自定义方法
```

#### 1.SGML

可以看下这篇文章 简洁明了

[SGML、HTML、XML、XHTML、HTML5](https://www.cnblogs.com/huanqna/p/8178057.html)

![img](https://images2017.cnblogs.com/blog/1288677/201801/1288677-20180102165648440-35197995.png)

“ML”即 “Markup language(标记语言)”

GML 是第一代标记语言，使文档能明确将标示和内容分开，所以文件使用同样的标示方法。



#### 2.数据类型的分类与判断

【1】基本类型

最后面的就是用于判断的运算符

* Number ----- 任意数值 ----- `typeof`
* String ----- 任意字符串 ----- `typeof`
* Boolean ---- true/false ----- `typeof`
* **undefined** --- undefined ----- **`typeof/===`**

- **null** ----- null ----- **`===`**  —— 只能用全等判断null 而不可以用`typeof` （因为判断出来得object~）

【2】引用类型

* Object ----- typeof/instanceof
* Array（是一种特别的对象） ------ `instanceof` —— `instanceof`专门用于判断对象的类型哦！

* Function ---- `typeof`
  *  `typeof 一个函数 = Function` （输出等于Function）
  * 但是其实这个Function就是个字符串 因为 `typeof 一个函数 === ‘Function’` 为true

【3】=== 全等 & == 相等

=== 不会自动做数据类型的转换 所以这样得到的是“完全相等”的两个变量

== 会自动做数据类型的转换

#### 3.用作判断的三种运算符

- `typeof`

注意它的返回类型为字符串哦

```js
'undefined'
'number'
'string'
'boolean'
'object'//这里注意！JS的历史遗留问题导致 null array两种数据类型都会被typeof判断为'object'!!!
'function'
```

- `instanceof`

专门用于判断对象**具体类型**的运算符（比如数组这种特别的对象）

- `null`

专门用于判断null undefined这种“只有一种**固定值**的数据类型！”

```js
const a = null;
const b = undefined;
console.log(a === null);//true
console.log(b === undefined);//true
```



#### 4.undefined & null的区别

- undefined：变量未赋值
- null：变量定义并已经赋值了！只不过赋值为null了~



#### 5.什么时候给变量赋值为null？

- 初始赋值 表明将要赋值为对象！
- 结束前让对象成为垃圾对象

```js
let a = null;// 01 初始赋值为null 表明将赋值a为对象 
a = { //a指向这个对象！
    a1: [1,'abc',console.log],
    a2:function(){
        console.log('a2');
    }
}
a = null;// 02 使a指向的对象成为垃圾对象
```





#### 6.不同变量内存值的类型

- 基本类型

保存就是**基本类型的数据**

- 引用类型

保存的是**地址值** 



#### 7.包装对象的自定义方法

所谓包装对象 就是说 三种原始类型的值——数组、字符串、布尔值 在一定条件下也会自动转为对象 也就是原始类型的“包装对象”Wrapper

> 这个内容是红宝书的第五章《基本引用类型》的内容  

我们可以在这三个原生对象的原型链上定义自定义方法

```js
String.prototype.double = function(){
    return this.valueOf() + this.valueOf();
} 
'abc'.valueOf();//abcabc

Number.prototype.double = function() {
    return this.valueOf() + this.valueOf();
}
(123).valueOf();//246
```





### `freecodecamp`设计实操练习

```js
//freecodecamp刷题
今日 CSS专题~
1.CSS基础 0-16% 比较有趣的点是可以通过先引入Google Fonts 使用对应的字体
2.应用视觉设计 0-19%
	文本效果
    	strong 加粗
        u 添加下划线
        em 强调文本（文本倾斜）
        s 给文本添加删除线 自动给元素添加这段样式：text-decoration: line-through;
		hr 创建水平分割线
3.应用无障碍 0-23% 
	就算图片是修饰性的（不需要加载出来也不影响文章阅读） 那么可以只加alt=""还是要加上！有助于搜索引擎记录图片内容~
    H5中的main 用于呈现网页的主体内容
    H5中的artical 放文章~ 要牢记！辅助设备依赖组织良好、语义化的标签来获取页面中的信息。
```

#### 1.Google Fonts

```html
<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">

/* 后面就可以用对应的字体了 */
<style>
  h2 {
    font-family: Lobster;
  }
</style>
```



#### 2.text-align

`text-align: justify;` 可以让除最后一行之外的文字两端对齐，即每行的左右两端都紧贴行的边缘。

`text-align: center;` 可以让文本居中对齐。

#### 3.alt

alt属性有助于搜索引擎记录图片内容

#### 4.main标签

用于呈现网页的主体内容，且每个页面应只有一个。 这是为了围绕与**页面中心主题相关的信息**

- 而不应包含如导航连接、网页横幅等需要在多个页面中重复出现的内容。

也有一个内嵌的特性，以便辅助技术**快速定位到页面的主体**。 

- 如果你在页面顶部看到过“跳转到主要内容”链接，那

  

  么使用 `main` 标签会自动让辅助设备具有这个跳转的功能。



### JS红宝书

```js
//经典书籍 目标：反复阅读
p161-171
6.1 Object对象
	使用中括号存取数据 复习下   
6.2 Array对象
	ES中最常用的类型 —— 重要！
    ES中数组每个槽位可以存储任意类型的数据 数组是动态大小的
    1.ES6新增的创建数组的静态方法 from of
    2.数组空位
    3.数组length属性的有趣用法
    4.ES经典问题 判断一个对象是不是数组
    5.ES6中 Array原型上暴露了3个用于检测数组内容的方法
    6.ES6新增了两个方法：批量复制方法 copyWithin()，以及填充数组方法 fill()
	7.数组 -> 字符串 又是之前遇到过的问题~
```

#### 1.创建数组的静态方法 from of

from()用于将 类数组结构转换为数组实例，而 of()用于将一组参数转换为数组实例

#### 2.数组空位

由于行为不一致和存在性能隐患，因此实践中要避免使用数组空位。

如果确实需要空位，则可以显式地用 undefined 值代替。

#### 3.length属性

数组 length 属性的独特之处在于，它不是只读的。通过修改 length 属性，可以从数组末尾删除 / 添加元素

#### 4.数组检测

一个经典的 ECMAScript 问题是判断一个对象是不是数组。在只有一个网页（因而只有一个全局作 用域）的情况下，使用 `instanceof` 操作符就足矣：

> 使用 `instanceof` 的问题是假定只有一个全局执行上下文。如果网页里有多个框架，则可能涉及两 个不同的全局执行上下文，因此就会有两个不同版本的 Array 构造函数。如果要把数组从一个框架传给另一个框架，则这个数组的构造函数将有别于在第二个框架内本地创建的数组。

为解决这个问题，ECMAScript提供了 `Array.isArray()`方法。这个方法的目的就是确定一个值是 否为数组，而不用管它是在哪个全局执行上下文中创建的

#### 5.迭代器方法 keys values entries

在 ES6 中，Array 的原型上暴露了 3 个用于检索数组内容的方法：keys()、values()和 entries()。keys()返回**数组索引**的迭代器，values()返回**数组元素**的迭代器，而 entries()返回**索引/值对**的迭代器：

![在这里插入图片描述](https://img-blog.csdnimg.cn/1a3256ed51ed4962adf90e49b842d086.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5pWy5Luj56CB55qE5bCP5o-Q55C05omL,size_16,color_FFFFFF,t_70,g_se,x_16)

#### 6.数组复制与填充问题



![在这里插入图片描述](https://img-blog.csdnimg.cn/d15476210f1e4b9dbc986137f8d5d056.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5pWy5Luj56CB55qE5bCP5o-Q55C05omL,size_17,color_FFFFFF,t_70,g_se,x_16)



```js
const zeros = [0,0,0,0,0];
//zeros.fill(填充数字,填充索引起始,填充索引结束前一位);
zeros.fill(7, 1, 3);
console.log(zeros);//[0,7,7,0,0]
```

```js
let ints,
    reset = {} => ints =[0,1,2,3,4,5,6,7,8,9];

//ints.copyWithin(插入位置的索引,复制的索引起始,复制的索引结束前一位);
ints.copyWithin(4,0,3);//[0,1,2,3, 0,1,2, 7,8,9]
```

#### 7.数组->字符串

得到——以逗号分隔数组值的字符串

- `toLocaleString()`
- `toString()`
- `数组.valueOf()`

得到——以传入参数分割数组值的字符串

> 而 `包装对象实例.valueOf()` 则返回包装对象实例对应的原始类型的值
>
> ```js
> new Number(123).valueOf()  // 123
> new String('abc').valueOf() // "abc"
> new Boolean(true).valueOf() // true
> ```

- `join("xxx")`

### JS30练

```js
//一天一个有趣的原生JS练手demo 边做边总结！
```



## 前端开发框架

### react尚硅谷

```js
//广受好评的react教程 先快速过一下 再去实操哦！
p53-56 没看多久 react要再多给些时间！
1.学习了快速创建类/函数组件的插件+快捷键 rcc/rfc
2.功能界面的组件化编码流程
3.TodoList案例 
	组件分解~
```

#### 1.组件化编码流程

【1】拆分组件: 拆分界面,抽取组件 —— 更多的是一个设计！决定一下 这个页面要拆分成哪几块儿

【2】实现静态组件: 使用组件实现静态页面效果 —— 着手写 `.jsx .css`  实现效果

【3】实现动态组件

- 动态显示初始化数据
  - 数据类型
  - 数据名称
  - 保存在哪个组件？
- 交互
  - 从绑定事件 监听 开始





### react习题练习

```js
//先过一遍原理 再去敲代码加深印象（freecodecamp）
```



## 面试题

### 面试题、面经总结

```js
//网上面试题、面经辣么多 一天多看一些 然后同时也要研究一些题的答案！
1.如何实现接口防刷？
2.HTML面试题文章*1
```

#### 1.接口防刷

【方案设计题】【中等】 如何实现接口防刷

参考 [接口如何防刷](https://blog.csdn.net/weixin_43964148/article/details/109352318)

##### 1.背景了解

为啥会有人刷接口呢？

###### 1、牟利

黄牛在 12306 网上抢票再倒卖。

###### 2、恶意攻击竞争对手

如短信接口被请求一次，会触发几分钱的运营商费用，当量级大了也很可观。

###### 3、压测

用 apache bench 做压力测试。

###### 4、当程序员无聊的时候



##### 2.怎么样算是“刷”？

- 次数多
- 频率极高 可能达到一秒上千次
- 用户身份难以识别 刷的过程中可能会随时更换浏览器/IP

##### 3.如何实现接口防刷

一些比较高级的方法：

【1】**源IP请求个数限制**——客户端请求的时候把IP记录下来 每次访问一次 这个IP的访问次数就+1 超过限制拉黑这个IP

> 感觉是比较常规的方法 但是刷的过程有可能随时更换浏览器/IP 这样就防不住了

【2】所以应用了高级方法 **网关控制流量洪峰** 

对在一个时间段内出现流量异常的情况 可以拒绝请求——这个好高级欸 交给网安的同学来吧 溜了溜了

具体细则参考这篇文章——https://blog.csdn.net/arkblue/article/details/54956776

还有一些简单的利用计网知识的方法

【3】对HTTP请求进行头信息的校验 

- 精准定位到你指定请求的服务器的域名、端口号（通过`host`字段）
- 获得当前请求网页的前一个网页的地址（通过 `Referer` 字段）

【4】对用户唯一身份 uid 进行限制和校验 —— 基本长度、组合方式、有效性

或者让uid 有一定的时效性

【5】前后都按协议采用二进制方式进行交互/协议采用签名机制

参考 [HTTP响应头和请求头信息对照表](https://blog.csdn.net/u010412301/article/details/65067176)



这里就都是我们曾经遇到过的现实场景了~

【1】返回“操作频繁”的错误提示

缺点是 可能会把确实是操作比较频繁的真实用户给拦截了

【2】各种人机验证的方式

也是我们几乎都会遇到的场景——验证码、滑动图片、找不同啥的

（看到一个这个好有意思哈哈哈![img](https://imgconvert.csdnimg.cn/aHR0cHM6Ly9tbWJpei5xcGljLmNuL21tYml6X3BuZy9GYWVEZElmZXVxNDBoa3JjODVjSEFZajhUZWZyaDhNSUU5aDBVZ3cyM0ZYdTI0MXJVa25kSzI4WFlOZUlOSG5FbmlhVERwWUg4OEF2OWJob3k0S2hjSmcvNjQw?x-oss-process=image/format,png))

可以精准识别请求是真人/机器发出的 二次筛选

缺点就是不够人性化，有的找不同真的很难欸！！





#### 2.面试题掘金文章

[【青训营】做面试题般回顾前端基础知识HTML篇 - 2 HTML语义化标签、新增/移除的HTML5特性](https://juejin.cn/post/7007325772067110943)



### 力扣

```js
//跟着数据结构入门 的每日学习计划 进行刷题 一天1-3题！ 
387.字符串中的第一个唯一字符
	要对map更加熟练掌握
    	正好9.14就详细看了一下map 今天再试试~
```

[387. 字符串中的第一个唯一字符](https://leetcode-cn.com/problems/first-unique-character-in-a-string/)

刚学完entries 这题就用到了

还能再巧一些么哈哈

entries()返回**索引/值对**的迭代器：

![在这里插入图片描述](https://img-blog.csdnimg.cn/1a3256ed51ed4962adf90e49b842d086.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5pWy5Luj56CB55qE5bCP5o-Q55C05omL,size_16,color_FFFFFF,t_70,g_se,x_16)

> 参考官方题解II

```js
var firstUniqChar = function(s) {
    const n = s.length;
    const map = new Map();
    for(let [key, value] of Array.from(s).entries()){
        if(map.has(value)){
            map.set(value, -1);//出现重复 给键赋值-1
        }
        else{
            map.set(value, key); 
        }
    }
    let res = n;
    for(let value of map.values()){
        if(value !== -1 && value < res){
            res = value;
        }
    }
    if(res === n){
        res = -1;
    }
    return res;
};   
```



# 2021.9.14 *改变总结前端基础知识的方法 *力扣总结方式改变 *进一步了解互联网公司对在校生的要求

> 之前前端基础知识和红宝书的知识点是分开记的
>
> 其实知识都是互通的
>
> 从今天开始 所有内容记录在基础知识中

> 力扣只总结比较有收获的题目！

> 另外今天和一个非常友善的来自字节跳动的前端工程师聊天时 了解到了互联网公司（大厂吧）对在校生们的要求
>
> 所以 提高自己的知识储备 学习基本功 尽可能地完成项目来作为加分项 是现在我要做的事情！
>
> 要时刻回头看看自己的路走得是否正确呀！
>
> ![在这里插入图片描述](https://img-blog.csdnimg.cn/9f043760237d4361a406126e605d99dc.png)



今天由于身体不老得劲儿的 效率略差 但是还是学到不少东西 

尤其是今天的JS30 太棒了！

react开发继续在搞`TodoList` 虽然到了挺难的一个阶段 但是等到效果出来了很有感觉！

- 还有一个点 今天聊天占据了我太多时间！多了解行业信息是好事 但是太瞻前顾后会打乱学习节奏！

学习时请关闭通讯设备！！

```js
// 今日主要收获 & 学习时间
// 学习内容的细则下面分块简单列出了
Totally 580min
1.计网 min
	/*  */
2.操作系统 min
	/* 今天基础知识木有学 */
3.前端基础知识 
	3.1 JS 30demos 160min
    	/*  */
    3.2 JS红宝书 130min
    	/* 完成了第六章的学习 
    	原来数组有这么多神奇的方法嘛！
    	好多方法是以前刷力扣的时候题解出现/写demo时出现过/学习react时出现过的内容
    	但是当时都一知半解！
    	所以j*/
    3.3 JS高级教程 min
    	/*  */
    3.4 freecodecamp一个专题练习2+道题 min
    	/* 停一段时间 */
4.刷题心得
	4.1 力扣 60min
    	/* 又是一道哈希映射 */    
    4.2 总结面经、面试题 min
    	/* 了解了些就业上的事情 并没有刷面经 */
5.前端开发框架 react学习 120min
	/* 继续进行 TodoList的开发 */
6.Ajax学习
	/*  */
7.学校课程内容 60min
8.每日总结 50min
```



```js
const time = 6.66;
const GetUp = function(time){
    if(time < 8.00) {
        console.log("早早起床，开启阳光高效的一天😊！");
    }
    else{
        console.log("😭")
    }
}
const Sleep = function(time){
    if(time < 11.30){
        console.log("早早睡觉，身体健康 心情愉悦😊~");
    }
    else{
        console.log("😭");
    }
}
GetUp(7.20);//早早起床，开启阳光高效的一天😊！
Sleep(1.00);//😭
```



## 核心基础知识

### 计网

```js
//小林的图解网络 先刷几遍所需要的知识点 &读图解HTTP TCP等书籍 & 网络抓包实操练习 深入理解

//明天再看看学习心得这里~
```







###  操作系统

```js
//小林的图解系统 & 学校课程学习 & 王道考研-OS 三者配合 高效学习
```



## 前端基础

### 基础知识

```js
//每日学到的知识点 可以写文章 可以记在心里 总结下来！
1-10 见红宝书——主要是数组的方法与Map集合类型、Set集合类型
```

#### 1.数组的栈方法

![在这里插入图片描述](https://img-blog.csdnimg.cn/118c90aad04e420ea95dbe5868e2af8a.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5pWy5Luj56CB55qE5bCP5o-Q55C05omL,size_15,color_FFFFFF,t_70,g_se,x_16)



#### 2.数组的队列方式

就只有 入队列的方法与栈不同 其他方法是一样的

使用shift

插入到队头



#### 3.数组排序方法 sort

sort 这个sort有个坑 所以一般不直接用 

![在这里插入图片描述](https://img-blog.csdnimg.cn/a4cb8f58a27f482ba15f6124bfaacb7e.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5pWy5Luj56CB55qE5bCP5o-Q55C05omL,size_16,color_FFFFFF,t_70,g_se,x_16)



#### 4.数组的操作方法-增加元素 单独切一段元素 插入元素 concat slice splice

- `concat()`

![在这里插入图片描述](https://img-blog.csdnimg.cn/ae3411e563ea4818af0be79c79571d76.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5pWy5Luj56CB55qE5bCP5o-Q55C05omL,size_15,color_FFFFFF,t_70,g_se,x_16)

- `slice()`

![请添加图片描述](https://img-blog.csdnimg.cn/72702c8f27664677964f4c08582cb9dd.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5pWy5Luj56CB55qE5bCP5o-Q55C05omL,size_15,color_FFFFFF,t_70,g_se,x_16)



- `splice()`

![请添加图片描述](https://img-blog.csdnimg.cn/562f8ba16eb742e39d20baafbd23ba49.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5pWy5Luj56CB55qE5bCP5o-Q55C05omL,size_15,color_FFFFFF,t_70,g_se,x_16)

#### 5.搜索数组中元素的位置 indexOf

![在这里插入图片描述](https://img-blog.csdnimg.cn/80a68236760b480dbc2ddd50c896d519.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5pWy5Luj56CB55qE5bCP5o-Q55C05omL,size_15,color_FFFFFF,t_70,g_se,x_16)



#### 6.迭代方法 - 各种高级操作 filter map forEach

超级好用的几个方法！

- `every()`
- `some()`
- `filter()`

![在这里插入图片描述](https://img-blog.csdnimg.cn/ca565154c7664d0a8c01b45a30397477.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5pWy5Luj56CB55qE5bCP5o-Q55C05omL,size_17,color_FFFFFF,t_70,g_se,x_16)

- `map()`
- `forEach()`

![请添加图片描述](https://img-blog.csdnimg.cn/b16fc430c789416aaeb99134b28a7cd5.png)

#### 7.归并方法 reduce

- `reduce()`

这里的reduce的第一个参数 prev要注意

如果求和时  一般会给其起名为total 用于存储截至此时的和 

![在这里插入图片描述](https://img-blog.csdnimg.cn/0ccc715666954883ad908dff58bff2a7.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5pWy5Luj56CB55qE5bCP5o-Q55C05omL,size_15,color_FFFFFF,t_70,g_se,x_16)



#### 8.Map集合类型的基本API

明确Map实例的格式 为 键值对 

```js
const map = new Map([
    ["key1", "val1"],
    ["key2", "val2"],
    ["key3", "val3"]
])
```



- set() 添加键值对
- get() 获得某个键的值
- has() 查询是否有这个键
- `.size()` 获取键值对数量
- delete() 删除某个键值对
- clear() 清除映射实例中的所有键值对

举例：

![在这里插入图片描述](https://img-blog.csdnimg.cn/a78321c557bb42b797bd84877bc5fe04.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5pWy5Luj56CB55qE5bCP5o-Q55C05omL,size_18,color_FFFFFF,t_70,g_se,x_16)

另外 与Object只能使用数值、字符串、符号作为键不同

Map可以使用**任何JS数据类型**作为键！！（这也是为啥ES6要创键这个集合类型）



- 另外注意 Map实例对象2个有趣的特性：

  - 一个key放入多个value —— 覆盖原先的value

  ```js
  var m = new Map();
  m.set('Adam', 67);
  m.set('Adam', 88);
  m.get('Adam');//88
  ```

  可以看出 key是不允许重复的！这也符合哈希表特性

  但是重复了也不会出错 自动就覆盖掉了

  - 值重复就没啥事儿（那肯定的嘛）

  ![请添加图片描述](https://img-blog.csdnimg.cn/b7e9d37dcc56444085727559a46704ef.png)

#### 9.迭代Map实例（按照插入顺序）

p191

又看到了 .entries() 迭代器方法！

——可以返回key value

#### 10.Set集合类型的基本API 

跟Map的大多数API 和 行为 都是共有的

也是一组key的集合，但**不存储value**。                  

- 要创建一个`Set`，需要提供一个`Array`作为输入，或者直接创建一个空`Set`：

```js
var s1 = new Set(); // 空Set
var s2 = new Set([1, 2, 3]); // 含1, 2, 3
//其实跟map的初始化方法是一样的 就是初始化内容不同而已
```

由于key不能重复，所以，在`Set`中，key是无法像Map实例中一样 可以覆盖的！

- `.size`
- `has()` 判断有没有这个元素
- `clear()`
- `add()` 与map的set添加一组键值对不同 set添加个元素就好了



### `freecodecamp`设计实操练习

```js
//freecodecamp刷题
```





### JS红宝书

```js
//经典书籍 目标：反复阅读
p161-171
今天学习的数组相关方法在算法题中见到过无数遍！
// 从今天开始 红宝书下只写一些感悟之类的 具体知识点 全部移到“前端基础”中
6.2 Array中的——
	栈方法
    队列
    排序方法
    操作方法
    搜索元素位置的方法
    迭代方法
    归并方法
6.4 Map
	基本API
    迭代Map实例
6.6 Set
	与Map基本类似 存储内容不同
```



### JS30练

```js
//一天一个有趣的原生JS练手demo 边做边总结！
终于完结了demo04！！这个练习数组的项目 我们还会再见的hhh
```

强推！这里的数组方法真的都超实用的！

https://fangzhousu.github.io/JS-30Demos/04_Array-Practice/index-billSu.html

![请添加图片描述](https://img-blog.csdnimg.cn/4110b907a980492484e11fded1ba6f44.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5pWy5Luj56CB55qE5bCP5o-Q55C05omL,size_20,color_FFFFFF,t_70,g_se,x_16)

其中第八题最有感悟 记录下来——

#### reduce的奇妙用法

在reduce的参数 `(prev,cur,index,array)` 中 也就是 `(上一个归并值（一般记作total 视情况记作收集数据用的obj/arr),当前项的值,当前项,数组本身)`

在本题中 代码如下：

```js
 const data = ['a','a','b','c','d'];
 
 const transportation = data.reduce(function(obj,item){
     if(!obj[item]){
         obj[item] = 0;
     }
     obj[item]++;
     return obj;
 }, {});
```

用预设值{}将obj初始化为空对象

item为索引 依次遍历数组 来进行累加计数 obj[item]++ 如果没有发现这一项 就记0（我是感觉这个没啥用捏） 最后返回这个对象——

![在这里插入图片描述](https://img-blog.csdnimg.cn/ceb362d8e2a04d1d978481089de8e384.png)



## 前端开发框架

### react尚硅谷

```js
//广受好评的react教程 先快速过一下 再去实操哦！
p57-59
继续完成TodoList案例~
```





### react习题练习

```js
//先过一遍原理 再去敲代码加深印象（freecodecamp）
```



## 面试题

### 面试题、面经总结

```js
//网上面试题、面经辣么多 一天多看一些 然后同时也要研究一些题的答案！
```



### 力扣

```js
//跟着数据结构入门 的每日学习计划 进行刷题 一天1-3题！ 
// 从今天开始 改变力扣总结的方式——只记录特别有感悟的题目
383.赎金信
```

[383. 赎金信](https://leetcode-cn.com/problems/ransom-note/)

给定一个赎金信 (`ransom`) 字符串和一个杂志(`magazine`)字符串，判断第一个字符串 `ransom` 能不能由第二个字符串 `magazines` 里面的字符构成。如果可以构成，返回 `true` ；否则返回 `false`。

(题目说明：为了不暴露赎金信字迹，要从杂志上搜索各个需要的字母，组成单词来表达意思。杂志字符串中的每个字符只能在赎金信字符串中**使用一次**。)

**示例 1：**

```
输入：ransomNote = "a", magazine = "b"
输出：false
```

**示例 2：**

```
输入：ransomNote = "aa", magazine = "ab"
输出：false
```

**示例 3：**

```
输入：ransomNote = "aa", magazine = "aab"
输出：true
```

#### 解题思路与代码

##### 哈希映射 使用集合类型Map

> 又碰到了map的新用法呢！其实也不新 第一次碰到得时候没理解——map值的修改
> 这部分没有专门的方法 得先获得value对应的值 然后根据题意进行调整 最后再用set赋回去~

```js
var canConstruct = function(ransomNote, magazine) {
    const map = new Map();
    // 讲报纸中的字母映射到哈希表中
    for(let value of Array.from(magazine)){
        if(!map.has(value)){
            map.set(value,1);
        }
        else{
            let count = map.get(value);
            count++;
            map.set(value,count);
        }
    }
    // 用哈希表中的{字母:字母数}对应下赎金信中的字母
    for(let letter of Array.from(ransomNote)){
        if(!map.has(letter)){
            return false;
        }
        else{
            let count = map.get(letter);
            if(count === 0){
                return false;
            }
        // map实例没有被提供“修改value”的方法 所以只能用这种笨办法了~
        count--;
        map.set(letter,count);
        }
    }
    return true;
};
```

# 2021.9.15 

今天是近期最混乱的一天 任务完成度很低

但是思考了很多学习路线上的内容 十分感谢[luke带来的帮助](https://objtube.gitee.io/front-end-roadmap/#/) 

下一段时间目标：快速浏览JS高级教程 学习一些使用的JS知识 好做项目 明天重塑学习路线！

```js
// 今日主要收获 & 学习时间
// 学习内容的细则下面分块简单列出了
Totally 350min
1.计网 min
	/*  */
2.操作系统 min
	/*  */
3.前端基础知识 
	3.1 JS 30demos 40min
    	/* demo05 主要是过一下CSS的实现 简单的动画特效很好看~ */
    3.2 JS红宝书 min
    	/*  */
    3.3 JS高级教程 min
    	/*  */
    3.4 freecodecamp一个专题练习2+道题 min
    	/*  */
    3.5 node.js 80min
    	/* 很棒的一个node.js入门教程！ */
4.刷题心得
	4.1 力扣 20min
    	/* 很快地搞定了一道242.有效的字母异位词 哈希映射~ */    
    4.2 总结面经、面试题 30min
    	/* 从URL字符串中获取 查询字符串参数 蛮有意思地一题 顺带了解了 URL的组成 */
5.前端开发框架 react学习 min
	/*  */
6.Ajax学习
	/*  */
7.学校课程内容 120+60+20min
8.每日总结 min
```



```js
const time = 6.66;
const GetUp = function(time){
    if(time < 8.00) {
        console.log("早早起床，开启阳光高效的一天😊！");
    }
    else{
        console.log("😭")
    }
}
const Sleep = function(time){
    if(time < 11.30){
        console.log("早早睡觉，身体健康 心情愉悦😊~");
    }
    else{
        console.log("😭");
    }
}
GetUp(9.00);//😭
Sleep(12:30);//😭
```



## 核心基础知识

### 计网

```js
//小林的图解网络 先刷几遍所需要的知识点 &读图解HTTP TCP等书籍 & 网络抓包实操练习 深入理解
//要再看看学习心得这里再开第二轮的学习~
```







###  操作系统

```js
//小林的图解系统 & 学校课程学习 & 王道考研-OS 三者配合 高效学习
```



## 前端基础

### 基础知识

```js
//每日学到的知识点 可以写文章 可以记在心里 总结下来！

```



### `freecodecamp`设计实操练习

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
demo05 今天的工作量很小
主要负责效果展示的：
	flex
    transform
```

https://fangzhousu.github.io/JS-30Demos/05_Flex-Panel-Gallery/index-billSu.html

![在这里插入图片描述](https://img-blog.csdnimg.cn/7f2734bbf6fe4f53aca73b5a3f615408.png)



## 前端开发框架

### react尚硅谷

```js
//广受好评的react教程 先快速过一下 再去实操哦！
```





### react习题练习

```js
//先过一遍原理 再去敲代码加深印象（freecodecamp）
```



## 面试题

### 面试题、面经总结

```js
//网上面试题、面经辣么多 一天多看一些 然后同时也要研究一些题的答案！
1.从URL字符串中获取 查询字符串参数
```



### 力扣

```js
//跟着数据结构入门 的每日学习计划 进行刷题 一天1-3题！ 
// 从今天开始 改变力扣总结的方式——只记录特别有感悟的题目
242.有效的字母异位词 依旧是用的哈希映射~
```

# 2021.9.16

学习路线的重塑

- JS30demos快速过一下 不要追究细则 **大概知道**啥效果是什么代码实现的 即可 修饰的工作回头再做就好
- 红宝书依旧每天看一下 但是要**不求甚解**一些 快速过知识点内容
- 开始指向性地看DOM BOM
- 看作用域、闭包、原型链



快速把node入门这个教程学习了（作者将带着我们开发一个实际node应用）配合具体教程二刷深入学习后再发到`github`上~



```js
// 今日主要收获 & 学习时间
// 每个学习内容的细则下面分块列出了
Totally min
1.前端基础知识 
// 从早上-中午 拿出一整块时间学习JS 
// 晚上时间跑步回来的时间也交给JS
	1.1 JS现代教程复习DOM BOM JS高级 快速浏览 min
    	/*  */
    1.2 JS红宝书 min 
    	/*  */
    1.3 JS高级教程 min 
    	/*  */
    1.4 JS 30demos 20min
    	/* demo06开了个头 知道了要用正则表达式 退缩. */
    // 这之后的内容 后续再推进
    1.5 freecodecamp一个专题练习2+道题 min
    1.6 正则表达式
2.核心基础知识
//下午由基础知识开启
	2.1 计网 min
		/*  */
	2.2 操作系统 min
		/*  */
3.面试刷题
// 看完基础知识 来刷刷题 总结一下面经
	3.1 力扣 min
    	/* 开始链表的内容 */    
    .2 总结面经、面试题 90min
    	/* CSS内容 总结了十种选择器 排列了下它们的优先级~ */
4.前端进阶知识学习
	4.1 接口请求Ajax/Fetch
    4.2 Node.js
		/*  */
	4.3 （ES6模块学习过后开启）webpack
5.前端开发框架 
	5.1 react学习 min
    // 反复写todolist案例 写熟练了先停下来去学5.2+4.1
		/*  */
    5.2 freecodecamp刷题练手
    	/*  */
6.学校课程内容 90min 操作系统课程
7.每日总结 90+min
	/* 规划了下接下来一段时间要学习的内容
    也许是至关重要的改革呢！*/
```



```js
const time = 6.66;
const GetUp = function(time){
    if(time < 8.00) {
        console.log("早早起床，开启阳光高效的一天😊！");
    }
    else{
        console.log("😭")
    }
}
const Sleep = function(time){
    if(time < 11.30){
        console.log("早早睡觉，身体健康 心情愉悦😊~");
    }
    else{
        console.log("😭");
    }
}
GetUp(9.00);//😭
Sleep();//😭
```

## 1.前端基础

### ==JS基础知识==

```js
//每日学到的知识点 可以写文章 可以记在心里 总结下来！

```





### JS红宝书进度记录

```js
// 经典书籍 目标：反复阅读 一天读一个小时 求快 莫纠结
```



### JS高级-尚硅谷 进度记录

```js
// 很不错的课程 巩固基础 一天看一小时左右
```



### JS30练

```js
//一天一个有趣的原生JS练手demo 边做边总结！莫纠结细则
```

















## 2.核心基础知识

### 计网

```js
//小林的图解网络 先刷几遍所需要的知识点 &读图解HTTP TCP等书籍 & 网络抓包实操练习 深入理解
//要再看看学习心得这里再开第二轮的学习~
```







###  操作系统

```js
// 小林的图解系统 & 学校课程学习 & 王道考研-OS 三者配合 高效学习
// 要看一下学校的ppt了 课程旷了好几节有点听不懂！
```



## 3.面试题

### 面试题、面经总结

```js
//网上面试题、面经辣么多 一天多看一些 然后同时也要研究一些题的答案！
1.CSS面试题总结-选择器方面的 
```

[【青训营】做面试题般回顾前端基础知识CSS篇 - 1 CSS选择器的那些事儿](https://juejin.cn/post/7008522385921933326)





### 力扣

```js
//跟着数据结构入门 的每日学习计划 进行刷题 一天1-3题！ 
// 从今天开始 改变力扣总结的方式——只记录特别有感悟的题目

```







## 4.前端进阶知识学习





## 5.前端开发框架

### react尚硅谷

```js
//广受好评的react教程 先快速过一下 再去实操哦！
```





### react习题练习

```js
//先过一遍原理 再去敲代码加深印象（freecodecamp）
```



