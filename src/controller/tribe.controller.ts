import * as tribeModel from '../models/tribes.model';

export async function getTribes(){
    try{
        return await tribeModel.getTribes();
    }catch(error){
        throw new Error('oh no');
    }
}

export async function getTribe(id: number){
    try{
        return await tribeModel.getTribe(id);
    }catch(error){
        throw new Error('oh no');
    }
}