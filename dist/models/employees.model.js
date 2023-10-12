"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.groupEmployees = exports.searchByName = exports.deleteEmployee = exports.getEmployee = exports.getEmployees = exports.employees = void 0;
exports.employees = [
    {
        "id": 1,
        "name": "John Doe",
        "title": "Chief Happinnes Officer",
        "tribe": {
            "id": 1,
            "name": "Interstellar",
            "department": "Other Engineering"
        }
    },
    {
        "id": 1,
        "name": "Happy Guy",
        "title": "Engineering",
        "tribe": {
            "id": 1,
            "name": "Interstellar",
            "department": "Other Engineering"
        }
    },
    {
        "id": 2,
        "name": "Jane Doe",
        "title": "Chief Fun Officer",
        "tribe": {
            "id": 2,
            "name": "Billing",
            "department": "engireening"
        }
    },
];
async function getEmployees() {
    return structuredClone(exports.employees);
}
exports.getEmployees = getEmployees;
async function getEmployee(id) {
    return structuredClone(exports.employees[id]);
}
exports.getEmployee = getEmployee;
async function deleteEmployee(id) {
    exports.employees.splice(id, 1);
}
exports.deleteEmployee = deleteEmployee;
async function searchByName(query) {
    let filteredEmployees = exports.employees.filter(employee => employee.name.includes(query.name));
    if (query.title) {
        filteredEmployees = exports.employees.filter(employee => employee.title.includes(query.title));
    }
    if (query.tribe) {
        filteredEmployees = exports.employees.filter(employee => employee.tribe.name.includes(query.tribe));
    }
    return filteredEmployees;
}
exports.searchByName = searchByName;
//??
async function groupEmployees(query) {
    let groupedEmployees = new Map();
    exports.employees.forEach((employee) => {
        const tribeName = employee.tribe.name;
        if (!groupedEmployees.has(tribeName)) {
            groupedEmployees.set(tribeName, []);
        }
        groupedEmployees.get(tribeName).push(employee);
    });
    const groupedEmployeesArray = Array.from(groupedEmployees, ([tribe, employees]) => ({ tribe, employees }));
    return groupedEmployeesArray;
}
exports.groupEmployees = groupEmployees;
//# sourceMappingURL=employees.model.js.map