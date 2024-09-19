---
outline: deep
---

# Quick

Batch add APIs by simply input a json and customize some options.  

![截图](/images/quick.png "quick.png")

- Input JSON / JS like this `user`, `book` are the schema name .

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

- click `Batch Generate` button , If a success toast is shown, the APIs has been generated
  | Method | Url | Description |
  | ------ | ------------- | --------------- |
  | get | /api/user | list users |
  | get | /api/user/:id | get user detail |
  | post | /api/user | add user |
  | put | /api/user/:id | update user |
  | delete | /api/user/:id | delete user |
  | get | /api/book | list books |
  | get | /api/book/:id | get book detail |
  | post | /api/book | add book |
  | put | /api/book/:id | update book |
  | delete | /api/book/:id | delete book |
