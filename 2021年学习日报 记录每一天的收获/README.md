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
 5.刷题心得 110min
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

今天去沙河玩耍了~学习时间略少

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
4.刷题心得 
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
* Array（是一种特别的对象） ------ `instanceof` —— `instanceof`专门用于判断对象实例的类型哦！

```js
var arr=[6,6,6]
console.log(arr instanceof Array)// true
console.log(typeof arr)// object
```



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
    	/* 数组练习的那个 很棒的demo! */
    3.2 JS红宝书 130min
    	/* 完成了第六章的学习 
    	原来数组有这么多神奇的方法嘛！
    	好多方法是以前刷力扣的时候题解出现/写demo时出现过/学习react时出现过的内容
    	但是当时都一知半解！
    	*/
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



整体学习状态有点差 

明天要加油啊！

```js
// 今日主要收获 & 学习时间
// 每个学习内容的细则下面分块列出了
Totally 320min
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
    	/* demo06开了个头 知道了要用正则表达式 退缩.jpg */
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
	3.1 力扣 50min
    	/* 开始链表的内容
        回忆了两道链表经典题*/    
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
7.每日总结 90min
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
Sleep(12:30);//😭
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



# 2021.9.17

下午整体状态不错！

但是早上没起来 有点遗憾

晚上状态 又拉了哦！

又是毁在聊天上 不过认识了一个阿里的大佬 得到了大佬的一些鼓励 也是很开心了！大佬让我“去做自己喜欢的事”

是啊 不考研 选择前端就业的我 是在做自己喜欢的事 但是几年以后 我会后悔么？

今天老妈也提到了 不考研以后能有竞争力么

我不知道 我也想知道

但我想 开弓没有回头箭 我已经反复横跳太多次了

- 研究AI 想搞算法 读研

- 研究Java 数据库 想搞后端 读研

- 到现在 跟随着字节校园的引导 一步步地向着前端研发的路线 慢慢前行着 我觉得 我没走错 至少现在看 没走错 而且我很享受现在的状态

总之尽可能地多学 为了之后找实习 校招时候的从容吧。

胡乱地说了这么多 该睡啦 明早起来继续啊 一上午的JS等着我咧

另外 明天要去上数据库 跑步又泡汤了 nice

```js
// 今日主要收获 & 学习时间
// 每个学习内容的细则下面分块列出了
Totally 290min
1.前端基础知识 
// 从早上-中午 拿出一整块时间学习JS 
// 晚上时间跑步回来的时间也交给JS

// 起晚了 快中午才起。所以JS就...
	1.1 JS现代教程复习DOM BOM JS高级 快速浏览 min
    	/*  */
    1.2 JS红宝书 min 
    	/*  */
    1.3 JS高级教程 min 
    	/*  */
    1.4 JS 30demos min
    	/*  */
    // 这之后的内容 后续再推进
    1.5 freecodecamp一个专题练习2+道题 min
    1.6 正则表达式
2.核心基础知识
//下午由基础知识开启
	2.1 计网 30min
		/* 复习了一下TCP连接三次握手 四次挥手的内容 */
	2.2 操作系统 40min
		/* 学校课程的内容 干掉了第一章的ppt 
		学习了下操作系统概述 进程是啥啊 内存管理是为啥有啊 操作系统的类型都有哪些啊 这种*/
3.面试刷题
// 看完基础知识 来刷刷题 总结一下面经
	3.1 力扣 60min
    	/* 完成链表的内容
        50min刷掉三道题 都是前几个月做过的题（当时还是用java做嘞！） */    
    .2 总结面经、面试题 70min
    	/* CSS内容 总结了盒模型的一些细节
        了解到了box-sizing:border-box;这种有趣的用法 width = content+padding+margin+border;
        一个 100*100 Canvas 占用内存多大——100 * 100 * 4 bytes = 40,000 bytes */
4.前端进阶知识学习
	4.1 接口请求Ajax/Fetch
    4.2 Node.js 50min
		/* 又学习了一部分nodejs入门的内容 
		*/
	4.3 （ES6模块学习过后开启）webpack
5.前端开发框架 
	5.1 react学习 20min
    // 反复写todolist案例 写熟练了先停下来去学5.2+4.1
		/* 组件之间信息的传递 
		实现 勾选一下item组件中的复选框可以让done属性变化 这里有点看不太懂了 因为和上一次写这个案例隔得时间有点长 */
    5.2 freecodecamp刷题练手
    	/*  */
6.学校课程内容 min 
7.每日总结 20min
	/* 学习的东西 真没多少啊！！
    淦！赶紧睡觉明天早期学吧！*/
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
GetUp(10.00);//😭
Sleep(1.00);//😭
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
1.TCP三次握手 四次挥手
```







###  操作系统

```js
// 小林的图解系统 & 学校课程学习 & 王道考研-OS 三者配合 高效学习
// 要看一下学校的ppt了 课程旷了好几节有点听不懂！
1.学校ppt第一章 操作系统概述
```



## 3.面试题

### 面试题、面经总结

```js
//网上面试题、面经辣么多 一天多看一些 然后同时也要研究一些题的答案！
1.CSS面试题总结-盒模型方面的
```







### 力扣

```js
//跟着数据结构入门 的每日学习计划 进行刷题 一天1-3题！ 
// 从今天开始 改变力扣总结的方式——只记录特别有感悟的题目
刷了三道链表的题 专题完结了 明天开始刷栈、队列（没刷过欸！）
```







## 4.前端进阶知识学习

### Node.js

```JS
// 由 Node入门 这份教程入门 完成一个实战案例 简单入门node
// 然后再学习尚硅谷的node课程
1.node入门学习进度推进
```







## 5.前端开发框架

### react尚硅谷

```js
//广受好评的react教程 先快速过一下 再去实操哦！
今天没学太多 简单过了一下
```





### react习题练习

```js
//先过一遍原理 再去敲代码加深印象（freecodecamp）
```



# 2021.9.18 *JS学习顺序更新 *计网学习内容更新

- 上午时候看JS教程时明显感觉到混乱感 建议先根据当天的红宝书、JS高级确定了要学习的内容 再进行专项学习！(可以多准备一些教程)



今天主要的感受是——

- 东西学得有点多而杂 这样学没法快速达到行业标准的！请给更多时间学习**前端开发的内容**！注意比例的把控
- 抠细节太厉害 应该更多去注意更多工程化的内容！



另外上午效率太差！心爱的JS没咋学 逛了一上午b站！

明天开始定下规矩 逛b站计时 30min娱乐时间最多了！



```js
// 今日主要收获 & 学习时间
// 每个学习内容的细则下面分块列出了
// 逛b站、看漫画、聊qq/微信 计时 每次30min娱乐时间MAX —— !important
Totally 480min
1.前端基础知识 
// 从早上-中午 拿出一整块时间学习JS 
// 晚上时间跑步回来的时间也交给JS
	1.1 菜鸟、阮大、JS现代教程 今日学习内容预习 100min
    	/* 今天只看了JS现代教程 效率略低 
    	但是总结了下之后学习的路径 先集中力量看完JS高级教程（尚硅谷）初级教程中不会的也抽空看了！*/
    1.2 JS红宝书 min 
    // 每天要看一些 粗略地过一下即可！
    	/*  */
    1.3 JS高级教程 min 
    	/* 每日的重点！ */
    1.4 JS 30demos min
    	/*  */
    // 这之后的内容 后续再推进
    1.5 freecodecamp一个专题练习2+道题 min
    1.6 正则表达式
2.核心基础知识
//下午由基础知识开启
	2.1 计网 40min
		/* 定了一下之后学习的路径
        开始读文章 主要为 趣谈网络协议！并每日搭配一道面试题 */
	2.2 操作系统 40min
		/* 继续看学校PPT第二章的内容 了解下之后要学习的部分 追上课程进度 */
3.面试刷题
// 看完基础知识 来刷刷题 总结一下面经
	3.1 力扣 90min
    	/* 今天这题有点较真了 好久没做栈的题 正好复习下 用的是数组来达到栈的效果 */    
    3.2 总结面经、面试题 110min
    	/* 盒模型的问题有点太纠结了 唉~ */
4.前端进阶知识学习
	4.1 接口请求Ajax/Fetch
    4.2 Node.js 40min
		/* 上数据库的时候迷迷糊糊学得 越到后面越看不懂啊！ 
		赶紧把应用做出来然后再二刷这个 这个内容一定会好好学明白的hh*/
	4.3 （ES6模块学习过后开启）webpack
5.前端开发框架 
	5.1 react学习 40min
    // 反复写todolist案例 写熟练了先停下来去学5.2+4.1
		/* 回顾了五子棋 我又反悔了 五子棋也要做！ */
    5.2 freecodecamp刷题练手
    	/*  */
6.学校课程内容 min 
7.每日总结 20min
	/* 每天都在重塑学习路线啊哈哈哈 */
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
GetUp(8.00);//😭
Sleep(12:00);//😭
```

## 1.前端基础

### ==JS基础知识==



```js
//每日学到的知识点 可以写文章 可以记在心里 总结下来！
// JS现代教程 这里内容还蛮难理解的！
1.利用箭头函数没有自己的this 可以用它来获取外部上下文的对象属性
2.this 的值是对于整个函数的，代码段和对象字面量对它都没有影响。 格局打开
3.丢失了对象的作用域（上下文）this就会“丢失”
4.this丢失的解决方案 出现了熟悉的bind方法
5.解构赋值 主要是看了下对象解构赋值 然后复习了下其他的
6.generator
7.布尔值与数值比较时的隐式转换 true/false与0比较时 会把true隐式转换成1 把false隐式转换成0 
8.JS规定非0数字是true 0是false
9.空字符串是false 
Boolean("") == false;//true
```

#### 1.[箭头函数没有自己的 “this”](https://zh.javascript.info/object-methods#jian-tou-han-shu-mei-you-zi-ji-de-this)

这里的 `arrow()` 使用的 `this` 来自于外部的 `user.sayHi()` 方法：

```javascript
let user = {
  firstName: "Ilya",
  sayHi() {
    let arrow = () => alert(this.firstName);
    arrow();
  }
};

user.sayHi(); // Ilya
```

这是箭头函数的一个特性，当我们并不想要一个独立的 `this`，反而**想从外部上下文中获取**时，它很有用。在后面的 [深入理解箭头函数](https://zh.javascript.info/arrow-functions) 一章中，我们将深入介绍箭头函数。



#### 2.this是被作为函数调用的，而不是通过点符号被作为方法调用

试一下：

```javascript
function makeUser() {
  return {
    name: "John",
    ref: this
  };
}

let user = makeUser();

alert( user.ref.name ); // Error: Cannot read property 'name' of undefined
```

这是因为设置 `this` 的规则不考虑对象定义。只有调用那一刻才重要。

这里 `makeUser()` 中的 `this` 的值是 `undefined`，因为它是被作为函数调用的，而不是通过点符号被作为方法调用。

`this` 的值是对于整个函数的，代码段和对象字面量对它都没有影响。

所以 `ref: this` 实际上取的是当前函数的 `this`。

这样就正常了：

```javascript
function makeUser() {
  return {
    name: "John",
    ref() {
      return this;
    }
  };
}

let user = makeUser();

alert( user.ref().name ); // John
```

现在正常了，因为 `user.ref()` 是一个方法。==`this` 的值为点符号 `.` 前的这个对象（实例）==。这个对象实例中有name这个属性！

#### 3.this丢失

一旦方法被传递到与对象分开的某个地方 —— `this` 就丢失。

下面是使用 `setTimeout` 时 `this` 是如何丢失的：

```javascript
let user = {
  firstName: "John",
  sayHi() {
    alert(`Hello, ${this.firstName}!`);
  }
};

setTimeout(user.sayHi, 1000); // Hello, undefined!
```

正如我们所看到的，输出没有像 `this.firstName` 那样显示 “John”，而显示了 `undefined`！

这是因为 `setTimeout` 获取到了函数 `user.sayHi`，但它和对象分离开了。最后一行可以被重写为：

```javascript
let f = user.sayHi;
setTimeout(f, 1000); // 丢失了 user 上下文 只能输出Hello, undefined!
```



> 浏览器中的 `setTimeout` 方法有些特殊：它为函数调用设定了 `this=window`（对于 Node.js，`this` 则会变为计时器（timer）对象，但在这儿并不重要）。所以对于 `this.firstName`，它其实试图获取的是 `window.firstName`，这个变量并不存在。
>
> 在其他类似的情况下 通常 `this` 会变为 `undefined`。



那么想把一个对象方法传递到别的地方 然后在该位置调用它 

也就是如何确保在正确的上下文中调用它？

#### 4.this丢失的解决方法

##### [解决方案 1：包装器](https://zh.javascript.info/bind#jie-jue-fang-an-1-bao-zhuang-qi)

最简单的解决方案是使用一个包装函数：

```javascript
let user = {
  firstName: "John",
  sayHi() {
    alert(`Hello, ${this.firstName}!`);
  }
};

setTimeout(function() {
  user.sayHi(); // Hello, John!
}, 1000);
```

现在它可以正常工作了，因为它==从外部词法环境中获取到了 `user`==，就可以正常地调用方法了。

相同的功能，但是更简短：

```javascript
setTimeout(() => user.sayHi(), 1000); // Hello, John!
```



但是有个小问题 

在 `setTimeout` 触发之前（有一秒的延迟！）`user` 的值改变了怎么办？那么，突然间，它将调用错误的对象！

```javascript
let user = {
  firstName: "John",
  sayHi() {
    alert(`Hello, ${this.firstName}!`);
  }
};

setTimeout(() => user.sayHi(), 1000);

// ……user 的值在不到 1 秒的时间内发生了改变
user = {
  sayHi() { alert("Another user in setTimeout!"); }
};

// Another user in setTimeout!
```

下一个解决方案保证了这样的事情不会发生。

##### [解决方案 2：bind](https://zh.javascript.info/bind#jie-jue-fang-an-2-bind)

函数提供了一个内建方法 [bind](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)，它可以绑定 `this`。

基本的语法是：

```javascript
// 稍后将会有更复杂的语法
let boundFunc = func.bind(context);
```

`func.bind(context)` 的结果是一个特殊的类似于函数的“外来对象（exotic object）”，它可以像函数一样被调用，并且透明地（transparently）将调用传递给 `func` 并==设定 `this=context`==。（这不就获取了本来不在作用域中的对象了么！）

换句话说，`boundFunc` 调用就像绑定了 `this` 的 `func`。

举个例子，这里的 `funcUser` 将调用传递给了 `func` 同时 `this=user`：

```javascript
let user = {
  firstName: "John"
};

function func() {
  alert(this.firstName);
}

let funcUser = func.bind(user);
funcUser(); // John
```

这里的 `func.bind(user)` 作为 `func` 的“绑定的（bound）变体”，绑定了 `this=user`。

所有的参数（arguments）都被“原样”传递给了初始的 `func`，例如：

```javascript
let user = {
  firstName: "John"
};

function func(phrase) {
  alert(phrase + ', ' + this.firstName);
}

// 将 this 绑定到 user
let funcUser = func.bind(user);

funcUser("Hello"); // Hello, John（参数 "Hello" 被传递，并且 this=user）
```



#### 5.解构赋值

##### [对象解构](https://zh.javascript.info/destructuring-assignment#dui-xiang-jie-gou)

解构赋值同样适用于对象。

- 【1】基本语法是：

```javascript
let {var1, var2} = {var1:…, var2:…}
```

在等号右侧有一个已经存在的对象，我们想把它拆开到变量中。等号左侧包含了对象相应属性的一个“模式（pattern）”。在简单的情况下，等号左侧的就是 `{...}` 中的变量名列表。

举个例子：

```javascript
let options = {
  title: "Menu",
  width: 100,
  height: 200
};

let {title, width, height} = options;

alert(title);  // Menu
alert(width);  // 100
alert(height); // 200
```

- 【2】属性 `options.title`、`options.width` 和 `options.height` 值被赋给了对应的变量。变量的顺序并不重要，下面这个代码也奏效：

```javascript
// 改变 let {...} 中元素的顺序
let {height, width, title} = { title: "Menu", height: 200, width: 100 }
```



- 【3】等号左侧的模式（pattern）可以更加复杂，并且指定了属性和变量之间的映射关系。

如果我们想把一个属性赋值给另一个名字的变量，比如把 `options.width` 属性赋值给变量 `w`，那么我们可以使用冒号来指定：

```javascript
let options = {
  title: "Menu",
  width: 100,
  height: 200
};

// { sourceProperty: targetVariable }
let {width: w, height: h, title} = options;

// width -> w
// height -> h
// title -> title

alert(title);  // Menu
alert(w);      // 100
alert(h);      // 200
```



- 【4】对于可能缺失的属性，我们可以使用 `"="` 设置默认值，如下所示：

```javascript
let options = {
  title: "Menu"
};

let {width = 100, height = 200, title} = options;

alert(title);  // Menu
alert(width);  // 100
alert(height); // 200
```



- 【5】我们还可以将冒号和等号结合起来：

```javascript
let options = {
  title: "Menu"
};

let {width: w = 100, height: h = 200, title} = options;

alert(title);  // Menu
alert(w);      // 100
alert(h);      // 200
```

- 【6】如果我们有一个具有很多属性的复杂对象，那么我们可以只提取所需的内容：

```javascript
let options = {
  title: "Menu",
  width: 100,
  height: 200
};

// 仅提取 title 作为变量
let { title } = options;

alert(title); // Menu
```

当时学习react的时候也是这个状态 需要哪个就提取哪个~

##### 解构赋值总结

- 解构赋值可以立即将一个对象或数组映射到多个变量上。

- **解构对象**的<u>完整</u>语法：

  ```javascript
  let {prop : varName = default, ...rest} = object
  ```

  这表示属性 `prop` 会被赋值给变量 `varName`，如果没有这个属性的话，就会使用默认值 `default`。

  没有对应映射的对象属性会被复制到 `rest` 对象。

  ==这是最全的一个用法 不写全是ok的！==

- **解构数组**的<u>完整</u>语法：

  ```javascript
  let [item1 = default, item2, ...rest] = array
  ```

  数组的第一个元素被赋值给 `item1`，第二个元素被赋值给 `item2`。

  剩下的所有元素被复制到另一个数组 `rest`（展开运算符来凑热闹了）。

- 从嵌套数组/对象中提取数据也是可以的，此时等号左侧必须和等号右侧有相同的结构。



##### 看几道对象解构例题

- easy

[解构赋值](https://zh.javascript.info/destructuring-assignment#jie-gou-fu-zhi)

我们有一个对象：

```javascript
let user = {
  name: "John",
  years: 30
};
```

写一个解构赋值语句使得：

- `name` 属性赋值给变量 `name`。
- `years` 属性赋值给变量 `age`。
- `isAdmin` 属性赋值给变量 `isAdmin`（如果属性缺失则取默认值 false）。

下面是赋值完成后的值的情况：

```javascript
let user = { name: "John", years: 30 };

// 等号左侧是你的代码
// ... = user

alert( name ); // John
alert( age ); // 30
alert( isAdmin ); // false
```

答：

```javascript
let user = {
  name: "John",
  years: 30
};
// 就是最基础的用法
let {name, years: age, isAdmin = false} = user;

alert( name ); // John
alert( age ); // 30
alert( isAdmin ); // false
```



- hard

[最高薪资](https://zh.javascript.info/destructuring-assignment#zui-gao-xin-zi)

这儿有一个 `salaries` 对象：

```javascript
let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};
```

新建一个函数 `topSalary(salaries)`，返回收入最高的人的姓名。

- 如果 `salaries` 是空的，函数应该返回 `null`。
- 如果有多个收入最高的人，返回其中任意一个即可。

P.S. 使用 `Object.entries` 和解构语法来遍历键/值对。

> entries()永远嘀神！

答：

```javascript
function topSalary(salaries) {

  let max = 0;
  let maxName = null;

  for(let [name, salary] of Object.entries(salaries)) {
    if (max < salary) {
      max = salary;
      maxName = name;
    }
  }

  return maxName;
}
```

#### 6.generator

Generator 函数是 ES6 提供的一种异步编程解决方案，语法行为与传统函数完全不同。

学习分为[**Generator函数的语法和API**](https://es6.ruanyifeng.com/#docs/generator)  和  **[它的异步编程应用](https://es6.ruanyifeng.com/#docs/generator-async)**

异步编程对 JavaScript 语言是很重要的！因为JavaScript 语言的执行环境是“单线程”的，如果没有异步编程，根本没法用，非卡死不可。





#### 7.数值型与布尔型的隐式转换

刷题的时候遇到的一个小点

![在这里插入图片描述](https://img-blog.csdnimg.cn/f968b88841e544e682b368df647237f7.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5pWy5Luj56CB55qE5bCP5o-Q55C05omL,size_12,color_FFFFFF,t_70,g_se,x_16)

引出两个点——

- 隐式转换
- !0 == true;//true

先来看第一个

true 和false（布尔值）和数值比较， 会做一个隐式转换——

【1】true 隐式转换为1 

【2】false隐式转换为0。

见代码

```js
1 == true;//true
//要注意===是全等哦 不会做隐式转换
1 === true;//false
```

```js
0 == false;//true
```

#### 8.非0是true 0是false

再来看第二个

- !0代表true (因为0代表false)

```js
!0 == true;//true
```



- 非0实数代表false

```js
!1 == false;//true
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
//小林的图解网络随时翻阅 & 极客时间趣谈网络协议+网上的文章 & 读图解HTTP TCP等书籍 & 网络抓包实操练习  深入理解
// 每天一道计网面试题
1.总结了下进阶学习计网的方式——读几本经典书籍、读一些很棒的文章（极客时间、MDN...）、抓包实战
2.后期先不看书了吧 看看文章 看看极客时间 总结一下知识点 
3.每天找一道计网面试题 把自己带入面试者的身份 跟面试官白话白话 嗯就这样子
```

#### 1.进阶学习前瞻

##### 经典书籍

- 图解HTTP
- 图解TCP/IP

- 网络是怎样连接的 —— 连接网络是咋传输的~比较全面地把访问一个网页地发生地过程讲解了一遍

##### 经典文章

[互联网是如何工作的](https://developer.mozilla.org/zh-CN/docs/Learn/Common_questions/How_does_the_Internet_work#%E4%B8%8B%E4%B8%80%E6%AD%A5)

[How Does the Internet Work?](https://web.stanford.edu/class/msande91si/www-spr04/readings/week1/InternetWhitepaper.htm)

[极客时间 趣谈网络协议](https://time.geekbang.org/column/article/7398)

##### 实战

- Wireshark网络分析就这么简单
- Wireshark网络分析的艺术



#### 2.计网面试题

https://github.com/biaochenxuying/blog/blob/master/interview/fe-interview.md#10-https



###  操作系统

```js
// 小林的图解系统 & 学校课程学习 & 王道考研-OS 三者配合 高效学习
// 要看一下学校的ppt了 课程旷了好几节有点听不懂！
1.学校ppt第2章 进程
```



## 3.面试题

### 面试题、面经总结

```js
//网上面试题、面经辣么多 一天多看一些 然后同时也要研究一些题的答案！
1.看了看实习生的面经 诶哟好难啊 都不会！（看的字节的）
2.好好纠结了一波盒模型的内容
```

[【青训营】做面试题般回顾前端基础知识CSS篇 - 3 标准盒模型中块元素宽度&总宽度的问题](https://juejin.cn/post/7009197678642872350)





### 力扣

```js
//跟着数据结构入门 的每日学习计划 进行刷题 一天1-3题！ 
// 从今天开始 改变力扣总结的方式——只记录特别有感悟的题目
20.有效的括号
这道题 真不戳！
```







## 4.前端进阶知识学习

### Node.js

```JS
// 由 Node入门 这份教程入门 完成一个实战案例 简单入门node
// 然后再学习尚硅谷的node课程
1.node入门学习进度推进
```







## 5.前端开发框架

### react尚硅谷

```js
//广受好评的react教程 先快速过一下 再去实操哦！
```





### react练手

```js
// 先过一遍原理 再去敲代码加深印象（freecodecamp）
// 五子棋demo
1.重启五子棋demo!这回在本地做~
```



# 2021.9.19 *更新知识总结的方法 

又是熟悉的学习笔记版本更新:joy:

- 每周对当周内容分块地进行总结整理 周日进行这个工作 不用分太细 用四级标题把每个知识点列出来 分为

  - 前端基础
  - 核心基础知识
  - 面试题/面经感悟与力扣好题
  - 前端进阶知识
  - 前端开发框架 这个等学到深入一些再开启哈！

  新建个文件夹存这些内容



今天早上没起来 一上午没了

下午心血来潮想玩儿会儿巫师3 一下午没了

还好晚上稍微抓住点时间 写了两篇文章 把盒模型算是整清楚勒！也算是有收获的一天！

明天去陪女票玩耍增进下感情哈哈哈 最近太沉迷学习了 都没有顾得上她来着`orz`

```js
// 今日主要收获 & 学习时间
// 每个学习内容的细则下面分块列出了
// 逛b站、看漫画、聊qq/微信、打游戏 计时 每次30min娱乐时间MAX —— !important
Totally 300min
1.前端基础知识 
// 从早上-中午 拿出一整块时间学习JS 
// 晚上时间跑步回来的时间也交给JS
	1.1 菜鸟、阮大、JS现代教程 今日学习内容预习 min
    	/*  */
    1.2 JS红宝书 min 
    // 每天要看一些 粗略地过一下即可！
    	/*  */
    1.3 JS高级教程 min 
    // 每日的重点！
    	/*  */
    1.4 JS 30demos min
    	/*  */
    // 这之后的内容 后续再推进
    1.5 freecodecamp一个专题练习2+道题 min
    1.6 正则表达式
2.核心基础知识
//下午由基础知识开启
	2.1 计网 90min
		/* 复习了经典的TCP三次握手的原因
        看了一下极客时间中的趣谈网络协议 讲得很不错！
        看了两篇面试相关文章~*/
	2.2 操作系统 min
		/*  */
3.面试刷题
// 看完基础知识 来刷刷题 总结一下面经
	3.1 力扣 min
    	/*  */    
    3.2 总结面经、面试题 180min
    	/* 聊了下盒子模型！
        学习了下如何让盒子垂直、水平居中 学习了六种方法*/
4.前端进阶知识学习
	4.1 接口请求Ajax/Fetch
    4.2 Node.js min
		/*  */
	4.3 （ES6模块学习过后开启）webpack
5.前端开发框架 
	5.1 react学习 min
    // 反复写todolist案例 写熟练了先停下来去学5.2+4.1
    // 五子棋案例做明白咯 尝试着改成组件化的形式
		/*  */
    5.2 freecodecamp刷题练手
    	/*  */
6.学校课程内容 min 
7.每日总结 30min
	/* 更新了下知识总结的方法 自认为还不错！
    另外复习了一下昨天学习的东西*/
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
GetUp(10.00);//😭
Sleep(4.00);//😭😭
```

## 1.前端基础

### ==JS基础知识==

```js
//每日学到的知识点 可以写文章 可以记在心里 总结下来！
// JS现代教程 这里内容还蛮难理解的！
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
//小林的图解网络随时翻阅 & 极客时间趣谈网络协议+网上的文章 & 读图解HTTP TCP等书籍 & 网络抓包实操练习  深入理解
// 每天一道计网面试题 把自己带入面试者的身份 跟面试官白话白话 嗯就这样子
1.趣谈网络协议 第一章东西还挺多 主要去搞TCP三次握手的内容了 这部分都没看完 明天继续~
2.经典的TCP三次握手问题 为啥不是两次握手呢？这个问题真的很纠结！暂时分成了两个点去学习了下 今天读了好多解释 大致确定了两个点——避免
```

#### 1.趣谈网络协议

看到文章中的内容讲述应用层的数据包通过socket编程发送到传输层 

传输层再利用TCP协议创建TCP连接 进行数据包的传输（这里碰到了经典的TCP问题 停下来了解了下）

TCP协议中有俩端口

> 首先要清楚TCP头部格式——
>
> ![图片](https://mmbiz.qpic.cn/mmbiz_png/J0g14CUwaZeo9xBVAyPJ8iaWCC6sYS843ZPb6tFLvCVuXEn98khfs7y2KRvOV0ia5icVByzIK3aAKRURuVZKagsKw/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

而这两个端口就分别是——

- 浏览器监听的 **源端口号**

- 包的最终目的地——服务器监听 **目标端口号**

<img src="https://static001.geekbang.org/resource/image/64/0c/64fcf0cc5baade70769da2160637d70c.jpg" alt="img" style="zoom:50%;" />

操作系统通过端口来判断它得到的包应该给哪个进程~

传输层封装完毕后 网络包报文会加上传输层的TCP头（如上图 包含了两个端口号 当然还有别的 这里小林的图解网络解析得很清楚）

浏览器把这个数据包交给操作系统得网络层~

到了网络层之后的内容 明天再来看看~







#### 2.计网面试题

##### 小林图解-2.3 为啥是三次握手？不是两次/四次握手呢？

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



##### 我的回答

面试官问你 为啥TCP连接是三次握手 不是两次/四次呢？

> 这个经典问题吧~
>
> 之前看过图解网络中的内容
>
> 谢希仁的计算机网络 对应这部分的内容
>
> 也搜过知乎 看过大佬解读的RFC中的内容
>
> 分两个点简单说下吧
>
> - 防止**已经失效的连接请求报文段**突然又传到了服务端
> - TCP是可靠传输的 需要三次握手来约定、确定双方的初始序列号（seq——sequence numbers））
>
> 先说下三次握手建立起连接的过程吧 画个简图 
>
> 然后说下三次握手相较于两次握手 的性能提升 以及一些关键作用！
>
> 第一点：（参考谢希仁的计算机网络-避免失效的连接造成影响 小林的图解网路-避免历史连接）
>
> 第二点：三次握手来确定双方的初始序列号 （依靠seq序列号来做可靠重传/接收）



###  操作系统

```js
// 小林的图解系统 & 学校课程学习 & 王道考研-OS 三者配合 高效学习
// 要看一下学校的ppt了 课程旷了好几节有点听不懂！
1.暂停一天
```



## 3.面试题

### 面试题、面经总结

```js
//网上面试题、面经辣么多 一天多看一些 然后同时也要研究一些题的答案！
1.写了两篇文章 为了掘金写文章辣个活动 也是拼勒hhh
2.看了两篇字节范儿的文章 写得很棒！
```

#### 1.掘金两篇文章——盒模型

[由box-sizing属性引出的对盒模型的思考](https://juejin.cn/post/7009640407634198541)

[【青训营】做面试题般回顾前端基础知识CSS篇 - 4 弹性布局与经典面试题CSS实现垂直居中](https://juejin.cn/post/7009662518406676488) 



#### 2.面试官喜欢哪样的候选人呢？

个人认为非常棒的一篇文章！

[字节跳动技术面试官现身说法：我最想pick什么样的候选人](https://mp.weixin.qq.com/s?__biz=MzI5OTY2OTY4MA==&mid=2247484875&idx=1&sn=94bc2421e83a69c88813fcd6d73c01d3&chksm=ec924414dbe5cd02f20b77062b43813bca06a04f8f2a8de37b49bce808cb119b3115289ec6d7&scene=132#wechat_redirect)

- **探索技术是必须，**

**沟通协作也加分**

- **动手能力要强** 动手实践能力！！之后学习的时候请经常开着代码编辑器！！



#### 3.校招攻略（春招）*前端校招划重点

[春招攻略：我是怎样进入字节跳动做技术的](https://mp.weixin.qq.com/s/_zPSgVtgQMbFovdSFEpihQ)

> 1、基础知识
>
> 1-1、操作系统
>
> - 进程和线程的关系
> - 进程调度
> - 线程同步机制
> - 死锁原理
> - 内存管理
>
> 
>
> 1-2、计算机网络
>
> - 7层网络协议
> - 网络层相关（IP地址、IPV4、IPV6、子网掩码）
> - 传输层相关（TCP、UDP）
> - DNS解析
> - 应用层相关（HTTP、HTTPS）
>
> 
>
> 1-3、数据结构
>
> - 堆、栈
> - 链表
> - 跳表、散列
> - 二叉、多叉树相关算法
> - 图相关算法
>
> 
>
> 2、前端知识
>
> 2-1、HTML
>
> - 常用标签、语义化标签
> - HTML标签属性相关
> - HTML事件相关
> - HTML5新增内容
>
> 
>
> 2-2、CSS
>
> - 盒模型
> - 选择器、样式权重
> - CSS常用属性（如：position）
> - CSS常用布局（如：flex、grid）
> - CSS动画相关（animation）
> - CSS浮动相关（float）
> - 移动端适配
> - 响应式布局
> - CSS3新增内容
>
> 
>
> 2-3、JS
>
> - JS变量类型相关
> - 函数、类相关
> - 闭包、作用域相关
> - promise、async、await相关
> - Array类型相关知识，及常见api
> - Object类型相关知识，及常见api
> - xhr、fetch相关
> - DOM相关
> - BOM相关
> - 正则表达式
> - ES6、ES7、ES2020新增内容
>
> 
>
> 2-4、浏览器
>
> - 浏览器中的进程与线程
> - 浏览器渲染原理
> - 浏览器中的Eventloop
> - 浏览器存储相关（localstorage、sessionstorage）
>
> 
>
> 2-5、Node.js
>
> - Nodejs中的Eventloop
> - 后端http框架相关知识（如：中间件概念、koa的洋葱模型）
>
> 
>
> 2-6、框架
>
> - React相关知识
> - Vue相关知识
>
> 
>
> 2-7、其他
>
> - 打包工具的使用与配置（如webpack、snowpack、esbuild等）
> - 前端性能优化

### 力扣

```js
//跟着数据结构入门 的每日学习计划 进行刷题 一天1-3题！ 
// 从今天开始 改变力扣总结的方式——只记录特别有感悟的题目
```







## 4.前端进阶知识学习

### Node.js

```JS
// 由 Node入门 这份教程入门 完成一个实战案例 简单入门node
// 然后再学习尚硅谷的node课程
1.node入门学习进度推进
```



## 5.前端开发框架

### react尚硅谷

```js
//广受好评的react教程 先快速过一下 再去实操哦！
```





### react练手

```js
// 先过一遍原理 再去敲代码加深印象（freecodecamp）
// 五子棋demo
```



# 2021.9.20

今天主要用来整理前三周的学习内容、与女票出去放个假 然后晚上玩了四个小时的人类一败涂地。。我今晚上这效率算是一败涂地了！

学习内容也木有整理

只是简单规划了一下刷题的路径 21号把“用栈实现队列”刷了 

然后之后开始排序等高级算法内容的学习！（先问问大佬们前端刷算法题应该刷到啥程度！）



 

# 2021.9.21 

今天可以说是玩了一天的游戏8.。。（女票死活拽着俺玩儿人类一败涂地哈哈哈 上头了！）

中秋快乐了就当！

明天必定起飞！！

```js
// 今日主要收获 & 学习时间
// 每个学习内容的细则下面分块列出了
// 逛b站、看漫画、聊qq/微信、打游戏 计时 每次30min娱乐时间MAX —— !important
Totally 140min
1.前端基础知识 
// 从早上-中午 拿出一整块时间学习JS 
// 晚上时间跑步回来的时间也交给JS
	1.1 JS红宝书 min
    // 每日的重点！
    	/* 学习了一些偏底层的内容 很有收获！ 
        */
    1.2 JS高级教程 110min
    // 每天要看一些 粗略地过一下即可！
    	/*  */
    1.3  菜鸟、阮大、JS现代教程 做今日学习内容的补充学习 min
		/*  */
    1.4 JS 30demos min
    	/*  */
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
    	/*  */    
    3.2 总结面经、面试题 min
    	/*  */
4.前端进阶知识学习
	4.1 接口请求Ajax/Fetch
    4.2 Node.js min
		/*  */
	4.3 （ES6模块学习过后开启）webpack
5.前端开发框架 
	5.1 react学习 min
    // 反复写todolist案例 写熟练了先停下来去学5.2+4.1
    // 五子棋案例做明白咯 尝试着改成组件化的形式
		/*  */
    5.2 freecodecamp刷题练手
    	/*  */
