> 只用于学习不做其他任何用途

> [Git 官网]()

> [参考地址](https://dzone.com/articles/top-20-git-commands-with-examples)

### 常用的 git 命令

- [git config](#config)

- [git init](#init)

- [git clone](#clone)

- [git add](#add)

- [git commit](#commit)

- [git diff](#diff)

- [git reset](#reset)

- [git status](#status)

- [git rm](#rm)

- [git log](#log)

- [git show](#show)

- [git tag](#tag)

- [git branch](#branch)

- [git checkout](#checkout)

- [git merge](#merge)

- [git push](#push)

- [git pull](#pull)

- [git stash](#stash)

- [git fetch](#fetch)

#### config

> 全局  配置 `git` 提交的  用户名以及邮箱

```vim
git config -global user.name "[name]"

git config -global user.email "[email address]"
```

#### init

> 创建一个新的 `git` 仓库

```vim
git init [repository name]
```

#### clone

> 从远程仓库克隆到本地

```vim
git clone [url]
```

#### add

> 将文件提交到暂存区域

```vim
git add [fileName]

git add * # 将所有修改文件提交到暂存区域
```

#### commit

> 生成本地快照,版本历史记录

```vim
git commit -m 'type in the commit message'

git commit -a # 此命令使用 git add 命令提交添加的所有文件, 并提交自此以后更改的所有文件
```

#### diff

> 查看当前修改文件与暂存区域文件的对比

```vim
git diff

git diff -staged # 查看最后一次版本的暂存区域文件对比

git diff [first branch] [second branch] # 查看文件两个分支的差异
```

#### reset

```vim
git reset [file] # 取消暂存文件, 但保留文件内容

git reset [commit] # c核销提交后的所有提交记录

git reset -hard [commit] # 丢弃所有历史记录 并回退至指定版本
```

#### status

```vim
git status # 查看所有修改文件
```

#### rm

```vim
git rm [file] # 从工作目录中删除该文件的 git 记录
```

#### log

```vim
git log # 列出当前分支的版本历史记录

git log -follow[file] # 列出文件的历史记录 包括重命名
```

#### show

```vim
git show [commit] # 显示指定提交的元数据和内容更改
```

#### tag

```vim
git tag [commit ID] # 指定的提交提供标记,就是所谓的版本
```

#### branch

```vim
git branch # 列出所有本地的分支

git branch [branch name] # 创建一个本地分支

git branch - d [branch name] # 删除本地分支

git branch -D [branch name] # 强制删除本地分支

git branch -a # 列出所有远程分支
```

#### checkout

```vim
git checkout [branch name] # 切换分支

git checkout -b [branch name] # 创建一个本地分支并切换
```

#### merge

```vim
git merge [branch name] # 将指定分支的提交记录合并到当前分支
```

#### remote

```vim
git remote add [variable name] [Remote server link ] # 将本地分支推送到远程服务
```

#### push

```vim
git push [variable name] master # 将 master分支的提交推送到远程存储库

git push [variable name] branch # 将本地分支推送到远程存储库

git push -all [variable name] # 推送所有本地分支到远程存储库

git push [variable name] :[branch name] # 删除远程分支
```

#### pull

```vim
git pull [repository link] # 将远程分支的记录合并到本地, 拉取代码

git pull origin [branch name] # 将远程指定分支的代码更新至本地当前分支
```

#### stash

```vim
git stash save # 临时存储所有已修改的跟踪文件

git stash pop # 恢复最近隐藏的文件

git stash list # 列出所有存储的更改

git stash drop # 丢弃最近隐藏的变更集
```

#### fetch

```vim
git fetch # 获取远程新创建分支
```
