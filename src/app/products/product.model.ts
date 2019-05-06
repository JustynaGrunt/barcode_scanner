export class Product {
    _id: string;
    barcodeId: string;
    title: string;
    brand: string;
    type: string;
    details: string;
    imageUrl: string;
    ingredients: Ingredients [];
    valueEWG: any;
    valueEWG_percent: string;
    valueCIR: any;
    valueCIR_percent: string;
}

export class Ingredients {
    name: string;
    description: string;
    CIR: string;
    EWG: string;
}