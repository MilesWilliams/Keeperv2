export class TaskFile {
    file_id : number;
    task : number;
    file_url : string;
    
    constructor(file_id: number, task: number, file_url: string){
        this.file_id = file_id,
        this.task = task,
        this.file_url = file_url
    }
}