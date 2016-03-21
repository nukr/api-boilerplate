import Koa from 'koa'
import Router from 'koa-router'
import logger from 'koa-logger'

const app = new Koa()
const router = new Router()

router.get('/', (ctx, next) => {
  console.log(ctx.request.headers)
  ctx.body = process.env.HOSTNAME
})

router.get('/healthCheck', (ctx, next) => {
  ctx.set('Cache-Control', 'no-cache')
  ctx.status = 200
})

router.get('/health_check', (ctx, next) => {
  ctx.set('Cache-Control', 'no-cache')
  ctx.status = 200
})

app.use(logger())
app.use(router.routes())
app.listen(3000, () => {
  console.log('server listen on port 3000')
})
