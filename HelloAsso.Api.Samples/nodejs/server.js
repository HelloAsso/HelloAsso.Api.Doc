const fastify = require('fastify')({
  logger: true
})



// Test de la mise en place de l'api
fastify.get('/', async (request, reply) => {
  reply.send('Je suis actif et prêt à recevoir des requêtes')
})

// Réception des infos des campagnes
fastify.post('/campaigns', async (request, reply) => {

  const { body } = request

  console.log(body)

  return body
})

// Réception des infos des paiements
fastify.post('/payments', async (request, reply) => {

  const { body } = request

  console.log(body)

  return body
})

// Run the server!
const start = async () => {
  try {
    await fastify.listen(3000)
    fastify.log.info(`server listening on ${fastify.server.address().port}`)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()
