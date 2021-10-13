> 21/10/13

## 学习Ajax请求

> 适合准备学习Ajax的小伙伴用于入门数据的收发（使用.txt文件作为加数据库）

[基本的Ajax请求](https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/Client-side_web_APIs/Fetching_data#基本的ajax请求)

让我们看看使用[`XMLHttpRequest`](https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest) 和 [Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)如何处理请求.

### 从本地文件运行示例

> 因为安全限制，所以如果从本地文件运行实例时，一些浏览器将不会运行XHR请求~
>
> 之后我们需要通过在本地服务器上运行它来测试这个示例

我们将从几个不同的文本文件中请求数据，并使用它们来填充内容区域。

这一系列文件将作为我们的假数据库; 在真正的应用程序中，我们更可能使用服务器端语言（如PHP，Python或Node）从数据库请求我们的数据。 不过，本例中我们要保持简单，并专注于客户端部分。





## [官方提示](https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/Client-side_web_APIs/Fetching_data#xmlhttprequest)

在这个例子中，我们将通过XHR在下拉菜单中选择一首诗，并加载另一首诗



<hr>

## 完成步骤

### 基本的Ajax请求

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

> 待续

## 小结与心得

对“从服务器获取数据”的形式更加熟悉了~

学习了**基本**的Ajax请求

```js
let request = new XMLHttpRequest();
request.open('GET', url);
request.responseType = 'text';
request.onload = function{
    // 请求对应的响应返回时，这个事件会被运行
}
request.send();
```

