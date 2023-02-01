import { Shape } from "./Shape";

export class Rectangle extends  Shape{
    public get length(): number {
        return this._length;
    }
    public set length(value: number) {
        this._length = value;
    }
    public get width(): number {
        return this._width;
    }
    public set width(value: number) {
        this._width = value;
    }
    constructor(theX: number, theY: number,
        private _width: number,private _length: number){
        super(theX,theY)
    }
    getInfo(): string {
        return super.getInfo()+ ` , length=${this._length} , width=${this._width}`;
    }
}