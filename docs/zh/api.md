---
outline: deep
---

# API



![截图](/images/api.png "api.png")
## 权限 Authorization
可以启用权限，并设置该api的权限`code`,此`code`会传递至上述中间件中，然后进行验证。
## 请求 Request

- ### url参数 Params
  输入类似 /:key 的字符串，会添加一个参数
- ### url查询参数 Query
  可以添加 `string` `number` `int` 或 对应数组 `array`的查询参数
- ### 主体 Body
  先输入 `字段名称`, 然后选择 `输入类型`

## 操作 Action

`action`内的代码，对应 Express 的路由操作.

```ts
router.method("/url", async (req, res) => {
  /** action的代码运行于此 ... */
});
```

显然, 你可使用`req`获取请求数据 ,使用`res`发送响应 
   下列函数会添加至 `res`下，,可在 Settings API 区域中设置 
- `res.success()` 发送成功响应 
- `res.error()`   发送失败响应  

还有很多函数和`npm`包也可在此使用.

- 内部函数 : `auto` (详情见 schema 章节中的描述)
- 内部函数 : `action` (是一个异步(async)函数 )

```ts
    /** SchemaName 要替换成真实的 schema 名称 */
    action.SchemaName.read()   // 读取整个 schema 的数据
    action.SchemaName.save(data:any) //写入替换 schema 的数据

    /** 数组 JSON 可用的方法 */
    action.SchemaName.create(data:any) // 添加单个记录
    action.SchemaName.update(data:any) // 通过主键修改单个记录
    action.SchemaName.del(data:any) // 通过主键删除单个记录
    action.SchemaName.detail(data:any) // 通过主键获取单个记录详情
    action.SchemaName.list(params:{page?: number; limit?: number} ) //获取分页后的列表

    action.SchemaName.batchCreate(data:any[]) // 批量添加
    action.SchemaName.batchUpdate(data:any[]) // 批量修改
    action.SchemaName.batchDel(data:any[]) // 批量删除

```

- 第三方 `npm` 库
  - @faker-js/faker (^8.3.1)
  - dayjs (^1.11.11)
  - mockjs (^1.1.0)
  - jsonwebtoken (^9.0.2)
  - svg-captcha ("^1.4.0")
  ```ts
  // 创建验证码图片
  const captcha = svgCaptcha.create({
    // ignoreChars:'abcdefghijklmnopqrstuvwxyz',
    charPreset: "0123456789",
    size: 4,
    noise: 3,
    color: true,
    background: "#f5f5f5",
  });
  res.json({ img: captcha.data });
  ```

## 响应 Response

目前 ,此处的数据解构仅有展示作用，后续会添加生成 ts 调用的功能 .
