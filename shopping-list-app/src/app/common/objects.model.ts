export class Recipie {

    public name: string;
    public description: string;
    public imgPath: string;

    constructor(name: string, description: string, imgPath: string) {
        this.name = name;
        this.description = description;
        this.imgPath = imgPath;
    }

}

export class Ingredient {

    public name: string;
    public amount: number;

    constructor(name: string, amount: number) {
        this.name = name;
        this.amount = amount;
    }

}
