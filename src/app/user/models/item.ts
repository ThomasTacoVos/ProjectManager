export class Item{
    name: string;
    bgColor: string;
    
    constructor(name: string, bgColor = "red"){
        this.name= name;
        this.bgColor= bgColor;


    }
}