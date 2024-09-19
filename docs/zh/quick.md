---
outline: deep
---

# Quick

仅需输入`json`,便可批量生成 API。

![截图](/images/quick.png "quick.png")

- 输入如下`JSON` / `JS` ， `user`, `book` 为 schema 的名称 .

```ts
 {
    user:{
      name:'',
      age:1,
      job:''
    },
    book:{
      author:'',
      name:'',
      price:1
    }
  }

```

- 点击`批量生成 ` 按钮 , 当显示成功提醒后，则下列 API 生成成功
  | HTTP 方法 | API 地址 | 描述 |
  | ------ | ------------- | --------------- |
  | get | /api/user | 获取 user 列表 |
  | get | /api/user/:id | 获取 user 详情 |
  | post | /api/user | 添加 user |
  | put | /api/user/:id | 修改 user|
  | delete | /api/user/:id | 删除 user |
  | get | /api/book | 获取 book 列表 |
  | get | /api/book/:id | 获取 book 详情 |
  | post | /api/book | 添加 book |
  | put | /api/book/:id | 修改 book |
  | delete | /api/book/:id | 删除 book |
