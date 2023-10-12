"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.employeeQuerySchema = exports.tribeBodySchema = exports.employeeBodySchema = void 0;
const typebox_1 = require("@sinclair/typebox");
exports.employeeBodySchema = typebox_1.Type.Object({
    id: typebox_1.Type.Number(),
    name: typebox_1.Type.Optional(typebox_1.Type.String({ minLength: 1 })),
    title: typebox_1.Type.Optional(typebox_1.Type.String({ minLength: 1 }))
});
exports.tribeBodySchema = typebox_1.Type.Object({
    id: typebox_1.Type.Number(),
    name: typebox_1.Type.Optional(typebox_1.Type.String({ minLength: 1 })),
    department: typebox_1.Type.Optional(typebox_1.Type.String({ minLength: 1 }))
});
exports.employeeQuerySchema = typebox_1.Type.Object({
    name: typebox_1.Type.Optional(typebox_1.Type.String({ minLength: 1 })),
    title: typebox_1.Type.Optional(typebox_1.Type.String({ minLength: 1 })),
    tribe: typebox_1.Type.Optional(typebox_1.Type.String({ minLength: 1 })),
});
//# sourceMappingURL=employees.schema.js.map