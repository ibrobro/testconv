import { FastifyInstance } from 'fastify';

/**
 * Accept coordinated data from react app
 * @TODO saveto mongoDB
 */
export default async function (fastify: FastifyInstance) {
  fastify.get('/converter', async function () {
    return { message: 'Hello, this is coordinates converter API' };
  });

  fastify.post('/converter',  async (request, reply) => {
    const data: {lat: string, lng: string} = request.body as { lat: string; lng: string };
    const message = `Receives req to save lat:${data.lat} lng:${data.lng} to mongoDB`
    return { message };
  });
}
