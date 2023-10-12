import { FastifyInstance, RouteOptions } from "fastify";
import * as employeeController from '../controller/employee.controller';

export default function getEmployees(fastify: FastifyInstance): RouteOptions{
    return{
        method:'GET',
        url: '/api/employees',

        handler: async(request, reply) => {
            const employee = await employeeController.getEmployees();
            reply.code(200).send(employee);
        }
    }
}