"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const routes_1 = __importDefault(require("./routes"));
const fastify = (0, fastify_1.default)();
fastify.register(routes_1.default);
async function appInit(fastify) {
    try {
        await fastify.listen({ host: '127.0.0.1', port: 3000 });
        console.log(`Server is running`);
    }
    catch (error) {
        console.log('Server is having problems');
        console.log(`Reason: ${error}`);
        process.exit(1);
    }
}
appInit(fastify);
//# sourceMappingURL=index.js.map