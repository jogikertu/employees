import { EmployeeQueryParams } from '../routes/schemas/employees.schema';
import * as Tribes from './tribes.model';

interface Employee{
    id: number,
    name: string,
    title: string,
    tribe: typeof Tribes

}

export const employees = [
    { 
        "id":1,
        "name": "John Doe",
        "title": "Chief Happinnes Officer",
        "tribe":{
            "id":1,
            "name": "Interstellar",
            "department": "Other Engineering"
        }
    },
    { 
        "id":1,
        "name": "Happy Guy",
        "title": "Engineering",
        "tribe":{
            "id":1,
            "name": "Interstellar",
            "department": "Other Engineering"
        }
    },
    { 
        "id":2,
        "name": "Jane Doe",
        "title": "Chief Fun Officer",
        "tribe":{        
            "id":2,
            "name": "Billing",
            "department": "engireening"
        }
    },
]

export async function getEmployees(){
    
    return structuredClone(employees);
}

export async function getEmployee(id: number){
    return structuredClone(employees[id]);
}

export async function deleteEmployee(id: number): Promise<void>{
    employees.splice(id, 1);
}

export async function searchByName(query: EmployeeQueryParams) {
    let filteredEmployees = employees.filter(employee => employee.name.includes(query.name as string));

    if(query.title){
        filteredEmployees  = employees.filter(employee => employee.title.includes(query.title as string));
    }
    if(query.tribe){
        filteredEmployees  = employees.filter(employee => employee.tribe.name.includes(query.tribe as string));
    }

    return filteredEmployees;
}

//??
export async function groupEmployees(query: EmployeeQueryParams) {
    let groupedEmployees = new Map();

    employees.forEach((employee) => {
        const tribeName = employee.tribe.name;

        if (!groupedEmployees.has(tribeName)) {
            groupedEmployees.set(tribeName, []);
        }

        groupedEmployees.get(tribeName).push(employee);
    });

    const groupedEmployeesArray = Array.from(groupedEmployees, ([tribe, employees]) => ({ tribe, employees }));

    return groupedEmployeesArray;
}

export { Employee };

