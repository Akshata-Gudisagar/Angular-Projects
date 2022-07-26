export class Product{
    ProductID: string;
    ProductName: string;
    ProductQuantity: number;
    ProductPrice: number;
   

    constructor(ProductID:string="",ProductName:string="",ProductQuantity:number,ProductPrice:number){
    this.ProductID = ProductID;
    this.ProductName = ProductName;
    this.ProductQuantity = ProductQuantity;
    this.ProductPrice = ProductPrice;
    
    };
}