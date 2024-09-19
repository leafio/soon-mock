---
outline: deep
---

# 快速开始

## 安装 & 启动

- 添加soon-mock至项目的 dev dependencies

```bash
yarn add soon-mock -D
```

- 添加一个script 至 `package.json` , `-p` 可以配置 端口

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

## 添加 API
请阅读下一节 `Quick` 进行操作 .
