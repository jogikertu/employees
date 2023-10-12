"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const tribeController = __importStar(require("../controller/tribe.controller"));
const employees_schema_1 = require("../routes/schemas/employees.schema");
function getTribeId(fastify) {
    return {
        method: 'GET',
        url: '/api/tribes/:id',
        schema: {
            params: employees_schema_1.tribeBodySchema
        },
        handler: async (request, reply) => {
            const params = request.params;
            const tribe = await tribeController.getTribe(params.id);
            if (!tribe) {
                reply.code(404).send({ error: 'Tribe not found' });
            }
            else {
                reply.code(200).send(tribe);
            }
        }
    };
}
exports.default = getTribeId;
//# sourceMappingURL=get-tribe-id.js.map