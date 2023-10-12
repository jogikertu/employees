"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTribe = exports.getTribes = exports.tribe = void 0;
exports.tribe = [
    {
        "id": 1,
        "name": "Interstellar",
        "department": "Other Engineering"
    },
    {
        "id": 2,
        "name": "Billing",
        "department": "engireening"
    }
];
async function getTribes() {
    return structuredClone(exports.tribe);
}
exports.getTribes = getTribes;
async function getTribe(id) {
    return structuredClone(exports.tribe[id]);
}
exports.getTribe = getTribe;
//# sourceMappingURL=tribes.model.js.map