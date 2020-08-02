---
title: "Boost your productivity with these command-line tools"
type: post
date: 2020-08-02
excerpt: In this article, I will demonstrate the command-line tools that I use most often. I can almost promise you that you will learn something new.
url: command-line-tools
canonical: true
shareImage: "https://res.cloudinary.com/developerdavo/image/upload/f_auto,w_1200/v1596374778/learnitmyway/laura-ockel-UQ2Fw_9oApU-unsplash_gcxa3g.jpg"
twitterLink: "https://twitter.com/learnitmyway/status/1289923503303479296?s=20"
extraContent:
  - {url: "https://learnitmyway.com/2017/09/02/learn-how-to-improve-with-these-resources/", 
  title: "Learn how to improve with these resources"}
  - {url: "https://www.learnitmyway.com/2016/11/11/learning-material-software-development/", 
  title: "Learning material - software development", extras: "(starting with Intro to CS)"}
---

In this article, I will demonstrate the command-line tools that I use most often. I can almost promise you that you will learn something new.

<!--more-->
<!-- og:description -->

![gears](https://res.cloudinary.com/developerdavo/image/upload/f_auto,w_1000/v1596374778/learnitmyway/laura-ockel-UQ2Fw_9oApU-unsplash_gcxa3g.jpg)
|:--:|
| *Photo by Laura Ockel on [Unsplash](https://unsplash.com/photos/UQ2Fw_9oApU)* |

## Prerequisites

- You know how to use the command-line
- You are using Mac OS. (Not all tools exist on Windows or Linux, but the same concepts and most of the tools should still apply.)

## iterm2

I use [iterm2](https://www.iterm2.com/) instead of the standard terminal on Mac OS. I have never really used the standard terminal app because iterm2 has a wider feature set and is much easier on the eyes (especially if you use solarized-light!)

**Bonus tip**: Did you know you can load and save your settings to a folder? This can be found in `Preferences -> General`. I save and load from a file that is checked into version control.

## oh-my-zsh

1. Set up [oh-my-zsh](https://github.com/ohmyzsh/ohmyzsh) with a script from <https://github.com/robbyrussell/oh-my-zsh>
1. Choose your theme (I just use the standard one)
1. Add your favourite [plugins](https://github.com/ohmyzsh/ohmyzsh/wiki/Plugins)

Check out the [wiki](https://github.com/ohmyzsh/ohmyzsh/wiki) for more information.

### Plugins

The plugins that I use are:

- colored-man-pages: makes it easier to read `man` pages
- fasd: file navigation (more on this [later](#fasd))
- git: git aliases

### Features

#### git aliases

- `ga='git add'`
- `gst='git status'`
- `gup='git pull --rebase'`

#### Navigation

- `..='cd ..'`
- `...=../..`

#### Up arrow completion

1. `cd`
1. Pressing the up-arrow key might show `cd dev`, which is the last time `cd` was used.
1. Pressing the up-arrow key again might show `cd src`, which is the second last time `cd` was used.
1. Pressing the down-arrow key will show `cd dev`, which is the last time `cd` was used.

#### `cd` tab completion
  
1. `cd` `space` `tab` shows a list of possible directories to change to. For example: `node_modules/   public/   src/`
2. Pressing tab again will allow you to navigate through the list

## Homebrew

Set up [Homebrew](https://brew.sh/) with a script from <https://brew.sh/>

Homebrew can be used to install almost anything. Here are some commands I use most often:

#### brew install

Install almost any package with `brew install <package>`

- `brew install node`
- `brew install git`

#### brew cask install

Install almost any application with `brew cask install <application>`

- `brew cask install dropbox`
- `brew cask install spotify`

#### brew bundle

1. `brew bundle dump --force` copies all your packages and casks into a `Brewfile`
2. `brew bundle` installs packages and casks from a `Brewfile`

**Bonus tip**: Check the `Brewfile` into version control! Next time you get a new computer all you have to do is install Homebrew and then type `brew bundle`.

#### brew upgrade

Update all your packages and casks at once with `brew upgrade`.

## fasd

[fasd](https://github.com/clvv/fasd) can be set up as follows:

1. Install [fasd](https://github.com/clvv/fasd) with `brew install fasd`
1. Add [oh-my-zsh plugin](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/fasd).

[fasd](https://github.com/clvv/fasd) has one job (for me) and that is to navigate to recently visited directories. Let's say I want to navigate to a directory I have previously visited like `~/dev/misc/terraform/terraform-serverless-example`. Instead of typing out the whole path I just type `z terra ex` and I'm already there!

## Version managers

If you need to switch between multiple versions of a programming language it's easier to use version managers. Node has [nvm](https://github.com/nvm-sh/nvm), Python has [pyenv](https://github.com/pyenv/pyenv), Ruby has [rbenv](https://github.com/rbenv/rbenv) and Java has [jenv](https://www.jenv.be/). 

Switching between multiple versions is not the only benefit. If you are working on a team and using Node you could check an `.nvmrc` file into version control and every developer can apply the same version with `nvm use`.

## File links

With file links you can tell your terminal where to look for certain files. For example with:

```shell
ln -s ~/dev/dotfiles/gitconfig ~/.gitconfig
```

you tell your terminal that your git config is actually stored at `~/dev/dotfiles/gitconfig`. If you need to view or edit the file you can open the file from `~/dev/dotfiles/gitconfig` or `~/.gitconfig`. 

**Bonus tip 1**: You can store all your configuration files in version control and link to them on your machine. I do this for my `.gitcongfig`, `.zshrc` and `.vimrc`.

**Bonus tip 2**: If you have different git configurations for different projects you can add the following to your `gitconfig`:

```shell
[includeIf "gitdir:~/dev/work/"]
  path = ~/dev/work/gitconfig
```

**Bonus tip 3**: If you don't want to check-in sensitive data (eg. environment variables) from your `.zshrc` into version control you can source a local file with:

```shell
source ~/.zshrc-local
```

## bat and exa

[bat](https://github.com/sharkdp/bat) is a replacement for `cat` but with syntax highlighting. [exa](https://github.com/ogham/exa) is a replacement for `ls` but with color coding and sensible defaults.

Check out [7 Awesome Rust-powered Command-line Utilities](https://towardsdatascience.com/awesome-rust-powered-command-line-utilities-b5359c38692) for similar tools.

## Final thoughts

Learning each of these tools has levelled up my productivity and I hope it has the same effect on you. After mastering these tools you might want to start tackling vim :D.
