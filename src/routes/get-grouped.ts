import { FastifyInstance, RouteOptions } from "fastify";
import * as employeeController from '../controller/employee.controller';
import { EmployeeQueryParams, employeeQuerySchema } from '../routes/schemas/employees.schema';


export default function searchEmployees(fastify: FastifyInstance): RouteOptions {
    return {
        method: 'GET',
        url: '/api/reports/employees',
        schema: {
            querystring: employeeQuerySchema,
        },
        handler: async (request, reply) => {
            const query = request.query as EmployeeQueryParams;
            const employees = await employeeController.groupEmployees(query);

            reply.code(200).send(employees);
        },
    };
}