import * as employeesModel from '../models/employees.model';
import { EmployeeQueryParams } from '../routes/schemas/employees.schema';

export async function getEmployees(){
    try{
        return await employeesModel.getEmployees();
    }catch(error){
        throw new Error('oh no');
    }
}

export async function getEmployee(id: number){
    try{
        return await employeesModel.getEmployee(id);
    }catch(error){
        throw new Error('oh no');
    }
}

export async function deleteEmployee(id: number){
    try{
        return await employeesModel.deleteEmployee(id);
    }catch(error){
        throw new Error('oh no');
    }
}

export async function searchByName(query: EmployeeQueryParams) {
    try{
        return await employeesModel.searchByName(query);
    }catch(error){
        throw new Error('upsy daisy something went wrong')
    }
}

export async function groupEmployees(query: EmployeeQueryParams) {
    try{
        return await employeesModel.groupEmployees(query);
    }catch(error){
        throw new Error('upsy daisy something went wrong')
    }
}

