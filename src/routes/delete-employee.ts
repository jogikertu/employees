import { FastifyInstance, RouteOptions } from "fastify";
import * as employeeController from '../controller/employee.controller';
import { employeeBodySchema, employeeBodyType } from '../routes/schemas/employees.schema';

export default function deleteEmployee(fastify: FastifyInstance): RouteOptions{
    return{
        method:'DELETE',
        url: '/api/employees/:id',
        schema:{
            params: employeeBodySchema
        },

        handler: async(request, reply) => {
            const params = request.params as employeeBodyType;
            const employee = await employeeController.deleteEmployee(params.id);
            reply.code(200).send({success:true});
            /*if(employees.length < params.id){
                reply.code(400).send({ error: 'Invalid input' });
            } else{
                const employee = await employeeController.deleteEmployee(params.id);
                reply.code(200).send({success:true});
            }*/
        }
    }
}