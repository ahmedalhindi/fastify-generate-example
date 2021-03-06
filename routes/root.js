export default async function (fastify, opts) {
  fastify.get('/', async function (request, reply) {
    return { root: true }
  })
  fastify.get('/ping', async function (request, reply) {
    return { ping: "pong" }
  })
}
