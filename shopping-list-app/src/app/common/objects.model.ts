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

export class Ingredients {
    public name: string;

    constructor(name: string) {
        this.name = name;
    }
}
