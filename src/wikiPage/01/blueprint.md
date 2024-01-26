---
title: 蓝图仓库的使用
category: 教程
icon: server
---
## 蓝图仓库使用方法

> 蓝图仓库已集成Git与自动更新脚本，无需任何基础也可以正常使用

### 第一次下载

1. 在电脑上打开github上的蓝图仓库主页: [DSPBluePrints/FactoryBluePrints](https://github.com/DSPBluePrints/FactoryBluePrints)
2. 从这个页面->[**Releases**](https://github.com/DSPBluePrints/FactoryBluePrints/releases)<-，下载最新的蓝图包，文件名应该叫 `FactoryBluePrints_X.Y.Z.rar`，请**不要**从绿色的Code处下载，那样文件不！完！整！
3. 解压后，像其他普通的蓝图包一样，连同文件夹一起放入游戏的默认蓝图文件夹。放进去以后应该是这样：`C:\Users\%USERNAME%\Documents\Dyson Sphere Program\Blueprint\FactoryBluePrints\README.md`。
4. **第一次使用必须先更新，不然此时没有任何蓝图。**

### 更新

1. 只需双击即可：`update.bat`

---

## 常见问题

> **Q: 为什么我打不开蓝图仓库主页 / 下载特别慢 / 更新特别慢？**

> A: 通常是网络问题。蓝图仓库被托管在github上，可以通过在[Watt Toolkit](https://steampp.net)(原名steam++)中开启github加速服务解决。~~或者魔法？~~

> **Q: 警告：您似乎安装到了错误的路径，这可能导致文件权限异常**

> A: 通常是用户解压后，全选文件放入Blueprint，而不是连同文件夹一起放入Blueprint。蓝图仓库不依赖绝对路径，但是这并不代表在任意路径下git都有读写文件的权限，而在部分电脑上git无权访问Blueprint根目录。

---

## 协议

1. 如果蓝图作者对自己的蓝图发布使用协议，则自从使用协议发布起，对相关蓝图使用蓝图作者发布的使用协议。
2. 若无特殊声明，蓝图仓库内的一切蓝图及其他文件使用默认协议：**知识共享 署名-非商业性使用-相同方式共享 4.0 国际(CC BY-NC-SA 4.0)**。
