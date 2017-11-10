export class Jour {
    jour: string;
    condition: string;
    img: string;
    constructor(jour: string, condition: string, img: string) {
        this.jour = jour;
        this.condition = condition;
        this.img = `assets/${{img}}`;
    }
}
