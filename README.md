[English](#soon-mock) | [中文](#soon-mock-1)

# soon-mock

**a mock server can add apis in seconds with web UI**

> Mock as Real Server so Soon

### [Official Document](https://leafio.github.io/soon-mock)

### Full Example

soon-admin  
vue3 version：https://github.com/leafio/soon-admin-vue3  
react version：https://github.com/leafio/soon-admin-react-nextjs

### Installation/Getting Started

- Add it to your project dev dependencies using NPM:

```bash
npm i -D soon-mock
```

- Add a script to `package.json`,-p can config the server port:

```json
{
  "scripts": {
    "mock": "soon-mock -p 8080"
  }
}
```

- To start the server by simply running a command in the project folder.

```bash
npm run mock
```

- When the server started, you can just access `http://localhost:8080` in your browser.

### Batch Generate APIs

1. Switch to `Quick` Tab

2. Input `JSON` / `JS` like this
   `user`, `book` are the schema name , just like table in database.

```js
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

3. Click the button `Batch Generate`.If a success toast is shown, the APIs has been generated.

| Method | Url           | Description     |
| ------ | ------------- | --------------- |
| get    | /api/user     | list users      |
| get    | /api/user/:id | get user detail |
| post   | /api/user     | add user        |
| put    | /api/user/:id | update user     |
| delete | /api/user/:id | delete user     |
| get    | /api/book     | list books      |
| get    | /api/book/:id | get book detail |
| post   | /api/book     | add book        |
| put    | /api/book/:id | update book     |
| delete | /api/book/:id | delete book     |

4. Switch to `API` Tab, all APIs are shown, and can be edited.  
   In the action , the code is run in a Express server controller.  
   You can use `req` to get the request data, and use `res` to send the response.  
   Details usage you can read Express js Documentation.

5. Switch to `Schema` Tab, you can modify the schema fields.  
   In the `Default Value` and `Mock Data` Input , you can write Single line js code.  
   The `faker` ,`mockjs` and `dayjs` are ready for use to create the mock data or value.

6. Switch to `Data` Tab, the mock datas are listed.

7. Switch to `Config` Tab, these are some default settings.   
<br/>


[English](#soon-mock) | [中文](#soon-mock-1)

# soon-mock

一个有GUI的的mock服务器

> 一键模拟真实服务器

### [完整文档](https://leafio.github.io/soon-mock/zh/)

### 完整示例

soon-admin 后台管理系统  
vue3 版：https://github.com/leafio/soon-admin-vue3  
react 版：https://github.com/leafio/soon-admin-react-nextjs


### 安装 & 启动

- 添加 soon-mock 至项目的 dev dependencies

```bash
yarn add soon-mock -D
```

- 添加一个 script 至 `package.json` , `-p` 可以配置 端口

```json
{
  "scripts": {
    "mock": "soon-mock -p 8080"
  }
}
```

- 启动 soon-mock 服务

```bash
yarn mock
```

- 当服务启动后, 可在浏览器中访问网址 `http://localhost:8080`
# 批量生成API

仅需输入`json`,便可批量生成 API。

![截图](https://raw.githubusercontent.com/leafio/soon-mock/main/docs/public/images/quick.png "quick.png")

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