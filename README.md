# soon-mock

#### a mock server can add apis in seconds with web UI

> Mock as Real Server so Soon

### [Document](https://leafio.github.io/soon-mock)

### [Full Example](https://github.com/leafio/soon-admin-vue3)

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

3. Click the button `Batch Generate`.If a sucess toast is shown, the APIs has been generated.

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



## Contact Me
Email: leafnote@outlook.com