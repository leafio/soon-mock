---
outline: deep
---

# Schema

有2种类型的数据 (Data),Json键值对 (Json Object) `{}` , Json数组 (Json Array) `[]`.
当生成api时，会根据不同的类型，生成不同的api

![截图](/images/schema.png "schema.png")

## 模型字段

- 字段名称
- 数据类型
  - 基本 : `string` `int` `number` `boolean` `object`
  - 引用 : 引用其他的`schema`，或其他`schema`的某个字段`field`
  - 由Json生成 : 根据json生成一个 `object` 的字段
- 默认值 : 当添加数据时，对应的字段`field`没有值，则运行该处代码，生成默认值
- 模拟数据 :当批量添加模拟数据时，运行该处代码，填充对应字段值
- 描述: 一些备注信息

#### `默认值`与`模拟数据`

可定义单行 js 代码

- 内部函数 : `auto`

```ts
auto.intId();
// 自动增加 , 如 1 , 2 , 3 ...
auto.uuid();
// 生成一个新的 uuid

// auto. stringId(prefix: string = '', length?: number)
auto.stringId("soon-", 4);
// 自动增加 , 如 'soon-0001','soon-0002' , ...
```

- 第三方`npm`库
  - @faker-js/faker (^8.3.1)
  - dayjs (^1.11.11)
  - mockjs (^1.1.0)

```ts
/**faker */
// 可使用任意语言版本 , 如 fakerFR , fakerAR ...
faker.number.int();
// 简体中文版
fakerZH_CN.person.jobTitle();

/**dayjs */
dayjs().format("YYYY-MM-DD");

/**mockjs */
mockjs.Random.url("http");
```
