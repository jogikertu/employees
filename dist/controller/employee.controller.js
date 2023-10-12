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
exports.groupEmployees = exports.searchByName = exports.deleteEmployee = exports.getEmployee = exports.getEmployees = void 0;
const employeesModel = __importStar(require("../models/employees.model"));
async function getEmployees() {
    try {
        return await employeesModel.getEmployees();
    }
    catch (error) {
        throw new Error('oh no');
    }
}
exports.getEmployees = getEmployees;
async function getEmployee(id) {
    try {
        return await employeesModel.getEmployee(id);
    }
    catch (error) {
        throw new Error('oh no');
    }
}
exports.getEmployee = getEmployee;
async function deleteEmployee(id) {
    try {
        return await employeesModel.deleteEmployee(id);
    }
    catch (error) {
        throw new Error('oh no');
    }
}
exports.deleteEmployee = deleteEmployee;
async function searchByName(query) {
    try {
        return await employeesModel.searchByName(query);
    }
    catch (error) {
        throw new Error('upsy daisy something went wrong');
    }
}
exports.searchByName = searchByName;
async function groupEmployees(query) {
    try {
        return await employeesModel.groupEmployees(query);
    }
    catch (error) {
        throw new Error('upsy daisy something went wrong');
    }
}
exports.groupEmployees = groupEmployees;
//# sourceMappingURL=employee.controller.js.map