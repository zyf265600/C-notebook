# Python Introduction

## 1 Python 教程

这是小白的 Python 新手教程，具有如下特点：

Python 是一种计算机程序设计语言。你可能已经听说过很多种流行的编程语言，比如非常难学的 C 语言，非常流行的 Java 语言，适合初学者的 Basic 语言，适合网页编程的 JavaScript 语言等等。

那 Python 是一种什么语言？

首先，我们普及一下编程语言的基础知识。用任何编程语言来开发程序，都是为了让计算机干活，比如下载一个 MP3，编写一个文档等等，而计算机干活的 CPU 只认识机器指令，所以，尽管不同的编程语言差异极大，最后都得 “翻译” 成 CPU 可以执行的机器指令。而不同的编程语言，干同一个活，编写的代码量，差距也很大。

比如，完成同一个任务，C 语言要写 1000 行代码，Java 只需要写 100 行，而 Python 可能只要 20 行。

所以 Python 是一种相当高级的语言。

你也许会问，代码少还不好？代码少的代价是运行速度慢，C 程序运行 1 秒钟，Java 程序可能需要 2 秒，而 Python 程序可能就需要 10 秒。

那是不是越低级的程序越难学，越高级的程序越简单？表面上来说，是的，但是，在非常高的抽象计算中，高级的 Python 程序设计也是非常难学的，所以，高级程序语言不等于简单。

但是，对于初学者和完成普通任务，Python 语言是非常简单易用的。连 Google 都在大规模使用 Python，你就不用担心学了会没用。

用 Python 可以做什么？可以做日常任务，比如自动备份你的 MP3；可以做网站，很多著名的网站包括 YouTube 就是 Python 写的；可以做网络游戏的后台，很多在线游戏的后台都是 Python 开发的。总之就是能干很多很多事啦。

Python 当然也有不能干的事情，比如写操作系统，这个只能用 C 语言写；写手机应用，只能用 Swift/Objective-C（针对 iPhone）和 Java（针对 Android）；写 3D 游戏，最好用 C 或 C++。

如果你是小白用户，满足以下条件：

*   会使用电脑，但从来没写过程序；
*   还记得初中数学学的方程式和一点点代数知识；
*   想从编程小白变成专业的软件架构师；
*   每天能抽出半个小时学习。

不要再犹豫了，这个教程就是为你准备的！

准备好了吗？

![](\fig\9229153429258240.png)

### 关于作者

