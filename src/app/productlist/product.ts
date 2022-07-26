export class Product {
    productId : string;
    productName : string;
    productQuantity : number;
    price : number;
    category : string;
    manufacturer : string;
    
    constructor(productId : string, productName : string, productQuantity : number, price : number,  category : string, manufacturer:string){
       
        this.productId = productId;
        this.productName = productName;
        this.productQuantity = productQuantity;
        this.price = price;
        this.category = category;
        this.manufacturer = manufacturer;
       
    }

   
}




