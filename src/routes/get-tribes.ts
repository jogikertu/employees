import { FastifyInstance, RouteOptions } from "fastify";
import * as tribeController from '../controller/tribe.controller';

export default function getTribes(fastify: FastifyInstance): RouteOptions{
    return{
        method:'GET',
        url: '/api/tribes',

        handler: async(request, reply) => {
            const tribe = await tribeController.getTribes();
            reply.code(200).send(tribe);
    
        }
    }
}