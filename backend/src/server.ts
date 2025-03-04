import Fastify from 'fastify'

const server = Fastify()

server.get('/api/hello', async (request, reply) => {
  return { message: 'Hello from Fastify Backend!' }
})

const start = async () => {
  try {
    await server.listen({ port: 3001 }) // 後端伺服器監聽 3001 端口
    console.log('Fastify server listening on port 3001')
  } catch (err) {
    server.log.error(err)
    process.exit(1)
  }
}

start()