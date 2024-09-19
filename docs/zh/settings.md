---
outline: deep
---

# 设置 Settings

## API 代理 API Agent

在设置、并启用代理后，当客户端请求一个被禁用的 api 或者在 soon-mock 中没有定义，则会转发此请求至代理的服务端。
当仅仅模拟部分 api 时，此设置会非常有效。如：在 soon-mock 中添加新功能的模拟 api,已有功能转发至测试服务器。

url 的拼接方式如下:

```ts
agentUrl + apiUrl;
```

##  URL前缀 (Url Prefix)

全局api前缀

## Mock

定义基本数据的默认mock方法

## Schema

These as settings when a new schema is added , it should be like.

### 主键 Primary Keys

这里是可能的主键key值，当通过json生成schema时，会依次匹配设置schema的主键字段

### res.success

全局的成功响应方法

```ts
(data) => res.json({ code: 0, msg: "", data });
```

### res.error

全局的失败响应方法

```ts
(err) => res.json({ code: 500, err: err });
```

### 权限
权限函数是Express的一个中间件，会在启用权限的API前运行
```ts
(code) => (req, res, next) => {
  const token = req.headers.authorization
  if (token) {
    jwt.verify(token, 'JWT_SECRET', async (err, user) => {
      if (err)  return res.sendStatus(403)    
      const { username } = user
      if (code) {
        //** 可在这里写下你的自定义逻辑，比如该用户的role关联的权限是否拥有该 `code` */
      }
      req.username = username
      next()
    })
  } else {
    res.sendStatus(401)
  }

```
- 如果你使用 `jwt`权限，中间件代码正如上方列子。
- 登录API中，`action`获取`token`的逻辑如下
```ts
res.success({token:jwt.sign({username:"admin"},"JWT_SECRET")})
```
- 也可以用自定义的虚拟验证逻辑替换。

- Or you could write a total fake verification logic to replace it .
