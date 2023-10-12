import { FastifyInstance } from "fastify";
import deleteEmployee from "./delete-employee";
import getEmployees from "./get-employees";
import getEmployeesId from "./get-employees-id";
import groupEmployees from './get-grouped';
import getTribeId from "./get-tribe-id";
import getTribes from './get-tribes';
import searchByName from "./search-by-name";

export default async function (fastify: FastifyInstance) {
    fastify.route(getEmployees(fastify));
    fastify.route(getEmployeesId(fastify));
    fastify.route(deleteEmployee(fastify));
    fastify.route(getTribes(fastify));
    fastify.route(getTribeId(fastify));
    fastify.route(searchByName(fastify));
    fastify.route(groupEmployees(fastify));
}