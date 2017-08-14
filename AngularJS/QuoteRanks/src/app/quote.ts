export class Quote{
    text:string;
    author:string;
    votes:number = 0;

    constructor(){
        this.text   = "";
        this.author = "";
        this.votes  = 0;
    }
}
