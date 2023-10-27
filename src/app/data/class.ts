import { TrueFalse } from "./interfaces/trueFalse.interface";

export class actions implements TrueFalse {
    title="Page"
    message = '';
    isError=false;
    isLoading=false;
    isSuccess=false;
    toggle=undefined;

    constructor(   title?: string, toggel?: boolean){
        this.title = title;
        this.toggle=toggel;
        this.isError = false;
        this.isSuccess = false;
        this.message = '';
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