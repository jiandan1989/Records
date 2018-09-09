---
sidebar: auto
---

::: tip
常用的终端命令

[参考地址:](https://github.com/0nn0/terminal-mac-cheatsheet)
:::

## 快捷键

```bash
Ctrl + A      # 光标移动至行首
Ctrl + E      # 光标移动至行尾
Ctrl + Q      # 清空当前行的所有内容
Ctrl + L      # 清屏
Command + K   # 清屏
Ctrl + U      # 删除光标签的所有文字, 如果光标在行尾 则删除整行
Ctrl + K      # 删除光标之后的所有文字
Ctrl + W      # 删除光标之前的所有文字
Ctrl + Y      # 粘贴最后一个剪切命令剪切的内容
Ctrl + H      # 与退格键相同
Ctrl + C      # 终止当前执行
Ctrl + D      # 退出当前 shell
Ctrl + Z      # 将执行中的任何东西放入后台进程, fg 可以将其恢复
Ctrl + _      # 撤销上一个命令
Ctrl + T      # 将光标签的两个文字进行互换
Ctrl + F      # 将光标向前移动一个字符
Ctrl + B      # 向后移动一个字符
Ctrl + R      # 检索使用过的命令
Option + →    # 光标向前移动一个单词
Option + ←    # 光标向后移动一个单词
Esc + T       # 将光标签的两个单词互换
Tab           # 自动补全文件或文件夹的名称
```

## 核心命令

```bash
cd                # HOME 目录
cd [folder]       # 切换目录
cd ~              # HOME目录, 如 cd ~/folder/
cd /              # 根目录
ls                # 文件列表
ls -l             # 文件详细列表
ls -a             # 列出隐藏文件
ls -lh            # 文件详细列表中的文件大小以更友好的形式列出
ls -R             # 递归显示文件夹中的内容
sudo [command]    # 超级用户身份执行命令
open [file]       # 打开文件
top               # 显示运行中的进程, 按 q 终止
nano [file]       # 打开编辑
pico [file]       # 打开编辑
clear             # 清空屏幕的内容
reset             # 重置终端显示
```

## 命令历史

```bash
history n     # 列出最近执行过的 n 条命令
ctrl-r        # 检索之前执行过的命令
![value]      # 检索最近以 value 开始的命令
![value]:p    # 打印最后一个以 value 开头的命令
!!            # 执行最近执行过的命令
!!:p          # 打印最后一条执行过的命令
```

## 文件管理

```bash
touch [file]              # 创建新文件
pwd                       # 显示当前工作目录
..                        # 上级目录
.                         # 当前目录
cat                       # 连接
rm [file]                 # 移除文件
rm -i [file]              # 移除时显示确认提示
rm -r [dir]               # 移除文件以及内容
rm -f [file]              # 强制移除
cp [file] [newfile]       # 复制文件
cp [file] [dir]           # 复制文件到指定目录
mv [file] [new filename]  # 移动 / 重命名
pbcopy < [file]           # 拷贝文件内容到剪贴板
pbpaste                   # 粘贴拷贝的内容
pbpaste > [file]          # 将剪贴板中的内容粘贴到指定文件中
```

## 目录管理

```bash
mkdir [dir]           # 创建新目录
mkdir -p [dir]/[dir]  # 创建子目录
rmdir[dir]            # 移除目录(仅限目录下没有内容)
rm -R [dir]           # 移除目录以及内容
less [file]           # 按照屏幕大小输出内容
[command] > [file]    # 将内容输出到指定文件, 将会覆盖文件
[command] >> [file]   # 在指定文件的末尾附加内容
[command] < [file]    # 从文件中读取内容
more                  # 当前窗口大小输出内容
```

## 搜索

```bash
find [dir] -name [search_pattern]     # 搜索指定文件夹中的文件
grep [search_pattern] [file]          # 搜索包含该模式的所有行
grep -r [search_pattern] [dir]        # 递归搜索指定目录中的所有匹配文件
grep -v [search_pattern] [file]       # 搜索不包含该模式的所有行
grep -i [search_pattern] [file]       # 搜索包含不区分大小写的所有行
mdfind [search_pattern]               # 搜索文件内容
mdfind -onlyin [dir] -name [pattern]  # 搜索指定文件夹中的文件名为 pattern 的文件
```

## 帮助

```bash
[command] -h            # 显示帮助信息
[command] --help        # 显示帮助信息
info [command]          # 显示帮助信息
[command] help          # 显示帮助信息
reset                   # 重置当前终端
man [command]           # 显示指定命令的帮助信息
whatis [command]        # 显示指定命令的简述
apropos[serach_pattern] # 在描述中搜索带有关键字的内容
```

## vi 命令

```bash
vi [file]       # 有文件则打开, 无则先创建再打开
:q              # 退出
:w              # 保存
:wq             # 保存后退出
:q!             # 不保存
:set nu         # 显示行号
:set nonu       # 隐藏行号
ESC             # 退出编辑模式
dd              # 删除一行
[n]dd           # 删除光标下的 n 行
p               # 粘贴
yy              # 复制
[n]yy           # 复制 n 行
u               # 撤销上一次操作
ctrl + r        # 恢复操作
gg              # 定位到第一行
shift + g       # 定位到最后一行
num shift + g   # 定位到指定行
```

<i-back-top></i-back-top>
