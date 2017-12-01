# 领克CX11车机webapp开发指南

*本文档旨在帮助领克CX11车机webapp的开发人员快速上手。如有问题请联系 yutian@ecarx.com.cn、 zhijietang@ecarx.com.cn、jiajiaqin@ecarx.com.cn*

----
### 开发工具准备：
#
* #### 安装虚拟机（VirtualBox）
  * 下载地址：https://www.virtualbox.org/wiki/Downloads
  * 安装提示：
    * 下载对应版本 
    * 安装后需要开启电脑 **允许虚拟模式** 的功能
    * 搭配SDK作为车机模拟器，用作前期开发调试工具
    * windows用户 **请勿** 安装在C盘
#
* #### 安装Leopard SDK
  * 下载地址：http://auto.developer.lge.com/geely/SDK-Download/
  * 安装提示：
    * 选择最新的版本
    * 需要下载 **Installer** 和 **Package** ，*请下载对应版本*
    * windows用户 **请勿** 安装在C盘
    * 安装过程中如无安装 **java**，会提示安装，此时取消安装，根据本文档下面一点
    * 安装后会得到 **Emulator** 和 **CLI**
#

* #### 安装java
  * 下载地址：https://www.java.com/zh_CN/
  * 安装提示：
    * *windows安装后需要配置环境变量*
#

### 开发文档指南（以v1.0.0为例）：
#
* ##### Leopard SDK简介：http://auto.developer.lge.com/discover/overview/v1_0_0 

* ##### 开发步骤：http://auto.developer.lge.com/geely/Web-App-Development-Guide/v1_0_0/Getting-Started/
  * 名词解释：
    * CLI ： 命令行工具
    * Installer ： 开发SDK安装工具
    * Emulator ： 开发调试工具 => 车机模拟器
    * Web API Reference ： api文档，包括车机功能接口、web接口

* ##### 命令行工具：http://auto.developer.lge.com/geely/Web-App-Development-Guide/v1_0_0/CLI/ares-generate/
  * 用来操作车机模拟器，以下常用操作：
    * ares-package ： 将代码打包成车机webapp
    * ares-install ： 将webapp安装到车机模拟器或从车机模拟器卸载应用
    * ares-inspect ： 设置调试

* ##### 模拟器Emulator使用方式：http://auto.developer.lge.com/geely/Web-App-Development-Guide/v1_0_0/Emulator-User-Guide/

* ##### 创建webapp的步骤：http://auto.developer.lge.com/geely/Web-App-Development-Guide/v1_0_0/Developing-an-App/test-lg-article-default/

* ##### webapp应用打包时的入口文件设置：http://auto.developer.lge.com/geely/Web-App-Development-Guide/v1_0_0/App-Metadata/ 

* ##### 支持的媒体类型：http://auto.developer.lge.com/geely/Web-App-Development-Guide/v1_0_0/Supported-Media-Formats/

#
### API文档简介（以v1.2.0为例）：
#
* ##### 车机功能接口Leopard Web API ：http://auto.developer.lge.com/geely/Web-API-Reference/v1_2_0/Leopard-Web-API/
  * 接口功能使用需要先在 **package.json** 注册，请见 *webapp应用打包时的入口文件设置*
  * 接口调试，请见 *模拟器Emulator使用方式*
  * 接口作用简介：
    * App Store ： 应用中心操作
    * Authentication ： 账户验证
    * Car Config : 车辆配置参数
    * DIM ： 仪表盘的媒体区域操作
    * Driving Notifier ： 驾驶通知
    * Fullscreen ： 全屏显示
    * Geolocation ： 地理位置信息
    * Go Home Screen ： 回到主屏幕
    * Intents ： 应用被第三方应用调起
    * Key Event ： 车载按键，包括方向盘按键
    * Language ： 车机语言
    * Lifecycle ： 应用生命周期
    * Logging ： 日志
    * Messaging Service ： 接收/发送消息
    * Network Information ： 网络
    * Notification ： 系统提示框
    * Power Manager ： 电池
    * Profile ： 当前用户信息
    * Status Bar ： 车机显示屏状态栏，可显示当前应用
    * Theme ： 车机主题，包括黑白模式、高亮颜色
    * TTS ： 车载语音
    * Vehicle ： 车辆信息
    * Version ： 版本
    * Web Storage ： web存储
* ##### HTML API && CSS API ：http://auto.developer.lge.com/geely/Web-API-Reference/v1_2_0/standard-web-api/
