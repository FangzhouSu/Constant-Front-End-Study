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