[廖雪峰](http://weibo.com/liaoxuefeng)，十年软件开发经验，业余产品经理，精通 Java/Python/Ruby/Scheme/Objective C 等，对开源框架有深入研究，著有《Spring 2.0 核心技术与最佳实践》一书，多个业余开源项目托管在 [GitHub](https://github.com/michaelliao)，欢迎微博交流：

使用窄屏手机的童鞋，请点击左上角 “目录” 查看教程：

![](\fig\1311543585144897l.png)



## 2 Python 简介

Python 是著名的 “龟叔”Guido van Rossum 在 1989 年圣诞节期间，为了打发无聊的圣诞节而编写的一个编程语言。

现在，全世界差不多有 600 多种编程语言，但流行的编程语言也就那么 20 来种。如果你听说过 TIOBE 排行榜，你就能知道编程语言的大致流行程度。这是最近 10 年最常用的 10 种编程语言的变化图：

![](\fig\9212153960043840.png)

总的来说，这几种编程语言各有千秋。C 语言是可以用来编写操作系统的贴近硬件的语言，所以，C 语言适合开发那些追求运行速度、充分发挥硬件性能的程序。而 Python 是用来编写应用程序的高级编程语言。

当你用一种语言开始作真正的软件开发时，你除了编写代码外，还需要很多基本的已经写好的现成的东西，来帮助你加快开发进度。比如说，要编写一个电子邮件客户端，如果先从最底层开始编写网络协议相关的代码，那估计一年半载也开发不出来。高级编程语言通常都会提供一个比较完善的基础代码库，让你能直接调用，比如，针对电子邮件协议的 SMTP 库，针对桌面环境的 GUI 库，在这些已有的代码库的基础上开发，一个电子邮件客户端几天就能开发出来。

Python 就为我们提供了非常完善的基础代码库，覆盖了网络、文件、GUI、数据库、文本等大量内容，被形象地称作 “内置电池（batteries included）”。用 Python 开发，许多功能不必从零编写，直接使用现成的即可。

除了内置的库外，Python 还有大量的第三方库，也就是别人开发的，供你直接使用的东西。当然，如果你开发的代码通过很好的封装，也可以作为第三方库给别人使用。

许多大型网站就是用 Python 开发的，例如 YouTube、[Instagram](http://instagram.com/)，还有国内的[豆瓣](http://www.douban.com/)。很多大公司，包括 Google、Yahoo 等，甚至 [NASA](http://www.nasa.gov/)（美国航空航天局）都大量地使用 Python。

龟叔给 Python 的定位是 “优雅”、“明确”、“简单”，所以 Python 程序看上去总是简单易懂，初学者学 Python，不但入门容易，而且将来深入下去，可以编写那些非常非常复杂的程序。

总的来说，Python 的哲学就是简单优雅，尽量写容易看明白的代码，尽量写少的代码。如果一个资深程序员向你炫耀他写的晦涩难懂、动不动就几万行的代码，你可以尽情地嘲笑他。

那 Python 适合开发哪些类型的应用呢？

首选是网络应用，包括网站、后台服务等等；

其次是许多日常需要的小工具，包括系统管理员需要的脚本任务等等；

另外就是把其他语言开发的程序再包装起来，方便使用。

最后说说 Python 的缺点。

任何编程语言都有缺点，Python 也不例外。优点说过了，那 Python 有哪些缺点呢？

第一个缺点就是运行速度慢，和 C 程序相比非常慢，因为 Python 是解释型语言，你的代码在执行时会一行一行地翻译成 CPU 能理解的机器码，这个翻译过程非常耗时，所以很慢。而 C 程序是运行前直接编译成 CPU 能执行的机器码，所以非常快。

但是大量的应用程序不需要这么快的运行速度，因为用户根本感觉不出来。例如开发一个下载 MP3 的网络应用程序，C 程序的运行时间需要 0.001 秒，而 Python 程序的运行时间需要 0.1 秒，慢了 100 倍，但由于网络更慢，需要等待 1 秒，你想，用户能感觉到 1.001 秒和 1.1 秒的区别吗？这就好比 F1 赛车和普通的出租车在北京三环路上行驶的道理一样，虽然 F1 赛车理论时速高达 400 公里，但由于三环路堵车的时速只有 20 公里，因此，作为乘客，你感觉的时速永远是 20 公里。

![](\fig\9230247568328960.png)

第二个缺点就是代码不能加密。如果要发布你的 Python 程序，实际上就是发布源代码，这一点跟 C 语言不同，C 语言不用发布源代码，只需要把编译后的机器码（也就是你在 Windows 上常见的 xxx.exe 文件）发布出去。要从机器码反推出 C 代码是不可能的，所以，凡是编译型的语言，都没有这个问题，而解释型的语言，则必须把源码发布出去。

这个缺点仅限于你要编写的软件需要卖给别人挣钱的时候。好消息是目前的互联网时代，靠卖软件授权的商业模式越来越少了，靠网站和移动应用卖服务的模式越来越多了，后一种模式不需要把源码给别人。

再说了，现在如火如荼的开源运动和互联网自由开放的精神是一致的，互联网上有无数非常优秀的像 Linux 一样的开源代码，我们千万不要高估自己写的代码真的有非常大的 “商业价值”。那些大公司的代码不愿意开放的更重要的原因是代码写得太烂了，一旦开源，就没人敢用他们的产品了。

![](\fig\9230254446989120.png)

当然，Python 还有其他若干小缺点，请自行忽略，就不一一列举了。



## 3 安装 Python

因为 Python 是跨平台的，它可以运行在 Windows、Mac 和各种 Linux/Unix 系统上。在 Windows 上写 Python 程序，放到 Linux 上也是能够运行的。

要开始学习 Python 编程，首先就得把 Python 安装到你的电脑里。安装后，你会得到 Python 解释器（就是负责运行 Python 程序的），一个命令行交互环境，还有一个简单的集成开发环境。

### 安装 Python 3.8

目前，Python 有两个版本，一个是 2.x 版，一个是 3.x 版，这两个版本是不兼容的。由于 3.x 版越来越普及，我们的教程将以最新的 Python 3.8 版本为基础。请确保你的电脑上安装的 Python 版本是最新的 3.8.x，这样，你才能无痛学习这个教程。

### 在 Mac 上安装 Python

如果你正在使用 Mac，系统是 OS X>=10.9，那么系统自带的 Python 版本是 2.7。要安装最新的 Python 3.8，有两个方法：

方法一：从 Python 官网下载 Python 3.8 的[安装程序](https://www.python.org/downloads/)，下载后双击运行并安装；

方法二：如果安装了 [Homebrew](https://brew.sh/)，直接通过命令`brew install python3`安装即可。

### 在 Linux 上安装 Python

如果你正在使用 Linux，那我可以假定你有 Linux 系统管理经验，自行安装 Python 3 应该没有问题，否则，请换回 Windows 系统。

对于大量的目前仍在使用 Windows 的同学，如果短期内没有打算换 Mac，就可以继续阅读以下内容。

### 在 Windows 上安装 Python

首先，根据你的 Windows 版本（64 位还是 32 位）从 Python 的官方网站下载 Python 3.8 对应的 [64 位安装程序](https://www.python.org/ftp/python/3.8.0/python-3.8.0-amd64.exe)或 [32 位安装程序](https://www.python.org/ftp/python/3.8.0/python-3.8.0.exe)，然后，运行下载的 exe 安装包：

![](\fig\1048401552601344l.png)

特别要注意勾上`Add Python 3.8 to PATH`，然后点 “Install Now” 即可完成安装。

### 运行 Python

安装成功后，打开命令提示符窗口，敲入 python 后，会出现两种情况：

情况一：

```
┌────────────────────────────────────────────────────────┐
│Command Prompt                                    - □ x │
├────────────────────────────────────────────────────────┤
│Microsoft Windows [Version 10.0.0]                      │
│(c) 2015 Microsoft Corporation. All rights reserved.    │
│                                                        │
│C:\> python                                             │
│Python 3.8.x ...                                        │
│[MSC v... 64 bit (AMD64)] on win32                      │
│Type "help", "copyright", "credits" or "license" for mor│
│information.                                            │
│>>> _                                                   │
│                                                        │
│                                                        │
└────────────────────────────────────────────────────────┘
```

看到上面的画面，就说明 Python 安装成功！

你看到提示符`>>>`就表示我们已经在 Python 交互式环境中了，可以输入任何 Python 代码，回车后会立刻得到执行结果。现在，输入`exit()`并回车，就可以退出 Python 交互式环境（直接关掉命令行窗口也可以）。

情况二：得到一个错误：

```
┌────────────────────────────────────────────────────────┐
│Command Prompt                                    - □ x │
├────────────────────────────────────────────────────────┤
│Microsoft Windows [Version 10.0.0]                      │
│(c) 2015 Microsoft Corporation. All rights reserved.    │
│                                                        │
│C:\> python                                             │
│'python' is not recognized as an internal or external co│
│mmand, operable program or batch file.                  │
│                                                        │
│C:\> _                                                  │
│                                                        │
│                                                        │
│                                                        │
└────────────────────────────────────────────────────────┘
```

这是因为 Windows 会根据一个`Path`的环境变量设定的路径去查找`python.exe`，如果没找到，就会报错。如果在安装时漏掉了勾选`Add Python 3.8 to PATH`，那就要手动把`python.exe`所在的路径添加到 Path 中。

如果你不知道怎么修改环境变量，建议把 Python 安装程序重新运行一遍，务必记得勾上`Add Python 3.8 to PATH`。

### 小结

学会如何把 Python 安装到计算机中，并且熟练打开和退出 Python 交互式环境。

在 Windows 上运行 Python 时，请先启动命令行，然后运行`python`。

在 Mac 和 Linux 上运行 Python 时，请打开终端，然后运行`python3`。





## 4 Python 解释器

当我们编写 Python 代码时，我们得到的是一个包含 Python 代码的以`.py`为扩展名的文本文件。要运行代码，就需要 Python 解释器去执行`.py`文件。

由于整个 Python 语言从规范到解释器都是开源的，所以理论上，只要水平够高，任何人都可以编写 Python 解释器来执行 Python 代码（当然难度很大）。事实上，确实存在多种 Python 解释器。

### CPython

当我们从 [Python 官方网站](https://www.python.org/)下载并安装好 Python 3.x 后，我们就直接获得了一个官方版本的解释器：CPython。这个解释器是用 C 语言开发的，所以叫 CPython。在命令行下运行`python`就是启动 CPython 解释器。

CPython 是使用最广的 Python 解释器。教程的所有代码也都在 CPython 下执行。

### IPython

IPython 是基于 CPython 之上的一个交互式解释器，也就是说，IPython 只是在交互方式上有所增强，但是执行 Python 代码的功能和 CPython 是完全一样的。好比很多国产浏览器虽然外观不同，但内核其实都是调用了 IE。

CPython 用`>>>`作为提示符，而 IPython 用`In [序号]:`作为提示符。

### PyPy

PyPy 是另一个 Python 解释器，它的目标是执行速度。PyPy 采用 [JIT 技术](http://en.wikipedia.org/wiki/Just-in-time_compilation)，对 Python 代码进行动态编译（注意不是解释），所以可以显著提高 Python 代码的执行速度。

绝大部分 Python 代码都可以在 PyPy 下运行，但是 PyPy 和 CPython 有一些是不同的，这就导致相同的 Python 代码在两种解释器下执行可能会有不同的结果。如果你的代码要放到 PyPy 下执行，就需要了解 [PyPy 和 CPython 的不同点](http://pypy.readthedocs.org/en/latest/cpython_differences.html)。

### Jython

Jython 是运行在 Java 平台上的 Python 解释器，可以直接把 Python 代码编译成 Java 字节码执行。

### IronPython

IronPython 和 Jython 类似，只不过 IronPython 是运行在微软. Net 平台上的 Python 解释器，可以直接把 Python 代码编译成. Net 的字节码。

### 小结

Python 的解释器很多，但使用最广泛的还是 CPython。如果要和 Java 或. Net 平台交互，最好的办法不是用 Jython 或 IronPython，而是通过网络调用来交互，确保各程序之间的独立性。

本教程的所有代码只确保在 CPython 3.x 版本下运行。请务必在本地安装 CPython（也就是从 Python 官方网站下载的安装程序）。