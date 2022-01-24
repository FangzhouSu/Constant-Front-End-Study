

# `TodoMVC-by-gitflow`

## TODO
- [ ] less|sass
- [ ] css更熟练 能用css解决 就不要写逻辑！
```less
@primary-color: red

div {
  color: @primary-color;

  p { 
    font-size: 40px;
  }
}
```

## design
- Model
  * state todolist
  * functions
    * selectAll
    * changeName
    * changeStatus
    * deleteItem
    * clearCompleted
- TodoItem
  * props:  { id, name, isActive }
  
    
  * emit: 
  *   onNameChange 
  *   onStatus
  *   onDeleted
- Footer
  * leftNumber: int
  
    
  * onChangeStatus(status)
  * onClearCompleted





# 分支管理 `Gitflow`工作流

> 一个功能一个分支，写完了一个功能就提pr 提完pr就删除分支~
>
> 技术指导：[`my-git/git-workflow-tutorial.md at master · xirong/my-git (github.com)`](https://github.com/xirong/my-git/blob/master/git-workflow-tutorial.md#236-示例)
>
> [`Hello World – React (reactjs.org)`](https://zh-hans.reactjs.org/docs/hello-world.html)

![image-20220114184351013](https://gitee.com/su-fangzhou/blog-image/raw/master/202201141843069.png)

首先a与b协作完成ReactJS实现`todoMVC`（Hooks还不是很熟噻！）

【1】先创建一个develop分支

> 精神分裂式开发模式开启！

[![img](https://github.com/xirong/my-git/raw/master/images/git-workflow-release-cycle-5createdev.png)](https://github.com/xirong/my-git/blob/master/images/git-workflow-release-cycle-5createdev.png)

第一步为`master`分支配套一个`develop`分支。简单来做可以[本地创建一个空的`develop`分支](https://www.atlassian.com/git/tutorial/git-branches#!branch)，`push`到服务器上：

```bash
git branch develop
git push -u origin develop
```

以后这个分支将会包含了项目的全部历史，而`master`分支将只包含了部分历史。其它开发者这时应该[克隆中央仓库](https://www.atlassian.com/git/tutorial/git-basics#!clone)，建好`develop`分支的跟踪分支：

```
git clone ssh://user@host/path/to/repo.git
git checkout -b develop origin/develop
```

现在每个开发都有了这些历史分支的本地拷贝。

【2】a创建一个功能分支负责写一下CSS，初始化一下项目，

```
git checkout -b some-feature develop

git status
git add <some-file>
git commit
```



写完之后推到develop中 然后删除功能分支

> 疑问：所以功能分支的作用就是好细分功能么？我直接在develop上开发不行吗，是因为版本看起来太乱么😢

![image-20220114184343296](https://gitee.com/su-fangzhou/blog-image/raw/master/202201141844593.png)

> 1/19更 注意develop上面的版本应该是一个稳定可运行的版本，功能分支推给develop分支的版本应该较完善才对！

```
git pull origin develop
git checkout develop
git merge some-feature
git push
git branch -d some-feature
```

【3】b也基于develop创建一个功能分支，进行`todolist`核心功能的开发~与【2】的流程同理

这是我们本次demo的重点

> 疑问：那再来一拨人开发不太相干的内容是否需要再搞一个develop2出来呢？

【4】进行发布 涉及到release层

等两边分别开发得差不多了就整一个release

```
git checkout -b release-0.1 develop
```

这个分支是清理发布、执行所有测试、更新文档和其它为下个发布做准备操作的地方，像是一个专门用于改善发布的功能分支。

【5】完成发布 将修改合并到main分支

```
git checkout main
git merge release-0.1
git push
git checkout develop
git merge release-0.1
git push
git branch -d release-0.1
```

【6】特殊情况——修改之前版本的问题

```
git checkout -b issue-#001 main
# Fix the bug
git checkout main
git merge issue-#001
git push
```

就像发布分支，维护分支中新加这些重要修改需要包含到`develop`分支中，所以要再在develop执行一个合并操作。然后就可以安全地[删除这个分支](https://www.atlassian.com/git/tutorial/git-branches#!branch)了：

```bash
git checkout develop
git merge issue-#001
git push
git branch -d issue-#001
```
