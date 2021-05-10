import { join } from 'desm'
import AutoLoad from 'fastify-autoload'

export default async function (fastify, opts) {
  // Place here your custom code!

  // Do not touch the following lines

  // This loads all plugins defined in plugins
  // those should be support plugins that are reused
  // through your application
  fastify.register(AutoLoad, {
    dir: join(import.meta.url, 'plugins'),
    options: Object.assign({}, opts)
  })

  // This loads all plugins defined in routes
  // define your routes in one of these
  fastify.register(AutoLoad, {
    dir: join(import.meta.url, 'routes'),
    options: Object.assign({}, opts)
  })
}
