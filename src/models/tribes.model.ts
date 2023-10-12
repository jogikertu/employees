interface Tribe{
    id: number,
    name: string,
    department: string
}

export const tribe = [
    {
        "id":1,
        "name": "Interstellar",
        "department": "Other Engineering"
    },
    {
        "id":2,
        "name": "Billing",
        "department": "engireening"
    }
]

export async function getTribes(){
    return structuredClone(tribe);
}

export async function getTribe(id: number){
    return structuredClone(tribe[id]);
}

export { Tribe };
