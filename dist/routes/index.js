"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const delete_employee_1 = __importDefault(require("./delete-employee"));
const get_employees_1 = __importDefault(require("./get-employees"));
const get_employees_id_1 = __importDefault(require("./get-employees-id"));
const get_grouped_1 = __importDefault(require("./get-grouped"));
const get_tribe_id_1 = __importDefault(require("./get-tribe-id"));
const get_tribes_1 = __importDefault(require("./get-tribes"));
const search_by_name_1 = __importDefault(require("./search-by-name"));
async function default_1(fastify) {
    fastify.route((0, get_employees_1.default)(fastify));
    fastify.route((0, get_employees_id_1.default)(fastify));
    fastify.route((0, delete_employee_1.default)(fastify));
    fastify.route((0, get_tribes_1.default)(fastify));
    fastify.route((0, get_tribe_id_1.default)(fastify));
    fastify.route((0, search_by_name_1.default)(fastify));
    fastify.route((0, get_grouped_1.default)(fastify));
}
exports.default = default_1;
//# sourceMappingURL=index.js.map