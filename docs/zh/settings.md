---
outline: deep
---

# 设置 Settings

## API 代理 API Agent

### 何时会转发

- 启用 API 代理
- 该 API 未定义，或被禁用

### 转发至

```ts
targetUrl + apiUrl;
```

### 使用场景

仅需模拟部分 api 时。如在 soon-mock 中添加新功能 api 的模拟，其他 api 则转发至测试服务器。

## URL 前缀 (Url Prefix)

全局 api 前缀

## Mock

定义基本数据的默认 mock 方法

## Schema

这里主要是一些新增 schema 时的默认配置项。

### 主键 Primary Keys

这里是可能的主键 key 值，当通过 json 生成 schema 时，会依次匹配设置 schema 的主键字段

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

权限函数是 Express 的一个中间件，会在启用权限的 API 前运行

```ts
(auth_code) => (req, res, next) => {
  const token = req.headers.authorization
  if (token) {
    jwt.verify(token, 'JWT_SECRET', async (err, user) => {
      if (err)  return res.sendStatus(403)
      const { username } = user
      if (auth_code) {
        //** 可在这里写下你的自定义逻辑，比如该用户的role关联的权限是否拥有该 `auth_code` */
      }
      req.username = username
      next()
    })
  } else {
    res.sendStatus(401)
  }

```

- 如果你使用 `jwt`权限，中间件代码正如上方列子。
- 登录 API 中，`action`获取`token`的逻辑如下

```ts
res.success({ token: jwt.sign({ username: "admin" }, "JWT_SECRET") });
```

- 也可以用自定义的虚拟验证逻辑替换。
