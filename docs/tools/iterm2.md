---
sidebar: auto
---

::: tip
oh-my-zsh + iterm2 配置
:::

## 地址

- [oh-my-zsh](https://github.com/robbyrussell/oh-my-zsh)
- [iterm2](https://iterm2.com/)

## 操作

- 查看当前 `shell: echo $SHELL`
- 安装 `oh-my-zsh` `cd $HOME` 用户下 `~/.oh-my-zsh/`
- 切换 zsh `chsh -s /bin/zsh`
- 编辑 `vi ~/.zshrc nano .zshrc`
- 修改主题 `ZSH_THEME="robbyrussell"` 也可以修改为 `random` 随机,每次打开都不一样
- 添加插件 `plugins=(git autojump)`[github](https://github.com/wting/autojump)
  - 安装`brew install autojump`
    `[[ -s $(brew --prefix)/etc/profile.d/autojump.sh ]] && . $(brew --prefix)/etc/profile.d/autojump.sh` `source ~/.zshrc` 生效 [参考地址](https://www.barretlee.com/blog/2015/03/30/autojump-in-mac/)
  - 语法高亮 [zsh-syntax-highlighting](https://github.com/zsh-users/zsh-syntax-highlighting/blob/master/INSTALL.md)

```bash
# 指定 zsh 主题
ZSH_THEME="robbyrussell"

# 是否自动更新
DISABLE_AUTO_UPDATE="true"
```

- 如果已存在 `~/.zshrc` 备份现有文件 `cp ~/.zshrc ~/.zshrc.orig` 创建新的 zsh 配置文件 `cp ~/.oh-my-zsh/templates/zshrc.zsh-template ~/.zshrc`

[参考地址](https://xiaozhou.net/learn-the-command-line-iterm-and-zsh-2017-06-23.html)

## 快捷键

- `command + enter` 全屏

## config

```bash
# Path to your oh-my-zsh installation.

export ZSH=/Users/Timothy/.oh-my-zsh
# Set name of the theme to load.
# Look in ~/.oh-my-zsh/themes/
# Optionally, if you set this to "random", it'll load a random theme each
# time that oh-my-zsh is loaded.

# 指定主题
ZSH_THEME="lambda-mod"

# Uncomment the following line to use case-sensitive completion.
# CASE_SENSITIVE="true"

# Uncomment the following line to use hyphen-insensitive completion. Case
# sensitive completion must be off. _ and - will be interchangeable.
# HYPHEN_INSENSITIVE="true"

# Uncomment the following line to disable bi-weekly auto-update checks.
# DISABLE_AUTO_UPDATE="true"

# Uncomment the following line to change how often to auto-update (in days).
# export UPDATE_ZSH_DAYS=13

# Uncomment the following line to disable colors in ls.
# DISABLE_LS_COLORS="true"

# Uncomment the following line to disable auto-setting terminal title.
# DISABLE_AUTO_TITLE="true"

# Uncomment the following line to enable command auto-correction.
# ENABLE_CORRECTION="true"

# Uncomment the following line to display red dots whilst waiting for completion.
# COMPLETION_WAITING_DOTS="true"

# Uncomment the following line if you want to disable marking untracked files
# under VCS as dirty. This makes repository status check for large repositories
# much, much faster.
# DISABLE_UNTRACKED_FILES_DIRTY="true"

# Uncomment the following line if you want to change the command execution time
# stamp shown in the history command output.
# The optional three formats: "mm/dd/yyyy"|"dd.mm.yyyy"|"yyyy-mm-dd"
# HIST_STAMPS="mm/dd/yyyy"

# Would you like to use another custom folder than $ZSH/custom?
# ZSH_CUSTOM=/path/to/new-custom-folder

# Which plugins would you like to load? (plugins can be found in ~/.oh-my-zsh/plugins/*)
# Custom plugins may be added to ~/.oh-my-zsh/custom/plugins/
# Example format: plugins=(rails git textmate ruby lighthouse)
# Add wisely, as too many plugins slow down shell startup.
plugins=(autojump sublime web-search zsh-autosuggestions extract)

# User configuration

export PATH="/usr/local/Cellar/mysql/5.7.13/bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:/Users/Timothy/.rvm/bin:/Users/Timothy/workspace/bin:/usr/local/Cellar/go/1.10.2/bin"
# export MANPATH="/usr/local/man:$MANPATH"

source $ZSH/oh-my-zsh.sh

# You may need to manually set your language environment
export LC_ALL=en_US.UTF-8  
export LANG=en_US.UTF-8


unset GEM_HOME
[[ -s $(brew --prefix)/etc/profile.d/autojump.sh ]] && . $(brew --prefix)/etc/profile.d/autojump.sh

export RSENSE_HOME=$HOME/.emacs.d/rsense-0.3
export DYLD_LIBRARY_PATH=/usr/local/opt/mysql/lib:$DYLD_LIBRARY_PATH
export EDITOR="/usr/local/bin/nvim"
export VISUAL="/usr/local/bin/nvim"

#ENV parameters for golang
export GOPATH=$HOME/workspace
export GOBIN=$HOME/workspace/bin
export GOROOT=/usr/local/Cellar/go/1.10.2/libexec
export PATH=$PATH:$GOPATH/bin:/usr/local/Cellar/go/1.10.2/bin:~/.mix:/usr/local/share/dotnet

#Env configuration for anaconda
export PATH=$PATH:~/anaconda/bin

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion

eval "$(thefuck --alias)"
alias mysql='/usr/local/opt/mysql/bin/mysql'
alias mysqladmin='/usr/local/opt/mysql/bin/mysqladmin'

alias code="/Applications/Visual\ Studio\ Code.app/Contents/Resources/app/bin/code"
alias vi="nvim"
alias vim="nvim"
alias tmux="tmux -2"
alias ssh="ssh -X"
alias s="ssh -X"
alias md="mkdir -p"
alias rd="rmdir"
alias df="df -h"
alias mv="mv -i"
alias slink="link -s"
alias l="ls -l"
alias la="ls -a"
alias ll="ls -la"
alias lt="ls -lhtrF"
alias l.="ls -lhtrdF .*"
alias grep="grep --color=auto"
alias cd..="cd .."
alias cd...="cd ../.."
alias cd....="cd ../../.."
alias ..="cd .."
alias ...="cd ../.."
alias ....="cd ../../.."
alias zb="cat /dev/urandom | hexdump -C | grep --color=auto \"ca fe\""
alias mtr="/usr/local/bin/mtr"
alias gs="git status"
alias gsm="git summary"
alias ga='git add'
alias gd='git diff'
alias gf='git fetch'
alias grv='git remote -v'
alias grb='git rebase'
alias gbr='git branch'
alias gpl="git pull"
alias gps="git push"
alias gco="git checkout"
alias gl="git log"
alias gc="git commit -m"
alias gm="git merge"
alias pro="proxychains4"
alias gb="go build"

#For docker
alias dm="docker-machine"
alias di="docker images"
alias dps="docker ps"
alias dsp="docker stop"
alias ds="docker start"
alias dl="docker logs --tail=50"
alias drm="docker rm"
alias drmi="docker rmi $(docker images --filter "dangling=true" -q --no-trunc)"
alias kc="kubectl"


alias -s go=vi
alias -s html=vi
alias -s rb=vi
alias -s py=vi
alias -s txt=vi
alias -s ex=vi
alias -s exs=vi
alias -s js=vi
alias -s json=vi

# alias for proxy
alias proxy="export ALL_PROXY=socks5://127.0.0.1:7070"
alias unproxy="unset ALL_PROXY"
alias ip="curl https://haoip.cn/"

# custom functions
function jubi() {
	while :; do curl https://www.jubi.com/api/v1/ticker?coin=$1 2>/dev/null | jq -C; sleep 3; done
}

# Preferred editor for local and remote sessions
# if [[ -n $SSH_CONNECTION ]]; then
#   export EDITOR='vim'
# else
#   export EDITOR='mvim'
# fi

# Compilation flags
# export ARCHFLAGS="-arch x86_64"

# ssh
# export SSH_KEY_PATH="~/.ssh/dsa_id"

# Set personal aliases, overriding those provided by oh-my-zsh libs,
# plugins, and themes. Aliases can be placed here, though oh-my-zsh
# users are encouraged to define aliases within the ZSH_CUSTOM folder.
# For a full list of active aliases, run `alias`.
#
# Example aliases
# alias zshconfig="mate ~/.zshrc"
# alias ohmyzsh="mate ~/.oh-my-zsh"

export PATH="$PATH:$HOME/.rvm/bin" # Add RVM to PATH for scripting

_COLUMNS=$(tput cols)
_MESSAGE=" FBI Warining "
y=$(( ( $_COLUMNS - ${#_MESSAGE} )  / 2 ))
spaces=$(printf "%-${y}s" " ")

echo " "
echo -e "${spaces}\033[41;37;5m FBI WARNING \033[0m"
echo " "
_COLUMNS=$(tput cols)
_MESSAGE="Ferderal Law provides severe civil and criminal penalties for"
y=$(( ( $_COLUMNS - ${#_MESSAGE} )  / 2 ))
spaces=$(printf "%-${y}s" " ")
echo -e "${spaces}${_MESSAGE}"

_COLUMNS=$(tput cols)
_MESSAGE="the unauthorized reproduction, distribution, or exhibition of"
y=$(( ( $_COLUMNS - ${#_MESSAGE} )  / 2 ))
spaces=$(printf "%-${y}s" " ")
echo -e "${spaces}${_MESSAGE}"

_COLUMNS=$(tput cols)
_MESSAGE="copyrighted motion pictures (Title 17, United States Code,"
y=$(( ( $_COLUMNS - ${#_MESSAGE} )  / 2 ))
spaces=$(printf "%-${y}s" " ")
echo -e "${spaces}${_MESSAGE}"

_COLUMNS=$(tput cols)
_MESSAGE="Sections 501 and 508). The Federal Bureau of Investigation"
y=$(( ( $_COLUMNS - ${#_MESSAGE} )  / 2 ))
spaces=$(printf "%-${y}s" " ")
echo -e "${spaces}${_MESSAGE}"

_COLUMNS=$(tput cols)
_MESSAGE="investigates allegations of criminal copyright infringement"
y=$(( ( $_COLUMNS - ${#_MESSAGE} )  / 2 ))
spaces=$(printf "%-${y}s" " ")
echo -e "${spaces}${_MESSAGE}"

_COLUMNS=$(tput cols)
_MESSAGE="(Title 17, United States Code, Section 506)."
y=$(( ( $_COLUMNS - ${#_MESSAGE} )  / 2 ))
spaces=$(printf "%-${y}s" " ")
echo -e "${spaces}${_MESSAGE}"
echo " "

# Load zsh-syntax-highlighting.
source ~/.oh-my-zsh/plugins/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh
#
# Load zsh-autosuggestions.
source ~/.oh-my-zsh/plugins/zsh-autosuggestions/zsh-autosuggestions.zsh
#

# Enable autosuggestions automatically.
ZSH_AUTOSUGGEST_HIGHLIGHT_STYLE="fg=10"

[ -f ~/.fzf.zsh ] && source ~/.fzf.zsh
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
```

<i-back-top></i-back-top>
