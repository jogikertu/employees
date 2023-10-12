import { FastifyInstance, RouteOptions } from "fastify";
import * as tribeController from '../controller/tribe.controller';
import { tribeBodySchema, tribeBodyType } from '../routes/schemas/employees.schema';

export default function getTribeId(fastify: FastifyInstance): RouteOptions{
    return{
        method:'GET',
        url: '/api/tribes/:id',
        schema:{
            params: tribeBodySchema
        },

        handler: async(request, reply) => {
            const params = request.params as tribeBodyType;
            const tribe = await tribeController.getTribe(params.id);
            if(!tribe){
                reply.code(404).send({ error: 'Tribe not found' });
            }else{
                reply.code(200).send(tribe);
            }
        }
    }
}