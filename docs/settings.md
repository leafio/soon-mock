---
outline: deep
---

# Settings

## API Agent

If a client request a route not defined in api or the api is disabled , soon-mock would forward this request to the agent url.
The full url is merged like:

```ts
agentUrl + apiUrl
```

## Url Prefix
A universal prefix for all the api url. 
## Mock
Define the default mock method of each base data type . 
## Schema
These as settings when a new schema is added , it should be like.
### Primary Keys
It would set the primary key by this sequent

### res.success

Could used to send uniformed success response.

```ts
(data) => res.json({ code: 0, msg: "", data });
```

### res.error

Could used to send uniformed error response.

```ts
(err) => res.json({ code: 500, err: err });
```

### Authorization

Authorization is a middleware for Express.

```ts
(code) => (req, res, next) => {
  const token = req.headers.authorization
  if (token) {
    jwt.verify(token, 'JWT_SECRET', async (err, user) => {
      if (err)  return res.sendStatus(403)
      const { username } = user
      if (code) {
        //** To check the user if has the `code` right here */
      }
      req.username = username
      next()
    })
  } else {
    res.sendStatus(401)
  }

```

- if you use jwt token, you can simply put your codes where the code comments shows.
  A login route `action` may be like the code below.

```ts
res.success({ token: jwt.sign({ username: "admin" }, "JWT_SECRET") });
```

- Or you could write a total fake verification logic to replace it .
