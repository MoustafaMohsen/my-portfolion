export class workDialog{
    title?:string;
    description?:string;
    images?:Image[];
    buttons?:Button[];
}

export class  Image{
    src?:string="";
    alt?:string="";
}
export class Button{
    text?:string="";
    style?:any;
    class?:string="";
}