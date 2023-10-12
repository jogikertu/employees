import { FastifyInstance, RouteOptions } from "fastify";
import * as employeeController from '../controller/employee.controller';
import { employeeBodySchema, employeeBodyType } from '../routes/schemas/employees.schema';

export default function getEmployeesId(fastify: FastifyInstance): RouteOptions{
    return{
        method:'GET',
        url: '/api/employees/:id',
        schema:{
            params: employeeBodySchema
        },

        handler: async(request, reply) => {
            const params = request.params as employeeBodyType;
            const employee = await employeeController.getEmployee(params.id);
            if(!employee){
                reply.code(404).send({ error: 'Employee not found' });
            }else{
                reply.code(200).send(employee);
            }
        }
    }
}