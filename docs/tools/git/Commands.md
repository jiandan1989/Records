---
sidebar: auto
---

::: tip
只用于学习不做其他任何用途

- [Git 官网]()
- [参考地址](https://dzone.com/articles/top-20-git-commands-with-examples)
  :::

## git config

```bash
# 用户名
git config -global user.name "[name]"
# 邮箱
git config -global user.email "[email address]"
```

## git init

```bash
# 创建一个新的 git 仓库
git init [repository name]
```

## git clone

```bash
# 克隆远程仓库
git clone [url]
```

## git add

```bash
# 提交指定文件到暂存区域
git add [fileName]

# 将所有修改文件提交到暂存区域
git add *
```

## git commit

> 生成本地快照,版本历史记录

```bash
git commit -m 'type in the commit message'

# 此命令使用 git add 命令提交添加的所有文件, 并提交自此以后更改的所有文件
git commit -a
```

## git diff

> 查看当前修改文件与暂存区域文件的对比

```bash
git diff
# 查看最后一次版本的暂存区域文件对比
git diff -staged

# 查看文件两个分支的差异
git diff [first branch] [second branch]
```

## git reset

```bash
# 取消暂存文件, 但保留文件内容
git reset [file]

# 撤销提交后的所有提交记录
git reset [commit]

# 丢弃所有历史记录 并回退至指定版本
git reset -hard [commit]
```

## git status

```bash
 # 查看所有修改文件
git status
```

## git rm

```bash
 # 从工作目录中删除该文件的 git 记录
git rm [file]
```

## git log

```bash
 # 列出当前分支的版本历史记录
git log
# 列出文件的历史记录 包括重命名
git log -follow[file]
```

## git show

```bash
# 显示指定提交的元数据和内容更改
git show [commit]
```

## git tag

```bash
 # 指定的提交提供标记,就是所谓的版本
git tag [commit ID]
```

## git branch

```bash
# 列出所有本地的分支
git branch

# 创建一个本地分支
git branch [branch name]

# 删除本地分支
git branch - d [branch name]

# 强制删除本地分支
git branch -D [branch name]

# 列出所有远程分支
git branch -a
```

## git checkout

```bash
# 切换分支
git checkout [branch name]

# 创建一个本地分支并切换
git checkout -b [branch name]
```

## git merge

```bash
# 将指定分支的提交记录合并到当前分支
git merge [branch name]
```

## git push

```bash
# 将 master分支的提交推送到远程存储库
git push [variable name] master

# 将本地分支推送到远程存储库
git push [variable name] branch

# 推送所有本地分支到远程存储库
git push -all [variable name]

# 删除远程分支
git push [variable name] :[branch name]
```

## git pull

```bash
# 将远程分支的记录合并到本地, 拉取代码
git pull [repository link]

# 将远程指定分支的代码更新至本地当前分支
git pull origin [branch name]
```

## git stash

```bash
# 临时存储所有已修改的跟踪文件
git stash save

git stash pop # 恢复最近隐藏的文件

git stash list # 列出所有存储的更改

git stash drop # 丢弃最近隐藏的变更集
```

## git fetch

```bash
# 获取远程新创建分支
git fetch
```

## git remote

```bash
# 将本地分支推送到远程服务
git remote add [variable name] [Remote server link ]
```
