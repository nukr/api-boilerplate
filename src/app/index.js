import Koa from 'koa'
import Router from 'koa-router'

const app = new Koa()
const router = new Router()

router.get('/', (ctx, next) => {
  ctx.body = process.env.HOSTNAME
})

router.get('/healthCheck', (ctx, next) => {
  ctx.set('Cache-Control', 'no-cache')
  ctx.status = 200
})

app.use(router.routes())
app.listen(3000, () => {
  console.log('server listen on port 3000')
})
