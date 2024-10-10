export class MockData {
    itemId:number;
    name:string;
    description: string;
    size: string;
    color: string;
    stylenumber: string;
    price: number;
    image: string;
    qnty:number;

    

    constructor(
        itemId: number = 0,
        name: string = '',
        description: string = '',
        size: string = '',
        color: string = '',
        stylenumber: string = '',
        price: number = 0,
        image: string = '',
        qnty: number = 1  // Set default quantity to 1
    ) {
        this.itemId = itemId;
        this.name = name;
        this.description = description;
        this.size = size;
        this.color = color;
        this.stylenumber = stylenumber;
        this.price = price;
        this.image = image;
        this.qnty = qnty;
    }
}