const Router = require('koa-router');
const router = new Router();

router.get('/hello', (ctx) => {
  console.log(ctx.req)
});

router.post('/hello2', (ctx) => {
  console.log(ctx.req)
});

module.exports = router;
