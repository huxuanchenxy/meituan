### node js

### 介绍
美团买菜 到货商品 监听 工具🔧

当有 到货商品时，通知消息到手机（只支持 ios）

### 注意点

1、通过抓包获取美团买菜的 api 后，将curl 转化为 node request 形式的接口后，header 和 form 里的参数需要根据自己的app 里的进行修改

2、barkId 要使用自己的，否则接受不到推送消息，bark 应用请后台常驻

