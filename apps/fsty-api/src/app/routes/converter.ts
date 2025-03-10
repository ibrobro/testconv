import { FastifyInstance } from 'fastify';

interface MyFastifyInstance extends FastifyInstance {
  mongo: any;
}


/**
 * Accept coordinated data from react app
 */
export default async function (fastify: MyFastifyInstance) {
  fastify.get('/converter', async function () {
    return { message: 'Hello, this is coordinates converter API' };
  });

  fastify.post('/converter',  async (request, reply) => {
    const data: {lat: string, lng: string} = request.body as { lat: string; lng: string };
    let message = `Receives req to save lat:${data.lat} lng:${data.lng} to mongoDB`

    try{
      const status = await fastify.mongo.db.collection('coords_data').insertOne({
        lat: Number(data.lat),
        lng: Number(data.lng),
        notes: '',
        created_at: new Date(),
      });
      if(status) {
        message = `Data saved with id: ${status.insertedId}`
      } else {
        message = `Fail to save data`
      }
    } catch (e) {
      message = `Error saving data: ${e}`
    }

    return { message };
  });
}
