> 2021/10/13

[掘金文章链接](https://juejin.cn/post/7018820402679906340/)

## demo要求: 一个动态的购物单

> 适合刚学习完DOM编程的小伙伴进行练手

来自MDN的项目 在Web-API DOM编程中的一章

>  我们要做一个简单的购物单的例子，使用表单的输入框和按钮动态的向购物单中添加购物项。在输入中添加项，然后按下按钮：
>
> - 购物项应该出现在清单中。
> - 每个购物项都应该给出一个按钮，可以按下按钮从清单中删除该项。
> - 输入框应该是空白的并已聚焦，为你准备好输入另一个项。
>
> 完成后的演示程序看起来有点像这样的:
>
> ![img](https://mdn.mozillademos.org/files/14563/shopping-list.png)
>
> 要完成实验，要按照下面的步骤，确保购物单的行为如上所述。



<hr>



## [官方提示](https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents#%E4%B8%BB%E5%8A%A8%E5%AD%A6%E4%B9%A0_%E4%B8%80%E4%B8%AA%E5%8A%A8%E6%80%81%E7%9A%84%E8%B4%AD%E7%89%A9%E5%8D%95)



## 完成步骤

代码中注释已经很详细了，不再过多阐述了。

核心JS代码如下：

```js
// 本部分内容变量的命名规范性是向MDN学习的 大家放心看~
// 01 创建三个变量来保存本例中的三个主要元素
// 输入框
// 增添元素按钮
// 要生成的列表
const input = document.querySelector('input');
const button = document.querySelector('button');
const list = document.querySelector('ul');
// 02 创建一个函数 来响应按钮点击事件
button.onclick = function(){
    // 设置元素记录输入框中的内容，初始值为空
    let myItem = input.value;
    input.value = '';
    // 03 通过点击按钮触发事件生成的元素
    // 列表元素 listItem
    // listItem中包含的内容 & （删除）按钮
    let listItem = document.createElement('li');
    let listText = document.createElement('span');
    let listBtn = document.createElement('button');
    // 04 将列表内容与按钮加入到listItem中 组成一个列表元素
    listItem.appendChild(listText);
    listText.textContent = myItem;// 设置内容的文本为“从输入框获取的内容”
    listItem.appendChild(listBtn);
    listBtn.textContent = "Delete";// 设置按钮的文本
    // 05 将列表的一项加入总列表中
    list.appendChild(listItem);
    // 06 为删除按钮绑定事件处理程序
    listBtn.onclick = function(e){
        // 点击按钮时，删除其所在的整个listItem元素（也就是列表项）
        list.removeChild(listItem);
    }
    // 07 点击完一次按钮之后，重新聚焦于输入框
    input.focus();
}
```

## 小结与心得

本demo帮助我们学习并巩固了DOM编程中的一些重要知识点，

- `document.querySelector()` —— 获取节点
- `document.createElement('li')` —— 创建一个元素
- `listItem.appendChild(listText)` —— 将`listText`设为`listItem`的子节点

为元素绑定事件，在对其进行操作时触发事件函数

- `buttn.onclick = function()`

获取指定节点的文本内容——

- `listText.textContent`

获取input元素的内容使用

- `input.value`

最后需要注意本例中使用的变量名称都比较规范，建议大家学习~



OVER🎉