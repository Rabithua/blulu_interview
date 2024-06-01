# 项目结构概述

```
- openapi   # Backend API specs
- client    # Client codes

```

# Client 技术栈
```
Typescript + React + React Router 
```


# 实现下述功能, 组件库和页面样式自定

设计并实现一个登录功能

具体功能点为：
1. 用户在登录页面输入邮箱，提交后邮箱将收到一个 sign in link, link 的 query code 将携带authorization token。
2. 用户点击 link 后，则成功登录到网站， authorization code 将携带至后续接口请求的Header中。 e.g.  Header['Authorization'] = 'abc'
3. 前端保存登录状态 7 天



参考地址： http://39.105.188.185:8080/

BE 接口文档:
* [HTML PREVIEW](./openapi/build/index.html)
* [OPEN API SPEC](./openapi/openapi.yml)
  * 使用 typescript-fetch 模板生成的代码 [api-clien](./client/src/api-client) （可用可不用）



