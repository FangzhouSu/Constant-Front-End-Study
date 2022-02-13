## 北京字节跳动技术中台日常实习一面 21/11/19

> 估计是跪在算法题上了，easy级别的题没A出来，算法思路是正确的（面试官说得）但是代码写得太丑陋了（我自己说得）
>
> 面试官大大很和善~一直跟我说别这么客气，叫同学就行😂
>
> 这次面试整体难度真的很小！可能是因为看我学习时间只有三个多月的缘故吧XD（之前看面经也没见过这么简单的）

上来先是根据自我介绍关于学习路线/简历上关于专业课（数据挖掘、强化学习）问了下为啥不继续搞人工智能了XD

答：不太感兴趣（总之就是这个意思 巴拉巴拉把往事说了一下XD）

> ### 聊项目
>

接手的外包项目刚做了三周不到，所以问得不深。

- 你在这个大型项目中主要负责什么
- 一些交互的效果是如何做出来的
- 看项目是交通相关的，能不能说一下路口信息如何更新到组件中

[JS30demos项目](https://github.com/FangzhouSu/JS-30Demos) 问了一句

- 如何想到做这个项目的呢

答 为了巩固下JS基础，感觉比较重要 然后没有细问

> ### 计算机网络
>

### 了解HTTPS么？说一下HTTPS的一个传输过程

- 非对称加密建立HTTPS连接
- 然后使用对称加密进行报文的收发

![image-20211111123546328](https://gitee.com/su-fangzhou/blog-image/raw/master/202111111235564.png)

#### 追问-说一下非对称加密是如何利用公钥私钥解决安全问题的（之前第一问里有挖坑）

当时答得有点乱，下来整理了一下，感觉清晰不少~

> 另外搜索非对称算法时，网上好多文章没说的一点就是这个非对称算法是用来干啥的，根据图解HTTP的内容，我的理解是以下几个步骤：
>
> - 【1】客户端有私钥A + 公钥A； 服务器有私钥B + 公钥B
> - 【2】规则——私钥A+公钥A = 密钥对A（公钥A加密的内容只有私钥A可以解密！）
> - 【3】为了建立安全的通信道路（不被坏人篡改、冒名顶替（窃听就木有办法辣，不过也不怕！我们这个是非对称加密！被窃听了也不会被破解的）），客户端把手里的公钥发送给服务器
> - 【4】服务器使用拿到的公钥A进行**重要报文**（也就是图解HTTP提到的 “**稍后的共享密钥加密中要使用的密钥**”）的加密，之后再发给客户端
> - 【5】客户端手里有私钥A，直接解密这个**重要报文**，安全地获得共享密钥！妙啊！
>
> 这样互联网上的不法分子就没辙辣！
>
> > 另外还可以使用数字证书解决公开密钥的传输问题 - 图解HTTP很香啊！
> >
> > ![image-20211111123455666](https://gitee.com/su-fangzhou/blog-image/raw/master/202111111234902.png)



> ### JS基础
>

### 说下JS有哪些数据类型？

Undefined、Null、Boolean、Number、String、Object、Symbol、BigInt。

### 那引用数据类型和原始数据类型有什么区别么？

- 栈：原始数据类型（Undefined、Null、Boolean、Number、String）
- 堆：引用数据类型（对象、数组和函数）

两种类型的区别在于**存储位置的不同：**

- 原始数据类型直接存储在栈（stack）中的简单数据段
  - 占据空间小、大小固定
  - 属于被频繁使用数据，所以放入栈中存储；
- 引用数据类型存储在堆（heap）中的对象，占据空间大、大小不固定。
  - 如果存储在栈中，将会影响程序运行的性能；
  - 引用数据类型在栈中存储了指针，该指针指向堆中该实体的起始地址。
  - 当解释器寻找引用值时，会首先检索其在栈中的地址，取得地址后从堆中获得实体。

### 说一下new一个构造函数过程中发生了什么

> 艾玛太经典了，我还写过[一篇文章](https://juejin.cn/post/7012887169878458404)说这里哩

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f493f86148bf4a3c888e34b6f6fd79c1~tplv-k3u1fbpfcp-watermark.awebp?)

说了一下 在红宝书看到过bulabulabula

另外拓展了一下——判断构造函数的返回值类型，如果res为对象类型，new Person的最终结果为res 而非我们想要的那个实例对象！

#### 追问-刚才说的第三步提到了this，那么new过以后，this指向哪里呢？

指向这个新创建的对象（红宝书提到了）

> 拓展：可以看看之前写的那篇文章中的例子 Fn即为构造函数 很明显它是指向这个新创建的Object空对象的
>
> ![在这里插入图片描述](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/09b2a3006d514261b9a8f1638d277c3e~tplv-k3u1fbpfcp-watermark.awebp)

### 浏览器原理

> 这里被问了蛮多的~可能也是因为我在第一个问题的时候说得内容（挖的坑）太多吧！

###  浏览器的渲染过程

【1】解析 HTML 构建DOM树

【2】解析CSS 构建CSSOM树

【3】利用上面两个树构建渲染树（渲染树的节点即为“渲染对象”）

【4】渲染对象被创建并添加到树中，它们并没有位置和大小，所以当浏览器生成渲染树以后，就会根据渲染树来进行布局（也可以被称作“**回流**”）这一阶段浏览器要做的事情是要弄清楚各个节点在页面中的确切位置和大小。通常这一行为也被称为“**自动重排**”。

【5】上述几步过后，布局结束；最后进行绘制，遍历渲染树并调用渲染对象的 paint 方法将它们的内容显示在屏幕上，绘制使用 UI 基础组件。

记住这张图：

![image](https://cdn.nlark.com/yuque/0/2020/png/1500604/1603797939165-3bf54e28-5469-4093-a0e1-e0569cec1305.png)

> 完整过程中的一些细节——
>
> - 首先解析收到的文档，根据文档定义构建一棵 DOM 树，DOM 树是由 DOM 元素及属性节点组成的。
> - 然后对 CSS 进行解析，生成 CSSOM 规则树。
> - 根据 DOM 树和 CSSOM 规则树构建渲染树。渲染树的节点被称为渲染对象，渲染对象是一个包含有颜色和大小等属性的矩形，渲染对象和 DOM 元素相对应，但这种对应关系不是一对一的，不可见的 DOM 元素不会被插入渲染树。还有一些 DOM元素对应几个可见对象，它们一般是一些具有复杂结构的元素，无法用一个矩形来描述。
> - 当渲染对象被创建并添加到树中，它们并没有位置和大小，所以当浏览器生成渲染树以后，就会根据渲染树来进行**布局**（也可以叫做回流）。这一阶段浏览器要做的事情是要弄清楚各个节点在页面中的确切位置和大小。通常这一行为也被称为“自动重排”。
> - 布局阶段结束后是**绘制**阶段，遍历渲染树并调用渲染对象的 paint 方法将它们的内容显示在屏幕上，绘制使用 UI 基础组件。

#### 追问-解析文档（HTML）过程中，是将HTML都解析完了再去生成渲染树麽？

**注意：**这个过程是逐步完成的，**为了更好的用户体验**，渲染引擎将会尽可能早的将内容呈现到屏幕上，并不会等到所有的html 都解析完成之后再去构建和布局 render 树。它是解析完一部分内容就显示一部分内容，同时，可能还在通过网络下载其余内容。

#### 追问-script中的脚本文件、link中的css文件的解析/执行会阻塞文档解析麽？如何阻塞？

- 脚本的加载会阻塞文档解析

如果没有 defer 或 async 属性，浏览器会立即加载并执行相应的脚本。它不会等待后续加载的文档元素，读取到就会开始加载和执行，这样就阻塞了后续文档的加载。

下图可以直观的看出三者之间的区别:

![image.png](https://cdn.nlark.com/yuque/0/2020/png/1500604/1603547262709-5029c4e4-42f5-4fd4-bcbb-c0e0e3a40f5a.png)

所以**script要放在底部/加async defer关键字**

> 拓展学习：
>
> JavaScript 的加载、解析与执行会阻塞文档的解析，也就是说，在构建 DOM 时，HTML 解析器若遇到了 JavaScript，那么它会暂停文档的解析，**将控制权移交给 JavaScript 引擎**，等 JavaScript 引擎运行完毕，浏览器再从中断的地方恢复继续解析文档。
>
> 也就是说，如果想要首屏渲染的越快，就越不应该在首屏就加载 JS 文件，这也是都**建议将 script 标签放在 body 标签底部的原因**。
>
> - 当然在当下，并不是说 script 标签必须放在底部，因为你可以给 script 标签添加 defer 或者 async 属性。

- CSS 如何阻塞文档解析？

**理论上**，既然样式表不改变 DOM 树，也就没有必要停下文档的解析等待它们。

> 面试官也提到了这里，CSS的解析并不阻塞文档~
>
> - 但是可以拓展一下，JS的脚本会因为CSSOM树没被构建好而延迟执行，所以！要**把script放在底部/加async defer关键字**

然而，存在一个问题，JavaScript 脚本执行时可能在文档的解析过程中**请求样式信息**（比如根据样式获取元素节点），如果样式还没有加载和解析，脚本将得到错误的值，显然这将会导致很多问题。所以——

**如果浏览器尚未完成 CSSOM 的下载和构建，而我们却想在此时运行脚本**，那么浏览器将**延迟 JavaScript 脚本执行和文档的解析**，直至其完成 CSSOM 的下载和构建。也就是说，在这种情况下，浏览器会先下载和构建 CSSOM，然后再执行 JavaScript，最后再继续文档的解析。这样就会间接阻塞了文档解析

#### 追问-什么情况会阻止浏览器渲染

前面问的细节，这个问题比较全面了就

要明确——首先**渲染的前提是生成渲染树**

- 所以 HTML 和 CSS 肯定会阻塞渲染。

> 如果你想渲染的越快，你越应该降低一开始需要渲染的文件大小，并且扁平层级，优化选择器。

- 浏览器在解析到 script 标签时，会暂停构建 DOM，完成后才会从暂停的地方重新开始。

> 也就是说，如果你想首屏渲染的越快，就越不应该在首屏就加载 JS 文件，这也是都建议将 script 标签放在 body 标签底部的原因。

> 拓展知识
>
> 并不是说 script 标签必须放在底部，因为你可以给 script 标签添加 defer 或者 async 属性
>
> - 当 script 标签加上 defer 属性以后，表示该 JS 文件会并行下载，但是会放到 HTML 解析完成后**顺序执行**，所以对于这种情况你可以把 script 标签放在任意位置。
> - 同理，对于没有任何依赖的 JS 文件可以加上 async 属性，表示 JS 文件下载和解析不会阻塞渲染（async属性**不能保证JS文件的执行是按顺序的**~）。

记住下面这个图就好~

> ![image.png](https://cdn.nlark.com/yuque/0/2020/png/1500604/1603547262709-5029c4e4-42f5-4fd4-bcbb-c0e0e3a40f5a.png)
>
> 蓝色代表 js 脚本网络加载时间，红色代表 js 脚本执行时间，绿色代表 html 解析

> ### 框架
>

### 说下Vue中的key有啥用？

> 这个因为Vue没咋学过，说得比较模糊，但是结合之前学习React残留下来的一点记忆强答了一波

官方文档——

> `key` 的特殊 attribute 主要用在 Vue 的虚拟 DOM 算法，在新旧 nodes 对比时辨识 VNodes。如果不使用 key，Vue 会使用一种最大限度减少动态元素并且尽可能的尝试就地修改/复用相同类型元素的算法。而使用 key 时，它会基于 key 的变化重新排列元素顺序，并且会移除 key 不存在的元素。
>
> 有相同父元素的子元素必须有**独特的 key**。重复的 key 会造成渲染错误。

面试官给出解释——如果不用key的话，在列表增删的时候，渲染效率会出问题（和虚拟DOM有关）

但是如果key使用错误了，在列表顺序需要变更时，则容易发生顺序错误！

> ### 其他
>

### 了解CDN麽？

听说过这个，在一些开源仓库的readme中一些资源是挂在cdn上的，比如图片和视频。

面试官说cdn是用来存储一些资源的类似服务器的东西，一些上线的项目会就近使用这其中的资源，比较快~

> CDN的全称是Content Delivery Network，即[内容分发网络](https://baike.baidu.com/item/内容分发网络/4034265)。
>
> CDN是构建在现有网络基础之上的智能虚拟网络，依靠部署在各地的**边缘**服务器，通过**中心**平台的负载均衡、内容分发、调度等功能模块，使用户就近获取所需内容，**降低网络拥塞，提高用户访问响应速度和命中率**。CDN的关键技术主要有内容存储和分发技术。 

> ### 算法题
>

### 删除字符串-力扣easy中稍难一些的一题

> 与leetcode1047（利用栈可以巧妙解决）类似，但是要麻烦一些
>
> ![img](https://gitee.com/su-fangzhou/blog-image/raw/master/202111192256739.jpg)
>
> leetcode1047如下：
>
> ![image-20211119231003241](https://gitee.com/su-fangzhou/blog-image/raw/master/202111192310340.png)

- 想了一两分钟，先说思路，使用双指针挨个删除，面试官说可以，让我写代码

然后噩梦开始😂

几分钟吧大概代码就写好了，但是第一遍运行超时，就开始慌了。

**现在想想不应该慌，应该从头，从while循环（很明显是超时的罪魁祸首）一点点看！但是当时也是因为紧张，就瞎改一堆，越改越乱！反省！**

> 既然难以做到一遍AC，就应该建立起完整的找错体系！
>
> - 超时：找while循环是不是推出条件错了
> - 答案与结果不符合：把数据代入代码走一遍！

正确答案（自我反省）如下：

```js
/* 删除字符串中出现大于等于2的相邻字符 */
function removeDuplicates(str){
    let i = 0, j = 1;
    // 主要错误1：while(str[j] !== null) 链表写多了！！退出条件写成这样了我晕！主要就错这里了...还是有点慌
    while(str[j]){
        if(str[i] === str[j]){
            str = deleteStr(str, i, j);
            i = 0;
            j = 1;
        }
        else{
            i++;
            j++;
        }
    }
    return str;
}
function deleteStr(str, i, j){
    // 删除[i,j]范围内的字符串
    let start = i;
    let end;
    while(str[i] === str[j]){
        i++;
        j++;
    }
    end = i;
    // 主要错误2：删除字符串[i,j]范围内的数居然一时间忘记了！我晕！当时这么写的：str.split("").splice(start, end-start+1).join("")
    // 这根本改不掉字符串啊...当时我在想啥...
    	// 主要是超时我也不太好console.log()来debug，所以下回出现超时问题时第一时间把while那里的问题全弄掉！
    let arr = str.split("");
    arr.splice(start, end - start + 1)
    str = arr.join("");
    return str;
}
console.log(removeDuplicates("abbbaca"));// "ca"
```

> 22/2/13更 蛤 字符串删除？这样不就好了😶‍🌫️😶‍🌫️😶‍🌫️

```js
let str = "abcdef";
let i = 1, j = 3; // 删除[1, 3]范围内的字符串 即为 bcd

//  删除str [i, j] 范围内的字符串
let newStr = str.replace(str.slice(i, j + 1), ''); 
str = newStr;
```



## 北京字节跳动技术中台日常实习二面 21/11/26

> 上次是面经
>
> 这回是凉经哈哈
>
> - JS基础不行（考察了贼不熟悉，之前几乎没看过的Promise **凉**）
>
> - 稍微有些自信的计算机网络考了一个CDN的内容（真没用过QAQ **凉**），考了个HTTP缓存（只剩一点点印象了，就看到过一次这个概念orz，被深入追问搞懵 **凉**）
> - Vue框架内容本来没有系统学过（问双向绑定的具体实现，虽然是经典八股文，虽然说出来了Proxy代理，但是 我哪儿会啊 **凉**）
> - 算法题 超级经典 最大子序列和 用的贪心算法（经典思路对代码错，这么简单的代码都写不出来。。感觉当时脑子已经乱掉了😂 **凉**）
> - 问题不多，大部分时间都是面试官在指出我答题时的问题——没用甚至起到副作用的回答太多、答不到点子上、代码能力太弱！
>   - 虽然挺伤俺心但是真的挺有收获的！总而言之，感谢这位冷酷（雀氏有一些严肃）帅气（真的挺帅的）的哥哥！我会更加努力哒！
>
> 经验总结：
>
> **回答问题时要抓住重点，铺垫的背景可以不讲那么多，只要回答面试者想知道的（想要考察的）点即可！**不知道可以爽快地过/询问面试官正确答案进行进一步探讨？总之尽可能多地让自己会的知识点和自己的闪光点被面试官大大看到！

### 一面内容回顾

问到了一面时问过的 CDN内容分发网络、Vue中的key

考察面试之后是否有很好的总结

> 回答中废话太多且关键内容太浅！

从这里面试官大大就对我印象分- -了

上面说的“问题抓不住重点”就是出自这里

> 经验教训：之后总结一个知识点要加上“精炼版本的解答”——
>
> 遵循学习知识三段论
>
> - 了解这个知识的概念是什么
> - 了解这个知识被提出来的目的是什么?
> - 将知识用一句话（简练地）说清楚！

了解CDN内容分发网络嘛~说一下

> 开始我说了cdn是用来存储一些资源的类似服务器群体，一些上线的项目会就近使用这其中的资源，可以加速~
>
> 面试官大大这样批评我——“cdn能干啥不是我想问的，我想直到的是其中的细则”
>
> 菜是原罪呐QAQ

正确回答：

- CDN依靠部署在各地的==**边缘**服务器==，通过==**中心**平台==的负载均衡、内容分发、调度等功能模块，使用户**就近获取所需内容，降低网络拥塞**，提高用户访问响应速度和命中率。

- CDN的关键技术主要有内容存储和分发技术。 

- 最好能是使用过这个。

上面重点标注的==**边缘**服务器==，==**中心**平台==才是重点哈！

> “要结合实际应用去理解，而不是背知识点”
>
> 金句频出！（也是疯狂吊打我啊😂😂）

### Vue中的key有什么作用

又问到了这个知识点，很明显答案没让面试官大大满意XD

再来回忆一下官方文档吧！

- `key` 的特殊 attribute 主要**用在 Vue 的虚拟 DOM 算法**，**在新旧 nodes 对比时辨识 VNodes**。
  - 如果不使用 key，Vue 会使用一种**最大限度减少动态元素并且尽可能的尝试就地修改/复用相同类型元素**的算法。
  - 而使用 key 时，它会**基于 key 的变化重新排列元素顺序**，并且**会移除 key 不存在的元素**。

- 有相同父元素的子元素必须有**独特的 key**。重复的 key 会造成渲染错误。

效率上的问题看来是比较被看重的！学习的时候要多注意呐！

另外这里还是得多用，就能记住了~背知识点是不对的哩

> ### 计网
>

### 说一下HTTP缓存的内容-本地磁盘缓存、强缓存、协商缓存

答了本地磁盘缓存和浏览器缓存

> 下面追问的部分在小林Coding的《图解网络》中有说过，但是我只在很久前看过一遍..忘记了

#### 追问-说下本地磁盘缓存的细节呢

好久没看这块儿。。给忘掉了

#### 追问-了解浏览器缓存中的强缓存和协商缓存嘛

> 22/2/13更——这里很重要！建议把对应的字段也了解一下！

也是忘掉了。。

#### [http缓存详解，http缓存推荐方案](https://www.cnblogs.com/echolun/p/9419517.html)

这篇文章写得不错，推荐~

### JS知识考察

这里直接就手写代码了，开始问我了解Promise不~让写一个经典的`Promise.all()`，这东西…我只是听说过有从没实现过啊…就让面试官大大换一个，

### 实现sleep函数 

> 很多编程语言里都有`sleep()`，`delay()`等方法，它能让我们的程序不那么着急的去执行下一步操作，而是延迟、等待一段时间。

最开始用了个语法糖实现被告知不符合要求,需要自己封装一个sleep函数返回promise

```js
async function sleep() {
    await setTimeout(() => {
        console.log("wake u")
    }, 1000)
}
sleep(1000)
```

主要是对Promise封装不很了解。。这里开始有点懵，后来面试官大大很无奈地给了提示…（这么简单还需要我给提示嘛？面试官大大脸上写满了这句话 我太菜了…）

```js
function sleep(time) {
 	return new Promise(resolve => {
//        setTimeout(() => {
//            resolve()
//        }, time)
        setTimeout(resolve, time)// 这种写法更简单~
    })   
}
sleep(1000).then(() => console.log("wake up"))
```

> ### 算法题
>

### [53. 最大子序和](https://leetcode-cn.com/problems/maximum-subarray/)

可以暴力解，可以贪心，可以动归的一题

```js
// 1.使用的贪心算法，每轮记录当前的和temp
	// 01 当前和大于零则继续将下一个要遍历的值加到temp上	
	// 02 一旦当前和小于零则放弃当前的和temp，将下一个要遍历的值赋给当前的和temp
// 2.记录最大子序值，每轮进行更新
// 这么简单一个思路我不理解为啥我会写不出来正确代码？？！if else不会嘛？
var maxSubArray = function(nums) {
    let tempSum = nums[0]// 存储 现在的和
    let maxSum = nums[0]
    for(let i = 1; i < nums.length; i++) {
        if(tempSum < 0) {
            tempSum = nums[i]
        }
        else {
            tempSum += nums[i]
        }
        maxSum = maxSum > tempSum ? maxSum : tempSum
    }
    return maxSum
};
```



### 面试官大大给出的宝贵建议

> 大部分为面试官大佬的原话，少数进行艺术加工😂但是大体上就是这个意思

- 学好基础学科的内容——计算机网络、操作系统
- 学好前端基础——JavaScript
- 对框架要熟悉，要了解一些效率上的问题以及部分核心功能的原理（也就是常说的“读源码”）
- **多敲代码**
  - 你看到知识，背下来它，嗯背得很好，下次不要这样了。
  - 公司招实习生不是为了让你来学习的，而是要实现业务，比如说写一个跑马灯，写一个轮播图，要能写得出来啊，代码能力要强！
  - 学习过程中如果有想法就要**付诸实践**多去敲一敲代码，实现一些具体功能！多敲才能更熟练。

- 实现算法题时，如果对于高级解法没有特别多自信，那么可以选择先暴力求解A出来再去寻求好解法！
  - 有些想到的好想法不会具体实现可以不提或放在最后题，不要上来把自己的印象分扣光哈！
- 入职以后，为了更好的未来发展要关注软素质——如何让代码更优雅，更简洁~

## 北京京东科技 日常实习一面 21/12/22

> 体验极佳的一次面试！面试官大大贼温柔，循循善诱地帮助我把问题捋出来；
>
> 另外问题也都对我这个初学者很友好，超级简单哈哈哈
>
> 面试完半个小时二面电话就来了，约到了明天上午十一点🧐

### 聊项目

- 说下你在这个大型外包项目中负责的内容
- 说下地图中的接口是如何用的

> 后来才知道，面的这个部门其中一个业务就是为政府做智慧城市相关的业务~真的巧！我最近在忙活的外包项目也是这个主题的说！

> ### CSS
>

### 对CSS3动画有了解么

无。面试官大大表示这个是加分项 其实实际开发也用不太上

### 对盒子模型有了解嘛~

这里我还写过3篇文章嘞~（但是面试时候没想起来XD）

[【青训营】做面试题般回顾前端基础知识CSS篇 - 2 CSS盒模型那些有趣的知识点 - 掘金 (juejin.cn)](https://juejin.cn/post/7008801098257399821)

[【青训营】做面试题般回顾前端基础知识CSS篇 - 3 标准盒模型中块元素宽度&总宽度的问题 - 掘金 (juejin.cn)](https://juejin.cn/post/7009197678642872350)

[由box-sizing属性引出的对盒模型的思考 - 掘金 (juejin.cn)](https://juejin.cn/post/7009640407634198541)

CSS3 中的盒模型有以下两种：标准盒子模型、IE 盒子模型

![image](https://cdn.nlark.com/yuque/0/2020/png/1500604/1603600820746-e10daafa-451a-454e-9705-f8c358769d5b.png#align=left&display=inline&height=366&margin=%5Bobject%20Object%5D&originHeight=455&originWidth=746&size=0&status=done&style=none&width=600)

![img](https://cdn.nlark.com/yuque/0/2020/png/1500604/1603600820555-dc6ed390-d47e-412b-942a-857bbe5f280d.png?x-oss-process=image%2Fresize%2Cw_746#align=left&display=inline&height=368&margin=%5Bobject%20Object%5D&originHeight=462&originWidth=791&size=0&status=done&style=none&width=630)

盒模型都是由四个部分组成的，分别是 margin、border、padding 和 content。



另外我提到了——

**标准盒模型和 IE 盒模型的区别**在于设置 width 和 height 时，所对应的范围不同：

- 标准盒模型的 width 和 height 属性的范围只包含了 content，
- IE 盒模型的 width 和 height 属性的范围包含了 border、padding 和 content。

可以通过修改元素的 box-sizing 属性来改变元素的盒模型：

- `box-sizing: content-box`表示标准盒模型（默认值）
- `box-sizing: border-box`表示 IE 盒模型（怪异盒模型）



### 移动端适配要咋做呢？

【1】使用特殊的布局单位（追问：rem em的区别？）

**em 和 rem**：它们相对于 px 更具灵活性，它们都是**相对长度单位**，它们之间的区别：**em 相对于父元素，rem 相对于根元素。**

二者的详细区别：

- **em：** 文本相对长度单位。相对于当前对象内文本的字体尺寸。如果当前行内文本的字体尺寸未被人为设置，则相对于浏览器的默认字体尺寸(默认 16px)。(相对父元素的字体大小倍数)。
- **rem：** rem 是 CSS3 新增的一个相对单位，相对于根元素（html 元素）的 font-size 的倍数。**作用**：利用 rem 可以实现简单的响应式布局，可以利用 html 元素中字体的大小与屏幕间的比值来设置 font-size 的值，以此实现当屏幕分辨率变化时让元素也随之变化。

【2】还说了一个媒体查询

> 使用 @media 查询，可以针对不同的媒体类型**定义不同的样式**。
>
> 比如：针对不同的屏幕尺寸设置不同的样式，特别是需要设置设计响应式的页面，@media 是非常有用的。当重置浏览器大小的过程中，页面也会根据浏览器的宽度和高度重新渲染页面。
>
> ```css
> <!-- link元素中的CSS媒体查询 -->
> <link rel="stylesheet" media="(max-width: 800px)" href="example.css" />
> <!-- 样式表中的CSS媒体查询 -->
> <style>
> @media (max-width: 600px) {
>       .facet_sidebar {
>         display: none;
>       }
> }
> </style>
> ```
>

### 【经典】子盒子相对于父盒子做水平垂直居中？

抛出之前写得一篇文章 我觉得很好理解&很全面了~

[【青训营】做面试题般回顾前端基础知识CSS篇 - 4 弹性布局与经典面试题CSS实现垂直居中 - 掘金 (juejin.cn)](https://juejin.cn/post/7009662518406676488)

### 刚才聊到了栅式布局 那么flex都有啥属性呢？

> flex布局的概念：
>
> [flex 布局的基本概念 - CSS（层叠样式表） | MDN (mozilla.org)](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)

> 总结几个常用方法：
>
> [更改flex方向 flex-direction](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox#更改flex方向_flex-direction)
>
> [用flex-wrap实现多行Flex容器](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox#用flex-wrap实现多行flex容器)
>
> 以上两个属性的简写：[简写属性 flex-flow](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox#简写属性_flex-flow)
>
> [flex-grow - CSS（层叠样式表） | MDN (mozilla.org)](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex-grow)
>
> [flex-shrink - CSS（层叠样式表） | MDN (mozilla.org)](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex-shrink)
>
> [flex-basis - CSS（层叠样式表） | MDN (mozilla.org)](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex-basis)
>
> 当然！这些如果不常用 根！本！记！不！住！
>
> 所以就有了下面这个小练习👇

> 推荐一个[5.2Kstars的仓库](https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fthomaspark%2Fflexboxfroggy%2F)（截至21/10），在线尝试地址[戳这里](https://link.juejin.cn/?target=https%3A%2F%2Fflexboxfroggy.com%2F)
>
> 然而！在我之前都做了一遍的前提下 在面试时候除了最基础的居中的属性，其他flex相关的属性都没答上来🥺这里就很难受了 所以要时常用啊！
>
> ![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/460b18df1e564cd68de41a77206c16aa~tplv-k3u1fbpfcp-watermark.awebp?)

### 刚才提到了高度塌陷的概念（在垂直居中时候提到的）可以说一下是什么情景 具体怎么解决么？

- 子盒子设置浮动，父盒子可能会高度塌陷
- 给父盒子设置一个`overflow:hidden;` 这样父盒子就是一个BFC了（挖坑。）高度塌陷消除~

### 刚才提到了BFC的概念（高度塌陷的时候）简单说一下BFC的作用

这个当时没太说清楚 只是举了个自适应双栏布局的例子（自己挖坑自己跳啊！），查阅下资料——

> 先来看两个相关的概念：
>
> - **Box**: Box 是 CSS 布局的对象和基本单位，⼀个⻚⾯是由很多个 Box 组成的，这个 Box 就是我们所说的盒模型。
> - **Formatting context**：块级上下⽂格式化，它是⻚⾯中的⼀块渲染区域，并且有⼀套渲染规则，它决定了其⼦元素将如何定位，以及和其他元素的关系和相互作⽤。
>
> 块格式化上下文（Block Formatting Context，BFC）是 Web 页面的可视化 CSS 渲染的一部分，是布局过程中生成块级盒子的区域，也是浮动元素与其他元素的交互限定区域。
>
> 通俗来讲：BFC 是一个**独立的布局环境**，可以理解为一个容器，在这个容器中按照一定规则进行物品摆放，并且不会影响其它环境中的物品。如果一个元素符合触发 BFC 的条件，则 BFC 中的元素布局不受外部影响。

### 追问：说几个创建BFC的条件

- 根元素：body；
- 元素**设置浮动**：float 除 none 以外的值；
- 元素**设置绝对定位**：position (absolute、fixed)；
- display 值为：inline-block、table-cell、table-caption、**flex** 等；
- **overflow** 值为：hidden、auto、scroll；

### 追问：BFC的作用

> - **解决 margin 的重叠问题**：由于 BFC 是一个独立的区域，内部的元素和外部的元素互不影响，将两个元素变为两个 BFC，就解决了 margin 重叠的问题。
> - **解决高度塌陷的问题**：在对子元素设置浮动后，父元素会发生高度塌陷，也就是父元素的高度变为 0。解决这个问题，只需要把父元素变成一个 BFC。常用的办法是给父元素设置`overflow:hidden`。（这个就是上面提到的内容）
> - **创建自适应两栏布局**：可以用来创建自适应两栏布局：左边的宽度固定，右边的宽度自适应。



> ### JS
>

> （2）表示迄今为止在日常实习中遇到了两次

### （2）说下JS有哪些数据类型？

Undefined、Null、Boolean、Number、String、Object、Symbol、BigInt。

### 很有趣的问题！聊聊数组都有哪些API 再拓展开来讲讲 用法

> 这个问题太有趣了！真的是要多（带着思考地）写（优雅的）代码，才能流利地回答啊！

> 面试官大大当时提醒了我 `reduce concat sort`这几个方法（居然没想起来！用的太少了啊还是），其他说得都还算全，这里我根据《JS数据结构与算法（第三版）》再捋一遍！
>
> 
>
> ![image-20211201142106168](https://gitee.com/su-fangzhou/blog-image/raw/master/202112011421315.png)

- 数组的遍历 `map forEach`（问了这两个的区别 答：一个返回改变后的数组 一个只是单纯遍历）
- 数组的连接 `concat`
- 数组的排序 `sort` 还提到了sort中函数的内容
- 数组的归并操作 `reduce` 这个是面试官大大提醒的 讲了下用reduce算数组之和
- 数组的查找 `indexOf(某一个数) find(某一个条件) includes(（是否有这个）数)`

![image-20211222203821167](https://gitee.com/su-fangzhou/blog-image/raw/master/202112222038209.png)

- 数组的删除`splice`与切片（节选一段）`slice`（这个当时居然忘记了！经常用的明明）
- 数组转字符串 `toString` `join('分隔符')`
- 数组的翻转 `reverse`
- 数组的过滤 `filter(输出的元素需要满足的条件)`
- 数组是否存在某个值`some` 是否全为某个值`every`  这个当时也忘了！
- 填充数组 `fill` 



### 如何进行Object的值遍历？

[Object.values() - JavaScript | MDN (mozilla.org)](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/values)

这个API很有趣！返回一个给定对象自身的所有可枚举**属性值**的数组，值的顺序与使用[`for...in`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/for...in)循环的顺序相同 

> 拓展一下 `for in` `for of`的区别 什么时候用前者 什么时候用后者？——很重要哦！
>



### JS如何实现继承呢？

【1】通过原型链

> 通过原型链实现子类对父类的继承
>
> `Child.prototype = new Father();`
>
> 别忘了修正Child类显示原型的`constructor`（值为对应对象的构造函数）
>
> `Child.prototype.constructor = Child`

> > 这部分之前写过一篇小结，放到这里，能说出来肯定是加分的！
>
> #### 继承模式
>
> * 原型链继承 : **得到方法**
>
>   * 通过`Child.prototype = new Parent()`继承父函数 从而继承了属性与方法
>   * 缺点：通过Child构造的对象 的原型对象 的 `constructor` 属性指向Parent！这不好！
>     * 我们需要让子类型的原型的 `constructor`  指向子类型 才对！
>     * 这个问题可以通过 `Child.prototype.constructor = Child;` 来修正constructor属性
>
>   ```js
>   function Parent() {};
>   Parent.prototype.test = function() {};
>   function Child() {};
>   Child.prototype = new Parent(); // 子类型的原型指向父类型实例
>   Child.prototype.constructor = Child;// 修正constructor属性
>   var child = new Child(); //有test()
>   ```
>
> * 借用构造函数 : **得到属性**
>
>   * 通过 `Parent.call(this,name,age)` 继承（调用父类型构造函数）
>   * 缺点：**获得父类型的方法**很麻烦！还得借助call方法一个个地弄 `Parent.func.call(this,参数)`
>     * 其他例子：`Math.max.call(null, 1, 2)`
>
>   ```js
>   function Parent(xxx) { this.xxx = xxx };
>   Parent.prototype.test = function() {};
>   function Child(xxx,yyy) {
>       Parent.call(this, xxx);//借用构造函数   this.Parent(xxx)
>       // 相当于 this.Parent(xxx)
>   }
>   var child = new Child('a', 'b');  //child.xxx为'a', 但child没有test()
>   ```
>
> * 组合
>
>   ```js
>   function Parent(xxx){this.xxx = xxx}
>   Parent.prototype.test = function(){};
>   function Child(xxx,yyy) {
>       Parent.call(this, xxx);//借用构造函数   this.Parent(xxx)
>   }
>   Child.prototype = new Parent(); //得到test()
>   var child = new Child(); //child.xxx为'a', 也有test()
>   ```
>
> 
>
> #### JS实现继承的最佳实践——==组合继承==
>
> > 使用 原型链结合构造函数
> >
> > 在父类型属性有很多条时 使用 `Parent.call(this,父函数属性)` 让子类型继承
>
> ```js
> function Parent(attribute,other){
>     this.attribute = attribute;
>     this.other = other;
> }
> Parent.prototype.output = function(){
>     console.log("此方法位于Parent的显式原型中  Child构造函数继承了我 所以Child的实例对象可以顺着隐式原型连找到这个对象（在Object对象上）");
> }
> function Child(attribute, other){
>     Parent.call(this, attribute, other);// 继承父类型的属性
> }
> // 8-10行 写成 var child = new Parent() 也可以~
> Child.prototype = new Parent();// 原型链继承！让子类型的显式原型指向父类型的实例！
> Child.prototype.constructor = Child;// 出于严谨 这里修正constructor属性 要不然Child的显式原型的constructor（也就是构造出来的child的构造对象）就是Parent了 这就很奇怪！
> var child = new Child('a', 'b');// ['a', 'b']
> child.output();
> ```
>
> ![在这里插入图片描述](https://img-blog.csdnimg.cn/73bdd1e607af4508870095cf0d8ffd98.png)
>
> 上面的属性的输出有些问题
>
> JS继承最佳实践完整版输出如下：
>
> ![在这里插入图片描述](https://img-blog.csdnimg.cn/12053e2fc0e9454696d32fcf45227495.png)
>
> 好吧上面的还是不全 有点小问题——
>
> ```js
> Child.prototype.constructor = Child;// 出于严谨 这里修正constructor属性 要不然Child的显式原型的constructor就是Parent了 这就很奇怪！
> // 修正完 constructor指向Child构造函数
> ```
>

【2】通过ES6中的Class类

这个没太说清楚~

> 月影大大的课程之前做得截图，很基础哈~

![image-20211222202410100](https://gitee.com/su-fangzhou/blog-image/raw/master/202112222024236.png)

【3】通过构造函数继承

这个其实才是面试官想考察的内容（顺带着引出了下一个问题👇的内容）

`let son = new Father()`

### （2）说一下new一个构造函数过程中发生了什么

> 艾玛太经典了，我还写过[一篇文章](https://juejin.cn/post/7012887169878458404)说这里哩（写得老清楚了，看就完事！）

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f493f86148bf4a3c888e34b6f6fd79c1~tplv-k3u1fbpfcp-watermark.awebp?)

说了一下 在红宝书看到过bulabulabula

另外拓展了一下——判断构造函数的返回值类型，如果res为对象类型，new Person的最终结果为res 而非我们想要的那个实例对象！

#### 追问-刚才说的第三步提到了this，那么new过以后，this指向哪里呢？

指向这个新创建的对象（红宝书提到了）

> 拓展：可以看看之前写的那篇文章中的例子 Fn即为构造函数 很明显它是指向这个新创建的Object空对象的
>
> ![在这里插入图片描述](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/09b2a3006d514261b9a8f1638d277c3e~tplv-k3u1fbpfcp-watermark.awebp)

### 了解Event Loop么？

> 我能说我上个月刚看完相关文章么emm 其实我也说了（~~老实~~话痨孩子）

> > 前段时间总结的笔记——
>
> ### JS引擎的执行机制——事件循环 Event Loop
>
> > 看了下这篇文章 简单入门[10分钟理解JS引擎的执行机制](https://segmentfault.com/a/1190000012806637)
> >
> > 注意本文中所有执行流程是基于浏览器环境，而不是node环境
> >
> > > node轮询有phase（阶段）的概念
> > > [浏览器和NodeJS中不同的Event Loop ](https://link.segmentfault.com/?enc=6x5T1cZ7jDAzqHVEmBhr0g%3D%3D.9kALuwmRprTk9xaL8P54pEg9Lt6E59fqqaQHd1Q%2Bi40a3%2FUE9nwFb8wOUfv%2FgmQu)
>
> > 事件循环的核心机制是：**宏任务、微任务及其相关队列的执行流程图**
>
> 单线程的JS通过事件循环 Event Loop 实现异步
>
> JS的执行机制是
>
> - 首先判断JS是同步还是异步,同步就进入主线程,异步就进入**event table**
> - 异步任务在event table中注册函数,当满足触发条件后,被推入**event queue**
> - 同步任务进入主线程后一直执行,直到**主线程空闲**时,才会去event queue中查看是否有可执行的异步任务,如果有就推入主线程中
>
> 以上三步循环执行,这就是event loop
>
> > 举个例子
> >
> > ```js
> > console.log(1)
> > 
> > setTimeout(function(){
> >  console.log(2)
> > },0)
> > 
> > console.log(3)
> > ```
> >
> > ```js
> > 1.console.log(1) 是同步任务,放入主线程里
> > 2.setTimeout() 是异步任务,被放入event table, 0秒之后被推入event queue里
> > 3.console.log(3) 是同步任务,放到主线程里
> > 
> > // 当 1、 3在控制条被打印后,主线程去event queue(事件队列)里查看是否有可执行的函数,执行setTimeout里的函数
> > ```
>
> 但这还不够！
>
> #### 微任务、宏任务的概念
>
> 如果有多个任务在event queue里呆着呢？谁先？谁后？上新概念！
>
> 上道题
>
> ```js
> setTimeout(function(){
>     console.log('定时器开始啦')
> });
> 
> new Promise(function(resolve){
>     console.log('马上执行for循环啦');
>     for(var i = 0; i < 10000; i++){
>         i == 99 && resolve();
>     }
> }).then(function(){
>     console.log('执行then函数啦')
> });
> 
> console.log('代码执行结束');
> ```
>
> 尝试按照,上文我们刚学到的JS执行机制去分析
>
> ```javascript
>【1】setTimeout 是异步任务,被放到event table
> 
> 【2】new Promise 是同步任务,被放到主线程里,直接执行打印 console.log('马上执行for循环啦')
> 
> 【3】.then里的函数是 异步任务,被放到event table
> 
> 【4】 console.log('代码执行结束')是同步代码,被放到主线程里,直接执行
> ```
> 
> 所以,结果是 【马上执行for循环啦 --- 代码执行结束 --- 定时器开始啦 --- 执行then函数啦】吗?
>
> 亲自执行后**,结果居然不是这样**,而是【马上执行for循环啦 --- 代码执行结束 --- **执行then函数啦 --- 定时器开始啦**】
>
> > 欸？不是`setTimeout`这个任务先进的event table麽？
>>
> > 并不是！上述根据异步同步一股脑划分的方法不对！
> 
> 而准确的划分方式是:
>
> - macro-task(**宏任务**)：包括`整体代码script`，`setTimeout`，`setInterval`
>- micro-task(**微任务)**：`Promise`，`process.nextTick`（Node独有）
> 
> ![clipboard.png](https://segmentfault.com/img/bV1TKz?w=879&h=723)
>
> 按照这种分类方式:JS的执行机制是
>
> - 【1】执行一个**宏任务**(JS脚本中的内容都是宏任务~),过程中如果【2】遇到微任务,就将其【3】放到微任务的【事件队列】里
>- 当前【4】宏任务执行完成后,会查看微任务的【事件队列】,并【5】将里面全部的微任务依次执行完
> 
> 重复以上2步骤,结合event loop(1) event loop(2) ,就是更为准确的JS执行机制了。
>
> 尝试按照刚学的执行机制,去分析例2:
>
> ```js
>1.首先执行script下的宏任务,遇到setTimeout,将其放到宏任务的【队列】里
> 
> 2.遇到 new Promise直接执行,打印"马上执行for循环啦"
> 
> 3.遇到then方法,是微任务,将其放到微任务的【队列里】
> 
> 4.打印 "代码执行结束"
> 
> 5.本轮宏任务执行完毕,查看本轮的微任务,发现有一个then方法里的函数, 打印"执行then函数啦"
> 
> 6.到此,本轮的event loop 全部完成。
> 
> 
> 7.下一轮的循环里,先执行一个宏任务,发现宏任务的【队列】里有一个 setTimeout里的函数,执行打印"定时器开始啦"
> ```
> 
> 所以最后的执行顺序是【马上执行for循环啦 --- 代码执行结束 --- 执行then函数啦 --- 定时器开始啦】
>
> #### 谈谈`setTimeout`
>
> 这段`setTimeout`代码什么意思? 我们一般说: 3秒后,会执行`setTimeout`里的那个函数
>
> ```javascript
> setTimeout(function(){
>     console.log('执行了')
>  },3000)    
> ```
> 
> 但是这种说并不严谨,准确的解释是: 3秒后,`setTimeout`里的函数会**被推入event queue**,而event queue(事件队列)里的任务,只有在**主线程空闲时才会执行**。
>
> **所以只有满足 (1)3秒后 (2)主线程空闲,同时满足时,才会3秒后执行该函数**
>
> 如果主线程执行内容很多,执行时间超过3秒,比如执行了10秒,那么这个函数只能10秒后执行了
>
> #### 图解Event Loop
>
> ![image-20211222211840736](https://gitee.com/su-fangzhou/blog-image/raw/master/202112222118849.png)
>
> - 同步任务直接进入主执行栈（call stack）中执行
>- 等待主执行栈中任务执行完毕，由EL将异步任务推入主执行栈中执行

说完概念 简单说了下例子，面试官大大下狠手了——

### 追问 了解async await么

答：简单了解 刚准备描述一个输出题的例子…

> 补一下async await的概念
>
> ![image-20211222213652417](https://gitee.com/su-fangzhou/blog-image/raw/master/202112222136472.png)
>
> ![image-20211222213956113](https://gitee.com/su-fangzhou/blog-image/raw/master/202112222139194.png)
>
> ![image-20211222213800601](https://gitee.com/su-fangzhou/blog-image/raw/master/202112222138658.png)

面试官大大说你别费劲了 我给你来一道 说输出吧

```js
async function async1(){
    console.log("async1 start");
    await async2();
	console.log("async1 end");
    return 'async return';
}
async function async2(){
    console.log("async2");
}

console.log("script start");

setTimeout(function() {
    console.log("setTimeout");
}, 0);

async1().then(function (message) { console.log(message)});

new Promise(function(resolve){
	console.log("promise1");
	resolve();
}).then(function() {
	console.log("promise2");
});

console.log("script end");
```

我自己的理解如下：

> 第二版理解：（但还是不透彻！回头需要看下红宝书&一些文章继续学习）
>
> ![image-20211222214907852](https://gitee.com/su-fangzhou/blog-image/raw/master/202112222149957.png)



> 另外面试官大大建议我在[babel](https://babeljs.io/)中转换下ES6的async await代码——
>
> 在线编译器：[Babel · The compiler for next generation JavaScript (babeljs.io)](https://babeljs.io/repl/#?browsers=defaults%2C not ie 11%2C not ie_mob 11&build=&builtIns=false&corejs=3.6&spec=true&loose=true&code_lz=IYZwngdgxgBAZgV2gFwJYHsI1JKBGACgEoBvAKBkpikxHQBsBTAOnvQHMCAiHaPGEMmAAnZFyIBuClWAB3YKmTZw0AEzEpASBoQ6TVh2698MRhAAm4qVRjDGyBMKwByY7fuOIzqQF8ybxBQMLGN1UmlKHT0WNk4eFShVKzI_MiA&debug=false&forceAllTransforms=true&shippedProposals=true&circleciRepo=&evaluate=false&fileSize=true&timeTravel=true&sourceType=module&lineWrap=true&presets=env%2Creact%2Cstage-3&prettier=true&targets=&version=7.16.9&externalPlugins=&assumptions={})



> ## 手写题
>

### 斐波那契数列-记忆化递归、动态规划

> 这道算法题太友善了趴 感谢一面大大！

经典递归问题，输入n 输出斐波那契数 

- 斐波那契数定义：第n个数返回第n-1个数和第n-2个数的和

```js
function fb(n) {
    if (n === 0) {
        return 0;
    }
    if (n === 1) {
        return 1;
    }
    return fb(n - 2) + fb(n - 1)
}
```

- 记忆化递归

```js
const arr = [];
function fb(n) {
    if (n === 0) {
        return 0;
    }
    if (n === 1) {
        return 1;
    }
    if (arr[n]) {
        // 防止重复的递归
        return arr[n];
    } else {
        arr[n] = fb(n - 1) + fb(n - 2);
    }
    return arr[n];
}
```

- 动态规划

```js
function fb(n) {
    const dp = [];
    dp[0] = 0, dp[1] = 1;
    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n];
}
```



# 北京京东科技 日常实习二面 21/12/23

> 激动的心 颤抖的手 终于拿到offer了！
>
> 感谢和善的面试官大大！一定努力学习回报大大的信任！

> 总而言之这次面试还是更注重“我在学校做了什么”

## 大学生活闲聊

这部分面试官大大问了我几个有趣的问题——

- 大学这三年多的学习历程？
  - 大一：数理基础 大二：计算机基础课人工智能 大三才开始正式系统地学习前端开发

- 为什么放弃人工智能科研，选择前端开发？

- 大学期间上过感触最深的课程是哪个？
  - 数据结构？那么让你写一本书/告诉学弟学妹如何学习数据结构与算法，那么你会怎么写呢？
- 大学期间做过（计算机相关）最有成就感的一件事是什么？
  - 答的大二下的软基课设，基本上是自己一人独自完成了一个物流管理小项目

## 一道简单的手写题

```js
‘a.b.c’ -> {a: {b: {c: null }}}
```

> 下面的两个【1】【2】方法都是“拼接字符串”的思路 不可！
>
> 【3】是正解！
>
> > - `JSON.parse()` 方法用来解析JSON字符串，构造由字符串描述的JavaScript值或对象
> >   - JSON字符串(String) （仅限JSON字符串哦）-> Object
> > - `JSON.stringify()` 方法将一个 JavaScript 对象或值**转换为 JSON 字符串**

- 【1】用了个笨办法 面试官也没让优化 直接就到反问环节了
  - 22/1/27更 其实这里写的有问题 应该是**输出对象**才行 不是这样拼接！

```js
function main(str) {
    let obj = {}
    let data = str.split(".").reverse()
    temp = JSON.parse(JSON.stringify(`{ ${data[0]} : null }`))
    for(let i = 1; i < data.length; i++) {
        // 这个思路是不对的！
        obj = JSON.parse(JSON.stringify(`{ ${data[i]} : ${temp} }`))
    }
    return o
}
console.log(main('a.b.c.d'));
```

- 【2】`递归`

```js
// ['a', 'b', 'c'] -> {a: {b: {c: {} }}}
let arr = ['a', 'b', 'c'];
const temp = {}
let index = 0;
const iteration = function longIterationFunction(temp) {
    if (index === arr.length) {
        return '{}';
    }
    temp = `{${arr[index++]}: ${iteration(arr[index])} }`;
    return temp;
}
console.log(iteration(arr));
```

- 【3】`reduce`

```js
let arr = ['a', 'b', 'c'].reverse();
const transform = function transformArrToObj() {
    return arr.reduce((pre, cur) => {
        return { [cur]: pre }
    }, {})
}
console.log(JSON.stringify(transform()));/{"a":{"b":{"c":{}}}}
```

## 理想哥
