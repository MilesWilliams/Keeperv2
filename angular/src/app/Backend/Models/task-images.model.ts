export class TaskImage {
    image_id : number;
    task : number;
    image_url : string;
    
    constructor(image_id: number, task: number, image_url: string){
        this.image_id = image_id,
        this.task = task,
        this.image_url = image_url
    }
}