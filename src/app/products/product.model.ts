export class Product {
    _id: string;
    barcodeId: string;
    title: string;
    brand: string;
    type: string;
    imageUrl: string;
    ingredients: Ingredients [];
}

export class Ingredients {
    name: string;
    description: string;
    CIR: string;
    EWG: string;
}