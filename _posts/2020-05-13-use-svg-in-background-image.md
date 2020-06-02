---
layout: post
title:  "[SVG] 在 CSS background-image 屬性中直接使用 SVG code"
date:   2020-05-13 17:48:18 +0800
categories: css
tag: css svg background-image
---

如果想要直接在 CSS background-image 的 url 屬性中直接插入 SVG 圖檔的原始碼，常用於在 `:hover` 狀態時只是想改變 SVG 的顏色時，可以如以下這般寫法：

```SCSS
// Original Usage
.btn-fb {
    background-image: url('../img/icon_facebook_white.svg');
}
.btn-fb:hover {
    background-image: url('../img/icon_facebook_blue.svg');
}

// SVG Code in 'url()' Usage
.btn-fb {
    background-image: url('data:image/svg+xml;utf8,<svg width="80px" height="80px" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><g id="icon_facebook_xs" fill="%23FFFFFF"><path d="M42.1840614,59 L42.1840614,42.5725383 L47.7383238,42.5725383 L48.5730685,36.1867417 L42.1519558,36.1867417 L42.1519558,32.0998319 C42.1519558,30.2479509 42.6656448,28.9069336 45.3625121,28.9069336 L48.829913,28.9069336 L48.829913,23.2555036 C47.1768717,23.0824325 45.5157248,22.9971674 43.8535507,23.0000718 C38.9413994,23.0000718 35.5863681,25.9854317 35.5863681,31.4612522 L35.5863681,36.2505997 L30,36.2505997 L30,42.6363963 L35.5542625,42.6363963 L35.5542625,59 L42.1840614,59 Z"></path></g></svg>');
}

.btn-fb:hover {
    background-image: url('data:image/svg+xml;utf8,<svg width="80px" height="80px" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><g id="icon_facebook_xs" fill="%233B5998"><path d="M42.1840614,59 L42.1840614,42.5725383 L47.7383238,42.5725383 L48.5730685,36.1867417 L42.1519558,36.1867417 L42.1519558,32.0998319 C42.1519558,30.2479509 42.6656448,28.9069336 45.3625121,28.9069336 L48.829913,28.9069336 L48.829913,23.2555036 C47.1768717,23.0824325 45.5157248,22.9971674 43.8535507,23.0000718 C38.9413994,23.0000718 35.5863681,25.9854317 35.5863681,31.4612522 L35.5863681,36.2505997 L30,36.2505997 L30,42.6363963 L35.5542625,42.6363963 L35.5542625,59 L42.1840614,59 Z"></path></g></svg>');
}
```

#### 需要特別注意的一個細節：

顏色 HEX Code 的「＃」號在 `url()` 當中必須轉換成「%23」才能被正確讀取，例：

##### HTML 中的原始寫法:
````html
<svg fill="#ffffff" ...></svg>
````

#### 在 CSS background-image 中的寫法:
````SCSS
background-image: url('data:image/svg+xml;utf8,<svg fill="%23ffffff" ...></svg>');
````

#### Reference:
[https://stackoverflow.com/questions/13367868/modify-svg-fill-color-when-being-served-as-background-image](https://stackoverflow.com/questions/13367868/modify-svg-fill-color-when-being-served-as-background-image)