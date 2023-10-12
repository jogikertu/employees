import { Static, Type } from '@sinclair/typebox';

export const employeeBodySchema = Type.Object({
    id: Type.Number(),
    name: Type.Optional(Type.String({minLength: 1})),
    title: Type.Optional(Type.String({minLength: 1}))
})

export type employeeBodyType = Static<typeof employeeBodySchema >;

export const tribeBodySchema = Type.Object({
    id: Type.Number(),
    name: Type.Optional(Type.String({minLength: 1})),
    department: Type.Optional(Type.String({minLength: 1}))
})

export type tribeBodyType = Static<typeof tribeBodySchema >;

export const employeeQuerySchema = Type.Object({
    name: Type.Optional(Type.String({ minLength: 1 })),
    title: Type.Optional(Type.String({ minLength: 1 })),
    tribe: Type.Optional(Type.String({ minLength: 1 })),
});

export type EmployeeQueryParams = Static<typeof employeeQuerySchema>;