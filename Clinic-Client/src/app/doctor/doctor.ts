export interface Doctor{
    [x: string]: any;
    id?:number;
    name:string;
    age:number;
    gender:string;
    speciality:string;
    numberOfPatients:number;
}