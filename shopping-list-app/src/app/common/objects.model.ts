export class Recipie {

    public name: string;
    public description: string;
    public imgPath: string;
    public ingredients: Ingredient[];

    constructor(name: string, description: string, imgPath: string, ingredients: Ingredient[]) {
        this.name = name;
        this.description = description;
        this.imgPath = imgPath;
        this.ingredients = ingredients;
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
