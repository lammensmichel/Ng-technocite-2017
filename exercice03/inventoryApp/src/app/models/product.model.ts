export class Product {
    constructor(
        public name: string,
        public sku: string,
        public image: string,
        public price: number,
        public qte: number,
        public categories: Array<string>) {
    }
}
