---
outline: deep
---

# API 权限
## 设置 API 区域
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

## API 权限 选项
可以启用权限，并设置该api的权限`code`,此`code`会传递至上述中间件中，然后进行验证。