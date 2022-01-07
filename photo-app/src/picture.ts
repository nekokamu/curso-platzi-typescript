import { PhotoOrientation } from "./photo-orientation";
import { Item } from "./item";

export class Picture extends Item{
    constructor(id: number, 
                title: string,
                private _date: string,
                private _orientation: PhotoOrientation) {
        super(id, title);
    }
}