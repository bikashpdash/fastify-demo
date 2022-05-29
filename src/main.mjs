import Fastify from 'fastify'
const fastify = Fastify({
  logger: true
})

// Declare a route
fastify.get('/', (request, reply)=> {
  reply.send({ hello: 'world' })
})

fastify.get('/query',  (request, reply)=> {    
    reply.send(request.query)
  })

const PORT = process.env.APP_PORT || 3000;
// Run the server!
fastify.listen(PORT, function (err, address) {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
  // Server is now listening on ${address}
})