---
outline: deep
---

# API Auth
## Settings API Section
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
res.success({token:jwt.sign({username:"admin"},"JWT_SECRET")})
```
- Or you could write a total fake verification logic to replace it .

## API Authorization Field
You could enable and specialize a string here. The string would pass to the middleware.
When it enables , this route would add the auth middleware which runs before the action.