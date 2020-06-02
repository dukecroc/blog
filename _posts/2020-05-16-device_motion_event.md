---
layout: post
title:  "DeviceMotionEvent.requestPermission 在各瀏覽器上的 typeof 回傳數值"
date:   2020-05-16 16:48:18 +0800
categories: js
tag: js ios motion
---

### 為啥會用到這鬼東西：

iOS 13+ 以後的版在使用 DeviceMotionEvent 動作感測器（陀螺儀、加速度）前，需要以使用者操作行為（如：click event）取得使用者的許可（跳出 iOS dailog -> 點擊「允許」）之後才能啟用，而 parallax.js 這個視差效果套件就是依靠手機上的 DeviceMotionEvent 動作感測器去製造視差效果的。

reference: https://dev.to/li/how-to-requestpermission-for-devicemotion-and-deviceorientation-events-in-ios-13-46g2

<!--more-->
<br>

### typeof DeviceMotionEvent.requestPermission 的回傳值

macOS Catalina v10.15.4 / Chrome 版本 81.0.4044.138 (正式版本) (64 位元):

```javascript
alert(typeof DeviceMotionEvent.requestPermission); // undefined
```



macOS Catalina v10.15.4 / Firefox 76.0.1（64 位元）:

```javascript
alert(typeof DeviceMotionEvent.requestPermission); // undefined
```



macOS Catalina v10.15.4 / Safari 版本13.1（15609.1.20.111.8）:

```javascript
alert(typeof DeviceMotionEvent.requestPermission); 
// 主控台報錯：ReferenceError: Can't find variable: DeviceMotionEvent
```



iPhone 11 / iOS 13.4.1 / Safari 版本13.1:

```javascript
alert(typeof DeviceMotionEvent.requestPermission); // function
```


<br>


### 只測 typeof DeviceMotionEvent 的回傳值

macOS Catalina v10.15.4 / Chrome 版本 81.0.4044.138 (正式版本) (64 位元):

```javascript
alert(typeof DeviceMotionEvent.requestPermission); // function
```



macOS Catalina v10.15.4 / Firefox 76.0.1（64 位元）:

```javascript
alert(typeof DeviceMotionEvent.requestPermission); // function
```



macOS Catalina v10.15.4 / Safari 版本13.1（15609.1.20.111.8）:

```javascript
alert(typeof DeviceMotionEvent.requestPermission); // undefined
```



iPhone 11 / iOS 13.4.1 / Safari 版本13.1:

```javascript
alert(typeof DeviceMotionEvent.requestPermission); // function
```