6.学校课程内容 min 
7.每日总结 30min
	/* 更新了下知识总结的方法 自认为还不错！
    另外复习了一下昨天学习的东西*/
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
GetUp(10.00);//😭
Sleep();//
```

## 1.前端基础

### ==JS基础知识==



```js
//每日学到的知识点 可以写文章 可以记在心里 总结下来！
// 本阶段主要学习JS高级教程（尚硅谷）
1.回忆一下JS中数据存储的底层知识——栈存储变量 堆存储变量的值（内存是用来存储数据的空间）
2.上个知识点的补充说明 var a =xxx a变量的内存中保存的是什么  保存的是xxx的内存内容（可能是基本数据数据也可能是地址值）
3.赋值的小问题 var obj1 = {name:"Tom"}; var obj2=obj1; 把obj1的内存内容赋给obj2 （在这里 obj1的内存内容是地址值）
针对上述内容 写了一篇文章
4.两个引用变量指向同一个对下给你 通过一个变量修改对象内部数据 另一个变量看到的是修改过后的数据
两个引用变量指向同一个对象 让其中一个变量指向另一个对象 另一个引用变量依然指向前一个对象啊~
5.JS调用函数时传递变量参数时 是值传递还是引用传递？（面试高频）
答：是值传递 不过也可以把“传递地址值”理解为“引用传递” 略有些不严谨而已
6.JS引擎如何管理内存？
```

#### 1.JS数据存储底层知识

一个变量对应一块小内存 变量的值保存在此内存中

- 一行代码 `var obj = { name: 'Tom' }` 的执行过程：

首先进入代码区（反正Java里是这么说）然后编译

因为变量=对象 我们把这个对象的内存内容（也就是它的地址值）赋给obj这个变量

内存图可以这么画——

- 栈：存储变量
- 堆：存储对象（实体）在Java 和C 中都这么说来着！

![请添加图片描述](https://img-blog.csdnimg.cn/671345cb9e6c46928bbd1619b3051f37.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5pWy5Luj56CB55qE5bCP5o-Q55C05omL,size_10,color_FFFFFF,t_70,g_se,x_16)

#### 2.【底层】给变量赋值时 赋的是什么？变量内存空间保存的是什么？

```js
// 01 给变量赋值基本数据 —— 保存的就是这个基本数据
var a = 666;
// 02 给变量赋值对象 —— 保存的是 【对象的地址值】 （如上图）
var obj = {name: "Bill"};
// 03 重要！给变量obj1 obj2赋变量a obj【的内存内容】 
// —— 内存空间保存的可以是基本数据（a）也可以是对象的地址（obj）
var obj1 = a;
var obj2 = obj;
```

这三种情况一定要完全掌握！

我们在给变量赋值时 其实发生的是这些事情！

掌握了这些 之后学习进阶知识 才会更加轻松！



[【JS底层知识】我们给变量赋值时 赋值内容是什么？变量内存空间保存的是什么？](https://blog.csdn.net/qq_45704942/article/details/120399845)







#### 3.引用变量赋值问题 var obj = {对象的属性&属性值}

同样的obj1 = obj2;

- 改变量指向的 **对象的内部数据** `obj2.name = xxx;` obj1的name也变了
- 改变量指向的**那个对象** `obj2={xxx};`  obj1变量指向的对象还是原来那个 不受影响

![请添加图片描述](https://img-blog.csdnimg.cn/37cd589be0184cc4a01540da12e54561.png)

上图例子中a b两变量指向的已经不是同一个对象了 

所以b在改变指向对象的属性时 已经不会影响a了哦！



#### 4.【面试高频】JS调用函数时传递变量参数 传递的是变量的值（是值传递 而不是引用传递）

其实有两种理解

- 【1】都是值（基本/**地址值**）传递 —— 这个更规范
- 【2】可能是值传递 也可能是引用传递（传的地址值 这块儿也可以像上面那样理解成值传递）





- 值为基本数据

举个例子 秒懂

```js
var a = 3;
function fn(a){
    a = a + 1;
    //a（这个a是局部的那个a变量（也就是形参变量）所以在外面输出的是全局变量3）=a（这个a是全局的那个a变量 值为3）+1
}
fn(a);//这里传递的不是a的地址 而是a的值——3
// 调用函数 将实参赋给形参
console.log(a);//3
```

传过去的是变量a的**值**

- 值为地址值

再举个例子

```js
function fn2(obj){
    obj.name = "change";// 这里修改了地址中对象的name属性
}
var obj = {name: "Bill"};
fn2(obj);// 调用函数 修改了地址中对象的name属性
console.log(obj.name);//change
```

这里 传过去的obj 就==是一个地址值== 

我们规范起见 还是把它称作 obj变量的值！而不是引用值（不过这么说也算是可以 有些不严谨）！



#### 5.JS引擎如何管理内存？垃圾回收机制

##### 【1】内存生命周期

- 分配小内存空间

- 分配数据 可以反复进行操作
- 释放小内存空间



##### 【2】释放内存

- 局部变量

函数执行完自动释放

- 对象

成为垃圾对象 等回头由垃圾回收器回收

##### 【3】垃圾回收

这个[垃圾回收的内容](https://zh.javascript.info/garbage-collection)（参考了现代JS教程） 回头可以再了解下

现阶段了解如下知识即可：

- 垃圾回收是**自动完成**的，我们**不能强制执行或是阻止执行**。
- 当对象是可达状态时，它一定是存在于内存中的。
- 被引用与可访问（从一个根）不同：一组相互连接的对象可能整体都不可达。

当你需要底层的优化时，对引擎有深入了解将很有帮助。在熟悉了这门编程语言之后，把熟悉引擎作为下一步计划是明智之选。



### JS红宝书进度记录

```js
// 经典书籍 目标：反复阅读 一天读一个小时 求快 莫纠结
```



### JS高级-尚硅谷 进度记录

```js
// 很不错的课程 巩固基础 一天看一小时左右
p4-p6
```



### JS30练

```js
//一天一个有趣的原生JS练手demo 边做边总结！莫纠结细则
```













## 2.核心基础知识

### 计网

```js
//小林的图解网络随时翻阅 & 极客时间趣谈网络协议+网上的文章 & 读图解HTTP TCP等书籍 & 网络抓包实操练习  深入理解
// 每天一道计网面试题 把自己带入面试者的身份 跟面试官白话白话 嗯就这样子
```



###  操作系统

```js
// 小林的图解系统 & 学校课程学习 & 王道考研-OS 三者配合 高效学习
// 看一下学校的ppt了 上课一边摸鱼一边学这个

```



## 3.面试题

### 面试题、面经总结

```js
//网上面试题、面经辣么多 一天多看一些 然后同时也要研究一些题的答案！
```



### 力扣

```js
//跟着数据结构入门 的每日学习计划 进行刷题 一天1-3题！ 
// 从今天开始 改变力扣总结的方式——只记录特别有感悟的题目
```



## 4.前端进阶知识学习

### Node.js

```JS
// 由 Node入门 这份教程入门 完成一个实战案例 简单入门node
// 然后再学习尚硅谷的node课程
```



## 5.前端开发框架

### react尚硅谷

```js
//广受好评的react教程 先快速过一下 再去实操哦！
```



### react练手

```js
// 先过一遍原理 再去敲代码加深印象（freecodecamp）
// 五子棋demo
```



# 2021.9.22 *做好实习准备 *决定重塑一个“速成版学习路线”

为啥又要重塑路线了？！不刚弄完么！

是这样~

今天 之前认识的一位字节跳动工程师大大让我准备下简历与视频面试

言下之意就是 越早准备机会其实越多 主要考察基础能力 

那么先把简历准备出来吧！



这次机会算是意外的惊喜也是惊吓吧！

- 惊喜是我从没想到自己学这两个多月的二把刀前端知识可以去尝试字节跳动的前端岗 原本只是想找一个中小厂先练练级的说
- 惊吓是 严格来说我只学过两个多月前端，，，会不会被面试官们鄙视哇

> 工程师大大表示对实习生的要求更看重基础、学习能力、coding能力 
> 我觉得吧 前者固然重要 但是 你总得有点实力吧！！ 

总之我非常珍惜这次机会！加油吧这1-2月！

打算再准备4（10.24）-6（11.7）周 然后开始着手准备简历

- JS语言各个特性滚瓜烂熟
  - JS项目——JS30demos + 相应的网页
- react前置知识要大概知道
  - JS高级
    - 原型、原型链
    - 基础知识
  - ES6
    - 模块化尤为重要
    - 语法规范
  - webpack
  - 后期要用到AJAX 以及它的库 `axios` 这个库提到了再学习即可
  - promise

- react学习
  - 至少要熟练掌握react
  - react项目——尚硅谷/五子棋

```js
// 今日主要收获 & 学习时间
// 每个学习内容的细则下面分块列出了
// 逛b站、看漫画、聊qq/微信、打游戏 计时 每次30min娱乐时间MAX 中午、晚上吃完饭那会儿可以允许有一次 其他学习时间不要分心哦！
Totally 390min
1.前端基础知识 
// 从早上-中午 拿出一整块时间学习JS 
// 晚上时间跑步回来的时间也交给JS
    1.1 JS高级教程 140min
    // 每日重点！
		/* 对象、函数两部分的内容有了新的理解与感悟！ */
    1.2 JS 30demos min
    // 23号开始 每天完成一个 不要求完全理解 先做一个初步的认知
    // 没有完全了解的/觉得很好的 都要标记出来！
    	/*  */
    // 这之后的内容 后续再推进
    菜鸟、阮大、JS现代教程 补充性学习
    freecodecamp一个专题练习2+道题 min
    正则表达式
2.核心基础知识
//下午由基础知识开启
	2.1 计网 100min
		/* 通过趣谈网络协议又过了一遍网络包从应用层传到服务器的过程
        研究面试题TCP三次握手细则 */
	2.2 操作系统 min
		/*  */
3.面试刷题
// 看完基础知识 来刷刷题 总结一下面经
	3.1 力扣 70min
    	/* 232 用两个栈实现一个队列
        很有趣的方法！
        决定跟随代码随想录中的刷题顺序 ji'xu*/    
    3.2 重塑一下学习路线 之后面经不会拿出额外时间去浏览了 先搞基础！ 80min
    	/* 之前认识的一位字节跳动工程师大大让我准备下视频面试
        意外的惊喜也是惊吓吧！
        惊喜是我从没想到自己学这两个多月的二把刀前端知识可以去尝试字节跳动的前端岗 原本只是想找一个中小厂先练练级
        惊吓是 严格来说我只学过两个多月前端，，，会不会被面试官们鄙视哇
        工程师大大表示对实习生的要求更看重基础、学习能力、coding能力 
        我觉得吧 前者固然重要 但是 你总得有点实力吧！！ 加油吧这一个月！*/
4.前端进阶知识学习
	4.1 接口请求Ajax/Fetch
    4.2 Node.js min
		/*  */
	4.3 （ES6模块学习过后开启）webpack
5.前端开发框架 
	5.1 react学习 min
    // 反复写todolist案例 写熟练了先停下来去学5.2+4.1
    // 五子棋案例做明白咯 尝试着改成组件化的形式
		/*  */
    5.2 freecodecamp刷题练手
    	/*  */
6.学校课程内容 min 
7.每日总结 min
	/*  */
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
GetUp(8.00);//😭
Sleep(12.40);//😭
```

## 1.前端基础

### ==JS基础知识==



```js
//每日学到的知识点 可以写文章 可以记在心里 总结下来！
// 本阶段主要学习JS高级教程（尚硅谷）
1.对象中的方法 —— 之前没了解过竟然！hh
2.两种操作对象内部属性的方法（p.xxx的局限；p['xxx']全能）
3.JS可以让一个函数成为任意指定对象的方法 然后这个指定对象就可以调用这个函数了（只有JS可以 用call方法！）
4.使用函数之前 要注意 函数也是一个对象 它也有属性 prototype 也有方法！
5.LIFE(Immediately Invoked Function Expression) 立即调用函数表达式 也可以称作匿名函数自调用（这个好理解一些）
6.几种回调函数
7.this是啥？this的值要如何确定？
```

#### 1.对象中方法的创建-举例

```js
var obj = {
    name: "bill",
    age: 21,
    // 函数的形参都是对象中的属性
    setName: function(name){
      this.name = name;  
    },
    getName: function(name){
        console.log(name);
    },
	getAge: function(age){
         console.log(age);
    }
}
obj.getName("这个打印的内容没啥意义 就是证明下这个方法可以用~"); // 这个打印的内容没啥意义 就是证明下这个方法可以用~
obj.setName("gates");// 构造函数就是用来干这事儿的 之前Java经常使用
// 在这次调用中this的值是obj对象 —— 显然~
obj.name;// obj的name被上方的方法改变了 
调用对象中的方法 
```



![在这里插入图片描述](https://img-blog.csdnimg.cn/0be239df62894fb6ad7fa04e2ef9132c.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5pWy5Luj56CB55qE5bCP5o-Q55C05omL,size_15,color_FFFFFF,t_70,g_se,x_16)



#### 2.两种操作对象内部属性的方法

```js
var obj = {
    name: "bill"
}
obj.name;// bill

obj.age = 21; // 01 第一种操作对象内部属性的方法

// obj.sleep-time = 7;// 报错 属性名带特殊字符是不可以 用于初始化对象/用于操作对象属性 的！
obj["sleep-time"] = 7; // 02 第二种操作对象内部属性的方法
// ~设置属性成功
```

通过 `.` 运算符来访问内部属性固然是可以 但是有局限性！

- 属性名包含特殊字符时 不能用

用这种方法 比较万能哈！

![在这里插入图片描述](https://img-blog.csdnimg.cn/2901ddf3114947a1a91f633343b175e3.png)

- 属性是个变量也不行！后续在框架中可能会这么用~！

```js
var obj2 = {
    name: "bill"
}
var propName = "age";
var value = 21;
// obj2.propName = value;// 这里会给obj2设置一个propName属性。。。
obj2[propName] = value;// 成功设置age属性
```

![在这里插入图片描述](https://img-blog.csdnimg.cn/d075ecba64864c4c89fbad1848773086.png)

#### 3.JS使用函数的call方法为指定对象调用一个方法~

这个方法obj是无法单独调用的~

只能让函数本身通过call方法来给这个对象做一个调用！ 如下

```js
var obj = {};
function fn(){
    this.slogan = 'fighting!';    
}
fn.call(obj);// 为obj调用fn方法
console.log(obj.slogan);// fighting!
```

其实这个call方法的作用应该是 用于**编写能够在不同对象上使用的方法**

具体内容看9.28的笔记



#### 4.函数也是个对象~有属性 有方法

复习下之前（13号）学习的数据类型的判断

![在这里插入图片描述](https://img-blog.csdnimg.cn/831e074788174122b896b1d7cd59a503.png)

- `instancof Function === true;// true`
- 函数有属性 prototype
- 函数有方法 call()/apply()
- 当然也可以添加新的属性/方法



#### 5.匿名函数自调用

LIFE(Immediately Invoked Function Expression) 立即调用函数表达式 

也可以称作匿名函数自调用（这个好理解一些）

##### 作用

- 隐藏实现（对程序隐藏）
- 不会污染外部（全局）命名空间（我个人认为在全局函数中可以使用let const来避免污染全局命名空间）

```js
(function(){
    var a = 6;// a不会污染全局变量 而且这个实现是隐藏的
    console.log(a);
})();
```



```js
(function(){
    var a = 6;
    function test(){
        console.log(++a);
    }
    // 向外暴露一个全局函数（类似导出模块）
    window.expose = function(){
        // 上面这里 写 window.$ 专业一些~（回头去看看$出现的场景）
        return{
            test:test // 暴露全局函数 不可有分号哈 
            // 这里有点懵 前提知识看来还是有没学到的 但是大体可以理解
        }
    }
})();
expose.test();
```



- 用来编码JS模块（ES6中的内容）



#### 6.几种回调函数

首先了解 

- 什么函数才是回调函数？
  - 你定义的
  - 你没有直接调用
  - 这个函数最终执行了（在一定条件下/某个时刻）



常用DOM函数

- DOM事件回调函数（与用户交互中的重点）

```js
document.getElementById('btn').onclick = function(){
    alert(this.innerHTML)
}
```



- 定时器回调函数

```js
setTimeout(function(){
    alert("干饭了！");
}, 2000)// 2s后执行函数
```



- AJAX请求回调函数（与后台交互的重点）
- 生命周期回调函数）



#### 7.this是啥？this的值要如何确定？

##### 【1】是啥？

首先明确——任何函数本质上都是通过某个对象来调用的（对象、函数联系起来了哈哈） 如果没有直接指定 那就是window调用的

- 所有函数内部都有一个this	
- this的值是调用函数的**当前对象**



##### 【2】如何确定？

- `obj.xxx()`  —— obj
- `xxx.call(obj) `  —— obj
- `xxx()` —— window
- 回调函数 `setTimeout(function(){}, 6666)` —— 看背后是通过谁来调用的 

其中回调函数的this比较有趣

```js
setTimeOut(() => {
    console.log(this);
}, 2000);
```

