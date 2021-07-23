const Koa = require('koa');
const app = new Koa();

// response
app.use(ctx => {
  ctx.body = {
      status: 'success',
      id: 1
  }
});

app.listen(8081);
