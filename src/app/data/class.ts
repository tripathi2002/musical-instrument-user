import { TrueFalse } from "./interface";

export class popupBase implements TrueFalse {
    title="Page"
    message = '';
    isError=false;
    isLoading=false;
    isSuccess=false;

    constructor(){

    }

    falseAll(): void {
        this.isError=this.isLoading=this.isSuccess= false;
    }
    trueLoading():void {
        this.isError=this.isSuccess=false;
        this.isLoading=true;
    }
    trueSuccess(message:string): void{
        this.message=message;
        this.isError=this.isLoading=false;
        this.isSuccess=true;
    }
    trueError(message: string):void{
        this.message=message;
        this.isSuccess=this.isLoading=false;
        this.isError=true;
    }
    timelate(){
        setTimeout(function(){
            this.falseAll();
        }.bind(this), 3000);
    }
}