![在这里插入图片描述](https://img-blog.csdnimg.cn/fd9fb397b3174c56828619fd70bd5a9b.png)

其他情况回头遇到了再补充~

### JS红宝书进度记录

```js
// 经典书籍 目标：反复阅读 一天读一个小时 求快 莫纠结
```



### JS高级-尚硅谷 进度记录

```js
// 很不错的课程 巩固基础 一天看一小时左右
p7-p12
```



### JS30练

```js
//一天一个有趣的原生JS练手demo 边做边总结！莫纠结细则
```









## 2.核心基础知识

### 计网

```js
//小林的图解网络随时翻阅 & 极客时间趣谈网络协议+网上的文章 & 读图解HTTP TCP等书籍 & 网络抓包实操练习  深入理解
// 每天一道计网面试题 把自己带入面试者的身份 跟面试官白话白话 嗯就这样子
1.趣谈网络协议 
2.面试题-经典的TCP三次握手问题 为啥不是两次握手呢？
```

#### 【1】趣谈网络协议

#### 1.数据包在网络中的传输过程

应用层-传输层-网络层-数据链路层（本地通信全靠吼 给数据包加上MAC头）-

> 至此 网络包的头部是这样的
>
> ![img](https://static001.geekbang.org/resource/image/9b/79/9b0d10b384ecd0de11c8596f8890df79.jpg)

-网卡（出口）-网关（出境大门 把包发出去 因为包里有MAC地址 所以它可以到达网关）

> 路由器的端口具有 MAC 地址，因此它就能够成为以太网的发送方和接收方；同时还具有 IP 地址，从这个意义上来说，它和计算机的网卡是一样的。
>
> 网关往往是一个路由器 
>
> 路由器查询路由表中的映射 判断转发目标
>
> - 路由表存放“去哪个IP地址怎么走的信息”
>
> ![图片](https://mmbiz.qpic.cn/mmbiz_png/J0g14CUwaZdCwxNydn5YuT0s7aLuqWCvyX1FEqkw7A0mBUbp1kDwK6X0XJe8P3bHia3ljXFGI3gfLZUnJyR5q6A/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)



#### 2.操作系统通过ARP协议 根据IP地址获取物理地址

ARP协议 即地址解析协议 是**根据IP地址获取物理地址**的一个TCP/IP协议

ARP协议在TCP/IP模型中属于网络层

在OSI七层模型中属于链路层



可以解决**同一个局域网内主机/路由器的IP地址和MAC地址的映射问题**



#### 3.在局域网内部 可以使用本地的地址 MAC来进行通信

路由器有点像玄奘西行路过的一个个国家的一个个城关。

每个城关都连着两个国家，每个国家相当于一个局域网，在每个国家内部，都可以使用本地的地址 MAC 进行通信。

#### 4.出境大门路由器的“城关”作用

一旦跨越城关，就需要拿出 IP 头来，里面写着贫僧来自东土大唐（就是源 IP 地址），欲往西天拜佛求经（指的是目标 IP 地址）。路过宝地，借宿一晚，明日启程，请问接下来该怎么走啊？

![img](https://static001.geekbang.org/resource/image/08/6f/080495a63148905877f252d097be786f.jpg)

城关往往是知道这些“知识”的，因为城关和临近的城关也会经常沟通。到哪里应该怎么走，这种沟通的协议称为路由协议，常用的有 OSPF 和 BGP。

这里还有很多有趣的知识 回头结合着小林图解网络中的 《输入网址到网页显示 期间发生了什么？》来再次学习！



#### 【2】计网面试题 小林图解-2.3 为啥TCP连接是三次握手？不是两次/四次握手呢？

写了一篇文章来总结下

[【经典面试题】为啥TCP是三次握手（three-way handshake） 而不是两次/四次呢？](https://blog.csdn.net/qq_45704942/article/details/120414548)



##### 我的回答

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
> - 防止**已经失效的连接请求报文段**突然又传到了服务端
> - TCP是可靠传输的 需要三次握手来约定、确定双方的初始序列号（seq——sequence numbers））
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

```js
// 小林的图解系统 & 学校课程学习 & 王道考研-OS 三者配合 高效学习
// 要看一下学校的ppt了 课程旷了好几节有点听不懂！
1.停一天 今天的面试题太顶了
```



## 3.面试题

### 面试题、面经总结

```js
//网上面试题、面经辣么多 一天多看一些 然后同时也要研究一些题的答案！
```



### 力扣

```js
//跟着数据结构入门 的每日学习计划 进行刷题 一天1-3题！ 
// 从今天开始 改变力扣总结的方式——只记录特别有感悟的题目
232.用栈实现队列
总结新的刷题路径 —— 代码随想录
```

[代码随想录](https://programmercarl.com/)



## 4.前端进阶知识学习

### Node.js

```JS
// 由 Node入门 这份教程入门 完成一个实战案例 简单入门node
// 然后再学习尚硅谷的node课程
```



## 5.前端开发框架

### react尚硅谷

```js
//广受好评的react教程 先快速过一下 再去实操哦！
```



### react练手

```js
// 先过一遍原理 再去敲代码加深印象（freecodecamp）
// 五子棋demo
```



# 2021.9.23 *重塑“速成版学习路线”

重新规划了下学习路径

感觉一点点地 变得合理了！

打算明天建一个前端学习仓库 放一些学习资源的记录吧 回头有空可以写写感悟啥的~

```js
// 今日主要收获 & 学习时间
// 逛b站、看漫画、聊qq/微信、打游戏 计时 每次30min娱乐时间MAX 中午、晚上吃完饭那会儿可以允许有一次 其他学习时间不要分心哦！
Totally 320min
1.前端基础知识 
// 从早上-中午 拿出一整块时间学习JS 晚上跑完步回来继续看JS JSyyds！！
	1.1 60-90 阮大JS/ES6 min
    // 口碑超好的JS&ES6教程 早起直接学习这个！  
    	/*  */
    1.2 120-180 JS高级教程 160min 
    // 每日重点！编码 + 知识点记录
    // 近期重点 作用域、闭包、原型链
		/*  */
    1.3 60-120 freecodecamp JS + 响应式网页设计 30min
    	/*  */
    1.4 60-90 JS 30demos 60min
    // 每天完成一个 不要求完全理解 先做一个初步的认知
    // 没有完全了解的/觉得很好的 都要特意标记出来 二刷时候再去好好理解下！
    	/*  */
    // 这些内容都是要重点掌握的！
    DOM编程 BOM使用 —— 复习
    事件代理/委托
	事件队列(setTimeout/setInterval/Promise)
	JSON
    Ajax/Fetch
	正则表达式

2.核心基础知识
	2.1 60-90 计网 min
		/*  */
	2.2 20-30 操作系统 min
		/*  */

3.前端开发框架 
	3.1 react学习 min
    // 反复写todolist案例 写熟练了先停下来去学5.2+4.1
    // 五子棋案例做明白咯 尝试着改成组件化的形式
		/*  */
    
4.面试刷题
// 看完基础知识 来刷刷题 总结一下面经
	4.1 力扣 40min
    	/* 刷了两道老题 超级熟了√ */    

5.前端进阶知识学习
// 学完JS再学这个辽！
    Node.js
	webpack


6.学校课程内容 min 
7.每日总结 30min
```



## 1.前端基础

### ==JS基础知识==

```js
//每日学到的知识点 可以写文章 可以记在心里 总结下来！
// 本阶段主要学习JS高级教程（尚硅谷）
原型的内容 没老看明白的 第二天继续
```







### JS30练

```js
//一天一个有趣的原生JS练手demo 边做边总结！莫纠结细则
demo06
```







## 2.核心基础知识

### 计网

```js
//小林的图解网络随时翻阅 & 极客时间趣谈网络协议+网上的文章 & 读图解HTTP TCP等书籍 & 网络抓包实操练习  深入理解
// 每天一道计网面试题 把自己带入面试者的身份 跟面试官白话白话 嗯就这样子
```





###  操作系统

```js
// 小林的图解系统 & 学校课程学习 & 王道考研-OS 三者配合 高效学习
// 要看一下学校的ppt了 课程旷了好几节有点听不懂！
1.停一天 今天的面试题太顶了
```



## 3.前端开发框架

### react尚硅谷

```js
// 广受好评的react教程 先快速过一下 再去实操哦！
```



### react练手

```js
// 先过一遍原理 再去敲代码加深印象（freecodecamp）
// 五子棋demo
```





## 4.面试题

### 面试题、面经总结

```js
//网上面试题、面经辣么多 一天多看一些 然后同时也要研究一些题的答案！
```



### 力扣

```js
//跟着数据结构入门 的每日学习计划 进行刷题 一天1-3题！ 
// 从今天开始 改变力扣总结的方式——只记录特别有感悟的题目
时间复杂度
复习232 栈实现队列 
```

#### 时间复杂度大小关系

常用的时间复杂度所耗费的时间从小到大依次是：

**O(1) < O(logn) < (n) < O(n*logn) < O(n^2^) < O(n^3^) < O(2^n^) < O(n!) < O(n^n^)**



![img](https://camo.githubusercontent.com/0e81ab0549a6c17641177e88fa6cd41a5659f4634f7c2367b83a7301e5ecc49b/68747470733a2f2f75706c6f61642d696d616765732e6a69616e7368752e696f2f75706c6f61645f696d616765732f31323839303831392d306662626137366638323930353566662e706e673f696d6167654d6f6772322f6175746f2d6f7269656e742f7374726970253743696d61676556696577322f322f772f31323430)

注意 n 的时间复杂度介于**对数阶**与**nlogn阶**之间

#### 232 栈实现队列 复习 显示原型的方法书写中又出问题了！

二刷 错了两下 

- 1.在MyQueue的显式原型的新方法中写代码时 stack忘记加this了 
- 2.peek中想调用MyQueue显式原型的pop方调成stack2的pop了 结果返回了个undefined 顺带着还给stack2存了个undefined 阿巴阿巴



## 5.前端进阶知识学习

### Node.js

```JS
// 由 Node入门 这份教程入门 完成一个实战案例 简单入门node
// 然后再学习尚硅谷的node课程
```



# 2021.9.24 *Offer收割机学长的经验~ *建立前端学习仓库

- Offer收割机学长的经验之谈

> 抄Github源码 然后再自己理解
>
> 如何优化一些内容 自己疯狂思考
>
> 说白了 就是 疯狂抄高级东西 然后理解 自己再发散一下！

```js
// 今日主要收获 & 学习时间
// 逛b站、看漫画、聊qq/微信、打游戏 计时 每次30min娱乐时间MAX 饭后可以允许有一次 其他学习时间不要分心哦！
Totally 440min
1.前端基础知识 
// 从早上-中午 拿出一整块时间学习JS 晚上跑完步回来继续看JS JSyyds！！
	1.1 60-90 阮大JS/ES6 min
    // 口碑超好的JS&ES6教程 早起直接学习这个！  
    	/*  */
    1.2 120-180 JS高级教程 210min 
    // 每日重点！编码 + 知识点记录
    // 近期重点 作用域、闭包、原型链
		/*  */
    1.3 60-120 freecodecamp JS + 响应式网页设计 60min
    	/*  */
    1.4 60-90 JS 30demos 100min
    // 每天完成一个 不要求完全理解 先做一个初步的认知
    // 没有完全了解的/觉得很好的 都要特意标记出来 二刷时候再去好好理解下！
    	/*  */
    
    // 这些内容都是要重点掌握的！
    DOM编程 BOM使用 —— 复习
    事件代理/委托
	事件队列(setTimeout/setInterval/Promise)
	JSON
    Ajax/Fetch
	正则表达式

2.核心基础知识
	2.1 60-90 计网 60min
		/* 总结了下前天的内容 */
	2.2 20-30 操作系统 min
		/*  */

3.前端开发框架 
	3.1 react学习 min
    // 反复写todolist案例 写熟练了先停下来去学5.2+4.1
    // 五子棋案例做明白咯 尝试着改成组件化的形式
		/*  */
    
4.面试刷题
// 看完基础知识 来刷刷题 总结一下面经
	4.1 力扣 min
    	/*  */    

5.前端进阶知识学习
// 学完JS再学这个辽！
    Node.js
	webpack


6.学校课程内容 min 
7.每日总结 10min
```



## 1.前端基础

### ==JS基础知识==



```js
//每日学到的知识点 可以写文章 可以记在心里 总结下来！
// 本阶段主要学习JS高级教程（尚硅谷）
复习一下原型的内容 貌似明白一些了！
0.所有实例对象都有 `__proto__`属性 创建实例对象时自动添加
每个函数都有`protoytype`属性 它默认指向一个Object空对象   原型对象都有个`constructor`属性 它默认指向函数对象
  构造函数与原型对象是相互引用的关系
1.隐式原型和显式原型的关系 p16
2.通过原型链获取对象内部的属性/方法 p17
3.原型链——函数、Function、Object之间的关系 p18 20
4.原型链面试题-属性问题 p21
5.原型链面试题-p21

6.JS中单引号与双引号的功能相同 
7./t 是制表符的意思 可以加一个缩进
8.数组的不同位置的插入移出
	头插unshift() 
	尾插push() —— 入栈 入队
	头出shift() —— 出队
	尾出pop() —— 出栈
9.不使用var 直接定义一个变量 隐式声明为全局变量
全局变量的优缺点 

10.删除数组中索引为index的元素 
	`slice + ...` （返回值为被切割的数组）
	/ `splice` （返回值为删除的元素）并删除掉数组中对应的元素
11.替换数组中的某个/某几个元素 `splice` 
```

#### 0.函数特别的属性`prototype`

- 每个函数都有个`protoytype`属性 在定义函数时 `function Foo(){}`被自动赋值（默认为{}）也就是 ==默认**指向一个Object空对象**==

- 构造函数与原型对象是相互引用的关系
  - 构造函数Foo()通过prototype属性找到原型对象Object
  - 原型对象Object通过constructor属性找到构造函数Foo()

![在这里插入图片描述](https://img-blog.csdnimg.cn/ed78cd2515db4456a7f5184cb739134d.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5pWy5Luj56CB55qE5bCP5o-Q55C05omL,size_16,color_FFFFFF,t_70,g_se,x_16)



#### 0‘.实例对象特别的属性`__proto__`

实例对象的`__proto__`（隐式原型）就是其构造函数的`prototype`（显式原型）

- 在创建实例对象 `var fn = new Fn()` 时被自动添加 并赋值为构造函数的prototype值
- 原型对象（默认的那个空Object对象）就是当前实例对象的父对象（见下方1.隐式原型和显式原型的关系 的图）

#### 1.隐式原型&显式原型的关系

见下图

![请添加图片描述](https://img-blog.csdnimg.cn/c1585360f0e745408d78845f6fb21954.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5pWy5Luj56CB55qE5bCP5o-Q55C05omL,size_17,color_FFFFFF,t_70,g_se,x_16)

#### 2.通过原型链获取对象内部的属性/方法

顺着隐式原型属性找就行~

此处Object空对象 即为产生的Object实例对象  

![在这里插入图片描述](https://img-blog.csdnimg.cn/ac15bad11c2c4e64a323d2143f687d47.png)

想要调用实例对象中的方法 顺着原型链寻找就可以了（就是蓝色箭头指出来的路径）

如果原型链上没有方法

```js
fn.test1();
fn.test2();
fn.toString();
// 以上三个方法都可以顺着原型链找到~
fn.test3();//TypeError: fn.test3 is not a function
```



#### 3.原型链 函数、Function、Object之间的关系（原型对象与实例对象的关系）

所有函数的隐式原型属性 `__proto__` 都是一样的 所以就有了下图这种情况

（Object也是由Function创建的 可以这么写

```js
var Foo = new Function();// 实际写的时候new会省去
Object = new Function();
Function = new Function();
```

）

![在这里插入图片描述](https://img-blog.csdnimg.cn/7817b937536c4edfb666347d1669272b.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5pWy5Luj56CB55qE5bCP5o-Q55C05omL,size_10,color_FFFFFF,t_70,g_se,x_16)



#### 4.原型链属性问题 面试题

```js
function A(){}
A.prototype.n = 1;
var b = new A();
A.prototype = {
    n: 2,
    m: 3
}
var c = new A();

console.log(b.n, b.m, c.n, c.m)
```

> 提示：
>
> - 顺着原型链来找属性（方法同理）
> - 函数的prototype属性默认指向一个空对象
>   - 如果定义了新的prototype 比如上面4-7行 则指向新的空对象
>
> - 感觉比较乱的可以画个图

画个图就无比清晰了 如下：

![在这里插入图片描述](https://img-blog.csdnimg.cn/2bb63294996f40769949f7754830cce6.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5pWy5Luj56CB55qE5bCP5o-Q55C05omL,size_18,color_FFFFFF,t_70,g_se,x_16)

答案很清楚了 

b实例对象顺着原型链可以找到n=1 找不到m

c实例对象顺着原型链可以找到n=2 m=3

```js
// 1, undefined, 2, 3
```









#### 5.原型链属性问题（更深入） -面试题

这题明天晚上再研究下~

```js
function F(){}
Object.prototype.a = function(){
    console.log('a()')
}
Function.prototype.b = function(){
    console.log('b()')
}
var f = new F()
f.a()
f.b()
F.a()
F.b()
```



#### 6.全局变量的优缺点

来源 [JS中如何定义全局变量](https://www.cnblogs.com/keyi/p/6137259.html)

-  优点
  - 减少变量的个数
  - 减少由于实际参数和形式参数的数据传递带来的时间消耗
- 缺点
  - 全局变量保存在静态存贮区，程序开始运行时为其分配内存，程序结束释放该内存。与局部变量的动态分配、动态释放相比，生存期比较长，因此过多的全局变量会占用较多的内存单元。
  - 全局变量破坏了函数的封装性能。函数象一个黑匣子，一般是通过函数参数和返回值进行输入输出，函数内部实现相对独立。但函数中如果使用了全局变量，那么函数体内的语句就可以绕过函数参数和返回值进行存取，这种情况破坏了函数的独立性，使函数对全局变量产生依赖。同时，也降低了该函数的可移植性。
  - 全局变量使函数的代码可读性降低。由于多个函数都可能使用全局变量，函数执行时全局变量的值可能随时发生变化，对于程序的查错和调试都非常不利。

因此，如果不是万不得已，最好不要使用全局变量。

#### 7.删除数组中索引为index的元素 …配合slice & splice

- 利用展开运算符`…`和slice方法

```js
array = [0,1,2,3,4]
const index = 2
const newArray = [
    ...array.slice(0,index),
    ...array.slice(index+1)
]
console.log(newArray);// [0, 1, 3, 4]
```

这种方法在删除多个元素时很好用！

​	删除索引为2 4 6的元素

```js
array = [0,1,2,3,4,5,6]
const newArray = [
    ...array.slice(0,2),
    ...array.slice(3,4),
    ...array.slice(5,6)
]
console.log(newArray);// [0, 1, 3, 5]
```



- 使用splice进行连续地删除 返回值为被删除的那个元素

```js
array = [0,1,2,3,4]
// 从索引为2的位置开始 删除两个元素
array.splice(1,2);
console.log(array);// [0, 3, 4]
```



#### 8.替换数组中的某个元素 splice(index,number,用于替换的内容)

```js
array = [0,1,2,3,4]
// 从索引1开始 的两个元素 替换成"bill"
array.splice(1,2,"bill")
console.log(array)// [0, "bill", 3, 4]
```









### JS30练

```js
//一天一个有趣的原生JS练手demo 边做边总结！莫纠结细则
demo07
```

很有收获！感觉很多算法题也可以用其中的方法快速解决

![在这里插入图片描述](https://img-blog.csdnimg.cn/11b93df5bed84b62a685f299ff8e39a7.png)

- ```js
  people.some(person => 
              (new Date()).getFullYear() - person.year
             );//person代表people中迭代的每个元素
  ```

  



## 2.核心基础知识

### 计网

```js
//小林的图解网络随时翻阅 & 极客时间趣谈网络协议+网上的文章 & 读图解HTTP TCP等书籍 & 网络抓包实操练习  深入理解
// 每天一道计网面试题 把自己带入面试者的身份 跟面试官白话白话 嗯就这样子
今天整理了下前天的题 TCP三次握手的优点 发到掘金上
```

[计网小知识 为啥TCP是三次握手（three-way handshake） 而不是两次/四次呢？](https://juejin.cn/post/7011449882409959432)



###  操作系统

```js
// 小林的图解系统 & 学校课程学习 & 王道考研-OS 三者配合 高效学习
// 要看一下学校的ppt了 课程旷了好几节有点听不懂！
日常停学
```



## 3.前端开发框架

### react尚硅谷

```js
// 广受好评的react教程 先快速过一下 再去实操哦！
```



### react练手

```js
// 先过一遍原理 再去敲代码加深印象（freecodecamp）
// 五子棋demo
```





## 4.面试题

### 面试题、面经总结

```js
//网上面试题、面经辣么多 一天多看一些 然后同时也要研究一些题的答案！
```



### 力扣

```js
// 跟着代码随想录的内容进行学习！
```



## 5.前端进阶知识学习

### Node.js

```JS
// 由 Node入门 这份教程入门 完成一个实战案例 简单入门node
// 然后再学习尚硅谷的node课程
```



# 2021.9.25 *原型链好图在这里

下午参加计算机高峰论坛认识了一位字节跳动西南地区的HR哥哥 



依旧是有些受身体因素困扰的低效一日 （其实也是因为太贪玩！早上七点多就起了但是赖床了。。看了遍发哥的赌神 陪女票打了一晚上王者 ）

```js
// 今日主要收获 & 学习时间
// 逛b站、看漫画、聊qq/微信、打游戏 计时 每次30min娱乐时间MAX 饭后可以允许有一次 其他学习时间不要分心哦！
Totally 370min
1.前端基础知识 
// 从早上-中午 拿出一整块时间学习JS 晚上跑完步回来继续看JS JSyyds！！
	1.1 60-90 阮大JS/ES6 min
    // 口碑超好的JS&ES6教程 早起直接学习这个！  
    	/*  */
    1.2 120-180 JS高级教程 120min 
    // 每日重点！编码 + 知识点记录
    // 近期重点 作用域、闭包、原型链
		/* 学习了执行上下文的内容 执行上下文栈很好使！ */
    1.3 60-120 freecodecamp JS + 响应式网页设计 min
    	/*  */
    1.4 60-90 JS 30demos 60min
    // 每天完成一个 不要求完全理解 先做一个初步的认知
    // 没有完全了解的/觉得很好的 都要特意标记出来 二刷时候再去好好理解下！
    	/* demo08 H5 Canvas画布 了解下！ */
    
    // 这些内容都是要重点掌握的！
    DOM编程 BOM使用 —— 复习
    事件代理/委托
	事件队列(setTimeout/setInterval/Promise)
	JSON
    Ajax/Fetch
	正则表达式

2.核心基础知识
	2.1 60-90 计网 min
		/*  */
	2.2 操作系统 min
		/*  */

3.前端开发框架 
	3.1 react学习 30min
    // 反复写todolist案例 写熟练了先停下来去学5.2+4.1
    // 五子棋案例做明白咯 尝试着改成组件化的形式
		/* 明天继续冲五子棋！争取给拆成组件 */
    
4.面试刷题
// 看完基础知识 来刷刷题 总结一下面经
	4.1 力扣 min	
    	/*  */   
    4.2 面试题 60min
		/* 高峰论坛时偷偷看了面经hh */  
5.前端进阶知识学习
// 学完JS再学这个辽！
    Node.js
	webpack


6.其他 
	本科教育高峰论坛-计算机科学与工程学院分论坛（校企合作）60min
7.每日总结 10min
```



## 1.前端基础

### ==JS基础知识==



```js
//每日学到的知识点 可以写文章 可以记在心里 总结下来！
// 本阶段主要学习JS高级教程（尚硅谷）
复习一下原型的内容 貌似明白一些了！
1.原型链面试题-p21
2.全局执行上下文和函数执行上下文的概念！
3.使用执行上下文栈解决递归！
```



#### 1.原型链属性问题（更深入） -面试题

```js
function F(){}
Object.prototype.a = function(){
    // Object的原型对象上增添了一个a方法
    console.log('a()')
}
Function.prototype.b = function(){
    console.log('b()')
}
var f = new F()
f.a()//【1】可以找到
f.b()//【2】报错 b不是一个函数
F.a()//【3】可以找到
F.b()//【4】可以找到
```

##### 【1】实例对象f 顺着原型链（的`__proto__`属性）

`->实例对象F()->空Object对象->Object对象的显式原型`

 可以在Object的显示原型上找到a方法

![在这里插入图片描述](https://img-blog.csdnimg.cn/6bde9386d5414af2a21f8fad655e8424.png)

##### 【2】同理  顺着原型链找 

`->实例对象F()->空Object对象->Object对象的显式原型->null`

Object对象的显式原型就是原型链的尽头了！没法再找到Function的原型对象了！

![在这里插入图片描述](https://img-blog.csdnimg.cn/fed8f4e733fe486890b312bcd60bd4e7.png)

##### 【3】从函数对象 通过隐式原型属性（也是有的） 顺着原型链找

> 这里需要注意 直接打印F 是没有办法获得它的 `__proto__` 属性的 
>
> 可以通过其原型对象的constructor来获取（见下图）



`->Function对象的显式原型->Object对象的显式原型`

![在这里插入图片描述](https://img-blog.csdnimg.cn/98c5698e603342d5b916fdf65b25433f.png)

> 另外注意 函数F()的**隐式原型属性**是由Function创建的~

##### 【4】同理 

画图出来就很清楚了！

==这个图要记在脑子里！==

`->Function对象的显式原型`

![在这里插入图片描述](https://img-blog.csdnimg.cn/e95fa85193854c2393ae7a353d1d46a4.png)

#### 2.全局执行上下文和函数执行上下文的概念

首先明确 **执行上下文** 是啥

- 执行上下文

由JS引擎自动创建的对象

包含**对应作用域**中的<u>所有变量属性</u>

> 之前看红宝书的时候 里面提到 上下文就是对应作用域 
>
> 那么这个执行上下文就是个被JS引擎创建的对象 包含作用域中所有变量属性？
>
> - 回头看红宝书时/了解到这个知识之后 要能回忆起现在的疑惑哈哈哈

- 全局执行上下文

在==全局代码执行前==【1】最先创建一个全局执行上下文(window)

【2】注意 这个过程会**收集全局变量并初始化**

【3】这些变量会被设置为**window**的属性



- 函数执行上下文

在【1】==调用==函数时, 在执行函数体之前先创建一个函数执行上下文

【2】注意 这个过程会收集局部变量, 并初始化

【3】这些变量会被设置为**对应执行上下文**的属性



#### 3.使用执行上下文栈解决递归！

先明确下上下文**栈**的概念

这段代码——

```js
// 01 进入全局执行上下文
var a = 10;
var bar = function(x){
    var b = 5;
    // 03 进入foo函数执行上下文
    foo(x + b);
}
var foo = function(y){
    var c = 5;
    console.log(a + c + y);
}
bar(10);// 02 进入bar函数执行上下文
```

对应的入栈、出栈的操作如下

![在这里插入图片描述](https://img-blog.csdnimg.cn/a8e415aa4bb74309a5a68e12e4fba94e.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5pWy5Luj56CB55qE5bCP5o-Q55C05omL,size_20,color_FFFFFF,t_70,g_se,x_16)

（图有点丑 见谅）



下面看看如何用执行上下文栈的思想解决递归（真的是可以想清楚的哦！）



```js
foo(1);
function foo(i) {
    if (i == 4) {
        return;
    }
    console.log('foo() begin:' + i);
    foo(i + 1);
    console.log('foo() end:' + i);
}
```

想一下 输出是什么呢？

来看看执行上下文栈

（具体流程就不画了 就是先入栈 再出栈嘛！ 其中foo(4)没有输出 因为直接返回结果了~

![在这里插入图片描述](https://img-blog.csdnimg.cn/2bb63294996f40769949f7754830cce6.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA5pWy5Luj56CB55qE5bCP5o-Q55C05omL,size_18,color_FFFFFF,t_70,g_se,x_16)

另外注意 整个过程产生了五个执行上下文哦！



> 明天来复习三道面试题！



### JS30练

```js
//一天一个有趣的原生JS练手demo 边做边总结！莫纠结细则
demo08
```

Canvas画布初次接触

另外回忆了一下脱离文档流的三种方式 float 绝对定位、固定定位



## 2.核心基础知识

### 计网

```js
//小林的图解网络随时翻阅 & 极客时间趣谈网络协议+网上的文章 & 读图解HTTP TCP等书籍 & 网络抓包实操练习  深入理解
// 每天一道计网面试题 把自己带入面试者的身份 跟面试官白话白话 嗯就这样子
又没学！明天一定！
```





###  操作系统

```js
// 小林的图解系统 & 学校课程学习 & 王道考研-OS 三者配合 高效学习
// 要看一下学校的ppt了 课程旷了好几节有点听不懂！
日常停学
```



## 3.前端开发框架

### react尚硅谷

```js
// 广受好评的react教程 先快速过一下 再去实操哦！
```



### react练手

```js
// 先过一遍原理 再去敲代码加深印象（freecodecamp）
// 五子棋demo
五子棋学完第一个基础板块 明天一定干掉这个五子棋！
```





## 4.面试题

### 面试题、面经总结

```js
//网上面试题、面经辣么多 一天多看一些 然后同时也要研究一些题的答案！
看了很多面经 感受到了自己的不足啊！！加油吧！
```



### 力扣

```js
// 跟着代码随想录的内容进行学习！
今日状态略差 没学 明天上午打字节跳动的周赛
```



## 5.前端进阶知识学习

### Node.js

```JS
// 由 Node入门 这份教程入门 完成一个实战案例 简单入门node
// 然后再学习尚硅谷的node课程
```

# 2021.9.26

身体恢复得不错！上午打了一场力扣周赛 卡在medium难度得的二题一个小时 明知道这题用暴力遍历不好使 就是想给他弄出来。。

后来看大佬写得题解是用啥前缀和？

不过第一题回忆了以下贪心算法 欸也算有收获吧~



下午决定国庆不回家还和女票产生了些不愉快 害 想开点想开点 



下午鼻炎犯了！

难受！今天早点睡养养身体 明天早期咯~

```js
// 今日主要收获 & 学习时间
// 逛b站、看漫画、聊qq/微信、打游戏 计时 每次30min娱乐时间MAX 饭后可以允许有一次 其他学习时间不要分心哦！
Totally 390min
1.前端基础知识 
// 从早上-中午 拿出一整块时间学习JS 晚上跑完步回来继续看JS JSyyds！！
	1.1 阮大JS/ES6 min
    // 口碑超好的JS&ES6教程 早起直接学习这个！  
    	/*  */
    1.2 JS高级教程 min 
    // 每日重点！编码 + 知识点记录
    // 近期重点 作用域、闭包、原型链
		/*  */
    1.3 freecodecamp JS + 响应式网页设计 90min
    	/* 开始多敲一些JS和CSS */
    1.4 JS 30demos 30min
    // 每天完成一个 不要求完全理解 先做一个初步的认知
    // 没有完全了解的/觉得很好的 都要特意标记出来 二刷时候再去好好理解下！
    	/* demo09 今天这个玩儿控制台的 收获倒不大 不知道哪里有用噻 */
    
    // 这些内容都是要重点掌握的！
    DOM编程 BOM使用 —— 复习
    事件代理/委托
	事件队列(setTimeout/setInterval/Promise)
	JSON
    Ajax/Fetch
	正则表达式

2.核心基础知识
	2.1 60-90 计网 60min
		/* 复习了一下HTTP基础知识~~ */
	2.2 操作系统 min
		/*  */

3.前端开发框架 
	3.1 react学习 30min
    // 反复写todolist案例 写熟练了先停下来去学5.2+4.1
    // 五子棋案例做明白咯 尝试着改成组件化的形式
		/* 鼓捣鼓捣五子棋案例 但是鼻炎得头疼orz 早睡明天再弄吧。。 */
    
4.面试刷题
// 看完基础知识 来刷刷题 总结一下面经
	4.1 力扣 150min	
    	/*  */   
    4.2 面试题 min
		/*  */  
5.前端进阶知识学习
// 学完JS再学这个辽！
    Node.js
	webpack


6.其他 
	
7.每日总结 20min
```



## 1.前端基础



### ==前端基础知识==



```js
//每日学到的知识点 可以写文章 可以记在心里 总结下来！
// 本阶段主要学习JS高级教程（尚硅谷）刷freecodecamp
1.复习下执行上下文的三道面试题 不难 理解了全局上下文 函数上下文 变量提升 函数提升 可以快速理解
2.回忆了一下 真正开发中从没用过的switch语句
3.box-shadow 加阴影 
4.transform:uppercase; 变大写
5.line-height 复习一下 设置“行间”的距离 但是并不是两行之间距离的意思 而是这一行的“行高” 是”每行文字所占据的垂直空间“
6.相对定位一个有意思的用法
```

> 来复习三道面试题！

明天再看！今天没时间搞这个惹







#### 2.switch简单复习

```js
switch(val){
    case 1:
        xxx
       	break;
    case 2:
        xxx
        break;
}
```

还可以添加多个选项（这个还真没见过！）

```js
switch(val){
    case 1:
    case 2:
    case 3:
        answer = "Low";
        break;
    case 4:
    case 5:
    case 6:
        answer = "Mid";
        break;
    case 7:
    case 8:
    case 9:
        answer = "High";
        break;
}

```



#### 3.box-shadow加阴影

`box-shadow` 属性的阴影依次由下面这些值描述：

- `offset-x` 阴影的水平偏移量（水平阴影的位置）； 必需
- `offset-y` 阴影的垂直偏移量（垂直阴影的位置）； 必需
- `blur-radius` 模糊半径； 可选
- `spread-radius` 阴影扩展半径（也就是阴影的尺寸）；可选
- `color` 可选

- `inset` 可将外部阴影改为内部阴影 可选

```css
box-shadow: h-shadow v-shadow blur spread color inset;
```

注意：省略长度的值是 0。

#### 4.相对定位的用法

- 普通文档流

在 CSS 里一切 HTML 元素皆为盒子，也就是通常所说的盒模型。 

块级元素自动从新的一行开始（比如标题、段落以及 div），行内元素排列在上一个元素后（比如图片以及 span）。

元素默认按照这种方式布局称为文档的普通流，同时 CSS 提供了 position 属性来覆盖它。

##### 很有用的相对定位！

- 相对定位**不会导致元素脱离文档流** 可以方便地**向某个方位移动**某个元素

当元素的定位设置为 `relative` 时，它允许你通过 CSS 指定该元素在当前文档流页面下的*相对*偏移量。 CSS 里控制各个方向偏移量的属性是 `left`、`right`、`top` 和 `bottom`。 它们代表**从原来位置向远离该方向***偏移*指定的像素、百分比或者 em。 

```css
top:10px; /* 远离top的位置移动10px 也就是向下移动10px */
```

> 把元素的位置设置成相对，并**不会改变该元素在布局中所占的位置**（它不会脱离文档流 也就是不会被其他元素忽略），也不会对其它元素的位置产生影响。

##### 相对定位的一些有趣用法

定位可以使页面布局更灵活、高效。 不管元素的定位是怎样的，HTML 标记在从上到下阅读起来时应该是整洁的、有意义的。 

这样可以让视障人士（重度依赖辅助设备比如屏幕阅读软件的人们）也能够**无障碍**地浏览你的网页。



### JS30练

```js
//一天一个有趣的原生JS练手demo 边做边总结！莫纠结细则
demo09
```

暂时还不清楚具体用处的

chrome开发工具介绍（这个就和JavaScript没啥关系了哈哈）

原来控制台还有这么多用处啊哈哈哈

![在这里插入图片描述](https://img-blog.csdnimg.cn/dc47a50f2e7944f18236fb148321b6aa.png)



## 2.核心基础知识

### 计网



```js
//小林的图解网络随时翻阅 & 极客时间趣谈网络协议+网上的文章 & 读图解HTTP TCP等书籍 & 网络抓包实操练习  深入理解
// 每天一道计网面试题 把自己带入面试者的身份 跟面试官白话白话 嗯就这样子
“聊聊HTTP
	HTTP是啥嘞
    详细解释下“超文本传输协议呗”
    HTTP是只用于服务器传客户端嘛？
    HTTP常见的状态码 说几个
    HTTP常见的字段 说几个”
```

#### 简单聊聊HTTP的基本知识

#####  1.HTTP是啥？

**超文本传输协议**

`HyperText Transfer Protocol`

- HTTP基于TCP/IP 是关于数据如何在万维网中通信的协议
- **HTTP的底层是TCP/IP**

- 用于传送 WWW 方式的数据

##### 2.详细解释“超文本传输协议”

分三部分来看——

![img](https://mmbiz.qpic.cn/mmbiz_png/J0g14CUwaZfXG1113Sjm0iaOXfoOv0tlU4cfNS4t8C0AjG8YleW3FjITV4h4aQNn1iboHhjALOGicsFsLuQAXwVaQ/640?wx_fmt=png)

（很基础了！）

- 协议

**协** 要求由两个以上的参与者

**议** 产生对参与者的一种**行为约定和规范**

对于用在计算机世界中的HTTP协议 

它使用计算机能够理解的语言确立了一种

【1】计算机之间交流通信的规范（”协“）

【2】交流通信相关的各种 控制&错误处理 方式（”议“）



- 传输

注意 HTTP协议是一个 **双向协议** 

双向协议：客户端可以发送请求到服务端 服务端也可以把请求数据发送到客户端

同时 也要注意 —— 数据在我们看来是在两点之间传递 但是允许中间由中转/接力

> 举个例子 第一排的同学传递小纸条到后排同学时 需要经过好多同学

在HTTP中 中间人只要遵循 HTTP协议 并在不打扰基本数据传输的前提下 就可以添加额外的内容

到这里 可以给HTTP协议下一个更加贴切的定义了（加上”两点之间双向传输“这个概念）

> HTTP协议是一个在计算机世界中专门用来在==两点之间传输数据==的约定和规范

- 超文本

**超越了普通文本的文本** 文字、图片、视频、超链接的混合体

HTML就是常见的超文本 可以通过超链接实现跳转 另外 是一个有文字、有画面视频的丰富的网页



- 小结 超文本传输协议 确切一些的定义

记住几个点——”协议——约定和规范“ ”传输——在两点之间“ ”超文本——传输的内容（文字、图片、音视频“

**超文本传输协议**是

> 一个在计算机世界里==专门在**「两点」**之间**「传输」**文字、图片、音视频等**「超文本」**数据的**「约定和规范」**==

##### 3.HTTP只能用于 服务端与客户端之间 传输超文本？正确嘛？

- 不正确
- 还可以用于 **从服务器传输超文本数据到服务器**

> 所以 HTTP协议 的描述 要这么说——”采用==两点之间==传输超文本“



##### 4.HTTP常见的状态码

这里就顺着说就行了——（举一些常见的例子）

- 成功的报文
- 重定向的报文
  - 请求资源没了 301
  - 请求资源还有  但是要换个URL 302
- 客户端错误
  - 服务器禁止访问 403 Forbidden
  - 服务器上不存在 / 没找到 404 Not Found
- 服务器错误
  - 访问后端服务器发生错误 502 Bad Gateway
  - 服务器正忙 暂时无法响应 503 Service Unavailable

![img](https://mmbiz.qpic.cn/mmbiz_png/J0g14CUwaZfXG1113Sjm0iaOXfoOv0tlUfV6qkzg4yHtOibAfTv6hTicOx73F55WWl4nW2FWlXnDJ7Igd9kvrrRnA/640?wx_fmt=png)

先说说总览

- 1xx 提示信息 

协议处理中的一种中间状态 很少用

- 2xx 成功处理请求
  - 「**200 OK**」 最常见的成功状态码 一切正常！
  - 「**204 No Content**」  也是很常见的成功状态码 （区别：响应头没有body数据）
  - 「**206 Partial Content**」是应用于 HTTP 分块下载或断电续传。

表示**==服务器==成功处理了**客户端的**请求**

- 3xx 重定向请求
  - 「**301 Moved Permanently**」表示永久重定向，说明请求的资源已经不存在了
  - 「**302 Moved Temporarily**」表示临时重定向，说明请求的资源还在，但暂时需要用另一个 URL 来访问。
  - 「**304 Not Modified**」不具有跳转的含义，表示资源未修改，重定向已存在的缓冲文件，也称缓存重定向，用于缓存控制。

表示客户端请求的==资源==发生了==变动==，**需要客户端用新的 URL 重新发送请求获取资源**，也就是**重定向**。

- 4xx 客户端错误
  - 「**400 Bad Request**」表示客户端请求的报文有错误，但只是个**笼统的错误**。
    - 「**403 Forbidden**」表示**服务器禁止访问资源**，并不是客户端的请求出错。
    - 「**404 Not Found**」表示请求的资源**在服务器上不存在或未找到**，所以无法提供给客户端。

表示==客户端==发送的**报文有误**，服务器无法处理，也就是错误码的含义。

- 5xx 服务器错误
  - 「**500 Internal Server Error**」与 400 类型，是个笼统通用的错误码，服务器发生了什么错误，我们并不知道。
    - 「**501 Not Implemented**」表示客户端请求的功能还不支持，类似“即将开业，敬请期待”的意思。
    - 「**502 Bad Gateway**」通常是服务器作为网关或代理时返回的错误码，表示服务器自身工作正常，访问后端服务器发生了错误。
    - 「**503 Service Unavailable**」表示服务器当前**很忙，暂时无法响应服务器**，类似“网络服务正忙，请稍后重试”的意思。

表示客户端请求报文正确，但是**==服务器处理时==内部==发生了错误==**，属于服务器端的错误码。

##### 5.HTTP常见字段

==常见字段这里还需要多看些文章学习下！==

HTTP包从应用层被发出（自带HTTP头部） 经过传输层、网络层、链路层之后会加上

TCP头部 IP头部 MAC头部

这些头部中的字段帮助数据包抵达服务端~



HTTP协议的头域包括 `通用头，请求头，响应头和实体头` 四个部分。

- 每个头域由一个域名，冒号（:）和域值三部分组成。

【1】Host

客户端发送请求时 用来指定服务器的域名

![img](https://mmbiz.qpic.cn/mmbiz_jpg/J0g14CUwaZfXG1113Sjm0iaOXfoOv0tlU6aoJZ8ROGvuttxDGXYnKXgzDdOBXibKpZVoqhkArdZ3QvMBBDaLONkw/640?wx_fmt=jpeg)

通过Host字段 将请求发往**同一台服务器上的不同网站**





【2】Content-Length 

服务器在返回数据时，会有 `Content-Length` 字段，表明本次回应的数据长度。

![img](https://mmbiz.qpic.cn/mmbiz_jpg/J0g14CUwaZfXG1113Sjm0iaOXfoOv0tlU79Ir1qmS5DMj7XLLibaibsbUEUN5JyB2ugmEHcxwIe7JBkBHM99XQp3g/640?wx_fmt=jpeg)







【3】Connection 

最常用于客户端要求服务器使用 TCP 持久连接，以便其他请求复用。

![image](https://mmbiz.qpic.cn/mmbiz_jpg/J0g14CUwaZfXG1113Sjm0iaOXfoOv0tlUlhrVicZt4iaLPPibcD8KQV4z9vqwAaAjdtkjUo5fGlKOsTaicbtEDO4u1Q/640?wx_fmt=jpeg)

HTTP/1.1 版本的默认连接都是持久连接，但为了兼容老版本的 HTTP，需要指定 `Connection` 首部字段的值为 `Keep-Alive`。

一个==可以复用的 TCP 连接就这样建立了，直到客户端或服务器主动关闭连接==。

但是，这不是标准字段（是因为用于兼顾老版本么？这里说得不很清楚）。

【4】Content-Type

用于服务器回应时，告诉客户端，本次数据是什么格式。

![img](https://mmbiz.qpic.cn/mmbiz_jpg/J0g14CUwaZfXG1113Sjm0iaOXfoOv0tlUPPfeuboYtO6sBBQw5JI76dSrAoNlvjs2TysKiaPyVGHrtjFJiblIhfNQ/640?wx_fmt=jpeg)

上面的类型表明，发送的是网页，而且编码是UTF-8。

这里在html后缀文件中经常看到~





【5】Content-Encoding 

说明数据的压缩方法。表示服务器返回的数据使用了什么压缩格式

![img](https://mmbiz.qpic.cn/mmbiz_jpg/J0g14CUwaZfXG1113Sjm0iaOXfoOv0tlUn83Xqku5tIB6zNdHsnFH08xfURlVHdtGQiaYfF21ib3koxICwrwRnckg/640?wx_fmt=jpeg)

上面表示服务器返回的数据采用了 gzip 方式压缩，告知客户端需要用此方式解压。



同时 客户端在请求时，用 `Accept-Encoding` 字段说明自己可以**接受哪些压缩方法**。

```
Accept-Encoding: gzip, deflate
```





###  操作系统

```js
// 小林的图解系统 & 学校课程学习 & 王道考研-OS 三者配合 高效学习
// 要看一下学校的ppt了 课程旷了好几节有点听不懂！
日常停学
```



## 3.前端开发框架

### react尚硅谷

```js
// 广受好评的react教程 先快速过一下 再去实操哦！
```



### react练手

```js
// 先过一遍原理 再去敲代码加深印象（freecodecamp）
// 五子棋demo
五子棋又学了一会儿~ 明天一定干掉这个五子棋！
```





## 4.面试题

### 面试题、面经总结

```js
//网上面试题、面经辣么多 一天多看一些 然后同时也要研究一些题的答案！
看了很多面经 感受到了自己的不足啊！！加油吧！
```



### 力扣

```js
// 跟着代码随想录的内容进行学习！
打字节跳动的周赛 第二题就没做出来 第一题算是做过吧 还写了半个小时！
裂开！
要加强算法训练！！
```



## 5.前端进阶知识学习

### Node.js

```JS
// 由 Node入门 这份教程入门 完成一个实战案例 简单入门node
// 然后再学习尚硅谷的node课程
```

# 2021.9.27 

已经是近期起得最早的一天了！

八点多起 九点开始学



但是有点感冒。。睡觉养病了 

状态被感冒弄得不太好。



```js
// 今日主要收获 & 学习时间
// 逛b站、看漫画、聊qq/微信、打游戏 计时 每次30min娱乐时间MAX 饭后可以允许有一次 其他学习时间不要分心哦！
Totally 360min
1.前端基础知识 
// 从早上-中午 拿出一整块时间学习JS 晚上跑完步回来继续看JS JSyyds！！
	1.1 阮大JS/ES6 min
    // 口碑超好的JS&ES6教程 查缺补漏
    	/*  */
    1.2 JS高级教程 60min 
    // 每日重点！编码 + 知识点记录
    // 近期重点 作用域、闭包、原型链
		/* 看了下作用域的内容 简单入门原型 */
    1.3 freecodecamp JS + 响应式网页设计 min
    	/*  */
    1.4 JS 30demos 150min
    // 每天完成一个 不要求完全理解 先做一个初步的认知
    // 没有完全了解的/觉得很好的 都要特意标记出来 二刷时候再去好好理解下！
    	/* demo10 超级棒的一个 类似 todolist 的案例
        在原版基础上有改进~*/
    
    // 这些内容都是要重点掌握的！
    DOM编程 BOM使用 —— 复习
    事件代理/委托
	事件队列(setTimeout/setInterval/Promise)
	JSON
    Ajax/Fetch
	正则表达式

2.核心基础知识
	2.1 60-90 计网 20min
		/* 复习了一下HTTP基础知识~~ */
	2.2 操作系统 min
		/*  */

3.前端开发框架 
	3.1 react学习 20min
    // 反复写todolist案例 写熟练了先停下来去学5.2+4.1
    // 五子棋案例做明白咯 尝试着改成组件化的形式
		/* 一搞这个就难受呢咋 明天早起学这个！ */
    
4.面试刷题
// 看完基础知识 来刷刷题 总结一下面经
	4.1 力扣 min	
    	/*  */   
    4.2 面试题 70min
		/* 看了一下new一个实例对象会隐含着发生什么样的过程~ */  
5.前端进阶知识学习
// 学完JS再学这个辽！
    Node.js
	webpack


6.其他 
	
7.每日总结 min
```



## 1.前端基础





### ==前端基础知识==



```js
//每日学到的知识点 可以写文章 可以记在心里 总结下来！
// 本阶段主要学习JS高级教程（尚硅谷）刷freecodecamp
1.复习下执行上下文的三道面试题 不难 理解了全局上下文 函数上下文 变量提升 函数提升 可以快速理解
2.for循环中一些神奇的效率问题
3.利用label标签绑定按钮~
4.利用css3 input:checked+label 做到“点击某个input框就赋予label属性”
5.很好的知识点 new操作符干了什么？
```

> 来复习三道面试题！

明天再看！今天没时间搞这个惹

#### 1.执行上下文面试题

明天。。。

晚上状态太难顶了







#### 2.for循环中 计算数组长度

```js
for(let i = 0; i < nums.length; i++){
    // 这样需要反复计算nums的长度 不好！
}
for(let i = 0,length = nums.length; i < length; i++){
    
}
```

因为事件的响应函数是点击的时候才触发调用的，在点击之前只是声明了但并没有调用过响应函数

而点击按钮的时候都能触发响应函数了，说明for循环已经执行完了，因为只有for循环执行完了才会给每个按钮都绑定上了响应函数



#### 3.闭包前瞻 按钮点击案例

![在这里插入图片描述](https://img-blog.csdnimg.cn/7c3499f59bae4a178a9067a87b5ccbd7.png)

```js
// 先获取模板
var btns = document.getElementsByTagName('button')
```

采用循环遍历 + 监听

```js
//有问题 点哪个按钮都输出“第4个” 
// 因为i是全局变量 一趟循环走完i=3 
// 在点击的时候i就是3了
// let i = 0就ok了 i变为局部作用域中的变量
for(var i=0,length=btns.length;i<length;i++) {
    var btn = btns[i]
    btn.onclick = function () {
        alert('第'+(i+1)+'个')
    }
}
```

保存一下 下标 可以解决这个

```js
//解决一: 保存下标
// JS基础 轮播图中 学过类似的用法 
for(var i=0,length=btns.length;i<length;i++) {
    var btn = btns[i]
    btn.index = i
    btn.onclick = function () {
      alert('第'+(this.index+1)+'个')
    }
}
```

另外就是采用 闭包 的方法

```js
//解决办法: 循环遍历 + 利用闭包
for(var i=0,length=btns.length;i<length;i++) {
    // LIFE立即执行函数
    // 函数中的i是局部的
    (function (i) {
        var btn = btns[i]
        btn.onclick = function () {
            alert('第'+(i+1)+'个')
        }
        // 下面那个i是全局的！
    })(i)
}
```

#### 4.利用label标签实现“点击标签也可以勾选input框“效果（绑定按钮~）

```html
<div class="item">
    <!-- input元素的这个属性checked="false" 代表被划掉 -->
    <input type="checkbox" id="check1">
    <label for="check1">This is an inbox layout.</label>
</div>
```

关键在于这个label的for属性



#### 5.`input:checked+label` 做到“点击某个input框就赋予label属性”

```css
/* 勾选某个input元素 就给label元素赋予这些属性 */
input:checked+label {
    background: #F9F9F9;
    text-decoration: line-through;
}
```



#### 6.new关键字都做了什么？

> 明天来总结下这里 写一篇文章~

在没有学习原型之前 我们可以这么给出定义——

- 【1】创建一个类（或者模拟类 比如说构造函数~）的实例对象

  

那么学过原型之后 我们知道 JS中的new关键字还背负着一些使命

这里涉及了原型、this指向、作用域、函数return的知识

举个例子来把内容串起来~

```js
function Person(name, age){
    this.name = name;
    this.age = age;
}
Person.prototype.getName = function(){
    console.log(this);//
    return this.name;// 通过this调用新创建的对象实例中的属性
};

var person = new Person("bill",21);
console.log(person.name,person.age);// bill 21
person.getName();//"bill"
```

上面那些代码中是看不出来new关键字做了什么的！

我们用伪代码模拟下上述过程的执行过程 也就是这一句

```js
var person = new Person("bill",21);
```

等同于下面内容

```js
new Person('bill',21) = {
    var obj = {};
	obj.__proto__ = Person.prototype;
	var res = Person.call(obj, 'bill', 21);// 单独的方法也可以这么用 
// func.call(obj) 赋给obj对象func方法！
	return res;//这里先不考虑构造函数有return 毕竟比较少见
}
```



- 【1】创建了一个新的空对象 `{}`

```js
var obj = {};
```



- 【2】将新对象的 `__proto__` 指向构造函数的 `prototype` 属性
  - 也就是设置这个对象原型指向构造函数

```js
obj.__proto__ = Person.prototype;
```



- 【3】将构造函数的作用域赋值给新对象（this指向新创建的空对象）

> 这里注意 在执行构造函数中的代码时 会为这个新对象添加属性 同时this会指向新创建的对象
>
> 之后 this关键字被提及的时候 可以调用新创建的对象的属性/方法 `this.name`  `this.func()`

```js
var res = Person.call(obj, 'bill', 21);
```



- 【4】返回新对象（这里注意 如果构造函数中return一个对象 那么会返回return的内容 而不是创建的这个对象！！）

```js
return res;
```

##### 原型链必会概念

```js
// 要有顺着原型链找东西的技巧 
// 甭管是 常规的 找方法、找属性
// 还是面试中可能问的找构造函数 找Function Object的显式原型
/*（比如写一个 Function.prototype.func = function(){...} 
 要知道这个func方法 哪些实例对象可以调用（顺着原型链的隐式原型那条路线要能抵达Function的显式原型 那就能用那上面的方法！） */
var Foo = function(){...};
var foo = new Foo();                       
console.log(foo.__proto__.__proto__ === Object.prototype;)//true 
```





脑子里要有这幅图~

![在这里插入图片描述](https://img-blog.csdnimg.cn/fed8f4e733fe486890b312bcd60bd4e7.png)





另外这张图可以帮助理解一下~

可以看到实例对象的变量 顺着原型链可以找到Object的原型对象 

Object的原型对象上有很多定义好的方法~

> 另外Object的原型对象与Function的原型方法也有联系 看上图即可~

![在这里插入图片描述](https://img-blog.csdnimg.cn/ac15bad11c2c4e64a323d2143f687d47.png)



### JS30练 复选框

```js
//一天一个有趣的原生JS练手demo 边做边总结！莫纠结细则
demo10
```

超级牛的demo 功能的实现方式让人大开眼界

可以作为复选框的模板 用就完事了~

进阶功能有些没看懂 回头继续！

![在这里插入图片描述](https://img-blog.csdnimg.cn/cae45b7c5aff473fa08f7303d9ae2299.png)



## 2.核心基础知识

### 计网



```js
//小林的图解网络随时翻阅 & 极客时间趣谈网络协议+网上的文章 & 读图解HTTP TCP等书籍 & 网络抓包实操练习  深入理解
// 每天一道计网面试题 把自己带入面试者的身份 跟面试官白话白话 嗯就这样子
“来聊聊GET POST
	GET POST 的区别
    这俩方法都是安全和幂等的嘛？”
```



#### 来聊聊GET POST

##### 1.GET POST的区别

简单来说 

- 一个是发请求给服务器来要资源（GET）

- 一个是发请求给服务器来给服务器提交数据（POST）

与POST恰好相反 一个是索取 一个是给予~



具体来说一下

- Get ⽅法的含义是请求从服务器获取资源。这个资源可以是静态的⽂本、⻚⾯、图⽚视频等。

> ⽐如，你打开浏览器上的一篇文章，浏览器就会发送 GET 请求给服务器，服务器就会返回⽂章的所有⽂字及资源

![请添加图片描述](https://img-blog.csdnimg.cn/9b009d37f2f546c6a956b63ea09bbd6d.png)

- ⽽ POST ⽅法则是相反操作，它向 URI 指定的资源提交数据，数据就放在报⽂的 body ⾥。 

  > URI，统一资源标志符(Uniform Resource Identifier， URI)
  >
  > *URL*一般指统一资源定位系统（uniform resource locator;*URL*）
  >
  > 表示的是web上每一种可用的资源，如 HTML文档、图像、视频片段、程序等都由一个URI进行标识的

  > ⽐如，你在小林的公众号中的⽂章底部敲⼊了留⾔后点击「提交」，浏览器就会执⾏⼀次 POST 请求，把你的 留⾔⽂字放进了报⽂ body ⾥，然后拼接好 POST 请求头，通过 TCP 协议发送给服务器

![请添加图片描述](https://img-blog.csdnimg.cn/645caf7a0bdb435284b6177916807ae0.png)





##### 2.这俩方法都是安全和幂等的嘛？

> 先说明下安全和幂等的概念：
>
> - 在 HTTP 协议⾥，所谓的「安全」是指请求⽅法**不会「破坏」服务器上的资源**。
> - 所谓的「幂等」，意思是**多次执⾏相同的操作，结果都是「相同」的**。（和执行一次一样）

根据上面对两个方法的了解——

- 很明显 GET ⽅法就是安全且==幂等==的，因为它是「只读」操作，⽆论操作多少次，服务器上的数据都是==**安全**==的，且每次的结果都是**相同**的 

- POST 因为是「新增或提交数据」的操作，会修改服务器上的资源，所以是==不安全的==，且多次提交数据就会创建多 个资源，所以==不是幂等的==





###  操作系统

```js
// 小林的图解系统 & 学校课程学习 & 王道考研-OS 三者配合 高效学习
// 要看一下学校的ppt了 课程旷了好几节有点听不懂！
日常停学
```



## 3.前端开发框架

### react尚硅谷

```js
// 广受好评的react教程 先快速过一下 再去实操哦！
```



### react练手

```js
// 先过一遍原理 再去敲代码加深印象（freecodecamp）
// 五子棋demo
晚上实在太难受了 状态提升看得一知半解的 看不下去了 明天继续吧。。
身体真重要啊！
```



#### 子组件的数据提升到父组件中保存的情况

**当你遇到需要同时获取多个子组件数据，或者两个组件之间需要相互通讯的情况时，需要把子组件的 state 数据提升至其共同的父组件当中保存。之后父组件可以通过 props 将状态数据传递到子组件当中。这样应用当中所有组件的状态数据就能够更方便地同步共享了。**

将组件的 state 提升到父组件的情形在重构 React 组件时经常会遇到

## 4.面试题

### 面试题、面经总结

```js
//网上面试题、面经辣么多 一天多看一些 然后同时也要研究一些题的答案！
看了一些面试题 用来查缺补漏还不错嘛！
```



### 力扣

```js
// 跟着代码随想录的内容进行学习！
没做.jpg
```



## 5.前端进阶知识学习

### Node.js

```JS
// 由 Node入门 这份教程入门 完成一个实战案例 简单入门node
// 然后再学习尚硅谷的node课程
```



# 2021.9.28

沙河校区半日游 女票国庆回家了 留我一人在成都555

趁着她还没飞走 一起吃顿饭吧 难过.jpg



既然是出去放松 今天就不按计划走了 

- 写一下文章 总结一下知识点
- 回顾一下之前的面试题



今天也就学了俩小时不到😢

## 1.前端基础





### ==前端基础知识==



```js
//每日学到的知识点 可以写文章 可以记在心里 总结下来！
// 本阶段主要学习JS高级教程（尚硅谷）刷freecodecamp
1.复习下执行上下文的三道面试题 不难 理解了全局上下文 函数上下文 变量提升 函数提升 可以快速理解
2.掘金写文章总结 new操作符干了什么？
3.","运算符
```

> 来复习三道面试题！

#### 1.执行上下文面试题

- 面试题1

**先执行变量提升 再执行函数提升** —— 变量提升优先级高！(注意 如果在初始化变量中给变量赋初值 效果看起来会像先函数提升 之后变量才被提升一样 其实应该是函数先的！（本例就可以体现这一点）)

【1】变量提升 a为undefined

【2】函数提升 a为函数

```js
function a() {alert(666)}
var a;
console.log(typeof a)// 'function'
```

**如果在初始化变量中给变量赋初值 a重新变成number类型**

就像下面这题一样

- 面试题2

与上一题搭配使用

【1】变量提升 定义了c变量

【2】函数提升（比变量提升靠后）定义了函数

【3】在函数提升之后 给c再赋值为1

```js
var c = 1
function c(c) {
    console.log(c)
    var c = 3
}
c(2)//
```

这段代码相当于

```js
var c;//变量提升
function c(C){...}
c = 1;//最终c是Number类型的！
```



- 面试题3

这题相当有意思！哈哈

```js
if (!(b in window)) {
    // 变量提升 b是在window全局执行上下文中的 
    // 所以 if中的内容为false 无法给b赋值了！
	var b = 1;
}
console.log(b)// undefined
```





#### 2.new关键字都做了什么？

> 今天来总结下这里 写一篇文章~
>
> [JS小知识 new关键字都做了什么？](https://juejin.cn/post/7012887169878458404/)

在没有学习原型之前 我们可以这么给出定义——

- 【1】创建一个类（或者模拟类 比如说构造函数~）的实例对象

  

那么学过原型之后 我们知道 JS中的new关键字还背负着一些使命

这里涉及了原型、this指向、作用域、函数return的知识

举个例子来把内容串起来~

```js
function Person(name, age){
    this.name = name;
    this.age = age;
}
Person.prototype.getName = function(){
    console.log(this);//
    return this.name;// 通过this调用新创建的对象实例中的属性
};

var person = new Person("bill",21);
console.log(person.name,person.age);// bill 21
person.getName();//"bill"
```

上面那些代码中是看不出来new关键字做了什么的！

我们用伪代码模拟下上述过程的执行过程 也就是这一句

```js
var person = new Person("bill",21);
```

等同于下面内容

```js
new Person('bill',21) = {
    var obj = {};
	obj.__proto__ = Person.prototype;
	var res = Person.call(obj, 'bill', 21);// 单独的方法也可以这么用 
// func.call(obj) 赋给obj对象func方法！
	return res;//这里先不考虑构造函数有return 毕竟比较少见
}
```



- 【1】创建了一个新的空对象 `{}`

```js
var obj = {};
```



- 【2】将新对象的 `__proto__` 指向构造函数的 `prototype` 属性
  - 也就是设置这个对象原型指向构造函数

```js
obj.__proto__ = Person.prototype;
```



- 【3】将构造函数的作用域赋值给新对象（this指向新创建的空对象）

> 这里注意 在执行构造函数中的代码时 会为这个新对象添加属性 同时this会指向新创建的对象
>
> 之后 this关键字被提及的时候 可以调用新创建的对象的属性/方法 `this.name`  `this.func()`

```js
var res = Person.call(obj, 'bill', 21);
```



- 【4】返回新对象（这里注意 如果构造函数中return一个对象 那么会返回return的内容 而不是创建的这个对象！！）

```js
return res;
```

##### 原型链必会概念

```js
// 要有顺着原型链找东西的技巧 
// 甭管是 常规的 找方法、找属性
// 还是面试中可能问的找构造函数 找Function Object的显式原型
/*（比如写一个 Function.prototype.func = function(){...} 
 要知道这个func方法 哪些实例对象可以调用（顺着原型链的隐式原型那条路线要能抵达Function的显式原型 那就能用那上面的方法！） */
var Foo = function(){...};
var foo = new Foo();                       
console.log(foo.__proto__.__proto__ === Object.prototype;)//true 
```





脑子里要有这幅图~

![在这里插入图片描述](https://img-blog.csdnimg.cn/fed8f4e733fe486890b312bcd60bd4e7.png)





另外这张图可以帮助理解一下~

可以看到实例对象的变量 顺着原型链可以找到Object的原型对象 

Object的原型对象上有很多定义好的方法~

> 另外Object的原型对象与Function的原型方法也有联系 看上图即可~

![在这里插入图片描述](https://img-blog.csdnimg.cn/ac15bad11c2c4e64a323d2143f687d47.png)

#### 3.神奇的“,”运算符

```js
// 顺带复习下LIFE立即执行函数
var fn = (
    function test1(){
        return 1;
    },
	function test2(){
        return '2';
    }
)();
var num = (1,2);
// 01 先来输出这个数值 输出的是逗号后面的值
// 另外 之前一直没见过这样子的数值~
console.log(num);// 2
console.log(typeof(num));// number
// 02 再来输出下立即执行函数 发现逗号后面那个才是本体~
console.log(typeof(fn));//
```



#### 4.call()方法

[JavaScript 函数 Call](https://www.w3school.com.cn/js/js_function_call.asp)

用于达到“**方法重用**”的效果

使用 call() 方法，您可以编写能够**在不同对象上使用的方法**。

简单来说就是这样——

```js
方法拥有者（对象）.方法.call(另一个对象)
```



##### 函数是对象的方法

在 JavaScript 中，函数是对象的方法。

**如果一个函数不是 JavaScript 对象的方法，那么它就是全局对象的函数**（这个结论妙啊！！）



下面的例子创建了带有三个属性的对象（`firstName、lastName、fullName`）。

```js
var person = {
    firstName:"Bill",
    lastName: "Gates",
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
}
person.fullName();// "Bill Gates"
```

==`fullName` 属性是一个*方法*。person 对象是该方法的*拥有者*==。



call() 方法是预定义的 JavaScript 方法。

它可以用来调用所有者对象作为参数的方法。

通过 call()，您能够使用属于另一个对象的方法。

本例调用 person 的 fullName 方法，并用于 person1：



```js
var person = {
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
}
var person1 = {
    firstName:"Bill",
    lastName: "Gates",
}
var person2 = {
    firstName:"Steve",
    lastName: "Jobs",
}
person.fullName.call(person1);  // 将返回 "Bill Gates"
// 方法拥有者（对象）.方法.call(另一个对象)
```



##### 同时call方法可以接受参数 

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
person.fullName.call(person1, "Seattle", "USA");//Bill Gates,Seatle,USA

person.fullName.call(person1, "Seattle");//Bill Gates,Seatle,undefined
```



# 2021.9.29 *规划刷题路线 *给自己加几个DDL *学习指南小更

```js
// DDL
	01 尚硅谷JS高级 10.3学习完第一轮 10.4-7 一天复习一章 
	02 算法题 数组+排序算法 10.3学习完（可以算是复习）
    03 react 九月份完结两个小demo 上传至仓库
```



女票明天回天津嘞 今天上午再陪她玩耍一下~

下午班主任叫来一个大佬学长（是个放弃保研出国留学的学长 在班主任实验室在做研究）给分享下经验 开个班会

晚上有琴课 有一个报名参加的俩小时的“前端算法课程”



今天既然不是整块时间 那就做一些琐碎的任务（但是很重要！）吧 

- react五子棋今天必须搞定了 最好学明白一些 明天必须搞定尚硅谷的`todolist`  `ddl！！！！` 十一要开始做那个小册的内容勒！！

- 规划一下之后一个月左右的刷题路线 

  > 要做到每个解题方法都能掌握一些套路！
  >
  > 比如 看到数组的题 要能想到有几种解题方法 双指针、前缀和、贪心、动态规划 等等 
  >
  > 在面试时候要能说一些东西出来！

- 月总结 周总结 知识点总结（快四周的记录）

- 人工智能作业



小更一下每日学习导航

```js
// 今日主要收获 & 学习时间
// 逛b站、看漫画、聊qq/微信、打游戏 计时 每次30min娱乐时间MAX 饭后可以允许有一次 其他学习时间不要分心哦！
Totally min
1.前端基础知识 
// 从早上-中午 拿出一整块时间学习JS 晚上跑完步回来继续看JS 重视基础！
// 不要浮于表面地看问题 深入进去！多向自己提问！
    1.1 JS高级教程 min 
    // 每日重点！编码 + 知识点记录
    // 近期重点 作用域、闭包、原型链
		/*  */
    1.2 freecodecamp JS + 响应式网页设计 min
    	/*  */
    1.3 JS 30demos min
    // 每天完成一个 不要求完全理解 先做一个初步的认知
    // 没有完全了解的/觉得很好的 都要特意标记出来 二刷时候再去好好理解下！
    	/*  */
    
    // 这些内容都是要重点掌握的！
    DOM编程 BOM使用 —— 复习
    事件代理/委托
	事件队列(setTimeout/setInterval/Promise)
	JSON
    Ajax/Fetch
	正则表达式

2.核心基础知识
	2.1 计网 min
		/*  */
	2.2 操作系统 min
		/*  */

3.前端开发框架 
	3.1 react学习 min
    // 尚硅谷课程 官方文档五子棋demo
		/*  */
    
4.面试刷题
	4.1 刷算法 刷力扣 min	
    // 【1】阅读掘金小册 + 按照代码随想录推荐【2】刷题
    	/*  */   
    
    	// 每个阶段结束后 简单总结下应对某种数据结构/对应类型的题目 应该怎么去想
    	数组 + 排序 第五周
        链表 + 二叉树 第六周
        字符串 + 二叉树 + 栈/队列 第七周
        双指针 + 遍历专题DFS BFS 第八周
        回溯算法 + 贪心算法 第九周
        动态规划 第十周
    4.2 面试题 min
    // 有空可以读一些面试题 查缺补漏一下~
		/* 看了一下new一个实例对象会隐含着发生什么样的过程~ */  
5.前端进阶知识学习
// 学完JS再学这个辽！
    Node.js
	webpack
6.其他 
7.每日总结 min
```





## 1.前端基础



### 前端基础知识



```js
//每日学到的知识点 可以写文章 可以记在心里 总结下来！
// 本阶段主要学习JS高级教程（尚硅谷）刷freecodecamp
1.创建数组副本的方式 arr.slice()
2.利用slice拼接字符串！！！
```



#### 1.arr.slice()创建数组副本

```js
constructor(props){
    super(props);
    this.state = {
        squares: Array(9).fill(null),
        xIsNext: true,// x为下一步 设置为true 棋子移动一步 xIsNext反转一下
    };
}

const squareArr = this.state.squares.slice();
```





#### 2.通过slice方法拼接字符串 来达到各种目的

在使用JS完成字符串的题目时 可以使用slice方法秒杀！！

比如

```js
// 输入ABCDE
// 输出ABCDE DEABC BCDEA EABCD CDEAB
// 这样拼接就好了！！！超级简单
```

```js
string = 'ABCDE';
for(let i = 0; i < string.length; i++){
    console.log(string);
    string = string.slice(string.length - 2) + 	string.slice(0,string.length - 2);
}
```





## 2.核心基础知识

### 计网

```js
//小林的图解网络随时翻阅 & 极客时间趣谈网络协议+网上的文章 & 读图解HTTP TCP等书籍 & 网络抓包实操练习  深入理解
// 每天一道计网面试题 把自己带入面试者的身份 跟面试官白话白话 嗯就这样子
```





###  操作系统

```js
// 小林的图解系统 & 学校课程学习 & 王道考研-OS 三者配合 高效学习
// 要看一下学校的ppt了 课程旷了好几节有点听不懂！
日常停学
```



## 3.前端开发框架

### react基础知识

```js
// 先学习广受好评的react教程尚硅谷 
1.react中函数式组件和类式组件的区别
```

[react中函数式组件和类式组件的区别](https://www.cnblogs.com/ximenchuifa/p/14913479.html)

- 函数式组件一般用于比较简单的组件定义，类组件用于复杂的组件定义

- 函数组件中的this是undefined，类组件中的this指向的是当前组件的实例对象

- 函数组件是一个纯函数，它接收一个props对象（传入函数中）返回一个react元素；
  - 而类组件需要去继承`React.Component`并且创建render函数**返回react元素**。

- 函数组件没有生命周期和状态state，而类组件有。（然而现在函数组件有Hooks了 所以这条不成立了）

- 你不能在函数组件中使用生命周期钩子，原因和不能使用`state`一样，所有的生命周期钩子都来自于继承的`React.Component`中。（依旧是被Hooks解决了）

- 函数组件`ReactDOM.render`的过程：

```react
执行了ReactDOM.render(<MyComponent/>.......)之后，发生了什么？
	1.React解析组件标签，找到了MyComponent组件。
	2.发现组件是使用函数定义的，随后调用该函数，将返回的虚拟DOM转为真实DOM，随后呈现在页面中。
```

　　 类组件中ReactDOM.render的过程：

```react
执行了ReactDOM.render(<MyComponent/>.......)之后，发生了什么？
	1.React解析组件标签，找到MyComponent组件。
	2.发现组件是使用类定义的，随后new出来该类的实例，并通过该实例调用到原型上的render方法将render返回的虚拟DOM转为真实的DOM，随后呈现在页面中.
```



### react练手

```js
// 先过一遍原理 再去敲代码加深印象（freecodecamp）
// 五子棋demo
干掉五子棋demo
```



## 4.面试题

### 面试题、面经总结

```js
//网上面试题、面经辣么多 一天多看一些 然后同时也要研究一些题的答案！
```



### 力扣

```js
// 跟着代码随想录的内容进行学习！
```



# 2021.9.30 

```js
// DDL
	01 尚硅谷JS高级 10.3学习完第一轮 10.4-7 一天复习一章 
	02 算法题 数组+排序算法 10.3学习完（可以算是复习）
    03 react 九月份完结两个小demo 上传至仓库
```



```js
// 今日主要收获 & 学习时间
// 逛b站、看漫画、聊qq/微信、打游戏 计时 每次30min娱乐时间MAX 饭后可以允许有一次 其他学习时间不要分心哦！
Totally 330min
1.前端基础知识 
// 从早上-中午 拿出一整块时间学习JS 晚上跑完步回来继续看JS 重视基础！
// 不要浮于表面地看问题 深入进去！多向自己提问！
    1.1 JS高级教程 min 
    // 每日重点！编码 + 知识点记录
    // 近期重点 作用域、闭包、原型链
		/*  */
    1.2 freecodecamp JS + 响应式网页设计 40min
    	/* 写了一些熟悉数据结构的小题 */
    1.3 JS 30demos min
    // 每天完成一个 不要求完全理解 先做一个初步的认知
    // 没有完全了解的/觉得很好的 都要特意标记出来 二刷时候再去好好理解下！
    	/*  */
    
    // 这些内容都是要重点掌握的！
    DOM编程 BOM使用 —— 复习
    事件代理/委托
	事件队列(setTimeout/setInterval/Promise)
	JSON
    Ajax/Fetch
	正则表达式

2.核心基础知识
	2.1 计网 min
		/*  */
	2.2 操作系统 min
		/*  */

3.前端开发框架 
	3.1 react学习 180min
    // 尚硅谷课程 官方文档五子棋demo
		/* react基础练习 freecodecamp props state的概念 
		五子棋完善（时间旅行 这个好复杂啊！！ 回头再见）
        尚硅谷 todolist 一刷完结 */
    
4.面试刷题
	4.1 刷算法 刷力扣 110min	
    // 【1】阅读掘金小册 + 按照代码随想录推荐【2】刷题
    	/* 掘金小册2/28 代码随想录数组2/7  */   
    
    	// 每个阶段结束后 简单总结下应对某种数据结构/对应类型的题目 应该怎么去想
    	数组 + 排序 第五周
        链表 + 二叉树 第六周
        字符串 + 二叉树 + 栈/队列 第七周
        双指针 + 遍历专题DFS BFS 第八周
        回溯算法 + 贪心算法 第九周
        动态规划 第十周
    4.2 面试题 min
    // 有空可以读一些面试题 查缺补漏一下~
		/* 看了一下new一个实例对象会隐含着发生什么样的过程~ */  
5.前端进阶知识学习
// 学完JS再学这个辽！
    Node.js
	webpack
6.其他 
7.每日总结 min
```





## 1.前端基础



### 前端基础知识



```js
//每日学到的知识点 可以写文章 可以记在心里 总结下来！
// 本阶段主要学习JS高级教程（尚硅谷）刷freecodecamp
1.复习了一下入队（插入数组头部）的方法shift和在数组尾部删除的方法unshift
2.复习了一下用于从指定索引a处删除b个元素 更换为c的方法splice(a,b,c(可以插入多个))
3.复习了一下利用slice方法复制数组的元素
4.数组遍历法 forEach map方法
5.如果没有特殊需求（返回个全新的数组） 一律使用for循环 因为性能上来说 for循环最快XD 
6.Math.floor(i / 2) 与 i << 2 的区别 移位运算更快！！
```



#### 1.slice方法 提取元素到一个新数组

 `slice()` 不会修改数组，而是会复制，或者说*提取（extract）*给定数量的元素到一个新数组。 `slice()` 只接收 2 个输入参数：

- 第一个是开始提取元素的位置（索引）
- 第二个是提取元素的结束位置（索引）。 提取的元素中不包括第二个参数所对应的元素。

 如下示例：

```js
['snow', 'sleet']let weatherConditions = ['rain', 'snow', 'sleet', 'hail', 'clear'];

let todaysWeather = weatherConditions.slice(1, 3);

console.log(todaysWeather);// ['snow', 'sleet'] 这里todaysWeather就是我们创建的副本
```

`todaysWeather` 值为 `['snow', 'sleet']`，`weatherConditions` 值仍然为 `['rain', 'snow', 'sleet', 'hail', 'clear']`。

在上面的代码中，我们从一个数组中提取了一些元素，并用这些元素创建了一个新数组。



恰好昨天提到了两种slice方法的用法

- 1.arr.slice()创建数组副本

```js
constructor(props){
    super(props);
    this.state = {
        squares: Array(9).fill(null),
        xIsNext: true,// x为下一步 设置为true 棋子移动一步 xIsNext反转一下
    };
}

const squareArr = this.state.squares.slice();
```





- 2.通过slice方法拼接字符串 来达到各种目的

在使用JS完成字符串的题目时 可以使用slice方法秒杀！！

比如

```js
// 输入ABCDE
// 输出ABCDE DEABC BCDEA EABCD CDEAB
// 这样拼接就好了！！！超级简单
```

```js
string = 'ABCDE';
for(let i = 0; i < string.length; i++){
    console.log(string);
    string = string.slice(string.length - 2) + 	string.slice(0,string.length - 2);
}
```



#### 2.数组遍历法 `forEach`法和`map`法

##### `forEach`

```js
arr.forEach((item,index) => {
    console.log(item,index);//对应元素,索引
})
```

特点：可以在一次迭代中清晰地获得元素值&对应下标 写法简单 （高级）

##### `map`

```js
const newArr = arr.map((item, index) => {
    console.log(item, index);// 输出数组的元素值 输出当前索引
    return item + 1;// 返回“当前元素值全部+1”的数组
})
```

特点：不止用于遍历数组 还可以——

- 再加工数组（对数组内容做批量修改 且 修改的逻辑高度一致）
  - 通过map方法 可以return一个全新的数组

#### 3.移位运算 >> 更快！

```js
var a = Math.floor(3 / 2);// 1
var aa = 3 >> 1;// 1
// ....0011 右移一位 变为 ....0001
```

> 计算机进行乘除法是比较慢的 
>
> 对于加减法、移位运算是比较快的！
>
> 小数字也许不明显 但是在遇到很大的数字时 可以使用移位运算！！



## 2.核心基础知识

### 计网

```js
//小林的图解网络随时翻阅 & 极客时间趣谈网络协议+网上的文章 & 读图解HTTP TCP等书籍 & 网络抓包实操练习  深入理解
// 每天一道计网面试题 把自己带入面试者的身份 跟面试官白话白话 嗯就这样子
```





###  操作系统

```js
// 小林的图解系统 & 学校课程学习 & 王道考研-OS 三者配合 高效学习
// 要看一下学校的ppt了 课程旷了好几节有点听不懂！
```



## 3.前端开发框架

### react基础知识

```js
// 先学习广受好评的react教程尚硅谷 先快速过一下 再去实操！
```









### react练手项目

```js
// 先过一遍原理 再去敲代码加深印象（freecodecamp）
// 五子棋demo
干掉五子棋demo 干掉todolist demo 明天开始推进度！
```



## 4.面试题

### 面试题、面经总结

```js
//网上面试题、面经辣么多 一天多看一些 然后同时也要研究一些题的答案！
```



### 算法题

```js
// 跟着掘金小册、代码随想录的内容进行学习！
1.数组内存空间的地址是连续的（所以我们增删元素的时候难免要移动其他元素的地址）
2.leetcode704 二分查找  
	有比较繁琐的下表表示 记得定义一个变量来存储它！ middle = Math.floor((low + high) / 2);
	二分法
    位运算 >> 1 二进制右移一位 相当于/2（这样计算更快！）
```

#### 二分法

[二分法（Carl的题解戳这里）](https://programmercarl.com/0704.%E4%BA%8C%E5%88%86%E6%9F%A5%E6%89%BE.html#%E6%80%9D%E8%B7%AF)的关键就是 —— 

【1】选定一个区间

【2】保持不变量（循环不变量规则）—— 在while寻找中每一次边界的处理都要坚持根据区间的定义来操作

【3】二分法的区间定义分为：

- 左闭右闭 [left, right] 
- 左闭右开 [left, right)





# 2021.10.1

```js
// DDL
	01 尚硅谷JS高级 10.3学习完第一轮 10.4-7 一天复习一章 
	02 算法题 数组+排序算法 10.3学习完（可以算是复习）
    03 react 九月份完结两个小demo 上传至仓库
```



```js
// 今日主要收获 & 学习时间
// 逛b站、看漫画、聊qq/微信、打游戏 计时 每次30min娱乐时间MAX 饭后可以允许有一次 其他学习时间不要分心哦！
Totally 500min
1.前端基础知识 
// 从早上-中午 拿出一整块时间学习JS 晚上跑完步回来继续看JS 重视基础！
// 不要浮于表面地看问题 深入进去！多向自己提问！
    1.1 JS学习 80+110min 
    // 每日重点！编码 + 知识点记录
    // 近期重点 作用域、闭包、原型链 + ES6
		/* 80min的阮大的ES6学习 感觉许多细节受益匪浅！
        110min针对闭包的学习 还是有些一知半解 明天继续推进度 看一些题 多了解！*/
    1.2 freecodecamp JS + 响应式网页设计 min
    	/*  */
    1.3 JS 30demos 50min
    // 每天完成一个 不要求完全理解 先做一个初步的认知
    // 没有完全了解的/觉得很好的 都要特意标记出来 二刷时候再去好好理解下！
    /* 做了个视频播放器 */
    
    // 这些内容都是要重点掌握的！
    DOM编程 BOM使用 —— 复习
    事件代理/委托
	事件队列(setTimeout/setInterval/Promise)
	JSON
    Ajax/Fetch
	正则表达式

2.核心基础知识 下午开始学计网 + 刷题
	2.1 计网 80min
		/* 又来折腾了一下HTTPS协议 对比了超文本传输协议HTTP与HTTPS
        回忆了一下为啥TCP四次挥手中主动断开连接那一方要等待2MSL再关闭 RFC一句话说清楚！“使得属于当前连接的所有包都消失掉，这样下次再次使用相同的端口建立连接时 不会有属于上一个连接的滞留在网络中的包对连接产生干扰！”*/
	2.2 操作系统 min
		/*  */

3.面试刷题
	3.1 刷算法 刷力扣 120min	
    // 【1】阅读掘金小册 + 按照代码随想录推荐【2】刷题
    	/* 掘金小册2/28 代码随想录数组3/7 
        刷了一个medium的二维数组 90分钟才根据提示做出来...难点是顺时针给矩阵赋值 要点是四个方向的代码都要分别设置 找到对应的规律
        */   
    
    	// 每个阶段结束后 简单总结下应对某种数据结构/对应类型的题目 应该怎么去想
    	数组 + 排序 第五周
        链表 + 二叉树 第六周
        字符串 + 二叉树 + 栈/队列 第七周
        双指针 + 遍历专题DFS BFS 第八周
        回溯算法 + 贪心算法 第九周
        动态规划 第十周
    3.2 面试题 min
    // 有空可以读一些面试题 查缺补漏一下~
		/*  */  
    
4.前端开发框架 
	4.1 react学习 50min
    // 尚硅谷课程 官方文档五子棋demo
		/* 收尾第一个案例 为之后的学习做个规划 */
    

5.前端进阶知识学习
// 学完JS再学这个辽！
    Node.js
	webpack
6.其他 
7.每日总结 10min
```





## 1.前端基础



### 前端基础知识



```js
//每日学到的知识点 可以写文章 可以记在心里 总结下来！
// 本阶段主要学习JS高级教程（尚硅谷）刷freecodecamp
1.ES6之前没有块级作用域可能出现的问题
2.const保证变量指向的那个内存地址不得改动（本质）
3.使用扩展运算符拷贝数组
4.将一切类数组转为数组的最佳方法
5.函数提升造成的闭包
6.闭包的作用、应用、缺点
```



#### 1.ES5没有块级作用域可能出现的问题

[为什么需要块级作用域？](https://es6.ruanyifeng.com/#docs/let#%E4%B8%BA%E4%BB%80%E4%B9%88%E9%9C%80%E8%A6%81%E5%9D%97%E7%BA%A7%E4%BD%9C%E7%94%A8%E5%9F%9F%EF%BC%9F)

- 内层变量可能会覆盖外层变量。

```javascript
var tmp = new Date();

function f() {
  console.log(tmp);
  if (false) {
    var tmp = 'hello world';
  }
}

f(); // undefined
```

上面代码的原意是，`if`代码块的外部使用外层的`tmp`变量，内部使用内层的`tmp`变量。但是，函数`f`执行后，输出结果为`undefined`，原因在于变量提升，导致内层的`tmp`变量覆盖了外层的`tmp`变量。

- 用来计数的循环变量泄露为全局变量。

```javascript
var s = 'hello';

for (var i = 0; i < s.length; i++) {
  console.log(s[i]);
}

console.log(i); // 5
```

上面代码中，变量`i`只用来控制循环，但是循环结束后，它并没有消失，泄露成了全局变量。

- 块级作用域的出现，实际上使得获得广泛应用的匿名立即执行函数表达式（匿名 IIFE）不再必要了。

```javascript
// IIFE 写法
(function () {
  var tmp = ...;
  ...
}());

// 块级作用域写法
{
  let tmp = ...;
  ...
}
```



#### 2.const保证变量指向的那个内存地址不得改动（本质）

- 对于简单类型的数据（数值、字符串、布尔值），值就保存在**变量指向的那个内存地址**，因此等同于常量。
- 但对于复合类型的数据（主要是对象和数组），变量指向的内存地址，保存的只是一个**指向实际数据的指针**，`const`只能保证这个指针是固定的（即总是指向另一个固定的地址），至于它指向的数据结构是不是可变的，就完全不能控制了。

因此，将一个对象声明为常量必须非常小心。

```javascript
const foo = {};

// 为 foo 添加一个属性，可以成功
foo.prop = 123;
foo.prop // 123

// 将 foo 指向另一个对象，就会报错
foo = {}; // TypeError: "foo" is read-only
```

上面代码中，常量`foo`储存的是一个地址，这个地址指向一个对象。不可变的只是这个地址，即不能把`foo`指向另一个地址，但对象本身是可变的，所以依然可以为其添加新属性。



下面是另一个例子。

```javascript
const a = [];
a.push('Hello'); // 可执行
a.length = 0;    // 可执行
a = ['Dave'];    // 报错
```

上面代码中，常量`a`是一个数组，这个数组**本身是可写的**，但是如果将另一个数组赋值给`a`，就会报错。

如果真的想将对象冻结，应该使用`Object.freeze`方法。

```javascript
const foo = Object.freeze({});

// 常规模式时，下面一行不起作用；
// 严格模式时，该行会报错
foo.prop = 123;
```



#### 3.使用扩展运算符拷贝数组

```js
item = [b,i,l,l,b,e,s,t];
const itemsCopy = [...item];// 方便快捷的复制！
```



#### 4.将一切类数组转为数组的最佳方法

```js
str = "billBest";
// const arr = str.split(""); 如果没有“根据某个字符分割字符串”的需求 就不用这个方法
const arr = Array.from(str);
```

这个强大的ES6方法可以将类似数组的**对象**转为数组。

```javascript
const foo = document.querySelectorAll('.foo');
const nodes = Array.from(foo);
```

#### 5.[箭头函数使用场景](https://es6.ruanyifeng.com/#docs/style#%E5%87%BD%E6%95%B0)

那些使用匿名函数当作参数的场合，尽量用箭头函数代替。因为这样更简洁，而且绑定了 this。

```javascript
// bad
[1, 2, 3].map(function (x) {
  return x * x;
});

// good
[1, 2, 3].map((x) => {
  return x * x;
});

// best
[1, 2, 3].map(x => x * x);
```

#### 6.函数提升造成的闭包



- 先来看个最简单的例子

```js
function Fun(){
    var a = 1;
    function foo(){
        console.log(a);
    }
}
var f = new Fun();
f();// undefined
// 由于内部函数调用 产生了闭包
```

当**嵌套的内部函数引用了外部函数的变量**时就产生了闭包

闭包形成过程如下：

![在这里插入图片描述](https://img-blog.csdnimg.cn/20200326104519857.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM2NjY3MTcw,size_16,color_FFFFFF,t_70)

> 参考：[详细解析 JavaScript 闭包](https://blog.csdn.net/qq_36667170/article/details/105104940)

很明显这个过程发生了函数提升！

![在这里插入图片描述](https://img-blog.csdnimg.cn/20200326101328691.png)

通过chrome工具得知: 闭包**本质是内部函数中的一个对象,** 这个对象中包含引用的变量属性（上图中的a 且值为undefined）



```js
function Fun(){
    var a = 1;
    var foo = function(){//function foo(){ 也ok
        a++;
        console.log(a);
    }
    return foo
}
var f = new Fun();
f();// 2
f();// 3
// 过程中foo被解析 调用了全局变量a 形成闭包（闭包对象为Fun）
```



小结下闭包形成的条件——

- 【1】函数嵌套
- 【2】内存函数中有（引用了）外层函数的变量

#### 7. 闭包作用、应用、缺点

- 闭包作用

  - 延长局部变量的生命周期
  - 让函数外部能操作内部的局部变量

- 闭包的应用

  - 模块化——
    - 封装一些数据/操作数据的函数 向外暴露一些行为
  - 循环遍历 + 监听
  - JS框架（jQuery）中大量使用了闭包

- 闭包的缺点

  - 变量占用内存的事件可能会过长（毕竟延长了局部变量的生命周期嘛~ 如果只用一次方法 那么一直占着这个空间就很浪费）——

  ```js
  function fn1(){
      var arr = new Array[10000000]
      function fn2(){
          console.log(arr.length);
      }
      return fn2;
  }
  var f = fn1();
  f();// fn1形成闭包 本该释放的arr变量现在不会被释放！
  ```

  所以需要及时释放

  ```js
  f = null;// 解放空间！
  ```

  

  - 可能导致==内存溢出==（面试高频）

  ```js
  var obj = {};
  for(var i = 0; i < 10000; i++){
      obj[i] = new Array(1000000);// new Array(1000000)定义一个长度为1000000的数组
      console.log('------')
  }// 这个代码会导致内存溢出 浏览器会做一个崩溃的设置 终止程序
  ```

  

  - 可能会导致==内存泄露==（一块内存空间被长期占用而不被释放）

  ```js
  function fn(){
      a = new Array(1000000);// a为意外的全局变量 会造成内存泄漏
      console.log(a);
  }
  fn();// a变量不会被回收 一直存在 
  ```

  - 解决以上缺点——
    - 让内部函数对象`f`成为垃圾对象



#### 8.两道面试题

##### 面试题1

```js
var name = "The Window";
var object = {
    name: "My Object",
    getNameFunc: function () {
        return function () {
            return this.name;
        };
    }
};
console.log(object.getNameFunc()());  // The Window
// this指向的是全局变量（毕竟是在全局中被调用的 也没有闭包）
// 没有闭包 外层函数压根没变量嘛~
```



```js
var name2 = "The Window";
var object2 = {
    name2: "My Object",
    getNameFunc: function () {
        var that = this;
        return function () {
            return that.name2;
        };
    }
};
console.log(object2.getNameFunc()()); // My Object
// 这里的that是this 是object2
// 有闭包 闭包为that 被保存起来了
```

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/19522227c1674b9c95a67557d890e219~tplv-k3u1fbpfcp-watermark.image?)

很显然 这里的name2就是内部的`“My Object”`

## 2.核心基础知识

### 计网

```js
//小林的图解网络随时翻阅 & 极客时间趣谈网络协议+网上的文章 & 读图解HTTP TCP等书籍 & 网络抓包实操练习  深入理解
// 每天一道计网面试题 把自己带入面试者的身份 跟面试官白话白话 嗯就这样子
1.“HTTP和HTTPS有什么区别？
	// 聊一下Https的连接过程
    // 输入 www.baidu.com，怎么变成 https://www.baidu.com 的，怎么确定用HTTP还是HTTPS？
	// HTTPS连接的时候 怎么确定收到的包是服务器发来的？（中间人攻击）
	// 什么是对称加密、非对称加密？区别是什么？
	// 数字签名、报文摘要的原理	
	// HTTPS解决了HTTP的哪些问题？怎么解决的？
	”
2.RFC1337 几句话解释“四次挥手主动发起关闭连接的一方 为什么要有TIME_WAIT状态”
```



#### 聊聊HTTP HTTPS的区别 

https://github.com/wolverinn/Waking-Up/blob/master/Computer%20Network.md#http%E5%92%8Chttps%E6%9C%89%E4%BB%80%E4%B9%88%E5%8C%BA%E5%88%AB

- 【1】端口不同
  - HTTP 80端口
  - HTTPS 443端口
- 【2】传输方式不同
  - HTTP的信息是 明文传输（存在安全风险）
  - HTTPS运行在SSL（安全协议）之上 添加了加密和认证机制 使得报文能够加密传输（解决了HTTP不安全的缺陷）
- 【3】建立连接的方式不同
  - HTTP —— TCP三次握手之后就可以进行HTTP的报文传输了
  - HTTPS —— TCP三次握手 + SSL/TLS握手 才可以进入加密报文传输（在TCP传输层和HTTP应用层之间加入了SSL/TLS协议）

![请添加图片描述](https://img-blog.csdnimg.cn/22ed1349ab5641b4a09cdf7763f13d43.png)

- 【4】HTTPS带来的开销较大
  - 由于加密、解密 会带来更大的CPU和内存开销
- 【5】HTTPS通信需要证书 **来保证服务器的身份是可信的！**
  - 一般需要向证书颁发机构(CA 证书权威机构)申请购买~





##### 1.[HTTPS的连接过程](https://github.com/wolverinn/Waking-Up/blob/master/Computer%20Network.md#https%E7%9A%84%E8%BF%9E%E6%8E%A5%E8%BF%87%E7%A8%8B)

- 【1】客户端 向 服务器发送——

  - 请求
  - 客户端支持的一套加密规则
    - 对称加密算法
    - 非对称加密算法（采用混合加密~）
    - 摘要算法

- 【2】服务器从中选出一组加密算法和HASH算法 并将自己的身份信息以——

  - 证书
    - 网站地址
    - **加密公钥**（用于**非对称加密**）
    - 证书的颁发机构 等信息
    - （私钥只能用于服务器端进行解密~）

  的形式发回给浏览器（客户端）

- 【3】客户端 验证 服务器的合法性

  - 证书是否过期 / CA(证书权威机构)是否可靠 
  - 发行者证书的公钥能否正确解开服务器证书的”发行者的数字签名“ 
  - 服务器证书上的域名是否和服务器的实际域名相匹配 

- 【4】如果证书受信任 或者用户接受了不受信任的证书 

  - 浏览器会生成一个**随机密钥**（用于**对称算法**）
    - 并用服务器提供的**公钥加密**（采用非对称算法对密钥加密）
  - 浏览器会使用Hash算法（**摘要算法**）对握手消息进行摘要计算
    - 并对摘要使用之前产生的密钥加密（**对称算法**）
  - 最后 客户端将加密后的随机密钥和摘要一起发送给服务器

- 【5】服务器用自己的私钥解密 得到——对称加密的密钥 用这个密钥解密出Hash摘要值 并验证握手消息是否一致——

  - 如果一致 服务器使用对称加密的**密钥加密握手消息**发给浏览器

- 【6】浏览器解密并验证摘要 若一致 则握手结束

  - 之后的数据传送**都使用对称加密的密钥**进行加密

总结：1.使用的混合加密算法中的——

- 非对称加密算法 用于在握手过程中加密生成的代码（也就是通信建立之前使用非对称加密）
- 对称加密算法 用于对真正传输的数据进行加密

![请添加图片描述](https://img-blog.csdnimg.cn/3de331f52a0f4778ab1bd691b06ad67d.png)

2.摘要算法用于验证数据的完整性（相当于”指纹“ 预防了”第三方篡改“的风险）

![请添加图片描述](https://img-blog.csdnimg.cn/2d22159e59964e4081ddfc1628039745.png)

> 2-5中的内容 择日再聊！

##### 2.输入 `[www.baidu.com`，怎么变成`https://www.baidu.com` 的，[怎么确定用HTTP还是HTTPS？](https://github.com/wolverinn/Waking-Up/blob/master/Computer%20Network.md#https%E8%BF%9E%E6%8E%A5%E7%9A%84%E6%97%B6%E5%80%99%E6%80%8E%E4%B9%88%E7%A1%AE%E5%AE%9A%E6%94%B6%E5%88%B0%E7%9A%84%E5%8C%85%E6%98%AF%E6%9C%8D%E5%8A%A1%E5%99%A8%E5%8F%91%E6%9D%A5%E7%9A%84%E4%B8%AD%E9%97%B4%E4%BA%BA%E6%94%BB%E5%87%BB)





##### 3.HTTPS连接的时候，怎么确定收到的包是服务器发来的（中间人攻击）？





##### 4.什么是对称加密、非对称加密？区别是什么？







##### 5.数字签名、报文摘要的原理







##### 6.HTTPS解决了HTTP的哪些问题？怎么解决的？

###### HTTP在安全上存在哪些问题？

HTTP由于是明文传输 所以安全上存在以下三个风险

- **窃听风险**，比如通信链路上可以获取通信内容，用户号容易没。
- **篡改风险**，比如强制入垃圾广告，视觉污染，用户眼容易瞎。
- **冒充风险**，比如冒充淘宝网站，用户钱容易没。



###### HTTPS如何解决这些问题？

- 【1】通过**混合加密**的方式实现信息的<u>机密性</u> 解决了==窃听==的风险

![混合加密](https://mmbiz.qpic.cn/mmbiz_jpg/J0g14CUwaZfXG1113Sjm0iaOXfoOv0tlUYNGEmfY95A74GR3xicqXKZCDI7Q4icgQu7CuSSx9QiaFlr4Py49RHonjw/640?wx_fmt=jpeg)

HTTPS 采用的是**对称加密**和**非对称加密**结合的「混合加密」方式：

- 在通信建立前采用**非对称加密**的方式交换「会话秘钥」，后续就不再使用非对称加密。
- 在通信过程中全部使用**对称加密**的「会话秘钥」的方式加密明文数据。

采用「混合加密」的方式的原因：

1. **对称加密**只使用一个密钥，运算速度快，密钥必须保密，**无法做到安全的密钥交换**。
2. **非对称加密**使用两个密钥：公钥和私钥，公钥可以任意分发而私钥保密，解决了密钥交换问题但**速度慢**。

结合二者的特性 在通信建立的时候采用速度慢但是可以进行 **密钥的安全交换（公钥）**的非对称加密

在建立好通信之后 全程使用 无法进行密钥交换（只用一个私钥）但是可以**快速加密与解密** 的对称加密

- 【2】通过**摘要算法**的方式来实现完整性 为数据生成独一无二的「指纹」，指纹用于<u>校验数据的完整性</u>，解决了==篡改==的风险。

![img](https://mmbiz.qpic.cn/mmbiz_jpg/J0g14CUwaZfXG1113Sjm0iaOXfoOv0tlUicIliaBcr2XAXpMdeibLG4MMticpkX0e6xZHbXeiavMu7faJcL2TdVj0Udw/640?wx_fmt=jpeg)

客户端在发送明文之前会通过摘要算法算出明文的「指纹」，发送的时候把「指纹 + 明文」一同加密成密文后，发送给服务器；

服务器解密后，用相同的摘要算法算出发送过来的明文，通过比较客户端携带的「指纹」和当前算出的「指纹」做比较，**若「指纹」相同，说明数据是完整的**。

- 【3】通过**将服务器公钥放入数字证书中** 解决了==冒充==的风险

客户端先向服务器端索要公钥，然后用公钥加密信息，服务器收到密文后，用自己的私钥解密。

这就存在些问题，如何**保证公钥不被篡改和信任度**？

所以这里就需要借助第三方权威机构 `CA` （数字证书认证机构），将**服务器公钥放在数字证书**（由数字证书认证机构颁发）中，只要证书是可信的，公钥就是可信的。

![数子证书工作流程](https://mmbiz.qpic.cn/mmbiz_jpg/J0g14CUwaZfXG1113Sjm0iaOXfoOv0tlUibyiaEab7NMrTn632LZmYQe5qaibibT0xsOs7ic6u98ypWJBjbPMzOUCb2g/640?wx_fmt=jpeg)

一句话小结：通过数字证书的方式**保证服务器公钥的身份**（将服务器公钥放在数字证书中 客户端使用CA的公钥确认服务器的数字证书后即可保证服务器公钥的身份），解决冒充的风险。

#### 聊到TCP断连四次挥手——为啥主动发起关闭连接的一方要有2MSL的等待时间

![img](https://mmbiz.qpic.cn/mmbiz_png/J0g14CUwaZf04ocOBfJJvknPu7kMF72hYrAgCC8BIkDMasg5cx0lDzhQmbLUWCamIydDOxwuiaNzr01L5ZteWGg/640?wx_fmt=png)

TIME_WAIT这个等待阶段会持续2MSL的时间——

![图片](https://mmbiz.qpic.cn/mmbiz_png/J0g14CUwaZeo9xBVAyPJ8iaWCC6sYS843KaMMu2mHfFLZNgiaREDZ5JicRYrlaiciayQjh9HDsacxIbMT0emGUpAX5w/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

这是为了 使得**属于当前连接的所有包都消失掉**

这样做可以保证再次使用相同端口建立连接时 不会有属于上一个连接的滞留在网络中的包对连接产生干扰！







###  操作系统

```js
// 小林的图解系统 & 学校课程学习 & 王道考研-OS 三者配合 高效学习
// 要看一下学校的ppt了 课程旷了好几节有点听不懂！
```



## 3.面试题

### 面试题、面经总结

```js
//网上面试题、面经辣么多 一天多看一些 然后同时也要研究一些题的答案！
```



### 算法题

```js
// 跟着掘金小册、代码随想录的内容进行学习！
1.复习了一下二维数组的初始化方法
2.超级刷题挑战 一天3+题！
	59.螺旋矩阵II 被卡住了 跟着提示做出来的！90min
    今天刷题量没达标！正在适应刷题节奏 给的刷题时间有点少！ + 今天这题有点难搞
```

[59.螺旋矩阵II 代码随想录](https://programmercarl.com/0059.%E8%9E%BA%E6%97%8B%E7%9F%A9%E9%98%B5II.html#_59-%E8%9E%BA%E6%97%8B%E7%9F%A9%E9%98%B5ii)



#### 使用map初始化二维数组

```js
const arr = new Array(8).fill(0).map(() => new Array(6).fill(9));// 8行 6列 所有元素为9的 二维数组
```



## 4.前端开发框架

### 项目开发前置知识

```js
// 学到了尚硅谷react第四章 老师表示 “先学完Ajax Promise axios再回来吧！”
```





### react基础知识

```js
// 现阶段学习广受好评的react教程尚硅谷 
Todolist案例相关知识点
```



#### 尚硅谷Todolist案例知识点

​    1.拆分组件、实现静态组件，注意：className、style的写法

​    2.动态初始化列表，如何确定将数据放在哪个组件的state中？

​          ——某个组件使用：放在其自身的state中

​          ——某些组件使用：放在他们共同的父组件state中（官方称此操作为：**状态提升**）

​    3.关于父子之间通信：

​        1.【父组件】给【子组件】传递数据：通过props传递

​        2.<u>【子组件】给【父组件】传递数据：</u>通过props传递，要求**父提前给子传递一个函数**

​    4.注意`defaultChecked` 和 `checked`的区别，类似的还有：`defaultValue` 和 `value`

​    5.状态在哪里，操作状态的方法就在哪里



### react练手项目

```js
// 尚硅谷课程接下来的案例
// 掘金 记账本egg.js+react全栈 
```



# 2021.10.2

学JS高级的各种内容有点上头

东西真多啊哈哈！

明天完结JS高级 然后复习个几天~！

刷题又是被卡了好久 下回出现那种需要调好久才能怼上一个用例的代码 就可以思考下自己是哪里想得复杂+不好了！

用更简练、直观、合理的代码和思路去解题！

```js
// DDL
	01 尚硅谷JS高级 10.3学习完第一轮 10.4-7 一天复习一章 
	02 算法题 数组+排序算法 10.3学习完（可以算是复习）
    03 Ajax 10.3 Promise 10.4 axios 10.5
```



```js
// 今日主要收获 & 学习时间
Totally 460min
1.前端基础知识 
// 从早上-中午 拿出一整块时间学习JS 晚上跑完步回来继续看JS 重视基础！
// 不要浮于表面地看问题 深入进去！多向自己提问！
    1.1 JS学习 50+180min 
    // 每日重点！编码 + 知识点记录
    // 近期重点 作用域、闭包、原型链 + ES6 + Ajax axios
		/* 折腾闭包 最后使用的执行上下文 激活对象AO解决的问题 说明这两块知识点连接很紧密！
		其实简单来说 闭包形成的原因 就是因为内部函数存在外部作用域的引用！闭包中的变量会存储在堆内存 导致了一些函数内的值会被保存下来 实现方法和属性的私有化——面试题3中体现得淋漓尽致！
        然而 对闭包得了解还不够 回头需要结合着作用域的知识点再重学一下闭包！当然了 也要多看一些题*/
    1.2 freecodecamp JS + 响应式网页设计 min
    	/*  */
    1.3 JS 30demos min
    // 每天完成一个 不要求完全理解 先做一个初步的认知
    // 没有完全了解的/觉得很好的 都要特意标记出来 二刷时候再去好好理解下！
    	/*  */
    
    // 这些内容都是要重点掌握的！
    DOM编程 BOM使用 —— 复习
    事件代理/委托
	事件队列(setTimeout/setInterval/Promise)
	JSON
    Ajax/Fetch
	正则表达式

2.核心基础知识 下午开始学计网 + 刷题
	2.1 计网 min
		/*  */
	2.2 操作系统 min
		/*  */

3.面试刷题
	3.1 刷算法 刷力扣 150min	
    // 【1】阅读掘金小册 + 按照代码随想录推荐【2】刷题
    	/* 掘金小册 3/28 代码随想录数组3/7 
        刷了一道和昨天差不多的 螺旋矩阵 可把我难住了！比昨天用的时间还多
        主要是有点陷入昨天题目的做法里了！今天找到超棒的方法！感觉 螺旋矩阵II也可以这么做~~（会繁琐一些 但是好想且形象很多！画面感十足！定下top left right bottom 框住每一轮的循环 当遇到top=bottom left=right的情况 再单独进行遍历那一行！真不错！）
        */   
    
    	// 每个阶段结束后 简单总结下应对某种数据结构/对应类型的题目 应该怎么去想
    	数组 + 排序 第五周
        链表 + 二叉树 第六周
        字符串 + 二叉树 + 栈/队列 第七周
        双指针 + 遍历专题DFS BFS 第八周
        回溯算法 + 贪心算法 第九周
        动态规划 第十周
    3.2 面试题 min
    // 有空可以读一些面试题 查缺补漏一下~
		/*  */  
    
4.前端开发框架 
	4.1 react学习 min
    // 尚硅谷课程 官方文档五子棋demo
		/*  */
    

5.前端进阶知识学习
// 学完JS再学这个辽！
    Node.js
	webpack
6.其他 
	毛概作业 70min
7.每日总结 10min
```





## 1.前端基础



### 前端基础知识



```js
//每日学到的知识点 可以写文章 可以记在心里 总结下来！
// 本阶段主要学习JS高级教程（尚硅谷）刷freecodecamp
1.对象的创建模式——直接在构造函数中定义方法 会让每个创建出来的对象都带上那个方法 比较占内存 将方法定义在原型上可以节省内存！
2.在JS中实现继承！
3.复习new一个对象背后做了啥
4.闭包面试题复习
```



#### 1.对象的创建模式

- 构造函数模式 —— 定义方法时 再创建对象 会占内存~

```js
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.setName = function(name){this.name=name;};
}
var p1 = new Person('tom', 12);
var p2 = new Person('jerry', 16);
```

这两个对象上都会带一个方法——浪费内存！

![在这里插入图片描述](https://img-blog.csdnimg.cn/ffae8dc0c7224d6393e726dba4742cf1.png)

- 构造函数+原型的组合模式 —— 最省内存~

```js
function Person(name, age) {
  this.name = name;
  this.age = age;
}
// 简单来说 代码就是这样~
Person.prototype.setName = function(name){this.name=name;};
new Person('tom', 12);
```



![image-20211002140717986](README.assets/image-20211002140717986.png)



#### 2.【面试题】JS中实现继承

简单来说 有三种方式

- 原型链继承
- 借用构造函数
- 组合

分别来看看原理

- 【1】原型链继承 —— 子类型继承得到方法
  - 通过`Child.prototype = new Parent()`继承父函数 从而继承了属性与方法
  - **缺点**：通过Child构造的对象 的原型对象 的 `constructor` 属性指向Parent！这不好！
    - 我们需要让子类型的原型的 `constructor`  指向子类型 才对！
    - 这个问题可以通过 `Child.prototype.constructor = Child;` 来修正constructor属性

```js
// 定义父函数、父函数原型上的方法、子函数
function Parent(){}
Parent.prototype.test = function(){};
function Child(){}
// 实现继承的关键一步 
Child.prototype = new Parent();// 出现了！new关键字！创建了父类的实例 让Child子类型的原型指向父类型实例！

var child = new Child(); // Child对象实例中有test() （当然了 父类型的属性也会被继承过来！）
```

画一个继承的示意图（从内存的角度来看）

![在这里插入图片描述](https://img-blog.csdnimg.cn/b32d8872931d43888b9fec5889e3d1cd.png)



- 【2】借用构造函数 : 得到属性（这个其实不算继承拉~）

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





#### 3.复习下“new要给对象背后做了什么？”

之前写的文章——[JS小知识 new关键字都做了什么？](https://juejin.cn/post/7012887169878458404) 举了例子 

这里再说一下（并配上原型链的图）

![在这里插入图片描述](https://img-blog.csdnimg.cn/ac15bad11c2c4e64a323d2143f687d47.png)

- 创建一个空对象（也就是Object的实例对象）
- 给实例对象设置`__proto__`, 值为构造函数对象的prototype属性值
  - 也就是   `this.__proto__ = Fn.prototype`

- 执行构造函数体 将构造函数的作用域赋值给新对象（给对象添加方法/属性）之后this关键字指向新创建的对象实例 
  - co对象实例就可以使用`this.func() this.name` 来调用方法和属性了！



#### 4.三道闭包面试题&闭包的定义

【在 JavaScript 中，每当创建一个函数，闭包就会在函数创建的同时被创建出来。】
[MDN官方文档解释闭包](https://link.segmentfault.com/?url=https%3A%2F%2Fdeveloper.mozilla.org%2Fzh-CN%2Fdocs%2FWeb%2FJavaScript%2FClosures)



> 个人觉得闭包没有那么复杂，本质就是上级作用域内变量的生命周期，因为被下级作用域内引用，而没有被释放。就导致上级作用域内的变量，等到下级作用域执行完以后才正常得到释放。（个人理解，若有错误，欢迎指正）

https://juejin.cn/post/6844903858636849159#refetch中的评论

> 在 JS 忍者秘籍(P90)中对闭包的定义：闭包允许函数访问并操作函数外部的变量。
>
> 红宝书上对于闭包的定义：闭包是指有权访问另外一个函数作用域中的变量的函数。 
>
> MDN 对闭包的定义为：闭包是指那些能够访问自由变量的函数。这里的自由变量是外部函数作用域中的变量。

> 概述上面的话，**闭包是指有权访问另一个函数作用域中变量的函数**
> 作者：`LinYIYI`
> 链接：https://juejin.cn/post/6937469222251560990



##### 面试题1 this指向的问题

```js
var name = "The Window";
var object = {
    name: "My Object",
    getNameFunc: function () {
        return function () {
            return this.name;
        };
    }
};
console.log(object.getNameFunc()());  // The Window
// this指向的是全局变量（毕竟是在全局中被调用的 也没有闭包）
// 没有闭包 外层函数压根没变量嘛~
```





```js
var name2 = "The Window";
var object2 = {
    name2: "My Object",
    getNameFunc: function () {
        var that = this;
        return function () {
            return that.name2;
        };
    }
};
console.log(object2.getNameFunc()()); // My Object
// 这里的that是this 是object2
// 有闭包 闭包为that 被保存起来了
```

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/19522227c1674b9c95a67557d890e219~tplv-k3u1fbpfcp-watermark.image?)

很显然 这里的name2就是内部的`“My Object”`

##### 面试题2 超级经典 面试必考

```js
var data = [];

for (var i = 0; i < 3; i++) {
  data[i] = function () {
    console.log(i);
  };
}

data[0]();// 3
data[1]();// 3
data[2]();// 3
```

[结合 VO AO解答问题](https://github.com/mqyqingfeng/Blog/issues/9) 



##### 难度较大 面试题3

- 这题的重点前置知识是——执行期上下文的概念（每当有一个函数被调用的时候就会产生一个**执行上下文对象** AO 也叫 激活对象Activation Object)

  > - 就是每进入一个执行上下文时，这个执行上下文儿中的**激活对象AO**就被激活，也就是该上下文中的函数标示符、形参、变量声明等就可以被访问到了

```js
  function fun(n, o) {
    console.log(o)
    return {
      fun: function (m) {
        return fun(m, n);// n导致的闭包~
      }
    }
  }
  var a = fun(0)// o未定义  a是个对象
  a.fun(1)// 产生了新的闭包 因为执行外部函数——外部的那个fun 但是马上就消失了（因为没有用这个闭包 马上抛弃了这个对象 相应的当前闭包就消失了）
//所以这三行内容 都是用的a 也就是fun(0)的闭包 
// fun(0).fun(1) 传进去n=0 形成闭包 
  a.fun(2)
  a.fun(3) //四个调用的打印为 undefined,0,0,0

  var b = fun(0).fun(1).fun(2).fun(3) //undefined,0,1,2

  var c = fun(0).fun(1)
  c.fun(2)
  c.fun(3) //undefined,0,1,1
```

【1】`var a = fun(0)  console.log(a)`

![在这里插入图片描述](https://img-blog.csdnimg.cn/905ea79213004eea8ad7446a7153d687.png)

再用`a.fun(1)` 产生n:1的闭包 但是没有用 传进去的n依旧是a中确定的0

【2】

`fun(0).fun(1)` —— 闭包中的n为0 打印出来的结果也为0

`fun(0).fun(1).fun(2)` —— 闭包（fun(0).fun(1)）中的n为 1 结果也为1

> b站大佬给出的分析
>
> 省流大师——看第六和第七步 解释齐全 看不懂的回头看前面的前置知识
>
> > ```js
> > function fun(n,o) {//简称f1
> > 	console.log(o)
> > 	return {
> > 		fun:function(m){ //这里简称f2
> > 			return fun(m,n)
> > 		}
> > 	}
> > }
> > var a = fun(0) // 0
> > a.fun(1) // 0
> > ```
> >
> > 需要掌握的知识点
> > 1.**执行期上下文**(又名 预编译)
> > -----1.1 执行期上下文的执行顺序 当**一个函数调用他就会生成一个AO对象** (全局的叫GO我不详细讲了)
> > 只要知道下面这些就可以了
> > ---------1.1.1 当一个函数调用 **在AO中 先拿到函数中 声明的所有变量(var 的变量) 赋值为undefined**
> > ---------1.1.2 实参形参相统一
> > ---------1.1.3 里面的函数声明 函数名作为属性名  属性名=函数体 然后挂到AO对象上
> > ---------1.1.4 最终已经看过的 变量声明 实参 函数声明 都不看了 去解释一行执行一行 变量看AO里的
> >
> > **2.闭包分析问题**
> > 1.f1执行 里面定义的函数 会**拿到f1的执行期上下文**(AO对象 这里简称AO1)
> > 2.f1执行 上面的var a=fun(0) 里面的AO对象 n=0 (**AO1 ==n=0,o=undefined==**) —— 所以第九行的代码执行后 打印 undefined（o的值）
> > 3.当f1执行完毕 会**返回一个==对象 也就是a==** **里面有个函数引用f2**
> >
> > 4.`a.fun(1)` f2执行生成自己的AO(简称AO2) **AO2里(==m=1==)** 里面**马上又执行了外面的f1**
> > ---**此时外面的f1生成了新的AO 里面的值(==n=1【就是AO2里的m】,o=0【AO1里的o】==)**//或许应该叫它AO3 —— 所以第十行的代码执行后 打印 0（o的值）
> > ---这里是重点 AO2 就是**f2的执行期上下文里没有f2(m,n) 中的n**(参见1.1.2) 它==去AO1里拿的== 第二步有说道此时AO1里的n是几
> >
> > 5.但这都不重要 反正你也**没外部保存这个AO3** 当没有变量接收它的引用地址就被自动销毁了(不懂也不要紧反正它没了)
> >
> > 6.fun(0).fun(1)的结果
> >
> > - f1-fun(0)执行 ——AO1{n=0,o=undefined} ——这里由于闭包 所以fun(0)这个对象里面有一个n=0的
> > - f2-fun(1)执行——AO2{m=1}  
> >
> > 执行生成了AO2之后又马上会执行外面的f1 生成AO3这个存在不了多久的激活对象——传入了n=1 o=0（o是从AO1里拿的）
> >
> > - return fun(m,n)执行——AO3{n=1(由AO2传入) o=0（由AO1传入）} —— 打印结果
> >
> > > 7.fun(0).fun(1).fun(2)的结果
> > >
> > > 同理 如果出现 fun(0).fun(1).fun(2)
> > >
> > > 就会出现三个被保存的AO
> > >
> > > - f1-fun(0)执行 ——AO1{n=0,o=undefined} 
> > > - f2-fun(1)执行—— AO2{m=1}  
> > > - return fun(**m,n**)执行——AO3{n=1(由AO2传入) o=0（由AO1传入）} 
> > > - f3-fun(2)执行 —— AO4{m=2}
> > > - return fun(**m,n**)执行—— AO5{n=2(由AO4传入) o=1（由AO3传入）} 
> > >
> > > 执行生成AO3之后马上又执行了外面的f1 （又生成了新的AO）将m=2 n=1 传入fun(n,o) （形参和实参相统一哦~）o就是1了！
> > >
> > > 自然就会打印1了！



#### 5.执行上下文与激活对象AO

执行期上下文的概念（每当有一个函数被调用的时候就会产生一个**执行上下文对象** AO 也叫 激活对象Activation Object)

> - 就是每进入一个执行上下文时，这个执行上下文儿中的**激活对象AO**就被激活，也就是该上下文中的函数标示符、形参、变量声明等就可以被访问到了

1.**执行期上下文**(又名 预编译)
-----1.1 执行期上下文的执行顺序 当**一个函数调用他就会生成一个AO对象** (全局的叫GO我不详细讲了)
只要知道下面这些就可以了
---------1.1.1 当一个函数调用 **在AO中 先拿到函数中 声明的所有变量(var 的变量) 赋值为undefined**
---------1.1.2 实参形参相统一
---------1.1.3 里面的函数声明 函数名作为属性名  属性名=函数体 然后挂到AO对象上
---------1.1.4 最终已经看过的 变量声明 实参 函数声明 都不看了 去解释一行执行一行 变量看AO里的



- #### 6.VO AO 作用域链
  
  

  
  
  ![img](https://pic1.zhimg.com/80/v2-6c734348730c6c28b99e001ee831a674_720w.jpg)
  
  ##### 1、变量对象(variable object)
  
  > 原文：Every execution context has associated with it a variable object. Variables and functions declared in the source text are added as properties of the variable object. For function code, parameters are added as properties of the variable object.

  　　简言之就是：每一个执行上下文都会分配一个变量对象(variable object)，变量对象的属性由 **变量**(variable) 和 **函数声明**(function declaration) 构成。在函数上下文情况下，**参数列表**(parameter list)也会被加入到变量对象(variable object)中作为属性。变量对象与当前作用域息息相关。不同作用域的变量对象互不相同，它保存了当前作用域的所有函数和变量。
  
  　　这里有一点特殊就是只有 **函数声明**(function declaration) 会被加入到变量对象中，而 ****函数表达式**(function expression)**则不会。看代码：
  
  ```js
  // 函数声明
  function a(){}
  console.log(typeof a); // "function"
  
  // 函数表达式
  var a = function _a(){};
  console.log(typeof a); // "function"
  console.log(typeof _a); // "undefined"
  ```
  
  　　函数声明的方式下，a会被加入到变量对象中，故当前作用域能打印出 a。
  　　函数表达式情况下，a作为变量会加入到变量对象中，_a作为函数表达式则不会加入，故 a 在当前作用域能被正确找到，_a则不会。
  
  
  
  ##### **2、活动对象(activation object)**
  
  > 原文：When control enters an execution context for function code, an object called the activation object is created and associated with the execution context. The activation object is initialised with a property with name arguments and attributes { DontDelete }. The initial value of this property is the arguments object described below.
  > The activation object is then used as the variable object for the purposes of variable instantiation.
  
  　　简言之：当函数被激活，那么一个活动对象(activation object)就会被创建并且分配给执行上下文。活动对象由特殊对象 arguments 初始化而成。随后，他被当做变量对象(variable object)用于变量初始化。
  用代码来说明就是：
  
  ```js
  function a(name, age){
      var gender = "male";
      function b(){}
  }
  a(“k”,10);
  ```
  
  　　a被调用时，在a的执行上下文会创建一个活动对象AO，并且被初始化为 AO = [arguments]。随后AO又被当做变量对象(variable object)VO进行变量初始化,此时 VO = [arguments].concat([name,age,gender,b])。
  
  ##### [**3、作用域**　](https://github.com/mqyqingfeng/Blog/issues/3)
  
  　　作用域是指程序源代码中定义变量的区域。
  
  　　作用域规定了如何查找变量，也就是确定当前执行代码对变量的访问权限。
  
  　　JavaScript 采用**词法作用域**(lexical scoping)，也就是**静态作用域**。
  
  　　（1）**静态**作用域与**动态**作用域
  
  　　　　因为 JavaScript 采用的是**词法**作用域，函数的作用域在**函数定义**的时候就决定了。
  
  　　　　而与词法作用域相对的是**动态**作用域，函数的作用域是在**函数调用**的时候才决定的。
  
  　　　　让我们认真看个例子就能明白之间的区别：
  
  [![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)
  
  ```js
  var value = 1;
  
  function foo() {
      console.log(value);
  }
  
  function bar() {
      var value = 2;
      foo();
  }
  
  bar();
  
  // 结果是 ???
  ```
  
  [![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)
  
  　　　　假设JavaScript采用静态作用域，让我们分析下执行过程：
  
  　　　　　　执行 foo 函数，先从 foo 函数内部查找是否有局部变量 value，如果没有，就根据书写的位置，查找上面一层的代码，也就是 value 等于 1，所以结果会打印 1。
  
  　　　　而引用《JavaScript权威指南》的回答就是：
  
  　　　　　　JavaScript 函数的执行用到了作用域链，这个作用域链是在函数定义的时候创建的。嵌套的函数 f() 定义在这个作用域链里，其中的变量 scope 一定是局部变量，不管何时何地执行函数 f()，这种绑定在执行 f() 时依然有效。
  
  ##### **4、执行环境和作用域链(execution context and scope chain)**
  
  - **execution context**
    顾名思义 执行环境/执行上下文。在javascript中，**执行环境**可以抽象的理解为一个object，它由以下几个属性构成：
  
    ```js
    executionContext：{
        variable object：vars,functions,arguments,
        scope chain: variable object + all parents scopes
        thisValue: context object
    }
    ```
  
    　　此外在js解释器运行阶段还会维护一个环境栈，当执行流进入一个函数时，函数的环境就会被压入环境栈，当函数执行完后会将其环境弹出，并将控制权返回前一个执行环境。环境栈的顶端始终是当前正在执行的环境。           **[！](https://github.com/mqyqingfeng/Blog/issues/4)**通俗来讲，就是： 当**执行一个函数**的时候，就会创建一个执行上下文，并且压入执行上下文栈，当函数**执行完毕**的时候，就会将函数的执行上下文从栈中弹出。
  
    - 执行上下文的代码会分成[两个阶段](https://github.com/mqyqingfeng/Blog/issues/5)进行处理：分析和执行，我们也可以叫做：
      1. 进入执行上下文（当进入执行上下文时，这时候**还没有执行代码**）
      2. 代码执行 (在代码执行阶段，会顺序执行代码，根据代码，**修改变量对象的值**)
  
  - **scope chain**
    作用域链，它在解释器进入到一个执行环境时初始化完成并将其分配给当前执行环境。每个执行环境的**作用域链**由**当前环境的变量对象**及**父级环境的作用域链构成**。
    作用域链具体是如何构建起来的呢，先上代码：
  
    ```
    function test(num){
        var a = "2";
        return a+num;
    }
    test(1);
    ```
  
    1. 执行流开始 初始化function test，test函数会维护一个私有属性 [[scope]],并使用当前环境的作用域链初始化，在这里就是 test.[[Scope]]=global scope.
    2. test函数执行，这时候会为test函数创建一个执行环境，然后通过复制函数的[[Scope]]属性构建起test函数的作用域链。此时 test.scopeChain = [test.[[Scope]]]
    3. test函数的活动对象被初始化，随后活动对象被当做变量对象用于初始化。即 test.variableObject = test.activationObject.contact[num,a] = [arguments].contact[num,a]
    4. test函数的变量对象被压入其作用域链，此时 test.scopeChain = [ test.variableObject, test.[[scope]]];
  
    至此test的**作用域链**构建完成。
  
  







## 2.核心基础知识

### 计网

```js
//小林的图解网络随时翻阅 & 极客时间趣谈网络协议+网上的文章 & 读图解HTTP TCP等书籍 & 网络抓包实操练习  深入理解
// 每天一道计网面试题 把自己带入面试者的身份 跟面试官白话白话 嗯就这样子
今天没学 明天再来补充~
1.“HTTP和HTTPS有什么区别？
	// 聊一下Https的连接过程
    // 输入 www.baidu.com，怎么变成 https://www.baidu.com 的，怎么确定用HTTP还是HTTPS？
	// HTTPS连接的时候 怎么确定收到的包是服务器发来的？（中间人攻击）
	// 什么是对称加密、非对称加密？区别是什么？
	// 数字签名、报文摘要的原理	
	// HTTPS解决了HTTP的哪些问题？怎么解决的？
	”
```



#### 聊聊HTTP HTTPS的区别 

https://github.com/wolverinn/Waking-Up/blob/master/Computer%20Network.md#http%E5%92%8Chttps%E6%9C%89%E4%BB%80%E4%B9%88%E5%8C%BA%E5%88%AB

- 【1】端口不同
  - HTTP 80端口
  - HTTPS 443端口
- 【2】传输方式不同
  - HTTP的信息是 明文传输（存在安全风险）
  - HTTPS运行在SSL（安全协议）之上 添加了加密和认证机制 使得报文能够加密传输（解决了HTTP不安全的缺陷）
- 【3】建立连接的方式不同
  - HTTP —— TCP三次握手之后就可以进行HTTP的报文传输了
  - HTTPS —— TCP三次握手 + SSL/TLS握手 才可以进入加密报文传输（在TCP传输层和HTTP应用层之间加入了SSL/TLS协议）

![请添加图片描述](https://img-blog.csdnimg.cn/22ed1349ab5641b4a09cdf7763f13d43.png)

- 【4】HTTPS带来的开销较大
  - 由于加密、解密 会带来更大的CPU和内存开销
- 【5】HTTPS通信需要证书 **来保证服务器的身份是可信的！**
  - 一般需要向证书颁发机构(CA 证书权威机构)申请购买~





##### 1.[HTTPS的连接过程](https://github.com/wolverinn/Waking-Up/blob/master/Computer%20Network.md#https%E7%9A%84%E8%BF%9E%E6%8E%A5%E8%BF%87%E7%A8%8B)

- 【1】客户端 向 服务器发送——

  - 请求
  - 客户端支持的一套加密规则
    - 对称加密算法
    - 非对称加密算法（采用混合加密~）
    - 摘要算法

- 【2】服务器从中选出一组加密算法和HASH算法 并将自己的身份信息以——

  - 证书
    - 网站地址
    - **加密公钥**（用于**非对称加密**）
    - 证书的颁发机构 等信息
    - （私钥只能用于服务器端进行解密~）

  的形式发回给浏览器（客户端）

- 【3】客户端 验证 服务器的合法性

  - 证书是否过期 / CA(证书权威机构)是否可靠 
  - 发行者证书的公钥能否正确解开服务器证书的”发行者的数字签名“ 
  - 服务器证书上的域名是否和服务器的实际域名相匹配 

- 【4】如果证书受信任 或者用户接受了不受信任的证书 

  - 浏览器会生成一个**随机密钥**（用于**对称算法**）
    - 并用服务器提供的**公钥加密**（采用非对称算法对密钥加密）
  - 浏览器会使用Hash算法（**摘要算法**）对握手消息进行摘要计算
    - 并对摘要使用之前产生的密钥加密（**对称算法**）
  - 最后 客户端将加密后的随机密钥和摘要一起发送给服务器

- 【5】服务器用自己的私钥解密 得到——对称加密的密钥 用这个密钥解密出Hash摘要值 并验证握手消息是否一致——

  - 如果一致 服务器使用对称加密的**密钥加密握手消息**发给浏览器

- 【6】浏览器解密并验证摘要 若一致 则握手结束

  - 之后的数据传送**都使用对称加密的密钥**进行加密

总结：1.使用的混合加密算法中的——

- 非对称加密算法 用于在握手过程中加密生成的代码（也就是通信建立之前使用非对称加密）
- 对称加密算法 用于对真正传输的数据进行加密

![请添加图片描述](https://img-blog.csdnimg.cn/3de331f52a0f4778ab1bd691b06ad67d.png)

2.摘要算法用于验证数据的完整性（相当于”指纹“ 预防了”第三方篡改“的风险）

![请添加图片描述](https://img-blog.csdnimg.cn/2d22159e59964e4081ddfc1628039745.png)

> 2-5中的内容 择日再聊！

##### 2.输入 `[www.baidu.com`，怎么变成`https://www.baidu.com` 的，[怎么确定用HTTP还是HTTPS？](https://github.com/wolverinn/Waking-Up/blob/master/Computer%20Network.md#https%E8%BF%9E%E6%8E%A5%E7%9A%84%E6%97%B6%E5%80%99%E6%80%8E%E4%B9%88%E7%A1%AE%E5%AE%9A%E6%94%B6%E5%88%B0%E7%9A%84%E5%8C%85%E6%98%AF%E6%9C%8D%E5%8A%A1%E5%99%A8%E5%8F%91%E6%9D%A5%E7%9A%84%E4%B8%AD%E9%97%B4%E4%BA%BA%E6%94%BB%E5%87%BB)





##### 3.HTTPS连接的时候，怎么确定收到的包是服务器发来的（中间人攻击）？





##### 4.什么是对称加密、非对称加密？区别是什么？







##### 5.数字签名、报文摘要的原理







##### 6.HTTPS解决了HTTP的哪些问题？怎么解决的？

###### HTTP在安全上存在哪些问题？

HTTP由于是明文传输 所以安全上存在以下三个风险

- **窃听风险**，比如通信链路上可以获取通信内容，用户号容易没。
- **篡改风险**，比如强制入垃圾广告，视觉污染，用户眼容易瞎。
- **冒充风险**，比如冒充淘宝网站，用户钱容易没。



###### HTTPS如何解决这些问题？

- 【1】通过**混合加密**的方式实现信息的<u>机密性</u> 解决了==窃听==的风险

![混合加密](https://mmbiz.qpic.cn/mmbiz_jpg/J0g14CUwaZfXG1113Sjm0iaOXfoOv0tlUYNGEmfY95A74GR3xicqXKZCDI7Q4icgQu7CuSSx9QiaFlr4Py49RHonjw/640?wx_fmt=jpeg)

HTTPS 采用的是**对称加密**和**非对称加密**结合的「混合加密」方式：

- 在通信建立前采用**非对称加密**的方式交换「会话秘钥」，后续就不再使用非对称加密。
- 在通信过程中全部使用**对称加密**的「会话秘钥」的方式加密明文数据。

采用「混合加密」的方式的原因：

1. **对称加密**只使用一个密钥，运算速度快，密钥必须保密，**无法做到安全的密钥交换**。
2. **非对称加密**使用两个密钥：公钥和私钥，公钥可以任意分发而私钥保密，解决了密钥交换问题但**速度慢**。

结合二者的特性 在通信建立的时候采用速度慢但是可以进行 **密钥的安全交换（公钥）**的非对称加密

在建立好通信之后 全程使用 无法进行密钥交换（只用一个私钥）但是可以**快速加密与解密** 的对称加密

- 【2】通过**摘要算法**的方式来实现完整性 为数据生成独一无二的「指纹」，指纹用于<u>校验数据的完整性</u>，解决了==篡改==的风险。

![img](https://mmbiz.qpic.cn/mmbiz_jpg/J0g14CUwaZfXG1113Sjm0iaOXfoOv0tlUicIliaBcr2XAXpMdeibLG4MMticpkX0e6xZHbXeiavMu7faJcL2TdVj0Udw/640?wx_fmt=jpeg)

客户端在发送明文之前会通过摘要算法算出明文的「指纹」，发送的时候把「指纹 + 明文」一同加密成密文后，发送给服务器；

服务器解密后，用相同的摘要算法算出发送过来的明文，通过比较客户端携带的「指纹」和当前算出的「指纹」做比较，**若「指纹」相同，说明数据是完整的**。

- 【3】通过**将服务器公钥放入数字证书中** 解决了==冒充==的风险

客户端先向服务器端索要公钥，然后用公钥加密信息，服务器收到密文后，用自己的私钥解密。

这就存在些问题，如何**保证公钥不被篡改和信任度**？

所以这里就需要借助第三方权威机构 `CA` （数字证书认证机构），将**服务器公钥放在数字证书**（由数字证书认证机构颁发）中，只要证书是可信的，公钥就是可信的。

![数子证书工作流程](https://mmbiz.qpic.cn/mmbiz_jpg/J0g14CUwaZfXG1113Sjm0iaOXfoOv0tlUibyiaEab7NMrTn632LZmYQe5qaibibT0xsOs7ic6u98ypWJBjbPMzOUCb2g/640?wx_fmt=jpeg)

一句话小结：通过数字证书的方式**保证服务器公钥的身份**（将服务器公钥放在数字证书中 客户端使用CA的公钥确认服务器的数字证书后即可保证服务器公钥的身份），解决冒充的风险。









###  操作系统

```js
// 小林的图解系统 & 学校课程学习 & 王道考研-OS 三者配合 高效学习
// 要看一下学校的ppt了 课程旷了好几节有点听不懂！
```



## 3.面试题

### 面试题、面经总结

```js
//网上面试题、面经辣么多 一天多看一些 然后同时也要研究一些题的答案！
```



### 算法题

```js
// 跟着掘金小册、代码随想录的内容进行学习！
1.复习了一下二维数组的初始化方法
2.超级刷题挑战 一天3+题！
	剑指 Offer 29. 顺时针打印矩阵 和 54 螺旋矩阵是一道题 这题我觉得比昨天的难。。。但是今天这个方法太棒了！记录下来
    周赛AC了一道简单题~ 两三分钟就做出来了~
2.复习下时间复杂度 从小到大的顺序
```

#### [剑指 Offer 29. 顺时针打印矩阵](https://leetcode-cn.com/problems/shun-shi-zhen-da-yin-ju-zhen-lcof/)

这题太棒了！尤其是解法 这四个边界把数组框起来的想法——

也就是这个大佬写的题解太棒了！mark一下[「手画图解」两种遍历的策略](https://leetcode-cn.com/problems/shun-shi-zhen-da-yin-ju-zhen-lcof/solution/shou-hui-tu-jie-liang-chong-bian-li-de-ce-lue-na-c/)

![image.png](https://pic.leetcode-cn.com/42ee2ec6854ee79ac2b7c91259d2ad5db70522668d11fc691e9e14426918a666-image.png)

```js
var spiralOrder = function(matrix) {
    if(!matrix.length || !matrix[0].length){
        return [];
    }
    const res = [];
    
    // 定义上下左右边界 一点点往里面挪动！
    let top = 0;
    let bottom = matrix.length - 1;
    let left = 0;
    let right = matrix[0].length - 1;

    while(top < bottom && left < right){
        for(let j = left; j < right; j++){
            res.push(matrix[top][j]);//上层向右
        }
        for(let i = top; i < bottom; i++){
            res.push(matrix[i][right]);//右层向下
        }
        for(let j = right; j > left; j--){
            res.push(matrix[bottom][j]);//下层向左
        }
        for(let i = bottom; i > top; i--){
            res.push(matrix[i][left]);//左层向上
        }
        top++;
        bottom--;
        left++;
        right--;
    }
    //如果只有一层 那么就不能用上面的循环了 得再写两个循环
    if(top === bottom){
        for(let j = left; j <= right; j++){
            res.push(matrix[top][j]);
        }
    }
    else if(left === right){
        for(let i = top; i <= bottom; i++){
            res.push(matrix[i][left]);
        }
    }
    return res;
};
```



#### 2.复习下时间复杂度从小到大排列的顺序



![img](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/4/6/1714f67c52dc8d15~tplv-t2oaga2asx-watermark.awebp)

再往上面是 O(!n) O(n^n^) 

总结下 就是这样

**O(1) < O(logn) < (n) < O(n*logn) < O(n^2^) < O(n^3^) < O(2^n^) < O(n!) < O(n^n^)**

## 4.前端开发框架

### 项目开发前置知识

```js
// 学到了尚硅谷react第四章 老师表示 “先学完Ajax Promise axios再回来吧！”
```





### react基础知识

```js
// 现阶段学习广受好评的react教程尚硅谷 
```





### react练手项目

```js
// 尚硅谷课程接下来的案例
// 掘金 记账本egg.js+react全栈 
```



# 2021.10.3



```js
// DDL
	01 尚硅谷JS高级 10.3学习完第一轮 10.4-7 一天复习一章 
	02 算法题 数组+排序算法 10.3学习完（可以算是复习）
    03 Ajax 10.3 4 Promise 10.5 6 axios 10.7 8 react Todo List案例重写 10.9
```



```js
// 今日主要收获 & 学习时间
Totally 340min
1.前端基础知识 
// 从早上-中午 拿出一整块时间学习JS 晚上跑完步回来继续看JS 重视基础！
// 不要浮于表面地看问题 深入进去！多向自己提问！
    1.1 JS学习 20+80min 
    // 每日重点！编码 + 知识点记录
    // 近期重点 作用域、闭包、原型链 + ES6 + Ajax axios
		/* 学习了一下JS实现数组去重~
        完结JS高级的课程~后面是比较基础 底层的一些知识点 偏浏览器一些 之后需要专门好好学一下浏览器相关欸！*/
    1.2 freecodecamp JS + 响应式网页设计 min
    	/*  */
    1.3 JS 30demos 40+80min
    // 每天完成一个 不要求完全理解 先做一个初步的认知
    // 没有完全了解的/觉得很好的 都要特意标记出来 二刷时候再去好好理解下！
    	/* demo11 是一个在线的视频播放器 利用了HTML5的video标签
        */
    
    // 这些内容都是要重点掌握的！
    DOM编程 BOM使用 —— 复习
    事件代理/委托
	事件队列(setTimeout/setInterval/Promise)
	JSON
    Ajax/Fetch
	正则表达式

2.核心基础知识 下午开始学计网 + 刷题
	2.1 计网 20min
		/* 复习下HTTPS的内容~ */
	2.2 操作系统 min
		/*  */

3.面试刷题
	3.1 刷算法 刷力扣 60+40min	
    // 【1】阅读掘金小册 + 按照代码随想录推荐【2】刷题
    	/* 掘金小册 4 /28 代码随想录数组3/7 
        周赛两题
        */   
    
    	// 每个阶段结束后 简单总结下应对某种数据结构/对应类型的题目 应该怎么去想
    	数组 + 排序 第五周
        数组 + 链表 + 二叉树 第六周
        字符串 + 二叉树 + 栈/队列 第七周
        双指针 + 遍历专题DFS BFS 第八周
        回溯算法 + 贪心算法 第九周
        动态规划 第十周
    3.2 面试题 min
    // 有空可以读一些面试题 查缺补漏一下~
		/*  */  
    
4.前端开发框架 
	4.1 react学习 min
    // 尚硅谷课程 官方文档五子棋demo
		/*  */
    
5.前端进阶知识学习
// 学完JS再学这个辽！
    Node.js
	webpack
6.其他 
7.每日总结 min
```





## 1.前端基础



### 前端基础知识



```js
//每日学到的知识点 可以写文章 可以记在心里 总结下来！
// 本阶段主要学习JS高级教程（尚硅谷）刷freecodecamp
1.JS数组去重问题
2.利用扩展运算符 ... 合并两个数组 arr1.push(...arr2)
3.解构赋值的应用
4.JS用的是单线程模式 为啥？可以证明么？
5.JS引擎执行代码的基本流程
6.浏览器的事件循环模型 面试时候问到最好把图画一下！p46
7.交换数组中两个/多个元素的位置的快捷方法 [arr[a], arr[b]] = [arr[b], arr[a]]
```



#### 1.面试高频 利用JavaScript实现数组去重

参考 写得很棒的文章 [JavaScript数组去重问题](https://juejin.cn/post/7014009223197491236) 同为大三在校生 为何人家如此优秀！

明天来复习一下~

##### 【1】原始方法 遍历



##### 【2】利用`res.indexOf(item)`查找是否item在res中是重复的



##### 【3】利用filter结合indexOf方法过滤获得res



##### 【4】排序+比较先前元素pre和当前元素是否相同 



##### 【5】结合【4】`arr.sort().filter(对应函数)` 更简单！



##### 【6】利用Set生成哈希表（很快啊！）

Set 对象允许你存储任何类型的唯一值，无论是原始值或者是对象引用。

所以我们可以利用Set的这一特性，来进行去重处理。

```js
var arr = [1,1,2,3,4,5,6,7,4,3,'1',8,'3','1','3','66']
// var hashtable = Array.from(new Set(arr));//[1, 2, 3, 4, 5, 6, 7, "1", 8, "3", "66"]
// Set原来是这么用的啊！之前一直都使用一个个比对+遍历 
function unique(arr){
	return Array.from(new Set(arr))
}

console.log(unique(arr));
```

###### 通过解构赋值进一步简化

```js
var arr = [1,1,2,3,4,5,6,7,4,3,'1',8,'3','1','3','66']

function unique(arr){
	return [...new Set(arr)]
}

console.log(unique(arr));
```

###### 极简箭头函数

```js
var arr = [1,1,2,3,4,5,6,7,4,3,'1',8,'3','1','3','66']
var unique = (arr) => return [...new Set(arr)];// 就是把常规函数形式 变了一下下~
console.log(unique(arr));
```



#### 2.解构赋值的应用

很棒的一个大三前端大佬的博客中的内容

依旧是明天来复习下

https://blog.wangez.site/posts/1586874348.html/

#### 3.JS执行是单线程的 如何证明？ 为啥要用这种模式？

定时器回调函数 `setTimeout()` 的回调函数是在主线程执行的 这些函数只有在运行栈中的代码（初始化代码）全执行完后才有可能执行！

> 代码分为两种
>
> - 初始化代码
> - 回调代码（就是回调函数中包含的代码咯~）



JS的单线程模式与其用途有关

- 作为浏览器脚本语言 JS的==主要用途==是**与用户互动 & 操作DOM**
- 这决定了JS只能是单线程 否则会带来很复杂的同步问题！



#### 4.JS引擎执行代码的基本流程

- 【1】先执行初始化代码
  - 设置定时器
  - 绑定监听
  - 发送ajax请求
  - console.log alert这些代码也会被先执行
    - alert执行的时候 线程会暂时阻塞~
- 【2】后面的某个时刻才会执行回调代码



## 2.核心基础知识

### 计网

```js
//小林的图解网络随时翻阅 & 极客时间趣谈网络协议+网上的文章 & 读图解HTTP TCP等书籍 & 网络抓包实操练习  深入理解
// 每天一道计网面试题 把自己带入面试者的身份 跟面试官白话白话 嗯就这样子
今天没学 明天再来补充~
1.“HTTP和HTTPS有什么区别？
	// 聊一下Https的连接过程
    // 输入 www.baidu.com，怎么变成 https://www.baidu.com 的，怎么确定用HTTP还是HTTPS？
	// HTTPS连接的时候 怎么确定收到的包是服务器发来的？（中间人攻击）
	// 什么是对称加密、非对称加密？区别是什么？
	// 数字签名、报文摘要的原理	
	// HTTPS解决了HTTP的哪些问题？怎么解决的？
	”
```



#### 聊聊HTTP HTTPS的区别 

https://github.com/wolverinn/Waking-Up/blob/master/Computer%20Network.md#http%E5%92%8Chttps%E6%9C%89%E4%BB%80%E4%B9%88%E5%8C%BA%E5%88%AB

- 【1】端口不同
  - HTTP 80端口
  - HTTPS 443端口
- 【2】传输方式不同
  - HTTP的信息是 明文传输（存在安全风险）
  - HTTPS运行在SSL（安全协议）之上 添加了加密和认证机制 使得报文能够加密传输（解决了HTTP不安全的缺陷）
- 【3】建立连接的方式不同
  - HTTP —— TCP三次握手之后就可以进行HTTP的报文传输了
  - HTTPS —— TCP三次握手 + SSL/TLS握手 才可以进入加密报文传输（在TCP传输层和HTTP应用层之间加入了SSL/TLS协议）

![请添加图片描述](https://img-blog.csdnimg.cn/22ed1349ab5641b4a09cdf7763f13d43.png)

- 【4】HTTPS带来的开销较大
  - 由于加密、解密 会带来更大的CPU和内存开销
- 【5】HTTPS通信需要证书 **来保证服务器的身份是可信的！**
  - 一般需要向证书颁发机构(CA 证书权威机构)申请购买~





##### 1.[HTTPS的连接过程](https://github.com/wolverinn/Waking-Up/blob/master/Computer%20Network.md#https%E7%9A%84%E8%BF%9E%E6%8E%A5%E8%BF%87%E7%A8%8B)

- 【1】客户端 向 服务器发送——

  - 请求
  - 客户端支持的一套加密规则
    - 对称加密算法
    - 非对称加密算法（采用混合加密~）
    - 摘要算法

- 【2】服务器从中选出一组加密算法和HASH算法 并将自己的身份信息以——

  - 证书
    - 网站地址
    - **加密公钥**（用于**非对称加密**）
    - 证书的颁发机构 等信息
    - （私钥只能用于服务器端进行解密~）

  的形式发回给浏览器（客户端）

- 【3】客户端 验证 服务器的合法性

  - 证书是否过期 / CA(证书权威机构)是否可靠 
  - 发行者证书的公钥能否正确解开服务器证书的”发行者的数字签名“ 
  - 服务器证书上的域名是否和服务器的实际域名相匹配 

- 【4】如果证书受信任 或者用户接受了不受信任的证书 

  - 浏览器会生成一个**随机密钥**（用于**对称算法**）
    - 并用服务器提供的**公钥加密**（采用非对称算法对密钥加密）
  - 浏览器会使用Hash算法（**摘要算法**）对握手消息进行摘要计算
    - 并对摘要使用之前产生的密钥加密（**对称算法**）
  - 最后 客户端将加密后的随机密钥和摘要一起发送给服务器

- 【5】服务器用自己的私钥解密 得到——对称加密的密钥 用这个密钥解密出Hash摘要值 并验证握手消息是否一致——

  - 如果一致 服务器使用对称加密的**密钥加密握手消息**发给浏览器

- 【6】浏览器解密并验证摘要 若一致 则握手结束

  - 之后的数据传送**都使用对称加密的密钥**进行加密

总结：1.使用的混合加密算法中的——

- 非对称加密算法 用于在握手过程中加密生成的代码（也就是通信建立之前使用非对称加密）
- 对称加密算法 用于对真正传输的数据进行加密

![请添加图片描述](https://img-blog.csdnimg.cn/3de331f52a0f4778ab1bd691b06ad67d.png)

2.摘要算法用于验证数据的完整性（相当于”指纹“ 预防了”第三方篡改“的风险）

![请添加图片描述](https://img-blog.csdnimg.cn/2d22159e59964e4081ddfc1628039745.png)



##### 2.输入 `[www.baidu.com`，怎么变成`https://www.baidu.com` 的，[怎么确定用HTTP还是HTTPS？](https://github.com/wolverinn/Waking-Up/blob/master/Computer%20Network.md#https%E8%BF%9E%E6%8E%A5%E7%9A%84%E6%97%B6%E5%80%99%E6%80%8E%E4%B9%88%E7%A1%AE%E5%AE%9A%E6%94%B6%E5%88%B0%E7%9A%84%E5%8C%85%E6%98%AF%E6%9C%8D%E5%8A%A1%E5%99%A8%E5%8F%91%E6%9D%A5%E7%9A%84%E4%B8%AD%E9%97%B4%E4%BA%BA%E6%94%BB%E5%87%BB)

[你访问的网站是如何自动切换到 HTTPS 的？](https://www.sohu.com/a/136637876_487516)

一种是<u>原始的302跳转</u>，服务器**把所有的HTTP流量跳转到HTTPS**。

- 但这样有一个漏洞，就是中间人可能在第一次访问站点的时候就劫持。 
  - 解决方法是引入HSTS机制，用户浏览器在**访问站点的时候强制使用HTTPS**。



##### 3.HTTPS连接的时候，怎么确定收到的包是服务器发来的（中间人攻击）？

针对SSL的中间人攻击方式主要有两类，分别是SSL劫持攻击和SSL剥离攻击

**SSL劫持攻击**
攻击者在传输过程中伪造服务器的证书，将服务器的公钥替换成自己的公钥；

但是对于客户端来说，如果中间人伪造了证书，在校验证书过程中会提示证书错误。

**SSL剥离攻击**
中间人和服务器之间仍然保持HTTPS服务器；

之后将HTTPS范文替换为HTTP返回给浏览器。



我们要做到的是 —— 中间人攻击的预防

可以看看这篇文章 [详解HTTPS连接过程以及中间人攻击劫持](https://blog.csdn.net/Linuxprobe18/article/details/79619339?utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7Edefault-1.no_search_link&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7Edefault-1.no_search_link)



##### 4.什么是对称加密、非对称加密？区别是什么？

- 对称加密：加密和解密采用相同的密钥。如：DES、RC2、RC4
- 非对称加密：需要两个密钥：公钥和私钥。如果用公钥加密，需要用私钥才能解密。如：RSA
- 区别：对称加密速度更快，通常用于大量数据的加密；非对称加密安全性更高（不需要传送私钥）

> 通信建立之前使用**非对称加密**
>
> 建立好通信后 使用**对称加密** 加密明文数据



##### 5.数字签名、报文摘要的原理

- 发送者A用私钥进行签名，接收者B用公钥验证签名。因为除A外没有人有私钥，所以B相信签名是来自A。A不可抵赖，B也不能伪造报文。
- 摘要算法:MD5、SHA





##### 6.HTTPS解决了HTTP的哪些问题？怎么解决的？

###### HTTP在安全上存在哪些问题？

HTTP由于是明文传输 所以安全上存在以下三个风险

- **窃听风险**，比如通信链路上可以获取通信内容，用户号容易没。
- **篡改风险**，比如强制入垃圾广告，视觉污染，用户眼容易瞎。
- **冒充风险**，比如冒充淘宝网站，用户钱容易没。



###### HTTPS如何解决这些问题？

- 【1】通过**混合加密**的方式实现信息的<u>机密性</u> 解决了==窃听==的风险

![混合加密](https://mmbiz.qpic.cn/mmbiz_jpg/J0g14CUwaZfXG1113Sjm0iaOXfoOv0tlUYNGEmfY95A74GR3xicqXKZCDI7Q4icgQu7CuSSx9QiaFlr4Py49RHonjw/640?wx_fmt=jpeg)

HTTPS 采用的是**对称加密**和**非对称加密**结合的「混合加密」方式：

- 在通信建立前采用**非对称加密**的方式交换「会话秘钥」，后续就不再使用非对称加密。
- 在通信过程中全部使用**对称加密**的「会话秘钥」的方式加密明文数据。

采用「混合加密」的方式的原因：

1. **对称加密**只使用一个密钥，运算速度快，密钥必须保密，**无法做到安全的密钥交换**。
2. **非对称加密**使用两个密钥：公钥和私钥，公钥可以任意分发而私钥保密，解决了密钥交换问题但**速度慢**。

结合二者的特性 在通信建立的时候采用速度慢但是可以进行 **密钥的安全交换（公钥）**的非对称加密

在建立好通信之后 全程使用 无法进行密钥交换（只用一个私钥）但是可以**快速加密与解密** 的对称加密

- 【2】通过**摘要算法**的方式来实现完整性 为数据生成独一无二的「指纹」，指纹用于<u>校验数据的完整性</u>，解决了==篡改==的风险。

![img](https://mmbiz.qpic.cn/mmbiz_jpg/J0g14CUwaZfXG1113Sjm0iaOXfoOv0tlUicIliaBcr2XAXpMdeibLG4MMticpkX0e6xZHbXeiavMu7faJcL2TdVj0Udw/640?wx_fmt=jpeg)

客户端在发送明文之前会通过摘要算法算出明文的「指纹」，发送的时候把「指纹 + 明文」一同加密成密文后，发送给服务器；

服务器解密后，用相同的摘要算法算出发送过来的明文，通过比较客户端携带的「指纹」和当前算出的「指纹」做比较，**若「指纹」相同，说明数据是完整的**。

- 【3】通过**将服务器公钥放入数字证书中** 解决了==冒充==的风险

客户端先向服务器端索要公钥，然后用公钥加密信息，服务器收到密文后，用自己的私钥解密。

这就存在些问题，如何**保证公钥不被篡改和信任度**？

所以这里就需要借助第三方权威机构 `CA` （数字证书认证机构），将**服务器公钥放在数字证书**（由数字证书认证机构颁发）中，只要证书是可信的，公钥就是可信的。

![数子证书工作流程](https://mmbiz.qpic.cn/mmbiz_jpg/J0g14CUwaZfXG1113Sjm0iaOXfoOv0tlUibyiaEab7NMrTn632LZmYQe5qaibibT0xsOs7ic6u98ypWJBjbPMzOUCb2g/640?wx_fmt=jpeg)

一句话小结：通过数字证书的方式**保证服务器公钥的身份**（将服务器公钥放在数字证书中 客户端使用CA的公钥确认服务器的数字证书后即可保证服务器公钥的身份），解决冒充的风险。







###  操作系统

```js
// 小林的图解系统 & 学校课程学习 & 王道考研-OS 三者配合 高效学习
// 要看一下学校的ppt了 课程旷了好几节有点听不懂！
JS高级的角度讲进程、线程~
    多线程的优缺点
浏览器内核
```



#### 进程与线程

- 何为多进程/多线程

  - 多进程就是一个应用程序中有多个进程在执行
  - 多线程就是一个进程中有多个线程在执行

  ![在这里插入图片描述](https://img-blog.csdnimg.cn/a006829c74eb48059cac828e121129c3.png)

  - 进程——==程序==执行一次产生一个进程 
    - 占有一片独有的内存空间
  - 线程——是进程内的一个**独立执行单元** 
    - 为程序执行的一个完整流程 （==应用程序==必须运行在**某个进程的某个线程**上！）
    - 线程是CPU的最小调度单元

- 多线程
  - 优点：能有效提升CPU的利用率
  - 缺点：
    - 创建多线程开销
    - 线程间存在切换的开销
    - 会出现 死锁、状态同步等问题！

- JS是单线程的
  - 使用H5的Web Workers可以多线程运行 —— 产生“启动**分线程**”的语法！
- 浏览器是多线程运行的
- 浏览器有单进程/多进程的
  - 老版IE 老版firefox 单进程
  - 现在的浏览器大多都是多进程的



#### 浏览器内核

浏览器内核是由很多模块组成的！

##### 主线程

- JS引擎模块 
  - 负责JS程序的编译与运行
- HTML CSS文档解析模块 
  - 负责页面文本的解析
- DOM/CSS模块 
  - 负责DOM/CSS在内存中的相关处理

- **布局**和**渲染**模块 —— 负责**页面的布局**和**效果的绘制**（内存中的对象）

参照**内存中的DOM对象、元素** 来渲染 并展示出来页面~



##### 分线程

- 定时器模块 —— 负责定时器的管理
- 事件相应模块 —— 负责事件的管理
- 网络请求模块 —— 负责ajax请求









## 3.面试题

### 面试题、面经总结

```js
//网上面试题、面经辣么多 一天多看一些 然后同时也要研究一些题的答案！
```



### 算法题

```js
// 跟着掘金小册、代码随想录的内容进行学习！
1.复习了一下二维数组的初始化方法
2.超级刷题挑战 一天3+题！
	周赛A了两题~
    看了排序算法
		基础排序算法
        	冒泡排序——每次迭代将最大值移到最后面（提到了一种优化的方式 最好的时间复杂度变为O(N) 平均时间复杂度依旧是O(N^2)）
            选择排序——每次迭代将最小值交换到最前面 使用minIndex记录值最小元素的下标
            插入排序——每次迭代让当前元素前面的元素局部有序 
```

[基础排序算法](https://juejin.cn/book/6844733800300150797/section/6844733800367439885)

- 冒泡排序

  - 次优解

  ```js
  function bubbleSort(arr){
      const len = arr.length  
      for(let i=0;i<len;i++) {
          // 注意差别在这行，我们对内层循环的范围作了限制 优化在这个 -i
          for(let j=0;j<len-1-i;j++) {
              if(arr[j] > arr[j+1]) {
                  [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
              }
          }
      }
      return arr
  }
  ```

  

  - 最优解

  ```js
  function betterBubbleSort(arr) {
      const len = arr.length  
      
      for(let i=0;i<len;i++) {
          // 区别在这里，我们加了一个标志位
          let flag = false
          for(let j=0;j<len-1-i;j++) {
              if(arr[j] > arr[j+1]) {
                  [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
                  // 只要发生了一次交换，就修改标志位
                  flag = true
              }
          }
          // 这里雀氏很新奇！若一次交换也没发生，则说明数组有序，直接放过
          if(flag == false)  return arr;
      }
      // 最好的时间复杂度——数组本来就是有序的 O(N)
      return arr
  }
  ```

  

- 选择排序

关键就是获得那个`minIndex` 然后内层循环结束时 把`minIndex`和`i`位置的元素换个位置~

```js
function selectSort(arr)  {
  // 缓存数组长度
  const len = arr.length 
  // 定义 minIndex，缓存当前区间最小值的索引，注意是索引
  let minIndex  
  // i 是当前排序区间的起点
  for(let i = 0; i < len - 1; i++) { 
    // 初始化 minIndex 为当前区间第一个元素
    minIndex = i  
    // i、j分别定义当前区间的上下界，i是左边界，j是右边界
    for(let j = i; j < len; j++) {  
      // 若 j 处的数据项比当前最小值还要小，则更新最小值索引为 j
      if(arr[j] < arr[minIndex]) {  
        minIndex = j
      }
    }
    // 如果 minIndex 对应元素不是目前的头部元素，则交换两者
    if(minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
    }
  }
  return arr
}
```



- 插入排序

```js
function insertSort(arr){
    const len = arr.length;
    for(let i = 1; i < len; i++){
        let j = i;
        let temp = arr[j]
        while(j > 0 && arr[j - 1] > temp){
            arr[j] = arr[j - 1];
            j--
        }
        arr[j] = temp;
    }
    return arr;
}
```



## 4.前端开发框架

### 项目开发前置知识

```js
// 学到了尚硅谷react第四章 老师表示 “先学完Ajax Promise axios再回来吧！”
```





### react基础知识

```js
// 现阶段学习广受好评的react教程尚硅谷 
```





### react练手项目

```js
// 尚硅谷课程接下来的案例
// 掘金 记账本egg.js+react全栈 
```



# 2021.10.4 

被自己混乱的学习时间搞得有点麻 想学的东西学不完 难受！

明天换一下学习顺序 

早起第一件事学计网



```js
// DDL
	01 尚硅谷JS高级 10.3学习完第一轮 10.4-7 一天复习一章 
	02 算法题 数组+排序算法 10.3学习完（可以算是复习）
    03 Ajax 10.3 4 Promise 10.5 6 axios 10.7 8 react Todo List案例重写 10.9
```



```js
// 今日主要收获 & 学习时间
Totally 480min
1.前端基础知识 
// 从早上-中午 拿出一整块时间学习JS 晚上跑完步回来继续看JS 重视基础！
// 不要浮于表面地看问题 深入进去！多向自己提问！
    1.1 JS学习 30+150min 
    // 每日重点！编码 + 知识点记录
    // 近期重点 作用域、闭包、原型链 + ES6 + Ajax axios
		/* 学习了一下this的指向问题~找了一些promise async的文章 等基础打好咯再去看~
        学习了JS高级的第一章前两节内容 写了一个小时的汇总文章~*/
    1.2 freecodecamp JS + 响应式网页设计 min
    	/*  */
    1.3 JS 30demos 80min
    // 每天完成一个 不要求完全理解 先做一个初步的认知
    // 没有完全了解的/觉得很好的 都要特意标记出来 二刷时候再去好好理解下！
    	/* 今天这个demo核心代码就十几行 理解之后发现这几行代码很美妙！~ 实现了非常有趣的“输入秘籍得到反馈”效果
        */
    1.4 react前置知识 90min
    	/* ajax有点难啊！放弃尚硅谷这个了 有点劝退 明天早起敲一下案例巩固一下 */
    
    // 这些内容都是要重点掌握的！
    DOM编程 BOM使用 —— 复习
    事件代理/委托
	事件队列(setTimeout/setInterval/Promise)
	JSON
    Ajax/Fetch
	正则表达式

2.核心基础知识 下午开始学计网 + 刷题
	2.1 计网 60min
		/*  */
	2.2 操作系统 min
		/*  */

3.面试刷题
	3.1 刷算法 刷力扣 min	
    // 【1】阅读掘金小册 + 按照代码随想录推荐【2】刷题
    	/* 掘金小册 4/28 代码随想录数组 
        
        */   
    
    	// 每个阶段结束后 简单总结下应对某种数据结构/对应类型的题目 应该怎么去想
    	数组 + 排序 第五周
        链表 + 二叉树 第六周
        字符串 + 二叉树 + 栈/队列 第七周
        双指针 + 遍历专题DFS BFS 第八周
        回溯算法 + 贪心算法 第九周
        动态规划 第十周
    3.2 面试题 min
    // 有空可以读一些面试题 查缺补漏一下~
		/*  */  
    
4.前端开发框架 
	4.1 react学习 10min
    // 尚硅谷课程 官方文档五子棋demo
		/* 决定了下之后的学习路径 */
    
5.前端进阶知识学习
// 学完JS再学这个辽！
    Node.js
	webpack
6.其他 
7.每日总结 40min
```



> 学习顺序预告

- [ ] 计网
- [ ] JS高级快速回顾 
- [ ] JS基础快速过
- [ ] JS数组API总结、学习（学习数组去重、解构赋值）
- [ ] JS CSS 实操 各60min
- [ ] 刷算法 高级排序算法 + 链表专场
- [ ] JS30demos
- [ ] `promise` `ajax（稍微再学一下 不信学不懂了！）`



## 1.前端基础



### 前端基础知识



```js
//每日学到的知识点 可以写文章 可以记在心里 总结下来！
// 本阶段主要学习JS高级教程（尚硅谷）刷freecodecamp
1.JS数组去重问题
2.解构赋值的应用
3.this指向的问题
4.JS高级 基础知识深入的总结文章 https://juejin.cn/post/7015057932135956487
```



#### 1.面试高频 利用JavaScript实现数组去重

参考 写得很棒的文章 [JavaScript数组去重问题](https://juejin.cn/post/7014009223197491236) 同为大三在校生 为何人家如此优秀！

明天来复习一下~

##### 【1】原始方法 遍历



##### 【2】利用`res.indexOf(item)`查找是否item在res中是重复的



##### 【3】利用filter结合indexOf方法过滤获得res



##### 【4】排序+比较先前元素pre和当前元素是否相同 



##### 【5】结合【4】`arr.sort().filter(对应函数)` 更简单！



##### 【6】利用Set生成哈希表（很快啊！）

Set 对象允许你存储任何类型的唯一值，无论是原始值或者是对象引用。

所以我们可以利用Set的这一特性，来进行去重处理。

```js
var arr = [1,1,2,3,4,5,6,7,4,3,'1',8,'3','1','3','66']
// var hashtable = Array.from(new Set(arr));//[1, 2, 3, 4, 5, 6, 7, "1", 8, "3", "66"]
// Set原来是这么用的啊！之前一直都使用一个个比对+遍历 
function unique(arr){
	return Array.from(new Set(arr))
}

console.log(unique(arr));
```

###### 通过解构赋值进一步简化

```js
var arr = [1,1,2,3,4,5,6,7,4,3,'1',8,'3','1','3','66']

function unique(arr){
	return [...new Set(arr)]
}

console.log(unique(arr));
```

###### 极简箭头函数

```js
var arr = [1,1,2,3,4,5,6,7,4,3,'1',8,'3','1','3','66']
var unique = (arr) => return [...new Set(arr)];// 就是把常规函数形式 变了一下下~
console.log(unique(arr));
```



#### 2.解构赋值的应用

很棒的一个大三前端大佬的博客中的内容

依旧是明天来复习下

https://blog.wangez.site/posts/1586874348.html/

#### 3.this指向的学习

[用中国话学this指向](https://juejin.cn/post/6979840850175983629)





## 2.核心基础知识

### 计网

```js
//小林的图解网络随时翻阅 & 极客时间趣谈网络协议+网上的文章 & 读图解HTTP TCP等书籍 & 网络抓包实操练习  深入理解
// 每天一道计网面试题 把自己带入面试者的身份 跟面试官白话白话 嗯就这样子
今天没学 明天再来补充~
1.复习一下HTTPS连接过程（其实还是有些一知半解 反复、多角度地看吧！）
2.复习、补充GET POST 的区别
3.Session Cookie的区别
```





#### 1.[HTTPS的连接过程](https://github.com/wolverinn/Waking-Up/blob/master/Computer Network.md#https的连接过程)

一共有两个半来回~最后一次验证的操作是客户端做的 确认无误 握手结束数据传输开始（使用对称加密算法）

> 第一次 
>
> - 客户端发请求 发过去支持的加密规则 
> - 服务端发送它选择的加密规则 发送身份信息
>
> 第二次
>
> - 客户端验证服务器的合法性（证书、公钥等）将加密后的随机密钥和摘要一起发给服务器
> - 服务器用自己的私钥解密 并验证摘要（指纹验证）一致则使用对称加密的方式加密握手信息发给客户端
>
> 最后的验证
>
> - 客户端解密这条握手信息 验证摘要（指纹验证） 若一致 握手结束 解除以下风险
>   - 窃听风险（混合加密 让网络上的坏蛋~听不到）
>   - 篡改风险（用摘要算法验证报文是否被改过）
>   - 冒充风险（服务端公钥放在数字证书中）

- 【1】客户端 向 服务器发送——

  - 请求
  - 客户端支持的一套加密规则
    - 对称加密算法
    - 非对称加密算法（采用混合加密~）
    - 摘要算法

- 【2】服务器从中选出一组加密算法和HASH算法 并将自己的身份信息以——

  - 证书
    - 网站地址
    - **加密公钥**（用于**非对称加密**）
    - 证书的颁发机构 等信息
    - （私钥只能用于服务器端进行解密~）

  的形式发回给浏览器（客户端）

- 【3】客户端 验证 服务器的合法性

  - 证书是否过期 / CA(证书权威机构)是否可靠 
  - 发行者证书的公钥能否正确解开服务器证书的”发行者的数字签名“ 
  - 服务器证书上的域名是否和服务器的实际域名相匹配 

- 【4】如果证书受信任

  - 浏览器会生成一个**随机密钥**（用于**对称算法**）
    - 并用服务器提供的**公钥加密**（采用非对称算法对密钥加密）
  - 浏览器会使用Hash算法（**摘要算法**）对握手消息进行摘要计算（相当于设置指纹）
    - 并对摘要使用之前产生的密钥加密（**对称算法**）
  - 最后 客户端将加密后的随机密钥和摘要一起发送给服务器

- 【5】服务器用自己的私钥解密 得到——对称加密的密钥 用这个密钥解密出Hash摘要值 并验证握手消息是否一致——（相当于验证指纹）

  - 如果一致 服务器使用对称加密的**密钥加密握手消息**发给浏览器

- 【6】浏览器解密并验证摘要 若一致 则握手结束

  - 之后的数据传送**都使用对称加密的密钥**进行加密

总结：

1.使用的混合加密算法中的——（解决窃听的问题）

- 非对称加密算法 用于在握手过程中加密生成的代码（也就是通信建立之前使用非对称加密）
- 对称加密算法 用于对真正传输的数据进行加密

![请添加图片描述](https://img-blog.csdnimg.cn/3de331f52a0f4778ab1bd691b06ad67d.png)

2.摘要算法用于验证数据的完整性（相当于”指纹“ 预防了”第三方篡改“的风险）

![请添加图片描述](https://img-blog.csdnimg.cn/2d22159e59964e4081ddfc1628039745.png)



3.通过**将服务器公钥放入数字证书中** 解决了冒充的风险

客户端先向服务器端索要公钥，然后用公钥加密信息，服务器收到密文后，用自己的私钥解密。

这就存在些问题，如何**保证公钥不被篡改和信任度**？

所以这里就需要借助第三方权威机构 `CA` （数字证书认证机构），将**服务器公钥放在数字证书**（由数字证书认证机构颁发）中，只要证书是可信的，公钥就是可信的。

![数子证书工作流程](https://mmbiz.qpic.cn/mmbiz_jpg/J0g14CUwaZfXG1113Sjm0iaOXfoOv0tlUibyiaEab7NMrTn632LZmYQe5qaibibT0xsOs7ic6u98ypWJBjbPMzOUCb2g/640?wx_fmt=jpeg)

一句话小结：通过数字证书的方式**保证服务器公钥的身份**（将服务器公钥放在数字证书中 客户端使用CA的公钥确认服务器的数字证书后即可保证服务器公钥的身份），解决冒充的风险。





#### 2.[GET与POST的区别](https://github.com/wolverinn/Waking-Up/blob/master/Computer%20Network.md#get%E4%B8%8Epost%E7%9A%84%E5%8C%BA%E5%88%AB)

这里对安全性的探讨就很深刻了 贴两篇文章（不一定完全正确哈 我反正还是认为GET方法安全 因为没对服务器上的数据进行更改呐~）

[讨论“get”和“post”安全性](https://blog.csdn.net/liujiahan629629/article/details/18511079)

[为什么大型网站都采用get方法，而非post方法](https://blog.csdn.net/findsafety/article/details/47129021)

【1】GET是幂等的,即读取同一个资源,总是得到相同的数据,POST不是幂等的;

【2】GET一般用于从服务器获取资源，而POST有可能改变服务器上的资源（发起对某块儿数据进行更改的POST请求）；

【3】**请求形式**上：GET请求的数据附在URL之后，在HTTP请求头中；POST请求的数据在请求体中；

【4】安全性：GET请求可被缓存、收藏、保留到历史记录，且其请求数据明文出现在URL中。POST的参数不会被保存，安全性相对较高；**这里观点与小林的图解Coding不同了！这个观点也确实争议比较大 我更倾向于图解网路中的说法hh**

> [讨论“get”和“post”安全性](https://blog.csdn.net/liujiahan629629/article/details/18511079)
>
> [为什么大型网站都采用get方法，而非post方法](https://blog.csdn.net/findsafety/article/details/47129021)

【5】GET只允许ASCII字符，POST对数据类型没有要求，也允许二进制数据；

【6】GET的长度有限制（操作系统或者浏览器），而POST数据大小无限制

#### 3.[Session与Cookie的区别？](https://github.com/wolverinn/Waking-Up/blob/master/Computer%20Network.md#session%E4%B8%8Ecookie%E7%9A%84%E5%8C%BA%E5%88%AB)

> 这里注意不要混淆 **session** 和 **session实现**
>
> - **session**是一个抽象概念 开发者为了实现中断和继续等操作 将use agent（用户代理）和server（服务器）之间一对一的交互 抽象为“会话” 进而衍生出”会话状态“ 也就是session
> - **session的实现**（也就是我们今天所说的session）是为了绕开cookie的各种限制 通常借助cookie本身和后端存储实现的 是一种更高级的会话状态实现
>   - cookie是一个实际存在的东西 是http协议定义在header中的字段 可以认为是session的一种后端无状态实现~
>
> session因为`sessionid`的存在 通常需要借助Cookie实现（下面有说到）是通用性比较好的实现方案 （下面提到了 如果禁用Cookie的话 也可以使用URL重写机制来保存`Sessionid`）
>
> > 来自知乎 https://www.zhihu.com/question/19786827





- Session是服务器端保持状态的方案
  - 保存在服务端 通过检索`Sessionid`查看状态 （也就是session的运行依赖`Sessionid`  `Sessionid` 存在cookie中~）
  - 保存`Sessionid`的方法可以采用——
    - Cookie
    - 禁用Cookie的话 可以使用URL重写机制（把会话ID保存在URL中）
- Cookie是客户端保持状态的方案
  - 保存在客户端本地 客户端请求服务器时会将Cookie一起提交

总结一下

- 首先 概念 session：会话控制（状态） cookie HTTP协议定义在header中的字段 是[存储在用户本地终端上的数据](https://baike.baidu.com/item/cookie/1119?fr=aladdin)

- 【1】session的常见实现要借助cookie来发送`Sessionid` 
- 【2】维持一个会话的==核心==是客户端的唯一标识—— `Sessionid` 

###  操作系统

```js
// 小林的图解系统 & 学校课程学习 & 王道考研-OS 三者配合 高效学习
// 要看一下学校的ppt了 课程旷了好几节有点听不懂！
```



## 3.面试题

### 面试题、面经总结

```js
//网上面试题、面经辣么多 一天多看一些 然后同时也要研究一些题的答案！
```



### 算法题

```js
// 跟着掘金小册、代码随想录的内容进行学习！
今天没学！
```



## 4.前端开发框架

### 项目开发前置知识

```js
// 学到了尚硅谷react第四章 老师表示 “先学完Ajax Promise axios再回来吧！”
1.AJAX从入门到崩溃！我不学啦！捣鼓了一个半小时 找了一堆资源 拿它们学吧。。这个尚硅谷的视频内容有点儿多噻 明天直接promise了
```



### react基础知识

```js
// 现阶段学习广受好评的react教程尚硅谷 
```



### react练手项目

```js
// 尚硅谷课程接下来的案例
// 掘金 记账本egg.js+react全栈 
```



# 2021.10.5 *经典原型链图在这里！

许久未见的低迷 

明天加把劲哈！补回来！

```js
// DDL
	01 10.4-7 一天复习一章 
	02 算法题 链表 二叉树部分 排序算法部分 10.10
    03 Promise 10.5 6 axios 10.7 8 
```



```js
// 今日主要收获 & 学习时间
Totally 210min
1.前端基础知识 
// 从早上-中午 拿出一整块时间学习JS 晚上跑完步回来继续看JS 重视基础！
// 不要浮于表面地看问题 深入进去！多向自己提问！
    1.1 JS学习 100+30min 
    // 每日重点！编码 + 知识点记录
    // 近期重点 作用域、闭包、原型链 + ES6 + Ajax axios
		/* 复习原型链、执行上下文栈、作用域链 */
    1.2 freecodecamp JS + 响应式网页设计 30min
    	/* 学习了些JS的内容 */
    1.3 JS 30demos min
    // 每天完成一个 不要求完全理解 先做一个初步的认知
    // 没有完全了解的/觉得很好的 都要特意标记出来 二刷时候再去好好理解下！
    	/* 
        */
    1.4 react前置知识 min
    	/*  */
    
    // 这些内容都是要重点掌握的！
    DOM编程 BOM使用 —— 复习
    事件代理/委托
	事件队列(setTimeout/setInterval/Promise)
	JSON
    Ajax/Fetch
	正则表达式

2.核心基础知识 下午开始学计网 + 刷题
	2.1 计网 20min
		/* 找了一下学习资源 发现还是图解网络更好！ */
	2.2 操作系统 min
		/*  */

3.面试刷题
	3.1 刷算法 刷力扣 20min	
    // 【1】阅读掘金小册 + 按照代码随想录推荐【2】刷题
    	/* 掘金小册 4/28 代码随想录链表 1/9
        翻转链表
        */   
    
    	// 每个阶段结束后 简单总结下应对某种数据结构/对应类型的题目 应该怎么去想
    	数组 + 排序 第五周
        链表 + 二叉树 第六周
        字符串 + 二叉树 + 栈/队列 第七周
        双指针 + 遍历专题DFS BFS 第八周
        回溯算法 + 贪心算法 第九周
        动态规划 第十周
    3.2 面试题 min
    // 有空可以读一些面试题 查缺补漏一下~
		/*  */  
    
4.前端开发框架 
	4.1 react学习 min
    // 尚硅谷课程 官方文档五子棋demo
		/*  */
    
5.前端进阶知识学习
// 学完JS再学这个辽！
    Node.js
	webpack
6.其他 
7.每日总结 10min
```



> 学习顺序预告
>
> 这里说的实操 都是在 `freecodecamp` 中进行练习

第一天就寄了！这事儿闹的 明天一定！

- [x] 计网
- [x] JS高级快速回顾 
- [ ] ~~JS基础快速过~~ 
- [x] JS数组API总结、学习（学习数组去重、解构赋值）- 晚上 
- [x] JS CSS 实操 
- [x] 刷算法 高级排序算法 + 链表专场 - 晚上
- [ ] ~~JS30demos~~ 
- [ ] ~~`promise` `ajax（稍微再学一下 不信学不懂了！）`~~ 
- [ ] react实操  



## 1.前端基础



### 前端基础知识



```js
//每日学到的知识点 可以写文章 可以记在心里 总结下来！
// 本阶段主要学习JS高级教程（尚硅谷）刷freecodecamp
1.JS数组去重问题
2.解构赋值的应用
3.顺着原型链找方法的面试题复习 涉及了构造函数、Object、Function的原型对象！
4.执行上下文栈
5.作用域链
6.数组扁平化的六种方法
```



#### 1.面试高频 利用JavaScript实现数组去重

参考 写得很棒的文章 [JavaScript数组去重问题](https://juejin.cn/post/7014009223197491236) 同为大三在校生 为何人家如此优秀！

```js
var arr = ['v','i','o','l','i','n','C','o','d','i','n','g'];
```

目的 去除 violin Coding 这个字符串中每个字母组成的**数组**中的重复字符

##### 【1】原始方法 遍历

```js
// 01 暴力双层循环
function iteration(){
    for(let i = 0; i < arr.length; i++){
        var isNotRepeat = true;
        for(let j = 0; j < res.length; j++){
            if(arr[i] === res[j]){
                isNotRepeat = false;
                break;
            }
        }
        if(isNotRepeat){
            res.push(arr[i]);
            console.log(res);
        }
    }
}
```



##### 【2】利用`res.indexOf(item)`查找是否item在res中是重复的



##### 【3】利用filter结合`indexOf`方法过滤获得res



##### 【4】排序+比较先前元素pre和当前元素是否相同 



##### 【5】结合【4】`arr.sort().filter(对应函数)` 更简单！



##### 【6】利用Set生成哈希表（很快啊！）

Set 对象允许你存储任何类型的唯一值，无论是原始值或者是对象引用。

所以我们可以利用Set的这一特性，来进行去重处理。

```js
var arr = [1,1,2,3,4,5,6,7,4,3,'1',8,'3','1','3','66']
// var hashtable = Array.from(new Set(arr));//[1, 2, 3, 4, 5, 6, 7, "1", 8, "3", "66"]
// Set原来是这么用的啊！之前一直都使用一个个比对+遍历 
function unique(arr){
	return Array.from(new Set(arr))
}

console.log(unique(arr));
```

###### 通过解构赋值进一步简化

```js
var arr = [1,1,2,3,4,5,6,7,4,3,'1',8,'3','1','3','66']

function unique(arr){
	return [...new Set(arr)]
}

console.log(unique(arr));
```

###### 极简箭头函数

```js
var arr = [1,1,2,3,4,5,6,7,4,3,'1',8,'3','1','3','66']
var unique = (arr) => return [...new Set(arr)];// 就是把常规函数形式 变了一下下~
console.log(unique(arr));
```



#### 2.解构赋值的应用

很棒的一个大三前端大佬的博客中的内容

10.6学习

https://blog.wangez.site/posts/1586874348.html/



#### 3.顺着原型链找方法 终极版本

```js
function F(){}
Object.prototype.a = function(){
    // Object的原型对象上增添了一个a方法
    console.log('a()')
}
Function.prototype.b = function(){
    console.log('b()')
}
var f = new F()
f.a()//【1】可以找到
f.b()//【2】报错 b不是一个函数
F.a()//【3】可以找到
F.b()//【4】可以找到
```

重点就是那个原型链的图！

![在这里插入图片描述](https://img-blog.csdnimg.cn/98c5698e603342d5b916fdf65b25433f.png)

来捋一捋

（根据隐式原型属性 `__proto__` 去指向）

【1】

- **实例对象f** - 构造函数的显式原型对象 `F.prototype`
- 构造函数的显式原型对象 `F.prototype` - `Object.prototype`
- `Object.prototype` - null

一条链结束 所以实例对象可以引用Object原型对象上的方法

【2】

- **构造函数F** - `Function.prototype`

- `Function.prototype` - `Object.prototype`
- `Object.prototype` - null

一条链结束

说明构造函数可以使用Object Function原型对象上的方法



本题答案很明显咯~

#### 4.执行上下文栈

```js

var a = 10;
var bar = function(x){
    var b = 5;
    console.log("bar入栈")
    foo(x + b);
}
var foo = function(y){
    var c = 5;
    console.log("foo入栈")
    console.log(b);// 报错 b is not defined 当然了！不同函数作用域中存在“变量隔离”~
    console.log(a + c + y);// 30 （10 + 15 + 5）
}
bar(10);
```

【1】全局上下文环境入栈 - 1（行代码处）也就是全局代码执行前~

【2】bar函数上下文环境入栈 - 1

【3】foo函数上下文函数入栈 - 6

【4】foo函数上下文函数出栈 

【5】bar函数上下文函数出栈



#### 5.执行上下文栈面试题复习 递归



```js
foo(1);
function foo(i) {
    if (i == 4) {
        return;
    }
    console.log('foo() begin:' + i);
    foo(i + 1);
    console.log('foo() end:' + i);
}
输出 // 1 2 3 3 2 1
```

进入一个上下文

则入栈一个上下文！

![请添加图片描述](https://img-blog.csdnimg.cn/521009f83144442592863ef335ab93a7.png)

等到了`i=4` 则开始出栈

#### 6.作用域是静态的！面试题考察静态性-面试题1复习

```js
var x = 10;
function fn(){
    console.log(x);// 10
}
function show(f){
    var x = 20;
    f();
}
show(fn);// 打印10
```

记住一句话——

**在其他函数中被调用不影响x在打印语句中的值**（x在一开始定义的时候就确定了 打印的x是全局中的（毕竟是在人家全局那里调用的函数show嘛~））

```js
// 变式
var x = 10;
function fn(){
    console.log(x);// 10
}
function show(f){
    var x = 20;
    f();
}
show((x) => console.log(x));// 20 -这里的x很明显就是show函数作用域中的了~（为20）
show(fn);// 打印10
```



#### 7.作用域链面试题~沿着作用域链找某个变量-面试题2复习

```js
var fn = function () {
    console.log(fn)//function(){console.log(fn)}
    var fn2 = function(){
      	console.log("找不到我吧~");
    }
}
fn()

var obj = {
    fn2: function () {
        console.log(fn2)// 报错 fn2 is not defined
        console.log(this.fn2)//function(){...}
    }
}
obj.fn2()
```

- 首先 第二行的打印是 fn对象（人家顺着作用域链就能轻松找到位于全局作用域中的fn咯~）
- 第十一行 报错 来看看fn2的心路历程
  - 先在fn2构造函数的函数作用域中找 没有定义过fn2！ 
  - 再去全局作用域里找 全局变量也没它这号变量！
  - 再去同级的函数作用域里找找行么？
    - 不行！😂

- 第十二行 打印fn2对象 加上this 表示obj对象 obj对象拥有这个fn2函数啊 没问题~



#### 8.数组扁平化

```js
var arr = [1, [2, 3, [4, 5, [6]]]]
```

10.6学习

[js如何实现数组扁平化](https://blog.csdn.net/original_heart/article/details/78906911?utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7Edefault-2.no_search_link&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7Edefault-2.no_search_link)









## 2.核心基础知识

### 计网

```js
//小林的图解网络随时翻阅 & 极客时间趣谈网络协议+网上的文章 & 读图解HTTP TCP等书籍 & 网络抓包实操练习  深入理解
// 每天一道计网面试题 把自己带入面试者的身份 跟面试官白话白话 嗯就这样子

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
```



### 算法题

```js
// 跟着掘金小册、代码随想录的内容进行学习！
简单刷了一道反转链表
```



## 4.前端开发框架

### 项目开发前置知识

```js
// 学到了尚硅谷react第四章 老师表示 “先学完Ajax Promise axios再回来吧！”
```



### react基础知识

```js
// 现阶段学习广受好评的react教程尚硅谷 
```





# 2021.10.6 *如何高效自学方法总结 *JS实现继承的图在这里！

> > 来自KieSun
>
> [
> ![Z0qdJz](https://camo.githubusercontent.com/74cc97d08429dd26cbad4dad2671811896f2693070ab912be1310a107fd032c2/68747470733a2f2f79636b2d313235343236333432322e66696c652e6d7971636c6f75642e636f6d2f755069632f5a3071644a7a2e706e67)](https://camo.githubusercontent.com/74cc97d08429dd26cbad4dad2671811896f2693070ab912be1310a107fd032c2/68747470733a2f2f79636b2d313235343236333432322e66696c652e6d7971636c6f75642e636f6d2f755069632f5a3071644a7a2e706e67)
>
> 这个学习方法笔者百试百灵，学习任何技术都会用上这个思路。另外我们还能通过这个思路拓宽自己的技术栈，将各个知识联系起来建立自己的知识体系，并且通过这种学习方式学到的知识也不容易遗忘。



```js
// DDL
	01 10.4-8 一天复习一章（中间有一章是两集） 
	02 算法题 链表 二叉树部分 排序算法部分 10.10
    03 Promise 10.5 6 7 axios 10.8 
```



有些高开低走的一天

DDL到了 任务没完成orz

```js
// 今日主要收获 & 学习时间
Totally 430min
1.前端基础知识 
// 从早上-中午 拿出一整块时间学习JS 晚上跑完步回来继续看JS 重视基础！
// 不要浮于表面地看问题 深入进去！多向自己提问！
    1.1 前端基础学习 10+130+30min 
    // 每日重点！编码 + 知识点记录
    // 近期重点 作用域、闭包、原型链 + ES6 + Ajax axios
		/* 1.找到了一些不错的新资源与新学习思路 今天试着这样学习promise！
        2.复习了作用域链 复习了闭包 了解了更多
        JS实现继承的实践 非常棒！
      	3.回忆起了自己之前做的HTML+CSS品优购项目~*/
    1.2 freecodecamp JS + 响应式网页设计 60min
    	/*  */
    1.3 JS 30demos min
    // 每天完成一个 不要求完全理解 先做一个初步的认知
    // 没有完全了解的/觉得很好的 都要特意标记出来 二刷时候再去好好理解下！
    	/* 
        */
    1.4 react前置知识 min
    	/*  */
    
    // 这些内容都是要重点掌握的！
    DOM编程 BOM使用 —— 复习
    事件代理/委托
	事件队列(setTimeout/setInterval/Promise)
	JSON
    Ajax/Fetch
	正则表达式

2.核心基础知识 下午开始学计网 + 刷题
	2.1 计网 60min
		/* 复习下HTTP的特性 包括HTTP/1.1协议的优缺点；HTTP/1.1协议的性能问题：
        	相对于/1.0有性能提升的长连接
        	管道网络传输
        	因为HTTP请求-应答模式导致的队头堵塞问题*/
	2.2 操作系统 min
		/*  */

3.面试刷题
	3.1 刷算法 刷力扣 130min	
    // 【1】阅读掘金小册 + 按照代码随想录推荐【2】刷题
    	/* 掘金小册 6/28 代码随想录链表 1/9
        三道链表基础题——合并、删除
        */   
    
    	// 每个阶段结束后 简单总结下应对某种数据结构/对应类型的题目 应该怎么去想
    	数组 + 排序 第五周
        链表 + 二叉树 第六周
        字符串 + 二叉树 + 栈/队列 第七周
        双指针 + 遍历专题DFS BFS 第八周
        回溯算法 + 贪心算法 第九周
        动态规划 第十周
    3.2 面试题 min
    // 有空可以读一些面试题 查缺补漏一下~
		/*  */  
    
4.前端开发框架 
	4.1 react学习 min
    // 尚硅谷课程 freecodecamp
		/*  */
    
5.前端进阶知识学习
// 学完JS再学这个辽！
    Node.js
	webpack
6.其他 
	毛概小组作业 论内卷 10min
7.每日总结 min
```



> 学习顺序预告
>
> 这里说的实操 都是在 `freecodecamp` 中进行练习



- [x] 计网
- [x] JS高级快速回顾 
- [ ] ~~JS基础快速过~~ 
- [ ] ~~JS数组API总结、学习（学习数组去重、解构赋值、数组扁平化）~~
- [x] JS CSS 实操 
- [x] 刷算法 高级排序算法 + 链表专场 
- [ ] ~~JS30demos~~ 
- [ ] ~~`promise` `ajax（稍微再学一下 不信学不懂了！）`~~ 
- [ ] ~~react实操~~  



## 1.前端基础



### 前端基础知识



```js
//每日学到的知识点 可以写文章 可以记在心里 总结下来！
// 本阶段主要学习JS高级教程（尚硅谷）刷freecodecamp
1.JS数组去重问题
2.解构赋值的应用
3.数组扁平化的六种方法
4.闭包的复习——经典闭包题 调用n次外部函数 产生n个闭包
	闭包到底是什么？
    产生闭包的条件 闭包死亡的情况
	闭包的作用——定义JS模块 保证其私有性 只向外暴露对象
    闭包的缺点
5.JS实现继承的最佳实践——原型链 + 构造函数的call方法
6.freecodecamp 写一个函数来操作对象中的属性
	频繁使用 obj[变量] 对 对象 中的变量进行操作
    if(obj.hasOwnProperty(对象属性名) === false) 来判断对象中是否有这个属性
7.JS数组未必是真正的数组

```



#### 1.面试高频 利用JavaScript实现数组去重

参考 写得很棒的文章 [JavaScript数组去重问题](https://juejin.cn/post/7014009223197491236) 同为大三在校生 为何人家如此优秀！

```js
var arr = ['v','i','o','l','i','n','C','o','d','i','n','g'];
```

目的 去除 violin Coding 这个字符串中每个字母组成的**数组**中的重复字符

##### 【1】原始方法 遍历

```js
// 01 暴力双层循环
function iteration(){
    for(let i = 0; i < arr.length; i++){
        var isNotRepeat = true;
        for(let j = 0; j < res.length; j++){
            if(arr[i] === res[j]){
                isNotRepeat = false;
                break;
            }
        }
        if(isNotRepeat){
            res.push(arr[i]);
            console.log(res);
        }
    }
}
```



##### 【2】利用`res.indexOf(item)`查找是否item在res中是重复的



##### 【3】利用filter结合`indexOf`方法过滤获得res



##### 【4】排序+比较先前元素pre和当前元素是否相同 



##### 【5】结合【4】`arr.sort().filter(对应函数)` 更简单！



##### 【6】利用Set生成哈希表（很快啊！）

Set 对象允许你存储任何类型的唯一值，无论是原始值或者是对象引用。

所以我们可以利用Set的这一特性，来进行去重处理。

```js
var arr = [1,1,2,3,4,5,6,7,4,3,'1',8,'3','1','3','66']
// var hashtable = Array.from(new Set(arr));//[1, 2, 3, 4, 5, 6, 7, "1", 8, "3", "66"]
// Set原来是这么用的啊！之前一直都使用一个个比对+遍历 
function unique(arr){
	return Array.from(new Set(arr))
}

console.log(unique(arr));
```

###### 通过解构赋值进一步简化

```js
var arr = [1,1,2,3,4,5,6,7,4,3,'1',8,'3','1','3','66']

function unique(arr){
	return [...new Set(arr)]
}

console.log(unique(arr));
```

###### 极简箭头函数

```js
var arr = [1,1,2,3,4,5,6,7,4,3,'1',8,'3','1','3','66']
var unique = (arr) => return [...new Set(arr)];// 就是把常规函数形式 变了一下下~
console.log(unique(arr));
```



#### 2.解构赋值的应用

很棒的一个大三前端大佬的博客中的内容

10.6学习

https://blog.wangez.site/posts/1586874348.html/



#### 3.作用域链

 多个嵌套的作用域形成的**由内向外**的结构, 用于**查找变量**

```js
var a = 2;
function fn1(){
    var b = 3;
    function fn2(){
        var c = 4;
        console.log(c);// 4
        console.log(b);// 3
        console.log(a);// 2
        console.log(d);// 报错 d is not defined
        console.log(a.b);// undefined 
    }
    fn2();
}
fn1();
```

寻找`a.b` 先顺着作用域链找 找到了a再顺着原型链找b~

#### 4.调用n次外部函数 内部函数产生n个闭包！

```js
    <button>1</button>
    <button>2</button>
    <button>3</button>
    <button>4</button>
    <button>5</button>

    <script>
        var btns = document.getElementsByTagName('button');
        for(var i = 0,length = btns.length; i < length; i++){
            (function(i){// 这个立即函数执行是产生闭包的关键
                // 如果不让btns[i]处于函数作用域中 点击调用的回调函数将获得外层的i（=5）且点哪个按钮都只会产生这个i=5的闭包
                var btn = btns[i];
                btn.onclick = function(){
                    alert("第" + (i + 1) + "个");
                }
            })(i)
        }
    </script>
```

产生了n个闭包（这里例子中就是产生了5个闭包）

闭包在点击这个过程中（函数执行完了） 是没有释放的~

注意内部函数是被按钮对象引用了（使用onclick）所以这个闭包一直不会消失

> 换句话说 只要按钮不释放 这个闭包就不会消失~
>
> 使用 `btn.onclick = null` 释放闭包 解决内存泄露问题~

![在这里插入图片描述](https://img-blog.csdnimg.cn/d1b1e2768a9f4228bb14a668506915b7.png)



#### 5.闭包到底是什么？

当一个嵌套的子函数引用了嵌套的外部（父）函数的 **变量/函数** 时  就产生了闭包！

我们通过chrome调试查看——了解一下闭包到底是个啥？

- 理解1：闭包是嵌套的内部函数（大众一些的说法）
- 理解2：闭包是 **包含被引用变量（/函数）的对象** （比较少见的说法哈）

#### 6.产生闭包的条件 闭包死亡的情况

即闭包生命周期的问题

- 产生：嵌套内部函数定义执行完就产生了（==不是调用的时候产生的！==）

- 死亡：嵌套的内部函数成为**垃圾对象**时
  - 另外：**外部函数执行完之后** 只要在内部函数中 没有用变量接收闭包的返回值 **闭包直接就结束生命周期了！**（也可以说 成为垃圾对象）



```js
function fn1() {
    // 此时闭包就已经产生了(函数提升, 内部函数对象已经创建了)
    // 在被调用之前就产生了闭包！
    var a = 2
    function fn2 () {
        a++
        console.log(a)
    }
    return fn2
}
var f = fn1()
f() // 3
f() // 4
f = null //闭包死亡(包含闭包的函数对象成为垃圾对象)
```

![在这里插入图片描述](https://img-blog.csdnimg.cn/dab1776a3d5f45919f67f5e33a3dbd5b.png)













#### 7.闭包的作用：定义JS模块化

简单来说就是让JS模块中的变量、方法等 是“**私有**”的

只向外暴露一个包含n个方法的对象/函数



```js
// myModule2.js 使用立即执行函数为佳
(function () {
  //私有数据
  var msg = 'My atguigu'
  //操作数据的函数
  function doSomething() {
    console.log('doSomething() '+msg.toUpperCase())
  }
  function doOtherthing () {
    console.log('doOtherthing() '+msg.toLowerCase())
  }

  //向外暴露对象(给外部使用的方法)
  window.myModule2 = {
    doSomething: doSomething,
    doOtherthing: doOtherthing
  }
})()
```

```js
// 使用的时候这么用就OK了！
<script type="text/javascript" src="myModule2.js"></script>
<script type="text/javascript">
  myModule2.doSomething()
  myModule2.doOtherthing()
</script>
```



使用function也能达到这个效果 不过用上面的立即执行函数更简单~

```js
// myModule.js
function myModule() {
  //私有数据
  var msg = 'My atguigu'
  //操作数据的函数
  function doSomething() {
    console.log('doSomething() '+msg.toUpperCase())
  }
  function doOtherthing () {
    console.log('doOtherthing() '+msg.toLowerCase())
  }

  //向外暴露对象(给外部使用的方法)
  return {
    doSomething: doSomething,
    doOtherthing: doOtherthing
  }
}

```

```js
// 使用的时候这么用就OK了！
<script type="text/javascript" src="myModule.js"></script>
<script type="text/javascript">
  var module = myModule()
  module.doSomething()
  module.doOtherthing()
</script>
```





#### 8.闭包的缺点（之前的优点）

- 函数执行完之后 函数内的局部变量没有释放 占用内存时间会变长  

```js
function fn1(){
    var arr = new Array[10000000]
    function fn2(){
        console.log(arr.length);
    }
    return fn2;
}
var f = fn1();
f();// fn1形成闭包 本该释放的arr变量现在不会被释放！
```

所以需要及时释放

```js
f = null;// 解放空间！
```



- 容易造成内存泄露（一块内存空间被长期占用而不被释放）

```js
function fn(){
    a = new Array(1000000);// a为意外的全局变量 会造成内存泄漏
    console.log(a);
}
fn();// a变量不会被回收 一直存在 
```



- 可能导致==内存溢出==（面试高频）

```js
var obj = {};
for(var i = 0; i < 10000; i++){
    obj[i] = new Array(1000000);// new Array(1000000)定义一个长度为1000000的数组
    console.log('------')
}// 这个代码会导致内存溢出 浏览器会做一个崩溃的设置 终止程序
```





解决方案：

- 能不用闭包就不用
- 及时释放(让嵌套的内部对象成为垃圾对象)



#### 9.JS实现继承的最佳实践

> 使用 原型链结合构造函数
>
> 在父类型属性有很多条时 使用 `Parent.call(this,父函数属性)` 让子类型继承

```js
function Parent(attribute,other){
    this.attribute = attribute;
    this.other = other;
}
Parent.prototype.output = function(){
    console.log("此方法位于Parent的显式原型中  Child构造函数继承了我 所以Child的实例对象可以顺着隐式原型连找到这个对象（在Object对象上）");
}
function Child(attribute, other){
    Parent.call(this,attribute,other);// 继承父类型的属性
}
Child.prototype = new Parent();// 原型链继承！让子类型的显式原型指向父类型的实例！
Child.prototype.constructor = Child;// 出于严谨 这里修正constructor属性 要不然Child的显式原型的constructor就是Parent了 这就很奇怪！
var child = new Child('a', 'b');// ['a', 'b']
child.output();
```

![在这里插入图片描述](https://img-blog.csdnimg.cn/73bdd1e607af4508870095cf0d8ffd98.png)

上面的属性的输出有些问题

JS继承最佳实践完整版输出如下：

![在这里插入图片描述](https://img-blog.csdnimg.cn/12053e2fc0e9454696d32fcf45227495.png)

好吧上面的还是不全 有点小问题——

```js
Child.prototype.constructor = Child;// 出于严谨 这里修正constructor属性 要不然Child的显式原型的constructor就是Parent了 这就很奇怪！
// 修正完 constructor指向Child构造函数
```



#### 10.数组扁平化

```js
var arr = [1, [2, 3, [4, 5, [6]]]]
```

10.6学习

[js如何实现数组扁平化](https://blog.csdn.net/original_heart/article/details/78906911?utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7Edefault-2.no_search_link&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7Edefault-2.no_search_link)





#### 11.JS数组未必是真正的数组~

纯数字数组对应的是连续的内存！

- 但如果我们定义了不同类型的元素：

```js
// 这种元素类型各不相同的“数组”对应的是不连续的内存 
const arr =['bill',666,{bill:666}];
```

JS数组**不再具有数组的特征** 

其底层是用哈希映射分配内存空间（是用对象链表来实现的）

> 问到数组、链表的区别
>
> 可以说一下这个最好~

- 链表 的 增删 高效——O(1) ； 访问 时间复杂度高——O(N)！
- 数组相反~



## 2.核心基础知识

### 计网

```js
//小林的图解网络随时翻阅 & 极客时间趣谈网络协议+网上的文章 & 读图解HTTP TCP等书籍 & 网络抓包实操练习  深入理解
// 每天一道计网面试题 把自己带入面试者的身份 跟面试官白话白话 嗯就这样子
1.“来聊聊HTTP的一些特性
	HTTP的优点
    HTTP的缺点
    HTTP的性能如何？”
2.GET POST复习
```

#### HTTP的特性

> 图解网络2.1【1】

##### 1.HTTP（/1.1 也就是现在用到最多的协议）优点有哪些？怎么体现的？

- 简单

HTTP基本的报文格式就是`header+body` 头部信息也是 `key-value` 简单文本的形式 —— 易于理解 降低了学习和使用的门槛 所以说它的一个优点是简单

> HTTP报文格式：
>
> - 请求行 request line
>
> - 请求头部 header
>
> - 空行 blank line
>
> - 请求数据 request-body
>
> ![img](https://pic002.cnblogs.com/images/2012/426620/2012072810301161.png)
>
> 客户程序发送的请求以及服务器端的响应的格式——
>
> - 请求报文
>
> ![HTTP Request 请求报文格式](https://img-blog.csdn.net/20170330192653242?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvSG9sbW9meQ==/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)
>
> - 响应报文
>
> ![Response HTTP响应报文格式](https://img-blog.csdn.net/20170330192754102?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvSG9sbW9meQ==/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)





- 灵活&易于扩展

HTTP协议里的各类请求方法、URI/URL、状态码、头字段等每个组成要求都没有被固定死 都允许开发人员**自定义和扩充**

同时 HTTP 由于是⼯作在应⽤层（ OSI 第七层），则它**下层可以随意变化**

> 举个例子 可以发现HTTP协议的下层可以随意变化~（毕竟人家在上层嘛~）
>
> - HTTPS 也就是在 HTTP 与 TCP 层之间增加了 SSL/TLS 安全传输层
> - HTTP/3 甚⾄把 TCP 层换成了基于 UDP 的 QUIC

- 应用广泛&跨平台

互联⽹发展⾄今，HTTP 的应⽤范围⾮常的⼴泛，从台式机的浏览器到⼿机上的各种 APP，**从看新闻、刷贴吧到购物、理财、吃鸡，HTTP 的应⽤遍地开花**，同时天然具有**跨平台**的优越性





##### 2.HTTP协议的缺点有哪些

HTTP 协议⾥有优缺点⼀体的**双刃剑**，分别是==「⽆状态、明⽂传输」==，同时还有⼀⼤**缺点**「不安全」

- HTTP协议双刃剑

  - 无状态

    - 优点 服务器<u>不会去记忆 HTTP 的状态</u>，所以不需要额外的资源来记录状态信息，这能**减轻服务器的 负担**，能够把更多的 CPU 和内存⽤来对外提供服务。
    - 缺点 既然服务器没有记忆能⼒，它在**完成有关联性的操作时会非常麻烦**。 例如登录->添加购物⻋->下单->结算->⽀付，这系列操作都要知道⽤户的身份才⾏。但服务器不知道这些请求是有 关联的，每次都要问⼀遍身份信息
    - 缺点的解决方法

    这样每操作⼀次，都要验证信息，购物体验下降！

    对于⽆状态的问题，解法⽅案有很多种，其中⽐较简单的⽅式⽤ **Cookie 技术**。 

    Cookie 通过在请求和响应报⽂中写⼊ Cookie 信息来控制客户端的状态。 

    相当于，**在客户端第⼀次请求后，服务器会下发⼀个装有客户信息的「⼩贴纸」，后续客户端请求服务器的时候， 带上「⼩贴纸」，服务器就能认得了了**

    ![img](http://5b0988e595225.cdn.sohucs.com/images/20200309/cd5875840f394614a43e64a93429f66f.jpeg)

    下次再（请求中带上Cookie）请求就会方便很多

    

  - 明文传输

    - 优点 传输过程中的信息，是可⽅便阅读的，**通过浏览器的 F12 控制台或 Wireshark 抓包**都可以直接肉眼查看，为我们调试⼯作带了极⼤的便利性
    - 缺点 信息裸奔。

    正是因为这样，HTTP 的所有信息都暴露在了光天化⽇下，相当于**信息裸奔**。在传输的漫⻓的过程中，信息的内容都毫⽆隐私可⾔，很容易就能被窃取，如果⾥⾯有你的账号密码信息，那你号没了:joy:



- HTTP协议是不安全的！——严重缺点
  - 通信使⽤**明⽂（不加密）**，内容可能会被窃听。⽐如，**账号信息容易泄漏**，那你号没了。
  - **不验证通信⽅的身份**，因此有可能遭遇伪装。⽐如，**访问假的淘宝、拼多多**，那你钱没了。 
  - **⽆法证明报文的完整性，所以有可能已遭篡改**。⽐如，⽹⻚上植⼊垃圾⼴告，视觉污染，眼没了

HTTP 的安全问题，可以⽤ HTTPS 的⽅式解决，也就是通过引⼊ SSL/TLS 层，使得在安全上达到了极致！

##### 3.HTTP/1.1的性能如何？

HTTP协议是基于TCP/IP 并且使用了 【请求-应答】的通信模式 所以性能的关键就在这两点里~

###### 长连接（性能提升！）

早期 <u>HTTP/1.0</u> 性能上的⼀个很⼤的问题，那就是每发起⼀个请求，都要新建⼀次 TCP 连接（三次握⼿），⽽且是 串⾏请求，做了⽆谓的 TCP 连接建⽴和断开，增加了通信开销。 

为了解决上述 TCP 连接问题，<u>HTTP/1.1</u> 提出了**长连接**的通信⽅式，也叫持久连接。这种⽅式的好处在于减少了 TCP 连接的重复建⽴和断开所造成的额外开销，减轻了服务器端的负载。 

持久连接的特点是，只要任意⼀端没有明确提出断开连接，则保持 TCP 连接状态

![img](http://5b0988e595225.cdn.sohucs.com/images/20200309/3463897bce7142a0845b3744e2b7d779.jpeg)



###### 管道网络传输

HTTP/1.1 采用了长连接的方式，这使得管道（pipeline）网络传输成为了可能。

 即可在同⼀个 TCP 连接⾥⾯，客户端可以发起多个请求，只要第⼀个请求发出去了，**不必等其回来，就可以发第⼆个请求出去**，可以**减少整体的响应时间**

举例来说，客户端需要请求两个资源。**以前的做法**是，在同⼀个TCP连接⾥⾯，先发送 A 请求，然后等待服务器做 出回应，收到后再发出 B 请求（有点像同步机制）。**管道机制**则是允许浏览器同时发出 A 请求和 B 请求（类似异步机制的感觉~）

![img](http://5b0988e595225.cdn.sohucs.com/images/20200309/f9149650a28742fc90d5c10656c2d0ef.jpeg)

但是服务器还是按照**顺序**，先回应 A 请求，完成后再回应 B 请求。要是前⾯的回应特别慢，后⾯就会有许多请求 排队等着。这称为「队头堵塞」（可见与异步还是有些不同的 

###### 队头堵塞

「请求 - 应答」的模式加剧了 HTTP 的性能问题

因为当顺序发送的请求序列中的⼀个请求因为某种原因被阻塞时，在后⾯排队的所有请求也⼀同被阻塞了，会招致 客户端⼀直请求不到数据，这也就是「队头阻塞」。好⽐上班的路上塞⻋

![img](http://5b0988e595225.cdn.sohucs.com/images/20200309/5dff63bb71164d99ac5609da0023f949.jpeg)



总之 HTTP/1.1 的性能⼀般般，后续的 HTTP/2 和 HTTP/3 就是在优化 HTTP 的性能

（不过HTTP/1.1依旧是目前应用最广泛的HTTP协议~）



#### 2.GET POST请求复习



> 这里提到的POST比GET安全 又有点道理了XD
>
> [HTTP报文（面试会问开发时常用的报文头格式）](https://www.cnblogs.com/chenguangliang/p/6708592.html)

![img](https://pic002.cnblogs.com/images/2012/426620/2012072810301161.png)

**HTTP请求头部**由 请求方法字段 URL字段 HTTP协议版本字段 三个字段组成（使用空格分隔）

例如： `GET /index.html HTTP/1.1。` GET 和 /index.html 和 HTTP/1.1

- GET请求方法

最常见的一种请求方式，当客户端要从服务器中读取文档时，当点击网页上的链接或者通过在浏览器的地址栏输入网址来浏览网页的，使用的都是GET方式。GET方法要求服务器将URL定位的资源放在响应报文的数据部分，回送给客户端。使用GET方法时，请求参数和对应的值附加在URL后面，利用一个问号（“?”）代表URL的结尾与请求参数的开始，传递参数长度受限制。例如，`/index.jsp?id=100&op=bind`,这样通过GET方式传递的数据直接表示在地址中，所以我们可以把请求结果以链接的形式发送给好友。

，GET方式的请求一般不包含”请求内容”部分，请求数据以地址的形式表现在请求行。地址链接如下：

```html
<a href="http://www.google.cn/search?hl=zh-CN&source=hp&q=domety&aq=f&oq=">http://www.google.cn/search?hl=zh-CN&source=hp
&q=domety&aq=f&oq=</a> 
```

地址中”?”之后的部分就是通过GET发送的请求数据，我们可以在地址栏中清楚的看到，各个数据之间用”&”符号隔开。

显然，这种方式**不适合传送私密数据**。另外，由于不同的浏览器对地址的字符限制也有所不同，一般最多只能识别1024个字符，所以如果**需要传送大量数据的时候，也不适合使用GET方式**。

- POST请求方法

对于上面提到的不适合使用GET方式的情况，可以考虑使用POST方式，因为使用POST方法可以允许客户端给服务器提供信息较多。

POST方法将请求参数封装在HTTP请求数据中，以名称/值的形式出现，可以传输大量数据，这样POST方式对传送的数据大小没有限制，而且**也不会显示在URL中**。



###### 1.1 GET提交，**请求的数据会附在URL之后**（就是把数据放置在HTTP==协议头＜request-line＞==中）

- 以?分割URL和传输数据
- 多个参数用&连接;
- 例如：`login.action?name=hyddd&password=idontknow&verify=%E4%BD%A0 %E5%A5%BD`。

报文内容问题：

- 如果数据是英文字母/数字，原样发送

- **如果是空格，转换为+**
- 如果**是中文/其他字符，则直接把字符串用BASE64加密**，得出如： `%E4%BD%A0%E5%A5%BD`，其中％XX中的**XX为该符号以16进制表示的ASCII**。



###### 1.2 POST提交：把**提交的数据放置在**HTTP包的==**包体**＜request-body＞==中。

 

因此，**GET提交的数据会在地址栏中显示出来，而POST提交，地址栏不会改变**

 

2.传输数据的大小：

  首先声明,HTTP协议**没有对传输的数据大小进行限制**，HTTP协议规范**也没有对URL长度进行限制**。 而在实际开发中存在的限制主要有：

-  GET:**特定浏览器和服务器对URL长度有限制**，例如IE对URL长度的限制是2083字节(2K+35)。对于其他浏览器，如Netscape、FireFox等，理论上没有长度限制，其限制取决于[操作系统](http://lib.csdn.net/base/operatingsystem)的支持。

  因此**对于GET提交时，传输数据就会受到URL长度的限制**。

- POST:**由于不是通过URL传值，理论上数据不受限**。但<u>实际各个WEB服务器会规定对post提交数据大小进行限制</u>，Apache、IIS6都有各自的配置。

 

3.安全性：

  ==POST的安全性要比GET的安全性高==。注意：这里所说的安全性和上面GET提到的“安全”不是同个概念。

**上面“安全”的含义仅仅是不作数据修改，而这里安全的含义是真正的Security的含义**

比如：通过GET提交数据，==用户名和密码将**明文出现**在URL上==（信息直接一个的裸奔XD），因为**(1)登录页面有可能被浏览器缓存**， **(2)其他人查看浏览器的历史纪录**，那么别人就可以拿到你的账号和密码了。

![img](https://images2015.cnblogs.com/blog/982259/201704/982259-20170414142132314-785720939.png)

 





###  操作系统

```js
// 小林的图解系统 & 学校课程学习 & 王道考研-OS 三者配合 高效学习
// 要看一下学校的ppt了 课程旷了好几节有点听不懂！
```



## 3.面试题

### 面试题、面经总结

```js
//网上面试题、面经辣么多 一天多看一些 然后同时也要研究一些题的答案！
```



### 算法题

```js
// 跟着掘金小册、代码随想录的内容进行学习！
链表内容的学习 看了2节的内容（链表的比重在小册中很大！说明作者认为其很重要（他确实也这么说了hh））
leetcode21 递归算法的研究
leetcode83 easy
leetcode82 卡住！笨死！！下回做题务必画图&头脑清醒一些！！
```

数组、字符串若想往难了出，那一定是要结合一些超越数据结构本身的东西——比如排序算法、二分思想、动态规划思想等等

但是链表可不一样了。如果说在命题时，数组和字符串的角色往往是“算法思想的载体”，那么链表本身就可以被认为是“命题的目的”。

结合实际面试中的命题规律，我把这些题目分为以下三类：

- 链表的处理
  - 合并
  - **删除**（重点！）
- 链表的反转 以及 衍生题目
- 链表成环问题 以及 衍生题目





#### 递归法学习

[21. 合并两个有序链表](https://leetcode-cn.com/problems/merge-two-sorted-lists/)

这俩题一样哈——[剑指 Offer 25. 合并两个排序的链表](https://leetcode-cn.com/problems/he-bing-liang-ge-pai-xu-de-lian-biao-lcof/)

```js
var mergeTwoLists = function(l1, l2){
    if(l1 === null){
        return l2;// 碰到一个链表走到null 就结束“递” 开始归
    }
    else if(l2 === null){
        return l1;
    }
    else if(l1.val < l2.val){
        l1.next = mergeTwoLists(l1.next, l2);
    }
    else{
        l2.next = mergeTwoLists(l1, l2.next);
    }
}
```

[递归法图解](https://leetcode-cn.com/problems/merge-two-sorted-lists/solution/yi-kan-jiu-hui-yi-xie-jiu-fei-xiang-jie-di-gui-by-/)

递归就思考第一层第二层最好

每层不要忘了返回当层结果（执行这一次递归函数 返回的结果）！

以原始用例 [1,2] [1,3,4]

【1】**开始“递”** 一直到最里面那一层 

- l1小的时候 l1指向再里层一些的那个递归函数`mergeTwoLists()`别忘了l1要往前挪动一位 `mergeTwoLists(l1.next, l2)`
- l2小的时候同理

![img](https://pic.leetcode-cn.com/fe5eca7edea29a76316f7e8529f73a90ae4990fd66fea093c6ee91567788e482-%E5%B9%BB%E7%81%AF%E7%89%874.JPG)

【2】return l2 执行时

![img](https://pic.leetcode-cn.com/e59fd2981f3633cc70a90bd3136e07647ecf89c6f4eefb82159ea54db9772889-%E5%B9%BB%E7%81%AF%E7%89%875.JPG)

**这里结束了“递”** 

最里面那层的`mergeTwoLists()`执行完了

开始“归” —— 逐步执行外层的`mergeTwoLists()`函数

【3】最外面一层函数执行完 

![img](https://pic.leetcode-cn.com/e95ec0c841cfa308e5789eb1f9f214f785bc77d99214c01504b303939581eb07-%E5%B9%BB%E7%81%AF%E7%89%877.JPG)

就可以返回最终结果了~

![img](https://pic.leetcode-cn.com/c1687ef7811036b7b5e58e4882ed12e243f6a77ddb8077123f013ef094cafd73-%E5%B9%BB%E7%81%AF%E7%89%878.JPG)

小结一下——

- 想一下“哪个是最里层被调用的函数” 在那里返回对应结果
  - 也就是主要想**第一层**

迭代法

```js
var mergeTwoLists = function(l1, l2) {
    let dummyHead = new ListNode(0, l1);
    let cur = dummyHead;
    while(l1 !== null && l2 !== null){
        if(l1.val < l2.val){
            cur.next = l1;
            l1 = l1.next;
        }
        else{
            cur.next = l2;
            l2 = l2.next;
        }
        cur = cur.next;
    }
    cur.next = l1 === null ? l2 : l1;
    return dummyHead.next;
};
```





## 4.前端开发框架

### 项目开发前置知识

```js
// 学到了尚硅谷react第四章 老师表示 “先学完Ajax Promise axios再回来吧！”
```



### react基础知识

```js
// 现阶段学习广受好评的react教程尚硅谷 
```



### react练手项目

```js
// 尚硅谷课程接下来的案例
// 掘金 记账本egg.js+react全栈 
```



# 10.7

```js
// DDL
	01 10.4-7 一天复习一章（中间有一章是两集 有一集是两章XD） 
	02 算法题 链表 二叉树部分 排序算法部分 递归 10.10
    03 Promise 10.8 axios 10.9
```



今天看递归上了头了！DDL啥的 害！

```js
// 今日主要收获 & 学习时间
Totally 530min
1.前端基础知识 
// 从早上-中午 拿出一整块时间学习JS 晚上跑完步回来继续看JS 重视基础！
// 不要浮于表面地看问题 深入进去！多向自己提问！
    1.1 前端基础学习 90min 
    // 每日重点！编码 + 知识点记录
    // 近期重点 作用域、闭包、原型链 + ES6 + Ajax axios
		/* JS高级复习完毕~ 
		JS基础复习开始！
		简单学习了正则表达式
		复习了一下递归 又明白点儿了！！*/
    1.2 freecodecamp JS + 响应式网页设计 120min
    	/* 完结JS基础部分 */
    1.3 JS 30demos min
    // 每天完成一个 不要求完全理解 先做一个初步的认知
    // 没有完全了解的/觉得很好的 都要特意标记出来 二刷时候再去好好理解下！
    	/* 
        */
    1.4 react前置知识 min
    	/*  */
    
    // 这些内容都是要重点掌握的！
    DOM编程 BOM使用 —— 复习
    事件代理/委托
	事件队列(setTimeout/setInterval/Promise)
	JSON
    Ajax/Fetch
	正则表达式

2.核心基础知识 下午开始学计网 + 刷题
	2.1 计网 min
		/*  */
	2.2 操作系统 min
		/*  */

3.面试刷题
	3.1 刷算法 刷力扣 180+80min	
    // 【1】阅读掘金小册 + 按照代码随想录推荐【2】刷题
    	/* 掘金小册 6/28 代码随想录链表 1/9
        今天跟递归耗上了！写了一大篇文章！用递归解决反转链表
        */   
    
    	// 每个阶段结束后 简单总结下应对某种数据结构/对应类型的题目 应该怎么去想
    	数组 + 排序 第五周
        链表 + 二叉树 第六周
        字符串 + 二叉树 + 栈/队列 第七周
        双指针 + 遍历专题DFS BFS 第八周
        回溯算法 + 贪心算法 第九周
        动态规划 第十周
    3.2 面试题 30min
    // 有空可以读一些面试题 查缺补漏一下~
		/* 看了一道有意思的面试题——10块钱破成1 0.5 0.1元 */  
    
4.前端开发框架 
	4.1 react学习 min
    // 尚硅谷课程 freecodecamp
		/*  */
    
5.前端进阶知识学习
// 学完JS再学这个辽！
    Node.js
	webpack
6.其他 
7.每日总结 30min
```



> 学习顺序预告
>
> 这里说的实操 都是在 `freecodecamp` 中进行练习

- [ ] ~~计网~~
- [x] JS高级快速回顾 
- [x] JS基础快速过 
- [ ] ~~JS数组API总结、学习（学习数组去重、解构赋值、数组扁平化） - 下午 刷完题之后~~
- [x] JS CSS 实操 
- [x] 刷算法 高级排序算法 + 链表+递归专场 
- [ ] ~~JS30demos~~ 
- [ ] ~~`promise` `ajax（稍微再学一下 不信学不懂了！）`~~ 
- [ ] ~~react实操~~  

今天后面这些因为总结递归 + 刷题上头 + 效率略低 

都木有做。。

明天去接天津回来的颖 做一些查缺补漏的工作！

## 1.前端基础



### 前端基础知识





```js
//每日学到的知识点 可以写文章 可以记在心里 总结下来！
// 本阶段主要学习JS高级教程（尚硅谷）刷freecodecamp
1.JS数组去重问题
2.解构赋值的应用
3.数组扁平化的六种方法
4.执行上下文栈的角度解释递归
5.生成min - max之间的随机整数 Math.floor(Math.random(max - min + 1) + min)
6.parseInt()解析一个字符串返回一个整数 
	parseInt("007.1");// 7  
	parseInt("sfz30");// NaN
可以利用这个方法计算n进制数 parseInt(str, radix);// 这个radix就是进制数的设置
	parseInt("0011", 2);// 3
	parseInt("11010010", 2);// 210
	parseInt("11010010", 16);// 285278224
很方便！
7.三元运算符更好的书写格式
return num > 0 ? "正数"
    : num < 0 ? "负数"
	: "为0"
```



#### 1.面试高频 利用JavaScript实现数组去重

参考 写得很棒的文章 [JavaScript数组去重问题](https://juejin.cn/post/7014009223197491236) 同为大三在校生 为何人家如此优秀！

```js
var arr = ['v','i','o','l','i','n','C','o','d','i','n','g'];
```

目的 去除 violin Coding 这个字符串中每个字母组成的**数组**中的重复字符

##### 【1】原始方法 遍历

```js
// 01 暴力双层循环
function iteration(){
    for(let i = 0; i < arr.length; i++){
        var isNotRepeat = true;
        for(let j = 0; j < res.length; j++){
            if(arr[i] === res[j]){
                isNotRepeat = false;
                break;
            }
        }
        if(isNotRepeat){
            res.push(arr[i]);
            console.log(res);
        }
    }
}
```



##### 【2】利用`res.indexOf(item)`查找是否item在res中是重复的



##### 【3】利用filter结合`indexOf`方法过滤获得res



##### 【4】排序+比较先前元素pre和当前元素是否相同 



##### 【5】结合【4】`arr.sort().filter(对应函数)` 更简单！



##### 【6】利用Set生成哈希表（很快啊！）

Set 对象允许你存储任何类型的唯一值，无论是原始值或者是对象引用。

所以我们可以利用Set的这一特性，来进行去重处理。

```js
var arr = [1,1,2,3,4,5,6,7,4,3,'1',8,'3','1','3','66']
// var hashtable = Array.from(new Set(arr));//[1, 2, 3, 4, 5, 6, 7, "1", 8, "3", "66"]
// Set原来是这么用的啊！之前一直都使用一个个比对+遍历 
function unique(arr){
	return Array.from(new Set(arr))
}

console.log(unique(arr));
```

###### 通过解构赋值进一步简化

```js
var arr = [1,1,2,3,4,5,6,7,4,3,'1',8,'3','1','3','66']

function unique(arr){
	return [...new Set(arr)]
}

console.log(unique(arr));
```

###### 极简箭头函数

```js
var arr = [1,1,2,3,4,5,6,7,4,3,'1',8,'3','1','3','66']
var unique = (arr) => return [...new Set(arr)];// 就是把常规函数形式 变了一下下~
console.log(unique(arr));
```



#### 2.解构赋值的应用

很棒的一个大三前端大佬的博客中的内容

https://blog.wangez.site/posts/1586874348.html/





#### 3.数组扁平化

```js
var arr = [1, [2, 3, [4, 5, [6]]]]
```

[js如何实现数组扁平化](https://blog.csdn.net/original_heart/article/details/78906911?utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7Edefault-2.no_search_link&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7Edefault-2.no_search_link)



#### 4.递归复习

有图有真相

[`freecodecamp`:**使用递归代替循环**](https://chinese.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/replace-loops-using-recursion)

题目

```
计算数组内前n个元素的和
```

```js
function sum(arr, n){
    if(n <= 0){
        return 0;
    }
    else{
        return sum(arr, n - 1) + arr[n - 1];
    }
}
```







![在这里插入图片描述](https://img-blog.csdnimg.cn/ccd5e9a285ea4e479f55e4e535623ce2.png)



![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/59c75d3171c6413b9fbca4db30709aa8~tplv-k3u1fbpfcp-watermark.awebp?)

#### 5.递归进阶练习！

依旧是按照执行上下文栈的思路去想 

其实只要考虑到最内层那个函数的**返回值** 就好了！

第二层的函数根据第一层的值计算得到返回值

第三层再根据第二层的返回值…

直到最后一层函数（执行上下文栈的最底部）也被执行 递归函数调用结束 返回最终结果~



看一道题

[**使用递归创建一个倒计时**](https://chinese.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/use-recursion-to-create-a-countdown)

题目

```
输入一个n

输出 [n, n-1, …, 1]
```



解决方案

```js
// 01 先将函数入栈（递 的过程） n = 0 时 countdown就是 []
// 出栈的时候将值插入数组中（归 的过程）
function countdown(n){
    if(n <= 0){
        return [];
    }
    else{
        const countArray = countdown(n - 1);
        countArray.unshift(n);// 需要头插 因为是倒序的数组嘛~
        // countArray.splice(0, 0, n);// 这样也可以达到头插的效果
        return countArray;
    }
}

```

执行上下文栈模拟——

```js
// 假设n = 5
// 递归函数入栈(函数体的所有内容都入栈哈)
countArray = countdown(4) —— 最底层 n = 5
countArray = countdown(3) —— 第四层 n = 4
countArray = countdown(2) —— 第三层 n = 3
countArray = countdown(1) —— 第二层 n = 2
countArray = countdown(0) —— 第一层 n = 1
count(0) 这里不会往下执行了 直接返回 countArray = [] 
```

```js
// 出栈（执行递归函数 并将其出栈）
[].splice(0,0,1) —— 第一层出栈
[1].splice(0,0,2) —— 第二层出栈
[2,1].splice(0,0,3) —— 第三层出栈
[3,2,1].splice(0,0,4) —— 第四层出栈
[4,3,2,1].splice(0,0,5) —— 最底层出栈
返回最终结果 [5,4,3,2,1]
```







下面的代码则再升一级 利用三元运算符让代码更加简洁 

不必创建数组 利用`concat` / `…` 将数组不断拼接起来

```js
// 02 更为简洁的一行代码秒杀法
// n = 0时 返回值为 [5,...[]] 之后随着递归函数出栈 返回值数组逐渐插入数字
function countdown(n){
	return n <= 0 ? [] : [n].concat(countdown(n - 1));
    // return n <= 0? [] : [n, ...countdown(n - 1)];// 更加简洁的展开运算符~
}
```



##### 再来一题！

[**使用递归来创建一个数字序列**](https://chinese.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/use-recursion-to-create-a-range-of-numbers)

```js
function rangeOfNumbers(startNum, endNum) {
  if(startNum === endNum){
    return [startNum];
  }
  else{
    const countArray = rangeOfNumbers(startNum + 1, endNum);
    countArray.unshift(startNum)
    return countArray;
  }
};
```

```js
function rangeOfNumbers(startNum, endNum) {
    return startNum === endNum 
      ? [startNum] 
      :rangeOfNumbers(startNum, endNum - 1).concat(endNum);
      // : [...rangeOfNumbers(startNum, endNum - 1), endNum];  
};
```





#### 6.parseInt()方法

```js
parseInt()解析一个字符串返回一个整数 
	parseInt("007.1");// 7  
	parseInt("sfz30");// NaN
```



```js
可以利用这个方法计算n进制数 parseInt(str, radix);// 这个radix就是进制数的设置
	parseInt("0011", 2);// 3
	parseInt("11010010", 2);// 210
	parseInt("11010010", 16);// 285278224
很方便！
```



## 2.核心基础知识

### 计网

```js
//小林的图解网络随时翻阅 & 极客时间趣谈网络协议+网上的文章 & 读图解HTTP TCP等书籍 & 网络抓包实操练习  深入理解
// 每天一道计网面试题 把自己带入面试者的身份 跟面试官白话白话 嗯就这样子
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
1.把10元破成1元、5角、1角有多少种方法
```

#### 10元破成`a*1 + b*0.5+c*0.1`

##### 没做出来的递归法

```js
// 这个递归有点问题啊！
// 虽说我觉得看起来挺有道理的 然而事实是 根本没法让所有递归函数出栈啊！
function countChange(money){
    let total = 0;
    if(money < 0){
        return 0;
    }
    else if(money === 0){
        return 1;
    }
    else{
        total += 1;
        return countChange(money - 1) + countChange(money - 0.5) + countChange(money - 0.1) 
        console.log(total)
    }
}
```

##### 疯狂迭代法

```js
// money为10时 最多分成10个1元 20个五角 50个一角 
function countChange(){
    let count = 0;
    for(let i = 0; i <= 10; i++){
        for(let j = 0; j <= 20; j++){
            for(let k = 0; k <= 100; k++){
                if(i + 0.5*j +0.1*k === 10){
                    count++;
                }
            }
        }
    }
    return count;
}
console.log(countChange());// 121
```







### 算法题

```js
// 跟着掘金小册、代码随想录的内容进行学习！
总结了半天的递归。
刷了反转链表的递归解法
```

[一文学会递归解题！——方法论 题目总结得很好！](https://www.cnblogs.com/xiekun/p/11968538.html)

[掌握递归调用栈思想 由浅入深研究递归🎉](https://juejin.cn/post/7016324095843237901)

[超棒的递归解决206.反转链表](https://leetcode-cn.com/problems/reverse-linked-list/solution/dong-hua-yan-shi-206-fan-zhuan-lian-biao-by-user74/)



## 4.前端开发框架

### 项目开发前置知识

```js
// 学到了尚硅谷react第四章 老师表示 “先学完Ajax Promise axios再回来吧！”
```



### react基础知识

```js
// 现阶段学习广受好评的react教程尚硅谷 
```



### react练手项目

```js
// 尚硅谷课程接下来的案例
// 掘金 记账本egg.js+react全栈 
```



# 10.8

今天去机场接颖咯~

```js
// DDL
	算法题 链表 二叉树部分 排序算法部分 递归 10.10
    Promise 10.8 axios 10.9
```



```js
// 今日主要收获 & 学习时间
Totally min
1.前端基础知识 
// 从早上-中午 拿出一整块时间学习JS 晚上跑完步回来继续看JS 重视基础！
// 不要浮于表面地看问题 深入进去！多向自己提问！
    1.1 前端基础学习 min 
    // 每日重点！编码 + 知识点记录
    // 近期重点 作用域、闭包、原型链 + ES6 + Ajax axios
		/*  */
    1.2 freecodecamp JS + 响应式网页设计 min
    	/*  */
    1.3 JS 30demos min
    // 每天完成一个 不要求完全理解 先做一个初步的认知
    // 没有完全了解的/觉得很好的 都要特意标记出来 二刷时候再去好好理解下！
    	/*  */
    1.4 react前置知识 min
    	/*  */
    
    // 这些内容都是要重点掌握的！
    DOM编程 BOM使用 —— 复习
    事件代理/委托
	事件队列(setTimeout/setInterval/Promise)
	JSON
    Ajax/Fetch
	正则表达式

2.核心基础知识 下午开始学计网 + 刷题
	2.1 计网 min
		/*  */
	2.2 操作系统 min
		/*  */

3.面试刷题
	3.1 刷算法 刷力扣 min	
    // 【1】阅读掘金小册 + 按照代码随想录推荐【2】刷题
    	/* 掘金小册 6/28 代码随想录链表 1/9
        
        */   
    	// 每个阶段结束后 简单总结下应对某种数据结构/对应类型的题目 应该怎么去想
    	数组 + 排序 第五周
        链表 + 二叉树 第六周
        字符串 + 二叉树 + 栈/队列 第七周
        双指针 + 遍历专题DFS BFS 第八周
        回溯算法 + 贪心算法 第九周
        动态规划 第十周
    3.2 面试题 min
    // 有空可以读一些面试题 查缺补漏一下~
		/*  */  
    
4.前端开发框架 
	4.1 react学习 min
    // 尚硅谷课程 freecodecamp
		/*  */
    
5.前端进阶知识学习
// 学完JS再学这个辽！
    Node.js
	webpack
6.其他 
7.每日总结 min
```



> 学习顺序预告
>
> 这里说的实操 都是在 `freecodecamp` 中进行练习

- [ ] 计网
- [ ] JS数组API总结、学习（学习数组去重、解构赋值、数组扁平化） 
- [ ] JS30demos 
- [ ] 刷算法 高级排序算法 + 链表+递归专场 
- [ ] `promise` `ajax（稍微再学一下 不信学不懂了！）` 
- [ ] react实操  



## 1.前端基础



### 前端基础知识



```js
//每日学到的知识点 可以写文章 可以记在心里 总结下来！
// 本阶段主要学习JS高级教程（尚硅谷）刷freecodecamp
1.JS数组去重问题
2.解构赋值的应用
3.数组扁平化的六种方法
```



#### 1.面试高频 利用JavaScript实现数组去重

参考 写得很棒的文章 [JavaScript数组去重问题](https://juejin.cn/post/7014009223197491236) 

```js
var arr = ['v','i','o','l','i','n','C','o','d','i','n','g'];
```

目的 去除 violin Coding 这个字符串中每个字母组成的**数组**中的重复字符

##### 【1】原始方法 遍历

```js
// 01 暴力双层循环
function iteration(){
    for(let i = 0; i < arr.length; i++){
        var isNotRepeat = true;
        for(let j = 0; j < res.length; j++){
            if(arr[i] === res[j]){
                isNotRepeat = false;
                break;
            }
        }
        if(isNotRepeat){
            res.push(arr[i]);
            console.log(res);
        }
    }
}
```



##### 【2】利用`res.indexOf(item)`查找是否item在res中是重复的



##### 【3】利用filter结合`indexOf`方法过滤获得res



##### 【4】排序+比较先前元素pre和当前元素是否相同 



##### 【5】结合【4】`arr.sort().filter(对应函数)` 更简单！



##### 【6】利用Set生成哈希表（很快啊！）

Set 对象允许你存储任何类型的唯一值，无论是原始值或者是对象引用。

所以我们可以利用Set的这一特性，来进行去重处理。

```js
var arr = [1,1,2,3,4,5,6,7,4,3,'1',8,'3','1','3','66']
// var hashtable = Array.from(new Set(arr));//[1, 2, 3, 4, 5, 6, 7, "1", 8, "3", "66"]
// Set原来是这么用的啊！之前一直都使用一个个比对+遍历 
function unique(arr){
	return Array.from(new Set(arr))
}

console.log(unique(arr));
```

###### 通过解构赋值进一步简化

```js
var arr = [1,1,2,3,4,5,6,7,4,3,'1',8,'3','1','3','66']

function unique(arr){
	return [...new Set(arr)]
}

console.log(unique(arr));
```

###### 极简箭头函数

```js
var arr = [1,1,2,3,4,5,6,7,4,3,'1',8,'3','1','3','66']
var unique = (arr) => return [...new Set(arr)];// 就是把常规函数形式 变了一下下~
console.log(unique(arr));
```



#### 2.解构赋值的应用

很棒的一个大三前端大佬的博客中的内容

https://blog.wangez.site/posts/1586874348.html/





#### 3.数组扁平化

```js
var arr = [1, [2, 3, [4, 5, [6]]]]
```

[js如何实现数组扁平化](https://blog.csdn.net/original_heart/article/details/78906911?utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7Edefault-2.no_search_link&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7Edefault-2.no_search_link)





## 2.核心基础知识

### 计网

```js
//小林的图解网络随时翻阅 & 极客时间趣谈网络协议+网上的文章 & 读图解HTTP TCP等书籍 & 网络抓包实操练习  深入理解
// 每天一道计网面试题 把自己带入面试者的身份 跟面试官白话白话 嗯就这样子
1.“
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
```



### 算法题

```js
// 跟着掘金小册、代码随想录的内容进行学习！

```







## 4.前端开发框架

### 项目开发前置知识

```js
// 学到了尚硅谷react第四章 老师表示 “先学完Ajax Promise axios再回来吧！”
```



### react基础知识

```js
// 现阶段学习广受好评的react教程尚硅谷 
```



### react练手项目

```js
// 尚硅谷课程接下来的案例
// 掘金 记账本egg.js+react全栈 
```

