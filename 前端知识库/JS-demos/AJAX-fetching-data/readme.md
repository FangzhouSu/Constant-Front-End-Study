> 21/10/13
>
> 最后更新于 21/10/14

> 本文demo源代码与具体资源位于 [github仓库-正在起步阶段的前端知识库](https://github.com/FangzhouSu/Constant-Front-End-Study/tree/main/%E5%89%8D%E7%AB%AF%E7%9F%A5%E8%AF%86%E5%BA%93/JS-demos)，欢迎大家来贡献看法/分享其他有意义的demo❤️

[TOC]

[掘金文章链接](https://juejin.cn/post/7018818444455837726/)

## 学习Ajax/Fetch请求&Promise

> 适合准备学习Ajax，对promise有一定了解（没有也可以啦~）的小伙伴用于入门请求的发送&接收（使用.txt文件作为数据库，不用考虑服务端的编码）
>
> .html的运行方式分为 
>
> - local 从本地文件运行示例（浏览器不会运行XHR请求，因为安全限制）
>   - **They feature asynchronous requests**（当代码有异步请求的特性时再从本地打开）浏览器不会运行异步请求
> - server 在**本地web服务器**上运行 
>   - 为了解决异步请求，我们需要通过在本地web服务器上运行ajax-billSu.html来测试异步请求的发送成功与否
>
> 我们将递进地完成这两块的内容~

本DEMO整理自MDN官方文档教程

[基本的Ajax请求](https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/Client-side_web_APIs/Fetching_data#基本的ajax请求)

让我们看看使用[`XMLHttpRequest`](https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest) 和 [Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)如何处理请求.

### 从本地文件运行示例

> 因为安全限制，所以如果从本地文件运行实例时，一些浏览器将不会运行XHR请求~
>
> 之后我们需要通过在本地服务器上运行它来测试这个示例

我们将从几个不同的文本文件中请求数据，并使用它们来填充内容区域。

这一系列文件将作为我们的假数据库; 在真正的应用程序中，我们更可能使用服务器端语言（如PHP，Python或Node）从数据库请求我们的数据。 不过，本例中我们要保持简单，并专注于客户端部分。





## [官方提示](https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/Client-side_web_APIs/Fetching_data#xmlhttprequest)

可以点进去MDN看一下哦~

在这个例子中，我们将通过XHR在下拉菜单中选择一首诗，并加载另一首诗



<hr>

## 完成步骤

### 基本的Ajax请求

注意 如果只是从本地文件运行示例，
一些浏览器(包括Chrome)将不会运行XHR请求。这是因为安全限制~
为了解决这个问题，我们需要通过在本地web服务器上运行它来测试这个示例

这里因为安全限制的问题，其实是没有效果的XD 

![在这里插入图片描述](https://img-blog.csdnimg.cn/b7573e74714f4c8cbff7e703fc513d8d.png)



```js
// 注意 如果只是从本地文件运行示例，
// 一些浏览器(包括Chrome)将不会运行XHR请求。这是因为安全限制~
// 为了解决这个问题，我们需要通过在本地web服务器上运行它来测试这个示例
const verseChoose = document.querySelector('select');
const poemDisplay = document.querySelector('pre');

verseChoose.onChange = function(){
    const verse = verseChoose.value;// 获取到的诗 赋给verse变量
    updateDisplay(verse);// 获取到的诗传给函数 目的:将Verse 1 转换为verse.txt
}


function updateDisplay(verse){
    // 将Verse 1 转换为verse.txt
    verse  = verse.replace(" ", "");// 将空格去掉（Web服务器的文件名无空格）
    verse = verse.toLowerCase();
    let url = verse + '.txt';
    // 开始创建XHR请求 —— AJAX操作中的核心
    let request = new XMLHttpRequest();
    // 指定 用于从网站请求资源的HTTP请求方法 这里是GET方法
    // 指定 想请求资源的网站的URL
    request.open('GET', url);
    // 作为 text.  这并不是绝对必要的 — XHR默认返回文本
    // 如果你想在以后获取其他类型的数据，养成这样的习惯是一个好习惯
    request.responseType = 'text';
    // 当onload 事件触发时（当响应已经返回时）这个事件会被运行
    request.onload = function(){
        poemDisplay.textContent = request.response;
    }
    request.send();
}

// 首次加载也要显示
updateDisplay('Verse 1');
verseChoose.value = 'Verse 1';
```

### 在server端运行例子

> 另外我们使用Fetch API来替换XHR——它是最近在浏览器中引入的，它使异步HTTP请求在JavaScript中更容易实现，对于开发人员和在Fetch之上构建的其他API来说都是如此。

```js
        // 注意 如果只是从本地文件运行示例，
        // 一些浏览器(包括Chrome)将不会运行XHR请求。这是因为安全限制~
        // 为了解决这个问题，我们需要通过在本地web服务器上运行它来测试这个示例
        const verseChoose = document.querySelector('select');
        const poemDisplay = document.querySelector('pre');

        verseChoose.onchange = function(){
            const verse = verseChoose.value;// 获取到的诗 赋给verse变量
            updateDisplay(verse);// 获取到的诗传给函数 
        }


        function updateDisplay(verse){
            // 将Verse 1 转换为verse.txt
            verse  = verse.replace(" ", "");// 将空格去掉（Web服务器的文件名无空格）
            verse = verse.toLowerCase();
            let url = verse + '.txt';
            
            // 开始创建XHR请求 —— AJAX操作中的核心
            // let request = new XMLHttpRequest();
            // request.open('GET', url);
            // request.responseType = 'text';
            // request.onload = function(){
            //     poemDisplay.textContent = request.response;
            // }
            // request.send();

            fetch(url).then(function(response){
              response.text().then(function(text){
                poemDisplay.textContent = text;
              });
            });
        }

        // 首次加载也要显示
        updateDisplay('Verse 1');
        verseChoose.value = 'Verse 1';

```

这里使用 node.js 构建了本地HTTP服务器服务

```js
npm install -g http-server;//安装http-server
// 跳转到网页对应的目录，打开命令行窗口 输入——
http-server
```

之后就可以在服务器端运行html文件，从而执行异步操作了！地址格式类似下面这样——

![在这里插入图片描述](https://img-blog.csdnimg.cn/f478e29a46f24c3c9f09ae4f9917b63c.png)

效果如下

![在这里插入图片描述](https://img-blog.csdnimg.cn/5d222cbed8b84491af4c0d0dceabbcaa.png)

## 小结与心得

对“从服务器获取数据”的形式更加熟悉了~

### 学习了**基本**的Ajax请求

```js
let request = new XMLHttpRequest();
request.open('GET', url);
request.responseType = 'text';
request.onload = function{
    // 请求对应的响应返回时，这个事件会被运行
    poemDisplay.textContent = request.response;
}
request.send();
```

### 学习了Fetch API 

首先我们要清楚 替换掉XHR的Fetch代码的每个步骤的含义

- 将我们要获取的资源的URL传递给它。这相当于现代版的XHR中的【1】`request.open()`,另外，您不需要任何等效的【2】`send()`方法。
- 可以看到`.then()`方法连接到了`fetch()`末尾-这个方法是[`Promises`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)的一部分，是一个用于执行异步操作的现代JavaScript特性
  - `fetch()`返回一个promise，它将解析从服务器发回的响应。我们**使用`then()`来运行一些后续代码**，这是我们在其内部定义的函数。这**相当于XHR版本中的【3】`onload`事件处理程序**。

```js
fetch(url).then(function(response){
    // fetch得到url，返回一个promise，promise解析服务器发挥的响应
    // 利用promise.then()运行后续代码，这个步骤是一环套一环的！
})
```

- 当`fetch()` promise 解析时，这个函数会自动将响应从服务器传递给参数。在函数内部，我们获取响应并运行其`text()`方法。这基本上将响应作为原始文本返回，这相当于在XHR版本中的【4】`responseType = 'text'`。
  - 你会看到 `text()` 也返回了一个 promise, 所以我们连接另外一个 `.then()` 到它上面, 在其中我们**定义了一个函数来接收 `text()` promise解析的生文本**。

```js
fetch(url).then(function(response){
    response.text().then(function(text){
        // 将响应response以text的格式返回，与上面一样，也返回了一个promise
        // 利用promise.then(func)来完成接下来的操作
        	// 我们定义了一个函数来接收text() promise解析的文本
    })
})
```

- 最后，我们在promise的函数内部，我们做的和在XHR版本中差不多~

```js
fetch(url).then(function(response){
    response.text().then(function(text){
		poemDisplay.textContent = text;
    })
})
```

怪不得好多人说Fetch更好用！这样子写雀氏要方便很多！

接下来再看看Promise

### 再来看看promises

> 大多数现代的JavaScript api都是基于promises的

还是用上面例子来对promises进行理解

```js
fetch(url).then(function(response){
    response.text().then(function(text){
		poemDisplay.textContent = text;
    })
})
```

上述内容为一个 promises 函数

我们来分解下这个ES6中被提出的函数

- 【1】`fetch(url)` 获取位于url里的资源
- 【2】`.then(function(){...})` 当promise解析后运行指定的函数
  - 解析：`finish performing the specified operation at some point in the future` 即**在将来某一时刻完成指定的操作**。
    - 本例中，“指定的操作”是：通过HTTP请求从指定的URL（`verse.text`）获取资源，并 return the response for us to do something with~（有时候还是原文更好理解些呐😂！）即，为我们接下来的操作（function中的内容）返回响应（function传入的参数即为这个响应）
    - 另外，细琢磨一下，promise的意思即为“承诺完成某个操作”🧐
  - 实际上，传递给 `then()` 是一段**不会立即执行的代码** — 而是当返回响应时代码会被运行。（异步编程的思想）

上述代码与下面的代码（把promise保存到一个变量里）等效

```js
let myFetch = fetch(url);

myFetch.then(function(response){
    response.text().then(function(text){
        poemDisplay.textContent = text;
    })
})
```



- 因为方法 fetch() 返回一个解析HTTP响应的promise, 你在 .then() 中定义的任何函数会被自动给与一个响应作为一个**参数**。你可以给这个**参数**取任何名字

```js
fetch(url).then(function(dogBiscuits) {
  dogBiscuits.text().then(function(text) {
    poemDisplay.textContent = text;
  });
});
```

当然了~把参数叫做描述其内容的名字更有意义。

- 下面来单独看一下这个与回调函数作用一样的函数~
  - response 对象有个 [`text()`](https://developer.mozilla.org/en-US/docs/Web/API/Body/text)方法, 获取响应主体中的原始数据a并把它转换成纯文本, 那是我们想要的格式。它也返回一个promise (解析结果文本字符串)
  - 所以这里我们【2‘】再使用 [`.then()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then), 在里面我们再定义一个操作文本字符串的函数(为诗歌元素的`textContent`属性赋予text)

```js
function(response) {
  response.text().then(function(text) {
    poemDisplay.textContent = text;
  });
}
```



> 上面解析了一大堆Promise的内容，那他到底强大在哪儿？

简单来说，我们可以直接将promise块 (`.then()`块, 但也有其他类型) 链接到另一个的尾部, 顺着链条将每个块的结果传到下一个块。强大！

相比于大量回调造成的“不断向右”的回调地狱，promise块会向下延展，很清晰~

再来复习下这个简单的Promises例子

```js
// 01 本例写法
fetch(url).then(function(response){
    response.text().then(function(text){
		poemDisplay.textContent = text;
    })
})
// 02 很多开发者喜欢下面的样式
fetch(url).then(function(response){
    return response.text();
}).then(function(text){
    poemDisplay.textContent = text;
})
```

02中的写法更加扁平，且可读性大大增加了，不是嘛😎



### 那么我们应该选择哪种方法呢？Ajax VS Fetch

- IE浏览器表示，我不认识Fetch这玩儿啊

所以如果要保证老版本的兼容，还是要会使用XHR进行数据的请求

- 不用考虑老板浏览器的兼容性？

Fetch很明显更加优秀不是嘛？😄



OVER 🎉
